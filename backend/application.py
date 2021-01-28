from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from flask_jsonpify import jsonify

import os
import praw
import pprint

application = Flask(__name__)
# Maintain order of dict
application.config['JSON_SORT_KEYS'] = False

api = Api(application)
# Handle CORS
CORS(application)
application.config['CORS_HEADERS'] = 'Content-Type'

# Connect to reddit
reddit = praw.Reddit(
    client_id = "k0rH5EHwOrPpFA",
    client_secret = "0x4LkRdrD8obIMAO3hd4sGBUoAL3Ow",
    user_agent = "andrewlinner"
)

@application.route("/")
@cross_origin('*')

def hello():
    return jsonify({'Hello':'This is the python server for the subreddit-rest-api.'})

def subreddit_json(subreddit_name, num_articles):
    '''
    Returns a json object containing information about the subreddit

    Args: 
        subreddit_name (string): The name of the subreddit
        num_aritcles (int): The number of articles to return
    
    '''
    subreddit_title = reddit.subreddit(subreddit_name).title
    subreddit_articles = reddit.subreddit(subreddit_name).top(limit = num_articles)

    result = {'subreddit': subreddit_title} 
    articles = {}

    # Add the articles to result
    for a in subreddit_articles:
        articles[a.title] = {'url': a.url, 'score': a.score}
    result['articles'] = articles

    return jsonify(result)

# Default GET method for subreddits, returns 9 articles
class Subreddits(Resource):
    def get(self, subreddit_name):
        return subreddit_json(subreddit_name, 9) 

# GET method for subreddits to display more articles
class SubredditsMore(Resource):
    def get(self, subreddit_name, num_articles):
        return subreddit_json(subreddit_name, int(num_articles))

api.add_resource(Subreddits, '/subreddits/<subreddit_name>')
api.add_resource(SubredditsMore, '/subreddits/<subreddit_name>/<num_articles>')

if __name__ == "__main__": 
    application.run()

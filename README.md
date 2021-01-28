# CiscoRedditChallenge REST API & Angular UI

This application is a webpage created using angular components to display the top subreddit posts based on a user-input subreddit. The top articles and relevant information of the given subreddit are accessed from the Reddit public API and passed to the angular frontend from a python REST API backend server. An express node server was used to redirect routes to the angular application, and then deploy to Amazon Elastic Beanstalk, accessible here: 

http://subreddittopposts-env.eba-usmyq88r.us-east-1.elasticbeanstalk.com/

### Launching application locally
- Download the repository code
- In the command line, change directory to the backend and run "python3 application.py"
- Open new directory and change directory to the node server and run "node server.js"
- Go to http://localhost:4200/

### Development Details
The stack of this application is Python -> Angular -> Node -> AWS Elastic Beanstalk 

The Angular website's homepage displays an input field for the desired subreddit. Once entered and submitted, the application will attempt to connect to the python REST API to find the given subreddit, if successful the application will route to the view-top-posts component displaying several of the top articles of the subreddit. The article information is received from a GET request to the python server that parses the Reddit Public API to return a json object containing relevant data. Each article will be displayed with the title, number of upvotes, and an associated link or image if possible. If an invalid subreddit was entered, an error message will be displayed on the homepage. On the view-top-posts page, the user can return to the homepage to lookup another subreddit, or display more top articles using the "Show More" button. The Node server is used to redirect routes to the angular application and uses the angular's dist folder (build folder containing compiled code) to run. The python REST API is hosted on one AWS EBS environment and the Node server and angular components were zipped and deployed to another AWS EBS environment.

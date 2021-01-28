# CiscoRedditChallenge REST API & Angular UI


This application is a webpage created using angular components to display the top subreddit posts based on a user-input subreddit. The top articles and relevant information of the given subreddit are accessed from the Reddit public API and passed to the angular frontend from a python REST API backend server. The application was deployed to Heroku, accessible here:


The python REST API code is in a seperate repository for deployment purposes located here:

### Launching application locally
- Download the repository code
- In the command line, change directory to

### Development Details
The stack of this application is Python -> Angular -> Heroku 

The Angular website's homepage displays an input field for the desired subreddit. Once entered and submitted, the application will attempt to connect to the python REST API to find the given subreddit, if successful the application will route to the view-top-posts component displaying several of the top articles of the subreddit. The article information is received from a GET request to the python server that parses the Reddit Public API to return a json object containing relevant data. Each article will be displayed with the title, number of upvotes, and an associated link or image if possible. If an invalid subreddit was entered, an error message will be displayed on the homepage. On the view-top-posts page, the user can return to the homepage to lookup another subreddit, or display more top articles using the "Show More" button. 
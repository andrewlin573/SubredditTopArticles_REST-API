import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  req_url = 'http://flask-env2.eba-zefhpa3j.us-east-1.elasticbeanstalk.com//subreddits/';
  
  constructor() { }

  getSubredditOptions = (subreddit_name, num_articles) => 
    fetch(this.req_url + subreddit_name + '/' + num_articles)
      .then(res => res.json());
}

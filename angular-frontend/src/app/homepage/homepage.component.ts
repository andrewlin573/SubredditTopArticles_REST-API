import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  subreddit_name = new FormControl('');

  constructor(private router: Router, private service: ApiClientService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    // Display loading
    document.getElementById('error-msg').innerHTML = 'Loading ...';

    // Check if the input subreddit is valid
    this.service.getSubredditOptions(this.subreddit_name.value, 1)
    .then(res => {
      if (res.message) {
        // Invalid subreddit
        document.getElementById('error-msg').innerHTML = this.subreddit_name.value + ' is not a valid subreddit. Try again.'
      } else {
        // Route to view-top-posts of the subreddit
        let path = 'top-posts/' + this.subreddit_name.value;
        this.router.navigate([path]);
      }
    })
  }

}

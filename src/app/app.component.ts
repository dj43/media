import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    var users = {
      "users": [{
          "userid": "abc@media.com",
          "password": "abc123",
          "username": "tom"
        },
        {
          "userid": "def@media.com",
          "password": "def123",
          "username": "dick"
        }
      ]
    }

    localStorage.setItem("users",JSON.stringify(users))  
  }

  title = 'inter';

}

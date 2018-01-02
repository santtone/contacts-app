import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'ca-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user.username, this.user.password)
      .subscribe(() => {
        console.log('Navigate to app');
      });
  }

}

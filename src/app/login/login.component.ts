import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any = {
    username: 'doggy.huang@gmail.com',
    password: '',
    rememberMe: true
  };

  constructor(private router: Router) { }

  ngOnInit() {
    document.body.className = 'bg-gradient-primary';
  }

  login() {
    console.log('執行登入', this.data);

    // 登入動作...
    // localStorage.setItem('apiKey', '1111');
    // this.router.navigate(['/']);
  }
}

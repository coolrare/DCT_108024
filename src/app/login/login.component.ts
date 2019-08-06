import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any = {
    username: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
    document.body.className = 'bg-gradient-primary';
  }

  login(form: NgForm) {

    console.log(form.submitted);

    if (form.valid) {
      console.log('執行登入', this.data);
    }

    // 登入動作...
    // localStorage.setItem('apiKey', '1111');
    // this.router.navigate(['/']);
  }
}

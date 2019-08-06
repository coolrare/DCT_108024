import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      firstName: ['',
          [Validators.required]
      ],
      lastName: ['',
          [Validators.required]
      ],
      email: ['',
          [Validators.required, Validators.email]
      ],
      pw: ['',
          [Validators.required, Validators.minLength(3)]
      ],
      pw2: ['',
          [Validators.required, Validators.minLength(3)]
      ]
    });
  }

  doRegister(form: NgForm) {
    if (this.form.valid) {
      console.log('送出表單', this.form.value);
    }
  }

}

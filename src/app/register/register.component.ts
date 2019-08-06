import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormArray } from '@angular/forms';

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
      firstName: ['Will',
          [Validators.required]
      ],
      lastName: ['Huang',
          [Validators.required]
      ],
      emails: this.fb.array([
        this.fb.control('', [Validators.required, Validators.email]),
        this.fb.control('', [Validators.required, Validators.email])
      ]),
      pw: ['',
          [Validators.required, Validators.minLength(3)]
      ],
      pw2: ['',
          [Validators.required, Validators.minLength(3)]
      ]
    });
  }

  addEmail() {
    const emails = this.form.get('emails') as FormArray;
    emails.push(this.fb.control('', [Validators.required, Validators.email]));
  }

  doRegister() {
    if (this.form.valid) {
      console.log('送出表單', this.form.value);
    }
  }

}

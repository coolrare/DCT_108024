import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  defaultData = {
    firstName: 'Will',
    lastName: 'Huang',
    emails: [
      'doggy.huang@gmail.com',
      'will.huang@miniasp.com'
    ],
    pw: '123',
    pw2: '123'
  };

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

    this.form.setValue(this.defaultData);

  }

  resetForm() {
    this.form.reset(this.defaultData);
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {
  validateForm: FormGroup;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls[i]) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  // 异步的用户名验证
  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      if (control.value === 'Bob') {
        // you have to return `{error: true}` to mark it as an error event
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null)
      }
      observer.complete()
      // setTimeout(() => {
      //   if (control.value === 'Bob') {
      //     // you have to return `{error: true}` to mark it as an error event
      //     observer.next({ error: true, duplicated: true });
      //   } else {
      //     observer.next(null)
      //   }
      //   observer.complete()
      // }, 1000)
    })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required], [this.userNameAsyncValidator]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      remember: [true]
    });
  }

}

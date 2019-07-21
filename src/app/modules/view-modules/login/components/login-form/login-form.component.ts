import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms'
import { Observable, Observer } from 'rxjs'
import { RouterService } from '../../../../../services/router/router.service'
import { UserService } from '../../../../../services/user/user.service'
import { NzMessageService } from 'ng-zorro-antd'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: RouterService,
    private user: UserService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required], [this.userNameAsyncValidator]],
      password: [null, [Validators.required, this.passwordSyncValidator]],
      remember: [true]
    })
  }
  
  @Output() toggleSpin = new EventEmitter<boolean>()

  validateForm: FormGroup

  submitForm(): void {
    // 点击时进行表单校验
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls[i]) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (!this.validateForm.invalid) {
      // 通过表单校验, 验证登录
      this.toggleSpin.emit(true)
      // 模拟异步登录
      setTimeout(() => {
        this.user.setBasicInfo({
          name: 'admin',
          age: 24,
          sex: 'm',
          email: 'xxxxx@qq.com'
        })
        if (this.validateForm.controls['remember'].value) {
          localStorage.token = 'admin'
        } else {
          sessionStorage.token = 'admin'
        }
        this.message.success('登录成功！', { nzDuration: 2000 }).onClose.subscribe(() => {
          this.router.navigateRoute(['/'])
        })
      }, 3000)
    }
  }

  // 自定义异步的用户名验证
  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'Bob') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null)
        }
        observer.complete()
      }, 1000)
    })
  // 自定义同步的密码验证
  passwordSyncValidator = (control: FormControl) => {
    return typeof control.value === 'string' && control.value.length >= 1 && control.value.length < 6 ? { minLengthError: true } : null
  }
}

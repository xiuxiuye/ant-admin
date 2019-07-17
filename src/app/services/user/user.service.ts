import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private basicInfo: object;
  initUser() {
    this.basicInfo = {
      name: 'admin',
      sex: 'man',
      age: 23,
      phone: '18810987345',
      email: '1659952775@qq.com',
      authority: 'SSS',
      isLogin: false
    };
  }
  getBasicInfo(): object {
    return this.basicInfo;
  }
  constructor() {
    this.initUser();
  }

}

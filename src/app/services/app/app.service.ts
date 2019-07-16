import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private menuList: object[]
  private openedPageTagList: object[]
  private currentOpenedPage: object
  // 初始化
  initApp() {
    this.menuList = []
    this.openedPageTagList = []
  }
  // menuList get & set
  getMenuList(): object[] {
    return this.menuList
  }
  setMenuList(menus: object[]): void {
    this.menuList = this.menuList.concat(menus)
  }
  // openedPageTagList 相关方法
  getOpenedPageTagList(): object[] {
    return this.openedPageTagList
  }
  addOpenedPageTagList(page: object): void {
    this.openedPageTagList.push(page)
  }
  removeOpenedPageTagList(index: number): void {
    this.openedPageTagList.splice(index, 1)
  }
  resetOpenedPageTagList(): void {
    this.openedPageTagList = []
  }
  // 打开新页面
  openNewPage(page: object): void {
    this.setCurrentOpenedPage(page)
    this.addOpenedPageTagList(page)
  }
  // page-tag 相关方法
  closePageTag(index: number): void {
    this.removeOpenedPageTagList(index)
  }
  closeOtherPageTags(): void {

  }
  closeAllPageTags(): void {
    this.resetOpenedPageTagList()
  }
  // currentOpenedPage get & set
  getCurrentOpenedPage(): object {
    return this.currentOpenedPage
  }
  setCurrentOpenedPage(page): void {
    this.currentOpenedPage = page
  }
  // 路由导航成功后设置当前的路由页面
  constructor() {
    this.initApp()
  }
}

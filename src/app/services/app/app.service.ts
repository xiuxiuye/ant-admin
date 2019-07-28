import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private menuList: object[]
  private pageOpenedList: any[]
  private currentOpenedPage: object
  // 初始化
  initApp() {
    this.menuList = []
    if (sessionStorage.pageOpenedList) {
      this.pageOpenedList = JSON.parse(sessionStorage.pageOpenedList)
      if (!this.pageOpenedList.length || this.pageOpenedList.length === 0) {
        this.resetPageOpenedList()
      }
    } else {
      this.resetPageOpenedList()
    }
  }
  // menuList get & set
  getMenuList(): object[] {
    return this.menuList
  }
  setMenuList(menus: object[]): void {
    this.menuList = this.menuList.concat(menus)
  }
  // openedPageTagList 相关方法
  getPageOpenedList(): object[] {
    return this.pageOpenedList
  }
  addPageOpenedList(page: any): void {
    // 检查page是否已存在pageOpenedList中
    let isExit = false
    this.pageOpenedList.forEach(item => {
      if (item.path === page.path) {
        item.selected = true
        isExit = true
      } else {
        item.selected = false
      }
    })
    if (!isExit) {
      this.pageOpenedList.push(page)
    }
    // 本地保存打开的页面
    sessionStorage.pageOpenedList = JSON.stringify(this.pageOpenedList)
    if (page.type && page.type === 'menu') {
      // 检查page是否是菜单项，如果是则更新相应项的selected
      this.checkPageOpenedType(page, this.menuList)
    }
  }
  checkPageOpenedType(page: any, menus: any[], parent=null): boolean {
    let matchSuccess = false
    menus.forEach(item => {
      if (item.children) {
        matchSuccess = this.checkPageOpenedType(page, item.children, item)
      } else {
        if (item.path === page.path) {
          item.selected = true
          matchSuccess = true
        } else {
          item.selected = false
        }
      }
    })
    if (parent) {
      parent.selected = matchSuccess
    }
    return matchSuccess
  }
  removePageOpenedList(index: number): void {
    this.pageOpenedList.splice(index, 1)
  }
  resetPageOpenedList(): void {
    this.pageOpenedList = [{ title: '首页', type: "menu", path: '/home', selected: true }]
    // 本地保存
    sessionStorage.pageOpenedList = JSON.stringify(this.pageOpenedList)
  }
  // 打开新页面
  openNewPage(page: object): void {
    this.setCurrentOpenedPage(page)
    this.addPageOpenedList(page)
  }
  // page-tag 相关方法
  closePageTag(index: number): void {
    console.log(index)
    // this.removePageOpenedList(index)
  }
  closeOtherPageTags(currentRoutePath): void {

  }
  closeAllPageTags(): void {
    this.resetPageOpenedList()
  }
  // currentOpenedPage get & set
  getCurrentOpenedPage(): any {
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

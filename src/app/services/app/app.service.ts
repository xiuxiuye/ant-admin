import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private menuList: object[]
  private openedPageTagList: object[]
  private currentOpenedPage: object
  initApp() {
    this.menuList = []
    this.openedPageTagList = []
  }
  getMenuList(): object[] {
    return this.menuList
  }
  setMenuList(menus: object[]): void {
    this.menuList = this.menuList.concat(menus)
  }
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
  openPage(page: object): void {
    this.setCurrentOpenedPage(page)
    this.addOpenedPageTagList(page)
  }
  closePageTag(index: number): void {
    this.removeOpenedPageTagList(index)
  }
  closeOtherPageTags(): void {

  }
  closeAllPageTags(): void {
    this.resetOpenedPageTagList()
  }
  getCurrentOpenedPage(): object {
    return this.currentOpenedPage
  }
  setCurrentOpenedPage(page): void {
    this.currentOpenedPage = page
  }
  startRouting(commands: any[] = ['/**'], queryParams: object = {}): void {
    this.router.navigate(commands, queryParams)
  }
  constructor(private router: Router) {
    this.initApp()
  }
}

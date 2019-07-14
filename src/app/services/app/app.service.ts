import { Injectable } from '@angular/core';
import { menus } from '../app/menus';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private menuList: object[];
  private openedPageTagList: object[];
  private currentOpenedPage: object;
  initApp() {
    this.menuList = menus;
    this.openedPageTagList = [];
  }
  getMenuList(): object[] {
    return this.menuList;
  }
  getOpenedPageTagList(): object[] {
    return this.openedPageTagList;
  }
  addOpenedPageTagList(page: object): void {
    this.openedPageTagList.push(page);
  }
  removeOpenedPageTagList(index: number): void {
    this.openedPageTagList.splice(index, 1);
  }
  resetOpenedPageTagList(): void {
    this.openedPageTagList = [];
  }
  openPage(page: object): void {
    this.setCurrentOpenedPage(page);
    this.addOpenedPageTagList(page);
  }
  closePageTag(index: number): void {
    this.removeOpenedPageTagList(index);
  }
  closeOtherPageTags(): void {

  }
  closeAllPageTags(): void {
    this.resetOpenedPageTagList();
  }
  getCurrentOpenedPage(): object {
    return this.currentOpenedPage;
  }
  setCurrentOpenedPage(page): void {
    this.currentOpenedPage = page;
  }
  constructor() {
    this.initApp();
  }

}

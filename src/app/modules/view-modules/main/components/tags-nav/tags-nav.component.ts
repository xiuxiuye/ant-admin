import { Component, OnInit, OnDestroy, AfterViewInit, Input, ElementRef } from '@angular/core'
import { RouterService } from 'src/app/services/router/router.service'
import { NavigationEnd } from '@angular/router'
import { AppService } from 'src/app/services/app/app.service'

@Component({
  selector: 'app-tags-nav',
  templateUrl: './tags-nav.component.html',
  styleUrls: ['./tags-nav.component.less']
})
export class TagsNavComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private router: RouterService, private refs: ElementRef, private app: AppService) { }

  ngOnInit() {
    // 路由
    this.routerEventsListener = this.router.getRoute().events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentRoutePath = this.app.getCurrentOpenedPage().path
          const length = this.app.getPageOpenedList().length
          let tagRefs = Array.from(this.refs.nativeElement.querySelectorAll('nz-tag'))
          if (length === tagRefs.length) {
            const tag = this.getTagOfRoute(this.currentRoutePath, tagRefs)
            this.setTagsWrapperScrollPosition(tag)
          } else {
            // 开启定时器定时拉去nz-tag 元素直至满足条件
            let interval = setInterval(() => {
              tagRefs = Array.from(this.refs.nativeElement.querySelectorAll('nz-tag'))
              if (length === tagRefs.length) {
                clearInterval(interval)
                const tag = this.getTagOfRoute(this.currentRoutePath, tagRefs)
                this.setTagsWrapperScrollPosition(tag)
              }
            }, 0)
          }
        }
      })
  }

  ngAfterViewInit() {
    this.currentRoutePath = this.app.getCurrentOpenedPage().path
    const tagRefs = Array.from(this.refs.nativeElement.querySelectorAll('nz-tag'))
    const tag = this.getTagOfRoute(this.currentRoutePath, tagRefs)
    this.setTagsWrapperScrollPosition(tag)
  }

  ngOnDestroy() {
    this.routerEventsListener.unsubscribe()
  }

  @Input() pageOpenedList: object[]
  leftOffset = 0
  routerEventsListener
  private currentRoutePath: string

  closeTag(index) {
    console.log(index)
    this.app.closePageTag(index)
  }

  closeTags(action) {
    if (action === 'closeOthers') {
      this.leftOffset = 0
      this.app.closeOtherPageTags(this.currentRoutePath)
    } else {
      this.app.closeAllPageTags()
      this.router.navigateRoute(['/home'])
    }
    this.pageOpenedList = this.app.getPageOpenedList()
  }

  clickTag(path: string) {
    this.router.navigateRoute([path])
  }

  // 找到路由对应的tag元素
  private getTagOfRoute(routePath, tagRefs) {
    for (let tag of tagRefs) {
      if (routePath === tag.id) {
        return tag
      }
    }
    return null
  }

  private setTagsWrapperScrollPosition(tag) {
    const visible = this.checkTagIsVisible(tag)
    if (!visible.isVisible && visible.position === 'left') {
      // 标签位于可视区域的左侧
      this.leftOffset = -tag.offsetLeft
    } else {
      // 标签位于可视区域的右侧 or 可视区域
      this.leftOffset = Math.min(0, -(tag.offsetWidth + tag.offsetLeft - this.refs.nativeElement.querySelector('.tags-wrapper').offsetWidth + 4))
    }
  }

  private checkTagIsVisible (tag) {
    const visible = {
      isVisible: false,
      position: 'left'
    }
    const leftDiffValue = tag.offsetLeft + this.leftOffset
    if (leftDiffValue < 0) {
      return visible
    }
    const rightDiffValue = this.refs.nativeElement.querySelector('.tags-wrapper').offsetWidth - this.leftOffset - tag.offsetWidth - tag.offsetLeft
    if (leftDiffValue >= 0 && rightDiffValue >= 0) {
      visible.isVisible = true
    } else {
      visible.position = 'right'
    }
    return visible
  }

  handleScroll (direaction) {
    // 获取在可视区域临界的tag
    let criticalTag = this.getCriticalTag(direaction)
    switch (direaction) {
      case 'left':
        this.leftOffset = Math.min(this.refs.nativeElement.querySelector('.tags-wrapper').offsetWidth - criticalTag.offsetLeft, 0)
        break
      case 'right':
        const diffValue1 = -(criticalTag.offsetLeft + criticalTag.clientWidth)
        const diffvalue2 = -(this.refs.nativeElement.querySelector('.tags-wrapper-scroll').offsetWidth - this.refs.nativeElement.querySelector('.tags-wrapper').offsetWidth)
        this.leftOffset = Math.max(diffValue1, diffvalue2)
        break
      default:
        break
    }
  }

  getCriticalTag (direaction) {
    let criticalTag
    const tagRefs = Array.from(this.refs.nativeElement.querySelectorAll('nz-tag'))
    for (let tag of tagRefs) {
      // 检查tag是否在可视区
      if (this.checkTagIsVisible(tag).isVisible) {
        criticalTag = tag
        if (direaction === 'left') {
          break
        }
      }
    }
    return criticalTag
  }
}

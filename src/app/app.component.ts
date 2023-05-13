import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IxMenu } from '@siemens/ix-angular';

@Component({
  selector: 'app-root',
  template: `
  <ix-map-navigation
  hideContextMenu="true"
  application-name="Web RTC"
  navigation-title="Test Web RTC Technology"
  style="position: unset;"
  #sidebar
>
  <ix-menu #menu [enableToggleTheme]="true"> </ix-menu>
  <div slot="sidebar-content" style="min-height: 100vh;">
    <button (click)="toggle()">toggle button</button>
  </div>

  <div>
    <ng-content> </ng-content>
  </div>
</ix-map-navigation>
`,
})
export class AppComponent implements AfterViewInit {
  @ViewChild(IxMenu) menu!: IxMenu;

  ngAfterViewInit(): void {
    this.menu.toggleMapExpand(false);
  }

  toggle() {
    const el: HTMLElement | null = document.querySelector('#menu-collapse');

    el?.click();
    this.menu.mapExpandChange.emit(
      new CustomEvent('', {
        detail: false,
      })
    );
  }
}

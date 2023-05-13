import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IxMenu } from '@siemens/ix-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild(IxMenu) menu!: IxMenu;

  ngAfterViewInit(): void {
    this.menu.toggleMapExpand(false);
  }

  toggle() {
    this.menu.mapExpandChange.emit(
      new CustomEvent('', {
        detail: false,
      })
    );
  }
}

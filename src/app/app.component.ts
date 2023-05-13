import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IxMenu } from '@siemens/ix-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  @ViewChild(IxMenu) menu!: IxMenu;
  links: Array<any> = [
    {
      path: 'account',
      name: 'UserAccount',
      icon: 'user',
      // avatar: 'https://ui-avatars.com/api/?name=John+Doe',
      // menu : [
      //   {
      //     path: 'SignIn',
      //     name: 'SignIn',
      //     icon: 'log-in'
      //   }
      //]
    },
    {
      path: 'text',
      name: 'Text Chat',
      icon: 'mail',
    },
    {
      path: 'video',
      name: 'Video Chat',
      icon: 'video-file',
    },
  ];

  ngAfterViewInit(): void {
    this.menu.toggleMapExpand(false);
  }
}

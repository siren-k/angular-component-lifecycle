import { Component } from '@angular/core';

export declare interface Obj {
  num: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-component-lifecycle';
  num: number = 0;
  obj: Obj = {
    num: 0
  };

  plus1(): void {
    this.num++;
  }

  plus2(): void {
    this.obj.num++;
  }
}

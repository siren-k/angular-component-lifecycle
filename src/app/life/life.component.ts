import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Obj } from '../app.component';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() num: number = 100;
  @Input() obj: Obj = {
    num: 100
  };

  constructor() {
    console.log('constructor immutable', this.num);
    console.log('constructor object', this.obj);
  }

  // 프로퍼티가 초기화된 직후
  ngOnInit(): void {
    console.log('ngOnInit immutable', this.num);
    console.log('ngOnInit object', this.obj);
  }

  // 최초 초기화 때/@Input 프로퍼티가 변경될 때
  // @Input 데코레이터가 사용된 프로퍼티가 없으면 실행되지 않음
  ngOnChanges(): void {
    console.log('ngOnChanges immutable', this.num);
    console.log('ngOnChanges object', this.obj);
  }

  // 모든 데이터의 변경에 관여
  ngDoCheck(): void {
    console.log('ngDoCheck immutable', this.num);
    console.log('ngDoCheck object', this.obj);
  }

  // @ngContent 사용 시 자식이 초기화된 직후
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  // @ngContent를 통해 HTML을 받을 때 최초/변경시
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // 템플릿이 모두 초기화되었을 때
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  // 템플릿에 바인딩된 값이 변경되었을 때
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // 
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }


}

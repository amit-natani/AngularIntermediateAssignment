import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent implements OnInit, OnChanges, AfterViewInit, AfterContentChecked, AfterContentInit, OnDestroy, AfterViewChecked {

  constructor() { }

  ngOnChanges(): void {
    console.log('In ngOnChanges');
  }

  ngOnInit(): void {
    console.log('In ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('In ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('In ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('In ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('In ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('In ngOnDestroy');
  }

}

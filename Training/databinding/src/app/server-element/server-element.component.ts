import { AfterContentInit, Component, 
  DoCheck, 
  Input,
   OnChanges,
    OnInit,
     SimpleChanges,
      ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //none or native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
@Input('srvElement') element: {type: string, name: string, content: string};
@Input() name: string;

constructor() { 
    console.log('constructor called!');
  }
  
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);

  }


  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

ngAfterContentInit(): void {
  console.log('ngAfterContentInit called!');
  
}
}

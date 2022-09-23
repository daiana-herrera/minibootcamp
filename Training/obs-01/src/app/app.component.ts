import { Component, OnInit, OnDestroy, NgModule, SchemaMetadata } from '@angular/core';
import { UserService } from './user.service';
import {Subscription} from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, NgModule {
  schemas?: (any[ 'NO_ERRORS_SCHEMA'] | SchemaMetadata)[]; //I add this seraching an error, to fix. but deploy well whithout Ngmodule non.
userActivated = true;
private activatedSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe (didActivate => {
      this.userActivated = didActivate;
    })
  
  }

  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
    
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //porvider a service, add and specify the type :
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();
//So how do we inform Angular that we require 
    //such an instance? We add a constructor to the class,
    // to the component 
   constructor(private loggingService : LoggingService) {}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    //last stpep,add instance:
    this.loggingService.logStatusChange(accountStatus);

   
  }
}

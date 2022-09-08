import { Component} from '@angular/core';
import { AccountsService } from '../account.service';

import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //porvider a service, add and specify the type :
  //providers: [LoggingService] coment because we add it in the app.moule.ts
})
export class NewAccountComponent {

//So how do we inform Angular that we require 
    //such an instance? We add a constructor to the class,
    // to the component 
   constructor(private loggingService : LoggingService, 
               private accountsService: AccountsService) {
                this.accountsService.statusUpdated.subscribe(
                  (status: string)=> alert('New Status:' + status)//cross component comunication
                ); //for listen 
               }
  
               onCreateAccount(accountName: string, accountStatus: string) {
   
    //last stpep,add instance:
    this.accountsService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);

   
  }
}

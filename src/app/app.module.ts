import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Http client module */
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SmsProvidersListComponent } from './sms-providers-list/sms-providers-list.component';
import { SmsProviderComponent } from './sms-providers-list/sms-provider/sms-provider.component';
import {SmsProviderService} from "./backend/smsProvider.service";
import {FormBuilderStaticService} from "./static/formBuilder.static.service";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SmsProvidersListComponent,
    SmsProviderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    Ng2SmartTableModule,
    ReactiveFormsModule
  ],
  providers: [SmsProviderService, FormBuilderStaticService],
  bootstrap: [AppComponent]
})
export class AppModule { }

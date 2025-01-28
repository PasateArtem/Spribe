import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { OperatorInfoComponent } from './components/operator-info/operator-info.component';
import { AddressComponent } from './components/address/address.component';
import { ContactPersonComponent } from './components/contact-person/contact-person.component';
import { CommunicationChannelsComponent } from './components/communication-channels/communication-channels.component';
import { LanguagesComponent } from './components/languages-info/languages.component';
import { CurrenciesComponent } from "./components/currencies/currencies.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MatTabsModule,
    OperatorInfoComponent,
    AddressComponent,
    ContactPersonComponent,
    CommunicationChannelsComponent,
    LanguagesComponent,
    CurrenciesComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


}


import { Component, OnInit } from '@angular/core';
import {SmsProviderService} from "../backend/smsProvider.service";
import {Country} from "../backend/country";
import {SmsProvider} from "../backend/smsProvider";

@Component({
  selector: 'sms-providers-list',
  templateUrl: './sms-providers-list.component.html',
  styleUrls: ['./sms-providers-list.component.css']
})
export class SmsProvidersListComponent implements OnInit {
  countries: Country[];
  settings = {
    actions: false,
    hideSubHeader: true,
    pager:{
      display:true,
      perPage:5
    },
    columns: {
      id: {
        title: 'Id'
      },
      name: {
        title: 'Name'
      },
      country: {
        title: 'Country'
      },
      originating_number: {
        title: 'Originating Number'
      },
    }
  };
  data: SmsProvider[];
  constructor(private smsProviderService: SmsProviderService) {
    this.loadCountries();
  }

  ngOnInit(): void {
    this.loadSmsProviders();
  }

  loadCountries() {
    this.smsProviderService
      .GetAllCountries()
      .subscribe(data => this.countries = data);
  }

  loadSmsProviders() {
    this.smsProviderService
      .GetAllSmsProviders()
      .subscribe(data => this.data = this.formatData(data));
  }

  formatData (smsProviders) {
    return smsProviders.map((p, index) => {
      p.id = index + 1;
      p.country = this.countries.find(c => c.id === p.country_id).displayName;
      return p;
    }).sort((a, b) => (a.id < b.id) ? 1 : -1);
  }
}

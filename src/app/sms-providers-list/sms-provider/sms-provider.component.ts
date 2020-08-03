import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Country} from "../../backend/country";
import {FormGroup} from "@angular/forms";
import {SmsProviderService} from "../../backend/smsProvider.service";
import {FormBuilderStaticService} from "../../static/formBuilder.static.service";

@Component({
  selector: 'sms-provider',
  templateUrl: './sms-provider.component.html',
  styleUrls: ['./sms-provider.component.css']
})
export class SmsProviderComponent implements OnInit {
  @Input()
  countries: Country[];
  @Output() saveForm: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  errorMessage: string;
  constructor(private smsProviderService: SmsProviderService,
              private formBuilderStaticService: FormBuilderStaticService) { }

  ngOnInit(): void {
    this.form = this.formBuilderStaticService.getSmsProviderForm();
  }

  saveChanges() {
    this.errorMessage = '';
    this.smsProviderService
      .CreateSmsProvider(this.form.value)
      .subscribe(() => {
        this.form.reset();
        this.saveForm.emit();
      }, (e) => {
        this.errorMessage = e.error;
      });
  }

  resetChanges() {
    this.form.reset();
    this.errorMessage = '';
  }

  isFormInvalid() {
    return !this.form.valid;
  }
}

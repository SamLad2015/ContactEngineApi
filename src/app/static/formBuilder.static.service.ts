import {FormBuilder, Validators} from '@angular/forms';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class FormBuilderStaticService {
  constructor(private fb: FormBuilder) { }
  getSmsProviderForm = () => {
    return this.fb.group({
      name: [null, Validators.required],
      country_id: [null, Validators.required],
      originating_number: [null, Validators.required]
    });
  }
}

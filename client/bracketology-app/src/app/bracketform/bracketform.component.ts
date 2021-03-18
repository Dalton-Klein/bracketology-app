import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';

import { participants } from '../interfaces';

@Component({
  selector: 'app-bracketform',
  templateUrl: './bracketform.component.html',
  styleUrls: ['./bracketform.component.scss'],
})
export class BracketformComponent implements OnInit {

  errorText: string = ''

  constructor(private apiClient: ApiClientService) { }
  
  participants = participants;
  ngOnInit(): void {
  }

  async onSubmit(formData) {
    console.log('FormSubmitted: ', formData)
    if (formData.username !== '' && formData.prelim !== '' && formData.m1 !== '' && formData.m2 !== '' && formData.m3 !== '' && formData.m4 !== '' && formData.m5 !== '' 
      && formData.m6 !== '' && formData.m7 !== '' && formData.m8 !== '' && formData.m9 !== '' && formData.m10 !== '' 
      && formData.m11 !== '' && formData.m12 !== '' && formData.m13 !== '' && formData.m14 !== '' && formData.m15 !== '' 
      && formData.m16 !== '' && formData.m17 !== '' && formData.m18 !== '' && formData.m19 !== '' && formData.m20 !== '' 
      && formData.m21 !== '' && formData.m22 !== '' && formData.m23 !== '' && formData.m24 !== '' && formData.m25 !== '' 
      && formData.m26 !== '' && formData.m27 !== '' && formData.m28 !== '' && formData.m29 !== '' && formData.m30 !== '' && formData.m31 !== '' 
    ) {
      this.errorText = 'Submitting...'
      await this.apiClient.postEntry(formData)
    } else {
      this.errorText = 'You must fill out entire form before submitting!'
      console.log('Form Validation Failed')
    }
  }

}

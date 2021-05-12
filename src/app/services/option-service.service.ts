import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { OptionModel } from '../models/option-model';
import { PostingModel } from '../models/posting-model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OptionServiceService {

  _url= environment.apiUrl + '/api/Nsc';

  constructor(private httpClient: HttpClient) { }

  postOptions(pm:PostingModel){
    return this.httpClient.post<any>(this._url,pm);
  }

  

}

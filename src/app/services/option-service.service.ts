import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { OptionModel } from '../models/option-model';
import { PostingModel } from '../models/posting-model';

@Injectable({
  providedIn: 'root'
})
export class OptionServiceService {

  _url='https://nscreeener20210409142600.azurewebsites.net/api/Nsc';

  constructor(private httpClient: HttpClient) { }

  postOptions(pm:PostingModel){
    return this.httpClient.post<any>(this._url,pm);
  }

}

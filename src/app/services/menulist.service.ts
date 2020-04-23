import { Injectable } from '@angular/core';
import { Baseurl } from '../baseurl';
import { HttpClient } from "@angular/common/http";
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class menulistService {

  constructor(private http:HttpClient, private baseurl: Baseurl) {}

  url=this.baseurl.getBaseurl();

  getAllMenusDetails():Observable<any>{
    return this.http.get(this.url+'/menus').pipe(map(res=>{return res}))
  }

  PostMenuData(obj):Observable<any>{
      return this.http.post(this.url+'/menus',obj).pipe(map(res=>{return res}))
  }

  updateMenuData(id,obj):Observable<any>{
    return this.http.put(this.url+'/menus/'+id,obj).pipe(map(res=>{return res}))
  }
  
}

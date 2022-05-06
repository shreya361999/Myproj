import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getCategory(): Observable<any>{
    return this.http.get<any>('https://apolis-grocery.herokuapp.com/api/category')
  }
  getProducts(id:any) : Observable < any > {
    return this.http.get<any>('http://apolis-grocery.herokuapp.com/api/products/cat/'+id)
  }
  getSubcategory(id:any): Observable<any>{

    return this.http.get<any>('http://apolis-grocery.herokuapp.com/api/products/sub/'+id)
  }
  getProductDetail(id:any) : Observable < any > {
    return this.http.get<any>('http://apolis-grocery.herokuapp.com/api/products/'+id)
  }
  
}

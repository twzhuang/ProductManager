import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  addProduct(product){
      return this._http.post('/productlists', product);
  }

  getProducts(){
      return this._http.get('/productlists');
  }

  getProduct(id){
      return this._http.get('/productlists/'+id);
  }

  updateProduct(data){
      return this._http.put('/productlists/', data);
  }

  deleteProduct(data){
      return this._http.delete('/productlists/'+data._id);
  }
}

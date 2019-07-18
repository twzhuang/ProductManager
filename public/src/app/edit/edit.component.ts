import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: object;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
      this.product = {title: "", price: "", imageurl: ""};
      this._route.params.subscribe((params: Params)=>{
          this.getProductFromService(params['id']);
      });
  }

  getProductFromService(id){
      let observable = this._httpService.getProduct(id);
      observable.subscribe(data=>{
          this.product = data;
      })
  }

  editProduct(){
      let observable = this._httpService.updateProduct(this.product);
      observable.subscribe(data=>{
          console.log("updated data", data);
          this.goToProducts();
      })
  }

  goToProducts(){
      this._router.navigate(['/products']);
  }

  deleteProduct(){
      let observable = this._httpService.deleteProduct(this.product);
      observable.subscribe(data=>{
          console.log(data);
          this.goToProducts();
      })
  }

}

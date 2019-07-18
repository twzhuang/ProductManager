import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router, Event, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
        this._router.events.subscribe(
            (event: Event) => {
                if (event instanceof NavigationEnd) {
                    this.getAllProductsFromService();
                }
            }
        )
      this.getAllProductsFromService();
  }

  getAllProductsFromService(){
      let observable = this._httpService.getProducts();
      observable.subscribe(data=>{
          this.products = data;
      })
  }

  deleteProduct(data){
      let observable = this._httpService.deleteProduct(data);
      observable.subscribe(()=>{
          this.getAllProductsFromService();
      })
  }
}

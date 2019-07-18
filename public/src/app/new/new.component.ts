import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    product: object;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit() {
        this.product = {title: "", price: "", imageurl: ""}
    }

    submitProduct(){
        console.log(this.product);
        let observable = this._httpService.addProduct(this.product);
        observable.subscribe(()=>{
            this.goToProducts();
        })
    }

    goToProducts(){
        this._router.navigate(['/products']);
    }

}

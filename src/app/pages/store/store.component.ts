import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products!: Product[];
  shoppingCart: any = [];


  constructor(private productService: ProductService){
    console.log( 'hola');

  }

  car(){
    console.log(localStorage.getItem('car'))
  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data  => {
      console.log(data);

      this.products = data.data;
    })

  }

  addProduct( product: any ) {

    this.shoppingCart.push( product );
    console.log( ':::', this.shoppingCart );

    localStorage.setItem( 'shoppingCart', JSON.stringify( this.shoppingCart ) );
  }

}

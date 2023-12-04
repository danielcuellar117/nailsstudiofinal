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



<<<<<<< HEAD
  constructor(private productService: ProductService){
    console.log( 'hola');

  }

  car(){
    console.log(localStorage.getItem('car'))
  }
=======
  
  constructor(private productService: ProductService){}
  
>>>>>>> c4409cc7d993ec0c8618809ffe5fe45161234376
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data  => {
      console.log(data);

      this.products = data.data;
    })
  }

  addProduct( product: any ) {


    if (this.shoppingCart.some((item:any) => item._id === product._id)) {
      if (this.shoppingCart.find((item: any) => item.id === product.id)) {
        product.count +=1;
      }
    }
    else{
      product.count = 1
      this.shoppingCart.push( product );
    }

    localStorage.setItem( 'shoppingCart', JSON.stringify( this.shoppingCart ) );
    console.log( ':::', this.shoppingCart );
  }

}

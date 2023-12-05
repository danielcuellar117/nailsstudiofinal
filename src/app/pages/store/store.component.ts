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
    localStorage.getItem('shoppingCart')
    Object.keys(this.shoppingCart).forEach(key => {

      console.log(this.shoppingCart[key].name, (this.shoppingCart[key].price*this.shoppingCart[key].count));
    }

    )
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data  => {
      console.log(data);

      this.products = data.data;
    })
  }

  addProduct( product: any ) {

    if (this.shoppingCart.some((item:any) => item._id === product._id)) {
      if (product.count < product.quantity) {
        product.count +=1;
      } else{
        alert(`solo puede agregar ${product.quantity} articulos al carrito`)
      }

    }
    else{
      product.count = 1
      this.shoppingCart.push( product );

    }

    localStorage.setItem( 'shoppingCart', JSON.stringify( this.shoppingCart ) );

    console.log( 'lista en el carrito >>', this.shoppingCart );
  }

}

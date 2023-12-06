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
  carrito: any = [];


  constructor(private productService: ProductService){
    console.log( 'hola');

  }

  car(){
    this.carrito = localStorage.getItem('shoppingCart')
    this.carrito = JSON.parse(this.carrito)

    for (let i = 0; i < this.carrito.length; i++) {
      delete this.carrito[i].name;
      delete this.carrito[i].description;
      // delete this.carrito[i].quantity;
      delete this.carrito[i].urlImage;
      delete this.carrito[i].category;
      delete this.carrito[i].userId;
      delete this.carrito[i]._id;
      this.carrito[i].price *= this.carrito[i].count;
      this.shoppingCart[i].quantity -= this.carrito[i].count;
      this.shoppingCart[i].quantity = 123;
    }

   console.log(this.shoppingCart);
   console.log(this.carrito);

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

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



  constructor(private productService: ProductService){
    console.log( 'hola');

  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data  => {
      console.log(data);

      this.products = data.data;
    })

  }



}

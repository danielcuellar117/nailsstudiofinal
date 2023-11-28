import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ResponseProducts } from 'src/app/interfaces/response-products';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() products: any;

}

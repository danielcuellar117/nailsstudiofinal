import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-services',
  templateUrl: './card-services.component.html',
  styleUrls: ['./card-services.component.css']
})
export class CardServicesComponent {
  @Input() service: any;
}

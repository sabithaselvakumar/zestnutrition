import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent implements OnInit{

  quantity: number = 1;

  ngOnInit() {
    // Your initialization logic here, if needed
  }

  plus() {
    if (this.quantity < 5) {
      this.quantity++;
    }
  }

  minus() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}

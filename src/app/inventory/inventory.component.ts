import { Component, OnInit } from '@angular/core';
import { Item } from 'src/Item';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  inventory:Item[] = [
    {
      "id":1,
      "name":"Burger",
      "brand":"McDonalds",
      "inStock":5,
      "price":4.00,
      "image": 'https://i.pinimg.com/originals/47/2d/c3/472dc3346c5d2746cac2db4d95cc1e22.png',
      "featured":false,
      "qty": 0
      },

     {
      "id":2,
      "name":"Fries",
      "brand":"Burger King",
      "inStock":10,
      "price":1.00,
      "image": 'https://pngimg.com/uploads/fries/fries_PNG48.png',
      "featured":true,
      "qty": 0
    },
    {
      "id":3,
      "name":"Soda",
      "brand":"CocaCola",
      "inStock":15,
      "price": 0.50,
      "image": 'https://icon-library.com/images/soda-icon/soda-icon-10.jpg',
      "featured":false,
      "qty": 0
    }


    ];


qtyCount(){
    let sum = 0;


    for(let x = 0; x < this.inventory.length; x++){

        sum += this.inventory[x].qty;
    }
  return sum;
};

stockCount(inventory:any){
  for(let x = 0; x < this.inventory.length; x++){
    if((inventory.id === this.inventory[x].id)){
      return this.inventory[x].inStock;
  }
}
return 0;
};


//if qty is less than qty in stock then add to cart
increaseQty(inventory: any){
  if(inventory.qty < inventory.inStock){
      inventory.qty++;
  }

};

//Only remove if current qty is NOT zero
decreaseQty(inventory: any){
  if(inventory.qty != 0 && inventory.qty > 0 ){
    inventory.qty--;
}
}

totalPrice(){
  let sum = 0;
  for (const item of this.inventory) {
    if(item.qty <= item.inStock){
      sum += item.price * item.qty;
  }

  }
  return sum;
}

}

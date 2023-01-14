import { Component, OnInit } from '@angular/core';
import { Item } from 'src/Item';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {


 num:number = Math.floor(Math.random() * 6) + 1;


 randomMessage(){
 switch (this.num) {
  case 0:
    return "Free Soda - Monday";
    case 1:
      return "Free Fries - Tuesday";

      case 2:
        return "Free Battery - Wednesday";

        case 3:
          return "B.O.G.O - Thursday";

          case 4:
            return "Free Burger - Friday";

            case 5: case 6:
              return "Closed on weekends";
  
                default:
                return "no such day exist"

 };

 }


  constructor() { }

  ngOnInit(): void {
  this.randomMessage();
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
      "recyclable": false,
      "qty": 0,
      "rating": "*"
      },

      {
        "id":2,
        "name":"Soda",
        "brand":"CocaCola",
        "inStock":15,
        "price": 0.50,
        "image": 'https://icon-library.com/images/soda-icon/soda-icon-10.jpg',
        "featured":true,
        "recyclable": false,
        "qty": 0,
        "rating": "**"
      },

     {
      "id":3,
      "name":"Fries",
      "brand":"Burger King",
      "inStock":10,
      "price":1.00,
      "image": 'data:image/jpeg;base64,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',
      "featured":false,
      "recyclable": true,
      "qty": 0,
      "rating": "***"
    },

    {
      "id":4,
      "name":"Battery",
      "brand":"AA",
      "inStock":3,
      "price": 2.0,
      "image": 'https://cdn.pixabay.com/photo/2018/02/07/16/18/battery-3137394_1280.png',
      "featured":true,
      "recyclable": false,
      "qty": 0,
      "rating": "****"
    }


    //https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2i8A0N4G6b1Z5m2_aa-battery-icon-aa-battery%2F&psig=AOvVaw2Vd8nKDwuB4RcsPUYl85Q0&ust=1673287674047000&source=images&cd=vfe&ved=0CBAQjhxqFwoTCIDy3LzIuPwCFQAAAAAdAAAAABAH

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

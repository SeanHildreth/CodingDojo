 class Bike {
     miles: number;
     constructor(
         public price: number,
         public max_speed: string) {
         this.miles = 0;
     }
     displayInfo = () => {
         console.log(`This bike costs: ${this.price}, goes:  ${this.max_speed}, and has miles: ${this.miles}!`);
         return this;
     }
     ride = () => {
         this.miles += 10;
         console.log(`Riding!`);
         return this;
     }
     reverse = () => {
         if (this.miles === 0) {
             console.log(`Cannot reverse!`);
             return this;
         } else {
             this.miles -= 5;
             console.log(`Reversing!`);
             return this;
         }
     }
 }
 
 
 const yamaha = new Bike(9900, '180mph');
 const honda = new Bike(9750, '160mph');
 const suzuki = new Bike(7900, '150mph');
 
 yamaha.ride().ride().ride().reverse().displayInfo();
 honda.ride().ride().reverse().reverse().displayInfo();
 suzuki.reverse().reverse().reverse().displayInfo();
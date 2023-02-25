export class Transaction {
    customerName:string;
   date:number;
   time:number;
   city:string;
   amount:number;

   constructor(
    customerName:string,
   date:number,
   time:number,
   city:string,
   amount:number,
   )

   {
    this.customerName=customerName;
   this.date=date;
   this.time=time;
   this.city=city;
   this.amount=amount;
   }
   
}




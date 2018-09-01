class Car
{
  constructor({ title })
  {
    this.title = title;
  }
  drivesound()
  {
    return 'vrroooom';
  }
  summary({make,year,price})
  {
    const user = {
      title: this.title,
      sound:this.drivesound(),
      make,
      year,
      price,
    }
    return user;
  }
}

options = {
  title: 'honda 2019 x1',
  make:'honda',
  year:2019,
  price:'$40000 USD',
}

let car1 = new Car(options);

console.log(car1);
console.log(car1.summary(options));

const options2 = {
  title:"toyota llx 2020",
}

class toyota extends Car{
  constructor(options2,price)
  {
    super(options2);
    this.price = price;
  }
}
let toyota1 = new toyota(options2,'$43000');
console.log("toyota: ",toyota1);

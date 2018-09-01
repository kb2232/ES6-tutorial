function createbookshop(inventory)
{
  return {
    inventory: inventory,
    inventoryValue: function()
    {
      return this.inventory.reduce((initial, element)=> initial+element.price,0);
    },
    priceFortiTle: function(title){
      return this.inventory.find(book =>book.title === title).price;
    }
  }
}
const inventory = [
  {title: "harry potter", price: 10},
  {title: "kunle the man",price:25},
];
const bookshop = createbookshop(inventory);
const value = bookshop.inventoryValue();
const price = bookshop.priceFortiTle("kunle the man");
console.log("value = ",value,"\ntitle price = ",price)
///////////////////////////////////////////////////////
 // 1. whenever a key and value (key : value) have same name, you can condense to just key name
 //2. whenever a key and value (key : value) and value is function, you can omit the colon and word "funciton";
 function createbookshop2(inventory)
{
  return {
    inventory,
    inventoryValue()
    {
      return this.inventory.reduce((initial, element)=> initial+element.price,0);
    },
    priceFortiTle(title){
      return this.inventory.find(book =>book.title === title).price;
    }
  }
}
const bookshop2 = createbookshop2(inventory);
const value2 = bookshop2.inventoryValue();
const price2 = bookshop2.priceFortiTle("kunle the man");
console.log("value2 = ",value2,"\ntitle price2 = ",price2)
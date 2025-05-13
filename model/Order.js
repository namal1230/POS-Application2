export class Order {
    #id
    #customer
    #item
    #quantity
    #date
    #price
    constructor(id, customer, item, quantity, date, price) {
        this.#id = id;
        this.#customer = customer;
        this.#item = item;
        this.#quantity = quantity;
        this.#date = date;
        this.#price = price;
    }
    setId(id) {
        this.#id = id;
    }
    setCustomer(customer) {
        this.#customer = customer;
    }
    setItem(item) {
        this.#item = item;
    }
    setQty(qty) {
        this.#quantity = qty;
    }
    setDate(date){
        this.#date = date;
    }
    setPrice(price) {
        this.#price = price;
    }
    getId(){
        return this.#id;
    }
    getCustomer(){
        return this.#customer;
    }
    getItem(){
        return this.#item;
    }
    getQuantity(){
        return this.#quantity;
    }
    getDate(){
        return this.#date;
    }
    getPrice(){
        return this.#price;
    }
}
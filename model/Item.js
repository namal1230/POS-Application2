export class Item{
    #id
    #name
    #description
    #qty
    #price

    constructor(id, name, description, qty, price) {
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#qty = qty;
        this.#price = price;
    }
    getId(){
        return this.#id;
    }
    getName() {
        return this.#name;
    }
    getDescription() {
        return this.#description;
    }
    getQty() {
        return this.#qty;
    }
    getPrice() {
        return this.#price;
    }
    setId(id) {
        this.#id = id;
    }
    setName(name) {
        this.#name = name;
    }
    setDescription(description) {
        this.#description = description;
    }
    setQty(qty) {
        this.#qty = qty;
    }
    setPrice(price) {
        this.#price = price;
    }
}
export default class Customer {
    #id
    #fname
    #lname
    #address
    #contact
    constructor(id,fname,lnmae,address,contact) {
        this.#id=id;
        this.#fname = fname;
        this.#lname = lnmae;
        this.#address = address;
        this.#contact = contact;
    }
    getId(){
        return this.#id;
    }
    getFname() {
        return this.#fname;
    }
    getLname() {
        return this.#lname;
    }
    getAddress() {
        return this.#address;
    }
    getContact() {
        return this.#contact;
    }

    setFname(fname){
        this.#fname = fname;
    }
    setLname(lname){
        this.#lname = lname;
    }
    setAddress(address){
        this.#address = address;
    }
    setContact(contact){
        this.#contact = contact;
    }
    setId(id){
        this.#id = id;
    }
}
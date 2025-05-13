import {Customer_db} from '../db/Customerdb.js';
import Customer from "../model/Customer.js";

let customerId = undefined;



$('#customer-save').on('click', function(){
    let fname= $('#inputFirstName').val();
    let lname= $('#inputLastName').val();
    let address = $('#inputAddress1').val();
    let contact = $('#contact').val();

     if ($('#customer-save').text()=='Save Customer'){

         if (fname == "" || lname == "" || address == "" || contact == "") {
             alert("Please fill All values.");
         } else {
             let customer = new Customer(generateId(),fname,lname,address,contact);
             Customer_db.push(customer);

             refresh();
             loadTable();
         }
     } else if ($('#customer-save').text()=='Update Customer'){
         if (fname == "" || lname == "" || address == "" || contact == "") {
             alert("Please fill All values.");
         } else {
             const customers = Customer_db.findIndex((index)=>{
                 return index.getId()==customerId;

             })
             Customer_db[customers]=new Customer(customerId,fname,lname,address,contact);
             loadTable();
             $('#customer-save').html('Save Customer');
             refresh();
         }

     }
})

const loadTable= ()=>{
    console.log(Customer_db);
    $('#tableCustomer').empty();

    Customer_db.map((customers,index) => {
        let temp =  `<tr>
                            <td>${customers.getId()}</td>
                            <td>${customers.getFname()}</td>
                            <td>${customers.getLname()}</td>
                            <td>${customers.getAddress()}</td>
                            <td>${customers.getContact()}</td>
                            </tr>`;

        $('#tableCustomer').append(temp);
    });
}

const refresh = ()=>{
    $('#inputFirstName').val(' ');
    $('#inputLastName').val(' ');
    $('#inputAddress1').val(' ');
    $('#contact').val(' ');
}

$('#tableCustomer').on('click','tr',function(){
    let ind = $(this).index();
    let customer_value = Customer_db[ind];
    customerId=customer_value.getId();
    console.log("aaaaaaaaaaaaaaa",customerId)
    if (confirm('Are you want to delete it?')){
        const id = Customer_db.findIndex((index)=>{
            return index.getId()==customerId;
        })
        Customer_db.splice(id,1);
        loadTable();
        refresh();
        $('#customer-save').html('Save Customer');
    } else{
        $('#inputFirstName').val(customer_value.getFname());
        $('#inputLastName').val(customer_value.getLname());
        $('#inputAddress1').val(customer_value.getAddress());
        $('#contact').val(customer_value.getContact());
        $('#customer-save').html('Update Customer');
    }

})


const generateId = ()=>{
    if (Customer_db.length==0){
        return `C-01`;
    }
    const customer = Customer_db[Customer_db.length-1];
    if (!customer.getId()){
        return null;
    }
    const splitId=Number.parseInt(customer.getId().split('-')[1]);
    return `C-0${splitId+1}`
}
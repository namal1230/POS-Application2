import {orderdb} from "../db/Orderdb.js";
import {Order} from "../model/Order.js";
import {Itemdb} from "../db/Itemdb.js";
import {Customer_db} from "../db/Customerdb.js";
import {Item} from "../model/Item.js";
import {loadTable} from "./ItemController.js";

let id = undefined;

$('#save-order').on('click', function(){
   let customerId = $('#customerId').val();
   let isCustomer = Customer_db.find((customer) => customer.getId() === customerId);

   if (isCustomer === undefined){
       $('#customer-found').css('display','inline-block');
       return;
   } else if (isCustomer) {
       $('#customer-found').css('display','none');
   }

    let itemId = $('#itemId').val();
    let isItem = Itemdb.find((item) => item.getId() === itemId);

    if (isItem === undefined){
        $('#item-found').css('display','inline-block');
        return;
    } else if (isItem) {
        $('#item-found').css('display','none');
    }

    let itemQty = $('#quantity').val();

    let qty = Number.parseInt(isItem.getQty());
    let count = Number.parseInt(itemQty);

    if (qty < count){
        $('#itemQty-found').css('display','inline-block');
        return;
    } else if (qty >= count){
        $('#itemQty-found').css('display','none');
    }

    let price = Number.parseInt(isItem.getPrice());
    let total = price * itemQty;

    let date = $('#date').val();

    let customer = isCustomer.getFname() +' '+isCustomer.getLname();

    orderdb.push(new Order(generateId(), customer, isItem.getName(),itemQty, date, total));
    console.log(orderdb);

    const ids = Itemdb.findIndex((index)=>{
        return index.getId()==isItem.getId();
     });

    let lastqty = qty -count;
    Itemdb[ids]=new Item(isItem.getId(),isItem.getName(),isItem. getDescription(),lastqty,isItem.getPrice());
    loadTable();
    console.log(Itemdb);
    loadTables();
});

const loadTables=()=>{
    $('#order-table').empty();
    orderdb.map((value,index)=>{
        const temp =  `<tr>
                              <td>${value.getId()}</td>
                              <td>${value.getCustomer()}</td>
                              <td>${value.getItem()}</td>
                              <td>${value.getQuantity()}</td>
                              <td>${value.getDate()}</td>
                              <td>${value.getPrice()}</td>
                              </tr>`;
        $('#order-table').append(temp);
    })
}

const generateId = () =>{
    if (orderdb.length == 0){
        return 'O-01';
    }

    const orderId = orderdb[orderdb.length-1];
    if (!orderId.getId()){
        return null;
    }
    const sId = Number.parseInt(orderId.getId().split('-')[1]);
    return `O-0${sId+1}`;
}

$('.order-table').on('click','tr',function(){
    let ind = $(this).index();
    let order_value = orderdb[ind];
    id=order_value.getId();

    if (confirm('Are you want to delete it?')){
        const ids = orderdb.findIndex((index)=>{
            return index.getId()==id;
        })
        orderdb.splice(ids,1);
        loadTables();
    }
})
import {Itemdb} from "../db/Itemdb.js";
import {Item} from "../model/Item.js";

let itemId= undefined;
$('#item-save').on('click', function(e) {
    const name=$('#item-name').val();
    const description=$('#item-description').val();
    const qty=$('#item-qty').val();
    const price=$('#item-price').val();

    if ($('#item-save').text()==='Save Item'){
        if (name=='' || description=='' || qty=='' || price==''){
            alert("Please fill All values.");
        } else {
            const item = new Item(generateId(), name, description, qty, price);
            Itemdb.push(item);
            console.log(Itemdb);
            loadTable();
            clearFields();
        }
    } else if ($('#item-save').text()==='Update Item'){
        const id = Itemdb.findIndex((index)=>{
            return index.getId()==itemId;
        });
        Itemdb[id]=new Item(itemId,name,description,qty,price);
        loadTable();
        clearFields();
        $('#item-save').text('Save Item');
    }

});

export const loadTable=()=>{
    $('#item-tbody').empty();
    Itemdb.map((value,index)=>{
        const temp =  `<tr>
                              <td>${value.getId()}</td>
                              <td>${value.getName()}</td>
                              <td>${value.getDescription()}</td>
                              <td>${value.getQty()}</td>
                              <td>${value.getPrice()}</td>
                              </tr>`;
        $('#item-tbody').append(temp);
    })
}

$('.item-table').on('click','tr',function(){
    const ind = $(this).index();
    const item = Itemdb[ind];
    console.log(item)
    itemId = item.getId();
    if (confirm("Do you want to delete this item?")){

        const id = Itemdb.findIndex((index)=>{
            return index.getId()==itemId;
        })

        Itemdb.splice(id,1);
        loadTable();
        clearFields();
        $('#item-save').text('Save Item');
    } else {
        $('#item-name').val(item.getName());
        $('#item-description').val(item.getDescription());
        $('#item-qty').val(item.getQty());
        $('#item-price').val(item.getPrice());
        $('#item-save').text('Update Item');
    }
})

const generateId = ()=>{
    console.log(Itemdb.length);
    if (Itemdb.length == 0){
        return 'I-01';
    }

    const item = Itemdb[Itemdb.length-1];
    if (!item.getId()){
        return null;
    }
    const sId = Number.parseInt(item.getId().split('-')[1]);
    return `I-0${sId+1}`;

}
const clearFields =  ()=>{
    $('#item-name').val(' ');
    $('#item-description').val(' ');
    $('#item-qty').val(' ');
    $('#item-price').val(' ');
}
$('#item-section').css('display','none');
$('#order-section').css('display','none');



function itemOnAc(){
    $('#customer-section').css('display','none');
    $('#order-section').css('display','none');
    $('#item-section').css('display','inline-block');
}

function orderOnAc(){
    $('#customer-section').css('display','none');
    $('#order-section').css('display','inline-block');
    $('#item-section').css('display','none');
}

function customerOnAc(){
    $('#customer-section').css('display','inline-block');
    $('#order-section').css('display','none');
    $('#item-section').css('display','none');
}


$(function(){
    $.ajax({
        type: 'GET',
        url:'/api/orders.json',
        success: function(data){
            //console.log('success',data);
            // now we are going to print out to an li function
            ajaxPrint(data);

           
        }
    });

});

function ajaxPrint(data){

    var $orders = $('#orders');

    $.each(data, function(i,item) {
        $orders.append('<li>Name: '+item.name +', Drink: '+item.drink +'</li>');
    });
};
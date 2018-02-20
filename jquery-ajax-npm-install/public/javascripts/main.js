

$(function(){
    getAjax();
    ajaxAdd();

});

// gets data 
function getAjax(){
    $.ajax({
        type: 'GET',
        url:'/api/orders.json',
        success: function(data){
            //console.log('success',data);
            // now we are going to print out to an li function
            ajaxPrint(data);
        },
        error: function () {
          alert('Error loading orders');  
        }
    });
}

//posts data
function ajaxAdd(){
    var $name = $('#name');
var $drink = $('#drink');
    
    $('#add-order').on('click', function(){
        var order = {
           name: $name.val(),
           drink: $drink.val()
        };
        $.ajax({
            type: 'POST',
            url:'/api/orders.json',
            data: order,
            success: function(newOrder){
                $orders.append('<li>Name: '+newOrder.name +', Drink: '+newOrder.drink +'</li>');
            },
            error: function(){
                alert('error saving order');
            }
        });

    });
};



function ajaxPrint(data){
    var $orders = $('#orders');
    $.each(data, function(i,item) {
        $orders.append('<li>Name: '+item.name +', Drink: '+item.drink +'</li>');
    });
};
$(function() {
    populateData();
    submitButton();
});

function submitButton(){
    var data = 'click';
    $('#formSubmit').click(function(){
        $.ajax({
            url: '/form',
            type: 'POST',
            data: {
                name: orderForm.personsName.value,
                drink: orderForm.personsDrink.value
            },
            success: function(){
                alert('post');
            }
        })
    });
}

function populateData(){
    $.ajax({
        url: "/json/data.json",
        success:function(result){
            filldata(result);
        }
    });
};

function filldata(result){
    $.each(result, function(i, order) {
        $('#orderList').append("<li class='list-group-item'>"+order.name + " - "+order.drink+"</li>");
       })
};
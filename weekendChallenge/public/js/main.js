var jsonData;

$(function () {
    callForJson();
    initButton();



});

function callForJson(){
    $.ajax({
        url:"/JSON/data.json",
        success: function(result){
            fillDataFromJson(result);
            jsonData = result;
        }
    })
}

function fillDataFromJson(result){

    $.each(result, function(i, item){
        $('#listOfOrders').append("<li class='list-group-item'>Drink: "+item.Drink+" Order Name: "+item.Name + "</li>");
    });

}

function initButton(){
    $('#submitButton').click(submitButtonPressed);
}

function submitButtonPressed(evt){
    
    evt.preventDefault();
    evt.stopPropagation();

    $.ajax({
        url: '/',
        type: 'POST',
        data:{
            Name: oderForm.name.value,
            Drink: oderForm.drink.value
        },
        success: function(data){
            jsonData += data;
            alert(data);
            alert(jsonData);
        }
        
    })
    
}
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
    $('#listOfOrders').empty();

    $.each(result, function(i, item){
        //console.log(item.Drink)
        $('#listOfOrders').append("<li class='list-group-item'>Drink: "+item.Drink+" Order Name: "+item.Name + "<span><a href='#'>X</a></span></li>");
    });

}

function initButton(){
    $('#submitButton').click(submitButtonPressed);
}

function submitButtonPressed(evt){
    
    evt.preventDefault();
    evt.stopPropagation();

    //alert(oderForm.name.value);

    $.ajax({
        url: '/',
        type: 'POST',
        data:{
            Drink: oderForm.drink.value,
            Name: oderForm.name.value            
        },
        success: function(data){
           // jsonData.prop = data; 
            //$.extend(true, data, jsonData);
            //jsonData += data;
            //alert(data);
            //alert(jsonData);
            //jsonData.push(data);
            //fillDataFromJson(jsonData);
            callForJson();
        }
        
    })
    
}
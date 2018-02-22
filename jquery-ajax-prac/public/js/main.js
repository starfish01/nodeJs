$(function() {
    populateData();
});

function populateData(){
    $.ajax({
        url: "/json/data.json",
        success:function(result){
            $('#orderList').append("<li class='list-group-item'>"+result[0].name + "</li>");
           // alert(result[0].name);

           $.each(result, function() {
               $.each(this, function (name, value){
                $('#orderList').append("<li class='list-group-item'>"+result[value].name + "</li>");
               })
           });


        }
    });
};
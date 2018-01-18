$(function(){ //like main in C
        $(window).keypress(function(e){
            if(e.keyCode ===13){
                newItem();  
            }
        });

        function newItem(){
            var item=$('#todo').val();
            $('#todos').append('<li>'+ item +'</li>');
            $('#todo').val('');
        }

        $('ul').on('click','li',function(e){
            $(e.target).remove();
        });




    });
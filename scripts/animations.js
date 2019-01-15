const name = "Hello world";
//::> Selecting the document to execute de code after the page is ready
jQuery(function(){

    $(".nav_menu_left ul").click(() =>{
        console.log("working");
        // $(".setting").animate({width:"toggle"},1000);
    })
});
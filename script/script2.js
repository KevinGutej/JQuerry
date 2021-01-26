$(document).ready(function(){


    $("li:gt(2)").each(function(){
        $(this).append("<i class='fa fa-instagram' aria-hidden='true'></i>");
    });
    
    // $("#four").on("click", function(){
    //     $(this).css('background-color', 'green');
    // });

    // $("#one").on("click", function(){
    //     $(this).attr("title", 'figi');
    // });

 //usuwanie atrybutu title z elementu li(swieze figi)
//   $("#one").on("click", function(){
//      $(this).removeAttr("title");
//     });

    //console.log("working");
    //  $("h1").on("click", function(){
    //      $("[title='lista']").removeClass("klasa");
    //  });

    //  //dodanie klasy do elementu ul
    //  $("h2").on("click", function(){
    //      $("[title='lista']").addClass("klasa");
    //  });

    //funcja before() wstawia 2 tagi p przed tagiem h1
    //$("h1").on("click", function(){
       // $(this).before("<p>Moja  </p>");
    //});

    // prepend()funkcja do wstawiania tekstu wewnątrz tagu h1 przed słowem Lista
    //$("h1").on("click", function(){
        //$(this).prepend("Moja ");
    //});
    //(this) means that it focuses on the word ("h1")

    //wstawia przed h1
    //$("h1").on("click", function(){
        //$(this).after("<p>Moja  </p>");
   //});
});


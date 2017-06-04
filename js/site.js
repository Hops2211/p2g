$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {

  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('html').addClass('no-toolbar');
  
  
    
  //meal select
    function clearOld() {
    //JS won't complain if we try remove a class that
    //doesn't exist on the object
  }

   $('#os0').on('change', function(e) {
   var choice = $('#os0').val();
   console.log(choice);
   console.log('hi');
   
    if (choice == '5 Meals'){
     console.log('option1');
     document.getElementById('meal1').style.visibility = 'hidden';
     document.getElementById('m1').style.visibility = 'hidden';
     document.getElementById('meal2').style.visibility = 'hidden';
     document.getElementById('m2').style.visibility = 'hidden';
     document.getElementById('meal3').style.visibility = 'hidden';
     document.getElementById('m3').style.visibility = 'hidden';
     document.getElementById('meal4').style.visibility = 'hidden';
     document.getElementById('m4').style.visibility = 'hidden';
     document.getElementById('meal5').style.visibility = 'hidden';
     document.getElementById('m5').style.visibility = 'hidden';
     document.getElementById('meal6').style.visibility = 'hidden'; 
     document.getElementById('m6').style.visibility = 'hidden';     
     document.getElementById('meal7').style.visibility = 'hidden';
     document.getElementById('m7').style.visibility = 'hidden';
     document.getElementById('meal8').style.visibility = 'hidden';
     document.getElementById('m8').style.visibility = 'hidden';
     document.getElementById('meal9').style.visibility = 'hidden';
     document.getElementById('m9').style.visibility = 'hidden';
     document.getElementById('meal10').style.visibility = 'hidden';    
     document.getElementById('m10').style.visibility = 'hidden';   
     
     var orderinfo =  document.getElementById('#meals');
    orderinfo.setAttribute('value', choice);

   }
   
   if (choice == '6 Meals'){
     console.log('option1');
     document.getElementById('meal1').style.visibility = 'visible';
     document.getElementById('m1').style.visibility = 'visible';
     document.getElementById('meal2').style.visibility = 'visible';
     document.getElementById('m2').style.visibility = 'visible';
     document.getElementById('meal3').style.visibility = 'visible';
     document.getElementById('m3').style.visibility = 'visible';
     document.getElementById('meal4').style.visibility = 'visible';
     document.getElementById('m4').style.visibility = 'visible';
     document.getElementById('meal5').style.visibility = 'visible';
     document.getElementById('m5').style.visibility = 'visible';
     document.getElementById('meal6').style.visibility = 'visible'; 
     document.getElementById('m6').style.visibility = 'visible';     
     document.getElementById('meal7').style.visibility = 'hidden';
     document.getElementById('m7').style.visibility = 'hidden';
     document.getElementById('meal8').style.visibility = 'hidden';
     document.getElementById('m8').style.visibility = 'hidden';
     document.getElementById('meal9').style.visibility = 'hidden';
     document.getElementById('m9').style.visibility = 'hidden';
     document.getElementById('meal10').style.visibility = 'hidden';    
     document.getElementById('m10').style.visibility = 'hidden';  

var orderinfo =  document.getElementById('#meals');
    orderinfo.setAttribute('value', choice);     

   }
   else if (choice == '7 Meals'){
     console.log('option2');
     document.getElementById('meal1').style.visibility = 'visible';
     document.getElementById('m1').style.visibility = 'visible';
     document.getElementById('meal2').style.visibility = 'visible';
     document.getElementById('m2').style.visibility = 'visible';
     document.getElementById('meal3').style.visibility = 'visible';
     document.getElementById('m3').style.visibility = 'visible';
     document.getElementById('meal4').style.visibility = 'visible';
     document.getElementById('m4').style.visibility = 'visible';
     document.getElementById('meal5').style.visibility = 'visible';
     document.getElementById('m5').style.visibility = 'visible';
     document.getElementById('meal6').style.visibility = 'visible'; 
     document.getElementById('m6').style.visibility = 'visible';     
     document.getElementById('meal7').style.visibility = 'visible';
     document.getElementById('m7').style.visibility = 'visible';
     document.getElementById('meal8').style.visibility = 'hidden';
     document.getElementById('m8').style.visibility = 'hidden';
     document.getElementById('meal9').style.visibility = 'hidden';
     document.getElementById('m9').style.visibility = 'hidden';
     document.getElementById('meal10').style.visibility = 'hidden';    
     document.getElementById('m10').style.visibility = 'hidden'; 

var orderinfo =  document.getElementById('#meals');
    orderinfo.setAttribute('value', choice);     
   }
   else if (choice == '8 Meals'){
     console.log('option3');
     document.getElementById('meal1').style.visibility = 'visible';
     document.getElementById('m1').style.visibility = 'visible';
     document.getElementById('meal2').style.visibility = 'visible';
     document.getElementById('m2').style.visibility = 'visible';
     document.getElementById('meal3').style.visibility = 'visible';
     document.getElementById('m3').style.visibility = 'visible';
     document.getElementById('meal4').style.visibility = 'visible';
     document.getElementById('m4').style.visibility = 'visible';
     document.getElementById('meal5').style.visibility = 'visible';
     document.getElementById('m5').style.visibility = 'visible';
     document.getElementById('meal6').style.visibility = 'visible'; 
     document.getElementById('m6').style.visibility = 'visible';     
     document.getElementById('meal7').style.visibility = 'visible';
     document.getElementById('m7').style.visibility = 'visible';
     document.getElementById('meal8').style.visibility = 'visible';
     document.getElementById('m8').style.visibility = 'visible';
     document.getElementById('meal9').style.visibility = 'hidden';
     document.getElementById('m9').style.visibility = 'hidden';
     document.getElementById('meal10').style.visibility = 'hidden';    
     document.getElementById('m10').style.visibility = 'hidden';
     
     var orderinfo =  document.getElementById('#meals');
    orderinfo.setAttribute('value', choice);
   }
   else if (choice == '9 Meals'){
     console.log('option3');
     document.getElementById('meal1').style.visibility = 'visible';
     document.getElementById('m1').style.visibility = 'visible';
     document.getElementById('meal2').style.visibility = 'visible';
     document.getElementById('m2').style.visibility = 'visible';
     document.getElementById('meal3').style.visibility = 'visible';
     document.getElementById('m3').style.visibility = 'visible';
     document.getElementById('meal4').style.visibility = 'visible';
     document.getElementById('m4').style.visibility = 'visible';
     document.getElementById('meal5').style.visibility = 'visible';
     document.getElementById('m5').style.visibility = 'visible';
     document.getElementById('meal6').style.visibility = 'visible'; 
     document.getElementById('m6').style.visibility = 'visible';     
     document.getElementById('meal7').style.visibility = 'visible';
     document.getElementById('m7').style.visibility = 'visible';
     document.getElementById('meal8').style.visibility = 'visible';
     document.getElementById('m8').style.visibility = 'visible';
     document.getElementById('meal9').style.visibility = 'visible';
     document.getElementById('m9').style.visibility = 'visible';
     document.getElementById('meal10').style.visibility = 'hidden';    
     document.getElementById('m10').style.visibility = 'hidden';  
     
     var orderinfo =  document.getElementById('#meals');
    orderinfo.setAttribute('value', choice);
   }
   else if (choice == '10 Meals'){
     console.log('option3');
     document.getElementById('meal1').style.visibility = 'visible';
     document.getElementById('m1').style.visibility = 'visible';
     document.getElementById('meal2').style.visibility = 'visible';
     document.getElementById('m2').style.visibility = 'visible';
     document.getElementById('meal3').style.visibility = 'visible';
     document.getElementById('m3').style.visibility = 'visible';
     document.getElementById('meal4').style.visibility = 'visible';
     document.getElementById('m4').style.visibility = 'visible';
     document.getElementById('meal5').style.visibility = 'visible';
     document.getElementById('m5').style.visibility = 'visible';
     document.getElementById('meal6').style.visibility = 'visible'; 
     document.getElementById('m6').style.visibility = 'visible';     
     document.getElementById('meal7').style.visibility = 'visible';
     document.getElementById('m7').style.visibility = 'visible';
     document.getElementById('meal8').style.visibility = 'visible';
     document.getElementById('m8').style.visibility = 'visible';
     document.getElementById('meal9').style.visibility = 'visible';
     document.getElementById('m9').style.visibility = 'visible';
     document.getElementById('meal10').style.visibility = 'visible';    
     document.getElementById('m10').style.visibility = 'visible'; 

    var orderinfo =  document.getElementById('#meals');
    orderinfo.setAttribute('value', choice);     
   }
   });
 
   
  
  //end meal select
  
  //--------Check for delivery---------------------------------
  $('#deliveryy').on('click', function(e) {
    e.preventDefault();
    yesCheck();
    
  });
  
  $('#deliveryn').on('click', function(e) {
    e.preventDefault();
    yesCheck();
    
  });
  
  function yesCheck() {
    if (document.getElementById('deliveryy').checked) {
        document.getElementById('address-label').style.display = 'block';
        document.getElementById('address').style.display = 'block';
    }
    else if(document.getElementById('deliveryn').checked) {
        document.getElementById('address-label').style.display = 'none';
        document.getElementById('address').style.display = 'none';
    }
  }
  
  $("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
    if ($box.is(":checked")) {
      // the name of the box is retrieved using the .attr() method
      // as it is assumed and expected to be immutable
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      // the checked state of the group/box on the other hand will change
      // and the current value is retrieved using .prop() method
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });

//------end delivery check-------------------------------------

//---------pull out menu for navigation---------------------------
 /*   $('#menuToggle').on('click', function(e) {
    // Don't follow the #tools-jump link:
    e.preventDefault();
    // prevent event bubbling; without this
    // line, inner click event, on #content,
    // will fire immediately:
    e.stopPropagation();

    $('html').toggleClass('has-toolbar');
    $('#menuToggle').on('click', function(e) {
      $('html').toggleClass('has-toolbar');
  //    $('html').toggleClass('no-toolbar');
    });
    });
 */   
    $('#hto').on('click', function(e) {
    // Don't follow the #tools-jump link:
    e.preventDefault();
    // prevent event bubbling; without this
    // line, inner click event, on #content,
    // will fire immediately:
    e.stopPropagation();
    $('html').toggleClass('hto');
    console.log('clicked!');
    });
    
    
    $("#menuToggle").click(function(){
        $("#navigation").slideToggle("slow");
        
     $('html').toggleClass('has-toolbar');
     

     $('#page').on('click', function(e) {
      $('html').removeClass('has-toolbar');
    });

    });

    
    
 //------end of navigation menu-------------------------------------

 //--------------- slideshow for gallery --------------------------
  // var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
    // showDivs(slideIndex += n);
// }

// function showDivs(n) {
    // var i;
    // var x = document.getElementsByClassName("mySlides");
    // if (n > x.length) {slideIndex = 1} 
    // if (n < 1) {slideIndex = x.length} ;
    // for (i = 0; i < x.length; i++) {
        // x[i].style.display = "none"; 
    // }
    // x[slideIndex-1].style.display = "block"; 
// }
 //---------------- end of slideshow ---------------------
 
 $('#information').on('submit', function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    console.log('pshed');
    $('#contact').append('Thank you '+name+'. A confirmation email will be sent to you shortly');
 });

}); 

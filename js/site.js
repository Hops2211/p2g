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

   $('#meals').on('change', function(e) {
   var choice = $('#meals').val();
   console.log(choice);
   console.log('hi');
   
    if (choice == '5'){
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
   
   if (choice == '6'){
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
   else if (choice == '7'){
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
   else if (choice == '8'){
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
   else if (choice == '9'){
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
   else if (choice == '10'){
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
  
  $('#meal1').on('change', function(e) {
   var choice = $('#meal1').val();
   console.log(choice);
   console.log('meal 6 changed');
   var meal =  document.getElementById('meal-1');
    meal.setAttribute('value', choice); 
  });
  
  $('#meal2').on('change', function(e) {
   var choice = $('#meal2').val();
   console.log(choice);
   console.log('meal 6 changed');
   var orderinfo =  document.getElementById('meal-2');
    orderinfo.setAttribute('value', choice); 
  });
  
  $('#meal3').on('change', function(e) {
   var choice = $('#meal3').val();
   console.log(choice);
   console.log('meal 6 changed');
   var orderinfo =  document.getElementById('meal-3');
    orderinfo.setAttribute('value', choice); 
  });
  
  $('#meal4').on('change', function(e) {
   var choice = $('#meal4').val();
   console.log(choice);
   console.log('meal 6 changed');
   var orderinfo =  document.getElementById('meal-4');
    orderinfo.setAttribute('value', choice); 
  });
  
  $('#meal5').on('change', function(e) {
   var choice = $('#meal5').val();
   console.log(choice);
   console.log('meal 6 changed');
   var orderinfo =  document.getElementById('meal-5');
    orderinfo.setAttribute('value', choice); 
  });
  
  $('#meal6').on('change', function(e) {
   var choice = $('#meal6').val();
   console.log(choice);
   console.log('meal 6 changed');
   var orderinfo =  document.getElementById('meal-6');
    orderinfo.setAttribute('value', choice); 
  });
  
  $('#meal7').on('change', function(e) {
   var choice = $('#meal7').val();
   console.log(choice);
   console.log('meal 6 changed');
   var orderinfo =  document.getElementById('meal-7');
    orderinfo.setAttribute('value', choice); 
  });
  
  $('#meal8').on('change', function(e) {
   var choice = $('#meal8').val();
   console.log(choice);
   console.log('meal 6 changed');
   var orderinfo =  document.getElementById('meal-8');
    orderinfo.setAttribute('value', choice); 
  });
  
  $('#meal9').on('change', function(e) {
   var choice = $('#meal9').val();
   console.log(choice);
   console.log('meal 6 changed');
   var orderinfo =  document.getElementById('meal-9');
    orderinfo.setAttribute('value', choice); 
  });
  
  $('#meal10').on('change', function(e) {
   var choice = $('#meal10').val();
   console.log(choice);
   console.log('meal 6 changed');
   var orderinfo =  document.getElementById('meal-10');
    orderinfo.setAttribute('value', choice); 
  });
   
  
  //end meal select
  
  //--------Check for delivery---------------------------------
  $('#deliveryy').on('click', function(e) {
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
    $('#menuToggle').on('click', function(e) {
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

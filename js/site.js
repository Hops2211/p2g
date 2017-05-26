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
    $('#6meals').removeClass('6meals-select');
    $('#7meals').removeClass('7meals-select');
    $('#8meals').removeClass('8meals-select');
    $('#9meals').removeClass('9meals-select');
    $('#10meals').removeClass('10meals-select');
  }

   $('#meal-form-help').on('change', function(e) {
   var choice = $('#meals').val();
   console.log(choice);
   
   
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
   }
   });
  
  
  
  $('#meal-form').on('submit', function(e) {
    e.preventDefault();
    var choice = $('#meals').val();
    $('html').removeClass('no-select');
    clearOld();
    console.log('hi');
    console.log(choice);

    if (choice == '6m') {
      $('#html').addClass('6meals-select');
      console.log(choice);
    }
    else if (choice == '7m') {
      $('#7meals').addClass('7meals-select');
    }
    else if (choice == '8m') {
      $('#8meals').addClass('8meals-select');
    }
    else if (choice == '9m') {
      $('#9meals').addClass('9meals-select');
    }
    else if (choice == '10') {
      $('#10meals').addClass('10meals-select');
    }
    else {
      alert("This message should not appear. If it does, contact us through github.");
    }
  });
  
  //end meal select
  
  //--------Check for delivery---------------------------------
  $('#information').on('click', function(e) {
    e.preventDefault();
    yesCheck();
    
  });
  
  function yesCheck() {
    if (document.getElementById('deliveryy').checked) {
        document.getElementById('address-input').style.display = 'block';
    }
    else if(document.getElementById('deliveryn').checked) {
          document.getElementById('address-input').style.display = 'none';
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

 
  var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
}); 

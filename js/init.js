$(document).ready(function(){
    //launch contact modal
  $('.modal-trigger').leanModal();
  });

  // randomize order of images
  $(function () {
    var parent = $(".grid");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }

  // image hover effect  
  $(function() {
    $('.grid-item').hover(function() { 
    $(this).css("opacity", "0.85");
    }, function(){
    $(this).css("opacity", "1");
    });
    });

});




// external js: isotope.pkgd.js, imagesloaded.pkgd.js

$(document).ready( function() {

      //launch contact modal
  $('.modal-trigger').leanModal();
  });

  // randomize order of images
  $(function () {
    var parent = $(".grid");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }

  // image hover effect  
  $(function() {
    $('.grid-item').hover(function() { 
    $(this).css("opacity", "0.85");
    }, function(){
    $(this).css("opacity", "1");
    });
    });
    
  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue =  filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  }); 

  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
  // layout Isotope after each image loads
 $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');

  });  



});

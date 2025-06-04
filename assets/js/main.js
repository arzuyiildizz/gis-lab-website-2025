

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}
		// Lightbox and zoom & pan function
  $(function() {
    let zoomed = false;
    let isDragging = false;
    let startX, startY;
    let translateX = 0, translateY = 0;

    // Click on the image to open
    $('a.image.featured').on('click', function(e) {
      e.preventDefault();
      $('#custom-lightbox-img').attr('src', $(this).attr('href')).css({
        transform: 'scale(1) translate(0px, 0px)',
        cursor: 'zoom-in'
      });
      $('#custom-lightbox').css('display', 'flex');
      zoomed = false;
      translateX = 0;
      translateY = 0;
    });

    // Click on the image to zoom in/out toggle
    $('#custom-lightbox-img').on('click', function() {
      zoomed = !zoomed;
      if (zoomed) {
        $(this).css({
          transform: 'scale(2) translate(0px, 0px)',
          cursor: 'grab',
          transformOrigin: 'top left'
        });
      } else {
        translateX = 0;
        translateY = 0;
        $(this).css({
          transform: 'scale(1) translate(0px, 0px)',
          cursor: 'zoom-in'
        });
      }
    });

    // Close lightbox on Escape key
    $(document).on('keydown', function(e) {
      if (e.key === 'Escape') {
        $('#custom-lightbox').hide();
      }
    });

    // Mouse down (star drag)
    $('#custom-lightbox-img').on('mousedown', function(e) {
      if (!zoomed) return;
      isDragging = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      $(this).css('cursor', 'grabbing');
      e.preventDefault();
    });

    // Mouse up (stop drag)
    $(document).on('mouseup', function() {
      isDragging = false;
      if (zoomed) $('#custom-lightbox-img').css('cursor', 'grab');
    });

    // Mouse move (drag)
    $(document).on('mousemove', function(e) {
      if (!isDragging || !zoomed) return;
      e.preventDefault();
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      $('#custom-lightbox-img').css('transform', `scale(2) translate(${translateX}px, ${translateY}px)`);
    });
  });
		

})(jQuery);


(function($) {

  // ... existing code ...

  // Lightbox function (with jQuery)
  $(function() {
    let zoomed = false;
    
    $('a.image.featured').on('click', function(e) {
      e.preventDefault();
      $('#custom-lightbox-img').attr('src', $(this).attr('href')).css({
        transform: 'scale(1)',
        cursor: 'zoom-in'
      });
      $('#custom-lightbox').css('display', 'flex');
      zoomed = false;
    });

    $('#custom-lightbox-img').on('click', function() {
      zoomed = !zoomed;
      if (zoomed) {
        $(this).css({transform: 'scale(2)', cursor: 'zoom-out'});
      } else {
        $(this).css({transform: 'scale(1)', cursor: 'zoom-in'});
      }
    });

    $(document).on('keydown', function(e) {
      if (e.key === 'Escape') {
        $('#custom-lightbox').hide();
      }
    });
  });

})(jQuery);

// zoom & pan code for lightbox
const lightboxImg = document.getElementById("custom-lightbox-img");
let zoomed = false;
let isDragging = false;
let startX, startY;
let translateX = 0, translateY = 0;

const lightboxClose = document.getElementById("lightbox-close");
if (lightboxClose) {
  lightboxClose.addEventListener("click", () => {
    document.getElementById("custom-lightbox").style.display = "none";
  });
}



lightboxImg.addEventListener('click', function(e) {
  zoomed = !zoomed;
  if (zoomed) {
    this.style.transform = `scale(2) translate(0px, 0px)`;
    this.style.cursor = "grab";
    this.style.transformOrigin = "top left";
  } else {
    translateX = 0;
    translateY = 0;
    this.style.transform = `scale(1) translate(0px, 0px)`;
    this.style.cursor = "zoom-in";
  }
});

// Mouse down
lightboxImg.addEventListener('mousedown', function(e) {
  if (!zoomed) return;
  isDragging = true;
  startX = e.clientX - translateX;
  startY = e.clientY - translateY;
  this.style.cursor = "grabbing";
});

// Mouse up
document.addEventListener('mouseup', function() {
  isDragging = false;
  if (zoomed) lightboxImg.style.cursor = "grab";
});

// Mouse move (drag)
document.addEventListener('mousemove', function(e) {
  if (!isDragging || !zoomed) return;
  e.preventDefault();
  translateX = e.clientX - startX;
  translateY = e.clientY - startY;

  // It is made softer by applying a slight multiplier
  lightboxImg.style.transform = `scale(2) translate(${translateX}px, ${translateY}px)`;
});

// close lightbox on clicking the close button
$('#lightbox-close').on('click', function() {
  $('#custom-lightbox').hide();
});

// Close the lightbox when clicking outside the content area
$('#custom-lightbox').on('click', function(e) {
  if (!$(e.target).closest('.lightbox-content').length) {
    $('#custom-lightbox').hide();
  }
});

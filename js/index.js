// Progress bar
const progressBar = $('.progress-bar');
const totalHeight = $(document).height() - $(window).height();

$(window).on('scroll', () => {
  const progress = ($(window).scrollTop() / totalHeight) * 100;
  progressBar.css('width', `${progress}%`);
});

// Transition Smooth
$('.nav-link').on('click', function(e) {
  // empêche le comportement par défaut des ancres (chargement de la page)
  e.preventDefault();

  // obtient l'ID de la section ciblée
  const target = $(this).attr('href');

  // utilise l'animation de défilement de jQuery pour se déplacer vers la section ciblée
  $('html, body').animate({
  scrollTop: $(target).offset().top
  }, 1000);
});

// Waypoints pour déclencher l'animation fadeInLeft
$(document).ready(function(){
  $('#skills').waypoint(function(direction) {
    $('#skills').addClass('animate__fadeInLeft');
  }, { offset: '50%' });
});



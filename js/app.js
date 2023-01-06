// Progress bar
const progressBar = $('.progress-bar');
const totalHeight = $(document).height() - $(window).height();

$(window).on('scroll', () => {
    const progress = ($(window).scrollTop() / totalHeight) * 100;
    progressBar.css('width', `${progress}%`);
});

// Sélectionner tous les onglets de la navbar
var $tabs = $('.navbar a');

// Ajouter un gestionnaire d'évènement "click" à chaque onglet
$tabs.on('click', function() {
  // Retirer la classe "active" de tous les onglets
  $tabs.removeClass('active');
  // Ajouter la classe "active" à l'onglet sur lequel on a cliqué
  $(this).addClass('active');
});
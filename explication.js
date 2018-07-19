var Slider = {

    // Définir la diapositive actuelle
    slideIndex: 0,

    list: function () {
    	Slider.slideInProgress();
    	Slider.slideAfter();
    	Slider.slideBefore();
        Slider.slideAuto();
        Slider.playAutoClick();
        Slider.nextSlideOnClick();
        Slider.prevSlideOnClick();
        Slider.keypressSlide();
    },

    // Afficher la diapositive en cours
    slideInProgress: function () {
        var slides = $('.etape');
        var slide = slides.eq(Slider.slideIndex);
        slides.hide();
        slide.css('display', 'flex');
    },

	// Définir la diapositive suivante comme diapositive actuelle
    slideAfter: function () {
        var slides = $('.etape');
        var slidesNumber = slides.length;
        Slider.slideIndex += 1;
        if (Slider.slideIndex > slidesNumber - 1) {
            Slider.slideIndex = 0;
        }
    },

	// Définir la diapositive précédente comme la diapositive actuelle
    slideBefore: function () {
        var slides = $('.etape');
        var slidesNumber = slides.length;
        Slider.slideIndex -= 1;
        if (Slider.slideIndex < 0) {
            Slider.slideIndex = slidesNumber - 1;
        }
    },

	// Fonction de glissière automatique et contrôlable
    slideAuto: function () {
        var play = $('.next');
        play.click(function () {
            var timer = setInterval(function () {
                Slider.slideAfter();
                Slider.slideInProgress();
            }, 20000);
            var stop = $('.prev');
            stop.click(function () {
                clearInterval(timer);
            });
        });
    },

    // curseur automatique en charge
    playAutoClick: function () {
        var play = $('.next');
        play.trigger('click');
    },

	// suivant, cliquez sur le bouton ">"
    nextSlideOnClick: function () {
        var next = $('.next');
        next.click(function () {
            Slider.slideAfter();
            Slider.slideInProgress();
        });
    },

	// slide précédente cliquer sur le bouton "<"
    prevSlideOnClick: function () {
        var prev = $('.prev');
        prev.click(function () {
            Slider.slideBefore();
            Slider.slideInProgress();
        });
    },

	// diapositive précédente / suivante avec clavier
    keypressSlide: function () {
        $('body').keydown(function (e) {
            if (e.which === 39) {
                Slider.slideAfter();
                Slider.slideInProgress();
            } else if (e.which === 37) {
                Slider.slideBefore();
                Slider.slideInProgress();
            }
        })
    },
}


$(function () {
    Slider.list();
});
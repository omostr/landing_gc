(function() {
'use strict';

    //creation slider object
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        allowTouchMove: false,
        autoHeight: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    }); 

    mySwiper.on('resize', function () {
        if ($(window).width() < 600) {
        
            mySwiper.height = 800;
        };
    });

    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
        });
    }, false);

  

   
})();
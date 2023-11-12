document.addEventListener('DOMContentLoaded', function() {
    var textArray = [
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        "Rem repellat temporibus quam tenetur consequatur nostrum,",
        "Tvitae impedit atque expedita?"
    ];

    var carouselInner = document.querySelector('#textCarousel .carousel-inner');

    textArray.forEach(function(text, index) {
        var item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) {
            item.classList.add('active');
        }

        var content = document.createElement('div');
        content.textContent = text;
        item.appendChild(content);

        carouselInner.appendChild(item);
    });

    $('#textCarousel').carousel({
        interval: 2000 // Cambia cada 2 segundos
    });
});

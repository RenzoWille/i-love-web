document.addEventListener("DOMContentLoaded", function () {
    // Wacht tot de hele pagina is geladen. Pas dan begint het script te draaien, zodat het zeker weet dat alle afbeeldingen in de HTML staan.

    const elements = document.querySelectorAll('.scroll-fade-in');
    // Zoek op de pagina alle elementen met de class .scroll-fade-in. Dat zijn de afbeeldingen die je later wilt laten "fade-in"-animeren.

    const observer = new IntersectionObserver((entries) => {
        // Hier maken we een “waarnemer” (observer) aan. Die kijkt of een afbeelding in beeld komt (dus of jij ernaartoe scrollt).

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
        //  Voor elk element dat in beeld komt controleert het script of dat element daadwerkelijk zichtbaar is op je scherm. Als dat zo is, voegt het de class visible toe
    }, {
        threshold: 0.1
    });
    // Als minstens 10% van het element zichtbaar is op het scherm, dan moet de fade-in gestart worden.

    elements.forEach(el => observer.observe(el));
});
// “Hou elk van die elementen in de gaten.” Dus nu weet de browser welke afbeeldingen hij moet laten animeren als je naar beneden scrollt.
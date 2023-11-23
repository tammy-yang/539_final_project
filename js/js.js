document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function () {
        // Show the button when the user scrolls down 20px from the top of the document
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        // Scroll to the top smoothly when the button is clicked
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const photoContent = document.querySelector('.photoContent');


    function handleScroll(event) {
        event.preventDefault(); 
        photoContent.scrollLeft += event.deltaY; 
    }

    photoContent.addEventListener('wheel', handleScroll);

    function adjustScroll() {
        resetScroll();
        requestAnimationFrame(adjustScroll);
    }

    adjustScroll();
});


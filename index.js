window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

document.getElementById("down").addEventListener('click', event => {
    smoothScroll(document.getElementById("main"))
})

window.addEventListener('scroll', event => {
    const navbar = document.getElementById("navbar")
    if (window.scrollY >= 50 && !navbar.classList.contains("navbar-background")) {
        navbar.classList.add("navbar-background");
    } else if (window.scrollY < 50 && navbar.classList.contains("navbar-background")) {
        navbar.classList.remove("navbar-background");
    }
})

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 5);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}


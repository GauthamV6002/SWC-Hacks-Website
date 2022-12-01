const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("shown");
            setTimeout(() => entry.target.classList.remove("fadeInStack"), 100 * (index + 1));
        }
    })
})

const fadeInUps = document.querySelectorAll('.fadeInUp, .fadeInRight, .fadeInLeft, .fadeInStack');
fadeInUps.forEach(el => observer.observe(el));
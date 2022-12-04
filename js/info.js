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

const replace = document.getElementById("replace");

replace.addEventListener("click", () => {
    replace.innerText = "What if I can't code? \n\n No problem! You can either use it as a chance to learn to code, or work towards one of our other non-code tracks such as UI/UX or Pitch!"
    replace.classList.add("white-bg-highlight")
})
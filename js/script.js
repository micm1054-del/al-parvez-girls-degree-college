/* ==========================
   AL PARVEZ GIRLS DEGREE COLLEGE
   script.js
========================== */

// Sticky Header Shadow
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 6px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Counter Animation
const counters = document.querySelectorAll(".counter h2");

const speed = 80;

function startCounter() {

    counters.forEach(counter => {

        const targetText = counter.innerText;

        const target = parseInt(targetText.replace(/\D/g, ""));

        if (isNaN(target)) return;

        let count = 0;

        const update = () => {

            count += Math.ceil(target / speed);

            if (count >= target) {

                counter.innerText = targetText;

            } else {

                if (targetText.includes("+"))
                    counter.innerText = count + "+";
                else
                    counter.innerText = count;

                requestAnimationFrame(update);
            }

        };

        update();

    });

}

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter();

            observer.disconnect();

        }

    });

});

observer.observe(document.querySelector(".counter"));

// Card Hover Effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// Reveal Animation
const revealElements = document.querySelectorAll(
    ".card, .left-box, .right-box"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s";

    revealObserver.observe(el);

});

// Current Year in Footer
const footer = document.querySelector("footer");

footer.innerHTML =
`© ${new Date().getFullYear()} AL PARVEZ GIRLS DEGREE COLLEGE. All Rights Reserved.`;
.gallery-section{
    padding:80px 0;
    background:#f8f8f8;
}

.section-title{
    text-align:center;
    font-size:40px;
    color:#7a1020;
    margin-bottom:40px;
}

.gallery-grid{
    width:90%;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
}

.gallery-grid img{
    width:100%;
    height:250px;
    object-fit:cover;
    border-radius:12px;
    transition:.4s;
    cursor:pointer;
    box-shadow:0 5px 15px rgba(0,0,0,.2);
}

.gallery-grid img:hover{
    transform:scale(1.05);
}
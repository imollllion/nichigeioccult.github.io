/* --------------------
   SCROLL REVEAL
-------------------- */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    observer.observe(element);

});


/* --------------------
   MOUSE PARALLAX
-------------------- */

const hero =
    document.querySelector(".hero h1");


document.addEventListener("mousemove", (event) => {

    if (!hero) return;

    const x =
        (event.clientX / window.innerWidth - .5) * 10;

    const y =
        (event.clientY / window.innerHeight - .5) * 10;

    hero.style.transform =
        `translate(${x}px, ${y}px)`;

});
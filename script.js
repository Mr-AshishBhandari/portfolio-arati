/* =====================================================
   AURELIA HART PORTFOLIO
   Main JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       LOADER ANIMATION
    ========================================== */

    const loader = document.querySelector(".loader-wrapper");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.classList.add("hidden");
        }, 800);
    });


    /* ==========================================
       MOBILE MENU TOGGLE
    ========================================== */

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });


    /* ==========================================
       SMOOTH SCROLLING
    ========================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                const offsetTop =
                    targetSection.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });


    /* ==========================================
       NAVBAR BACKGROUND ON SCROLL
    ========================================== */

    const header = document.querySelector(".header");

    function handleNavbar() {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    handleNavbar();

    window.addEventListener("scroll", handleNavbar);


    /* ==========================================
       ACTIVE NAVIGATION LINK
    ========================================== */

    const sections = document.querySelectorAll("section");

    function setActiveLink() {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {
                link.classList.add("active");
            }
        });
    }

    setActiveLink();

    window.addEventListener("scroll", setActiveLink);


    /* ==========================================
       SCROLL REVEAL ANIMATION
    ========================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );
                    }
                });

            },

            {
                threshold: 0.15
            }
        );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* ==========================================
       BACK TO TOP BUTTON
    ========================================== */

    const backToTop =
        document.getElementById("backToTop");

    function toggleBackToTop() {

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    }

    toggleBackToTop();

    window.addEventListener(
        "scroll",
        toggleBackToTop
    );

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


  /* ==========================================
   CONTACT FORM - FORMSPREE
========================================== */

const contactForm =
    document.getElementById("contactForm");

const successMessage =
    document.getElementById("successMessage");

contactForm.addEventListener(
    "submit",
    async function (e) {

        e.preventDefault();

        try {

            const response = await fetch(
                contactForm.action,
                {
                    method: "POST",
                    body: new FormData(contactForm),
                    headers: {
                        Accept: "application/json"
                    }
                }
            );

            if (response.ok) {

                successMessage.textContent =
                    "Message sent successfully ✨";

                successMessage.classList.add("show");

                contactForm.reset();

                setTimeout(() => {

                    successMessage.classList.remove(
                        "show"
                    );

                }, 4000);

            } else {

                successMessage.textContent =
                    "Something went wrong. Please try again.";

                successMessage.classList.add("show");
            }

        } catch (error) {

            successMessage.textContent =
                "Network error. Please try again later.";

            successMessage.classList.add("show");
        }
    }
);
    /* ==========================================
       HERO FADE-IN ANIMATION
    ========================================== */

    const heroContent =
        document.querySelector(".hero-content");

    heroContent.style.opacity = "0";
    heroContent.style.transform =
        "translateY(40px)";

    setTimeout(() => {

        heroContent.style.transition =
            "all 1.2s ease";

        heroContent.style.opacity = "1";

        heroContent.style.transform =
            "translateY(0)";

    }, 500);


    /* ==========================================
       BUTTON HOVER RIPPLE EFFECT
    ========================================== */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {

                button.style.transform =
                    "translateY(-3px)";
            }
        );

        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";
            }
        );
    });


    /* ==========================================
       PDF VIEWER ENHANCEMENT
    ========================================== */

    const pdfViewers =
        document.querySelectorAll(".pdf-viewer");

    pdfViewers.forEach(viewer => {

        viewer.addEventListener("load", () => {

            viewer.style.opacity = "0";

            setTimeout(() => {

                viewer.style.transition =
                    "opacity 0.8s ease";

                viewer.style.opacity = "1";

            }, 150);

        });

    });


    /* ==========================================
       PARALLAX HERO EFFECT
    ========================================== */

    const heroGradient =
        document.querySelector(".hero-gradient");

    window.addEventListener(
        "scroll",
        () => {

            const scroll =
                window.pageYOffset;

            if (heroGradient) {

                heroGradient.style.transform =
                    `translateY(${scroll * 0.15}px)`;
            }
        }
    );


    /* ==========================================
       SECTION FADE DELAY
    ========================================== */

    const revealItems =
        document.querySelectorAll(
            ".skill-card, .info-card, .social-links a"
        );

    revealItems.forEach((item, index) => {

        item.style.transitionDelay =
            `${index * 60}ms`;

    });


    /* ==========================================
       KEYBOARD ACCESSIBILITY
    ========================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                hamburger.classList.remove(
                    "active"
                );

                navMenu.classList.remove(
                    "active"
                );
            }
        }
    );


    /* ==========================================
       CURRENT YEAR AUTO UPDATE
       (optional enhancement)
    ========================================== */

    const footerText =
        document.querySelector(".footer p");

    if (footerText) {

        const year =
            new Date().getFullYear();

        footerText.innerHTML =
            `© ${year} Arati Bhandari. All Rights Reserved.`;
    }

});


/* =====================================================
   OPTIONAL UTILITIES
===================================================== */

/**
 * Smooth scroll helper
 */
function scrollToSection(id) {

    const section =
        document.querySelector(id);

    if (!section) return;

    window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
    });
}

/**
 * Check viewport visibility
 */
function isInViewport(element) {

    const rect =
        element.getBoundingClientRect();

    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
    );
}
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#000"; 
    } else {
        navbar.style.backgroundColor = "#000";
    }
});


/*navbar*/

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.querySelector(".navbar");
  const navHeight = navbar.offsetHeight;

 
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - navHeight,
          behavior: "smooth"
        });
      }
    });
  });


  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 50; 
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

/**contact form */

const form = document.querySelector(".contact-form");
const status = document.getElementById("form-status");
const submitBtn = form.querySelector(".submit-btn");

form.addEventListener("submit", async function (event) {
  event.preventDefault(); 
  const data = new FormData(form);


  submitBtn.disabled = true;
  submitBtn.innerHTML = "Submitting...";

  try {
    let response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      status.style.color = "#008000";
      status.textContent = "Message Yeeted Successfully";
      submitBtn.innerHTML = "Submitted";
      form.reset();
    } else {
      status.style.color = "red";
      status.textContent = "Oops! Something went wrong.";
      submitBtn.innerHTML = "Submit";
      submitBtn.disabled = false;
    }
  } catch (error) {
    status.style.color = "red";
    status.textContent = "Network Error!";
    submitBtn.innerHTML = "Submit";
    submitBtn.disabled = false;
  }
});



/**experiance and education**/

const tabButtons = document.querySelectorAll('.tabs__btn');
const panels = document.querySelectorAll('.panel');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // buttons
    tabButtons.forEach(b => b.classList.remove('tabs__btn--active'));
    btn.classList.add('tabs__btn--active');

    // panels
    panels.forEach(p => p.classList.remove('panel--active'));
    document.getElementById(btn.dataset.tab).classList.add('panel--active');
  });
});


/*cursor*/

document.addEventListener("DOMContentLoaded", () => {
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      {
        duration: 300,
        fill: "forwards",
      }
    );
  });
});




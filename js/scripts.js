document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Generative AI Engineer"],
    typeSpeed: 90,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });
});

const paragraphs = document.querySelectorAll('.about-content p');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.9;

  paragraphs.forEach(p => {
    const rect = p.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      p.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            message: form.message.value
        };

        fetch("https://script.google.com/macros/s/AKfycbznaqnTvyYtUs5BKjx-fTyZulFFSIA1RINGh_prSk3gx6LpGI5PMq40pmCwAWi2bIlB3Q/exec", {
            method: "POST",
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch(err => {
            alert("Error sending message!");
            console.error(err);
        });
    });
});

// Animate Technical Skills Bars
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".fill.html").style.width = "90%";
  document.querySelector(".fill.css").style.width = "85%";
  document.querySelector(".fill.js").style.width = "80%";
  document.querySelector(".fill.python").style.width = "75%";
  document.querySelector(".fill.cpp").style.width = "70%";
});

// Animate Professional Skills Circles
document.querySelectorAll(".circle").forEach(circle => {
  let percent = parseInt(circle.getAttribute("data-percent"));
  let start = 0;
  let speed = 20;
  
  let interval = setInterval(() => {
    if (start <= percent) {
      circle.style.background = `conic-gradient(#00abf0 ${start * 3.6}deg, #333 ${start * 3.6}deg)`;
      circle.textContent = start + "%";
      start++;
    } else {
      clearInterval(interval);
    }
  }, speed);
});



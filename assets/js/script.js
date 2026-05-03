$(document).ready(function () {

  // Mobile menu toggle
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if (window.scrollY > 60) {
      document.querySelector('#scroll-top').classList.add('active');
    } else {
      document.querySelector('#scroll-top').classList.remove('active');
    }

    // scroll spy
    $('section').each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr('id');
      if (top > offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    }, 500, 'linear');
  });

  // contact form
  $("#contact-form").submit(function (event) {
    event.preventDefault();
    alert("Message sent! I will get back to you soon 😊");
    this.reset();
  });

});

// tab visibility change
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Danielle Tsemo";
  } else {
    document.title = "Come Back To Portfolio";
  }
});

// Typed.js effect
var typed = new Typed(".typing-text", {
  strings: [
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "NLP &amp; Computer Vision",
    "AI Research",
    "Flood Prediction with LSTM"
  ],
  loop: true,
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1200,
  startDelay: 300,
  showCursor: true,
  cursorChar: '|',
  smartBackspace: false,
  loopCount: Infinity,
});

// ─── Danielle's Skills ───────────────────────────
const danielleSkills = [
  { name: "Python",        icon: "https://img.icons8.com/color/48/000000/python--v1.png" },
  { name: "R",             icon: "https://img.icons8.com/officel/48/000000/r-project.png" },
  { name: "SQL",           icon: "https://img.icons8.com/color/48/000000/sql.png" },
  { name: "Matlab",        icon: "https://img.icons8.com/fluency/48/000000/matlab.png" },
  { name: "TensorFlow",    icon: "https://img.icons8.com/color/48/000000/tensorflow.png" },
  { name: "PyTorch",       icon: "https://img.icons8.com/fluency/48/000000/pytorch.png" },
  { name: "Scikit-learn",  icon: "https://img.icons8.com/color/48/000000/brain--v1.png" },
  { name: "Keras",         icon: "https://img.icons8.com/color/48/000000/keras.png" },
  { name: "Pandas",        icon: "https://img.icons8.com/color/48/000000/pandas.png" },
  { name: "NumPy",         icon: "https://img.icons8.com/color/48/000000/numpy.png" },
  { name: "OpenCV",        icon: "https://img.icons8.com/color/48/000000/opencv.png" },
  { name: "Flask",         icon: "https://img.icons8.com/fluency/48/000000/flask.png" },
  { name: "Git",           icon: "https://img.icons8.com/color/48/000000/git.png" },
  { name: "GitHub",        icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png" },
  { name: "MongoDB",       icon: "https://img.icons8.com/color/48/000000/mongodb.png" },
  { name: "MySQL",         icon: "https://img.icons8.com/color/48/000000/mysql-logo.png" },
  { name: "Hadoop",        icon: "https://img.icons8.com/color/48/000000/hadoop-distributed-file-system.png" },
  { name: "Splunk",        icon: "https://img.icons8.com/color/48/000000/splunk.png" },
  { name: "Tableau",       icon: "https://img.icons8.com/color/48/000000/tableau-software.png" },
  { name: "LaTeX",         icon: "https://img.icons8.com/ios-filled/48/ffffff/tex.png" },
  { name: "NLP",           icon: "https://img.icons8.com/color/48/000000/natural-language-processing.png" },
  { name: "Computer Vision", icon: "https://img.icons8.com/color/48/000000/visible.png" },
  { name: "Data Mining",   icon: "https://img.icons8.com/color/48/000000/data-configuration.png" },
  { name: "JavaScript",    icon: "https://img.icons8.com/color/48/000000/javascript--v1.png" },
];

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach(skill => {
    skillHTML += `
    <div class="bar">
      <div class="info">
        <img src="${skill.icon}" alt="${skill.name}" onerror="this.src='https://img.icons8.com/color/48/000000/code.png'"/>
        <span>${skill.name}</span>
      </div>
    </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}

showSkills(danielleSkills);

// Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('fade-out');
  }, 700);
});

// Tilt effect
VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 15 });

// disable devtools (same as Jigar)
document.onkeydown = function (e) {
  if (e.keyCode == 123) return false;
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
};

/* ═══════════════════════════════
   SCROLL REVEAL  (exact Jigar)
═══════════════════════════════ */
const srtop = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1000,
  reset: true
});

/* HOME */
srtop.reveal('.home .content h2', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .email', { interval: 600 });

/* ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });

/* SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* AWARDS */
srtop.reveal('.awards-box', { interval: 200 });

/* CONFERENCES */
srtop.reveal('.conf-box', { interval: 200 });

/* PROJECTS */
srtop.reveal('.jp-card', { interval: 150 });

/* CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });

/* CERTIFICATIONS */
srtop.reveal('.cert-slider-wrapper', { delay: 300 });
srtop.reveal('.cert-dots', { delay: 500 });

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/69f7714d0b9cc71c3209418e/1jnn956cp';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

// ─── Generic Slider Factory ───────────────────────────
function makeSlider(sliderSel, prevSel, nextSel, dotsSel, interval) {
  var slider = document.querySelector(sliderSel);
  if (!slider) return;
  var slides = slider.querySelectorAll('.cert-slide');
  var dots   = document.querySelectorAll(dotsSel + ' .cert-dot');
  var current = 0, timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    if (dots[current]) dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }
  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }
  function startAuto() { timer = setInterval(next, interval); }
  function stopAuto()  { clearInterval(timer); }

  var btnNext = document.querySelector(nextSel);
  var btnPrev = document.querySelector(prevSel);
  if (btnNext) btnNext.addEventListener('click', function(){ stopAuto(); next(); startAuto(); });
  if (btnPrev) btnPrev.addEventListener('click', function(){ stopAuto(); prev(); startAuto(); });

  dots.forEach(function(dot){
    dot.addEventListener('click', function(){
      stopAuto();
      goTo(parseInt(this.dataset.index));
      startAuto();
    });
  });
  startAuto();
}

// Certifications slider
makeSlider('#certifications .cert-slider', '#certifications .cert-prev', '#certifications .cert-next', '#certifications .cert-dots', 4000);

// Conferences slider
makeSlider('#conferences .conf-slider', '#conferences .conf-prev', '#conferences .conf-next', '#conferences .conf-dots', 3500);

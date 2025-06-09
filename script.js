// Slideshow Rotation
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function rotateSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
  setTimeout(rotateSlides, 5000);
}
rotateSlides();

// Filter Content by Fan Type
document.querySelectorAll('.toggle').forEach(button => {
  button.addEventListener('click', function() {
    document.querySelectorAll('.toggle').forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    const filter = this.dataset.filter;
    document.querySelectorAll('.content-section').forEach(section => {
      section.style.display = (filter === 'all' || section.classList.contains(filter)) ? 'block' : 'none';
    });
  });
});

// World Map Interactions
document.querySelectorAll('area').forEach(area => {
  area.addEventListener('click', function(e) {
    e.preventDefault();
    const popupId = this.getAttribute('href').substring(1);
    document.querySelectorAll('.map-popup').forEach(popup => popup.style.display = 'none');
    document.getElementById(popupId).style.display = 'block';
  });
});

// Gear 5 Vote
document.querySelectorAll('.vote-button').forEach(button => {
  button.addEventListener('click', function () {
    const side = this.dataset.side;
    alert(`Thanks for voting ${side === 'pro' ? 'FOR Gear 5!' : 'AGAINST Gear 5!'}`);
  });
});

// Feedback Modal
const modal = document.getElementById('feedbackModal');
const btn = document.getElementById('feedbackBtn');
const span = document.querySelector('.close-btn');
const submitFeedback = document.getElementById('submitFeedback');

btn.onclick = () => (modal.style.display = 'block');
span.onclick = () => (modal.style.display = 'none');
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = 'none';
};

submitFeedback.onclick = () => {
  const feedback = document.getElementById('feedbackText').value;
  alert('Thank you for your feedback: ' + feedback);
  modal.style.display = 'none';
};

// Login Function
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const status = document.getElementById('loginStatus');

  if (user === 'fan' && pass === 'onepiece') {
    status.textContent = 'Login successful! Welcome, ' + user + '!';
    status.style.color = 'green';
  } else {
    status.textContent = 'Invalid credentials. Try again!';
    status.style.color = 'yellow';
  }
}

// Episode Selector
window.onload = function() {
  const select = document.getElementById("episodeSelect");
  if (select) {
    for (let i = 1; i <= 1130; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = "Episode " + i;
      select.appendChild(option);
    }
  }
};

function openEpisodePopup() {
  document.getElementById("episodePopup").style.display = "block";
}

function closeEpisodePopup() {
  document.getElementById("episodePopup").style.display = "none";
}

function submitEpisode() {
  const selectedEpisode = document.getElementById("episodeSelect").value;
  document.getElementById("episodeDisplay").textContent = "Episode " + selectedEpisode;
  closeEpisodePopup();
}

function toggleLoginPopup() {
  const popup = document.getElementById("loginPopup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}

<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDKNcMNJjaSPiu0JOeKMX2QbJG1hogyop0",
    authDomain: "onepiece-fansite.firebaseapp.com",
    projectId: "onepiece-fansite",
    storageBucket: "onepiece-fansite.firebasestorage.app",
    messagingSenderId: "449909053920",
    appId: "1:449909053920:web:fe6c4a0da7f7786156f385"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  window.signUp = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Signed up successfully!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  window.logIn = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Logged in successfully!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
</script>


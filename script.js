// Toggle Spoilers
document.getElementById('spoiler-toggle').addEventListener('change', function() {
  document.body.classList.toggle('hide-spoilers', this.checked);
});

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
      if (filter === 'all' || section.classList.contains(filter)) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  });
});

// World Map Interactions
document.querySelectorAll('area').forEach(area => {
  area.addEventListener('click', function(e) {
    e.preventDefault();
    const popupId = this.getAttribute('href').substring(1);
    document.querySelectorAll('.map-popup').forEach(popup => {
      popup.style.display = 'none';
    });
    document.getElementById(popupId).style.display = 'block';
  });
});

// Debate Voting
document.querySelectorAll('.vote-button').forEach(button => {
  button.addEventListener('click', function() {
    const side = this.dataset.side;
    alert(`Voted ${side === 'pro' ? 'AGREE' : 'DISAGREE'}!`);
  });
});

// Feedback Modal Functionality
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

// Login Simulation Functionality
function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const status = document.getElementById('loginStatus');

  if (user === 'fan' && pass === 'onepiece') {
    status.textContent = 'Login successful! Welcome, ' + user + '!';
    status.style.color = 'green';
  } else {
    status.textContent = 'Invalid credentials. Try again!';
    status.style.color = 'red';
  }
}

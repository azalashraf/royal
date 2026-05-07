function openAdminLogin() {
  document.getElementById('admin-login-modal').style.display = 'flex';
}

function closeAdminLogin() {
  document.getElementById('admin-login-modal').style.display = 'none';
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const loginMessage = document.getElementById('login-message');

  if (username === 'admin' && password === 'admin123') {
    document.getElementById('admin-panel').style.display = 'block';
    document.getElementById('admin-login-modal').style.display = 'none';
    loginMessage.innerHTML = '';
  } else {
    loginMessage.innerHTML = 'Invalid Username or Password';
    loginMessage.style.color = 'red';
  }
}

// Remove Notice
function removeNotice(button) {
  const noticeCard = button.parentElement;
  noticeCard.remove();
}

// Add Notice
function addNotice() {
  const title = document.getElementById('notice-title').value;
  const text = document.getElementById('notice-text').value;

  if(title && text) {
    const noticeContainer = document.getElementById('notice-container');

    const noticeCard = document.createElement('div');
    noticeCard.classList.add('notice-card');

    noticeCard.innerHTML = `
      <h3>📢 ${title}</h3>
      <p>${text}</p>
      <button class="delete-btn" onclick="removeNotice(this)">Remove</button>
    `;

    noticeContainer.prepend(noticeCard);

    document.getElementById('notice-title').value = '';
    document.getElementById('notice-text').value = '';
  }
}

// Add Gallery Image
function addImage() {
  const imageUrl = document.getElementById('image-url').value;

  if(imageUrl) {
    const galleryContainer = document.getElementById('gallery-container');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'School Image';

    galleryContainer.prepend(img);

    document.getElementById('image-url').value = '';
  }
}

// Google Sheets Form Integration
const scriptURL = 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEBAPP_URL_HERE';
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    formMessage.innerHTML = '✅ Message sent successfully!';
    formMessage.style.color = 'lightgreen';
    form.reset();
  })
  .catch(error => {
    formMessage.innerHTML = '❌ Error sending message';
    formMessage.style.color = 'red';
  });
});

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll navigation
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');

    if(targetId && targetId.startsWith('#')) {
      e.preventDefault();

      const targetSection = document.querySelector(targetId);

      if(targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }

      navLinks.classList.remove('active');
    }
  });
});
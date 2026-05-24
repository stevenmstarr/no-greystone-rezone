const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for your message! We will respond soon.');
    form.reset();
  });
}

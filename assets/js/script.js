document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submited successfully!');
    form.reset();
  });
});

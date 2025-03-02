// @ts-nocheck

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const firstNameElement = document.getElementById('first-name');
  const lastNameElement = document.getElementById('last-name');
  const phoneElement = document.getElementById('phone');
  const countryElement = document.getElementById('country');
  const messageElement = document.getElementById('message');

  const firstName = firstNameElement ? firstNameElement.value : '';
  const lastName = lastNameElement ? lastNameElement.value : '';
  const phone = phoneElement ? phoneElement.value : '';
  const country = countryElement ? countryElement.value : '';
  const message = messageElement ? messageElement.value : '';

  const formData = {
    firstName,
    lastName,
    phone,
    country,
    message
  };

  const resultDiv = document.getElementById('result');
  if (resultDiv) {
    resultDiv.innerHTML = `<pre>${JSON.stringify(formData, null, 2)}</pre>`;
  }
  });
}
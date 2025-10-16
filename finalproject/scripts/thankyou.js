// thankyou.js
window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const results = document.getElementById('formInfo');
  if (!results) return;

  results.innerHTML = `
    <p><strong>First name:</strong> ${params.get('fullname')}.</p>
    <p><strong>Email:</strong> ${params.get('email')}.</p>
    <p><strong>Phone:</strong> ${params.get('phonenumber')}.</p>
    <p><strong>Date of Event:</strong> ${params.get('dateEvent')}.</p>
    <p><strong>Type of Event:</strong> ${params.get('eventType')}.</p>
  `;
});

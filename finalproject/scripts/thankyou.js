export function setupThankYou() {
  window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("DOMContentLoaded", () => {
      const params = new URLSearchParams(window.location.search);
      console.log(params.get("fullname"));
      console.log(params.get("phonenumber"));
      console.log(params.get("dateEvent"));
      console.log(params.get("email"));
      console.log(params.get("phone"));
      console.log(params.get("eventType"));


    const results = document.getElementById('formInfo');
    results.innerHTML = `
    <p><strong>First name:</strong> ${params.get('fullname')}.</p>
    <p><strong>Email:</strong> ${params.get('email')}.</p>
    <p><strong>Phone:</strong> ${params.get('phonenumber')}.</p>
    <p><strong>Date of Event:</strong> ${params.get('dateEvent')}.</p>
    <p><strong>Type of Event:</strong> ${params.get('eventType')}.</p>`
    });
  });
}

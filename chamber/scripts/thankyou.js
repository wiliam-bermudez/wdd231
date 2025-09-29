

/* THANK YOU PAGE*/ 

window.addEventListener("DOMContentLoaded", () => {
      const params = new URLSearchParams(window.location.search);
      console.log(params.get("firstName"));
      console.log(params.get("lasttName"));
      console.log(params.get("orgTitle"));
      console.log(params.get("email"));
      console.log(params.get("phone"));
      console.log(params.get("organization"));
      console.log(params.get("membership"));
      console.log(params.get("orgDescription"));


    const results = document.getElementById('formInfo');
    results.innerHTML = `
    <p><strong>First name:</strong> ${params.get('firstName')}.</p>
    <p><strong>Last name:</strong> ${params.get('lastName')}.</p>
    <p><strong>Organization title:</strong> ${params.get('orgTitle')}.</p>
    <p><strong>Email:</strong> ${params.get('email')}.</p>
    <p><strong>Phone:</strong> ${params.get('phone')}.</p>
    <p><strong>Organization:</strong> ${params.get('organization')}.</p>
    <p><strong>Membership:</strong> ${params.get('membership')}.</p>
    <p><strong>Descrption:</strong> ${params.get('orgDescription')}.</p>`
    });
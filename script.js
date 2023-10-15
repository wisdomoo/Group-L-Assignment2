// Get references to the input field and the provider logo element
const phoneInput = document.getElementById('phone');
const providerLogo = document.querySelector('.provider-logo');
const error = document.querySelector('.error');

// Function to detect and set the provider logo
function detectProvider(phoneNumber) {
  const mtnPattern = /^(0703|0803|081|0903|0806|0706|\+234703|\+234803)/;
  const restrictedPhoneNumbers = /^(0809|0817|0818|0909|0701|0802|0808|0812|0901|0705|0805|0807|0815|0905)/;
 
  error.classList.remove('errormsg');
  
  if (!mtnPattern.test(phoneNumber)) {
    error.classList.add('errormsg');
  } 

  else{
    providerLogo.classList.add('mtn');
  }
}

// Event listener to detect changes in the input field
phoneInput.addEventListener('input', function() {
  const phoneNumber = this.value;
  detectProvider(phoneNumber);
  if (phoneInput.value === "") {
    error.classList.remove('errormsg')
  }
});


let len = document.querySelector('.len2');
let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let a4 = document.querySelector('.a4');
let img = document.querySelector('.img');
let pas = document.querySelector('.pas');
let in1 = document.querySelector('.in1');
let generateButton = document.querySelector('.gen');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+=-[]{}|;:,.<>?/';

function generatePassword() {
  let selectedChars = '';
  let password = '';
  const passwordLength = parseInt(in1.value);
  let collec = document.querySelectorAll('.checkbox');

  // Build the character set based on user selections
  if (collec[0].classList.contains('checked')) selectedChars += uppercaseChars;
  if (collec[1].classList.contains('checked')) selectedChars += lowercaseChars;
  if (collec[2].classList.contains('checked')) selectedChars += numberChars;
  if (collec[3].classList.contains('checked')) selectedChars += symbolChars;

  // Ensure at least one character set is selected
  if (!selectedChars) {
    alert('Please select at least one character set!');
    return '';
  }

  // Generate the password
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * selectedChars.length);
    password += selectedChars[randomIndex];
  }

  return password;
}

// Event listener for generate button
generateButton.addEventListener('click', () => {
  const newPassword = generatePassword();
  pas.innerText = newPassword ? newPassword : 'Error in generation';
});


in1.addEventListener('input', ()=>{
    len.textContent = in1.value;}
)
let checkboxs = document.querySelectorAll('.checkbox');
checkboxs.forEach((checkbox) => {checkbox.addEventListener('click', ()=>{
    checkbox.classList.toggle('checked');
    let checkedCount = document.querySelectorAll('.checked').length;

    // Update img class based on the count
    img.className = `img img${checkedCount}`;
 
    
})});

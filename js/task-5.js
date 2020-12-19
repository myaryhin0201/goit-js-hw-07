console.log(`Задание 5`);
const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
console.log(inputName.value);
inputName.oninput = () => {
    if (inputName.value !== '') {
        outputName.textContent = inputName.value;
    }
    else {
        outputName.textContent = 'незнакомец';    
    }
    if (inputName.value.charAt(0) === ' ') {
        inputName.value = '';
        outputName.textContent = 'незнакомец';
    }
    if (inputName.value.includes('  ')) {
        inputName.value = inputName.value.split('  ').join(' ');
    }
}

// inputName.addEventListener('input', () => {
//     if (inputName.value !== "") {
//         outputName.textContent = inputName.value;
//     } 
//     else{
//         outputName.textContent = 'незнакомец';    
//     }
// });
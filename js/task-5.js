console.log(`Задание 5`);
// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.
const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
console.log(inputName.value);
inputName.addEventListener('input', () => {
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
});
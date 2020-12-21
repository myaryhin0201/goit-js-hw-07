console.log(`Задание 5`);
// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.
const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
console.log(inputName.value);
inputName.addEventListener('input', () => {
    // Если так прописать то проверки не работают
        // const result = (inputName.value !== '') ? outputName.textContent = inputName.value : 
        // (inputName.value.charAt(0) === ' ') ? (inputName.value = '',
        //     outputName.textContent = 'незнакомец') :
        //     (inputName.value.includes('  ')) ? inputName.value = inputName.value
        //         .split('  ').join(' ') :
        // outputName.textContent = 'незнакомец';
    
    const result = inputName.value !== '' ? outputName.textContent = inputName.value :
        outputName.textContent = 'незнакомец';
    
    if (inputName.value.charAt(0) === ' ') {
        inputName.value = '';
        outputName.textContent = 'незнакомец';
    }
    if (inputName.value.includes('  ')) {
        inputName.value = inputName.value.split('  ').join(' ');
    }
    return result;
});
console.log(`Задание 6`);
// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// Если введено подходящее количество, то border
// инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const userMessage = document.querySelector('#validation-input');
const dataLength = userMessage.getAttribute('data-length');

userMessage.addEventListener('change', () => {
    const userMessageLength = userMessage.value.split('').length;
    console.log(userMessageLength);
    const dataNumber = Number(dataLength);
    const userMessageNumber = Number(userMessageLength);
    if (dataLengthNumber === userMessageNumber) {
        userMessage.classList.add('valid');
        userMessage.classList.remove('invalid');
    } else {
        userMessage.classList.add('invalid');
        userMessage.classList.remove('valid');
    }
});
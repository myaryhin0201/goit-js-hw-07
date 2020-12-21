console.log(`Задание 7`);
// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет инлайн
// - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const mainText = document.querySelector('#text');
const sizeControl = document.querySelector('#font-size-control');
// sizeControl.setAttribute('max', '50px');
// sizeControl.setAttribute('min', '6px');
// sizeControl.setAttribute('step', '3px');
// sizeControl.setAttribute('value', '16px');
const fontSizeControl = () => {
    mainText.setAttribute('style',`font-size: ${sizeControl.value}px`)
}
sizeControl.addEventListener('input', () => {
    fontSizeControl();
    // let size = sizeControl.value;
    // mainText.style.fontSize = `${size}px`;
});

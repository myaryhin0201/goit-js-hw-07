console.log(`Задание 1`);

const items = [...document.querySelectorAll('li.item')]
console.log(`В списке ${items.length} категории.`)

const mapped = items.map(item => { 
    const title = item.querySelector('h2');
    const list = item.querySelectorAll('ul li');
    return { title: title.textContent, count: list.length }
}).map(entry => {
    console.log(`Категория: ${entry.title}\r\nКоличество элементов: ${entry.count}`);
})


console.log(`Задание 2`);
// Напиши скрипт, который для каждого
// элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список
// ul.ingredients.Для создания DOM - узлов используй
// document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const findIngredients = document.querySelector('ul#ingredients');

// Вставка на каждой итерации
// const addList = ingredients.map(item => {
//     const addItem = document.createElement('li');
//     addItem.textContent = item;
//     findIngredients.appendChild(addItem);
// });

// Вставка за 1 итерацию
const createItem = item => {
    const itemRef = document.createElement("li");
    itemRef.textContent = item;
    return itemRef;
}
const items = ingredients.map((item) => createItem(item));
findIngredients.append(...items);
console.log(findIngredients);
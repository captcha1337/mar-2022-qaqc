

// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

const content = document.getElementById("content");

console.log(content);

// -- отримує текст з блоку з id "rules"

const rules = document.getElementById("rules");

console.log(rules);

// -- замініть текст параграфа з id 'content' на будь-який інший

content.innerText = 'any other text';

// -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText = 'any other text';

// -- змініть кожному елементу колір фону на червоний

const list = document.body.children;

for (const listElement of list) {
    listElement.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій

for (const listElement of list) {
    listElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(rules.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

const fcRules = document.getElementsByClassName('fc_rules');

for (const fcRule of fcRules) {
    fcRule.style.color = 'red';
}
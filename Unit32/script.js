console.log(document.body);
console.log(document.documentElement); //вызов тэга html
console.log(document.body.childNodes);
 //список потомков тэга body
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

console.log(document.querySelector('#current').parentNode);
 //взять элемент на уровень выше
console.log(document.querySelector('#current').parentElement);
console.log(document.querySelector('#current').parentNode.parentNode); //взять элемент на 2  уровня выше;
console.log(document.querySelector('[data-current"3"]').netxtSibling); 
console.log(document.querySelector('[data-current"3"]').netxtElementSibling);
//взять следующий Node-елемент после data-current="3"
console.log(document.querySelector('[data-current"3"]').previousSibling);
console.log(document.querySelector('[data-current"3"]').previousElementSibling);
//взять предыдущий Node-елемент после data-current="3" 

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}
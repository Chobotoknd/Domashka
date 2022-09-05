const dict = {};

function countRecursively(elements) {
    Array.from(elements).forEach(function(element) {
        if (dict[element.tagName.toLowerCase()] !== undefined) {
            dict[element.tagName.toLowerCase()] += 1;
        } else {
            dict[element.tagName.toLowerCase()] = 1;
        }
        if (element.children.length > 0) {
            countRecursively(element.children)
        }
    })
}

countRecursively(document.body.children)

let numberOfTagsTemplate = "";

Object.keys(dict).forEach((key) => {
    let times = 'раза',
        number = dict[key];
    if ((number % 10) < 2 || (number % 10) > 4) {
        times = 'раз'
    }
    numberOfTagsTemplate += `Тег <${key}> встречается ${number} ${times}\n`;
});

const numberOfTagsElement = document.createElement("div");

numberOfTagsElement.innerText = numberOfTagsTemplate;

document.body.appendChild(numberOfTagsElement);

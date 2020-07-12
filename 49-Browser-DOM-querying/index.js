"use strict";

// selectors

const header = document.querySelector('.title');
const body = document.querySelector('body');
const sectionHeadings = document.getElementsByClassName('category');
const foodCategory = document.querySelectorAll('.food-category');
const main = document.querySelector('main');
const warningText = document.getElementById('warning');
const allergyInfos = document.querySelectorAll('.allergy-info');
const allergySection = document.querySelector('.allergies');
const foodDesc = document.querySelectorAll('.food-desc');
const footer = document.querySelector('.footer');

//styles

//body
body.style.fontFamily = 'Arial';

// header
header.style.textAlign = 'center';

// menu sections



for (let i = 0; i < sectionHeadings.length; i++) {
    sectionHeadings[i].style.fontSize = '2rem';
    sectionHeadings[i].style.textDecoration = 'underline';
    sectionHeadings[i].style.fontStyle = 'italic';

}


const colorGenerator = (element) => {

    const colors = [
        '#7f8fa6',
        '#9c88ff',
        '#e1b12c',
        '#ff7f50',
        '#7bed9f',
        '#70a1ff'
    ]

    const randomNumber = Math.floor(Math.random() * colors.length);
    return element.style.backgroundColor = colors[randomNumber];

}

for (let child of foodCategory) {
    for (let elements of child.children) {
        elements.style.margin = '20px 0px';
    }
    child.style.MarginBottom = '20px';
    child.style.height = '200px';
    child.style.width = '250px';
    child.style.margin = '10px auto';
    child.style.paddingTop = '5px';
}

colorGenerator(foodCategory[0]);
colorGenerator(foodCategory[1]);
colorGenerator(foodCategory[2]);

// food-category desktop alignment

main.style.display = 'flex';
main.style.flexWrap = 'wrap';
main.style.gap = '10px';
main.style.width = '80%';
main.style.maxWidth = '900px';
main.style.margin = 'auto';

// warning section

warningText.style.fontSize = '1.5rem';
warningText.style.textAlign = 'center';

// allergy infos 
allergySection.style.listStyleType = 'none';
allergySection.style.width = '300px';
allergySection.style.margin = 'auto';
allergySection.style.paddingLeft = '0px';




for (let i = 1; i < allergySection.children.length; i += 2) {
    allergySection.children[i].style.background = 'lightblue';
}

// food description 
for (let i = 0; i < foodDesc.length; i++) {
    foodDesc[i].style.background = '#ccc';
    foodDesc[i].style.width = '120px';
    foodDesc[i].style.height = '120px';
    foodDesc[i].style.borderRadius = '50%';
    foodDesc[i].style.display = 'flex';
    foodDesc[i].style.justifyContent = 'center';
    foodDesc[i].style.alignItems = 'center';
    foodDesc[i].style.margin = '20px auto';
    foodDesc[i].style.border = '5px solid orange';
}

footer.style.display = 'flex';
footer.style.width = '60%';
footer.style.maxWidth = '500px';
footer.style.margin = 'auto';
footer.style.justifyContent = 'center';
footer.style.flexWrap = 'wrap';


/* if (window.matchMedia('(min-width: 458px)').matches) {
    footer.style.flexDirection = 'column';
} */
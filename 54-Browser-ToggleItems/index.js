const button = document.querySelector('.btn');
const ul = document.querySelector('ul');
const paragraph = document.querySelector('.destination');


button.addEventListener('click', showList);

function showList() {
    ul.classList.toggle('show-list');

    if (ul.classList.contains('show-list')) {
        const listItem = document.querySelectorAll('li');
        listItem.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.classList.add('active');
            })
            item.addEventListener('mouseout', () => {
                item.classList.remove('active');
            })
            item.addEventListener('click', () => {

                paragraph.classList.add('show')
                paragraph.innerText = `You selected ${item.innerText}`;
            })

        });
        button.innerText = "Hide List"
    } else {
        paragraph.classList.remove('show');
        button.innerText = "Show Destinations"
    }


}
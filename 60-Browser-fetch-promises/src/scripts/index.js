// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

const modal = document.querySelector('#myModal');

const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
})

const showModal = new Promise((res, rej) => {
        res(setTimeout(() => {
            modal.style.display = "block";
        }, 60000))
        rej('error occurred')
    })
    .then(result => result)
    .catch(error => error)
console.log('Add your name in {{name}}');
console.log('Add the current date in {{date}}');
console.log('Add a dialog that triggers when the visitor clicks Contact information');



const openModal = document.getElementById('openButton');
const closeModal = document.getElementById('closeButton');
const modal = document.getElementById('myModal');
let myName = document.getElementById('myName');
let date = document.getElementById("date");


openModal.addEventListener('click', function () {
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
const currentDate = new Date().toLocaleDateString('en-GB');
myName.textContent = "Hamzah"

date.textContent = currentDate;

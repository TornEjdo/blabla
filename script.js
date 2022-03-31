const toggleBtn = document.querySelector('#gumbek');
const popupic = document.querySelector(".popupic");

toggleBtn.addEventListener('click', () => {
    if(popupic.style.display === 'none'){

        popupic.style.display = 'block';

    } else {
        popupic.style.display = 'none';
    }
});
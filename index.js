

const toggleButton = document.getElementById('toggleButton');
const naviList = document.getElementById('navi-List');

toggleButton.addEventListener('click', () =>{
    naviList.classList.toggle('active');
})
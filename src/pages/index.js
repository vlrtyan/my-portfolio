import './index.scss';

const roles = [
  "футбольная фанатка",
  "киноманка",
  "роль 3",
  "роль 4"
];

const role = document.querySelector('.role');

function getRandomElement(arr) {
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

function changeRole() {
  role.textContent = getRandomElement(roles);
}

setInterval(changeRole, 5000);

document.addEventListener('click', function(event) {
  if (event.target.matches('.navigation__link')) {
    event.preventDefault();
    let element = document.getElementById(event.target.dataset.target);
    element.scrollIntoView({behavior: "smooth"});
  }
});

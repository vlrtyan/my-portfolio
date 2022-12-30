import './index.scss';

const roles = [
  'и футбольная фанатка',
  'и люблю stand-up',
  'и путешественница',
  'и киноманка',
];

function getRandomElement(arr) {
  const randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

// eslint-disable-next-line no-undef
const role = document.querySelector('.role');

function changeRole() {
  role.textContent = getRandomElement(roles);
}

setInterval(changeRole, 5000);

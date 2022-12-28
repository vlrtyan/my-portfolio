let roles = [
    'и футбольная фанатка',
    'и любительница stand-up комедии',
    'и путешественница',
    'и киноманка'
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  

  let role = document.querySelector('.role');
  
  setInterval(role.textContent = getRandomElement(roles), 3000) 
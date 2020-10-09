function fight() {
  let hero = prompt('Name of your hero: ', 'hero1');
  let monster = prompt('Name the monster: ', 'monster');

  let heroHealth = 50;
  let villainHealth = 50;
  let heroDice;
  let villainDice;
  let result;
  let strDisplay;
  while (heroHealth > 0 && villainHealth > 0) {
    heroDice = Math.floor(Math.random() * 20 + 1);
    villainDice = Math.floor(Math.random() * 20 + 1);
    result = attack(heroDice);
    strDisplay = '';
    if (result < 0) {
      strDisplay += `${hero} accidentally stabbed themselves for 5 damage!\n`;
      heroHealth += result;
    }
    else if (result == 0) {
      strDisplay += `${hero} misses!\n`;
    }
    else if (result == 10) {
      strDisplay += `Hit! ${hero} strikes ${monster}!\n`;
      villainHealth -= result;
    }
    else if (result == 20) {
      strDisplay += `Critical Hit! ${hero} strikes ${monster}!\n`;
      villainHealth -= result;
    }
    result = attack(villainDice);
    if (result < 0) {
      strDisplay += `${monster} accidentally stabbed themselves for 5 damage!\n`;
      villainHealth += result;
    }
    else if (result == 0) {
      strDisplay += `${monster} misses!\n`;
    }
    else if (result == 10) {
      strDisplay += `Hit! ${monster} strikes ${hero}!\n`;
      heroHealth -= result;
    }
    else if (result == 20) {
      strDisplay += `Critical Hit! ${monster} strikes ${hero}!\n`;
      heroHealth -= result;
    }

    strDisplay += `${hero} has ${heroHealth} hitpoints left, ${monster} has ${villainHealth} hitpoints left.\n`;
    alert(strDisplay);
  }

  if (heroHealth <= 0 && villainHealth <= 0) {
    alert('Both killed each other on the final blow!');
  }

  else if (heroHealth <= 0) {
    alert(`${monster} killed ${hero}!`);
  }

  else if (villainHealth <= 0) {
    alert(`${hero} killed ${monster}!`);
  }

  let choice;
  while (true) {
    choice = prompt('Would you like to play again?');
    if (choice == 'yes' || choice == 'no')
      break;
  }
  if (choice == 'yes')
    return true;
  else
    return false;
}

function attack(dice) {
  if (dice === 1 || dice === 2)
    return -5;
  if (dice >= 3 && dice <= 10)
    return 0;
  if (dice >= 11 && dice <= 18)
    return 10;
  if (dice > 18)
    return 20;
}

while (fight());

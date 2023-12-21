// ES6 Class
class Elf {
  constructor(player, name, weapon) {
    this.player = player;
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `${this.player} attacks with ${this.weapon} and her name is ${this.name}`;
  }
}

const playerOne = new Elf("Player One", "Lucy", "Sword");
console.log(playerOne.attack());

const player = document.querySelector(".output");

player.innerHTML = playerOne.attack();
// player.setText = playerOne.attack();

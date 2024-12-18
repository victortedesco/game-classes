import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attackDescription = "";
    switch (this.type) {
      case "mago":
        attackDescription = "usou magia";
        break;
      case "guerreiro":
        attackDescription = "usou espada";
        break;
      case "monge":
        attackDescription = "usou artes marciais";
        break;
      case "ninja":
        attackDescription = "usou shuriken";
        break;
      default:
        attackDescription = "fez um ataque desconhecido";
        break;
    }
    console.log(`O ${this.type} atacou usando ${attackDescription}`);
  }
}

rl.question("Digite o nome do herói: ", (name) => {
  rl.question("Digite a idade do herói: ", (age) => {
    rl.question("Digite o tipo do herói (mago, guerreiro, monge, ninja): ", (type) => {
      const hero = new Hero(name, parseInt(age), type);
      hero.attack();
      rl.close();
    });
  });
});

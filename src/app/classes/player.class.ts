
export class Player {
  public hp: number;
  constructor() {
    this.hp = 100;
  }

  public takeDamage(damage: number) {
    if (damage > 100) {
      this.hp = 100;
    } else {
      this.hp -= damage;
    }
  }
}

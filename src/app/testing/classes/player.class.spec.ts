import { Player } from '../../classes/player.class';

describe('Player Class Testing', () => {
  let player = new Player();
  beforeEach(() => {
    player = new Player();
  });

  it('should return 100 when the class is instantiated.', () => {
    expect(player.hp).toEqual(100);
  });

  it('should return 50 if I take damage.', () => {
    player.takeDamage(50);
    expect(player.hp).toEqual(50);
  });

});

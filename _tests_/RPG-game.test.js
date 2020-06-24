import {Character} from './../src/RPG-game.js';

describe('Character', () => {
  let reusableCharacter;

  beforeEach(() => {
    reusableCharacter = new Character(1, 2, 5);
  })

  test('should create a new Character object with base values and a name', () => {
    expect(reusableCharacter.damage).toEqual(2);
    expect(reusableCharacter.health).toEqual(5);
    expect(reusableCharacter.currentHealth).toEqual(5);
    expect(reusableCharacter.level).toEqual(1);
    //expect(reusableCharacter.xp).toEqual(0);
  });

  test("created Character object should have it's damage changed to 5", () => {
    reusableCharacter.chooseDamageClass();
    expect(reusableCharacter.damage).toEqual(5);
  });

  test("created Character object should have it's health changed to 11", () => {
    reusableCharacter.chooseHealthClass();
    expect(reusableCharacter.health).toEqual(11);
    expect(reusableCharacter.currentHealth).toEqual(11);
  });
});
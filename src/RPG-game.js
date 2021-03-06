//Business Logic
//Create New Character Constructor
export function Character(level, strength, health, type) {
  this.level = level;
  this.strength = strength;
  this.health = health; 
  this.currentHealth = health;
  this.type = type;
}

Character.prototype.chooseStrengthClass = function(){
  this.strength += 3;
}

Character.prototype.chooseHealthClass = function(){
  this.health += 6;
  this.currentHealth +=6;
}

export function Battle(player, enemy){
  this.combatants = [player, enemy];
}

Battle.prototype.attack = function(attacker){
  let damage;
  if (attacker.type === "player"){
    damage = attacker.strength + Math.floor(Math.random() * (4-1+1)) + 1;
    this.combatants[1].currentHealth -= damage;
  } else if (attacker.type === "enemy") {
    damage = attacker.strength + Math.floor(Math.random() * (2-1+1)) + 1;
    this.combatants[0].currentHealth -= damage;
  }
  return damage;
}

Battle.prototype.isCharacterAlive = function(attackedCharacter){
  if (attackedCharacter.currentHealth <= 0) {
    return false
  } else {
    return true
  }
}
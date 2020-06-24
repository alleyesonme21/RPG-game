#  _RPG-game_

#### _Simple RPG with character stats, combat, level progression_
##### __Created:__ 6/24/2020
##### __Last Updated:__ 6/24/2020 
##### By _**Tyson Lackey & Michael Watts & Johnny Duverseau**_  


## Description

_{detailed desc}_

## Behaviors

| Spec| Example input | Example Output
| ----------- | ----------- | ----------- |
-- Char Creation
| When user creates a character, a new object is made with the character's level = 1, strength = 2, health = 5, current health = 5 | n/a | n/a |
| If a user selects the "Doing Damage" class, their strength = 5 and health/current health = 5 | click => Doing Damage | Health: 5, current health:5, Strength: 5 |
| If a user selects the "Staying Alive" class, their strength = 2 and health/current health = 11 | click => health | Health: 11, current health: 11Strength: 2 |

-- Battle
| When "start battle" is selected, create an enemy object with health, Strength | n/a | n/a |
| When player clicks attack, calculate damage = player strength + random int (1-4). display damage as a negative number of enemy health lost | player strength = 5, random int = 2 | -7 damage |
| Behavior | input | output |
| Behavior | input | output |
| Behavior | input | output |

## Setup/Installation Requirements

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open by downloading:
1. Internet Browser
2. Code editor like VScode to view the codebase

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open by downloading:

1. Download this repository onto your computer
2. Double click index.html to open it in your web browser

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open via Bash/GitBash:

1. Clone this repository onto your computer:
    "git clone https://github.com/Lackeyt/RPG-game"
2. Navigate into the "RPG-game" directory in Visual Studio Code or preferred text editor:
3. Open the project
    "code ."
4. Open your computer's terminal and navigate to the directory bearing the name of the program and containing the top level subdirectories and files.
5. Enter the command "$ npm install" in the terminal and press "Enter".
6. Enter the command "$ npm run build" in the terminal and press "Enter".
7. Enter the command "$ npm run start" in the terminal and press "Enter".
8. Open index.html in your browser:
    "open index.html"

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Directly in your Browser:

* Navigate to {GH Pages URL} in your web browser.

## Known Bugs

* n/a

## Support and contact details

* Discord: TysonL#4409
* Email: lackeyt90@gmail.com


## Technologies Used

* Visual Studio Code
* HTML
* CSS
* Bootstrap
* Javascript
* JQuery

## Resources:

* 

### License

Copyright (c) 2020 **_Tyson Lackey_**

This software is licensed under the MIT license.
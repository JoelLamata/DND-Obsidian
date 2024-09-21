---
obsidianUIMode: preview
cssclasses: json5e-vehicle
tags:
- compendium/src/5e/gos
- ttrpg-cli/vehicle/size/gargantuan
- ttrpg-cli/vehicle/terrain/sea
- ttrpg-cli/vehicle/type/ship
aliases: ["Warship"]
---
# Warship
*Source: Ghosts of Saltmarsh p. 194*  

```ad-statblock
title: Warship
*Gargantuan vehicle (100 ft. by 20 ft.); sea*

- **Creature Capacity** 40 crew, 60 passengers
- **Cargo Capacity** 200 tons
- **Travel Pace** 4 miles per hour (96 miles per day)
- *Speed* 40 ft. ^[Based on _Special Travel Pace_, DMG p242]

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)| 4 (-3)|20 (+5)| 0 (-5)| 0 (-5)| 0 (-5)|


## Actions

On its turn, the warship can take 3 actions, choosing from the options below. It can take only 2 actions if it has fewer than twenty crew and only 1 action if it has fewer than ten. It can't take these actions if it has fewer than three crew.

- **Fire Ballistas.** The warship can fire its [ballistas](compendium/objects/ballista.md) (DMG, ch. 8).  
- **Fire Mangonels.** The warship can fire its [mangonels](compendium/objects/mangonel.md) (DMG, ch. 8).  
- **Move.** The warship can use its helm to move with its oars or sails. As part of this move, it can use its naval ram.  

## Hull

- **Armor Class** 15
- **Hit Points** 500 (damage threshold 20)

## Control: Helm

- **Armor Class** 18
- **Hit Points** 50

Move up to the speed of one of its movement components, with one 90-degree turn. If the helm is destroyed, the warship can't turn.

## Movement: Oars

- **Armor Class** 12
- **Hit Points** 100; -5 ft. speed per 25 damage taken
- **Speed (water).** 20 ft. (requires at least 20 crew)

## Movement: Sails

- **Armor Class** 12
- **Hit Points** 100; -10 ft. speed per 25 damage taken
- **Speed (water).** 35 ft.; 15 ft. while sailing into the wind; 50 ft. while sailing with the wind.

## Weapon: Ballistas (2)

- **Armor Class** 15
- **Hit Points** 50

*Ranged Weapon Attack:* `dice: d20+6` (+6 to hit), range 120/480 ft., one target. *Hit:* `dice: 3d10|avg` (`3d10`) piercing damage.

## Weapon: Mangonels (2)

- **Armor Class** 15
- **Hit Points** 100

*Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), range 200/800 ft. (can't hit targets within 60 ft. of it), one target. *Hit:* `dice: 5d10|avg` (`5d10`) bludgeoning damage.

## Weapon: Naval Ram

- **Armor Class** 20
- **Hit Points** 100 (damage threshold 10)

The warship has advantage on all saving throws relating to crashing when it crashes into a creature or object. Any damage it takes from the crash is applied to the naval ram rather than to the ship. These benefits don't apply if another vessel crashes into the warship.
```
^statblock
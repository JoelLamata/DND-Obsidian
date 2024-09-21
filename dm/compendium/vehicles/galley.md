---
obsidianUIMode: preview
cssclasses: json5e-vehicle
tags:
- compendium/src/5e/gos
- ttrpg-cli/vehicle/size/gargantuan
- ttrpg-cli/vehicle/terrain/sea
- ttrpg-cli/vehicle/type/ship
aliases: ["Galley"]
---
# Galley
*Source: Ghosts of Saltmarsh p. 187*  

```ad-statblock
title: Galley
*Gargantuan vehicle (130 ft. by 20 ft.); sea*

- **Creature Capacity** 80 crew, 40 passengers
- **Cargo Capacity** 150 tons
- **Travel Pace** 4 miles per hour (96 miles per day)
- *Speed* 40 ft. ^[Based on _Special Travel Pace_, DMG p242]

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|24 (+7)| 4 (-3)|20 (+5)| 0 (-5)| 0 (-5)| 0 (-5)|


## Actions

On its turn, the galley can take 3 actions, choosing from the options below. It can take only 2 actions if it has fewer than forty crew and only 1 action if it has fewer than twenty. It can't take these actions if it has fewer than three crew.

- **Fire Ballistas.** The galley can fire its [ballistas](compendium/objects/ballista.md) (DMG, ch. 8).  
- **Fire Mangonels.** The galley can fire its [mangonels](compendium/objects/mangonel.md) (DMG, ch. 8).  
- **Move.** The galley can use its helm to move with its oars or sails. As part of this move, it can use its naval ram.  

## Hull

- **Armor Class** 15
- **Hit Points** 500 (damage threshold 20)

## Control: Helm

- **Armor Class** 16
- **Hit Points** 50

Move up to the speed of one of its movement components, with one 90-degree turn. If the helm is destroyed, the galley can't turn.

## Movement: Oars

- **Armor Class** 12
- **Hit Points** 100; -5 ft. speed per 25 damage taken
- **Speed (water).** 30 ft. (requires at least 40 crew)

## Movement: Sails

- **Armor Class** 12
- **Hit Points** 100; -10 ft. speed per 25 damage taken
- **Speed (water).** 35 ft.; 15 ft. while sailing into the wind; 50 ft. while sailing with the wind

## Weapon: Ballistas (4)

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

The galley has advantage on all saving throws relating to crashing when it crashes into a creature or an object. Any damage it takes from the crash is applied to the naval ram rather than to the ship. These benefits don't apply if another vessel crashes into the galley.
```
^statblock
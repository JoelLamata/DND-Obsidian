---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/gos
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/sahuagin
aliases: ["Sahuagin Wave Shaper"]
---
# Sahuagin Wave Shaper
*Source: Ghosts of Saltmarsh p. 251*  

These hunched and twisted sahuagin sacrifice their bodies to the mutating magic of Sekolah. Wave shapers add elemental magic to sahuagin armed forces (as seen in The Final Enemy) and delight in creating destructive whirlpools.

```ad-statblock
title: Sahuagin Wave Shaper
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/GoS/Sahuagin%20Wave%20Shaper.webp#token)
*Medium humanoid (sahuagin), Lawful Evil*

- **Armor Class** 14  (natural armor)
- **Hit Points** 60 (`11d8 + 11`)
- **Speed** 30 ft., swim 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|12 (+1)|12 (+1)|16 (+3)|14 (+2)|12 (+1)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +6
- **Skills** Arcana +6, Intimidation +4, Perception +5
- **Senses** darkvision 120 ft., passive Perception 15
- **Languages** Sahuagin
- **Challenge** 5

## Traits

***Blood Frenzy.*** The wave shaper has advantage on melee attack rolls against any creature that doesn't have all its hit points.

***Limited Amphibiousness.*** The wave shaper can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating.

***Shark Telepathy.*** The wave shaper can magically command any shark within 120 feet of it, using a limited telepathy.

***Innate Spellcasting.*** The wave shaper's spellcasting ability is Intelligence (spell save DC 14, `dice: d20+6` (+6 to hit) with spell attacks). It can cast the following spells, requiring only verbal components:

**At will**: [message](compendium/spells/message.md)

**1/day**: [comprehend languages](compendium/spells/comprehend-languages.md)

## Actions

***Multiattack.*** The wave shaper makes two attacks: one with its bite and one with its claws.

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. *Hit:* `dice: 2d8 + 1|avg` (`2d8 + 1`) piercing damage plus `dice: 3d8|avg` (`3d8`) cold damage.

***Claws.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. *Hit:* `dice: 2d8 + 1|avg` (`2d8 + 1`) slashing damage plus `dice: 3d8|avg` (`3d8`) cold damage.

***Whirlpool (1/Day).*** The wave shaper targets a body of water at least 50 feet square and 25 feet deep, causing a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top, 25 feet tall, and lasts for 1 minute or until the wave shaper is [incapacitated](/compendium/rules/conditions.md#incapacitated). Any creature or object in the water and within 25 feet of the vortex is pulled 10 feet toward it. A creature can swim away from the vortex by succeeding on a DC 14 Strength ([Athletics](/compendium/rules/skills.md#Athletics)) check.

When a creature enters the vortex for the first time on a turn or starts its turn there, it must make a DC 14 Strength saving throw. On a failed save, the creature takes `dice: 2d8|avg` (`2d8`) bludgeoning damage and is caught in the vortex until it ends. On a success, the creature takes half damage and isn't caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but it has disadvantage on the Strength ([Athletics](/compendium/rules/skills.md#Athletics)) check to do so.

The first time each turn that an object enters the vortex, the object takes `dice: 2d8|avg` (`2d8`) bludgeoning damage. This damage occurs each round it remains in the vortex.
```
^statblock
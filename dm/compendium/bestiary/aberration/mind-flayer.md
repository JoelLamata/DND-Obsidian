---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
aliases: ["Mind Flayer"]
---
# Mind Flayer
*Source: Monster Manual p. 222, Tasha's Cauldron of Everything, Light of Xaryxis*  

```ad-statblock
title: Mind Flayer
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/MM/Mind%20Flayer.webp#token)
*Medium aberration, Lawful Evil*

- **Armor Class** 15  ([breastplate](compendium/items/breastplate.md))
- **Hit Points** 71 (`13d8 + 13`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|12 (+1)|12 (+1)|19 (+4)|17 (+3)|17 (+3)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +7, Wisdom +6, Charisma +6
- **Skills** Arcana +7, Deception +6, Insight +6, Perception +6, Persuasion +6, Stealth +4
- **Senses** darkvision 120 ft., passive Perception 16
- **Languages** Deep Speech, Undercommon, telepathy 120 ft.
- **Challenge** 7

## Traits

***Magic Resistance.*** The mind flayer has advantage on saving throws against spells and other magical effects.

***Innate Spellcasting (Psionics).*** The mind flayer's innate spellcasting ability is Intelligence (spell save DC 15). It can innately cast the following spells, requiring no components:

**At will**: [detect thoughts](compendium/spells/detect-thoughts.md), [levitate](compendium/spells/levitate.md)

**1/day each**: [dominate monster](compendium/spells/dominate-monster.md), [plane shift](compendium/spells/plane-shift.md) (self only)

## Actions

***Tentacles.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one creature. *Hit:* `dice: 2d10 + 4|avg` (`2d10 + 4`) psychic damage. If the target is Medium or smaller, it is [grappled](/compendium/rules/conditions.md#grappled) (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be [stunned](/compendium/rules/conditions.md#stunned) until this grapple ends.

***Extract Brain.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one [incapacitated](/compendium/rules/conditions.md#incapacitated) humanoid [grappled](/compendium/rules/conditions.md#grappled) by the mind flayer. *Hit:* The target takes `dice: 10d10|avg` (`10d10`) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain.

***Mind Blast (Recharge 5-6).*** The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take `dice: 4d8 + 4|avg` (`4d8 + 4`) psychic damage and be [stunned](/compendium/rules/conditions.md#stunned) for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
^statblock

## Environment

underdark
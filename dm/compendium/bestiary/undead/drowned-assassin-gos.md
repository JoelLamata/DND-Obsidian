---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/gos
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
aliases: ["Drowned Assassin"]
---
# Drowned Assassin
*Source: Ghosts of Saltmarsh p. 234*  

The drowned assassin stalks and kills in a grim pantomime of its former occupation. Sneaking from shadow to shadow, and appearing in the undead assault of Tammeraut's Fate, it aims its barnacle-encrusted hand crossbow with deadly precision. Hidden behind a simple driftwood mask, this creature's face causes terror in mortal hearts when exposed.

## Bluerot

This disease targets humanoids. While afflicted with bluerot, a victim grows grotesque blue boils on their face and back. This disease is carried by undead (including the drowned ones in Tammeraut's Fate), and victims most often acquire it through wounds caused by infected creatures. The disease's boils manifest in `dice: 1d4|avg` (`1d4`) hours, causing the victim's Constitution and Charisma scores to decrease by `dice: 1d4|avg` (`1d4`) each, to a minimum of 3. This is quickly followed by a fever and tingling in the extremities. An infected creature is vulnerable to radiant damage and gains the ability to breathe underwater.

At the end of each long rest, an infected creature makes a DC 12 Constitution saving throw. On a success, the victim regains 1 point of Constitution and 1 point of Charisma lost to the disease. If the infected creature regains all the points lost to the disease, it is cured. Other effects that raise the victim's ability scores do not cure the disease. On a failed saving throw, the victim takes `dice: 4d8|avg` (`4d8`) necrotic damage as the boils burst and spread. A creature reduced to 0 hit points by this damage cannot regain hit points until the disease is cured, though it can be stabilized as normal.

## Statblock

```ad-statblock
title: Drowned Assassin
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/GoS/Drowned%20Assassin.webp#token)
*Medium undead, Chaotic Evil*

- **Armor Class** 14  ([leather armor](compendium/items/leather-armor.md))
- **Hit Points** 67 (`9d8 + 27`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|16 (+3)|16 (+3)| 9 (-1)| 9 (-1)|16 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** Dexterity +5, Constitution +5
- **Skills** Intimidation +5, Stealth +5
- **Senses** darkvision 60 ft., passive Perception 9
- **Languages** understands the languages it knew in life but can't speak
- **Challenge** 4

## Traits

***Bottom Treader.*** The drowned assassin cannot swim, and it sinks to the bottom of any body of water. It takes no penalties to its movement or attacks underwater. It is immune to the effects of being underwater at a depth greater than 100 feet.

***Bound Together.*** The drowned assassin shares its mind with every other drowned one within 1 mile of it, and can communicate its thoughts and observations to them instantaneously and without limitation.

***Undead Fortitude.*** If damage reduces the drowned assassin to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the drowned assassin drops to 1 hit point instead.

## Actions

***Multiattack.*** The drowned assassin makes two hand crossbow attacks or two dagger attacks. It can then take the Dash, Disengage, or Hide action.

***Hand Crossbow.*** *Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), range 30/120 ft., one target. *Hit:* `dice: 1d6 + 3|avg` (`1d6 + 3`) piercing damage plus `dice: 1d6|avg` (`1d6`) poison damage, and the target must succeed on a DC 12 Constitution saving throw or contract [bluerot](/compendium/rules/diseases.md#bluerot) (see the "Bluerot" in notes).

***Dagger.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. *Hit:* `dice: 1d4 + 3|avg` (`1d4 + 3`) piercing damage plus `dice: 2d8|avg` (`2d8`) poison damage, and the target must succeed on a DC 12 Constitution saving throw or contract [bluerot](/compendium/rules/diseases.md#bluerot) (see the "Bluerot" in notes).

***Reveal (1/Day).*** The drowned assassin removes its mask, revealing its rotting face. Each creature of the assassin's choice within 30 feet of it that can see the assassin must succeed on a DC 13 Wisdom saving throw or be [frightened](/compendium/rules/conditions.md#frightened) until the end of its next turn.
```
^statblock
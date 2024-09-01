---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/gos
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
aliases: ["Drowned Ascetic"]
---
# Drowned Ascetic
*Source: Ghosts of Saltmarsh p. 233*  

Dressed in tattered robes, its fists wrapped in long rib bons of rotting cloth, the drowned ascetic moves with alarming speed for an undead creature. This martial artist, rising from the ocean in Tammeraut's Fate, retains its fighting reflexes despite its rotting flesh.

## Bluerot

This disease targets humanoids. While afflicted with bluerot, a victim grows grotesque blue boils on their face and back. This disease is carried by undead (including the drowned ones in Tammeraut's Fate), and victims most often acquire it through wounds caused by infected creatures. The disease's boils manifest in `dice: 1d4|avg` (`1d4`) hours, causing the victim's Constitution and Charisma scores to decrease by `dice: 1d4|avg` (`1d4`) each, to a minimum of 3. This is quickly followed by a fever and tingling in the extremities. An infected creature is vulnerable to radiant damage and gains the ability to breathe underwater.

At the end of each long rest, an infected creature makes a DC 12 Constitution saving throw. On a success, the victim regains 1 point of Constitution and 1 point of Charisma lost to the disease. If the infected creature regains all the points lost to the disease, it is cured. Other effects that raise the victim's ability scores do not cure the disease. On a failed saving throw, the victim takes `dice: 4d8|avg` (`4d8`) necrotic damage as the boils burst and spread. A creature reduced to 0 hit points by this damage cannot regain hit points until the disease is cured, though it can be stabilized as normal.

## Statblock

```ad-statblock
title: Drowned Ascetic
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/GoS/Drowned%20Ascetic.webp#token)
*Medium undead, Chaotic Evil*

- **Armor Class** 13 
- **Hit Points** 75 (`10d8 + 30`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|16 (+3)|16 (+3)| 3 (-4)| 9 (-1)| 5 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** Dexterity +5
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 9
- **Languages** understands the languages it knew in life but can't speak
- **Challenge** 3

## Traits

***Bottom Treader.*** The drowned ascetic cannot swim, and it sinks to the bottom of any body of water. It takes no penalties to its movement or attacks underwater. It is immune to the effects of being underwater at a depth greater than 100 feet.

***Bound Together.*** The drowned ascetic shares its mind with every other drowned one within 1 mile of it, and can communicate its thoughts and observations to them instantaneously and without limitation.

***Undead Fortitude.*** If damage reduces the drowned ascetic to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the drowned ascetic drops to 1 hit point instead.

## Actions

***Multiattack.*** The drowned ascetic makes three unarmed strikes.

***Unarmed Strike.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. *Hit:* `dice: 1d8 + 3|avg` (`1d8 + 3`) bludgeoning damage, and the target must succeed on a DC 12 Constitution saving throw or contract [bluerot](/compendium/rules/diseases.md#bluerot) (see the "Bluerot" in notes).

## Reactions

***Dexterous Target.*** The drowned ascetic adds 3 to its AC against one ranged attack that would hit it. To do so, the drowned ascetic must see the attacker.
```
^statblock
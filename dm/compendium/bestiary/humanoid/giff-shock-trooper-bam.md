---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bam
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
aliases: ["Giff Shock Trooper"]
---
# Giff Shock Trooper
*Source: Boo's Astral Menagerie p. 25, Light of Xaryxis*  

A giff shock trooper is trained to mount assaults on enemy strongholds. Each one is adept at softening up the enemy from a distance with firearms before charging into melee to mop up the foes that remain standing.

```ad-statblock
title: Giff Shock Trooper
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/BAM/Giff%20Shock%20Trooper.webp#token)
*Medium humanoid, Any alignment*

- **Armor Class** 18  ([plate](compendium/items/plate-armor.md))
- **Hit Points** 93 (`11d8 + 44`)
- **Speed** 30 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|14 (+2)|18 (+4)|11 (+0)|12 (+1)|13 (+1)|

- **Proficiency Bonus** +3
- **Saving Throws** Strength +8, Constitution +7, Wisdom +4
- **Skills** Athletics +8, Intimidation +7, Perception +4
- **Senses** passive Perception 14
- **Languages** Common
- **Challenge** 6

## Traits

***Firearms Knowledge.*** The giff's mastery of its weapons enables it to ignore the loading property of any firearm.

***Headfirst Charge.*** If the giff moves at least 20 feet in a straight line and ends within 5 feet of a Large or smaller creature, that creature must succeed on a DC 16 Strength saving throw or take `dice: 2d6|avg` (`2d6`) bludgeoning damage and be knocked [prone](/compendium/rules/conditions.md#prone).

***Siege Monster.*** The giff deals double damage to objects and structures.

## Actions

***Multiattack.*** The giff makes two Greatsword or Musket attacks.

***Greatsword.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. *Hit:* `dice: 3d6 + 5|avg` (`3d6 + 5`) slashing damage.

***Musket.*** *Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), range 40/120 ft., one target. *Hit:* `dice: 2d12 + 2|avg` (`2d12 + 2`) piercing damage.

***Thunder Bomb.*** The giff lights a grapefruit-sized bomb and throws it at a point up to 60 feet away, where it explodes. Each creature within a 10-foot-radius sphere centered on that point must make a DC 15 Dexterity saving throw, taking `dice: 4d8|avg` (`4d8`) thunder damage on a failed save, or half as much damage on a successful one. After the giff throws the bomb, roll a `dice: d6|avg` (`d6`); on a roll of 4 or lower, the giff has no more bombs to throw.
```
^statblock
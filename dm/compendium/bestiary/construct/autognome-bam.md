---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bam
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/construct
aliases: ["Autognome"]
---
# Autognome
*Source: Boo's Astral Menagerie p. 13, Light of Xaryxis*  

An autognome is a mechanical gnome that resembles the rock gnome who created it, though it could never be mistaken for a gnome. Regardless of what its insides are made of, it has a metallic outer casing painted with gnomish features. It walks with a stiff gait, clanking, wheezing, whirring, and buzzing wherever it goes.

An autognome obeys its creator's commands when it is functioning properly, but a design flaw can cause an autognome to go rogue, forget its orders, and wander Wildspace doing anything except what it was designed for.

No two autognomes are necessarily made of the same materials; magic is what gives them their intelligence. Most autognomes are programmed to obey the following three directives: defend gnomes who are being attacked by non-gnomes, defend yourself if you are attacked, and protect infants and youngsters from harm. The last directive arose from the best intentions, but it doesn't distinguish between species; if an autognome sees a group of adults battling a lunar dragon wyrmling, for instance, it would come to the wyrmling's defense.

```ad-statblock
title: Autognome
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/BAM/Autognome.webp#token)
*Small construct, Any alignment*

- **Armor Class** 16  (natural armor)
- **Hit Points** 39 (`6d6 + 18`)
- **Speed** 20 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|13 (+1)| 6 (-2)|16 (+3)| 4 (-3)|11 (+0)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** Constitution +5, Wisdom +2, Charisma +0
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Languages** Common, Gnomish
- **Challenge** 2

## Traits

***Malfunction.*** Whenever the autognome takes 15 damage or more from a single source and isn't reduced to 0 hit points by that damage, roll a `dice: d20|avg` (`d20`) to determine if it suffers a malfunction:

- **1-10 "All Fine Here!".** No malfunction occurs.  
- **11-12 "My Mind Is Going. I Can Feel It.".** The autognome is [incapacitated](/compendium/rules/conditions.md#incapacitated) for 1 minute.  
- **13-14 "You've Disarmed Me!".** One of the autognome's arms falls off, reducing the number of Shock attacks it can make by 1 until a creature uses an action to reattach the arm.  
- **15-16 "Who Turned Out the Lights?".** The autognome's head falls off and deactivates, causing the autognome to be [blinded](/compendium/rules/conditions.md#blinded) and [deafened](/compendium/rules/conditions.md#deafened) until a creature uses an action to reattach the head, which reactivates it.  
- **17-20 "Have a Magical Day!".** The autognome explodes and is destroyed. Each creature within 20 feet of the exploding autognome must make a DC 11 Dexterity saving throw, taking `dice: 4d10|avg` (`4d10`) slashing damage on a failed save, or half as much damage on a successful one.  
- **Unusual Nature.** The autognome doesn't require air, food, drink, or sleep.  

## Actions

***Multiattack.*** The autognome makes two Shock attacks.

***Shock.*** *Melee or Ranged Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft. or range 60 ft., one target. *Hit:* `dice: 2d6|avg` (`2d6`) lightning damage.
```
^statblock
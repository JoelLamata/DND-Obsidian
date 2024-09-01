---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bam
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
aliases: ["Void Scavver"]
---
# Void Scavver
*Source: Boo's Astral Menagerie p. 49, Light of Xaryxis*  

Void scavvers are 20 feet long. Each one is a solitary menace with a pitch-black hide. While most other scavvers are content to feed on kitchen scraps, a void scavver goes after the cook.

A void scavver can emit an invisible ray from its eye that causes its target to feel fear even more intense than what it might normally experience given the creature's size and nature.

```ad-statblock
title: Void Scavver
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/BAM/Void%20Scavver.webp#token)
*Huge monstrosity, Unaligned*

- **Armor Class** 15  (natural armor)
- **Hit Points** 157 (`15d12 + 60`)
- **Speed** 0 ft., fly 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|22 (+6)|16 (+3)|19 (+4)| 4 (-3)|13 (+1)| 5 (-3)|

- **Proficiency Bonus** +4
- **Saving Throws** ⏤
- **Skills** Perception +5, Stealth +11
- **Senses** darkvision 120 ft., passive Perception 15
- **Languages** —
- **Challenge** 11

## Traits

***Unusual Nature.*** The scavver doesn't require air.

## Actions

***Swallowing Bite.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 10 ft., one target. *Hit:* `dice: 6d12 + 6|avg` (`6d12 + 6`) piercing damage. If the target is a Large or smaller creature, it must succeed on a DC 16 Dexterity saving throw or be swallowed by the scavver. The scavver can have one creature swallowed at a time.

A swallowed creature is [blinded](/compendium/rules/conditions.md#blinded) and [restrained](/compendium/rules/conditions.md#restrained), has total cover against attacks and other effects outside the scavver, and takes `dice: 2d10|avg` (`2d10`) acid damage at the start of each of the scavver's turns from the digestive juices in the scavver's gullet.

If the scavver takes 25 damage or more on a single turn from a creature inside it, the scavver must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate the swallowed creature, which falls [prone](/compendium/rules/conditions.md#prone) in a space within 10 feet of the scavver. If the scavver dies, a swallowed creature is no longer [restrained](/compendium/rules/conditions.md#restrained) by it and can escape from the corpse by using 10 feet of movement, exiting [prone](/compendium/rules/conditions.md#prone).

## Bonus Actions

***Ray of Fear (Recharge 4-6).*** The scavver's eye emits an [invisible](/compendium/rules/conditions.md#invisible), magical ray that targets one creature the scavver can see within 60 feet of itself. The target must succeed on a DC 16 Wisdom saving throw or be [frightened](/compendium/rules/conditions.md#frightened) of the scavver until the start of the scavver's next turn.
```
^statblock
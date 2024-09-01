---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bam
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
aliases: ["Gaj"]
---
# Gaj
*Source: Boo's Astral Menagerie p. 23, Light of Xaryxis*  

Gaj are hideous hunters that prey on other intelligent life forms. They crawl on six insectile legs and attack with their mandibles. They ambush prey by burying themselves under sand or silt and lying in wait, lurking in dark caves, or perching on natural stone ledges, where they blend in with their surroundings. Gaj have no language, but they have the magical ability to understand the speech of other creatures.

A gaj's head is a spongy globe about 2 feet in diameter, with three feathery antennae protruding from the top. Spaced around the head are six compound eyes, and six finger-like appendages hang over its mouth. A gaj can try to read the thoughts of another intelligent creature by wrapping its antennae around the creature's head. Regardless of whether the attempt succeeds, this mental probe is painful and takes a toll on the victim's well-being.

```ad-statblock
title: Gaj
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/BAM/Gaj.webp#token)
*Large aberration, typically  Neutral Evil*

- **Armor Class** 16  (natural armor)
- **Hit Points** 75 (`10d10 + 20`)
- **Speed** 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|10 (+0)|15 (+2)|12 (+1)|15 (+2)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +6, Stealth +4
- **Senses** darkvision 60 ft., passive Perception 16
- **Languages** understands all languages but can't speak
- **Challenge** 4

## Actions

***Multiattack.*** The gaj makes one Mandibles attack and uses Mind-Probing Antennae or Paralyze (if available).

***Mandibles.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one creature. *Hit:* `dice: 2d6 + 3|avg` (`2d6 + 3`) slashing damage, and the target is [grappled](/compendium/rules/conditions.md#grappled) (escape DC 11). Until the grapple ends, the target takes `dice: 2d6 + 3|avg` (`2d6 + 3`) slashing damage at the start of each of the gaj's turns. While it is grappling a creature, the gaj can't use its mandibles to attack other creatures.

***Mind-Probing Antennae.*** The gaj targets one creature [grappled](/compendium/rules/conditions.md#grappled) by it. The target must make a DC 12 Wisdom saving throw. On a failed save, the target takes `dice: 3d10|avg` (`3d10`) psychic damage, and the gaj magically pulls one piece of information from the target's mind that the gaj wants to know. On a successful save, the target takes half as much damage, and the gaj learns nothing.

***Paralyze (Recharge 6).*** The gaj magically targets one creature it can see within 60 feet of itself. The target must succeed on a DC 12 Wisdom saving throw or be [paralyzed](/compendium/rules/conditions.md#paralyzed) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
^statblock
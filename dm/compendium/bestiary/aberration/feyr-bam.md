---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bam
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
aliases: ["Feyr"]
---
# Feyr
*Source: Boo's Astral Menagerie p. 22*  

A feyr (pronounced "fear") is a tentacled horror that feeds quietly on strong emotions. To minimize the chance of harm to itself, it prefers to devour the nightmares of other creatures while they sleep.

Feyrs shun bright light but aren't harmed by it. Consequently, they are as much at home in the void of Wildspace as they are in dark alleys and dungeons. A feyr that comes across a spelljamming ship tries to enter the ship's air envelope and stow away, remaining secluded and invisible until it finds a sleeping victim it can attack. It retreats rather than allows itself to perish in a confrontation.

```ad-statblock
title: Feyr
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/BAM/Feyr.webp#token)
*Large aberration, typically  Chaotic Evil*

- **Armor Class** 16  (natural armor)
- **Hit Points** 88 (`16d10`)
- **Speed** 0 ft., fly 50 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|16 (+3)|11 (+0)|14 (+2)|14 (+2)|11 (+0)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +5, Wisdom +5
- **Skills** Perception +5, Stealth +9
- **Senses** darkvision 120 ft., passive Perception 15
- **Languages** —
- **Challenge** 5

## Traits

***Unusual Nature.*** The feyr doesn't require air.

## Actions

***Multiattack.*** The feyr makes one Frightful Bite attack and one Tentacle attack.

***Frightful Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one creature. *Hit:* `dice: 1d10 + 3|avg` (`1d10 + 3`) piercing damage, and each creature within 10 feet of the feyr that can see it must succeed on a DC 13 Wisdom saving throw or be [frightened](/compendium/rules/conditions.md#frightened) of the feyr until the end of the feyr's next turn.

***Tentacle.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 10 ft., one creature. *Hit:* `dice: 4d6 + 3|avg` (`4d6 + 3`) psychic damage, and the target is [grappled](/compendium/rules/conditions.md#grappled) (escape DC 13). Until this grapple ends, the feyr can't use this tentacle against other targets. The feyr has two tentacles, each of which can grapple one creature.

***Invisibility.*** The feyr becomes [invisible](/compendium/rules/conditions.md#invisible) until it attacks, uses Nightmare Fuel, or uses a bonus action to become visible.

***Nightmare Fuel (1/Day).*** The feyr targets one [unconscious](/compendium/rules/conditions.md#unconscious) creature it can see within 10 feet of itself. The target must succeed on a DC 13 Wisdom saving throw or take `dice: 5d10|avg` (`5d10`) psychic damage, and the feyr gains temporary hit points equal to the damage dealt.
```
^statblock
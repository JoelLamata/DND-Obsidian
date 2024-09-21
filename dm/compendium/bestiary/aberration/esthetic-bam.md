---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bam
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/aberration
aliases: ["Esthetic"]
---
# Esthetic
*Source: Boo's Astral Menagerie p. 20, Light of Xaryxis*  

An esthetic is a biological, symbiotic creation of a reigar. It is essentially an organic ship with only the barest hint of awareness. Without its reigar to guide it, an esthetic becomes a nearly mindless entity with an instinct for self-preservation.

Reigar use their esthetics as spelljamming warships. When a hostile reigar in its esthetic encounters another spacefaring vessel, it uses a magical vibration to disable the ship's spelljamming helm. The reigar then commands the esthetic to grapple members of the ship's crew and dissolve their flesh with its acid-secreting tentacles.

Each esthetic is unique in appearance. One might be bilaterally symmetrical (two matching halves, like a humanoid body along its vertical axis), radially symmetrical (like a starfish), or have no definable shape. From a distance, an esthetic is easily mistaken for a giant, space-dwelling jellyfish or cephalopod. Its outer shell is made of bioluminescent resin.

An esthetic contains enough interior space to comfortably accommodate its reigar host and up to six Medium passengers. Access is gained through a hatch that the reigar (and no one else) can open or close with a touch.

An esthetic can survive indefinitely on the Astral Plane, provided its creator is alive. If the esthetic's creator dies, the esthetic sickens over a period of `dice: 1d12|avg` (`1d12`) days and then expires.

```ad-statblock
title: Esthetic
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/BAM/Esthetic.webp#token)
*Gargantuan aberration, Unaligned*

- **Armor Class** 14  (natural armor)
- **Hit Points** 217 (`14d20 + 70`)
- **Speed** 0 ft., fly 60 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|24 (+7)| 8 (-1)|20 (+5)| 1 (-5)|10 (+0)| 1 (-5)|

- **Proficiency Bonus** +4
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 300 ft. (blind beyond this radius), passive Perception 12
- **Languages** —
- **Challenge** 12

## Traits

***Bioluminescence.*** While it has at least 1 hit point, the esthetic sheds bright light in a 30-foot radius and dim light for an additional 30 feet, and its interior compartments are dimly lit.

***Spelljamming.*** The esthetic has the properties of a spelljamming helm (see the Astral Adventurer's Guide), but only its reigar creator can attune to it.

***Unusual Nature.*** The esthetic doesn't require air, food, or drink.

## Actions

***Multiattack.*** The esthetic makes two Tentacle attacks.

***Tentacle.*** *Melee Weapon Attack:* `dice: d20+11` (+11 to hit), reach 30 ft., one target. *Hit:* `dice: 3d6 + 7|avg` (`3d6 + 7`) force damage, and if the target is a creature, it is [grappled](/compendium/rules/conditions.md#grappled) (escape DC 17). Until this grapple ends, the creature takes `dice: 4d8|avg` (`4d8`) acid damage at the start of each of its turns, and the esthetic can't use this tentacle against other targets. The esthetic has `1d4 × 2` tentacles, each of which can grapple one target.

## Bonus Actions

***Jammerscream (Recharge 6).*** The esthetic targets one spelljamming ship within 300 feet of itself, magically suppressing the properties of the ship's spelljamming helm for `dice: 2d10|avg` (`2d10`) days. If the ship has more than one helm aboard it, randomly determine which helm is affected. A creature attuned to that helm can choose to make a DC 17 Charisma saving throw. On a failed save, the creature takes `dice: 12d6|avg` (`12d6`) psychic damage, and the helm is suppressed for `dice: 2d10|avg` (`2d10`) hours instead of `dice: 2d10|avg` (`2d10`) days. On a successful save, the creature takes half as much damage, and the helm is suppressed for `dice: 2d10|avg` (`2d10`) minutes instead of `dice: 2d10|avg` (`2d10`) days.
```
^statblock
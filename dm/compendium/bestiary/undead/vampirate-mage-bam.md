---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bam
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
aliases: ["Vampirate Mage"]
---
# Vampirate Mage
*Source: Boo's Astral Menagerie p. 63, Light of Xaryxis*  

A ship of vampirates needs a spellcaster to operate the spelljamming helm. A vampirate mage rarely, if ever, leaves the helm.

```ad-statblock
title: Vampirate Mage
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/BAM/Vampirate%20Mage.webp#token)
*Medium undead, typically  Lawful Evil*

- **Armor Class** 14  (natural armor)
- **Hit Points** 68 (`8d8 + 32`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|14 (+2)|18 (+4)|13 (+1)|14 (+2)|15 (+2)|

- **Proficiency Bonus** +3
- **Saving Throws** Wisdom +5, Charisma +5
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 12
- **Languages** the languages it knew in life
- **Challenge** 5

## Traits

***Explode.*** When the mage is reduced to 0 hit points, it explodes in a cloud of ash. Any creature within 5 feet of it must succeed on a DC 14 Constitution saving throw or take `dice: 2d10|avg` (`2d10`) necrotic damage.

***Spider Climb.*** The mage can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

***Unusual Nature.*** The mage doesn't require air or drink.

***Spellcasting.*** The mage casts one of the following spells, using Charisma as the spellcasting ability (spell save DC 13):

**At will**: [mage hand](compendium/spells/mage-hand.md), [message](compendium/spells/message.md)

**1/day**: [darkness](compendium/spells/darkness.md), [dimension door](compendium/spells/dimension-door.md), [fly](compendium/spells/fly.md), [hypnotic pattern](compendium/spells/hypnotic-pattern.md)

## Actions

***Multiattack.*** The mage makes two Ray of Cold attacks.

***Energy Drain.*** *Melee or Ranged Spell Attack:* `dice: d20+5` (+5 to hit), reach 5 ft. or range 30 ft., one creature. *Hit:* `dice: 4d10|avg` (`4d10`) necrotic damage. A Humanoid reduced to 0 hit points by this attack dies and instantly transforms into a free-willed shadow under the DM's control.

***Ray of Cold.*** *Ranged Spell Attack:* `dice: d20+5` (+5 to hit), range 120 ft., one target. *Hit:* `dice: 2d8 + 2|avg` (`2d8 + 2`) cold damage.
```
^statblock
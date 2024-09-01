---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/gos
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/lizardfolk
aliases: ["Lizardfolk Subchief"]
---
# Lizardfolk Subchief
*Source: Ghosts of Saltmarsh p. 242*  

The lizardfolk subchief (seen in Danger at Dunwater) is a devout priest of Semuanya, pursuing the worship of its god in a manner similar to a cleric. It wields a dagger crafted of a massive crocodile tooth blessed by Semuanya, representing the subchief's prowess in both battle and piety.

```ad-statblock
title: Lizardfolk Subchief
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/GoS/Lizardfolk%20Subchief.webp#token)
*Medium humanoid (lizardfolk), Neutral*

- **Armor Class** 14  (natural armor)
- **Hit Points** 52 (`8d8 + 16`)
- **Speed** 30 ft., swim 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|12 (+1)|14 (+2)|10 (+0)|16 (+3)|12 (+1)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +5
- **Skills** Athletics +4, Perception +5, Survival +5
- **Senses** passive Perception 15
- **Languages** Draconic
- **Challenge** 3

## Traits

***Hold Breath.*** The subchief can hold its breath for 15 minutes.

***Spellcasting.*** The subchief is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, `dice: d20+5` (+5 to hit) with spell attacks). It has the following cleric spells prepared:

**Cantrips (at will)**: [light](compendium/spells/light.md), [sacred flame](compendium/spells/sacred-flame.md), [spare the dying](compendium/spells/spare-the-dying.md), [thaumaturgy](compendium/spells/thaumaturgy.md)

**1st level (4 slots)**: [command](compendium/spells/command.md), [guiding bolt](compendium/spells/guiding-bolt.md), [purify food and drink](compendium/spells/purify-food-and-drink.md)

**2nd level (3 slots)**: [hold person](compendium/spells/hold-person.md), [lesser restoration](compendium/spells/lesser-restoration.md), [silence](compendium/spells/silence.md)

**3rd level (2 slots)**: [bestow curse](compendium/spells/bestow-curse.md), [dispel magic](compendium/spells/dispel-magic.md)

## Actions

***Tooth Dagger.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. *Hit:* `dice: 1d4 + 2|avg` (`1d4 + 2`) piercing damage.

***Jaws of Semuanya (Recharge 5-6).*** The subchief invokes the primal magic of Semuanya, summoning a spectral maw around a target it can see within 60 feet of it. The target must make a DC 13 Dexterity saving throw, taking `dice: 5d8|avg` (`5d8`) piercing damage on a failed save, or half as much damage on a successful one. A creature that fails this saving throw is also [frightened](/compendium/rules/conditions.md#frightened) until the end of its next turn.
```
^statblock
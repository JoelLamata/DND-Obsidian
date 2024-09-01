---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bgdia
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
aliases: ["Black Gauntlet of Bane"]
---
# Black Gauntlet of Bane
*Source: Baldur's Gate: Descent Into Avernus p. 235*  

Bane's devoted followers are warriors who seek to rule through martial strength and intimidation, cruel tyrants who use threats and gifts as needed to ensure loyalty. They enslave those too weak to resist them and shower the strong with gifts and promises of power to turn them into loyal vassals.

## Cruel Tyrants

Whenever Bane's followers gain power, they institute draconian measures to ensure that their rule is unquestioned. They stamp out all opposition while richly rewarding those who swear fealty.

## Warrior Cult

Cultists of Bane are warriors who wear heavy armor and wield maces, swords, spears, and crossbows. They paint the right gauntlet of their armor black in honor of their patron. Bane's clerics wield black maces with heads shaped to look like a closed fist.

## Cult Ranks

Bane's cultists operate according to strict military hierarchies. The lowest rank consists of the fists of Bane, foot soldiers who obey all orders without hesitation. They are led by iron consuls, cunning field officers who excel at coordinating the fists in combat. The black gauntlets are the priests who command the consuls.

## Statblock

```ad-statblock
title: Black Gauntlet of Bane
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/BGDIA/Black%20Gauntlet%20of%20Bane.webp#token)
*Medium humanoid (human), Lawful Evil*

- **Armor Class** 16  ([chain mail](compendium/items/chain-mail.md))
- **Hit Points** 51 (`6d8 + 24`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|11 (+0)|18 (+4)|12 (+1)|15 (+2)|18 (+4)|

- **Proficiency Bonus** +3
- **Saving Throws** Wisdom +5
- **Skills** Intimidation +7, Perception +5
- **Senses** passive Perception 15
- **Languages** Common
- **Challenge** 6

## Traits

***Aura of Terror.*** When a hostile creature within 5 feet of the black gauntlet makes an attack roll or a saving throw, it has disadvantage on the roll. Creatures that are immune to the [frightened](/compendium/rules/conditions.md#frightened) condition are immune to this trait.

***Tactical Discipline.*** The black gauntlet has advantage on all ability checks and saving throws made during combat.

***Spellcasting.*** The black gauntlet is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 15, `dice: d20+7` (+7 to hit) with spell attacks). It has the following cleric spells prepared:

**Cantrips (at will)**: [guidance](compendium/spells/guidance.md), [sacred flame](compendium/spells/sacred-flame.md), [thaumaturgy](compendium/spells/thaumaturgy.md)

**1st level (4 slots)**: [bane](compendium/spells/bane.md), [bless](compendium/spells/bless.md), [cure wounds](compendium/spells/cure-wounds.md), [guiding bolt](compendium/spells/guiding-bolt.md) (see "Actions" below)

**2nd level (3 slots)**: [blindness/deafness](compendium/spells/blindness-deafness.md), [hold person](compendium/spells/hold-person.md), [silence](compendium/spells/silence.md)

**3rd level (2 slots)**: [sending](compendium/spells/sending.md), [spirit guardians](compendium/spells/spirit-guardians.md)

## Actions

***Multiattack.*** The black gauntlet makes two attacks with its mace.

***Mace.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. *Hit:* `dice: 1d6 + 4|avg` (`1d6 + 4`) bludgeoning damage plus `dice: 3d8|avg` (`3d8`) necrotic damage.

***Guiding Bolt (1st-Level Spell; Requires a Spell Slot).*** *Ranged Spell Attack:* `dice: d20+7` (+7 to hit), range 120 ft., one creature. *Hit:* `dice: 4d6|avg` (`4d6`) radiant damage, and the next attack roll made against the target before the end of the black gauntlet's next turn has advantage. If the black gauntlet casts this spell using a spell slot of 2nd level or higher, the damage increases by `dice: 1d6|avg` (`1d6`) for each slot level above 1st.
```
^statblock
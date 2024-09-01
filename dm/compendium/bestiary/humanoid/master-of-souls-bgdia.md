---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bgdia
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
aliases: ["Master of Souls"]
---
# Master of Souls
*Source: Baldur's Gate: Descent Into Avernus p. 234*  

Those who follow Myrkul are either wizards or those who seek to master the necromantic arts.

## Delvers into Lore

Cultists of Myrkul study rituals that allow them to force the souls of the dead into service, compelling them to answer questions and share forgotten lore. They seek out arcane secrets in ancient ruins, and attempt to steal spellbooks and other tomes from wizards outside of the cult.

## Cult Ranks

A follower of Myrkul wields a flail that has a skull replacing the normal flail's striking head. Necromites are initiates who have not yet mastered arcane magic and rely on their flails in battle. Skull lashers are spellcasters who use magic to augment their combat abilities. The Masters of Souls delve deep into Myrkul's secrets, allowing them to animate the dead and perform other grave magic.

## Statblock

```ad-statblock
title: Master of Souls
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/BGDIA/Master%20of%20Souls.webp#token)
*Medium humanoid (human), Neutral Evil*

- **Armor Class** 12 
- **Hit Points** 45 (`6d8 + 18`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|14 (+2)|17 (+3)|19 (+4)|14 (+2)|13 (+1)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +4
- **Skills** Arcana +6, Religion +6
- **Senses** passive Perception 12
- **Languages** Abyssal, Common, Infernal
- **Challenge** 4

## Traits

***Grave Magic.*** When the master of souls cast a spell that deals damage, it can change the spell's damage type to necrotic.

***Spellcasting.*** The master of souls is a 5th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, `dice: d20+6` (+6 to hit) with spell attacks). It has the following wizard spells prepared:

**Cantrips (at will)**: [chill touch](compendium/spells/chill-touch.md) (see "Actions" below), [mage hand](compendium/spells/mage-hand.md), [message](compendium/spells/message.md), [prestidigitation](compendium/spells/prestidigitation.md)

**1st level (4 slots)**: [burning hands](compendium/spells/burning-hands.md), [detect magic](compendium/spells/detect-magic.md), [ray of sickness](compendium/spells/ray-of-sickness.md) (see "Actions" below), [shield](compendium/spells/shield.md)

**2nd level (3 slots)**: [darkness](compendium/spells/darkness.md), [misty step](compendium/spells/misty-step.md), [scorching ray](compendium/spells/scorching-ray.md) (see "Actions" below)

**3rd level (2 slots)**: [animate dead](compendium/spells/animate-dead.md), [fireball](compendium/spells/fireball.md)

## Actions

***Multiattack.*** The master of souls attacks twice with its flail.

***Silvered Skull Flail.*** *Melee Weapon Attack:* `dice: d20+2` (+2 to hit), reach 5 ft., one target. *Hit:* `dice: 1d8|avg` (`1d8`) bludgeoning damage plus `dice: 4d6|avg` (`4d6`) necrotic damage, and the target has disadvantage on all saving throws until the end of the master of souls' next turn.

***Chill Touch (Cantrip).*** *Ranged Spell Attack:* `dice: d20+6` (+6 to hit), range 120 ft., one creature. *Hit:* `dice: 2d8|avg` (`2d8`) necrotic damage, and the target can't regain hit points until the start of the master of souls' next turn. If the target is undead, it has disadvantage on attack rolls against the master of souls for the same duration.

***Ray of Sickness (1st-Level Spell; Requires a Spell Slot).*** *Ranged Spell Attack:* `dice: d20+6` (+6 to hit), range 60 ft., one creature. *Hit:* `dice: 2d8|avg` (`2d8`) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be [poisoned](/compendium/rules/conditions.md#poisoned) until the end of the master of souls' next turn. If the master of souls casts this spell using a spell slot of 2nd level or higher, the damage increases by `dice: 1d8|avg` (`1d8`) for each slot level above 1st.

***Scorching Ray (2nd-Level Spell; Requires a Spell Slot).*** *Ranged Spell Attack:* `dice: d20+6` (+6 to hit), range 120 ft., one target per ray (3 rays if a 2nd-level spell slot is used, 4 rays if a 3rd-level spell slot is used). *Hit:* `dice: 2d6|avg` (`2d6`) fire damage per ray.
```
^statblock
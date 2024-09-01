---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bgdia
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
aliases: ["Skull Lasher of Myrkul"]
---
# Skull Lasher of Myrkul
*Source: Baldur's Gate: Descent Into Avernus p. 234*  

Those who follow Myrkul are either wizards or those who seek to master the necromantic arts.

## Delvers into Lore

Cultists of Myrkul study rituals that allow them to force the souls of the dead into service, compelling them to answer questions and share forgotten lore. They seek out arcane secrets in ancient ruins, and attempt to steal spellbooks and other tomes from wizards outside of the cult.

## Cult Ranks

A follower of Myrkul wields a flail that has a skull replacing the normal flail's striking head. Necromites are initiates who have not yet mastered arcane magic and rely on their flails in battle. Skull lashers are spellcasters who use magic to augment their combat abilities. The Masters of Souls delve deep into Myrkul's secrets, allowing them to animate the dead and perform other grave magic.

## Statblock

```ad-statblock
title: Skull Lasher of Myrkul
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/BGDIA/Skull%20Lasher%20of%20Myrkul.webp#token)
*Medium humanoid (human), Neutral Evil*

- **Armor Class** 12 
- **Hit Points** 32 (`5d8 + 10`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|14 (+2)|15 (+2)|16 (+3)|13 (+1)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +3
- **Skills** Arcana +5, Religion +5
- **Senses** passive Perception 11
- **Languages** Abyssal, Common, Infernal
- **Challenge** 1

***Spellcasting.*** The skull lasher is a 3rd-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, `dice: d20+5` (+5 to hit) with spell attacks). It has the following wizard spells prepared:

**Cantrips (at will)**: [mage hand](compendium/spells/mage-hand.md), [message](compendium/spells/message.md), [prestidigitation](compendium/spells/prestidigitation.md)

**1st level (4 slots)**: [detect magic](compendium/spells/detect-magic.md), [protection from evil and good](compendium/spells/protection-from-evil-and-good.md), [ray of sickness](compendium/spells/ray-of-sickness.md) (see "Actions" below), [shield](compendium/spells/shield.md)

**2nd level (2 slots)**: [darkness](compendium/spells/darkness.md), [misty step](compendium/spells/misty-step.md)

## Actions

***Multiattack.*** The skull lasher makes two attacks with its flail.

***Iron Skull Flail.*** *Melee Weapon Attack:* `dice: d20+2` (+2 to hit), reach 5 ft., one target. *Hit:* `dice: 1d8|avg` (`1d8`) bludgeoning damage plus `dice: 2d6|avg` (`2d6`) necrotic damage, and the target has disadvantage on all saving throws until the end of the skull lasher's next turn.

***Ray of Sickness (1st-Level Spell; Requires a Spell Slot).*** *Ranged Spell Attack:* `dice: d20+5` (+5 to hit), range 60 ft., one creature. *Hit:* `dice: 2d8|avg` (`2d8`) poison damage, and the target must succeed on a DC 13 Constitution saving throw or be [poisoned](/compendium/rules/conditions.md#poisoned) until the end of the skull lasher's next turn. If the skull lasher casts this spell using a spell slot of 2nd level or higher, the damage increases by `dice: 1d8|avg` (`1d8`) for each slot level above 1st.
```
^statblock
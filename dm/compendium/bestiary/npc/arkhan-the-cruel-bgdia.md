---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/bgdia
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dragonborn
aliases: ["Arkhan the Cruel"]
---
# Arkhan the Cruel
*Source: Baldur's Gate: Descent Into Avernus p. 111*  

Arkhan the Cruel is an evil dragonborn champion of Tiamat. Arkhan believes he can use the Hand of Vecna to unlock the means of freeing Tiamat from her prison in the Nine Hells, but only if the hand doesn't kill him first. The hand is slowly corrupting Arkhan's flesh and decomposing his body on one side.

In battle, Arkhan uses branding smite to channel the radiant power of Tiamat into his weapon attacks. If a fight turns against him, he uses the teleport power of the Hand of Vecna to return to his tower with as many allies as possible. Should one or more of his comrades fall in battle, Arkhan uses [revivify](compendium/spells/revivify.md) and [raise dead](compendium/spells/raise-dead.md) spells to bring them back to life as soon as possible.

If Arkhan finds himself overwhelmed with opposition, he orders the abishai to attack. Arkhan can also use a bonus action to call forth Asojano, a chimera lairing in the depths of the colossal dragon skull.

```ad-statblock
title: Arkhan the Cruel
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/bestiary/tokens/BGDIA/Arkhan%20the%20Cruel.webp#token)
*Medium humanoid (dragonborn), Lawful Evil*

- **Armor Class** 23  ([obsidian flint dragon plate](compendium/items/obsidian-flint-dragon-plate-bgdia.md), [shield](compendium/items/shield.md))
- **Hit Points** 221 (`26d8 + 104`)
- **Speed** 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|12 (+1)|18 (+4)|10 (+0)|10 (+0)|18 (+4)|

- **Proficiency Bonus** +5
- **Saving Throws** Wisdom +5, Charisma +9
- **Skills** Athletics +10, Deception +9, Intimidation +9
- **Senses** darkvision 60 ft. (can see invisible creatures out to the same range), passive Perception 10
- **Languages** Common, Draconic
- **Challenge** 16

## Traits

***Aura of Hate.*** While Arkhan isn't [incapacitated](/compendium/rules/conditions.md#incapacitated), he and all fiends and undead within 30 feet of him deal 4 extra damage whenever they hit with a melee weapon attack (already factored into Arkhan's attacks). This extra damage is of the same type as the weapon's damage type.

***Hand of Vecna.*** The [Hand of Vecna](compendium/items/hand-of-vecna.md) has 8 charges and regains `dice: 1d4 + 4|avg` (`1d4 + 4`) expended charges daily at dawn. Arkhan can cast the following spells from the hand by expending the specified number of charges (spell save DC 18): [finger of death](compendium/spells/finger-of-death.md) (5 charges), [sleep](compendium/spells/sleep.md) (1 charge), [slow](compendium/spells/slow.md) (2 charges), and [teleport](compendium/spells/teleport.md) (3 charges).

***Special Equipment.*** Arkhan wields [Fane-Eater](compendium/items/fane-eater-bgdia.md) and wears a suit of [Obsidian Flint Dragon Plate](compendium/items/obsidian-flint-dragon-plate-bgdia.md). The armor gives Arkhan advantage on ability checks and saving throws made to avoid or end the [grappled](/compendium/rules/conditions.md#grappled) condition on him.

***Innate Spellcasting.*** Arkhan's spellcasting ability is Charisma (spell save DC 17). He can cast the following spells, requiring no material components:

**1/day each**: [geas](compendium/spells/geas.md), [raise dead](compendium/spells/raise-dead.md)

**3/day each**: [animate dead](compendium/spells/animate-dead.md), [branding smite](compendium/spells/branding-smite.md) (at 4th level), [revivify](compendium/spells/revivify.md)

## Actions

***Multiattack.*** Arkhan makes three weapon attacks.

***Fane-Eater (Battleaxe).*** *Melee Weapon Attack:* `dice: d20+13` (+13 to hit), reach 5 ft., one target. *Hit:* `dice: 1d8 + 12|avg` (`1d8 + 12`) slashing damage, or `dice: 1d10 + 12|avg` (`1d10 + 12`) slashing damage when used with two hands, plus `dice: 2d8|avg` (`2d8`) cold damage. If the target is a creature and Arkhan rolls a 20 on the attack roll, the creature takes an extra `dice: 2d8|avg` (`2d8`) necrotic damage, and Arkhan regains an amount of hit points equal to the necrotic damage dealt.

***Javelin.*** *Melee or Ranged Weapon Attack:* `dice: d20+10` (+10 to hit), reach 5 ft. or range 30/120 ft., one target. *Hit:* `dice: 1d6 + 5|avg` (`1d6 + 5`) piercing damage, plus 4 piercing damage and `dice: 2d8|avg` (`2d8`) cold damage if the javelin was used to make a melee attack.
```
^statblock
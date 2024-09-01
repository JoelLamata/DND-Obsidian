---
obsidianUIMode: preview
cssclasses: json5e-vehicle
tags:
- compendium/src/5e/bgdia
- ttrpg-cli/vehicle/size/huge
- ttrpg-cli/vehicle/terrain/land
- ttrpg-cli/vehicle/type/infernal-war-machine
aliases: ["Scavenger"]
---
# Scavenger
*Source: Baldur's Gate: Descent Into Avernus p. 219*  

```ad-statblock
title: Scavenger
![](https://raw.githubusercontent.com/5etools-mirror-2/5etools-img/main/vehicles/tokens/BGDIA/Scavenger.webp#token)
*Huge vehicle (4 tons 1000 lb.); land*

- **Cargo Capacity** 2 tons
- **Armor Class** 19
- **Hit Points** 150 (damage threshold 10, mishap threshold 20)
- **Speed** 100 ft.
- *Travel Pace* 10 miles per hour (240 miles per day) ^[Based on _Special Travel Pace_, DMG p242]

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|12 (+1)|20 (+5)| 0 (-5)| 0 (-5)| 0 (-5)|

- **Damage Immunities** fire, poison, psychic
- **Condition Immunities** [blinded](/compendium/rules/conditions.md#blinded), [charmed](/compendium/rules/conditions.md#charmed), [deafened](/compendium/rules/conditions.md#deafened), [frightened](/compendium/rules/conditions.md#frightened), [paralyzed](/compendium/rules/conditions.md#paralyzed), [petrified](/compendium/rules/conditions.md#petrified), [poisoned](/compendium/rules/conditions.md#poisoned), [stunned](/compendium/rules/conditions.md#stunned), [unconscious](/compendium/rules/conditions.md#unconscious)

## Traits

**Crushing Wheels** The Scavenger can move through the space of any Large or smaller creature. When it does, the creature must succeed on a DC 12 Dexterity saving throw or take `dice: 3d10|avg` (`3d10`) bludgeoning damage and be knocked [prone](/compendium/rules/conditions.md#prone). If the creature was already [prone](/compendium/rules/conditions.md#prone), it takes an extra `dice: 3d10|avg` (`3d10`) bludgeoning damage. This trait can't be used against a particular creature more than once each turn.

**Magic Weapons** The Scavenger's weapon attacks are magical.

**Prone Deficiency** If the Scavenger rolls over and falls [prone](/compendium/rules/conditions.md#prone), it can't right itself and is [incapacitated](/compendium/rules/conditions.md#incapacitated) until flipped upright.

## Action Stations

**Helm (Requires 1 Crew and Grants Three-Quarters Cover)** Drive and steer the Scavenger.

**Grappling Claw (Requires 1 Crew and Grants Half Cover)** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 15 ft., one target. *Hit:* The target is [grappled](/compendium/rules/conditions.md#grappled) (escape DC 12). If the target is a creature, it is [restrained](/compendium/rules/conditions.md#restrained) until the grapple ends. The grappling claw can grapple only one target at a time, and the claw's operator can use a bonus action to make the claw release whatever it's holding.

**2 Harpoon Flingers (Each Station Requires 1 Crew and Grants Half Cover)** *Ranged Weapon Attack:* `dice: d20+6` (+6 to hit), range 120 ft., one target. *Hit:* `dice: 2d8 + 1|avg` (`2d8 + 1`) piercing damage.
```
^statblock
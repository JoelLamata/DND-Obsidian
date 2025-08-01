---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xphb
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Insect (Spider)
---
# [Giant Insect (Spider)](3-Mechanics\CLI\bestiary\beast/giant-insect-spider-xphb.md)
*Source: Player's Handbook (2024) p. 279. Available in the <span title='Systems Reference Document (5.2)'>SRD</span>*  

```statblock
"name": "Giant Insect (Spider) (XPHB)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac_class": "11 + the spell's level"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "13"
  - !!int "15"
  - !!int "4"
  - !!int "14"
  - !!int "3"
"speed": "40 ft., climb 40 ft."
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you know"
"traits":
  - "desc": "The insect can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The insect makes a number of attacks equal to half this spell's level\
      \ (round down)."
    "name": "Multiattack"
  - "desc": "Melee Attack Roll: Bonus equals your spell attack modifier, reach 10\
      \ ft. Hit: 1d6 + 3 + the spell's level Piercing damage plus d4 Poison damage."
    "name": "Poison Jab"
  - "desc": "Ranged Attack Roll: Bonus equals your spell attack modifier, range\
      \ 60 ft. Hit: 1d10 + 3 + the spell's level Bludgeoning damage, and the target's\
      \ Speed is reduced to 0 until the start of the insect's next turn."
    "name": "Web Bolt"
"source":
  - "XPHB"
```
^statblock
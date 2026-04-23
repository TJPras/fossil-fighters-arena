import {
    CLOSE_RANGE,
    MEDIUM_RANGE,
    LONG_RANGE,
} from './rangeClasses';
import {
    GOLD,
    HEAD,
    BODY,
    ARMS,
    LEGS,
} from './superFossils';
import { statusEffects } from './statusEffects';
import { abilities } from './abilities';

const ENEMY_ALL = "enemy-all";
const ENEMY_SINGLE = "enemy-single";
const TEAM_ALL = "team-all";
const TEAM_SINGLE = "team-single";
const SELF = "self";
const ELEMENTS = {
    FIRE: "fire",
    WATER: "water",
    EARTH: "earth",
    AIR: "air",
    NEUTRAL: "neutral",
    LEGENDARY: "legendary",
}

export const Fossilary = {
    trex: {
        num: 1,
        name: "T-Rex",
        element: ELEMENTS.FIRE,
        baseStats: {
            lp: 600,
            attack: 99,
            defense: 50,
            accuracy: 43,
            speed: 12,
            critRate: 0.15
        },
        superFossil: {
            fossil: null,
            changeable: true,
            hasSuperEvolver: true
        },
        ability: null,
        rangeClass: CLOSE_RANGE,
        moveset: [
            {
                name: "Tyrant's Roar",
                moveType: "attack",
                basePower: 1,
                cost: 100,
                effect: null,
                target: ENEMY_ALL,
                counterable: false
            },
            {
                name: "Scare Tactics",
                moveType: "attack",
                basePower: 67,
                cost: 200,
                effect: {
                    effectType: statusEffects.SCARE,
                    chance: 0.4
                },
                target: ENEMY_SINGLE,
                counterable: true
            },
            {
                name: "Frightful Assault",
                moveType: "attack",
                basePower: 90,
                cost: 300,
                effect: {
                    effectType: statusEffects.GOLD_SCARE,
                    chance: 0.8
                },
                target: ENEMY_SINGLE,
                counterable: true
            }
        ],
        supportEffects: {
            target: "team",
            attack: -0.3,
            defense: -0.3,
            accuracy: -0.3,
            speed: -0.3
        },
        image: {
            medalBase: "assets/medal_sprites/trex_base.png",
            medalHead: "assets/medal_sprites/trex_head.png",
            medalBody: "assets/medal_sprites/trex_body.png",
            medalArms: "assets/medal_sprites/trex_arms.png",
            medalLegs: "assets/medal_sprites/trex_legs.png",
            battleBase: "assets/battle_sprites/trex_base.png",
            battleHead: "assets/battle_sprites/trex_head.png",
            battleBody: "assets/battle_sprites/trex_body.png",
            battleArms: "assets/battle_sprites/trex_arms.png",
            battleLegs: "assets/battle_sprites/trex_legs.png"

        }
    },
    daspleto: {
        num: 2,
        name: "Daspleto",
        element: ELEMENTS.EARTH,
        baseStats: {
            lp: 540,
            attack: 85,
            defense: 52,
            accuracy: 44,
            speed: 12,
            critRate: 0.15
        },
        superFossil: {
            fossil: null,
            changeable: true,
            hasSuperEvolver: false
        },
        ability: null,
        rangeClass: CLOSE_RANGE,
        moveset: [
            {
                name: "Lethal Jaws",
                moveType: "attack",
                basePower: 20,
                cost: 70,
                effect: null,
                target: ENEMY_SINGLE,
                counterable: true
            },
            {
                name: "Smash Combo",
                moveType: "attack",
                basePower: 36,
                cost: 140,
                effect: {
                    effectType: statusEffects.SCARE,
                    chance: 0.4
                },
                target: ENEMY_SINGLE,
                counterable: true
            },
            {
                name: "Burst Breath",
                moveType: "attack",
                basePower: 60,
                cost: 300,
                effect: null,
                target: ENEMY_SINGLE,
                counterable: false
            }
        ],
        supportEffects: {
            target: "team",
            attack: 0,
            defense: -0.1,
            accuracy: 0,
            speed: 0
        },
        image: {
            medalBase: "assets/medal_sprites/daspleto_base.png",
            medalHead: "assets/medal_sprites/daspleto_head.png",
            medalBody: "assets/medal_sprites/daspleto_body.png",
            medalArms: "assets/medal_sprites/daspleto_arms.png",
            medalLegs: "assets/medal_sprites/daspleto_legs.png",
            battleBase: "assets/battle_sprites/daspleto_base.png",
            battleHead: "assets/battle_sprites/daspleto_head.png",
            battleBody: "assets/battle_sprites/daspleto_body.png",
            battleArms: "assets/battle_sprites/daspleto_arms.png",
            battleLegs: "assets/battle_sprites/daspleto_legs.png"

        }
    },
    tarbo: {
        num: 4,
        name: "Tarbo",
        element: ELEMENTS.AIR,
        baseStats: {
            lp: 540,
            attack: 85,
            defense: 40,
            accuracy: 46,
            speed: 13,
            critRate: 0.15
        },
        superFossil: {
            fossil: null,
            changeable: true,
            hasSuperEvolver: false
        },
        ability: null,
        rangeClass: CLOSE_RANGE,
        moveset: [
            {
                name: "Tarbo Bite",
                moveType: "attack",
                basePower: 20,
                cost: 70,
                effect: null,
                target: ENEMY_SINGLE,
                counterable: true
            },
            {
                name: "Tarbo Combo",
                moveType: "attack",
                basePower: 40,
                cost: 140,
                effect: null,
                target: ENEMY_SINGLE,
                counterable: true
            },
            {
                name: "Cyclone",
                moveType: "attack",
                basePower: 55,
                cost: 220,
                effect: null,
                target: ENEMY_SINGLE,
                counterable: false
            }
        ],
        supportEffects: {
            target: "team",
            attack: 0,
            defense: 0,
            accuracy: 0,
            speed: -0.1
        },
        image: {
            medalBase: "assets/medal_sprites/tarbo_base.png",
            medalHead: "assets/medal_sprites/tarbo_head.png",
            medalBody: "assets/medal_sprites/tarbo_body.png",
            medalArms: "assets/medal_sprites/tarbo_arms.png",
            medalLegs: "assets/medal_sprites/tarbo_legs.png",
            battleBase: "assets/battle_sprites/tarbo_base.png",
            battleHead: "assets/battle_sprites/tarbo_head.png",
            battleBody: "assets/battle_sprites/tarbo_body.png",
            battleArms: "assets/battle_sprites/tarbo_arms.png",
            battleLegs: "assets/battle_sprites/tarbo_legs.png"

        }
    },
    alio: {
        num: 5,
        name: "Alio",
        element: ELEMENTS.WATER,
        baseStats: {
            lp: 420,
            attack: 76,
            defense: 32,
            accuracy: 50,
            speed: 14,
            critRate: 0.2
        },
        superFossil: {
            fossil: null,
            changeable: true,
            hasSuperEvolver: false
        },
        ability: null,
        rangeClass: CLOSE_RANGE,
        moveset: [
            {
                name: "Alio Tusk",
                moveType: "attack",
                basePower: 20,
                cost: 80,
                effect: null,
                target: ENEMY_SINGLE,
                counterable: true
            },
            {
                name: "Poison Needle",
                moveType: "attack",
                basePower: 27,
                cost: 130,
                effect: {
                    effectType: statusEffects.POISON,
                    chance: 0.5
                },
                target: ENEMY_SINGLE,
                counterable: true
            },
            {
                name: "Poison Breath",
                moveType: "status",
                cost: 200,
                effect: {
                    effectType: statusEffects.GOLD_POISON,
                    chance: 1.0
                },
                target: ENEMY_SINGLE,
                counterable: false
            }
        ],
        supportEffects: null,
        image: {
            medalBase: "assets/medal_sprites/alio_base.png",
            medalHead: "assets/medal_sprites/alio_head.png",
            medalBody: "assets/medal_sprites/alio_body.png",
            medalArms: "assets/medal_sprites/alio_arms.png",
            medalLegs: "assets/medal_sprites/alio_legs.png",
            battleBase: "assets/battle_sprites/alio_base.png",
            battleHead: "assets/battle_sprites/alio_head.png",
            battleBody: "assets/battle_sprites/alio_body.png",
            battleArms: "assets/battle_sprites/alio_arms.png",
            battleLegs: "assets/battle_sprites/alio_legs.png"

        }
    },
    allo: {
        num: 10,
        name: "Allo",
        element: ELEMENTS.NEUTRAL,
        baseStats: {
            lp: 580,
            attack: 88,
            defense: 45,
            accuracy: 48,
            speed: 12,
            critRate: 0.15
        },
        superFossil: {
            fossil: null,
            changeable: true,
            hasSuperEvolver: true
        },
        ability: null,
        rangeClass: CLOSE_RANGE,
        moveset: [
            {
                name: "Allo Bite",
                moveType: "attack",
                basePower: 18,
                cost: 70,
                effect: null,
                target: ENEMY_SINGLE,
                counterable: true
            },
            {
                name: "Allo Combo",
                moveType: "attack",
                basePower: 38,
                cost: 150,
                effect: {
                    effectType: statusEffects.EXCITE,
                    chance: 0.5
                },
                target: ENEMY_SINGLE,
                counterable: true
            },
            {
                name: "Allo Fury",
                moveType: "attack",
                basePower: 97,
                cost: 300,
                effect: null,
                target: ENEMY_SINGLE,
                counterable: true
            }
        ],
        supportEffects: {
            target: "team",
            attack: 0,
            defense: 0,
            accuracy: 0,
            speed: 0.4
        },
        image: {
            medalBase: "assets/medal_sprites/allo_base.png",
            medalHead: "assets/medal_sprites/allo_head.png",
            medalBody: "assets/medal_sprites/allo_body.png",
            medalArms: "assets/medal_sprites/allo_arms.png",
            medalLegs: "assets/medal_sprites/allo_legs.png",
            battleBase: "assets/battle_sprites/allo_base.png",
            battleHead: "assets/battle_sprites/allo_head.png",
            battleBody: "assets/battle_sprites/allo_body.png",
            battleArms: "assets/battle_sprites/allo_arms.png",
            battleLegs: "assets/battle_sprites/allo_legs.png"

        }
    },
    igno: {
        num: 164,
        name: "Igno",
        element: ELEMENTS.LEGENDARY,
        baseStats: {
            lp: 550,
            attack: 99,
            defense: 23,
            accuracy: 30,
            speed: 10,
            critRate: 0.05
        },
        superFossil: {
            fossil: GOLD,
            changeable: false,
            hasSuperEvolver: false
        },
        ability: abilities.soloPower,
        rangeClass: CLOSE_RANGE,
        moveset: [
            {
                name: "Burning Bite",
                moveType: "attack",
                basePower: 33,
                cost: 200,
                effect: null,
                target: ENEMY_SINGLE,
                counterable: true
            },
            {
                name: "Volcanic Combo",
                moveType: "attack",
                basePower: 77,
                cost: 340,
                effect: null,
                target: ENEMY_SINGLE,
                counterable: true
            },
            {
                name: "Inferno Breath",
                moveType: "attack",
                basePower: 135,
                cost: 500,
                effect: {
                    effectType: statusEffects.GOLD_SCARE,
                    chance: 1.0
                },
                target: ENEMY_SINGLE,
                counterable: false
            }
        ],
        supportEffects: {
            target: "team",
            attack: -0.5,
            defense: -0.5,
            accuracy: -0.5,
            speed: -0.5
        },
        image: {
            medalBase: "assets/medal_sprites/igno_base.png",
            battleBase: "assets/battle_sprites/igno_base.png"

        }
    }
}
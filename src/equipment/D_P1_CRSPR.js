export default {
	selected: true,
	name: "CRSPR Flamethrower",
	class: "Heavy Weapon",
	icon: "equipment.D_P1_CRSPR",
	baseStats: {
		dmg: { name: "Damage", value: 10 },
		ammo: { name: "Max Fuel", value: 300 },
		clip: { name: "Tank Size", value: 50 },
		rate: { name: "Rate of Fire", value: 6.0 },
		reload: { name: "Reload Time", value: 3.0 },
		ex1: { name: "Sticky Flame Damage", value: 0 },
		ex2: { name: "Sticky Flame Burn", value: 0 },
		ex3: { name: "Sticky Flame Slowdown", value: 0 },
		ex4: { name: "Sticky Flame Duration", value: 2 },
		ex5: { name: "Fear Factor", value: 0, percent: true },
		ex6: { name: "Flame Reach", value: 10 },
		ex7: { name: "Area Heat", value: 0 },
		ex8: { name: "Intensity Bonus", value: 0, percent: true },
		ex9: { name: "Killed Targets Explode %", value: 0, percent: true }
	},
	mods: [
		[
			{
				selected: false,
				name: "High Capacity Tanks",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				cost: {
					credits: 1200,
					bismor: 0,
					croppa: 0,
					enorPearl: 25,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... you can always get bigger variants.",
				stats: {
					clip: { name: "Tank Size", value: 25 }
				}
			},
			{
				selected: false,
				name: "High Pressure Ejector",
				icon: "Icon_Upgrade_Distance",
				type: "Reach",
				cost: {
					credits: 1200,
					bismor: 25,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Increases the range of the flame for long distance incineration.",
				stats: {
					ex6: { name: "Flame Reach", value: 5 }
				}
			},
			{
				selected: false,
				name: "Oversized Valves",
				icon: "Icon_Upgrade_FireRate",
				type: "Rate of Fire",
				cost: {
					credits: 1200,
					bismor: 0,
					croppa: 25,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Increased fuel consumption rate for more damage.",
				stats: {
					rate: { name: "Rate of Fire", value: 2 }
				}
			}
		],
		[
			// 1/0
			{
				selected: false,
				name: "Unfiltered Fuel",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				cost: {
					credits: 2000,
					bismor: 0,
					croppa: 24,
					enorPearl: 15,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 5 }
				}
			}, // 1/1
			{
				selected: false,
				name: "Triple Filtered Fuel",
				icon: "Icon_Upgrade_Heat",
				type: "Heat",
				cost: {
					credits: 2000,
					bismor: 0,
					croppa: 0,
					enorPearl: 15,
					jadiz: 24,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Fire it up! You set things ablaze much faster. Time to watch the world burn...!",
				stats: {
					ex8: { name: "Intensity Bonus", value: 100, percent: true }
				}
			}, // 1/2
			{
				selected: false,
				name: "Sticky flame duration",
				icon: "Icon_Upgrade_Duration",
				type: "Delay",
				cost: {
					credits: 2000,
					bismor: 15,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 24,
					umanite: 0,
					err: 0
				},
				text: "Sticky flames duration increase.",
				stats: {
					ex4: { name: "Flame Duration", value: 2 }
				}
			}
		],
		[
			// 2/0
			{
				selected: false,
				name: "Sticky flame duration",
				icon: "Icon_Upgrade_Duration",
				type: "Delay",
				cost: {
					credits: 2800,
					bismor: 50,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 35,
					umanite: 0,
					err: 0
				},
				text: "Sticky flames duration increase.",
				stats: {
					ex4: { name: "Flame Duration", value: 2 }
				}
			}, // 2/1
			{
				selected: false,
				name: "Sticky Flame Slowdown",
				icon: "Icon_Upgrade_Sticky",
				type: "Slowdown",
				cost: {
					credits: 2800,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 50,
					magnite: 0,
					umanite: 35,
					err: 0
				},
				text: "Creatures moving through sticky flames are slowed.",
				stats: {
					ex3: { name: "Sticky Flame Slowdown", value: 1, binary: true }
				}
			}, // 2/2
			{
				selected: false,
				name: "More Fuel",
				icon: "Icon_Upgrade_Ammo",
				type: "total ammo",
				cost: {
					credits: 2800,
					bismor: 0,
					croppa: 35,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 50,
					err: 0
				},
				text: "Max Ammo +75",
				stats: {
					ammo: { name: "Max Fuel", value: 75 }
				}
			}
		],
		[
			// 3/0
			{
				selected: false,
				name: "More Fuel",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				cost: {
					credits: 4800,
					bismor: 72,
					croppa: 48,
					enorPearl: 50,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Max Ammo +75",
				stats: {
					ammo: { name: "Max Fuel", value: 75 }
				}
			},
			{
				selected: false,
				name: "Sticky Flame Damage",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				cost: {
					credits: 4800,
					bismor: 0,
					croppa: 0,
					enorPearl: 50,
					jadiz: 72,
					magnite: 48,
					umanite: 0,
					err: 0
				},
				text: "Creatures moving through sticky flames take more damage.",
				stats: {
					ex1: { name: "Sticky Flame Damage", value: 1, binary: true }
				}
			},
			{
				selected: false,
				name: "Sticky Flame Ignition",
				icon: "Icon_Upgrade_Heat",
				type: "Heat",
				cost: {
					credits: 4800,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 72,
					magnite: 50,
					umanite: 48,
					err: 0
				},
				text: "Creatures moving through sticky flames are quickly set on fire.",
				stats: {
					ex2: { name: "Sticky Flame Burn", value: 1, binary: true }
				}
			}
		],
		[
			{
				selected: false,
				name: "Heat Radiance",
				icon: "Icon_Upgrade_Heat",
				type: "Heat",
				cost: {
					credits: 5600,
					bismor: 70,
					croppa: 140,
					enorPearl: 0,
					jadiz: 0,
					magnite: 64,
					umanite: 0,
					err: 0
				},
				text: "Heat things up in a 5m radius around you.",
				stats: {
					ex7: { name: "Area Heat", value: 10 }
				}
			},
			{
				selected: false,
				name: "It Burns!",
				icon: "Icon_Upgrade_ScareEnemies",
				type: "Fear",
				cost: {
					credits: 5600,
					bismor: 64,
					croppa: 0,
					enorPearl: 70,
					jadiz: 0,
					magnite: 140,
					umanite: 0,
					err: 0
				},
				text: "A chance that your target will flee in terror for every second that it is in your flame.",
				stats: {
					ex5: { name: "Fear Factor", value: 13, percent: true }
				}
			},
			{
				selected: false,
				name: "Targets Explode",
				icon: "Icon_Upgrade_Explosion",
				type: "explosion",
				cost: {
					credits: 5600,
					bismor: 0,
					croppa: 64,
					enorPearl: 70,
					jadiz: 140,
					magnite: 0,
					umanite: 0,
					err: 0
				},
				text: "Targets killed from direct damage have a chance to explode.",
				stats: {
					ex9: { name: "Killed Targets Explode %", value: 50, percent: true }
				}
			}
		]
	]
};

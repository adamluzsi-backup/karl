export default {
	selected: false,
	modified: false,
	name: "Experimental Plasma Charger",
	class: "Pistol",
	icon: "equipment.D_S2_Plasma",
	baseStats: {
		dmg: { name: "Damage", value: 20 },
		clip: { name: "Battery Capacity", value: 130 },
		rate: { name: "Rate of Fire", value: 8.0 },
		reload: { name: "Cooling Rate", value: 0.5 },
		ex1: { name: "Charged Damage", value: 60 },
		ex2: { name: "Charged Area Damage", value: 80 },
		ex3: { name: "Charged Damage Radius", value: 2 },
		ex4: { name: "Charged Shot Ammo Use", value: 8 },
		ex5: { name: "Charge Speed", value: 0.8 },
		ex6: { name: "Heat when Charged", value: 0.8 },
		ex7: { name: "Projectile Velocity", value: 0, percent: true },
		ex8: { name: "Heat when Charging", value: 0 },
		ex9: { name: "Flying Nightmare", value: 0, binary: true },
		ex10: { name: "Charged Explode on hit", value: 0, binary: true },
		ex11: { name: "Projectile Bounces", value: 0, binary: true }
	},
	mods: [
		[
			{
				selected: false,
				name: "Damage Normal Projectile",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "Increases damage caused by normal projectiles",
				stats: {
					dmg: { name: "Damage", value: 6 }
				},
				cost: {
					credits: 1000,
					bismor: 0,
					croppa: 0,
					enorPearl: 20,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Larger Battery",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "You had to give up some sandwich-storage, but your total ammo capacity is increased!",
				stats: {
					clip: { name: "Battery Capacity", value: 30 }
				},
				cost: {
					credits: 1000,
					bismor: 20,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Charged Damage",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "Increases damage caused by a charged shot direct impact",
				stats: {
					ex1: { name: "Charged Damage", value: 20 }
				},
				cost: {
					credits: 1000,
					bismor: 20,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Charged Radius",
				icon: "Icon_Upgrade_Area",
				type: "Area of effect",
				text: "Bigger area radius for the charged projectile explosion",
				stats: {
					ex3: { name: "Charged Damage Radius", value: 1.5 }
				},
				cost: {
					credits: 1800,
					bismor: 0,
					croppa: 18,
					enorPearl: 0,
					jadiz: 12,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Charged Projectile Speed",
				icon: "Icon_Upgrade_ProjectileSpeed",
				type: "Projectile Speed",
				text: "Doubles the speed of the charged projectile",
				stats: {
					ex7: { name: "Projectile Velocity", value: 200, percent: true }
				},
				cost: {
					credits: 1800,
					bismor: 18,
					croppa: 0,
					enorPearl: 12,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Reactive Shockwave",
				icon: "Icon_Upgrade_AreaDamage",
				type: "Area Damage",
				text: "More bang for the buck! Increases the damage done within the Area of Effect!",
				stats: {
					ex2: { name: "Charged Area Damage", value: 20 }
				},
				cost: {
					credits: 1800,
					bismor: 18,
					croppa: 12,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Charge Cost",
				icon: "Icon_Upgrade_Fuel",
				type: "Energy Consumption",
				text: "A charged shot uses less energy",
				stats: {
					ex4: { name: "Charged Shot Ammo Use", value: 3, subtract: true }
				},
				cost: {
					credits: 2200,
					bismor: 0,
					croppa: 0,
					enorPearl: 20,
					jadiz: 0,
					magnite: 30,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Charge Speed",
				icon: "Icon_Upgrade_ChargeUp",
				type: "Charge Speed",
				text: "Prepare a charged shot in half the time",
				stats: {
					ex5: { name: "Charge Speed", value: 0.8 }
				},
				cost: {
					credits: 2200,
					bismor: 0,
					croppa: 30,
					enorPearl: 0,
					jadiz: 20,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Cooling Rate",
				icon: "Icon_Upgrade_TemperatureCoolDown",
				type: "Cooling",
				text: "Cools down faster",
				stats: {
					reload: { name: "Cooling Rate", value: 0.25 }
				},
				cost: {
					credits: 3800,
					bismor: 0,
					croppa: 25,
					enorPearl: 15,
					jadiz: 0,
					magnite: 0,
					umanite: 36,
					err: 0
				}
			},
			{
				selected: false,
				name: "Heat Buildup",
				icon: "Icon_Upgrade_TemperatureCoolDown",
				type: "Cooling",
				text: "Reduces how fast the weapon overheats when holding a charged shot",
				stats: {
					ex8: { name: "Heat when Charged", value: 0.3, subtract: true }
				},
				cost: {
					credits: 3800,
					bismor: 0,
					croppa: 0,
					enorPearl: 36,
					jadiz: 25,
					magnite: 0,
					umanite: 15,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Flying Nightmare",
				icon: "Icon_Upgrade_Shot",
				type: "Special",
				text: "Charged Projectile deals damage to nearby enemies while it flies",
				stats: {
					ex9: { name: "Flying Nightmare", value: 1, binary: true }
				},
				cost: {
					credits: 4400,
					bismor: 0,
					croppa: 40,
					enorPearl: 0,
					jadiz: 110,
					magnite: 60,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Charged Explode On Hit",
				icon: "Icon_Upgrade_Shot",
				type: "Special",
				text: "Any projectile will blow up the Charged Projectile causing a bigger explosion dealing extra damage.",
				stats: {
					ex10: { name: "Charged Explode on hit", value: 1, binary: true }
				},
				cost: {
					credits: 4400,
					bismor: 40,
					croppa: 60,
					enorPearl: 0,
					jadiz: 0,
					magnite: 110,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Normal Shots Bounce",
				icon: "Icon_Upgrade_Ricoshet",
				type: "Ricochet",
				text: "Normal shots bounce on all surfaces until they disappear.",
				stats: {
					ex11: { name: "Projectile Bounces", value: 1, binary: true }
				},
				cost: {
					credits: 4400,
					bismor: 0,
					croppa: 0,
					enorPearl: 110,
					jadiz: 60,
					magnite: 40,
					umanite: 0,
					err: 0
				}
			}
		]
	]
};

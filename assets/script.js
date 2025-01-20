const panels = {
	"Ship Manufacturing": {
		"All Subcapitals": [],
		"T1 Small Ships": [],
		"T2 Small Ships": [],
		"T1 Medium Ships": [],
		"T2 Medium Ships": [],
		"T1 Large Ships": [],
		"T2 Large Ships": [],
		"T1 Capital Hulls": [],
		"T2 Capital Hulls": [],
		"Supercapital Hulls": [],
	},
	"Components": {
		"T1 Capital Components": [],
		"Advanced Components(including T2)": [],
	},
	"Specialist Manufacturing": {
		"T1/T2 Modules & Rigs": [],
		"T1/T2 Drones & Fighters": [],
		"T2/T3 Modules & Components": [],
		"Structures": [],
		"Fuel Blocks": [],
		"Ammo": [],
	},
	"Reprocessing": {
		"Asteroid Reprocessing": [],
		"Moon Reprocessing": [],
		"Ice Reprocessing": [],
	},
	"Science": {
		"Researching ME": [],
		"Researching TE": [],
		"BPC Copying": [],
		"T2 Invention": [],
	},

	"Reactions": {
		"All Reactions": [],
		"Composite": [],
		"Biochemical": [],
		"Hybrid": [],
	}
};

const dockingSizes = {
	sub: "subcapital",
	cap: "capital",
	super: "supercapital"
};

const upwellStructures = {
	citadels: {
		Astrahus: {
			rigSize: 'm',
			docking: dockingSizes.sub,
			priority: 3,
		},
		Fortizar: {
			rigSize: 'l',
			docking: dockingSizes.cap,
			priority: 2,
		},
		Keepstar: {
			rigSize: 'xl',
			docking: dockingSizes.super,
			priority: 1,
		}
	},
	refineries: {
		Athanor: {
			rigSize: 'm',
			docking: dockingSizes.sub,
			priority: 2
		},
		Tatara: {
			rigSize: 'l',
			docking: dockingSizes.sub,
			priority: 1,
		}
	},
	engineeringComplexes: {
		Raitaru: {
			rigSize: 'm',
			docking: dockingSizes.sub,
			canBuild: [dockingSizes.sub],
			priority: 3,
		},
		Azbel: {
			rigSize: 'l',
			docking: dockingSizes.sub,
			canBuild: [dockingSizes.sub, dockingSizes.cap],
			priority: 2,
		},
		Sotiyo: {
			rigSize: 'xl',
			docking: dockingSizes.cap,
			canBuild: [dockingSizes.sub, dockingSizes.cap, dockingSizes.super],
			priority: 1
		},
	}
};

const serviceModules = {
	manufacturing: {
		capital: ["Standup Capital Shipyard I"],
		super: ["Standup Supercapital Shipyard I"],
		ship: ["Standup Manufacturing Plant I"],
		component: ["Standup Manufacturing Plant I"],
		rig: ["Standup Manufacturing Plant I"],
		charge: ["Standup Manufacturing Plant I"],
	},
	science: {
		invention: ['Standup Invention Lab I'],
		research: ['Standup Hyasyoda Research Lab', 'Standup Research Lab I'],
		copying: ['Standup Hyasyoda Research Lab', 'Standup Research Lab I']
	},
	reaction: {
		biochemical: "Standup Biochemical Reactor I",
		composite: "Standup Composite Reactor I",
		hybrid: "Standup Hybrid Reactor I",
	},
	reprocessing: {
		all: ["Standup Reprocessing Facility I"]
	}
}

const structureRigs = {
	manufacturing: {
		ship: {
			l: [
				"Standup L-Set Advanced Large Ship Manufacturing Efficiency I",
				"Standup L-Set Advanced Large Ship Manufacturing Efficiency II",
				"Standup L-Set Advanced Medium Ship Manufacturing Efficiency I",
				"Standup L-Set Advanced Medium Ship Manufacturing Efficiency II",
				"Standup L-Set Advanced Small Ship Manufacturing Efficiency I",
				"Standup L-Set Advanced Small Ship Manufacturing Efficiency II",
				"Standup L-Set Basic Large Ship Manufacturing Efficiency I",
				"Standup L-Set Basic Large Ship Manufacturing Efficiency II",
				"Standup L-Set Basic Medium Ship Manufacturing Efficiency I",
				"Standup L-Set Basic Medium Ship Manufacturing Efficiency II",
				"Standup L-Set Basic Small Ship Manufacturing Efficiency I",
				"Standup L-Set Basic Small Ship Manufacturing Efficiency II"
			],
			m: [
				"Standup M-Set Advanced Large Ship Manufacturing Material Efficiency I",
				"Standup M-Set Advanced Large Ship Manufacturing Material Efficiency II",
				"Standup M-Set Advanced Large Ship Manufacturing Time Efficiency I",
				"Standup M-Set Advanced Large Ship Manufacturing Time Efficiency II",
				"Standup M-Set Advanced Medium Ship Manufacturing Material Efficiency I",
				"Standup M-Set Advanced Medium Ship Manufacturing Material Efficiency II",
				"Standup M-Set Advanced Medium Ship Manufacturing Time Efficiency I",
				"Standup M-Set Advanced Medium Ship Manufacturing Time Efficiency II",
				"Standup M-Set Advanced Small Ship Manufacturing Material Efficiency I",
				"Standup M-Set Advanced Small Ship Manufacturing Material Efficiency II",
				"Standup M-Set Advanced Small Ship Manufacturing Time Efficiency I",
				"Standup M-Set Advanced Small Ship Manufacturing Time Efficiency II"
			],
			xl: [
				"Standup XL-Set Ship Manufacturing Efficiency I",
				"Standup XL-Set Ship Manufacturing Efficiency II"
			]
		},
		charge: {
			l: [
				"Standup L-Set Ammunition Manufacturing Efficiency I",
				"Standup L-Set Ammunition Manufacturing Efficiency II"
			],
			m: [
				"Standup M-Set Ammunition Manufacturing Material Efficiency I",
				"Standup M-Set Ammunition Manufacturing Material Efficiency II",
				"Standup M-Set Ammunition Manufacturing Time Efficiency I",
				"Standup M-Set Ammunition Manufacturing Time Efficiency II"
			],
			xl: []
		},
		drone: {
			l: [
				"Standup L-Set Drone and Fighter Manufacturing Efficiency I",
				"Standup L-Set Drone and Fighter Manufacturing Efficiency II"
			],
			m: [
				"Standup M-Set Drone and Fighter Manufacturing Material Efficiency I",
				"Standup M-Set Drone and Fighter Manufacturing Material Efficiency II",
				"Standup M-Set Drone and Fighter Manufacturing Time Efficiency I",
				"Standup M-Set Drone and Fighter Manufacturing Time Efficiency II"
			],
			xl: []
		},
		modulesRigs: {
			l: [
				"Standup L-Set Equipment Manufacturing Efficiency I",
				"Standup L-Set Equipment Manufacturing Efficiency II"
			],
			m: [
				"Standup M-Set Equipment Manufacturing Material Efficiency I",
				"Standup M-Set Equipment Manufacturing Material Efficiency II",
				"Standup M-Set Equipment Manufacturing Time Efficiency I",
				"Standup M-Set Equipment Manufacturing Time Efficiency II"
			],
			xl: [
				"Standup XL-Set Equipment and Consumable Manufacturing Efficiency I",
				"Standup XL-Set Equipment and Consumable Manufacturing Efficiency II"
			],
		},
		component: {
			l: [
				"Standup L-Set Advanced Component Manufacturing Efficiency I",
				"Standup L-Set Advanced Component Manufacturing Efficiency II",
				"Standup L-Set Basic Capital Component Manufacturing Efficiency I",
				"Standup L-Set Basic Capital Component Manufacturing Efficiency II",
				"Standup L-Set Thukker Advanced Component Manufacturing Efficiency",
				"Standup L-Set Thukker Basic Capital Component Manufacturing Efficiency",
				"Standup XL-Set Thukker Structure and Component Manufacturing Efficiency"
			],
			m: [
				"Standup M-Set Advanced Component Manufacturing Material Efficiency I",
				"Standup M-Set Advanced Component Manufacturing Material Efficiency II",
				"Standup M-Set Advanced Component Manufacturing Time Efficiency I",
				"Standup M-Set Advanced Component Manufacturing Time Efficiency II",
				"Standup M-Set Basic Capital Component Manufacturing Material Efficiency I",
				"Standup M-Set Basic Capital Component Manufacturing Material Efficiency II",
				"Standup M-Set Basic Capital Component Manufacturing Time Efficiency I",
				"Standup M-Set Basic Capital Component Manufacturing Time Efficiency II",
				"Standup M-Set Thukker Advanced Component Manufacturing Material Efficiency",
				"Standup M-Set Thukker Basic Capital Component Manufacturing Material Efficiency"
			],
			xl: []
		},
		capital: {
			l: [
				"Standup L-Set Capital Ship Manufacturing Efficiency I",
				"Standup L-Set Capital Ship Manufacturing Efficiency II"
			],
			m: [
				"Standup M-Set Basic Large Ship Manufacturing Material Efficiency I",
				"Standup M-Set Basic Large Ship Manufacturing Material Efficiency II",
				"Standup M-Set Basic Large Ship Manufacturing Time Efficiency I",
				"Standup M-Set Basic Large Ship Manufacturing Time Efficiency II"
			],
			xl: []
		},
		structure: {
			l: [
				"Standup L-Set Structure Manufacturing Efficiency I",
				"Standup L-Set Structure Manufacturing Efficiency II"
			],
			m: [
				"Standup M-Set Structure Manufacturing Material Efficiency I",
				"Standup M-Set Structure Manufacturing Material Efficiency II",
				"Standup M-Set Structure Manufacturing Time Efficiency I",
				"Standup M-Set Structure Manufacturing Time Efficiency II"
			],
			xl: [
				"Standup XL-Set Structure and Component Manufacturing Efficiency I",
				"Standup XL-Set Structure and Component Manufacturing Efficiency II"
			]
		}
	},
	science: {
		invention: {
			l: [
				"Standup L-Set Invention Optimization I",
				"Standup L-Set Invention Optimization II"
			],
			m: [
				"Standup M-Set Invention Accelerator I",
				"Standup M-Set Invention Accelerator II",
				"Standup M-Set Invention Cost Optimization I",
				"Standup M-Set Invention Cost Optimization II"
			],
			xl: []
		},
		research: {
			l: [
				"Standup L-Set ME Research Optimization I",
				"Standup L-Set ME Research Optimization II",
				"Standup L-Set TE Research Optimization I",
				"Standup L-Set TE Research Optimization II"
			],
			m: [
				"Standup M-Set ME Research Accelerator I",
				"Standup M-Set ME Research Accelerator II",
				"Standup M-Set ME Research Cost Optimization I",
				"Standup M-Set ME Research Cost Optimization II"
			],
			xl: []
		},
		copying: {
			l: [
				"Standup L-Set Blueprint Copy Optimization I",
				"Standup L-Set Blueprint Copy Optimization II"
			],
			m: [
				"Standup M-Set Blueprint Copy Accelerator I",
				"Standup M-Set Blueprint Copy Accelerator II",
				"Standup M-Set Blueprint Copy Cost Optimization I",
				"Standup M-Set Blueprint Copy Cost Optimization II"
			],
			xl: []
		}
	},
	reaction: {
		all: [
			"Standup L-Set Reactor Efficiency I",
			"Standup L-Set Reactor Efficiency II"
		],
	},
	reprocessing: {
		l: [
			"Standup L-Set Reprocessing Monitor I",
			"Standup L-Set Reprocessing Monitor II"
		],
		m: [],
		xl: []
	}
};


function convertToJSON() {
	const csvInput = document.getElementById('csvInput').value.trim();
	const lines = csvInput.split('\n');
	let jsonResult = {};
	let lastSystem = '';
	let lastType = '';
	let lastName = '';

	// Start iterating from the second line (skip the header)
	for (let i = 1; i < lines.length; i++) {
		const cells = lines[i].split(',');

		// Extract the system, type, and name
		const system = cells[0]?.trim() || lastSystem;
		const type = cells[1]?.trim() || lastType;
		const name = cells[2]?.trim() || lastName;
		const rigs = cells[3]?.trim() ? cells[3].split('\n').map(rig => rig.trim()) : [];
		const services = cells[4]?.trim() ? cells[4].split('\n').map(service => service.trim()) : [];

		// Update lastSystem, lastType, and lastName if the current row has valid data
		if (cells[0]?.trim()) lastSystem = system;
		if (cells[1]?.trim()) lastType = type;
		if (cells[2]?.trim()) lastName = name;

		if (!jsonResult[lastSystem]) {
			jsonResult[lastSystem] = [];
		}

		// Check if we already have an entry with the same type and name
		const existingStructure = jsonResult[lastSystem].find(item => item.type === lastType && item.name === lastName);

		if (existingStructure) {
			// If it exists, add the new rigs/services to the respective array
			if (rigs.length) existingStructure.rigs.push(...rigs);
			if (services.length) existingStructure.services.push(...services);
		} else {
			// If not, create a new entry
			jsonResult[lastSystem].push({
				type: lastType,
				name: lastName,
				rigs: rigs,
				services: services
			});
		}
	}

	return jsonResult;
}

function mapStationsToPanels(systems) {
	// Iterate over each system
	Object.entries(systems).forEach(([system, stations]) => {
		// Iterate over each station in the system
		stations.forEach(station => {
			const { name, rigs, services, type } = station;
			const priority = 0;

			// Skip if no rigs are found (unrigged station)
			if (!rigs || rigs.length === 0) return;

			// Determine the ME and TE rig levels from the rigs
			const meRigged = rigs.some(rig => rig.includes('Material Efficiency'))
				? rigs.some(rig => rig.endsWith("I")) ? 'T1' : 'T2'
				: null;

			const teRigged = rigs.some(rig => rig.includes('Time Efficiency'))
				? rigs.some(rig => rig.endsWith("I")) ? 'T1' : 'T2'
				: null;

			// Determine the rig size based on the station's type from upwellStructures
			const rigSize = upwellStructures.citadels[type]?.rigSize
				|| upwellStructures.refineries[type]?.rigSize
				|| upwellStructures.engineeringComplexes[type]?.rigSize;

			if (!rigSize) return; // Skip if no matching rig size is found

			// Iterate through each rig to categorize
			rigs.forEach(rig => {
				// Check for each rig category based on the structureRigs object
				// Manufacturing Category
				if (structureRigs.manufacturing.ship[rigSize] && structureRigs.manufacturing.ship[rigSize].includes(rig)) {
					panels["Ship Manufacturing"]["All Subcapitals"].push({
						system,
						name,
						rigSize,
						meRigged,
						teRigged,
						priority,
						services
					});
				} else if (structureRigs.manufacturing.component[rigSize] && structureRigs.manufacturing.component[rigSize].includes(rig)) {
					panels["Components"]["T1 Capital Components"].push({
						system,
						name,
						rigSize,
						meRigged,
						teRigged,
						priority,
						services
					});
				} else if (structureRigs.manufacturing.drone[rigSize] && structureRigs.manufacturing.drone[rigSize].includes(rig)) {
					panels["Specialist Manufacturing"]["T1/T2 Drones & Fighters"].push({
						system,
						name,
						rigSize,
						meRigged,
						teRigged,
						priority,
						services
					});
				} else if (structureRigs.manufacturing.modulesRigs[rigSize] && structureRigs.manufacturing.modulesRigs[rigSize].includes(rig)) {
					panels["Specialist Manufacturing"]["T1/T2 Modules & Rigs"].push({
						system,
						name,
						rigSize,
						meRigged,
						teRigged,
						priority,
						services
					});
				} else if (structureRigs.manufacturing.structure[rigSize] && structureRigs.manufacturing.structure[rigSize].includes(rig)) {
					panels["Specialist Manufacturing"]["Structures"].push({
						system,
						name,
						rigSize,
						meRigged,
						teRigged,
						priority,
						services
					});
				} else if (structureRigs.manufacturing.charge[rigSize] && structureRigs.manufacturing.charge[rigSize].includes(rig)) {
					panels["Specialist Manufacturing"]["Ammo"].push({
						system,
						name,
						rigSize,
						meRigged,
						teRigged,
						priority,
						services
					});
				}

				// Science Category
				else if (structureRigs.science.invention[rigSize] && structureRigs.science.invention[rigSize].includes(rig)) {
					panels["Science"]["T2 Invention"].push({
						system,
						name,
						rigSize,
						meRigged,
						teRigged,
						priority,
						services
					});
				} else if (structureRigs.science.research[rigSize] && structureRigs.science.research[rigSize].includes(rig)) {
					if (meRigged) {
						panels["Science"]["Researching ME"].push({
							system,
							name,
							rigSize,
							meRigged,
							teRigged,
							priority,
							services
						});
					}
					if (teRigged) {
						panels["Science"]["Researching TE"].push({
							system,
							name,
							rigSize,
							meRigged,
							teRigged,
							priority,
							services
						});
					}
				} else if (structureRigs.science.copying[rigSize] && structureRigs.science.copying[rigSize].includes(rig)) {
					panels["Science"]["BPC Copying"].push({
						system,
						name,
						rigSize,
						meRigged,
						teRigged,
						priority,
						services
					});
				}

				// Reaction Category
				else if (structureRigs.reaction.all.includes(rig)) {
					panels["Reactions"]["All Reactions"].push({
						system,
						name,
						rigSize,
						meRigged,
						teRigged,
						priority,
						services
					});
				}

				// Reprocessing Category
				else if (structureRigs.reprocessing.l.includes(rig)) {
					panels["Reprocessing"]["Asteroid Reprocessing"].push({
						system,
						name,
						rigSize,
						meRigged,
						teRigged,
						priority,
						services
					});
				}
			});
		});
	});
}

function runConversion() {
	const jsonResult = convertToJSON();
	mapStationsToPanels( jsonResult )
	document.getElementById('jsonOutput').textContent = JSON.stringify(panels, null, 4);
}

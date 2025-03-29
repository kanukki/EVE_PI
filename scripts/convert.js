const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

// Define file paths
const inputFile = path.join(__dirname, "input.csv");
const outputFile = path.join(__dirname, "schematics.json");

// Store data temporarily
let schematics = {};
let inputRows = [];

// First Pass: Identify Outputs (isInput=0)
fs.createReadStream(inputFile)
	.pipe(csv())
	.on("data", (row) => {
		let schematicID = Number(row.schematicID);
		let typeID = Number(row.typeID);
		let quantity = Number(row.quantity);
		let isInput = Number(row.isInput);
		let name = row.name;

		if (isInput === 0) {
			// Initialize schematic entry with output details
			schematics[schematicID] = {
				schematicID: schematicID,
				typeID: typeID,
				name: name,
				inputQty: 0,
				outputQty: quantity,
				requires: [],
			};
		} else {
			// Store input rows for second pass
			inputRows.push({ schematicID, typeID, quantity });
		}
	})
	.on("end", () => {
		// Second Pass: Assign Inputs (isInput=1) to their corresponding outputs
		inputRows.forEach(({ schematicID, typeID, quantity }) => {
			if (schematics[schematicID]) {
				if (schematics[schematicID].inputQty === 0) {
					schematics[schematicID].inputQty = quantity;
				}
				schematics[schematicID].requires.push(typeID);
			}
		});

		// Convert to array and save JSON
		let result = Object.values(schematics);
		fs.writeFileSync(outputFile, JSON.stringify(result, null, 4));

		console.log(`✅ JSON file created: ${outputFile}`);
	});

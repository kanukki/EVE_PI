/*
This file is to be ran as a node script, it creates a 7 row 3 column layout of all P1 items into P2.
 */
const tiers = require( '../public/json/evePi/tiers.json' );
const planetRecipes = require( '../public/json/evePi/planetRecipes.json');
const fs = require('fs');
const path = require('path');

const baseFile = fs.readFileSync( 'public/json/evePi/p1-2-base.json' );
let output = baseFile.toString();

let group = 1;
const titlePrefix = "P1-2.";
let productTitle = [];
tiers.P2.forEach( ( product ) => {
	if ( group === 4 ) {
		const filename = titlePrefix + productTitle.join(',') + '.json';

		// write the file and output it.
		fs.writeFileSync(
			filename.replaceAll(' ', '-' ).replaceAll(',', '.' ),
			output
		);
		productTitle = [];
		group = 1;
		output = baseFile.toString();
	}

	productTitle.push( product );
	const schematic = planetRecipes.find( recipe => recipe.name === product );

	if ( ! schematic?.name ) {
		group++;
		return;
	}

	output = output.replace( new RegExp( `PRODUCT_${group}_NAME`, 'g' ), schematic.name );
	output = output.replace( new RegExp( `"PRODUCT_${group}"`, 'g' ), schematic.typeID );

	let groupInput = 1;
	schematic.requireTypeID.forEach( sInputType => {
		output = output.replace( new RegExp( `"PRODUCT_${group}_INPUT_${groupInput}"`, 'g' ), sInputType );
		groupInput++;
	} );

	group++;
} )

const fn = titlePrefix + productTitle.join(',') + '.json';
// write the file and output it.
fs.writeFileSync(
	fn.replaceAll(' ', '-' ).replaceAll(',', '.' ),
	output
);
productTitle = [];
group = 1;
output = baseFile.toString();

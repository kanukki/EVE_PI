/*
This file is to be ran as a node script, it creates a 7 row 3 column layout of all P1 items into P2.
 */
const tiers = require( '../public/json/evePi/tiers.json' );
const planetRecipes = require( '../public/json/evePi/planetRecipes.json');
const fs = require('fs');
const path = require('path');

const baseFile = fs.readFileSync( 'public/json/evePi/p2-4-base.json' );
const titlePrefix = "P2-4.";
tiers.P4['3x'].forEach( ( product ) => {
	let output = baseFile.toString();
	const schematic = planetRecipes.find( recipe => recipe.name === product );

	if ( ! schematic?.name ) {
		return;
	}

	output = output.replace( new RegExp( `P4_PRODUCT_NAME`, 'g' ), schematic.name );
	output = output.replace( new RegExp( `P4_PRODUCT`, 'g' ), schematic.typeID );

	let groupInput = 1;
	schematic.requireTypeID.forEach( sInputType => {
		output = output.replace( new RegExp( `P4_INPUT_${groupInput}(?![a-zA-Z0-9_])`, 'g' ), sInputType );

		const sinputChild = planetRecipes.find( recipe => recipe.typeID === sInputType );
		if ( ! sinputChild ) {
			console.log( sinputChild, sInputType );
			return;
		}

		let sinputNum = 1;
		sinputChild.requireTypeID.forEach( x => {
			output = output.replace( new RegExp( `P4_INPUT_${groupInput}_INPUT_${sinputNum}`, 'g' ), x );
			sinputNum++;
		} );
		groupInput++;
	} );

	// write the file and output it.
	const fn = titlePrefix + product + '.json';
	fs.writeFileSync(
		fn.replaceAll(' ', '-' ).replaceAll(',', '.' ),
		output
	);
} )


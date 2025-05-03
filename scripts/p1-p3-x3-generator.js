/*
This file is to be ran as a node script, it creates a 7 row 3 column layout of all P1 items into P2.
 */
const tiers = require( '../public/json/evePi/tiers.json' );
const planetRecipes = require( '../public/json/evePi/planetRecipes.json');
const fs = require('fs');
const path = require('path');

const baseFile = fs.readFileSync( 'public/json/evePi/p1-p3-x3-ccu5-base.json' );
const titlePrefix = "P1-3.";

// A list of items to replace.
const replacements = {
	p3Name: "Gel-Matrix Biopaste",
	p3product: "2348",
	p2product1: "2317",
	p2product2: "2329",
	p2product3: "9838",
	p2product1input1: "2392",
	p2product1input2: "3683",
	p2product2input1: "2396",
	p2product2input2: "2399",
	p2product3input1: "2389",
	p2product3input2: "3645"
};

let content = baseFile.toString();
for ( const [k,v] of Object.entries( replacements ) ) {
	content = content.replace( new RegExp( v, 'g' ), k );
}

tiers.P3.forEach( ( product ) => {
	let output = content;
	const schematic = planetRecipes.find( recipe => recipe.name === product );

	if ( ! schematic?.name || schematic.requireTypeID.length !== 3 ) {
		return;
	}

	output = output.replace( new RegExp( 'p3Name', 'g' ), schematic.name );
	output = output.replace( new RegExp( 'p3product', 'g' ), schematic.typeID );

	let p = 1;
	schematic.requireTypeID.forEach( ( p2 ) => {
		let i=1;
		const p2Product = planetRecipes.find( r => r.typeID === p2 );
		output = output.replace( new RegExp( new RegExp( `p2product${p}(?![a-zA-Z0-9_])` ), 'g' ), p2Product.typeID );

		p2Product.requireTypeID.forEach( p1 => {
			const p1Product = planetRecipes.find( r => r.typeID === p1 );
			output = output.replace( new RegExp( `p2product${p}input${i}`, 'g' ), p1Product.typeID );
			i++;
		} )
		p++;
	} )

	const fn = titlePrefix + product + '.json';
	fs.writeFileSync(
		fn.replaceAll(' ', '-' ).replaceAll(',', '.' ),
		output
	);
} )


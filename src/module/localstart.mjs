export async function  localstart(data,meta,aufgabeFunc){
	if (data === `file://${process.argv[1]}`) {
		const input = {};
		meta.felder.slice(0, meta.felder.length).reduce((acc, feld) => {
			acc = `${feld.value}${feld.unit}`;
			input[feld.name] = acc;
		}, {})
		const res = await aufgabeFunc(input)
		//console.debug(res)
		console.log(res)
	}
}
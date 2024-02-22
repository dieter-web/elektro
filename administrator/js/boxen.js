const boxen = require("boxen");

console.log(boxen('unicorn',{padding: 1}));
console.log(boxen("unicorn", { padding: 1, margin: 1, borderStyle: "double" }));
console.log(boxen("unicorn love rainbows", {title: 'magical', titleAlignment:'center'}));

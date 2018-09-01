const defaultColors = ['red','yellow'];
const userfav = ['orange','pink'];

// we want to combine both

// concat
console.log("using concat: ",defaultColors.concat(userfav));

// using spread operator
console.log("using spread operator",[ ...defaultColors, ...userfav ]);

// so far it is no point using concat - but what if i want more records - it is easier to use spread;
const randcolor = ['mellow','blue','silver'];
// we also add random color
console.log("using spread operator again",[ ...defaultColors, ...userfav, ...randcolor, 'gold' ]);
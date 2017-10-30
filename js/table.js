var magicElementsObject = {
};




console.log(magicElementsObject);
var elementName =["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon",
"Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium",
"Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon",
"Potassium","Calcium","Scandium","Titanium","Vanadium",
"Chromium","Manganese","Iron","Cobalt","Nickel","Copper",
"Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine",
"Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium",
"Molybdenum","Technetium","Ruthenium","Rhodium","Palladium",
"Silver","Cadmium","Indium","Tin","Antimony","Tellurium",
"Iodine","Xenon","Cesium","Barium","Lanthanum","Cerium",
"Praseodymium","Neodymium","Promethium","Samarium",
"Europium","Gadolinium","Terbium","Dysprosium",
"Holmium","Erbium","Thulium","Ytterbium","Lutetium",
"Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium",
"Platinum","Gold","Mercury","Thallium","Lead","Bismuth",
"Polonium","Astatine","Radon","Francium","Radium","Actinium",
"Thorium","Protactinium","Uranium","Neptunium","Plutonium",
"Americium","Curium","Berkelium","Californium","Einsteinium",
"Fermium","Mendelevium","Nobelium","Lawrencium","Rutherfordium",
"Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium"];

var elementSymbol = ["H","He","Li","Be","B","C","N","O","F","Ne","Na",
"Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V",
"Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se",
"Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd",
"Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce",
"Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb",
"Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi",
"Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm",
"Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt"];


for (var i = 0; i < elementName.length; i++) {
    var eleSymbol = elementSymbol[i];
    var eleName   = elementName[i];

    magicElementsObject[eleSymbol] = eleName;
}

console.log(elementSymbol.length)

// var magicElementsObject = {
// };
//
//
// console.log(magicElementsObject);
// var elementName =["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon",
// "Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium",
// "Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon",
// "Potassium","Calcium","Scandium","Titanium","Vanadium",
// "Chromium","Manganese","Iron","Cobalt","Nickel","Copper",
// "Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine",
// "Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium",
// "Molybdenum","Technetium","Ruthenium","Rhodium","Palladium",
// "Silver","Cadmium","Indium","Tin","Antimony","Tellurium",
// "Iodine","Xenon","Cesium","Barium","Lanthanum","Cerium",
// "Praseodymium","Neodymium","Promethium","Samarium",
// "Europium","Gadolinium","Terbium","Dysprosium",
// "Holmium","Erbium","Thulium","Ytterbium","Lutetium",
// "Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium",
// "Platinum","Gold","Mercury","Thallium","Lead","Bismuth",
// "Polonium","Astatine","Radon","Francium","Radium","Actinium",
// "Thorium","Protactinium","Uranium","Neptunium","Plutonium",
// "Americium","Curium","Berkelium","Californium","Einsteinium",
// "Fermium","Mendelevium","Nobelium","Lawrencium","Rutherfordium",
// "Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium"];
//
// var elementSymbol = ["H","He","Li","Be","B","C","N","O","F","Ne","Na",
// "Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V",
// "Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se",
// "Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd",
// "Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce",
// "Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb",
// "Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi",
// "Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm",
// "Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt"];
//
//
// for (var i = 0; i < elementName.length; i++) {
//     var eleSymbol = elementSymbol[i];
//     var eleName   = elementName[i];
//
//     magicElementsObject[eleSymbol] = eleName;
// }


var elementAtomic = {
  H: {
    name: 'Hydrogen',
    an: "1"
  },
  He: {
    name: 'Helium',
    an: "2"
  },
  Li: {
    name:'Lithium',
    an: "3"
  },
  Be: {
    name: 'Beryllium',
    an: "4"
   },
  B: {
    name: 'Boron',
    an: "5"
   },
  C: {
    name: 'Carbon',
    an: "6"
   },
  N: {
    name: 'Nitrogen',
    an: "7"
   },
  O: {
    name: 'Oxygen',
    an: "8"
   },
  F: {
    name: 'Flourine',
    an: "9"
   },
  Ne: {
    name: 'Neon',
    an: "1"
  },
  Na: {
    name: 'Sodium',
    an: "1"
  },
  Mg: {
    name: 'Magnesium',
    an: "1"
  },
  Al: {
    name: 'Aluminum',
    an: "1"
  },
  Si: {
    name: 'Silicon',
    an: "1"
  },
  P: {
    name: 'Phosphorus',
    an: "1"
  },
  S: {
    name: 'Sulfur',
    an: "1"
  },
  Cl: {
    name: 'Chlorine',
    an: "1"
  },
  Ar: {
    name: 'Argon',
    an: "1"
  },
  K: {
    name: 'Potassium',
    an: "1"
  },
  Ca: {
    name: 'Calcium',
    an: "2"
  },
  Sc: {
    name: 'Scandium',
    an: "2"
  },
  Ti: {
    name: 'Titanium',
    an: "2"
  },
  V: {
    name: 'Vanadium',
    an: "2"
  },
  Cr: {
    name: 'Chromium',
    an: "2"
  },
  Mn: {
    name: 'Manganese',
    an: "2"
  },
  Fe: {
    name: 'Iron',
    an: "2"
  },
  Co: {
    name: 'Cobalt',
    an: "2"
  },
  Ni: {
    name: 'Nickel',
    an: "2"
  },
  Cu: {
    name: 'Copper',
    an: "2"
  },
  Zn: {
    name: 'Zinc',
    an: "3"
  },
  Ga: {
    name: 'Gallium',
    an: "3"
  },
  Ge: {
    name: 'Germanium',
    an: "3"
  },
  As: {
    name: 'Arsenic',
    an: "3"
  },
  Se: {
    name: 'Selenium',
    an: "3"
  },

  Br: {
    name: 'Bromine',
    an: "3"
  },
  Kr: {
    name: 'Krypton',
    an: "3"
  },
  Rb: {
    name: 'Rubidium',
    an: "3"
  },
  Sr: {
    name: 'Strontium',
    an: "3"
  },
  Y: {
    name: 'Yttrium',
    an: "3"
  },
  Zr: {
    name: 'Zirconium',
    an: "4"
  },
  Nb: {
    name: 'Niobium',
    an: "4"
  },
  Mo: {
    name: 'Molybdenum',
    an: "4"
  },
  Tc: {
    name: 'Technetium',
    an: "4"
  },
  Ru: {
    name: 'Ruthenium',
    an: "4"
  },
  Rh: {
    name: 'Rhodium',
    an: "4"
  },
  Pd: {
    name: 'Palladium',
    an: "4"
  },
  Ag: {
    name: 'Silver',
    an: "4"
  },
  Cd: {
    name: 'Cadmium',
    an: "4"
  },
  In: {
    name: 'Indium',
    an: "4"
  },
  Sn: {
    name: 'Tin',
    an: "5"
  },
  Sb: {
    name: 'Antimony',
    an: "5"
  },
  Te: {
    name: 'Tellurium',
    an: "5"
  },
  I: {
    name: 'Iodine',
    an: "5"
  },
  Xe: {
    name: 'Xenon',
    an: "5"
  },
  Cs: {
    name: 'Cesium',
    an: "5"
  },
  Ba: {
    name: 'Barium',
    an: "5"
  },
  La: {
    name: 'Lanthanum',
    an: "5"
  },
  Ce: {
    name: 'Cerium',
    an: "5"
  },
  Pr: {
    name: 'Praseodymium',
    an: "5"
  },
  Nd: {
    name: 'Neodymium',
    an: "6"
  },
  Pm: {
    name: 'Promethium',
    an: "6"
  },
  Sm: {
    name: 'Samarium',
    an: "6"
  },
  Eu: {
    name: 'Europium',
    an: "6"
  },
  Gd: {
    name: 'Gadolinium',
    an: "6"
  },
  Tb: {
    name: 'Terbium',
    an: "6"
  },
  Dy: {
    name: 'Dysprosium',
    an: "6"
  },
  Ho: {
    name: 'Holmium',
    an: "6"
  },
  Er: {
    name: 'Erbium',
    an: "6"
  },
  Tm: {
    name: 'Thulium',
    an: "6"
  },
  Yb: {
    name: 'Ytterbium',
    an: "7"
  },
  Lu: {
    name: 'Lutetium',
    an: "7"
  },
  Hf: {
    name: 'Hafnium',
    an: "7"
  },
  Ta: {
    name: 'Tantalum',
    an: "7"
  },
  W: {
    name: 'Tungsten',
    an: "7"
  },
  Re: {
    name: 'Rhenium',
    an: "7"
  },
  Os: {
    name: 'Osmium',
    an: "7"
  },
  Ir: {
    name: 'Iridium',
    an: "7"
  },
  Pt: {
    name: 'Platinum',
    an: "7"
  },
  Au: {
    name: 'Gold',
    an: "7"
  },
  Hg: {
    name: 'Mercury',
    an: "8"
  },
  Tl: {
    name: 'Thallium',
    an: "8"
  },
  Pb: {
    name: 'Lead',
    an: "8"
  },
  Bi: {
    name: 'Bismuth',
    an: "8"
  },
  Po: {
    name: 'Polonium',
    an: "8"
  },
  At: {
    name: 'Astatine',
    an: "8"
  },
  Rn: {
    name: 'Radon',
    an: "8"
  },
  Fr: {
    name: 'Francium',
    an: "8"
  },
  Ra: {
    name: 'Radium',
    an: "8"
  },
  Ac: {
    name: 'Actinium',
    an: "8"
  },
  Th: {
    name: 'Thorium',
    an: "9"
  },
  Pa: {
    name: 'Protactinium',
    an: "9"
  },
  U: {
    name: 'Uranium',
    an: "9"
  },
  Np: {
    name: 'Neptunium',
    an: "9"
  },
  Pu: {
    name: 'Plutonium',
    an: "9"
  },
  Am: {
    name: 'Americium',
    an: "9"
  },
  Cm: {
    name: 'Curium',
    an: "9"
  },
  Bk: {
    name: 'Berkelium',
    an: "9"
  },
  Cf: {
    name: 'Californium',
    an: "9"
  },
  Es: {
    name: 'Einsteinium',
    an: "9"
  },
  Fm: {
    name: 'Fermium',
    an: "100"
  },
  Md: {
    name: 'Mendelevium',
    an: "101"
  },
  No: {
    name: 'Nobelium',
    an: "102"
  },
  Lr: {
    name: 'Lawrencium',
    an: "103"
  },
  Rf: {
    name: 'Rutherfordium',
    an: "104"
  },
  Db: {
    name: 'Dubnium',
    an: "105"
  },
  Sg: {
    name: 'Seaborgium',
    an: "106"
  },
  Bh: {
    name: 'Bohrium',
    an: "107"
  },
  Hs: {
    name: 'Hassium',
    an: "108"
  },
  Mt: {
    name: 'Meitnerium',
    an: "109"
  },
  Ds: {
    name: 'Darmstadtium',
    an: "110"
  },
  Rg: {
    name: 'Roentgenium',
    an: "111"
  },
  Cn: {
    name: 'Copernicium',
    an: "112"
  },
  Nh: {
    name: 'Nihonium',
    an: "113"
  },
  Fl: {
    name: 'Flerovium',
    an: "114"
  },
  Mc: {
    name: 'Moscovium',
    an: "115"
  },
  Lv: {
    name: 'Livermorium',
    an: "116"
  },
  Ts: {
    name: 'Tennessine',
    an: "117"
  },
  Og: {
    name: 'Oganesson',
    an: "118"
  }
};

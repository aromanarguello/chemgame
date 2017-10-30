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
    an: 1
  },
  He: {
    name: 'Helium',
    an: 2
  },
  Li: {
    name:'Lithium',
    an: 3
  },
  Be: {
    name: 'Beryllium',
    an: 4
  },
  B: {
    name: 'Boron',
    an: 5
  },
  C: {
    name: 'Carbon',
    an: 6
  },
  N: {
    name: 'Nitrogen',
    an: 7
  },
  O: {
    name: 'Oxygen',
    an: 8
  },
  F: {
    name: 'Flourine',
    an: 9
  },
  Ne: {
    name: 'Neon',
    an: 10
  },
  Na: {
    name: 'Sodium',
    an: 11
  },
  Mg: {
    name: 'Magnesium',
    an: 12
  },
  Al: {
    name: 'Aluminum',
    an: 13
  },
  Si: {
    name: 'Silicon',
    an: 14
  },
  P: {
    name: 'Phosphorus',
    an: 15
  },
  S: {
    name: 'Sulfur',
    an: 16
  },
  Cl: {
    name: 'Chlorine',
    an: 17
  },
  Ar: {
    name: 'Argon',
    an: 18
  },
  K: {
    name: 'Potassium',
    an: 19
  },
  Ca: {
    name: 'Calcium',
    an: 20
  },
  Sc: {
    name: 'Scandium',
    an: 21
  },
  Ti: {
    name: 'Titanium',
    an: 22
  },
  V: {
    name: 'Vanadium',
    an: 23
  },
  Cr: {
    name: 'Chromium',
    an: 24
  },
  Mn: {
    name: 'Manganese',
    an: 25
  },
  Fe: {
    name: 'Iron',
    an: 26
  },
  Co: {
    name: 'Cobalt',
    an: 27
  },
  Ni: {
    name: 'Nickel',
    an: 28
  },
  Cu: {
    name: 'Copper',
    an: 29
  },
  Zn: {
    name: 'Zinc',
    an: 30
  },
  Ga: {
    name: 'Gallium',
    an: 31
  },
  Ge: {
    name: 'Germanium',
    an: 32
  },
  As: {
    name: 'Arsenic',
    an: 33
  },
  Se: {
    name: 'Selenium',
    an: 34
  },

  Br: {
    name: 'Bromine',
    an: 35
  },
  Kr: {
    name: 'Krypton',
    an: 36
  },
  Rb: {
    name: 'Rubidium',
    an: 37
  },
  Sr: {
    name: 'Strontium',
    an: 38
  },
  Y: {
    name: 'Yttrium',
    an: 39
  },
  Zr: {
    name: 'Zirconium',
    an: 40
  },
  Nb: {
    name: 'Niobium',
    an: 41
  },
  Mo: {
    name: 'Molybdenum',
    an: 42
  },
  Tc: {
    name: 'Technetium',
    an: 43
  },
  Ru: {
    name: 'Ruthenium',
    an: 44
  },
  Rh: {
    name: 'Rhodium',
    an: 45
  },
  Pd: {
    name: 'Palladium',
    an: 46
  },
  Ag: {
    name: 'Silver',
    an: 47
  },
  Cd: {
    name: 'Cadmium',
    an: 48
  },
  In: {
    name: 'Indium',
    an: 49
  },
  Sn: {
    name: 'Tin',
    an: 50
  },
  Sb: {
    name: 'Antimony',
    an: 51
  },
  Te: {
    name: 'Tellurium',
    an: 52
  },
  I: {
    name: 'Iodine',
    an: 53
  },
  Xe: {
    name: 'Xenon',
    an: 54
  },
  Cs: {
    name: 'Cesium',
    an: 55
  },
  Ba: {
    name: 'Barium',
    an: 56
  },
  La: {
    name: 'Lanthanum',
    an: 57
  },
  Ce: {
    name: 'Cerium',
    an: 58
  },
  Pr: {
    name: 'Praseodymium',
    an: 59
  },
  Nd: {
    name: 'Neodymium',
    an: 60
  },
  Pm: {
    name: 'Promethium',
    an: 61
  },
  Sm: {
    name: 'Samarium',
    an: 62
  },
  Eu: {
    name: 'Europium',
    an: 63
  },
  Gd: {
    name: 'Gadolinium',
    an: 64
  },
  Tb: {
    name: 'Terbium',
    an: 65
  },
  Dy: {
    name: 'Dysprosium',
    an: 66
  },
  Ho: {
    name: 'Holmium',
    an: 67
  },
  Er: {
    name: 'Erbium',
    an: 68
  },
  Tm: {
    name: 'Thulium',
    an: 69
  },
  Yb: {
    name: 'Ytterbium',
    an: 70
  },
  Lu: {
    name: 'Lutetium',
    an: 71
  },
  Hf: {
    name: 'Hafnium',
    an: 72
  },
  Ta: {
    name: 'Tantalum',
    an: 73
  },
  W: {
    name: 'Tungsten',
    an: 74
  },
  Re: {
    name: 'Rhenium',
    an: 75
  },
  Os: {
    name: 'Osmium',
    an: 76
  },
  Ir: {
    name: 'Iridium',
    an: 77
  },
  Pt: {
    name: 'Platinum',
    an: 78
  },
  Au: {
    name: 'Gold',
    an: 79
  },
  Hg: {
    name: 'Mercury',
    an: 80
  },
  Tl: {
    name: 'Thallium',
    an: 81
  },
  Pb: {
    name: 'Lead',
    an: 82
  },
  Bi: {
    name: 'Bismuth',
    an: 83
  },
  Po: {
    name: 'Polonium',
    an: 84
  },
  At: {
    name: 'Astatine',
    an: 85
  },
  Rn: {
    name: 'Radon',
    an: 86
  },
  Fr: {
    name: 'Francium',
    an: 87
  },
  Ra: {
    name: 'Radium',
    an: 88
  },
  Ac: {
    name: 'Actinium',
    an: 89
  },
  Th: {
    name: 'Thorium',
    an: 90
  },
  Pa: {
    name: 'Protactinium',
    an: 91
  },
  U: {
    name: 'Uranium',
    an: 92
  },
  Np: {
    name: 'Neptunium',
    an: 93
  },
  Pu: {
    name: 'Plutonium',
    an: 94
  },
  Am: {
    name: 'Americium',
    an: 95
  },
  Cm: {
    name: 'Curium',
    an: 96
  },
  Bk: {
    name: 'Berkelium',
    an: 97
  },
  Cf: {
    name: 'Californium',
    an: 98
  },
  Es: {
    name: 'Einsteinium',
    an: 99
  },
  Fm: {
    name: 'Fermium',
    an: 100
  },
  Md: {
    name: 'Mendelevium',
    an: 101
  },
  No: {
    name: 'Nobelium',
    an: 102
  },
  Lr: {
    name: 'Lawrencium',
    an: 103
  },
  Rf: {
    name: 'Rutherfordium',
    an: 104
  },
  Db: {
    name: 'Dubnium',
    an: 105
  },
  Sg: {
    name: 'Seaborgium',
    an: 106
  },
  Bh: {
    name: 'Bohrium',
    an: 107
  },
  Hs: {
    name: 'Hassium',
    an: 108
  },
  Mt: {
    name: 'Meitnerium',
    an: 109
  },
  Ds: {
    name: 'Darmstadtium',
    an: 110
  },
  Rg: {
    name: 'Roentgenium',
    an: 111
  },
  Uub: {
    name: 'Ununbium',
    an: 112
  },
  Uut: {
    name: 'Ununtrium',
    an: 113
  },
  Uuq: {
    name: 'Ununquadium',
    an: 114
  },
  Uup: {
    name: 'Ununpentium',
    an: 115
  },
  Uuh: {
    name: 'Ununhexium',
    an: 116
  },
  Uus: {
    name: 'Ununseptium',
    an: 117
  },
  Uuo: {
    name: 'Ununoctium',
    an: 118
  }




};

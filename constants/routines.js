const LIMPEZA_FACIAL = {title: "LIMPEZA FACIAL", description: "LIMPA E SUAVIZA COM HIDRATAÇÃO INTENSA."}

const TONICO = {title: "TÔNICO", description: "LIMPA PROFUNDAMENTE E REMOVE O EXCESSO DE OLEOSIDADE SEM AGREDIR."}

const HIDRATACAO = {title: "HIDRATAÇÃO PROFUNDA", description: "DEIXA A PELE MACIA E AGE CONTRA AGRESSORES EXTERNOS."}

const PROTETOR = {title:"PROTETOR SOLAR", description: "HIDRATA, REFRESCA E PROTEGE SUA PELE."}

const ANTI_IDADE = {title: "TRATAMENTO", description:"PROTEGE E REJUVENESCE SUA PELE, NUTRINDO E HIDRATANDO-A."}

const ROUTINES_TITLES = {
  limpeza: {...LIMPEZA_FACIAL}, 
  tonico: {...TONICO}, 
  hidratacao: {...HIDRATACAO}, 
  protetor: {...PROTETOR},
  antiidade: {...ANTI_IDADE}
}

const ROUTINES_DATA = {
  combination: { 
    daytime: 
    {
      limpeza: {link: 'cerave', src:"./images/products/cerave.webp"},
      tonico: {link: 'vichyNormaderm',src:"./images/products/tonico-vichy-normaderm.webp"},
      hidratacao: {link: 'vichyMineral', src:"./images/products/vichy-mineral.webp"},
      protetor: {link: 'bioreAqua', src:"./images/products/biore-aqua-rich.webp"}
    },
    night: {
      limpeza: {link: 'cerave', src:"./images/products/cerave.webp"},
      tonico: {link: 'vichyNormaderm', src:"./images/products/tonico-vichy-normaderm.webp"},
      hidratacao: {link: 'vichyMineral', src:"./images/products/vichy-mineral.webp"},
      protetor: {link: 'clarinsDouble', src:"./images/products/clarins-paris.webp"}
    },
    qrCode: './images/loucas-por-beleza/pele-mista.png'
  },
  dry: {
    daytime: {
      limpeza: {link: 'darrowNutriol', src:"./images/products/darrow-nutriol.webp"	},
      tonico: {link: 'clarinsSoothing', src:"./images/products/clarins-soothing-tonico.webp"	},
      hidratacao: {link: 'biodermaAtoderm', src:"./images/products/bioderma-atoderm-intensive-baume.webp"	},
      protetor: {link: 'skinAquaSuperMoisture', src:"./images/products/skin-aqua-uv-super-moisture.webp"	}
    },
    night: {
      limpeza: {link: 'darrowNutriol', src:"./images/products/darrow-nutriol.webp"},
      tonico: {link: 'clarinsSoothing', src:"./images/products/clarins-soothing-tonico.webp"},
      hidratacao: {link: 'biodermaAtoderm', src:"./images/products/bioderma-atoderm-intensive-baume.webp"},
      protetor: {link: 'skinceuticalsFerulic', src:"./images/products/skinceuticals-ferulic.webp"}
    },
    qrCode: './images/loucas-por-beleza/pele-seca.png'
  },
  oily: {
    daytime: {
      limpeza: {link: 'darrowActine', src:"./images/products/darrow-actine.webp" },
      tonico: {link: 'skinceuticalsBlemish', src:"./images/products/skinceuticals-tonico-blemish-age.webp" },
      hidratacao: {link: 'laRocheposay', src:"./images/products/la-roche-posay-effaclar-mat-hidratante.webp" },
      protetor: {link: 'neostrataMinesol', src:"./images/products/neostrata-minesol-oil-control.webp" }
    },
    night: {
      limpeza: {link: 'darrowActine', src:"./images/products/darrow-actine.webp" },
      tonico: {link: 'skinceuticalsBlemish', src:"./images/products/skinceuticals-tonico-blemish-age.webp" },
      hidratacao: {link: 'laRocheposay', src:"./images/products/la-roche-posay-effaclar-mat-hidratante.webp" },
      protetor: {link: 'esthedermIntensive', src:"./images/products/esthederm-intensive-propolis.webp"},
    },
    qrCode: './images/loucas-por-beleza/pele-oleosa.png'
  },
  normal: {
    daytime: {
      limpeza: {link: 'vichyPurete', src:"./images/products/vichy-purete-thermale-espuma.webp"},
      tonico: {link: 'dermageGlycolique', src:"./images/products/dermage-glycolique-daily.webp"},
      hidratacao: {link: 'hadaLabo', src:"./images/products/hada-labo-gokujyun.webp"},
      protetor: {link: 'isdinFotoprotector', src:"./images/products/ISDIN-Fotoprotector-Fusion.webp"},
    },
    night: {
      limpeza: {link: 'vichyPurete', src:"./images/products/vichy-purete-thermale-espuma.webp"},
      tonico: {link: 'dermageGlycolique', src:"./images/products/dermage-glycolique-daily.webp"},
      hidratacao: {link: 'vichyMineral', src:"./images/products/vichy-mineral.webp"},
      protetor: {link: 'cliniqueSmart', src:"./images/products/clinique-smart-night.webp"},
    },
    qrCode: './images/loucas-por-beleza/pele-equilibrada.png'
  }
}

const PRODUCT_DATA = {
  cerave: {
    image: './images/products/cerave.webp',
    qrcode: './images/qrcode/cerave-foaming-cleanser-gel-de-limpeza-facial.png',
    title: 'CeraVe Foaming Cleanser',
    description: 'CeraVe limpa profundamente, sem prejudicar a barreira protetora natural do rosto.',
    subdescription: 'Ajuda no tratamento de acne, desobstrui os poros e remove o excesso de oleosidade, sem agredir ou irritar a pele.'
  },
    vichyNormaderm: {  
    image: './images/products/tonico-vichy-normaderm.webp',
    qrcode: './images/qrcode/vichy-normaderm.png',
    title: 'Vichy Normaderm Adstringente',
    description: 'Vichy Normaderm Tônico Adstringente complementa a limpeza com sua ação purificante para pele mista, oleosa ou acneica.',
    subdescription: 'Remove o excesso de oleosidade do rosto sem ressecar. Proporcionando equilíbrio à pele oleosa, além de suavizá-la.'
  },
  vichyMineral: {
    image: './images/products/vichy-mineral.webp',
    qrcode: './images/qrcode/vichy-mineral.png',
    title: 'Vichy Minéral 89',
    description: 'Hidratante facial com 15 minerais para todos os tipos de pele. Vichy Minéral 89 aumenta a maciez e a resistência cutâneas, além de proteger contra os mais diversos agressores externos, como poluição, mudanças climáticas e tratamentos com ácidos.',
    subdescription: 'O rosto fica muito mais saudável e jovial, com a pele devidamente fortalecida e perfeitamente protegida contra os danos diários.'
  },
  bioreAqua: {
    image: './images/products/biore-aqua-rich.webp',
    qrcode: './images/qrcode/biore-aquat.png',
    title: 'Bioré Aqua',
    description: 'Protetor solar facial para todos os tipos de pele. Bioré Aqua Rich tem textura bem leve, oferecendo alta proteção UVA e UVB, sem deixar o rosto pegajoso após o uso.',
    subdescription: 'O Protetor Solar Bioré Aqua Rich Watery Essence FPS 50 possui textura macia e refrescante como água e traz a sensação de pele fresca e leve após o uso.'
  },
  clarinsDouble: {
    image: './images/products/clarins-paris.webp',
    qrcode: './images/qrcode/clarins-double.png',
    title: 'Clarins Double Serum',
    description: 'Protetor solar facial para todos os tipos de pele. Bioré Aqua Rich tem textura bem leve, oferecendo alta proteção UVA e UVB, sem deixar o rosto pegajoso após o usoSérum de tratamento anti-idade para todos os tipos de pele. O Clarins Double combate rugas, linhas de expressão, flacidez e outros sinais do envelhecimento. Age de maneira global, completa, para rejuvenescer.',
    subdescription: ''
  },
  darrowNutriol: {
    image: './images/products/darrow-nutriol.webp',
    qrcode: './images/qrcode/darrow-nutriol.png',
    title: 'Darrow Nutriol',
    description: 'Sabonete líquido para peles secas e ressecadas. Darrow Nutriol Sabonete Líquido limpa mantendo suavidade da pele com nutrição intensa.',
    subdescription: 'Possui ação antirressecamento que mantém a pele protegida durante a higienização. Podendo ser usado no corpo e rosto.'
  },
  clarinsSoothing: {
    image: './images/products/clarins-soothing-tonico.webp',
    qrcode: './images/qrcode/clarins-soothing.png',
    title: 'Clarins Soothing',
    description: 'Tônico facial calmante à base de plantas Clarings Soothing. Hidrata e tonifica peles muito secas ou sensíveis, deixando-a macia e suave.',
    subdescription: 'Clarings Soothing remove todos os vestígios de impurezas da pele enquanto respeita e protege o ecossistema da pele, sem deixá-la ressecada.'
  },
  biodermaAtoderm: {
    image: './images/products/bioderma-atoderm-intensive-baume.webp',
    qrcode: './images/qrcode/clarins-soothing.png',
    title: 'Bioderma Atoderm Intensive',
    description: 'Hidratante para peles muito secas ou irritadas. Alivia o repuxamento, as sensações de coceira e desconforto por fatores como idade, genética e meio ambiente.',
    subdescription: 'A textura bálsamo promove rápida absorção e ajuda a aumentar o intervalo entre as crises. Diminui o aspecto avermelhado, graças ao Zinco presente na fórmula.'
  },
  skinAquaSuperMoisture: {
    image: './images/products/skin-aqua-uv-super-moisture.webp',
    qrcode: './images/qrcode/skin-aqua.png',
    title: 'Skin Aqua Super Moisture',
    description: 'Protetor solar facial e corporal. Proporciona proteção e hidratação com textura leve e de rápida absorção.',
    subdescription: 'Protege a pele contra os raios UVA e UVB sem deixar o toque oleoso durante o dia.'
  },
  skinceuticalsFerulic: {
    image: './images/products/skinceuticals-ferulic.webp',
    qrcode: './images/qrcode/skinceuticals.png',
    title: 'SkinCeuticals C E Ferulic',
    description: 'Sérum anti-idade para peles normais a secas. Combate o envelhecimento com sua alta concentração de Vitamina C pura combinada com outros potentes antioxidantes.',
    subdescription: 'Ele conta com diversos benefícios: melhora a elasticidade, atenua até as rugas profundas, aumenta a firmeza e complementa a proteção de radiações UV e infravermelha.'
  },
  darrowActine: {
    image: './images/products/darrow-actine.webp',
    qrcode: './images/qrcode/darrow-actine.png',
    title: 'Darrow Actine',
    description: 'Gel de limpeza para pele oleosa e acneica. Actine Gel de Limpeza elimina a oleosidade com uniformidade e sem ressecar o rosto.',
    subdescription: 'Essa combinação de Darrow Actine age profundamente na limpeza da pele, reduz a oleosidade após o uso, combate acne e cravos e minimiza poros dilatados, além de reduzir visivelmente as marcas de acne.'
  },
  skinceuticalsBlemish: {
    image: './images/products/skinceuticals-tonico-blemish-age.webp',
    qrcode: './images/qrcode/skinceuticals-tonico.png',
    title: 'SkinCeuticals Blemish',
    description: 'Remove impurezas, controla a oleosidade, descongestiona os poros e uniformiza o tom de peles mistas e oleosas.',
    subdescription: 'O Tônico Facial SkinCeuticals Blemish + Age Solution complementa a limpeza diária do rosto e também promove a renovação da pele.'
  },
  laRocheposay: {
    image: './images/products/la-roche-posay-effaclar-mat-hidratante.webp',
    qrcode: './images/qrcode/la-rocheposay.png',
    title: 'La Roche-Posay Effaclar Mat',
    description: 'Hidratante facial para peles oleosas. Hidrata, controla a oleosidade e deixa um acabamento matte.',
    subdescription: 'O Hidratante La Roche-Posay Effaclar Mat Antioleosidade promove um tratamento diário que reduz os poros e matifica com suavidade.'
  },
  neostrataMinesol: {
    image: './images/products/neostrata-minesol-oil-control.webp',
    qrcode: './images/qrcode/neostrata-minesol.png',
    title: 'NeoStrata Minesol Oil Control',
    description: 'Protetor solar facial com textura gel-creme para pele oleosa. Neostrata Previne o envelhecimento precoce e protege dos efeitos nocivos do sol.',
    subdescription: 'Promove proteção solar UVA/UVB diária de longa duração, com controle e redução da oleosidade excessiva da pele graças à sua fórmula oil-free.'
  },
  esthedermIntensive: {
    image: './images/products/esthederm-intensive-propolis.webp',
    qrcode: './images/qrcode/esthederm-intensive.png',
    title: 'Esthederm Intensive Propolis',
    description: 'Esthederm Intensive Propolis + Salicylic Acid previne e combate os sinais da idade e promove ação rápida e efetiva em imperfeições da acne, comedões e poros dilatados. ',
    subdescription: 'Traz fórmula concentrada que reduz a oleosidade, purifica, suaviza e renova a textura da pele, além de uniformizar a tonalidade.'
  },
  vichyPurete: {
    image: './images/products/vichy-purete-thermale-espuma.webp',
    qrcode: './images/qrcode/vichy-purete.png',
    title: 'Vichy Pureté Thermale',
    description: 'Espuma de limpeza para peles normais, secas ou sensíveis. Apesar de suave, Vichy Pureté Thermale limpa profundamente.',
    subdescription: 'Não resseca nem irrita a pele. Sua fórmula leve, livre de álcool ou sabão tem propriedades calmantes e hidratantes.'
  },
  dermageGlycolique: {
    image: './images/products/dermage-glycolique-daily.webp',
    qrcode: './images/qrcode/dermage-glycolique.png',
    title: 'Dermage Glycolique',
    description: 'Dermage Glycolique Daily Peel auxilia na uniformização do tom da pele, luminosidade e redução dos poros.',
    subdescription: 'Com ação de peeling diário, promove a esfoliação química e acelera a renovação celular da pele.'
  },
  hadaLabo: {
    image: './images/products/hada-labo-gokujyun.webp',
    qrcode: './images/qrcode/hada-labo.png',
    title: 'Hada Labo Gokujyun',
    description: 'Com ação multifuncional, Hada Labo Gokujyun White Gel FPS 50 hidrata a pele, protege do sol e age como antioxidante.',
    subdescription: 'Possui 2 tipos de Ácido Hialurônico na fórmula para garantir hidratação profunda.'
  },
  isdinFotoprotector: {
    image: './images/products/ISDIN-Fotoprotector-Fusion.webp',
    qrcode: './images/qrcode/isdin-fotoprotector.png',
    title: 'ISDIN Fotoprotector Fusion',
    description: 'Protetor Solar ISDIN Fusion Water FPS 60 oferece alta proteção UVB/UVA ao rosto, controlando oleosidade da pele e toque seco.',
    subdescription: 'Tem textura leve, de rápida absorção, graças a sua fórmula livre de óleos.'
  },
  cliniqueSmart: {
    image: './images/products/clinique-smart-night.webp',
    qrcode: './images/qrcode/clinique-smart.png',
    title: 'Clinique Smart Night Clinical',
    description: 'Sérum anti-idade noturno para todos os tipos de pele. Acelera a renovação celular e suaviza rugas e linhas finas.',
    subdescription: 'Clinique Smart Night Clinical MD Retinol é um sérum noturno de reparação anti-idade, enriquecido com 0.3% de Retinol.'
  },
}
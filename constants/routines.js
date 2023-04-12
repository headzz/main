const LIMPEZA_FACIAL = {title: "LIMPEZA FACIAL", description: "LIMPA E SUAVIZA COM HIDRATAÇÃO INTENSA."}

const TONICO = {title: "TÔNICO", description: "LIMPA PROFUNDAMENTE E REMOVE O EXCESSO DE OLEOSIDADE SEM AGREDIR."}

const HIDRATACAO = {title: "HIDRATAÇÃO PROFUNDA", description: "DEIXA A PELE MACIA E AGE CONTRA AGRESSORES EXTERNOS."}

const PROTETOR = {title:"PROTETOR SOLAR", description: "HIDRATA, REFRESCA E PROTEGE SUA PELE."}

const ANTI_IDADE = {title: "TRATAMENTO", description:"PROTEGE E REJUVENESCE SUA PELE, NUTRINDO E HIDRATANDO-A."}

export const ROUTINES_TITLES = {
  limpeza: {...LIMPEZA_FACIAL}, 
  tonico: {...TONICO}, 
  hidratacao: {...HIDRATACAO}, 
  protetor: {...PROTETOR},
  antiidade: {...ANTI_IDADE}
}

export const ROUTINES_DATA = {
  combination: { 
    daytime: 
    {
      limpeza: {link: 'cerave', name: 'CeraVe Foaming Cleanser',src:"src/images/products/cerave.webp", description: 'LIMPA E SUAVIZA COM HIDRATAÇÃO INTENSA.', breakname: false},
      tonico: {link: 'vichyNormaderm',name: 'Vichy Normaderm Adstringente', src:"src/images/products/tonico-vichy-normaderm.webp", description: 'LIMPA PROFUNDAMENTE E REMOVE O EXCESSO DE OLEOSIDADE SEM AGREDIR.', breakname: false},
      hidratacao: {link: 'vichyMineral', name: 'Vichy Minéral 89', src:"src/images/products/vichy-mineral.webp", description: 'DEIXA A PELE MACIA E AGE CONTRA AGRESSORES EXTERNOS.', breakname: false},
      protetor: {link: 'bioreAqua', name: 'Bioré Aqua Rich Watery Essence FPS 50', src:"src/images/products/biore-aqua-rich.webp", description: 'HIDRATA, REFRESCA E PROTEGE A SUA PELE.', breakname: false},
    },
    night: {
      limpeza: {link: 'cerave', name: 'CeraVe Foaming Cleanser', src:"src/images/products/cerave.webp", description: 'LIMPA E SUAVIZA COM HIDRATAÇÃO INTENSA.', breakname: false},
      tonico: {link: 'vichyNormaderm', name: 'Vichy Normaderm Adstringente', src:"src/images/products/tonico-vichy-normaderm.webp", description: 'LIMPA PROFUNDAMENTE E REMOVE O EXCESSO DE OLEOSIDADE SEM AGREDIR.', breakname: false},
      hidratacao: {link: 'vichyMineral', name: 'Vichy Minéral 89', src:"src/images/products/vichy-mineral.webp", description: 'DEIXA A PELE MACIA E AGE CONTRA AGRESSORES EXTERNOS.', breakname: false},
      protetor: {link: 'clarinsDouble', name: 'Clarins Double Serum Age Control', src:"src/images/products/clarins-paris.webp", description: 'PROTEGE E REJUVENESCE A SUA PELE, NUTRINDO E HIDRATANDO-A.', breakname: false},
    },
    qrCode: 'src/images/loucas-por-beleza/pele-mista.svg'
  },
  dry: {
    daytime: {
      limpeza: {link: 'darrowNutriol', name: 'Darrow Nutriol', src:"src/images/products/darrow-nutriol.webp", description: 'LIMPA E SUAVIZA COM NUTRIÇÃO INTENSA.', breakname: false},
      tonico: {link: 'clarinsSoothing', name: 'Clarins Soothing', src:"src/images/products/clarins-soothing-tonico.webp", description: 'HIDRATA A SUA PELE, DEIXANDO-A MACIA E SUAVE.', breakname: false},
      hidratacao: {link: 'biodermaAtoderm', name: 'Bioderma Atoderm Intensive Baume', src:"src/images/products/bioderma-atoderm-intensive-baume.webp",description: <>ALIVIA DESCONFORTO, <br/>ALÉM DE HIDRATAR E NUTRIR.</>, breakname: false},
      protetor: {link: 'skinAquaSuperMoisture', name: <>Skin Aqua UV Super <br/> Moisture Essence FPS 50</>, src:"src/images/products/skin-aqua-uv-super-moisture.webp", description: 'PROTEÇÃO E HIDRATAÇÃO COM TEXTURA LEVE E DE RÁPIDA ABSORÇÃO.'	, breakname: true},
    },
    night: {
      limpeza: {link: 'darrowNutriol', name: 'Darrow Nutriol', src:"src/images/products/darrow-nutriol.webp", description: 'LIMPA E SUAVIZA COM NUTRIÇÃO INTENSA.', breakname: false},
      tonico: {link: 'clarinsSoothing', name: 'Clarins Soothing', src:"src/images/products/clarins-soothing-tonico.webp", description: 'HIDRATA A SUA PELE, DEIXANDO-A MACIA E SUAVE.', breakname: false},
      hidratacao: {link: 'biodermaAtoderm', name: 'Bioderma Atoderm Intensive Baume', src:"src/images/products/bioderma-atoderm-intensive-baume.webp", description: <>ALIVIA DESCONFORTOS, <br/>ALÉM DE HIDRATAR E NUTRIR.</>, breakname: false},
      protetor: {link: 'skinceuticalsFerulic', name: 'SkinCeuticals C E Ferulic', src:"src/images/products/skinceuticals-ferulic.webp", description: 'PROTEGE A PELE E COMBATE O ENVELHECIMENTO', breakname: false},
    },
    qrCode: 'src/images/loucas-por-beleza/pele-seca.svg'
  },
  oily: {
    daytime: {
      limpeza: {link: 'darrowActine', name: 'Darrow Actine', src:"src/images/products/darrow-actine.webp", description: 'REDUZ A OLEOSIDADE SEM DEIXAR A PELE RESSECAR, DEIXANDO-A RADIANTE.' , breakname: false},
      tonico: {link: 'skinceuticalsBlemish', name: 'SkinCeuticals Blemish + Age Solution', src:"src/images/products/skinceuticals-tonico-blemish-age.webp", description: 'REMOVE IMPUREZAS, DIMINUI A OLEOSIDADE E RENOVA A SUA PELE.' , breakname: false},
      hidratacao: {link: 'laRocheposay', name: 'La Roche-Posay Effaclar Mat', src:"src/images/products/la-roche-posay-effaclar-mat-hidratante.webp", description: 'HIDRATA, CONTROLA A OLEOSIDADE E TEM ACABAMENTO MATTE.' , breakname: false},
      protetor: {link: 'neostrataMinesol', name: 'NeoStrata Minesol Oil Control FPS 70',src:"src/images/products/neostrata-minesol-oil-control.webp", description: 'PROTEGE DO SOL E DO ENVELHECIMENTO E REDUZ A OLEOSIDADE' , breakname: false},
    },
    night: {
      limpeza: {link: 'darrowActine', name: 'Darrow Actine', src:"src/images/products/darrow-actine.webp", description: 'REDUZ A OLEOSIDADE SEM DEIXAR A PELE RESSECAR, DEIXANDO-A RADIANTE.' , breakname: false},
      tonico: {link: 'skinceuticalsBlemish', name: 'SkinCeuticals Blemish + Age Solution', src:"src/images/products/skinceuticals-tonico-blemish-age.webp", description: 'REMOVE IMPUREZAS, DIMINUI A OLEOSIDADE E RENOVA A SUA PELE.' , breakname: false},
      hidratacao: {link: 'laRocheposay', name: 'La Roche-Posay Effaclar Mat', src:"src/images/products/la-roche-posay-effaclar-mat-hidratante.webp", description: 'HIDRATA, CONTROLA A OLEOSIDADE E TEM ACABAMENTO MATTE.', breakname: false},
      protetor: {link: 'esthedermIntensive', name: 'Esthederm Intensive Propolis + Salicylic Acid', src:"src/images/products/esthederm-intensive-propolis.webp", description: 'CONTROLA A OLEOSIDADE E COMBATE O ENVELHECIMENTO E A ACNE.', breakname: false},
    },
    qrCode: 'src/images/loucas-por-beleza/pele-oleosa.svg'
  },
  normal: {
    daytime: {
      limpeza: {link: 'vichyPurete', name:'Vichy Pureté Thermale', src:"src/images/products/vichy-purete-thermale-espuma.webp", description: 'LIMPEZA SUAVE E PROFUNDA, REMOVE IMPUREZAS E ILUMINA A PELE.', breakname: false},
      tonico: {link: 'dermageGlycolique', name:'Dermage Glycolique Daily Peel', src:"src/images/products/dermage-glycolique-daily.webp", description: <>DEIXA A PELE UNIFORMIZADA, <br/>LIMPA E ILUMINADA.</>, breakname: false},
      hidratacao: {link: 'hadaLabo', name: 'Hada Labo Gokujyun White Gel FPS 50', src:"src/images/products/hada-labo-gokujyun.webp", description: <>UM HIDRATANTE SEM ÓLEO PARA EVITAR <br />O EXCESSO DE OLEOSIDADE NA PELE.</>, breakname: false},
      protetor: {link: 'isdinFotoprotector', name: <>ISDIN Fotoprotector Fusion <br /> Water 5 Stars FPS 60</>, src:"src/images/products/ISDIN-Fotoprotector-Fusion.webp", description: 'PROTEGE A SUA PELE CONTROLA A OLEOSIDADE E PROMOVE TOQUE SECO.', breakname: true},
    },
    night: {
      limpeza: {link: 'vichyPurete', name:'Vichy Pureté Thermale',  src:"src/images/products/vichy-purete-thermale-espuma.webp", description: 'LIMPEZA SUAVE E PROFUNDA, REMOVE IMPUREZAS E ILUMINA A PELE.', breakname: false},
      tonico: {link: 'dermageGlycolique', name:'Dermage Glycolique Daily Peel', src:"src/images/products/dermage-glycolique-daily.webp", description: <>DEIXA A PELE UNIFORMIZADA, <br/>LIMPA E ILUMINADA.</>, breakname: false},
      hidratacao: {link: 'vichyMineral', name: 'Vichy Minéral 89', src:"src/images/products/vichy-mineral.webp", description: 'DEIXA A PELE MACIA E AGE CONTRA AGRESSORES EXTERNOS', breakname: false},
      protetor: {link: 'cliniqueSmart', name: 'Clinique Smart Night Clinical MD Retinol', src:"src/images/products/clinique-smart-night.webp", description: 'ACELERA A RENOVAÇÃO CELULAR E SUAVIZA RUGAS E LINHAS FINAS', breakname: false},
    },
    qrCode: 'src/images/loucas-por-beleza/pele-equilibrada.svg'
  },
}

export const PRODUCT_DATA = {
  cerave: {
    image: 'src/images/products/cerave.webp',
    qrcode: 'src/images/qrcode/cerave-foaming-cleanser-gel-de-limpeza-facial.png',
    title: 'CeraVe Foaming Cleanser',
    description: 'CeraVe limpa profundamente, sem prejudicar a barreira protetora natural do rosto.',
    subdescription: 'Ajuda no tratamento de acne, desobstrui os poros e remove o excesso de oleosidade, sem agredir ou irritar a pele.'
  },
    vichyNormaderm: {  
    image: 'src/images/products/tonico-vichy-normaderm.webp',
    qrcode: 'src/images/qrcode/vichy-normaderm.png',
    title: 'Vichy Normaderm Adstringente',
    description: 'Vichy Normaderm Tônico Adstringente complementa a limpeza com sua ação purificante para pele mista, oleosa ou acneica.',
    subdescription: 'Remove o excesso de oleosidade do rosto sem ressecar. Proporcionando equilíbrio à pele oleosa, além de suavizá-la.'
  },
  vichyMineral: {
    image: 'src/images/products/vichy-mineral.webp',
    qrcode: 'src/images/qrcode/vichy-mineral.png',
    title: 'Vichy Minéral 89',
    description: 'Hidratante facial com 15 minerais para todos os tipos de pele. Vichy Minéral 89 aumenta a maciez e a resistência cutâneas, além de proteger contra os mais diversos agressores externos, como poluição, mudanças climáticas e tratamentos com ácidos.',
    subdescription: 'O rosto fica muito mais saudável e jovial, com a pele devidamente fortalecida e perfeitamente protegida contra os danos diários.'
  },
  bioreAqua: {
    image: 'src/images/products/biore-aqua-rich.webp',
    qrcode: 'src/images/qrcode/biore-aquat.png',
    title: 'Bioré Aqua',
    description: 'Protetor solar facial para todos os tipos de pele. Bioré Aqua Rich tem textura bem leve, oferecendo alta proteção UVA e UVB, sem deixar o rosto pegajoso após o uso.',
    subdescription: 'O Protetor Solar Bioré Aqua Rich Watery Essence FPS 50 possui textura macia e refrescante como água e traz a sensação de pele fresca e leve após o uso.'
  },
  clarinsDouble: {
    image: 'src/images/products/clarins-paris.webp',
    qrcode: 'src/images/qrcode/clarins-double.png',
    title: 'Clarins Double Serum',
    description: 'Protetor solar facial para todos os tipos de pele. Bioré Aqua Rich tem textura bem leve, oferecendo alta proteção UVA e UVB, sem deixar o rosto pegajoso após o usoSérum de tratamento anti-idade para todos os tipos de pele. O Clarins Double combate rugas, linhas de expressão, flacidez e outros sinais do envelhecimento. Age de maneira global, completa, para rejuvenescer.',
    subdescription: ''
  },
  darrowNutriol: {
    image: 'src/images/products/darrow-nutriol.webp',
    qrcode: 'src/images/qrcode/darrow-nutriol.png',
    title: 'Darrow Nutriol',
    description: 'Sabonete líquido para peles secas e ressecadas. Darrow Nutriol Sabonete Líquido limpa mantendo suavidade da pele com nutrição intensa.',
    subdescription: 'Possui ação antirressecamento que mantém a pele protegida durante a higienização. Podendo ser usado no corpo e rosto.'
  },
  clarinsSoothing: {
    image: 'src/images/products/clarins-soothing-tonico.webp',
    qrcode: 'src/images/qrcode/clarins-soothing.png',
    title: 'Clarins Soothing',
    description: 'Tônico facial calmante à base de plantas Clarings Soothing. Hidrata e tonifica peles muito secas ou sensíveis, deixando-a macia e suave.',
    subdescription: 'Clarings Soothing remove todos os vestígios de impurezas da pele enquanto respeita e protege o ecossistema da pele, sem deixá-la ressecada.'
  },
  biodermaAtoderm: {
    image: 'src/images/products/bioderma-atoderm-intensive-baume.webp',
    qrcode: 'src/images/qrcode/clarins-soothing.png',
    title: 'Bioderma Atoderm Intensive',
    description: 'Hidratante para peles muito secas ou irritadas. Alivia o repuxamento, as sensações de coceira e desconforto por fatores como idade, genética e meio ambiente.',
    subdescription: 'A textura bálsamo promove rápida absorção e ajuda a aumentar o intervalo entre as crises. Diminui o aspecto avermelhado, graças ao Zinco presente na fórmula.'
  },
  skinAquaSuperMoisture: {
    image: 'src/images/products/skin-aqua-uv-super-moisture.webp',
    qrcode: 'src/images/qrcode/skin-aqua.png',
    title: 'Skin Aqua Super Moisture',
    description: 'Protetor solar facial e corporal. Proporciona proteção e hidratação com textura leve e de rápida absorção.',
    subdescription: 'Protege a pele contra os raios UVA e UVB sem deixar o toque oleoso durante o dia.'
  },
  skinceuticalsFerulic: {
    image: 'src/images/products/skinceuticals-ferulic.webp',
    qrcode: 'src/images/qrcode/skinceuticals.png',
    title: 'SkinCeuticals C E Ferulic',
    description: 'Sérum anti-idade para peles normais a secas. Combate o envelhecimento com sua alta concentração de Vitamina C pura combinada com outros potentes antioxidantes.',
    subdescription: 'Ele conta com diversos benefícios: melhora a elasticidade, atenua até as rugas profundas, aumenta a firmeza e complementa a proteção de radiações UV e infravermelha.'
  },
  darrowActine: {
    image: 'src/images/products/darrow-actine.webp',
    qrcode: 'src/images/qrcode/darrow-actine.png',
    title: 'Darrow Actine',
    description: 'Gel de limpeza para pele oleosa e acneica. Actine Gel de Limpeza elimina a oleosidade com uniformidade e sem ressecar o rosto.',
    subdescription: 'Essa combinação de Darrow Actine age profundamente na limpeza da pele, reduz a oleosidade após o uso, combate acne e cravos e minimiza poros dilatados, além de reduzir visivelmente as marcas de acne.'
  },
  skinceuticalsBlemish: {
    image: 'src/images/products/skinceuticals-tonico-blemish-age.webp',
    qrcode: 'src/images/qrcode/skinceuticals-tonico.png',
    title: 'SkinCeuticals Blemish',
    description: 'Remove impurezas, controla a oleosidade, descongestiona os poros e uniformiza o tom de peles mistas e oleosas.',
    subdescription: 'O Tônico Facial SkinCeuticals Blemish + Age Solution complementa a limpeza diária do rosto e também promove a renovação da pele.'
  },
  laRocheposay: {
    image: 'src/images/products/la-roche-posay-effaclar-mat-hidratante.webp',
    qrcode: 'src/images/qrcode/la-rocheposay.png',
    title: 'La Roche-Posay Effaclar Mat',
    description: 'Hidratante facial para peles oleosas. Hidrata, controla a oleosidade e deixa um acabamento matte.',
    subdescription: 'O Hidratante La Roche-Posay Effaclar Mat Antioleosidade promove um tratamento diário que reduz os poros e matifica com suavidade.'
  },
  neostrataMinesol: {
    image: 'src/images/products/neostrata-minesol-oil-control.webp',
    qrcode: 'src/images/qrcode/neostrata-minesol.png',
    title: 'NeoStrata Minesol Oil Control',
    description: 'Protetor solar facial com textura gel-creme para pele oleosa. Neostrata Previne o envelhecimento precoce e protege dos efeitos nocivos do sol.',
    subdescription: 'Promove proteção solar UVA/UVB diária de longa duração, com controle e redução da oleosidade excessiva da pele graças à sua fórmula oil-free.'
  },
  esthedermIntensive: {
    image: 'src/images/products/esthederm-intensive-propolis.webp',
    qrcode: 'src/images/qrcode/esthederm-intensive.png',
    title: 'Esthederm Intensive Propolis',
    description: 'Esthederm Intensive Propolis + Salicylic Acid previne e combate os sinais da idade e promove ação rápida e efetiva em imperfeições da acne, comedões e poros dilatados. ',
    subdescription: 'Traz fórmula concentrada que reduz a oleosidade, purifica, suaviza e renova a textura da pele, além de uniformizar a tonalidade.'
  },
  vichyPurete: {
    image: 'src/images/products/vichy-purete-thermale-espuma.webp',
    qrcode: 'src/images/qrcode/vichy-purete.png',
    title: 'Vichy Pureté Thermale',
    description: 'Espuma de limpeza para peles normais, secas ou sensíveis. Apesar de suave, Vichy Pureté Thermale limpa profundamente.',
    subdescription: 'Não resseca nem irrita a pele. Sua fórmula leve, livre de álcool ou sabão tem propriedades calmantes e hidratantes.'
  },
  dermageGlycolique: {
    image: 'src/images/products/dermage-glycolique-daily.webp',
    qrcode: 'src/images/qrcode/dermage-glycolique.png',
    title: 'Dermage Glycolique',
    description: 'Dermage Glycolique Daily Peel auxilia na uniformização do tom da pele, luminosidade e redução dos poros.',
    subdescription: 'Com ação de peeling diário, promove a esfoliação química e acelera a renovação celular da pele.'
  },
  hadaLabo: {
    image: 'src/images/products/hada-labo-gokujyun.webp',
    qrcode: 'src/images/qrcode/hada-labo.png',
    title: 'Hada Labo Gokujyun',
    description: 'Com ação multifuncional, Hada Labo Gokujyun White Gel FPS 50 hidrata a pele, protege do sol e age como antioxidante.',
    subdescription: 'Possui 2 tipos de Ácido Hialurônico na fórmula para garantir hidratação profunda.'
  },
  isdinFotoprotector: {
    image: 'src/images/products/ISDIN-Fotoprotector-Fusion.webp',
    qrcode: 'src/images/qrcode/isdin-fotoprotector.png',
    title: 'ISDIN Fotoprotector Fusion',
    description: 'Protetor Solar ISDIN Fusion Water FPS 60 oferece alta proteção UVB/UVA ao rosto, controlando oleosidade da pele e toque seco.',
    subdescription: 'Tem textura leve, de rápida absorção, graças a sua fórmula livre de óleos.'
  },
  cliniqueSmart: {
    image: 'src/images/products/clinique-smart-night.webp',
    qrcode: 'src/images/qrcode/clinique-smart.png',
    title: 'Clinique Smart Night Clinical',
    description: 'Sérum anti-idade noturno para todos os tipos de pele. Acelera a renovação celular e suaviza rugas e linhas finas.',
    subdescription: 'Clinique Smart Night Clinical MD Retinol é um sérum noturno de reparação anti-idade, enriquecido com 0.3% de Retinol.'
  },
}
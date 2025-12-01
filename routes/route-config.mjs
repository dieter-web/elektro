const aufgabenNummern_ElektrischerWiderstand = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
const aufgabenNummern_ElektrischeStromkreise = [24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];
export const routes = [
	{
		path: '/',
		navTitle: 'Elektro',
		navRoot: '/',
		navItems: [
			{
				title: "Themen",
				items: [
					{ href: "/gleichspannung", text: "Gleichspannung" },
					{ href: "/wechselspannung", text: "Wechselspannung" }
				]
			}
		],
		layout: 'layout/main.ejs',
		content: {
			markdown: 'elektro.md',
			formulas: 'elektro_formulas.md',
			examples: 'elektro_examples.md',
			interactive: 'elektro_interactive.md'
		},
		jsonFile: '',
		children: [
			{
				path: 'gleichspannung',
				navTitle: 'Gleichspannung',
				navRoot: '/',
				navItems: [
					{
						title: "Themen",
						items: [
							{ href: "/gleichspannung/grundbegriffe", text: "Grundbegriffe" },
							{ href: "/gleichspannung/stromkreise", text: "Stromkreise" }
						]
					},
					{
						title: "Berechnungen",
						items: [
							{ href: "/gleichspannung/aufgaben", text: "Aufgaben" }
						]
					}

				],
				layout: 'layout/main.ejs',
				content: {
					markdown: 'gleichspannung/gleichspannung.md',
					formulas: 'gleichspannung/gleichspannung_formulas.md',
					examples: 'gleichspannung/gleichspannung_examples.md',
					interactive: 'gleichspannung/gleichspannung_interactive.md'
				},
				jsonFile: '',
				children: [
					{
						path: 'grundbegriffe',
						navTitle: 'Grundbegriffe',
						navRoot: '/gleichspannung',
						navItems: [
							{
								title: "Themen",
								items: [
									{ href: "/gleichspannung/grundbegriffe/strom", text: "Strom" },
									{ href: "/gleichspannung/grundbegriffe/spannung", text: "Spannung" },
									{ href: "/gleichspannung/grundbegriffe/widerstand", text: "Widerstand" },
									{ href: "/gleichspannung/grundbegriffe/energie", text: "Energie" },
									{ href: "/gleichspannung/grundbegriffe/leistung", text: "Leistung" },
									{ href: "/gleichspannung/grundbegriffe/feld", text: "Feld" }
								]
							}
						],
						layout: 'layout/main.ejs',
						content: {
							markdown: 'gleichspannung/grundbegriffe/grundbegriffe.md',
							//formulas: 'gleichspannung/grundbegriffe/strom-formulas.md',
							//examples: 'gleichspannung/grundbegriffe/strom-examples.md',
							//interactive: 'gleichspannung/grundbegriffe/strom-interactive.ejs'
						},
						jsonFile: '',
						children: [
							{
								path: 'strom',
								navTitle: 'Strom',
								navRoot: '/gleichspannung/grundbegriffe',
								navItems: [
									{
										title: "Themen",
										items: [
											{ href: "/gleichspannung/grundbegriffe/strom/wirkung", text: "Wirkung" },
											{ href: "/gleichspannung/grundbegriffe/strom/stromdichte", text: "Stromdichte" },
											{ href: "/gleichspannung/grundbegriffe/strom/messung", text: "Messung" },
											{ href: "/gleichspannung/grundbegriffe/strom/anwendung", text: "Anwendung" }
										]
									}
								],
								layout: 'layout/main.ejs',
								content: {
									markdown: 'gleichspannung/grundbegriffe/strom.md',
									//formulas: 'gleichspannung/grundbegriffe/strom-formulas.md',
									//examples: 'gleichspannung/grundbegriffe/strom-examples.md',
									//interactive: 'gleichspannung/grundbegriffe/strom-interactive.ejs'
								},
								jsonFile: '',
								children: [
									{
										path: 'wirkung',
										navTitle: 'Wirkung',
										navRoot: '/gleichspannung/grundbegriffe/strom',
										navItems: [
											{
												title: "Themen",
												items: [
													{ href: "/gleichspannung/grundbegriffe/strom/wirkung/waerme", text: "Wärme" },
													{ href: "/gleichspannung/grundbegriffe/strom/wirkung/licht", text: "Licht" },
													{ href: "/gleichspannung/grundbegriffe/strom/wirkung/magnetisch", text: "Magnetisch" },
													{ href: "/gleichspannung/grundbegriffe/strom/wirkung/chemisch", text: "Chemisch" },
												]
										}
										],
										layout: 'layout/main.ejs',
										content: {
											markdown: 'gleichspannung/grundbegriffe/strom/wirkung.md'
										},
										jsonFile: '',
										children: [
											{
												path: 'waerme',
												navTitle: 'Wärme',
												navRoot: '/gleichspannung/grundbegriffe/strom/wirkung',
												navItems: [],
												layout: 'layout/main.ejs',
												content: {
													markdown: 'gleichspannung/grundbegriffe/strom/wirkung/waerme.md'
												},
												jsonFile: '',
												children: []
											},
											{
												path: 'licht',
												navTitle: 'Licht',
												navRoot: '/gleichspannung/grundbegriffe/strom/wirkung',
												navItems: [],
												layout: 'layout/main.ejs',
												content: {
													markdown: 'gleichspannung/grundbegriffe/strom/wirkung/licht.md'
												},
												jsonFile: '',
												children: []
											},
											{
												path: 'magnetisch',
												navTitle: 'Magnetisch',
												navRoot: '/gleichspannung/grundbegriffe/strom/wirkung',
												navItems: [],
												layout: 'layout/main.ejs',
												content: {
													markdown: 'gleichspannung/grundbegriffe/strom/wirkung/magnetisch.md'
												},
												jsonFile: '',
												children: []
											},
											{
												path: 'chemisch',
												navTitle: 'Chemisch',
												navRoot: '/gleichspannung/grundbegriffe/strom/wirkung',
												navItems: [],
												layout: 'layout/main.ejs',
												content: {
													markdown: 'gleichspannung/grundbegriffe/strom/wirkung/chemisch.md'
												},
												jsonFile: '',
												children: []
											}
										],
									},
									{
										path: 'stromdichte',
										navTitle: 'Stromdichte',
										navRoot: '/gleichspannung/grundbegriffe/strom',
										navItems: [],
										layout: 'layout/main.ejs',
										content: { markdown: 'gleichspannung/grundbegriffe/strom/stromdichte.md' },
										jsonFile: '',
										children: []
									},
									{
										path: 'messung',
										navTitle: 'Messung',
										navRoot: '/gleichspannung/grundbegriffe/strom',
										navItems: [],
										layout: 'layout/main.ejs',
										content: { markdown: 'gleichspannung/grundbegriffe/strom/messung.md' },
										jsonFile: '',
										children: []
									},
									{
										path: 'anwendung',
										navTitle: 'Anwendung',
										navRoot: '/gleichspannung/grundbegriffe/strom',
										navItems: [],
										layout: 'layout/main.ejs',
										content: { markdown: 'gleichspannung/grundbegriffe/strom/anwendung.md' },
										jsonFile: '',
										children: []
									},
								]
							},
							{
								path: 'spannung',
								navTitle: 'Spannung',
								navRoot: '/gleichspannung/grundbegriffe',
								navItems: [
									{
										title: "Themen",
										items: [
											{ href: "/gleichspannung/grundbegriffe/spannung/erzeugung", text: "Erzeugung" },
											{ href: "/gleichspannung/grundbegriffe/spannung/messung", text: "Messung" },
											{ href: "/gleichspannung/grundbegriffe/spannung/einheitsspannung", text: "Einheitsspannung" },
										]
									}
								],
								layout: 'layout/main.ejs',
								content: {
									markdown: 'gleichspannung/grundbegriffe/spannung.md',
								},
								jsonFile: '',
								children: [
									{
										path: 'erzeugung',
										navTitle: 'Erzeugung',
										navRoot: '/gleichspannung/grundbegriffe/spannung',
										navItems: [
											{
												title: "Themen",
												items: [
													{ href: "/gleichspannung/grundbegriffe/spannung/erzeugung/chemisch", text: "durch chemische Prozesse" },
													{ href: "/gleichspannung/grundbegriffe/spannung/erzeugung/thermo", text: "durch Thermoeffekt" },
													{ href: "/gleichspannung/grundbegriffe/spannung/erzeugung/induktion", text: "durch Induktion" },
													{ href: "/gleichspannung/grundbegriffe/spannung/erzeugung/foto", text: "durch Fotoeffekt" },
													{ href: "/gleichspannung/grundbegriffe/spannung/erzeugung/piezo", text: "durch den Piezoeffekt" }
												]
											}
										],
										items: [],
										layout: 'layout/main.ejs',
										content: {
											markdown: 'gleichspannung/grundbegriffe/spannung/erzeugung.md'
										},
										jsonFile: '',
										children: [
											{
												path: 'chemisch',
												navTitle: 'chemische Prozesse',
												navRoot: '/gleichspannung/grundbegriffe/spannung/erzeugung',
												navItems: [],
												layout: 'layout/main.ejs',
												content: {
													markdown: 'gleichspannung/grundbegriffe/spannung/erzeugung/chemisch.md'
												},
												jsonFile: '',
												children: []
											},
											{
												path: 'thermo',
												navTitle: 'Thermoeffekt',
												navRoot: '/gleichspannung/grundbegriffe/spannung/erzeugung',
												navItems: [],
												layout: 'layout/main.ejs',
												content: {
													markdown: 'gleichspannung/grundbegriffe/spannung/erzeugung/thermo.md'
												},
												jsonFile: '',
												children: []
											},
											{
												path: 'induktion',
												navTitle: 'Induktion',
												navRoot: '/gleichspannung/grundbegriffe/spannung/erzeugung',
												navItems: [],
												layout: 'layout/main.ejs',
												content: {
													markdown: 'gleichspannung/grundbegriffe/spannung/erzeugung/induktion.md'
												},
												jsonFile: '',
												children: []
											},
											{
												path: 'foto',
												navTitle: 'Fotoeffekt',
												navRoot: '/gleichspannung/grundbegriffe/spannung/erzeugung',
												navItems: [],
												layout: 'layout/main.ejs',
												content: {
													markdown: 'gleichspannung/grundbegriffe/spannung/erzeugung/foto.md'
												},
												jsonFile: '',
												children: []
											},
											{
												path: 'piezo',
												navTitle: 'Piezoeffekt',
												navRoot: '/gleichspannung/grundbegriffe/spannung/erzeugung',
												navItems: [],
												layout: 'layout/main.ejs',
												content: {
													markdown: 'gleichspannung/grundbegriffe/spannung/erzeugung/piezo.md'
												},
												jsonFile: '',
												children: []
											},
										]
									},
									{
										path: 'messung',
										navTitle: 'Messung',
										navRoot: '/gleichspannung/grundbegriffe/spannung',
										navItems: [],
										layout: 'layout/main.ejs',
										content: { markdown: 'gleichspannung/grundbegriffe/spannung/messung.md' },
										jsonFile: '',
										children: []
									},
									{
										path: 'einheitsspannung',
										navTitle: 'Einheitsspannung	',
										navRoot: '/gleichspannung/grundbegriffe/spannung',
										navItems: [],
										layout: 'layout/main.ejs',
										content: { markdown: 'gleichspannung/grundbegriffe/spannung/einheitsspannung.md' },
										jsonFile: '',
										children: []
									}
								]
							},
							{
								path: 'widerstand',
								navTitle: 'Widerstand',
								navRoot: '/gleichspannung/grundbegriffe',
								navItems: [
									{
										title: "Themen",
										items: [
											{ href: "/gleichspannung/grundbegriffe/widerstand/linear", text: "mit linearem Kennlinienverlauf" },
											{ href: "/gleichspannung/grundbegriffe/widerstand/nichtlinear", text: "mit nichtlinearem Kennlinienverlauf" },
											{ href: "/gleichspannung/grundbegriffe/widerstand/differentiell", text: "Differentieller Widerstand" },
											{ href: "/gleichspannung/grundbegriffe/widerstand/schaltelement", text: "Widerstand und Schaltelement" }
										]
									}
								],
								layout: 'layout/main.ejs',
								content: {
									markdown: 'gleichspannung/grundbegriffe/widerstand.md'
								},
								jsonFile: '',
								children: [
									{
										path: 'linear',
										navTitle: 'linearer Kennlinienverlauf',
										navRoot: '/gleichspannung/grundbegriffe/widerstand',
										navItems: [],
										layout: 'layout/main.ejs',
										content: { markdown: 'gleichspannung/grundbegriffe/widerstand/linear.md' },
										jsonFile: '',
										children: []
									},
									{
										path: 'nichtlinear',
										navTitle: 'nichtlinearer Kennlinienverlauf',
										navRoot: '/gleichspannung/grundbegriffe/widerstand',
										navItems: [
											{
												title: "Themen",
												items: [
													{ href: "/gleichspannung/grundbegriffe/widerstand/nichtlinear/stromwaerme", text: "durch systembedingten Stromwärmefluß" },
													{ href: "/gleichspannung/grundbegriffe/widerstand/nichtlinear/spannungsbeeinflussung", text: "durch Spannungsbeeinflussung" },
													{ href: "/gleichspannung/grundbegriffe/widerstand/nichtlinear/ldm", text: "durch Licht, Druck und Magnetfeld" },
												]
											}
										],
										layout: 'layout/main.ejs',
										content: { markdown: 'gleichspannung/grundbegriffe/widerstand/nichtlinear.md' },
										jsonFile: '',
										children: [
											{
												path: 'stromwaerme',
												navTitle: 'durch systembedingten Stromwärmefluß',
												navRoot: '/gleichspannung/grundbegriffe/widerstand/nichtlinear',
												navItems: [],
												layout: 'layout/main.ejs',
												content: { markdown: '/gleichspannung/grundbegriffe/widerstand/nichtlinear/stromwaerme.md' },
												jsonFile: '',
												children: []
											},
											{
												path: 'spannungsbeeinflussung',
												navTitle: 'durch Spannungsbeeinflussung',
												navRoot: '/gleichspannung/grundbegriffe/widerstand/nichtlinear',
												navItems: [],
												layout: 'layout/main.ejs',
												content: { markdown: 'gleichspannung/grundbegriffe/widerstand/nichtlinear/spannungsbeeinflussung.md' },
												jsonFile: '',
												children: []
											},
											{
												path: 'ldm',
												navTitle: 'durch Licht, Druck und Magnetfeld',
												navRoot: '/gleichspannung/grundbegriffe/widerstand/nichtlinear',
												navItems: [],
												layout: 'layout/main.ejs',
												content: { markdown: 'gleichspannung/grundbegriffe/widerstand/nichtlinear/ldm.md' },
												jsonFile: '',
												children: []
											}
										]
									},
									{
										path: 'differentiell',
										navTitle: 'Differentieller Widerstand',
										navRoot: '/gleichspannung/grundbegriffe/widerstand',
										navItems: [],
										layout: 'layout/main.ejs',
										content: { markdown: '/gleichspannung/grundbegriffe/widerstand/differentiell.md' },
										jsonFile: '',
										children: []
									},
									{
										path: 'schaltelement',
										navTitle: 'Widerstand und Schaltelement',
										navRoot: '/gleichspannung/grundbegriffe/widerstand',
										navItems: [],
										layout: 'layout/main.ejs',
										content: { markdown: '/gleichspannung/grundbegriffe/widerstand/schaltelement.md' },
										jsonFile: '',
										children: []
									}

								]
							},
							{
								path: 'energie',
								navTitle: 'Energie',
								navRoot: '/gleichspannung/grundbegriffe',
								navItems: [
									{
										title: "Themen",
										items: [
											{ href: "/gleichspannung/grundbegriffe/umwandlung", text: "Energieumwandlung" },
											{ href: "/gleichspannung/grundbegriffe/tarife", text: "Energietarife" },
											{ href: "/gleichspannung/grundbegriffe/messung", text: "Messung" },
										]
									},
								],

								layout: 'layout/main.ejs',
								content: {
									markdown: 'gleichspannung/grundbegriffe/energie.md'
								},
								jsonFile: '',
								children: [
									{
										path: 'energieumwandlung',
										navTitle: 'Energieumwandlung',
										navRoot: '/gleichspannung/grundbegriffe/energie',
										navItems: [
											{
												title: "Themen",
												items: [
													{ href: "/gleichspannung/grundbegriffe/umwandlung/ee_th", text: "Umwandlung elektrischer Energie in thermische Energie (Wärme)" },
													{ href: "/gleichspannung/grundbegriffe/umwandlung/th_ee", text: "Umwandlung thermischer Energie in elektrische Energie" },
													{ href: "/gleichspannung/grundbegriffe/umwandlung/me_ee", text: "Umwandlung mechanischer Energie in elektrische Energie " },
													{ href: "/gleichspannung/grundbegriffe/umwandlung/ee_me", text: "Umwandlung elektrischer Energie in mechanische Energie" },
												]
											}
										],
										layout: 'layout/main.ejs',
										content: { markdown: 'gleichspannung/grundbegriffe/energie/umwandlung.md' },
										jsonFile: '',
										children: [
											{
												path: 'ee_th',
												navTitle: 'elektrische Energie -> thermische Energie',
												navRoot: '/gleichspannung/grundbegriffe/energie/ernergieumwandlung',
												navItems: [],
												layout: 'layout/main.ejs',
												content: { markdown: 'gleichspannung/grundbegriffe/energie/energieumwandlung/ee_th.md' },
												jsonFile: '',
												children: []
											},
											{
												path: 'th_ee',
												navTitle: 'thermische Energie -> elektrische Energie',
												navRoot: '/gleichspannung/grundbegriffe/energie/ernergieumwandlung',
												navItems: [],
												layout: 'layout/main.ejs',
												content: { markdown: 'gleichspannung/grundbegriffe/energie/energieumwandlung/th_ee.md' },
												jsonFile: '',
												children: []
											},
											{
												path: 'me_ee',
												navTitle: 'mechanische Energie -> elektrische Energie',
												navRoot: '/gleichspannung/grundbegriffe/energie/ernergieumwandlung',
												navItems: [],
												layout: 'layout/main.ejs',
												content: { markdown: 'gleichspannung/grundbegriffe/energie/energieumwandlung/me_ee.md' },
												jsonFile: '',
												children: []
											},
											{
												path: 'ee_me',
												navTitle: 'elektrische Energie -> mechanische Energie',
												navRoot: '/gleichspannung/grundbegriffe/energie/ernergieumwandlung',
												navItems: [],
												layout: 'layout/main.ejs',
												content: { markdown: 'gleichspannung/grundbegriffe/energie/energieumwandlung/ee_me.md' },
												jsonFile: '',
												children: []
											},
										]
									},
									{
										path: 'energietarife',
										navTitle: 'Energietarife',
										navRoot: '/gleichspannung/grundbegriffe/energie',
										navItems: [],
										layout: 'layout/main.ejs',
										content: { markdown: '' },
										jsonFile: '',
										children: []
									},
									{
										path: 'messung',
										navTitle: 'Messung',
										navRoot: '/gleichspannung/grundbegriffe/energie',
										navItems: [],
										layout: 'layout/main.ejs',
										content: { markdown: '' },
										jsonFile: '',
										children: []
									}
								]
							},
							{
								path: 'leistung',
								navTitle: 'Leistung',
								navRoot: '/gleichspannung/grundbegriffe',
								navItems: [
									{
										title: "Themen",
										items: [

											{ href: "/gleichspannung/grundbegriffe/berechnung", text: "Berechnung" },
											{ href: "/gleichspannung/grundbegriffe/messung", text: "Messung" },
											{ href: "/gleichspannung/grundbegriffe/wirkungsgrad", text: "Wirkungsgrad in Stromkreisen" },
											{ href: "/gleichspannung/grundbegriffe/anpassung", text: "Anpassung" },
										]
									},
								],
								layout: 'layout/main.ejs',
								content: {
									markdown: 'gleichspannung/grundbegriffe/leistung.md'
								},
								jsonFile: '',

								children: [
									{
										path: 'berechnung',
										navTitle: 'Berechnung',
										navRoot: '/gleichspannung/grundbegriffe/leistung',
										navItems: [],
										layout: 'layout/main.ejs',
										content: { markdown: '' },
										jsonFile: '',
										children: []
									},
									{
										path: 'messung',
										navTitle: 'Messung',
										navRoot: '/gleichspannung/grundbegriffe/leistung',
										navItems: [],
										layout: 'layout/main.ejs',
										content: { markdown: '' },
										jsonFile: '',
										children: []
									},
									{
										path: 'wirkungsgrad',
										navTitle: 'Wirkungsgrad in Stromkreisen',
										navRoot: '/gleichspannung/grundbegriffe/leistung',
										navItems: [],
										layout: 'layout/main.ejs',
										content: { markdown: '' },
										jsonFile: '',
										children: []
									},
									{
										path: 'anpassung',
										navTitle: 'Anpassung',
										navRoot: '/gleichspannung/grundbegriffe/leistung',
										navItems: [],
										layout: 'layout/main.ejs',
										content: { markdown: '' },
										jsonFile: '',
										children: []
									}
								]
							},
							{
								path: 'feld',
								navTitle: 'Feld',
								navRoot: '/gleichspannung/grundbegriffe',
								navItems: [
									{
										title: "Themen",
										items: [

											{ href: "/gleichspannung/grundbegriffe/feld/leiter", text: "Elektrisches Feld im Leiter" },
											{ href: "/gleichspannung/grundbegriffe/feld/nichtleiter", text: "Elektrisches Feld im Nichtleiter" },
										]
									},
								],
								layout: 'layout/main.ejs',
								content: {
									markdown: 'gleichspannung/grundbegriffe/feld.md'
								},
								jsonFile: '',
								children: [
									{
										path: 'leiter',
										navTitle: 'Elektrisches Feld im Leiter',
										navRoot: '/gleichspannung/grundbegriffe/feld',
										navItems: [
                                            {
                                            title: "Themen",
                                            items: [
                                                { href: "/gleichspannung/grundbegriffe/feld/leiter/physik", text: "Physikalische Erscheinung"},
                                                { href: "/gleichspannung/grundbegriffe/feld/leiter/feldgroessen", text: "Elektrische Feldgrößen (im Leiter)"},
                                                { href: "/gleichspannung/grundbegriffe/feld/leiter/verknuepfung", text: "Verknüpfung der elektrischen Feldgrößen (im Leiter)"},
                                                { href: "/gleichspannung/grundbegriffe/feld/leiter/geschichteterLeiter",text: "Verhalten elektrischer Feldgrößen im geschichteten Leiter"},
                                                { href: "/gleichspannung/grundbegriffe/feld/leiter/widerstand", text: "Elektrischer Widerstand"}
                                            ]
                                            }
                                        ],
										layout: 'layout/main.ejs',
										content: { markdown: '' },
										jsonFile: '',
										children: [
                                            {
                                                path: 'physik',
                                                navTitle: 'Physikalische Erscheinung',
                                                navRoot: '/gleichspannung/grundbegriffe/feld/leiter',
                                                navItems: [],
                                                layout: 'layout/main.ejs',
                                                content: { 
                                                    markdown: 'gleichspannung/grundbegriffe/feld/leiter/physik.md'
                                                },
                                                jsonFile: '',
                                                children:[]
                                            },
                                            {
                                                path:'feldgroessen',
                                                navTitle: 'Elektrische Feldgrößen (im Leiter),
                                                navRoot: '/gleichspannung/grundbegriffe/feld/leiter',
                                                navItems : [],
                                                layout: 'layout/main.ejs'
                                                content: {
                                                    markdown: 'gleichspannung/grundbegriffe/feld/leiter/feldgroessen.md'
                                                },
                                                jsonFile: '',
                                                children:[]
                                            }

                                        ]
									},
									{
										path: 'nichtleiter',
										navTitle: 'Elektrisches Feld im Nichtleiter',
										navRoot: '/gleichspannung/grundbegriffe/feld',
										navItems: [
                                            {
                                                title: "Themen",
                                                items: [
                                                    { href: "/gleichspannung/grundbegriffe/feld/nichtleiter/physik", text: "Physikalische Erscheinung"},
                                                    { href: "/gleichspannung/grundbegriffe/feld/nichtleiter/feldgroessen", text: "Elektrische Feldgrößen (im Nichtleiter)"},
                                                    { href: "/gleichspannung/grundbegriffe/feld/nichtleiter/verknuepfung", text: "Verknüpfung der elektrischen Feldgrößen (im Nichtleiter)"},
                                                    { href: "/gleichspannung/grundbegriffe/feld/nichtleiter/geschichteterNichtleiter", text: "Verhalten elektrischer Feldgrößen im geschichteten Nichtleiter"},
                                                    { href: "/gleichspannung/grundbegriffe/feld/nichtleiter/kondensator", text: "Kondensator"},
                                                ]
                                            }
                                        ],
										layout: 'layout/main.ejs',
										content: { markdown: '' },
										jsonFile: '',
										children: []
									}
								],
							}
						]
					},
					{
						path: 'aufgaben',
						
						navTitle: 'Aufgaben',
						navRoot: '/gleichspannung',
						navItems: [
							{
								title: "Elektrischer Widerstand",
								items: aufgabenNummern_ElektrischerWiderstand.map(n => ({
									href:`/gleichspannung/aufgaben/aufgabe${n}`,
									text: `Aufgabe ${n}`
								}))
							},
							{
								title: "Elektrische Stromkreise",
								items: aufgabenNummern_ElektrischeStromkreise.map(n => ({
									href:`/gleichspannung/aufgaben/aufgabe${n}`,
									text: `Aufgabe ${n}`
								})) 
							}
						],
						content: {
							markdown: 'gleichspannung/aufgaben.md'
						},
						layout: 'layout/main.ejs',
						children: [
							...Array.from({length:50},(_,i) => ({id: i, title: `A${i}`})),
						].map(({id,title}) => ({
							path: `aufgabe${id}`,
							task: `A${id}`,
							navTitle: title,
							navRoot: '/gleichspannung/aufgaben/',
							navItems: [],
							layout: 'layout/main.ejs',
							children:[]
						}))	
					},
				],
			},
      {
        path: 'wechselspannung',
        navTitle: 'Wechselspannung',
        navRoot: '/',
        navItems: [
          {
            title: "Themen",
            items : [
              { href:"/wechselspannung/grundbegriffe", text : "Grundegriffe"}
            ]
          },
          {
            title:"Berechnungen",
            items: [
              { href:"/wechselspannung/berechnungen", text: "Berechnungen"}
            ]
          },
        ],
        layout: 'layout/main.ejs',
        content: {
          markdown:'wechselspannung/wechselspannung.md',
          formulas: '',
          examples: '',
          interactive: ''
        },
        jsonFile: '',
        children: [
          {
            path:'grundbegriffe',
            navTitle: 'Grundbegriffe',
            navRoot: '/wechselspannung',
            navItems: [
                {
                  title: 'Themen',
                  items: [
                    { href: "/wechselspannung/grundbegriffe/Arten", text: "Arten"},
                    { href: "/wechselspannung/grundbegriffe/Darstellung", text: "Darstellung"},
                    { href: "/wechselspannung/grundbegriffe/Kennwerte", text: "Kennwerte"},
                    { href: "/wechselspannung/grundbegriffe/Darstellung1", text: "Darstellung sin-Wechselgrößen gleicher Frequenz"}
                  ]
               }
            ],
            layout:'layout/main.ejs',
            content: {
              markdown:'wechselspannung/grundbegriffe.md'
            },            
            jsonFile: '',
            children: [
              {
                path:'arten',
                navTitle: 'Arten',
                navRoot: '/wechselspannung/grundbegriffe',
                navItems: [
                  {
                    title: 'Themen',
                    items: [
                      { href: "/wechselspannung/grundbegriffe/Arten/Dreieck", text: "Dreieckförmige Wechselgröße"},
                      { href: "/wechselspannung/grundbegriffe/Arten/Trapez", text: "Trapezförmige Wechselgröße"},
                      { href: "/wechselspannung/grundbegriffe/Arten/Sinus", text: "Sinusförmige Wechselgrößen"}
                    ]
                  }
                ],
                layout: 'layout/main.ejs',
                content: {
                  markdown: 'wechselspannung/grundbegriffe/arten.md'
                },
                jsonFile: '',
                children: []
              },
              {
                path:'darstellung',
                navTitle: 'Darstellung',
                navRoot: '/wechselspannung/grundbegriffe',
                navItems: [
                  {
                    title:'Themen',
                    items: [
                      { href: "/wechselspannung/grundbegriffe/Darstellung/Schleifenoszillograf", text: "Schleifenoszillograf"},
                      { href: "/wechselspannung/grundbegriffe/Darstellung/Katodenstrahloszilloskop", text: "Katodenstrahloszilloskop"},
                    ]
                  }

                ],
                layout: 'layout/main.ejs',
                content: {
                  markdown: 'wechselspannung/grundbegriffe/darstellung.md'
                },
                jsonFile: '',
                children: []
              }, // children Darstellung
            ]
        } // grundbegriffe 
     ] // children
   } // wechselspannung
	] // children
 } // rootpath
] // routes


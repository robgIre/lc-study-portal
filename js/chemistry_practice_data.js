/* LC Chemistry Higher Level 2025 — Structured marking points for practice marking */
var CHEM_MARKING = {
  "2025": {

    1: {
      totalMarks: 10, topic: "Volumetric Analysis – Iron(II) in Iron Tablets (KMnO4 Titration)",
      points: [
        { marks:1, desc:"Identifies a primary standard for KMnO4",
          accept:[
            {phrase:["ammonium iron","ammonium iron(II) sulfate","ammonium iron(ii) sulphate"]},
            {all:["nh4","fe","so4"]},
            {phrase:"anhydrous sodium carbonate"},
            {phrase:"sodium oxalate"},
            {all:["primary standard"]}
          ],
          hit:"Correctly identified a primary standard (e.g. ammonium iron(II) sulfate)",
          miss:"A primary standard for KMnO4: ammonium iron(II) sulfate (NH4)2SO4.FeSO4.6H2O, or anhydrous sodium carbonate, or sodium oxalate" },

        { marks:1, desc:"Describes bringing solution to 250 cm3 mark precisely",
          accept:[
            {all:["deionised|distilled|water"],near:[["water","drop|slowly|meniscus|mark|250",8]]},
            {all:["meniscus","mark|line|250"]},
            {all:["drop by drop|dropwise"]}
          ],
          hit:"Good technique — add water drop by drop to the meniscus",
          miss:"Add deionised water DROP BY DROP until the bottom of the MENISCUS is on the 250 cm3 mark" },

        { marks:1, desc:"Explains why using multiple tablets increases accuracy",
          accept:[
            {all:["percentage error"],near:[["percentage error","reduce|small|less|lower|minimis",8]]},
            {all:["higher|larger|greater","concentration|volume|titre"]},
            {all:["average|representative"]},
            {near:[["multiple|more|six|several","tablet",4],["error|accura|precis","reduce|small|improv|increas",10]]}
          ],
          hit:"More tablets reduces percentage error / gives a more representative sample",
          miss:"Using more tablets gives a higher concentration and larger titre, REDUCING PERCENTAGE ERROR" },

        { marks:1, desc:"Names the apparatus to measure 25.0 cm3 accurately",
          accept:[
            {all:["pipette"]},
            {all:["burette"]}
          ],
          hit:"Correct — pipette (or burette)",
          miss:"A PIPETTE is used to measure exactly 25.0 cm3" },

        { marks:1, desc:"Describes rinsing procedure for the pipette",
          accept:[
            {all:["deionised|distilled","water"],near:[["water","rinse|wash",6]]},
            {all:["rinse","solution|iron|fe"]},
            {near:[["rinse|wash","water",4],["then|also|rinse","solution|iron|sample",8]]}
          ],
          hit:"Rinse with deionised water, then with the iron(II) solution",
          miss:"Rinse first with DEIONISED WATER, then with the IRON(II) SOLUTION to prevent contamination and dilution" },

        { marks:1, desc:"Explains why no indicator was needed (self-indicating)",
          accept:[
            {all:["self","indicat"]},
            {all:["own","indicat"]},
            {all:["purple|pink","colourless|decolour|decolor"],near:[["purple|pink|kmno4|permanganate","colourless|decolour|decolor",8]]},
            {all:["kmno4|permanganate"],near:[["kmno4|permanganate","indicator|colour|color",6]]}
          ],
          hit:"KMnO4 is self-indicating — purple becomes colourless when it reacts with Fe2+",
          miss:"KMnO4 acts as its OWN INDICATOR — it is purple/pink and becomes colourless when it reacts with Fe2+" },

        { marks:1, desc:"Describes the end point observation",
          accept:[
            {all:["pink|purple"],near:[["pink|purple","persist|permanent|remain|stay|last",6]]},
            {all:["first","drop|excess"],near:[["drop|excess","not|decolour|pink|purple",6]]}
          ],
          hit:"Correct — a persistent pale pink colour at the end point",
          miss:"The solution turns PALE PINK and the colour PERSISTS — the first drop of excess KMnO4 is not decolourised" },

        { marks:1, desc:"Calculates moles of MnO4- (2.25 x 10^-4 mol)",
          accept:[
            {num:[0.000225,0.000225]},
            {phrase:["2.25 x 10","2.25x10","2.25 × 10"]},
            {all:["0.010","22.5"],near:[["0.010","22.5",6]]}
          ],
          hit:"Moles MnO4- = 2.25 x 10^-4 mol",
          miss:"n = c x V/1000 = 0.010 x 22.5/1000 = 2.25 x 10^-4 mol" },

        { marks:1, desc:"Uses 1:5 ratio and scales to 250 cm3 flask (0.01125 mol Fe2+)",
          accept:[
            {all:["5","ratio|stoichiometry|equation"]},
            {num:[0.01125,0.0113]},
            {phrase:["1.125 x 10","1.125x10"]},
            {all:["x 5","x 10"],near:[["x 5","x 10",12]]}
          ],
          hit:"Correctly applied 1:5 ratio and scaled to 250 cm3",
          miss:"1 MnO4- : 5 Fe2+. Moles Fe2+ in 25 cm3 = 2.25x10^-4 x 5 = 1.125x10^-3. In 250 cm3 = 1.125x10^-2 mol" },

        { marks:1, desc:"Calculates mass and percentage of Fe(II) per tablet",
          accept:[
            {num:[0.105]},
            {num:[25.24,25.2,25]},
            {all:["0.105","25"]},
            {all:["mass","56"],near:[["mass|moles","56|iron",6]]}
          ],
          hit:"Mass per tablet = 0.105 g, percentage = 25.24%",
          miss:"Moles per tablet = 0.01125/6 = 1.875x10^-3. Mass = 1.875x10^-3 x 56 = 0.105 g. % = (0.105/0.416) x 100 = 25.24%" }
      ]
    },

    2: {
      totalMarks: 10, topic: "Steam Distillation & Extraction of Clove Oil (Eugenol)",
      points: [
        { marks:1, desc:"Identifies substance A in the distillate as water",
          accept:[
            {all:["water|h2o"]}
          ],
          hit:"Substance A is water (H2O)",
          miss:"Substance A in the distillate is WATER (H2O)" },

        { marks:1, desc:"States appearance is milky/cloudy — an emulsion",
          accept:[
            {all:["milky|cloudy|opaque|turbid"]},
            {all:["emulsion"]},
            {all:["oil","water","immiscible|mix|dispers"]}
          ],
          hit:"Correct — milky appearance (emulsion of oil in water)",
          miss:"The distillate has a MILKY appearance — it is an EMULSION (oil droplets dispersed in water)" },

        { marks:1, desc:"States advantage of steam distillation (lower temperature / prevents decomposition)",
          accept:[
            {all:["decompos|degrad|damage"],near:[["decompos|degrad|damage","prevent|minimis|avoid|reduce",6]]},
            {all:["lower|below","temperature|boiling point"]},
            {all:["below","100|boiling"]},
            {all:["protect|gentle"],near:[["protect|gentle","molecule|compound|oil|eugenol",6]]}
          ],
          hit:"Good — steam distillation avoids thermal decomposition",
          miss:"Steam distillation extracts the oil at a LOWER TEMPERATURE than its boiling point, MINIMISING DECOMPOSITION" },

        { marks:1, desc:"Describes extraction using separating funnel",
          accept:[
            {all:["separating funnel|separatory funnel|sep funnel"]},
            {all:["shake|mix","cyclohexane|solvent"],near:[["shake|mix","layer|separate",8]]},
            {all:["organic","layer|phase"],near:[["organic","layer|phase|top|upper",4]]}
          ],
          hit:"Good description of liquid-liquid extraction with separating funnel",
          miss:"Pour distillate into a SEPARATING FUNNEL, add cyclohexane, SHAKE (vent regularly), allow layers to separate, run off the aqueous layer" },

        { marks:1, desc:"States two suitable properties of cyclohexane", group:"properties_q2",
          accept:[
            {all:["non-polar|nonpolar"],near:[["non-polar|nonpolar","dissolve|soluble|eugenol",8]]},
            {all:["immiscible"],near:[["immiscible","water",4]]},
            {all:["low","solubility|miscib"],near:[["low","water",6]]},
            {all:["low","boiling point|bp"]},
            {all:["easy|easily","evaporate|remove|distil"]},
            {all:["lower","density"],near:[["lower","density|water",6]]},
            {all:["unreactive|inert|low reactivity"]}
          ],
          hit:"Good property of cyclohexane for extraction",
          miss:"Properties: non-polar (dissolves eugenol), immiscible with water, low boiling point (easy to evaporate off), lower density than water" },

        { marks:1, desc:"States precaution to maximise yield",
          accept:[
            {all:["repeat|multiple","extraction|wash"]},
            {all:["fresh","cyclohexane|solvent"]},
            {all:["avoid","spillage|loss"]},
            {all:["vent|release","pressure|gas"]}
          ],
          hit:"Good precaution to maximise yield",
          miss:"Repeat the extraction with fresh cyclohexane / avoid spillage / vent the funnel to release pressure" },

        { marks:1, desc:"Describes how to isolate eugenol from cyclohexane solution",
          accept:[
            {all:["evaporat|distil|boil|heat"],near:[["evaporat|distil|boil|heat","solvent|cyclohexane",6]]},
            {all:["low","boiling point"],near:[["low","boiling","remove|evaporat",8]]},
            {all:["rotary","evaporat"]}
          ],
          hit:"Evaporate the cyclohexane (low boiling point) to leave eugenol behind",
          miss:"EVAPORATE the solvent — cyclohexane has a low boiling point, so gentle heating removes it, leaving eugenol behind" },

        { marks:1, desc:"Suggests a use of eugenol",
          accept:[
            {all:["flavour|flavor|food"]},
            {all:["antiseptic|disinfect|antibacterial"]},
            {all:["fragrance|perfume|scent"]},
            {all:["dental|dent|tooth|toothache"]},
            {all:["medicin|pain|analgesic"]}
          ],
          hit:"Valid use of eugenol",
          miss:"Uses include: flavouring, antiseptic, fragrance, dental applications" },

        { marks:1, desc:"Names a spectroscopic technique to confirm identity",
          accept:[
            {all:["infra-red|infrared|ir"]},
            {all:["mass spec|mass spectro"]},
            {all:["ultra-violet|ultraviolet|uv"]},
            {all:["nmr|nuclear magnetic"]},
            {all:["spectroscop"]}
          ],
          hit:"Correct spectroscopic technique",
          miss:"IR spectroscopy, mass spectrometry, or UV spectroscopy can confirm the identity of eugenol" },

        { marks:1, desc:"Calculates volume of eugenol (1.2 cm3)",
          accept:[
            {num:[1.2,1.19]},
            {all:["1.26","1.06"],near:[["1.26","1.06",6]]},
            {all:["18.0","0.07|7%"],near:[["18.0","0.07|7%",6]]}
          ],
          hit:"Volume = 1.26/1.06 = 1.2 cm3",
          miss:"Mass = 18.0 x 0.07 = 1.26 g. Volume = mass/density = 1.26/1.06 = 1.2 cm3" }
      ]
    },

    3: {
      totalMarks: 10, topic: "Rate of Reaction – H2O2 Decomposition with MnO2 Catalyst",
      points: [
        { marks:1, desc:"Plots graph correctly with labelled axes and smooth curve",
          accept:[
            {all:["graph|plot|curve"]},
            {all:["axes|axis","label"]},
            {all:["volume","time"]},
            {all:["smooth","curve|line"]}
          ],
          hit:"Graph plotted with labelled axes and smooth curve",
          miss:"Plot volume of O2 (y-axis) vs time in min (x-axis). Draw a smooth curve through 7 points — rises steeply then levels off at 100 cm3" },

        { marks:1, desc:"Finds instantaneous rate at 2.5 min using a tangent",
          accept:[
            {all:["tangent"],near:[["tangent","2.5|curve|slope|gradient",6]]},
            {num:[9.8,10]},
            {all:["slope|gradient","tangent"]}
          ],
          hit:"Instantaneous rate found by drawing a tangent at t = 2.5 min",
          miss:"Draw a TANGENT to the curve at t = 2.5 min. The SLOPE of the tangent gives the instantaneous rate (~9.8 cm3/min)" },

        { marks:1, desc:"Calculates average rate over first 2.5 min (~34.8 cm3/min)",
          accept:[
            {num:[34.8,35,34]},
            {all:["87|88","2.5"],near:[["87|88","2.5|divide",6]]},
            {all:["total volume","total time"]}
          ],
          hit:"Average rate = volume at 2.5 min / 2.5 = ~34.8 cm3/min",
          miss:"Average rate = total volume / total time. Volume at 2.5 min (from graph) ~87 cm3. Rate = 87/2.5 = 34.8 cm3/min" },

        { marks:1, desc:"States granular MnO2 would decrease the rate — less surface area",
          accept:[
            {all:["decrease|slower|reduce|lower"],near:[["decrease|slower|reduce|lower","rate|speed|reaction",6]]},
            {all:["surface area"],near:[["surface area","small|less|reduce|fewer|lower",6]]},
            {all:["fewer|less","collision"]}
          ],
          hit:"Granular MnO2 = less surface area = fewer collisions = slower rate",
          miss:"Rate would DECREASE — granular particles have SMALLER SURFACE AREA than fine powder, so FEWER COLLISIONS per unit time" },

        { marks:1, desc:"States more concentrated H2O2 would increase the rate — more collisions",
          accept:[
            {all:["increase|faster|higher"],near:[["increase|faster|higher","rate|speed|reaction",6]]},
            {all:["more","particle|molecule|collision"]},
            {all:["concentration|concentrated"],near:[["concentration|concentrated","more|increase|higher|collision",6]]}
          ],
          hit:"Higher concentration = more molecules per unit volume = more collisions = faster rate",
          miss:"Rate would INCREASE — more H2O2 molecules per unit volume means more COLLISIONS per unit time" },

        { marks:1, desc:"Calculates average rate in minute 1 (60 cm3/min)",
          accept:[
            {num:[60]},
            {all:["60","1"],near:[["60","0|first|minute",6]]}
          ],
          hit:"Rate in minute 1 = 60 cm3/min",
          miss:"Rate = (60 - 0) / (1 - 0) = 60 cm3/min" },

        { marks:1, desc:"Calculates average rate in minute 2 (22 cm3/min)",
          accept:[
            {num:[22]},
            {all:["82","60"],near:[["82","60",6]]}
          ],
          hit:"Rate in minute 2 = 22 cm3/min",
          miss:"Rate = (82 - 60) / (2 - 1) = 22 cm3/min" },

        { marks:1, desc:"Explains why rate decreases — concentration of H2O2 decreases over time",
          accept:[
            {all:["concentration|amount","decrease|reduce|less|lower|fall|drop|use"],near:[["concentration|amount","h2o2|reactant|peroxide",8]]},
            {all:["fewer","collision|molecule|particle"]},
            {all:["consumed|used up"],near:[["consumed|used up","reactant|h2o2|peroxide",6]]}
          ],
          hit:"As reaction proceeds, H2O2 concentration drops so fewer collisions occur",
          miss:"As the reaction proceeds, H2O2 concentration DECREASES, leading to FEWER COLLISIONS per unit time, so the rate drops" },

        { marks:1, desc:"Explains how a catalyst works — alternative pathway with lower activation energy",
          accept:[
            {all:["alternative|different","pathway|route|mechanism"]},
            {all:["lower|reduce","activation energy|ea"]},
            {all:["not consumed|not used up|unchanged|regenerat"]},
            {all:["catalyst"],near:[["catalyst","activation|energy|pathway",8]]}
          ],
          hit:"A catalyst provides an alternative pathway with lower activation energy",
          miss:"A catalyst provides an ALTERNATIVE PATHWAY with LOWER ACTIVATION ENERGY. More particles have sufficient energy to react. The catalyst is NOT consumed" },

        { marks:1, desc:"Identifies heterogeneous/surface catalysis — different phases",
          accept:[
            {all:["heterogeneous"]},
            {all:["surface"],near:[["surface","catalysis|adsorption|reaction",4]]},
            {all:["different","phase|state"]},
            {all:["solid","liquid|aqueous"],near:[["solid","liquid|aqueous|different",6]]}
          ],
          hit:"Heterogeneous (surface) catalysis — solid catalyst, liquid/aqueous reactant",
          miss:"HETEROGENEOUS/SURFACE catalysis — MnO2 (solid) and H2O2 (liquid/aqueous) are in DIFFERENT PHASES" }
      ]
    },

    4: {
      totalMarks: 10, topic: "Short Questions – Mixed Topics (answer 8 of 12)",
      points: [
        { marks:1, desc:"(a) Mendeleev arranged elements by atomic mass with similar properties grouped",
          accept:[
            {all:["atomic mass|atomic weight"],near:[["atomic mass|atomic weight","arrang|order|increas",6]]},
            {all:["similar","properties|chemical"],near:[["similar","properties|chemical|group",6]]},
            {all:["gap|space"],near:[["gap|space","undiscovered|predict|missing",6]]}
          ],
          hit:"Elements arranged by atomic mass, grouped by similar properties",
          miss:"Elements arranged by ATOMIC MASS and grouped by SIMILAR CHEMICAL PROPERTIES. Mendeleev left GAPS for undiscovered elements" },

        { marks:1, desc:"(b) Cr3+ has 24 protons, 21 electrons",
          accept:[
            {num:[24],near:[["24","proton",6]]},
            {num:[21],near:[["21","electron",6]]},
            {all:["24","21"]}
          ],
          hit:"Protons = 24, Electrons = 21 (24 - 3)",
          miss:"Protons = 24 (atomic number). Electrons = 24 - 3 = 21 (3+ charge means 3 electrons lost)" },

        { marks:1, desc:"(c) Chemical formulae: Ca(OH)2 and Al2(SO4)3",
          accept:[
            {phrase:["ca(oh)2","caoh2","calcium hydroxide"]},
            {phrase:["al2(so4)3","al2so43","aluminium sulfate","aluminium sulphate"]}
          ],
          hit:"Correct formulae",
          miss:"Ca(OH)2 for calcium hydroxide, Al2(SO4)3 for aluminium sulfate" },

        { marks:1, desc:"(d) Vanadium electron configuration: 1s2 2s2 2p6 3s2 3p6 4s2 3d3",
          accept:[
            {phrase:["1s2 2s2 2p6 3s2 3p6 4s2 3d3","1s2 2s2 2p6 3s2 3p6 3d3 4s2"]},
            {all:["4s2","3d3"]},
            {all:["23","electron"]}
          ],
          hit:"Correct: 1s2 2s2 2p6 3s2 3p6 4s2 3d3",
          miss:"1s2 2s2 2p6 3s2 3p6 4s2 3d3 (23 electrons total)" },

        { marks:1, desc:"(e) Empirical formula calculation: C4H3O2",
          accept:[
            {phrase:["c4h3o2","C4H3O2"]},
            {all:["4","3","2"],near:[["4","c|carbon",4],["3","h|hydrogen",4],["2","o|oxygen",4]]}
          ],
          hit:"Empirical formula = C4H3O2",
          miss:"C: 57.84/12=4.82, H: 3.61/1=3.61, O: 38.55/16=2.41. Divide by 2.41: C=2.0, H=1.5, O=1.0. Multiply by 2: C4H3O2" },

        { marks:1, desc:"(f) Avogadro's law: equal volumes of gases at same T and P have equal numbers of particles",
          accept:[
            {all:["equal","volume"],near:[["equal","volume",4],["equal|same","number|moles|particle|molecule",8]]},
            {all:["same","temperature|T","pressure|P"],near:[["temperature|T","pressure|P",8]]},
            {phrase:"avogadro"}
          ],
          hit:"Correct statement of Avogadro's law",
          miss:"At the SAME temperature and pressure, EQUAL VOLUMES of gases have EQUAL NUMBERS of particles (molecules)" },

        { marks:1, desc:"(g) Two isomers of C4H10: butane and methylpropane",
          accept:[
            {all:["butane","methylpropane|2-methylpropane|isobutane"]},
            {all:["straight|normal","branched"]},
            {all:["ch3ch2ch2ch3","ch3ch(ch3)ch3|ch(ch3)3"]}
          ],
          hit:"Butane (straight chain) and methylpropane (branched)",
          miss:"Butane: CH3-CH2-CH2-CH3 (straight chain). Methylpropane: CH3-CH(CH3)-CH3 (branched)" },

        { marks:1, desc:"(h) Medicine volume calculation: 23.24 cm3",
          accept:[
            {num:[23.24,23.2,23]},
            {all:["1162","50"],near:[["1162","50",6]]},
            {all:["140","8.3"],near:[["140","8.3|dose",6]]}
          ],
          hit:"Volume = 1162/50 = 23.24 cm3",
          miss:"Dose = 140 x 8.3 = 1162 mg. 5.0% w/v = 50 mg/cm3. Volume = 1162/50 = 23.24 cm3" },

        { marks:1, desc:"(i) BOD definition: dissolved oxygen consumed by microorganisms",
          accept:[
            {all:["oxygen","consumed|used|required"],near:[["oxygen","biological|microorganism|bacteria|organic",8]]},
            {all:["bod|biochemical oxygen demand"]},
            {all:["5 day|five day"],near:[["5 day|five day","20|dark",8]]}
          ],
          hit:"BOD = dissolved oxygen consumed by biological action (microorganisms)",
          miss:"BOD = quantity of DISSOLVED OXYGEN consumed by BIOLOGICAL ACTION (microorganisms) over 5 days at 20 degrees C in the dark" },

        { marks:0, desc:"(j) Impure benzoic acid: lower melting point, broader range (bonus)",
          accept:[
            {all:["lower","melting point|mp"]},
            {all:["broader|wider|less sharp","range|melting"]},
            {all:["impure"],near:[["impure","lower|broader|wider|depress",6]]}
          ],
          bonus:1,
          hit:"Impure sample has a lower melting point and broader melting range",
          miss:"Impure benzoic acid has a LOWER melting point and a BROADER (less sharp) melting range than pure" },

        { marks:1, desc:"(k) Oxidation numbers and identifies nitrogen as reduced",
          accept:[
            {all:["nitrogen|N"],near:[["nitrogen|N","reduced|reduction|gain",6]]},
            {all:["+5","+2"],near:[["+5","NO3|nitrate",6],["+2","NO",6]]},
            {all:["copper|Cu"],near:[["copper|Cu","oxidised|oxidation|0|+2",6]]}
          ],
          hit:"N is reduced (+5 in NO3- to +2 in NO). Cu is oxidised (0 to +2)",
          miss:"N: +5 in NO3- to +2 in NO (REDUCED, gained electrons). Cu: 0 to +2 (oxidised). Element reduced = NITROGEN" },

        { marks:0, desc:"(l) Fractional distillation of air or polymer identification (bonus)",
          accept:[
            {all:["fractional distillation|liquefied air"],near:[["fractional distillation|liquefied","air|liquid|nitrogen|oxygen",6]]},
            {all:["nitrogen|N2","boil|-196"],near:[["nitrogen|N2","first|lower|boil",6]]},
            {all:["polystyrene|polyphenylethene|polypropene|polypropylene"]}
          ],
          hit:"Correct answer for option A (fractional distillation) or B (polymer identification)",
          miss:"A: Fractional distillation of LIQUEFIED AIR — N2 boils off first (-196C), then O2 (-183C). B: Polystyrene (from X) and polypropylene (from Y)" }
      ]
    },

    5: {
      totalMarks: 10, topic: "Atomic Structure – Bromine Isotopes, Orbitals & Atomic Radius",
      points: [
        { marks:1, desc:"Names the mass spectrometer",
          accept:[
            {all:["mass spectrometer|mass spectroscopy|mass spec"]}
          ],
          hit:"Correct — mass spectrometer",
          miss:"A MASS SPECTROMETER is used to determine isotope abundance" },

        { marks:1, desc:"Compares nuclei of Br-79 and Br-81 (same protons, different neutrons)",
          accept:[
            {all:["same","proton|35"],near:[["same","proton|35",4]]},
            {all:["different","neutron|44|46"],near:[["different","neutron|44|46",4]]},
            {all:["isotope"],near:[["isotope","same proton|different neutron|same element",8]]}
          ],
          hit:"Both have 35 protons; Br-79 has 44 neutrons, Br-81 has 46 neutrons",
          miss:"Both have 35 PROTONS (same element). Br-79 has 44 neutrons, Br-81 has 46 neutrons — same protons, different neutrons = ISOTOPES" },

        { marks:1, desc:"Explains relative atomic mass (weighted average compared to C-12)",
          accept:[
            {all:["average|weighted"],near:[["average|weighted","mass|isotope|abundance",6]]},
            {all:["carbon-12|c-12|12c"],near:[["carbon-12|c-12|12c","one-twelfth|1/12|compare|relative",6]]},
            {all:["relative atomic mass"],near:[["relative","average|weighted",6]]}
          ],
          hit:"Weighted average mass compared to 1/12 the mass of C-12",
          miss:"The WEIGHTED AVERAGE mass of an atom based on isotope abundances, compared to 1/12 the mass of a CARBON-12 atom" },

        { marks:1, desc:"Calculates relative atomic mass of Br = 79.99",
          accept:[
            {num:[79.99,80]},
            {all:["50.69","79"],near:[["50.69","79",4]]},
            {all:["49.31","81"],near:[["49.31","81",4]]}
          ],
          hit:"Relative atomic mass = 79.99",
          miss:"(50.69 x 79) + (49.31 x 81) = 7998.62. Divide by 100 = 79.99" },

        { marks:1, desc:"Defines atomic orbital (region of high probability of finding an electron)",
          accept:[
            {all:["region|volume|space|area"],near:[["region|volume|space|area","probability|likely|find|electron",8]]},
            {all:["probability"],near:[["probability","electron|finding",6]]},
            {all:["orbital"],near:[["orbital","region|probability|wave",6]]}
          ],
          hit:"A region in space where there is a high probability of finding an electron",
          miss:"An atomic orbital is a REGION IN SPACE around the nucleus where there is a HIGH PROBABILITY of finding an electron" },

        { marks:1, desc:"Draws/describes the 1s orbital shape as a sphere",
          accept:[
            {all:["sphere|spherical|circle|circular"]},
            {all:["1s"],near:[["1s","sphere|spherical|round",6]]}
          ],
          hit:"Correct — the 1s orbital is spherical",
          miss:"The lowest energy orbital (1s) is SPHERICAL in shape" },

        { marks:1, desc:"States maximum 2 electrons in a single p-orbital",
          accept:[
            {num:[2]},
            {all:["2|two"],near:[["2|two","electron|maximum|max",4]]}
          ],
          hit:"Maximum of 2 electrons in a single p-orbital",
          miss:"A single p-orbital holds a MAXIMUM of 2 electrons (with opposite spins)" },

        { marks:1, desc:"Explains Hund's Rule — fill orbitals singly first, same spin",
          accept:[
            {all:["singly|single|one"],near:[["singly|single|one","first|before|pair",6]]},
            {all:["same","spin"],near:[["same","spin","pair",8]]},
            {phrase:"hund"},
            {all:["parallel"],near:[["parallel","spin|fill|singly",6]]}
          ],
          hit:"Hund's Rule — orbitals of equal energy are filled singly first with same spin, then paired",
          miss:"HUND'S RULE: Electrons occupy orbitals SINGLY first, all with the SAME SPIN, then pair up" },

        { marks:1, desc:"Explains why Br has a greater radius than Cl — more electron shells",
          accept:[
            {all:["more","shell|energy level|orbit"],near:[["more","shell|energy level","4|bromine|br",10]]},
            {all:["4","shell|level"],near:[["4","shell|level|br|bromine",6]]},
            {all:["3","shell|level"],near:[["3","shell|level|cl|chlorine",6]]},
            {all:["bigger|larger|greater"],near:[["bigger|larger|greater","shell|level|radius",6]]}
          ],
          hit:"Bromine has more electron shells (4 vs 3) so it is larger",
          miss:"Bromine has MORE ENERGY LEVELS (4 shells) than chlorine (3 shells). More shells = bigger atom" },

        { marks:1, desc:"Explains why Br has a smaller radius than Se — greater nuclear charge, same period",
          accept:[
            {all:["nuclear charge|proton|atomic number"],near:[["nuclear charge|proton","greater|more|higher|stronger",6]]},
            {all:["same","period|shell|level"],near:[["same","period|shell|level|4",6]]},
            {all:["pull|attract"],near:[["pull|attract","electron|tighter|closer|inward",6]]}
          ],
          hit:"Same period but Br has more protons pulling electrons in more tightly",
          miss:"Br has a GREATER NUCLEAR CHARGE than Se (same number of shells in period 4), so electrons are pulled in more tightly → SMALLER radius" }
      ]
    },

    6: {
      totalMarks: 10, topic: "Fuels, Fractional Distillation & Thermochemistry (Hydrazine)",
      points: [
        { marks:1, desc:"Defines saturated hydrocarbon — only single bonds between carbons",
          accept:[
            {all:["single","bond|c-c"],near:[["single","bond|c-c|carbon",4]]},
            {all:["no","double|triple|c=c|multiple"],near:[["no","double|triple|c=c|multiple","bond",6]]},
            {all:["saturated"],near:[["saturated","single|no double",6]]}
          ],
          hit:"Only single bonds between carbon atoms (no C=C or triple bonds)",
          miss:"A SATURATED hydrocarbon contains ONLY SINGLE BONDS between carbon atoms (no C=C double or triple bonds)" },

        { marks:1, desc:"Describes fractional distillation to obtain refinery gas",
          accept:[
            {all:["column|tower"],near:[["column|tower","temperature|fractiona|heated|tray",8]]},
            {all:["temperature"],near:[["temperature","decrease|lower|gradient|top|bottom",6]]},
            {all:["top|lightest|lowest boiling"],near:[["top|lightest|lowest boiling","refinery gas|gas|fraction",6]]},
            {all:["boiling point"],near:[["boiling point","low|different|separate",6]]}
          ],
          hit:"Good description of fractional distillation",
          miss:"Crude oil heated, vapours rise through a fractionating column. Temperature decreases bottom to top. Refinery gas (lowest boiling point) exits at the TOP" },

        { marks:1, desc:"Identifies LPG components: propane and butane",
          accept:[
            {all:["propane","butane"]},
            {all:["c3h8","c4h10"]},
            {all:["propane|c3h8"]},
            {all:["butane|c4h10"]}
          ],
          hit:"LPG = propane (C3H8) and butane (C4H10)",
          miss:"The two major components of LPG are PROPANE (C3H8) and BUTANE (C4H10)" },

        { marks:1, desc:"Names the process: isomerisation",
          accept:[
            {all:["isomerisation|isomerization"]},
            {all:["reform"]}
          ],
          hit:"Correct — isomerisation",
          miss:"The process is ISOMERISATION — same molecular formula (C8H18) but different structure (branched)" },

        { marks:1, desc:"Identifies H2 as inorganic co-product of hexane to cyclohexane",
          accept:[
            {all:["hydrogen|h2"]},
            {all:["dehydrogenat"]},
            {all:["h2"],near:[["h2","released|formed|produced|co-product",6]]}
          ],
          hit:"Hydrogen gas (H2) is released",
          miss:"The inorganic co-product is HYDROGEN GAS (H2) — a dehydrogenation/reforming reaction releases H2 when a straight chain forms a ring" },

        { marks:1, desc:"Defines heat of combustion (heat released when 1 mole reacts with excess O2)",
          accept:[
            {all:["one mole|1 mole|mole"],near:[["one mole|1 mole|mole","combust|burn|oxygen|react",6]]},
            {all:["complete|excess","oxygen|o2"]},
            {all:["heat","released|evolved|given"],near:[["heat","released|evolved|given","combust",8]]}
          ],
          hit:"Heat released when one mole reacts completely with excess oxygen",
          miss:"The heat RELEASED when ONE MOLE of a substance reacts COMPLETELY with EXCESS OXYGEN (under standard conditions)" },

        { marks:1, desc:"Names the bomb calorimeter",
          accept:[
            {all:["bomb calorimeter|bomb calorimet"]}
          ],
          hit:"Correct — bomb calorimeter",
          miss:"A BOMB CALORIMETER measures heat of combustion accurately" },

        { marks:1, desc:"States two industrial methods for producing H2", group:"h2_methods_q6",
          accept:[
            {all:["steam","reform"],near:[["steam","reform|methane|natural gas|ch4",6]]},
            {all:["electrolysis"],near:[["electrolysis","water|h2o",6]]},
            {all:["cracking"],near:[["cracking","hydrocarbon|alkane|petroleum",6]]},
            {phrase:["water gas","shift reaction"]},
            {all:["ch4","h2o"],near:[["ch4","h2o|steam",4]]}
          ],
          hit:"Valid industrial method for producing hydrogen",
          miss:"(1) Steam reforming of natural gas (CH4 + H2O -> CO + 3H2). (2) Electrolysis of water (2H2O -> 2H2 + O2)" },

        { marks:2, desc:"Calculates heat change using Hess's Law: -241.4 kJ",
          accept:[
            {num:[-241.4,-241]},
            {all:["241"]},
            {all:["hess"],near:[["hess","law|products|reactants",6]]},
            {all:["exothermic|negative"],near:[["exothermic|negative","241|delta h|heat",8]]}
          ],
          hit:"Correct: delta H = -241.4 kJ (exothermic)",
          miss:"Products: (+50.6) + 2(-285.8) = -521.0. Reactants: 2(-45.9) + (-187.8) = -279.6. Delta H = -521.0 - (-279.6) = -241.4 kJ (exothermic)" }
      ]
    },

    7: {
      totalMarks: 10, topic: "Acids, Bases, pH Calculations & Indicators",
      points: [
        { marks:1, desc:"Defines acid as proton (H+) donor, base as proton (H+) acceptor (Bronsted-Lowry)",
          accept:[
            {all:["acid","proton|h+","donor|donate"]},
            {all:["base","proton|h+","acceptor|accept"]},
            {phrase:"bronsted"}
          ],
          hit:"Acid = proton donor, Base = proton acceptor (Bronsted-Lowry)",
          miss:"An ACID is a PROTON (H+) DONOR. A BASE is a PROTON (H+) ACCEPTOR (Bronsted-Lowry theory)" },

        { marks:1, desc:"Distinguishes strong acid (fully dissociates) from weak acid (partially dissociates)",
          accept:[
            {all:["strong","fully|complete|100%"],near:[["strong","fully|complete|100%|dissociat",6]]},
            {all:["weak","partially|partial|not fully|incomplet"],near:[["weak","partially|partial|not fully|incomplet|dissociat",6]]},
            {all:["equilibrium"],near:[["equilibrium","left|favour|reactant",6]]}
          ],
          hit:"Strong acid fully dissociates; weak acid only partially dissociates",
          miss:"A STRONG ACID FULLY DISSOCIATES in water (good proton donor). A WEAK ACID PARTIALLY DISSOCIATES (equilibrium lies to the left)" },

        { marks:1, desc:"Defines conjugate acid-base pair — differ by one proton",
          accept:[
            {all:["differ","one|1|single","proton|h+"]},
            {all:["conjugate"],near:[["conjugate","pair|acid|base|proton|h+",6]]},
            {all:["donate|lose"],near:[["donate|lose","proton|h+","conjugate|base",10]]}
          ],
          hit:"A conjugate pair consists of two species differing by one proton",
          miss:"A conjugate acid-base pair = two species that DIFFER BY ONE PROTON (H+). When an acid donates H+, it becomes its conjugate base" },

        { marks:1, desc:"Identifies conjugate pairs in HCO3-/H2CO3 and H2O/OH-",
          accept:[
            {all:["hco3","h2co3"],near:[["hco3","h2co3","pair|conjugate",8]]},
            {all:["h2o","oh-|oh"],near:[["h2o","oh-|oh","pair|conjugate",8]]},
            {all:["pair 1|pair 2|pair"]}
          ],
          hit:"Pair 1: HCO3-/H2CO3. Pair 2: H2O/OH-",
          miss:"Pair 1: HCO3- (base) and H2CO3 (conjugate acid). Pair 2: H2O (acid) and OH- (conjugate base)" },

        { marks:1, desc:"Defines pH = -log[H+]",
          accept:[
            {all:["log|logarithm"],near:[["log|logarithm","h+|hydrogen|h3o+|concentration",6]]},
            {all:["negative","log"],near:[["negative","log","h+|hydrogen",6]]},
            {phrase:["-log","pH"]}
          ],
          hit:"pH = -log10[H+]",
          miss:"pH = -log10[H+] (the negative logarithm of the hydrogen ion concentration in mol/L)" },

        { marks:1, desc:"Calculates [H3O+] for pH 1.4 = 0.0398 M",
          accept:[
            {num:[0.0398,0.04]},
            {all:["10","-1.4"],near:[["10","-1.4",4]]},
            {phrase:"10^(-1.4)"}
          ],
          hit:"[H+] = 10^(-1.4) = 0.0398 mol/L",
          miss:"[H+] = 10^(-pH) = 10^(-1.4) = 0.0398 mol/L" },

        { marks:1, desc:"Calculates pH of weak acid = 2.66",
          accept:[
            {num:[2.66,2.7]},
            {all:["ka","c|concentration"],near:[["ka","c|concentration|0.015|3.2",8]]},
            {phrase:["sqrt","ka"]},
            {all:["2.19"],near:[["2.19","10",4]]}
          ],
          hit:"pH = -log(sqrt(Ka x c)) = 2.66",
          miss:"[H+] = sqrt(Ka x c) = sqrt(3.2x10^-4 x 0.015) = sqrt(4.8x10^-6) = 2.19x10^-3. pH = -log(2.19x10^-3) = 2.66" },

        { marks:1, desc:"Writes Kw expression and calculates pH of pure water at 60C = 6.5",
          accept:[
            {all:["kw"],near:[["kw","h+|oh-|product|water",6]]},
            {num:[6.5]},
            {all:["3.1"],near:[["3.1","10^-7|10-7",6]]},
            {all:["neutral"],near:[["neutral","not|still|6.5|below 7",6]]}
          ],
          hit:"Kw = [H+][OH-]. At 60C: [H+] = sqrt(9.61x10^-14) = 3.1x10^-7. pH = 6.5 (still neutral)",
          miss:"Kw = [H+][OH-]. [H+] = sqrt(9.61x10^-14) = 3.1x10^-7. pH = -log(3.1x10^-7) = 6.5. Still NEUTRAL because [H+]=[OH-]" },

        { marks:1, desc:"Explains indicator colour in strong base — blue (equilibrium shifts right)",
          accept:[
            {all:["blue"],near:[["blue","base|alkaline|high ph",6]]},
            {all:["a-|anion"],near:[["a-|anion","blue|more|excess|shift",6]]},
            {all:["shift|le chatelier"],near:[["shift|le chatelier","right|product|forward|a-",8]]}
          ],
          hit:"Blue — in strong base, equilibrium shifts right, more A- (blue form) present",
          miss:"BLUE. In a strong base, equilibrium shifts RIGHT (Le Chatelier — base removes H3O+). More A- (blue form) is present" },

        { marks:1, desc:"Explains suitability of indicator for strong acid/strong base titration",
          accept:[
            {all:["steep|vertical|sharp"],near:[["steep|vertical|sharp","portion|region|curve|jump|change",6]]},
            {all:["4.2","5.4"],near:[["4.2","5.4","range|within|steep|curve",10]]},
            {all:["equivalence|end point"],near:[["equivalence|end point","range|within|fall|steep",8]]},
            {all:["suitable|yes"],near:[["suitable|yes","range|within|steep|strong",8]]}
          ],
          hit:"Yes — the 4.2-5.4 range falls within the steep portion of the pH curve at the equivalence point",
          miss:"YES, suitable. The indicator range (4.2-5.4) falls within the STEEP VERTICAL PORTION of the pH curve at the equivalence point of a strong acid/strong base titration" }
      ]
    },

    8: {
      totalMarks: 10, topic: "Organic Reaction Scheme – Ethanal, Ethanol & Esterification",
      points: [
        { marks:1, desc:"Identifies reaction types: C=substitution, B=oxidation, A=reduction",
          accept:[
            {all:["substitution"],near:[["substitution","c|ester|esterification",6]]},
            {all:["oxidation"],near:[["oxidation","b|ethanal|ethanoic",6]]},
            {all:["reduction"],near:[["reduction","a|ethanal|ethanol",6]]}
          ],
          hit:"C = substitution, B = oxidation, A = reduction",
          miss:"A = REDUCTION (ethanal to ethanol, adding H). B = OXIDATION (ethanal to ethanoic acid, adding O). C = SUBSTITUTION (esterification — OH replaced by OR)" },

        { marks:1, desc:"Names ethanal's homologous series as aldehyde",
          accept:[
            {all:["aldehyde"]},
            {all:["-cho"],near:[["-cho","functional|group",6]]}
          ],
          hit:"Correct — aldehyde (functional group -CHO)",
          miss:"Ethanal belongs to the ALDEHYDE homologous series (functional group -CHO)" },

        { marks:1, desc:"States colour change with Fehling's: blue to red/brick-red",
          accept:[
            {all:["blue","red|brick"],near:[["blue","red|brick",6]]},
            {all:["fehling"],near:[["fehling","blue|red|brick|precipitate|cu2o",8]]},
            {all:["cu2o"],near:[["cu2o","red|brick|precipitate",6]]}
          ],
          hit:"Blue to brick-red precipitate (Cu2O)",
          miss:"BLUE to RED (brick-red precipitate of Cu2O). Only aldehydes give a positive Fehling's test" },

        { marks:1, desc:"Identifies reagent (H2) and catalyst (Ni) for ethanal to ethanol",
          accept:[
            {all:["hydrogen|h2"],near:[["hydrogen|h2","nickel|ni|catalyst|reagent",8]]},
            {all:["nickel|ni"],near:[["nickel|ni","catalyst",4]]},
            {all:["catalytic hydrogenation|hydrogenat"]}
          ],
          hit:"Reagent: H2, Catalyst: Ni (catalytic hydrogenation)",
          miss:"Reagent: HYDROGEN GAS (H2). Catalyst: NICKEL (Ni). This is catalytic hydrogenation/reduction" },

        { marks:1, desc:"Draws ethyl ethanoate structure with ester linkage",
          accept:[
            {all:["ester","linkage|link|bond|group|c-o-c"]},
            {all:["ch3","c=o|c(=o)","o","c2h5|ch2ch3"]},
            {all:["ch3cooc2h5|ch3cooch2ch3"]},
            {all:["ethyl ethanoate"],near:[["ethyl ethanoate","structure|draw|formula",6]]}
          ],
          hit:"Correct structure of ethyl ethanoate with ester linkage shown",
          miss:"H3C-C(=O)-O-CH2-CH3 showing the ester linkage (C-O-C)" },

        { marks:1, desc:"Identifies O* position in the ester (single-bonded O from ethanol)",
          accept:[
            {all:["single","bond|o"],near:[["single","bond|o","ester|ethanol|c-o-c",8]]},
            {all:["o*|o-18|oxygen-18"],near:[["o*|o-18|oxygen-18","ester|c-o|ethanol",6]]},
            {all:["from","ethanol|alcohol"],near:[["from","ethanol|alcohol|oh",4]]}
          ],
          hit:"O* is the single-bonded oxygen in the ester linkage (from ethanol)",
          miss:"The O* (oxygen-18) is the SINGLE-BONDED OXYGEN in the ester linkage (C-O*-C). It came from the ETHANOL" },

        { marks:1, desc:"Identifies the bond formed during esterification (C-O* bond)",
          accept:[
            {all:["c-o|c–o"],near:[["c-o|c–o","bond|formed|new",4]]},
            {all:["carbonyl|acid"],near:[["carbonyl|acid","carbon|c","oxygen|o*|ethanol",8]]},
            {all:["new","bond"],near:[["new","bond","c|o|formed",6]]}
          ],
          hit:"The new bond formed is the C-O* bond (carbonyl carbon of acid to O* from ethanol)",
          miss:"The new bond is the C-O* bond between the carbonyl carbon of the acid and the O* from ethanol" },

        { marks:1, desc:"Counts sigma, pi electrons and lone pairs in ethyl ethanoate",
          accept:[
            {num:[26],near:[["26","sigma",6]]},
            {num:[2],near:[["2","pi",6]]},
            {num:[4],near:[["4","lone",6]]},
            {all:["sigma","pi","lone"]}
          ],
          hit:"Sigma: 26 electrons, Pi: 2 electrons, Lone pairs: 4",
          miss:"Sigma bond electrons: 26 (every single bond x 2, plus 1 sigma in C=O). Pi electrons: 2 (one C=O pi bond). Lone pairs: 4 (two on each oxygen)" },

        { marks:1, desc:"Writes balanced equation: 2C2H5OH + 2Na -> 2C2H5ONa + H2",
          accept:[
            {all:["c2h5oh|ethanol","na|sodium"],near:[["c2h5oh|ethanol","na|sodium","h2|hydrogen|c2h5ona|ethoxide",10]]},
            {all:["sodium ethoxide|c2h5ona"]},
            {all:["ethanol","sodium","hydrogen"],near:[["ethanol","sodium","hydrogen",10]]}
          ],
          hit:"2C2H5OH + 2Na -> 2C2H5ONa + H2",
          miss:"2C2H5OH + 2Na -> 2C2H5ONa + H2 (sodium ethoxide and hydrogen gas)" },

        { marks:1, desc:"Explains ethanoate is weaker base than ethoxide due to charge delocalisation",
          accept:[
            {all:["delocalis|resonan|spread|distribut"],near:[["delocalis|resonan|spread|distribut","charge|negative|electron|two oxygen|2 oxygen",8]]},
            {all:["stable|stability"],near:[["stable|stability","ethanoate|ch3coo|charge|delocalis",8]]},
            {all:["localis|one oxygen|single"],near:[["localis|one oxygen|single","ethoxide|c2h5o|charge|stronger",8]]}
          ],
          hit:"Ethanoate is more stable — negative charge delocalised over two oxygens, making it a weaker base",
          miss:"In CH3COO-, the negative charge is DELOCALISED over TWO OXYGENS (more stable, less likely to accept H+, weaker base). In C2H5O-, the charge is LOCALISED on one oxygen (stronger base)" }
      ]
    },

    9: {
      totalMarks: 10, topic: "Chemical Equilibrium – NOBr Decomposition",
      points: [
        { marks:1, desc:"Defines reversible reaction — proceeds in both directions",
          accept:[
            {all:["both","direction|way"]},
            {all:["products","reform|reverse|re-form|back"],near:[["products","reform|reverse|re-form|back|reactants",6]]},
            {all:["forward","reverse"],near:[["forward","reverse","reaction|proceed|occur",8]]},
            {all:["reversible"],near:[["reversible","both|forward|reverse|either",6]]}
          ],
          hit:"A reversible reaction proceeds in both directions",
          miss:"A reversible reaction is one where reactants form products AND products can RE-FORM REACTANTS. Proceeds in BOTH DIRECTIONS" },

        { marks:1, desc:"Explains why concentrations remain constant — rates of forward and reverse reactions equal",
          accept:[
            {all:["rate|speed"],near:[["rate|speed","equal|same|forward|reverse",6]]},
            {all:["forward","reverse","equal|same"],near:[["forward","reverse",6]]},
            {all:["dynamic"],near:[["dynamic","equilibrium|equal|rate",6]]},
            {all:["constant"],near:[["constant","concentration|rate|equal",6]]}
          ],
          hit:"At equilibrium, rates of forward and reverse reactions are equal",
          miss:"At equilibrium, the RATES of the forward and reverse reactions are EQUAL, so all concentrations REMAIN CONSTANT over time" },

        { marks:1, desc:"Calculates initial moles of NOBr = 0.5 mol",
          accept:[
            {num:[0.5]},
            {all:["55","110"],near:[["55","110","moles|mol|divide",8]]},
            {all:["mr|molecular mass"],near:[["mr|molecular mass","110|nobr",6]]}
          ],
          hit:"Initial moles NOBr = 55/110 = 0.5 mol",
          miss:"Mr of NOBr = 14 + 16 + 80 = 110. Moles = 55/110 = 0.5 mol" },

        { marks:1, desc:"Calculates moles of NOBr remaining at equilibrium = 0.110 mol",
          accept:[
            {num:[0.11,0.110]},
            {all:["78%|0.78"],near:[["78%|0.78","decomposed|reacted|consumed",6]]},
            {all:["0.5","0.39"],near:[["0.5","0.39|0.390",6]]}
          ],
          hit:"NOBr remaining = 0.5 - 0.390 = 0.110 mol",
          miss:"78% decomposed = 0.5 x 0.78 = 0.390 mol decomposed. Remaining = 0.5 - 0.390 = 0.110 mol NOBr" },

        { marks:1, desc:"Writes Kc expression correctly",
          accept:[
            {all:["no","br2","nobr"],near:[["no","br2","nobr","kc|expression|equilibrium",10]]},
            {all:["[no]^2|[no]2","[br2]","[nobr]^2|[nobr]2"]},
            {phrase:"[NO]2[Br2]/[NOBr]2"}
          ],
          hit:"Kc = [NO]^2[Br2] / [NOBr]^2",
          miss:"Kc = [NO]^2 [Br2] / [NOBr]^2" },

        { marks:2, desc:"Calculates Kc = 1.2 (with correct equilibrium concentrations)",
          accept:[
            {num:[1.2,1.23,1.22,1.3]},
            {all:["0.195","0.0975","0.055"],near:[["0.195","0.0975","0.055",12]]},
            {all:["0.390","0.195","0.110"],near:[["0.390","0.195","0.110",12]]}
          ],
          hit:"Kc = (0.195)^2 x (0.0975) / (0.055)^2 = 1.2",
          miss:"[NOBr]=0.055M, [NO]=0.195M, [Br2]=0.0975M. Kc = (0.195)^2 x (0.0975) / (0.055)^2 = 0.003707/0.003025 = 1.2" },

        { marks:1, desc:"States Le Chatelier's Principle",
          accept:[
            {all:["change|stress|disturb"],near:[["change|stress|disturb","equilibrium|system|shift|counteract|oppose",8]]},
            {all:["shift"],near:[["shift","oppose|counteract|minimise|reduce|relieve",6]]},
            {phrase:"le chatelier"}
          ],
          hit:"Correct statement of Le Chatelier's Principle",
          miss:"When a system at equilibrium is subjected to a CHANGE, the equilibrium SHIFTS in the direction that COUNTERACTS that change" },

        { marks:1, desc:"Increasing pressure shifts left — fewer moles of gas on left (2 vs 3)",
          accept:[
            {all:["left|reactant"],near:[["left|reactant","fewer|less|2|moles|gas|shift|pressure",8]]},
            {all:["2","3"],near:[["2","3","moles|gas|mol|side",8]]},
            {all:["decrease|reduce|less"],near:[["decrease|reduce|less","br2|product",6]]}
          ],
          hit:"Equilibrium shifts LEFT (2 mol gas on left vs 3 on right) — Br2 decreases",
          miss:"Moles Br2 DECREASE. Higher pressure shifts equilibrium to the side with FEWER moles of gas: left (2) vs right (3). Shifts LEFT" },

        { marks:1, desc:"Forward reaction is endothermic (Kc increases with temperature)",
          accept:[
            {all:["endothermic"],near:[["endothermic","forward|reaction",6]]},
            {all:["absorb|absorbs"],near:[["absorb|absorbs","heat|energy|temperature",6]]},
            {all:["kc","increase|higher"],near:[["kc","increase|higher","temperature|heat",8]]},
            {all:["le chatelier"],near:[["le chatelier","heat|endothermic|forward|absorb",8]]}
          ],
          hit:"Forward reaction is endothermic — Kc increases with temperature because the system shifts forward to absorb added heat",
          miss:"The forward reaction is ENDOTHERMIC. If Kc increases with temperature, the system shifts FORWARD (endothermic direction) to absorb added heat (Le Chatelier)" }
      ]
    },

    10: {
      totalMarks: 10, topic: "Bonding, Molecular Shape & Electrophilic Addition",
      points: [
        { marks:1, desc:"Predicts polar covalent bond in NF3 using electronegativity difference",
          accept:[
            {all:["polar","covalent"]},
            {all:["electronegativity","difference|0.94"],near:[["electronegativity","difference|0.94|3.98|3.04",6]]},
            {all:["0.4","1.7"],near:[["0.4","1.7","between|range|polar",8]]}
          ],
          hit:"Polar covalent bond (electronegativity difference ~0.94, between 0.4 and 1.7)",
          miss:"Electronegativity difference = 3.98(F) - 3.04(N) = 0.94. Bond type: POLAR COVALENT (between 0.4 and 1.7)" },

        { marks:1, desc:"Draws or describes NF3 dot-and-cross diagram (N central, 3 N-F bonds, 1 lone pair on N)",
          accept:[
            {all:["lone pair|lone","nitrogen|n"],near:[["lone pair|lone","nitrogen|n|central",6]]},
            {all:["3","bond|shared|pair"],near:[["3","bond|shared|pair|n-f|nf",6]]},
            {all:["dot","cross"],near:[["dot","cross","diagram|structure",6]]}
          ],
          hit:"N in centre with 3 N-F shared pairs and 1 lone pair on N",
          miss:"N in centre with 3 N-F shared pairs (dot-and-cross). N has ONE LONE PAIR. Each F has 3 lone pairs" },

        { marks:1, desc:"Shape is pyramidal (VSEPR: 1 lone pair + 3 bonding pairs)",
          accept:[
            {all:["pyramidal|pyramid|trigonal pyramidal"]},
            {all:["lone pair","bonding pair|bond pair"],near:[["lone pair","bonding pair|bond pair|3|three|push|repel",8]]},
            {all:["vsepr"],near:[["vsepr","pyramidal|pyramid|lone",6]]},
            {all:["107"],near:[["107","degree|angle|bond",6]]}
          ],
          hit:"Shape: pyramidal (VSEPR — 1 lone pair + 3 bonding pairs, ~107 degrees)",
          miss:"Shape: PYRAMIDAL. VSEPR: one lone pair and three bonding pairs around N. Lone pair repels more strongly, pushing bonds closer (~107 degrees)" },

        { marks:1, desc:"Names intermolecular force: dipole-dipole",
          accept:[
            {all:["dipole-dipole|dipole dipole"]},
            {all:["polar"],near:[["polar","molecule|force|intermolecular|nf3",6]]},
            {all:["van der waals|london"],near:[["van der waals|london","dipole",6]]}
          ],
          hit:"Dipole-dipole forces (NF3 is a polar molecule)",
          miss:"DIPOLE-DIPOLE forces (NF3 is polar). Van der Waals forces are also present but dipole-dipole is dominant" },

        { marks:1, desc:"Explains BF3 non-polar (symmetrical/planar) vs NF3 polar (pyramidal/lone pair)",
          accept:[
            {all:["bf3","symmetr|planar|trigonal planar|cancel"],near:[["bf3","symmetr|planar|trigonal planar|cancel",6]]},
            {all:["nf3","asymmetr|pyramidal|lone pair|not cancel|do not cancel"],near:[["nf3","asymmetr|pyramidal|lone pair|not cancel|do not cancel",6]]},
            {all:["cancel"],near:[["cancel","dipole|bond|bf3|symmetr",8]]}
          ],
          hit:"BF3 is trigonal planar (dipoles cancel = non-polar). NF3 is pyramidal (lone pair makes it asymmetric, dipoles don't cancel = polar)",
          miss:"BF3 is TRIGONAL PLANAR (symmetrical) — bond dipoles CANCEL exactly = non-polar. NF3 is PYRAMIDAL — lone pair makes it asymmetric, dipoles DON'T CANCEL = polar" },

        { marks:1, desc:"States the pi bond in C=C is broken during electrophilic addition",
          accept:[
            {all:["pi|π","bond|broken|break"]},
            {all:["double bond"],near:[["double bond","broken|break|pi",6]]},
            {all:["sigma"],near:[["sigma","remain|stay|intact",6]]}
          ],
          hit:"The pi bond in the C=C double bond is broken (sigma bond remains)",
          miss:"The PI BOND in the C=C double bond is broken (the sigma bond REMAINS)" },

        { marks:1, desc:"Names species from heterolytic fission of Cl2: Cl+ (electrophile) and Cl- (nucleophile)",
          accept:[
            {all:["cl+","cl-"]},
            {all:["electrophile"],near:[["electrophile","cl+|chlorine|positive",6]]},
            {all:["nucleophile"],near:[["nucleophile","cl-|chlorine|negative",6]]},
            {all:["heterolytic"],near:[["heterolytic","fission|cleavage|break",4]]}
          ],
          hit:"Cl+ (electrophile) and Cl- (nucleophile) from heterolytic fission",
          miss:"Cl+ (ELECTROPHILE) and Cl- (NUCLEOPHILE). Cl2 polarises near the electron-rich C=C: one Cl gets both electrons (Cl-), the other gets none (Cl+)" },

        { marks:1, desc:"Describes carbocation/chloronium ion intermediate",
          accept:[
            {all:["carbocation|carbonium|chloronium"]},
            {all:["intermediate"],near:[["intermediate","positive|charge|ion|cl|carbon",6]]},
            {all:["positive","charge|carbon"],near:[["positive","charge|carbon|ion",4]]}
          ],
          hit:"A carbocation / chloronium ion intermediate forms",
          miss:"A CARBOCATION (or bridged chloronium ion) intermediate forms — Cl+ adds to one carbon, the other carbon carries a positive charge" },

        { marks:1, desc:"Explains formation of 1,2-dichloroethane (Cl- attacks the carbocation)",
          accept:[
            {all:["cl-|chloride|nucleophile"],near:[["cl-|chloride|nucleophile","attack|add|react|positive|carbon|carbocation",8]]},
            {all:["1,2-dichloroethane|clch2ch2cl|dichloroethane"]},
            {all:["addition"],near:[["addition","complete|second|cl-|chloride",6]]}
          ],
          hit:"Cl- attacks the positive carbon, completing addition to form 1,2-dichloroethane",
          miss:"The Cl- ion (nucleophile) ATTACKS the positively charged carbon, adding to it to form 1,2-DICHLOROETHANE (ClCH2CH2Cl)" },

        { marks:1, desc:"HCl is eliminated to form the PVC monomer (chloroethene/vinyl chloride)",
          accept:[
            {all:["hcl|hydrogen chloride"]},
            {all:["eliminate|elimination"],near:[["eliminate|elimination","hcl|hydrogen chloride",6]]},
            {all:["chloroethene|vinyl chloride|ch2=chcl|pvc monomer"]},
            {all:["hcl"],near:[["hcl","eliminated|removed|lost",6]]}
          ],
          hit:"HCl is eliminated to form chloroethene (vinyl chloride, PVC monomer)",
          miss:"HCL (hydrogen chloride) is ELIMINATED to form CHLOROETHENE (vinyl chloride, CH2=CHCl), the monomer for PVC" }
      ]
    },

    11: {
      totalMarks: 10, topic: "Environmental & Applied Chemistry – Water, Heat of Reaction & Radioactivity",
      points: [
        { marks:1, desc:"Defines total hardness = temporary + permanent (all dissolved Ca2+/Mg2+)",
          accept:[
            {all:["temporary","permanent"],near:[["temporary","permanent","hardness|total",6]]},
            {all:["ca2+|calcium","mg2+|magnesium"],near:[["ca2+|calcium","mg2+|magnesium","dissolved|ion",8]]},
            {all:["total hardness"],near:[["total hardness","temporary|permanent|ca|mg",6]]}
          ],
          hit:"Total hardness = temporary + permanent hardness (all dissolved Ca2+ and Mg2+ ions)",
          miss:"TOTAL HARDNESS = TEMPORARY hardness + PERMANENT hardness — all dissolved Ca2+ and Mg2+ ions in the water" },

        { marks:1, desc:"EDTA = ethylenediaminetetraacetic acid",
          accept:[
            {phrase:["ethylenediaminetetraacetic","ethylenediaminetetra-acetic"]},
            {all:["ethylene","diamine","tetra","acetic|acet"]}
          ],
          hit:"Ethylenediaminetetraacetic acid",
          miss:"EDTA = ETHYLENEDIAMINETETRAACETIC ACID" },

        { marks:1, desc:"Method of removing total hardness (ion exchange / deioniser / washing soda / distillation)",
          accept:[
            {all:["ion exchange|ion-exchange"]},
            {all:["deioniser|deionizer"]},
            {all:["washing soda|na2co3|sodium carbonate"]},
            {all:["distillation|distil"]},
            {all:["resin"],near:[["resin","swap|exchange|ca|mg|na",8]]}
          ],
          hit:"Valid method (e.g. ion exchange, deioniser, washing soda)",
          miss:"ION EXCHANGE / deioniser — water passes through a resin that swaps Ca2+/Mg2+ for Na+ ions" },

        { marks:1, desc:"Describes brown ring test for nitrate ions",
          accept:[
            {all:["brown","ring"],near:[["brown","ring","test|interface|form",6]]},
            {all:["iron(ii) sulfate|iron(ii) sulphate|feso4"],near:[["iron(ii) sulfate|iron(ii) sulphate|feso4","sulfuric|sulphuric|h2so4",8]]},
            {all:["feso4","h2so4"]}
          ],
          hit:"Brown ring test: add FeSO4, then concentrated H2SO4 — a brown ring at the interface indicates nitrate",
          miss:"BROWN RING TEST: add iron(II) sulfate (FeSO4), then carefully add concentrated H2SO4. A BROWN RING at the interface indicates nitrate ions" },

        { marks:1, desc:"Names AAS (atomic absorption spectrometry) for measuring lead ions",
          accept:[
            {all:["atomic absorption|aas"]},
            {all:["spectrometry|spectroscopy"],near:[["spectrometry|spectroscopy","atomic|absorption|lead",6]]}
          ],
          hit:"Atomic absorption spectrometry (AAS)",
          miss:"ATOMIC ABSORPTION SPECTROMETRY (AAS) measures lead ion concentration in water" },

        { marks:1, desc:"Calculates NaOCl concentration = 2000 ppm",
          accept:[
            {num:[2000]},
            {all:["2000","ppm|mg/l"]},
            {all:["50,000|50000","25"],near:[["50,000|50000","25","ppm|divide",8]]},
            {all:["10,000|10000","5"],near:[["10,000|10000","5","mg|litre|ppm",8]]}
          ],
          hit:"Concentration = 2000 ppm",
          miss:"1% w/v = 10,000 mg/L. 5 L contains 50,000 mg. Diluted to 25 L: 50,000/25 = 2000 ppm" },

        { marks:1, desc:"Calculates moles of HCl = 0.08 mol and heat produced = 4.57 kJ",
          accept:[
            {num:[0.08]},
            {num:[4.57,4.5696,4.6]},
            {all:["0.08","4.57|4.6|4.5"],near:[["0.08","4.57|4.6|4.5",10]]},
            {all:["160","4.2","6.8"],near:[["160","4.2","6.8",10]]}
          ],
          hit:"Moles = 0.08 mol, q = 0.160 x 4.2 x 6.8 = 4.57 kJ",
          miss:"n = 1.0 x 80/1000 = 0.08 mol. Mass = 160 g = 0.160 kg. q = mcT = 0.160 x 4.2 x 6.8 = 4.57 kJ" },

        { marks:1, desc:"Calculates delta H = -57.12 kJ/mol (exothermic)",
          accept:[
            {num:[-57.12,-57.1,-57]},
            {all:["57"],near:[["57","kj/mol|kj mol|kjmol|exothermic",8]]},
            {all:["4.57|4.6","0.08"],near:[["4.57|4.6","0.08","divide",8]]}
          ],
          hit:"Delta H = -57.12 kJ/mol (exothermic)",
          miss:"delta H = -q/n = -(4.57/0.08) = -57.12 kJ/mol (NEGATIVE = exothermic)" },

        { marks:1, desc:"Radioactivity: Ra-226 alpha decay produces Rn-222 (radon)",
          accept:[
            {all:["rn-222|radon-222|radon"],near:[["rn-222|radon-222|radon","alpha|decay|product|222",6]]},
            {all:["222"],near:[["222","86|radon|rn|alpha",6]]},
            {all:["226","4"],near:[["226","4","222|subtract|alpha",8]]}
          ],
          hit:"Ra-226 -> Rn-222 + He-4 (radon)",
          miss:"Ra-226 -> Rn-222 + He-4. Mass: 226-4=222, Atomic number: 88-2=86 = RADON" },

        { marks:1, desc:"Beta decay of Ra-225 produces Actinium (Ac, Z=89, A=225)",
          accept:[
            {all:["actinium|ac"],near:[["actinium|ac","89|beta|product",6]]},
            {num:[89],near:[["89","atomic|number|proton|actinium|ac",6]]},
            {all:["225"],near:[["225","mass|number|same|unchanged|beta",6]]},
            {all:["neutron"],near:[["neutron","proton|convert|becomes|changes",6]]}
          ],
          hit:"Beta decay: mass 225 (unchanged), Z = 89 = Actinium (Ac)",
          miss:"Mass number = 225 (UNCHANGED in beta decay). Atomic number = 88+1 = 89 (neutron converts to proton). Element = ACTINIUM (Ac)" }
      ]
    }

  }
};

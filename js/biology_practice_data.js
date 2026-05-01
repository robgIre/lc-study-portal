/* LC Biology Higher Level 2025 — Structured marking points for practice marking */
var BIO_MARKING = {
  "2025": {

    1: {
      totalMarks: 10, topic: "Nutrition",
      points: [
        { marks:2, desc:"General formula for carbohydrates",
          accept:[
            {phrase:["cx(h2o)y","cx(h₂o)y","cn(h2o)n"]},
            {all:["carbon","hydrogen","oxygen"],near:[["hydrogen","oxygen","ratio|2:1|two to one",10]]},
            {all:["c","h2o"]},
            {phrase:["c6h12o6","c₆h₁₂o₆","c6(h2o)6"]}
          ],
          hit:"Correct: Cx(H2O)y — carbon, hydrogen and oxygen in 2:1 H:O ratio",
          miss:"General formula is Cx(H2O)y. Carbon, hydrogen, oxygen with H:O ratio of 2:1" },
        { marks:2, desc:"Four chemical elements in all proteins (CHON)",
          accept:[
            {all:["carbon","hydrogen","oxygen","nitrogen"]},
            {phrase:["c h o n","chon","c, h, o, n"]},
            {all:["c","h","o","n"]}
          ],
          hit:"Correct: Carbon, Hydrogen, Oxygen, Nitrogen (CHON)",
          miss:"The four elements in all proteins are Carbon (C), Hydrogen (H), Oxygen (O), Nitrogen (N) — remember CHON" },
        { marks:1, desc:"One structural role of proteins",
          accept:[
            {all:["muscle|tendon|ligament|hair|skin|nail|collagen|keratin|bone|cartilage"]},
            {all:["structural"],near:[["structural","support|shape|framework",6]]},
            {all:["protect|support|shape"]}
          ],
          hit:"Good structural role identified",
          miss:"Structural roles include: muscles, tendons, ligaments, hair, skin, nails (collagen, keratin)" },
        { marks:1, desc:"Small subunits of protein (amino acids)",
          accept:[
            {phrase:"amino acid"},
            {all:["amino"]}
          ],
          hit:"Correct: amino acids",
          miss:"Proteins are made of AMINO ACIDS joined by peptide bonds" },
        { marks:2, desc:"One water-soluble vitamin",
          accept:[
            {phrase:["vitamin b","vitamin c","vit b","vit c","b1","b2","b6","b12","ascorbic acid","riboflavin","thiamine","niacin","folic acid","folate","biotin","pantothenic"]},
            {all:["b|c"],near:[["b|c","vitamin|water",4]]}
          ],
          hit:"Correct water-soluble vitamin identified",
          miss:"Water-soluble vitamins are B group (B1, B2, B6, B12) and Vitamin C. Fat-soluble are A, D, E, K" },
        { marks:2, desc:"One trace element found in food",
          accept:[
            {phrase:["copper","iron","zinc","iodine","manganese","cobalt","fluorine","selenium","molybdenum","chromium"]},
            {all:["cu|fe|zn|i|mn|co|se"]}
          ],
          hit:"Correct trace element identified",
          miss:"Trace elements include: Iron (Fe), Copper (Cu), Zinc (Zn), Iodine (I), Manganese (Mn)" }
      ]
    },

    2: {
      totalMarks: 10, topic: "Plant Root Structure",
      points: [
        { marks:2, desc:"Names structure X as root hair",
          accept:[
            {phrase:"root hair"},
            {all:["root","hair"]}
          ],
          hit:"Correct: X is a root hair",
          miss:"Structure X is a ROOT HAIR — an extension of an epidermal cell" },
        { marks:1, desc:"Function of root hair: absorption of water/minerals",
          accept:[
            {all:["absorb|absorption|uptake|take in"],near:[["absorb|absorption|uptake","water|mineral|nutrient|ion",6]]},
            {all:["surface area"],near:[["surface area","absorb|water|mineral|increase",8]]}
          ],
          hit:"Correct function: absorption of water and minerals",
          miss:"Root hair function: ABSORPTION of water and minerals from the soil. Increases surface area" },
        { marks:2, desc:"Names tissue Y as vascular tissue",
          accept:[
            {phrase:["vascular tissue","vascular bundle","vascular cylinder"]},
            {all:["vascular"]},
            {all:["xylem","phloem"]}
          ],
          hit:"Correct: Y is vascular tissue",
          miss:"Tissue Y is VASCULAR TISSUE (contains xylem and phloem)" },
        { marks:1, desc:"Function of vascular tissue: transport",
          accept:[
            {all:["transport|carry|conduct|move"],near:[["transport|carry|conduct","water|mineral|sugar|food|nutrient|sap",6]]},
            {all:["xylem"],near:[["xylem","water|mineral",4]]},
            {all:["phloem"],near:[["phloem","sugar|food|sucrose",4]]}
          ],
          hit:"Correct: vascular tissue transports water, minerals, and food",
          miss:"Function: TRANSPORT — xylem carries water/minerals upward, phloem carries sugars up and down" },
        { marks:2, desc:"Tissue Z identified as meristematic tissue (rapid mitosis)",
          accept:[
            {phrase:["meristematic","meristem","apical meristem"]},
            {all:["merist"]}
          ],
          hit:"Correct: Z is meristematic tissue — region of rapid cell division",
          miss:"Tissue Z is MERISTEMATIC tissue — cells that undergo rapid mitosis (cell division) at root tip" },
        { marks:2, desc:"Drawing of transverse section with correct structure",
          accept:[
            {all:["circle|round|cross"],near:[["circle|round|cross","section|draw|diagram",6]]},
            {all:["vascular","centre|center|middle|central"]},
            {all:["epidermis|dermal","cortex|ground","vascular"]},
            {all:["label"],near:[["label","dermal|vascular|ground|epidermis|cortex",6]]}
          ],
          hit:"Good transverse section showing vascular tissue in centre",
          miss:"Draw a circle with: outer epidermis (dermal), cortex (ground tissue), central vascular cylinder. Label at least two tissues" }
      ]
    },

    3: {
      totalMarks: 10, topic: "Respiration",
      points: [
        { marks:1, desc:"Names organelle as mitochondrion",
          accept:[
            {phrase:["mitochondrion","mitochondria"]},
            {all:["mitochond"]}
          ],
          hit:"Correct: mitochondrion — the powerhouse of the cell",
          miss:"The organelle is a MITOCHONDRION (plural: mitochondria)" },
        { marks:1, desc:"Names stage 2 cycle as Krebs cycle",
          accept:[
            {phrase:["krebs cycle","krebs","citric acid cycle","tca cycle"]},
            {all:["krebs"]}
          ],
          hit:"Correct: Krebs cycle (also called citric acid cycle)",
          miss:"Stage 2 of aerobic respiration is the KREBS CYCLE (citric acid cycle)" },
        { marks:2, desc:"ATP stands for adenosine triphosphate",
          accept:[
            {phrase:"adenosine triphosphate"},
            {all:["adenosine","triphosphate"]},
            {all:["adenosine","tri","phosphate"]}
          ],
          hit:"Correct: Adenosine Triphosphate",
          miss:"ATP = ADENOSINE TRIPHOSPHATE — the energy currency of cells" },
        { marks:2, desc:"Function of NAD+: carries electrons/hydrogen",
          accept:[
            {all:["carry|carries|carrier|transport|accept"],near:[["carry|carries|carrier|transport|accept","electron|hydrogen|proton|h+",6]]},
            {phrase:["electron carrier","hydrogen carrier","electron transport"]},
            {all:["nad","electron|hydrogen|proton"]}
          ],
          hit:"Correct: NAD+ is an electron/hydrogen carrier",
          miss:"NAD+ CARRIES high-energy ELECTRONS (and protons) to the electron transport chain" },
        { marks:2, desc:"Condition for anaerobic respiration: absence of oxygen",
          accept:[
            {all:["no|without|absence|lack|low"],near:[["no|without|absence|lack|low","oxygen|o2|o₂",5]]},
            {phrase:["without oxygen","no oxygen","absence of oxygen","lack of oxygen","anaerobic"]},
            {all:["oxygen","not available|absent|depleted|unavailable"]}
          ],
          hit:"Correct: anaerobic respiration occurs in the absence of oxygen",
          miss:"Anaerobic respiration occurs when there is NO OXYGEN (or a lack of oxygen)" },
        { marks:1, desc:"Where anaerobic respiration occurs: cytosol/cytoplasm",
          accept:[
            {phrase:["cytosol","cytoplasm"]},
            {all:["cytosol|cytoplasm"]}
          ],
          hit:"Correct: anaerobic respiration occurs in the cytosol (cytoplasm)",
          miss:"Anaerobic respiration occurs in the CYTOSOL (cytoplasm), not in mitochondria" },
        { marks:1, desc:"Product of anaerobic respiration",
          accept:[
            {phrase:["lactic acid","ethanol","alcohol","lactate","carbon dioxide"]},
            {all:["lactic"]},
            {all:["ethanol|alcohol"],near:[["ethanol|alcohol","yeast|ferment|anaerobic",8]]}
          ],
          hit:"Correct product of anaerobic respiration",
          miss:"Products: LACTIC ACID (in animals) or ETHANOL + CO2 (in yeast/plants)" }
      ]
    },

    4: {
      totalMarks: 10, topic: "Cell Membrane & Structure",
      points: [
        { marks:1, desc:"Names X as phospholipid",
          accept:[
            {phrase:["phospholipid","phospho lipid","phospho-lipid"]},
            {all:["phospholipid"]}
          ],
          hit:"Correct: X is a phospholipid",
          miss:"X is a PHOSPHOLIPID — forms the bilayer of the cell membrane" },
        { marks:1, desc:"Names Y as protein",
          accept:[
            {all:["protein"]},
            {phrase:["channel protein","carrier protein","integral protein","membrane protein","glycoprotein"]}
          ],
          hit:"Correct: Y is a protein",
          miss:"Y is a PROTEIN (embedded in or on the phospholipid bilayer)" },
        { marks:2, desc:"Function of cell membrane: selective/semi-permeability",
          accept:[
            {phrase:["semi-permeable","semi permeable","selectively permeable","selective permeability","partially permeable"]},
            {all:["control"],near:[["control","substance|entry|exit|pass|movement|what",6]]},
            {all:["regulate"],near:[["regulate","substance|entry|movement|pass",6]]},
            {all:["allow|permit"],near:[["allow|permit","some|certain|selected|small",4],["block|prevent|stop","large|other",6]]}
          ],
          hit:"Correct: cell membrane controls what passes in and out (selectively permeable)",
          miss:"Cell membrane is SELECTIVELY PERMEABLE — controls what substances enter and leave the cell" },
        { marks:1, desc:"Prokaryotic: cells without membrane-bound organelles",
          accept:[
            {phrase:["prokaryotic","prokaryote"]},
            {all:["prokary"]}
          ],
          hit:"Correct: prokaryotic cells lack membrane-bound organelles",
          miss:"PROKARYOTIC cells have no membrane-bound organelles (e.g. bacteria)" },
        { marks:1, desc:"Eukaryotic: cells with membrane-bound organelles",
          accept:[
            {phrase:["eukaryotic","eukaryote"]},
            {all:["eukary"]}
          ],
          hit:"Correct: eukaryotic cells have membrane-bound organelles",
          miss:"EUKARYOTIC cells have membrane-bound organelles (e.g. animals, plants, fungi)" },
        { marks:2, desc:"Plant cell sketch with membrane and wall labelled",
          accept:[
            {all:["cell wall","cell membrane"]},
            {all:["wall","membrane"],near:[["wall","outside|outer|external",6]]},
            {all:["membrane"],near:[["membrane","inside|inner|internal","wall",8]]},
            {all:["wall","membrane","label|draw|sketch"]}
          ],
          hit:"Good: plant cell showing cell wall (outer) and cell membrane (inner)",
          miss:"Plant cell has CELL WALL (outer, rigid, cellulose) and CELL MEMBRANE (inner, selectively permeable)" },
        { marks:2, desc:"Function of plant cell wall",
          accept:[
            {all:["shape|support|rigid|structure"],near:[["shape|support|rigid","cell|plant|maintain|give|provide",6]]},
            {all:["protect|protection"]},
            {all:["prevent"],near:[["prevent","burst|lysis|swell",6]]},
            {all:["turgor"],near:[["turgor","pressure|support|maintain",6]]},
            {phrase:"fully permeable"}
          ],
          hit:"Good function: provides shape/support/protection or prevents bursting",
          miss:"Cell wall gives SHAPE and SUPPORT to plant cells. Also prevents the cell from BURSTING (lysis) when water enters by osmosis" }
      ]
    },

    5: {
      totalMarks: 10, topic: "Bioprocessing & Growth Curves",
      points: [
        { marks:2, desc:"Names equipment as bioreactor/fermenter",
          accept:[
            {phrase:["bioreactor","fermenter","fermentor","bio-reactor"]},
            {all:["bioreactor|fermenter"]}
          ],
          hit:"Correct: bioreactor (fermenter)",
          miss:"The equipment is a BIOREACTOR (also called a fermenter)" },
        { marks:2, desc:"Two factors controlled (not nutrients)", group:"factors_q5",
          accept:[
            {all:["ph"]},
            {all:["temperature|temp"]},
            {all:["pressure"]},
            {all:["oxygen|o2|aeration"]},
            {all:["stirring|agitation|mixing"]},
            {all:["sterile|sterility|contamination"]}
          ],
          hit:"Correct controlled factor identified",
          miss:"Factors controlled: pH, temperature, pressure, oxygen levels, stirring rate" },
        { marks:2, desc:"Second controlled factor", group:"factors_q5",
          accept:[
            {all:["ph"]},
            {all:["temperature|temp"]},
            {all:["pressure"]},
            {all:["oxygen|o2|aeration"]},
            {all:["stirring|agitation|mixing"]},
            {all:["sterile|sterility|contamination"]}
          ],
          hit:"Good second factor",
          miss:"You needed a second DISTINCT factor: pH, temperature, pressure, oxygen, stirring rate" },
        { marks:1, desc:"Stage X: Log phase (exponential growth)",
          accept:[
            {phrase:["log phase","log growth","exponential phase","exponential growth"]},
            {all:["log|exponential"]}
          ],
          hit:"Correct: Stage X is the log (exponential) phase — rapid growth",
          miss:"Stage X is the LOG PHASE (exponential growth) — bacteria multiply rapidly" },
        { marks:1, desc:"Stage Y: Stationary phase",
          accept:[
            {phrase:["stationary phase","stationary"]},
            {all:["stationary"]}
          ],
          hit:"Correct: Stage Y is the stationary phase",
          miss:"Stage Y is the STATIONARY PHASE — birth rate equals death rate, population plateaus" },
        { marks:1, desc:"Type of food processing: continuous culture",
          accept:[
            {phrase:["continuous culture","continuous flow","continuous process","continuous fermentation"]},
            {all:["continuous"]}
          ],
          hit:"Correct: continuous culture",
          miss:"This is CONTINUOUS culture — fresh nutrients are added constantly to maintain population" },
        { marks:1, desc:"Line drops when nutrients run out (death phase)",
          accept:[
            {all:["drop|fall|decrease|decline|down|crash"]},
            {phrase:["death phase","decline phase"]},
            {all:["death|die|dying"],near:[["death|die","phase|stage|population",6]]},
            {all:["line","down|drop|decrease|fall"]}
          ],
          hit:"Correct: line drops into death phase when nutrients are depleted",
          miss:"The line DROPS — death phase begins. Bacteria die faster than they reproduce when nutrients run out" }
      ]
    },

    6: {
      totalMarks: 10, topic: "Human Digestive System",
      points: [
        { marks:1, desc:"Names A as oesophagus",
          accept:[
            {phrase:["oesophagus","esophagus","gullet","food pipe"]},
            {all:["oesophagus|esophagus|gullet"]}
          ],
          hit:"Correct: A is the oesophagus",
          miss:"A is the OESOPHAGUS (food pipe connecting mouth to stomach)" },
        { marks:1, desc:"Names B as stomach",
          accept:[
            {all:["stomach"]}
          ],
          hit:"Correct: B is the stomach",
          miss:"B is the STOMACH — muscular bag where protein digestion begins" },
        { marks:2, desc:"Method food moves through A: peristalsis with description",
          accept:[
            {phrase:"peristalsis"},
            {all:["peristal"]},
            {all:["wave"],near:[["wave","muscle|contract|movement|push",6]]},
            {all:["muscular"],near:[["muscular","contraction|wave|movement|involuntary",6]]}
          ],
          hit:"Correct: peristalsis — wave-like muscular contractions push food along",
          miss:"PERISTALSIS: involuntary wave-like MUSCULAR CONTRACTIONS that push food through the oesophagus" },
        { marks:1, desc:"pH change from A to B: becomes more acidic / lowers",
          accept:[
            {all:["acidic|acid|lower|decrease|drop"],near:[["acidic|acid|lower|decrease|drop","ph|stomach",6]]},
            {all:["7","2"],near:[["7","neutral|oesoph",6],["2","stomach|acid",6]]},
            {all:["ph","lower|decrease|drop|acidic"]}
          ],
          hit:"Correct: pH drops from ~7 (neutral) to ~2 (very acidic) in stomach",
          miss:"pH LOWERS from ~7 (neutral in oesophagus) to ~2 (very acidic in stomach due to HCl)" },
        { marks:2, desc:"Pancreatic enzyme that digests lipids: lipase",
          accept:[
            {phrase:"lipase"},
            {all:["lipase"]}
          ],
          hit:"Correct: lipase breaks down lipids into fatty acids and glycerol",
          miss:"LIPASE — breaks lipids (fats) into fatty acids and glycerol. Produced by pancreas, works in small intestine" },
        { marks:3, desc:"Drawing of villus with internal structure and labels",
          accept:[
            {all:["villus|villi"]},
            {all:["lacteal"]},
            {all:["capillary|capillaries|blood vessel"]},
            {all:["absorb|absorption"],near:[["absorb|absorption","nutrient|food|glucose|amino|fatty",6]]},
            {all:["surface area"],near:[["surface area","increase|large|absorb",6]]}
          ],
          hit:"Good villus drawing showing lacteal and blood vessels for absorption",
          miss:"Draw a VILLUS (finger-like projection) showing LACTEAL (absorbs fats) and BLOOD CAPILLARIES (absorb glucose, amino acids). Label at least two structures" }
      ]
    },

    7: {
      totalMarks: 10, topic: "Scientific Method",
      points: [
        { marks:1, desc:"Testable statement is called a hypothesis",
          accept:[
            {phrase:"hypothesis"},
            {all:["hypothesis"]}
          ],
          hit:"Correct: a hypothesis is a testable statement",
          miss:"A testable statement is called a HYPOTHESIS" },
        { marks:1, desc:"How to test: conducting an experiment",
          accept:[
            {all:["experiment"]},
            {all:["test|investigat"],near:[["test|investigat","variable|control|measure",6]]},
            {phrase:["carry out","set up"]}
          ],
          hit:"Correct: test by conducting an experiment",
          miss:"Test a hypothesis by conducting an EXPERIMENT — change one variable and measure the effect" },
        { marks:2, desc:"Function of a control: comparison/baseline",
          accept:[
            {all:["compar|comparison"],near:[["compar|comparison","experiment|result|test",6]]},
            {all:["baseline|standard|reference"]},
            {all:["same|identical"],near:[["same|identical","except|without|variable|factor",6]]},
            {all:["ensure|show|prove"],near:[["ensure|show|prove","variable|factor|change|caused|effect",8]]}
          ],
          hit:"Correct: a control provides a comparison/baseline to show the variable caused the effect",
          miss:"A control is a COMPARISON to the experiment — identical setup WITHOUT the variable being tested, to prove the variable caused the effect" },
        { marks:2, desc:"First limitation of scientific method", group:"limits_q7",
          accept:[
            {all:["accidental|serendipity|chance"],near:[["accidental|serendipity|chance","discover|finding",6]]},
            {all:["bias|subjective"],near:[["bias|subjective","human|observer|researcher|interpret",6]]},
            {all:["human error"]},
            {all:["ethic|ethical"],near:[["ethic|ethical","test|experiment|limit",6]]},
            {all:["technolog"],near:[["technolog","limit|constrain|available|exist",6]]},
            {all:["knowledge"],near:[["knowledge","exist|current|limit|constrain",6]]},
            {all:["interpret|interpretation"],near:[["interpret|interpretation","result|data|different|vary",6]]},
            {all:["nature|natural"],near:[["nature|natural","apply|lab|control",6]]}
          ],
          hit:"Good limitation identified",
          miss:"Limitations include: accidental discovery, human bias, ethical constraints, limited technology, difficulty applying lab results to nature" },
        { marks:2, desc:"Second limitation of scientific method", group:"limits_q7",
          accept:[
            {all:["accidental|serendipity|chance"],near:[["accidental|serendipity|chance","discover|finding",6]]},
            {all:["bias|subjective"],near:[["bias|subjective","human|observer|researcher|interpret",6]]},
            {all:["human error"]},
            {all:["ethic|ethical"],near:[["ethic|ethical","test|experiment|limit",6]]},
            {all:["technolog"],near:[["technolog","limit|constrain|available|exist",6]]},
            {all:["knowledge"],near:[["knowledge","exist|current|limit|constrain",6]]},
            {all:["interpret|interpretation"],near:[["interpret|interpretation","result|data|different|vary",6]]},
            {all:["nature|natural"],near:[["nature|natural","apply|lab|control",6]]}
          ],
          hit:"Good second limitation",
          miss:"Give a second DISTINCT limitation" },
        { marks:1, desc:"Results published in scientific journals",
          accept:[
            {phrase:["scientific journal","peer-reviewed journal","journal","peer review"]},
            {all:["journal"]},
            {all:["peer","review"]}
          ],
          hit:"Correct: results are published in scientific (peer-reviewed) journals",
          miss:"Results are published in SCIENTIFIC JOURNALS where they are peer-reviewed" },
        { marks:1, desc:"A theory is a supported/tested hypothesis",
          accept:[
            {all:["supported|tested|confirmed|verified"],near:[["supported|tested|confirmed","hypothesis|evidence|experiment|repeatedly",6]]},
            {all:["hypothesis"],near:[["hypothesis","supported|tested|proven|evidence|repeatedly",6]]},
            {all:["theory"],near:[["theory","supported|tested|evidence|experiment|explain",6]]}
          ],
          hit:"Correct: a theory is a hypothesis that has been tested and supported by evidence",
          miss:"A theory is a HYPOTHESIS that has been TESTED MANY TIMES and is SUPPORTED by consistent evidence" }
      ]
    },

    8: {
      totalMarks: 10, topic: "Ecosystem Study",
      points: [
        { marks:1, desc:"Ecosystem definition: organisms interacting with their environment",
          accept:[
            {all:["organism|living"],near:[["organism|living","environment|interact|area|habitat",6]]},
            {all:["biotic|living","abiotic|non-living"]},
            {phrase:["community of organisms","organisms and their environment"]}
          ],
          hit:"Correct: an ecosystem is a community of organisms interacting with their environment",
          miss:"An ecosystem = all LIVING ORGANISMS (biotic) and NON-LIVING factors (abiotic) INTERACTING in an area" },
        { marks:1, desc:"Identification aided by a key (dichotomous key)",
          accept:[
            {phrase:["key","dichotomous key","identification key","id key"]},
            {all:["key"],near:[["key","identify|identification|species|paired|dichotomous",6]]}
          ],
          hit:"Correct: a key (dichotomous key) aids identification",
          miss:"A KEY (dichotomous key) uses paired statements to identify organisms step by step" },
        { marks:2, desc:"Named plant species and equipment (quadrat/transect)",
          accept:[
            {all:["quadrat"]},
            {phrase:["line transect","belt transect"]},
            {all:["transect"]},
            {all:["daisy|dandelion|clover|plantain|buttercup|grass|moss|dock|nettle|thistle"],near:[["daisy|dandelion|clover|plantain|buttercup|grass|moss","quadrat|transect|count|frequency|cover",12]]}
          ],
          hit:"Good: named a plant species and appropriate equipment",
          miss:"Name a plant species (e.g. daisy, dandelion, clover) and state equipment: QUADRAT or TRANSECT" },
        { marks:2, desc:"Method: placed randomly, counted, repeated",
          accept:[
            {all:["random|randomly"],near:[["random|randomly","place|throw|position|quadrat",6]]},
            {all:["count|counted|record"],near:[["count|counted|record","species|plant|present|number",6]]},
            {all:["repeat|repeated|replicate"],near:[["repeat|repeated|replicate","times|10|accuracy|reliable",8]]}
          ],
          hit:"Good method: random placement, counting, and repetition",
          miss:"Method: place quadrat RANDOMLY, COUNT the species in each, REPEAT at least 10 times for reliability" },
        { marks:1, desc:"Calculation: percentage cover or frequency",
          accept:[
            {phrase:["percentage cover","percentage frequency","% cover","% frequency"]},
            {all:["percent|%"],near:[["percent|%","cover|frequency|calculate",6]]},
            {all:["frequency"],near:[["frequency","calculate|formula|divide",6]]}
          ],
          hit:"Correct calculation method",
          miss:"Calculate PERCENTAGE FREQUENCY = (quadrats with plant / total quadrats) x 100, or use PERCENTAGE COVER" },
        { marks:2, desc:"Two abiotic factors named with methods", group:"abiotic_q8",
          accept:[
            {all:["light"],near:[["light","meter|sensor|lux|intensity|measure",6]]},
            {all:["temperature|temp"],near:[["temperature|temp","thermometer|probe|measure|degree|celsius",6]]},
            {all:["soil"],near:[["soil","ph|moisture|meter|indicator|measure",6]]},
            {all:["ph"],near:[["ph","meter|indicator|probe|universal|measure|test",6]]},
            {all:["wind"],near:[["wind","anemometer|speed|measure",6]]},
            {all:["humidity"],near:[["humidity","hygrometer|measure|meter",6]]},
            {all:["moisture"],near:[["moisture","meter|measure|probe|sensor",6]]}
          ],
          hit:"Good abiotic factor with measurement method",
          miss:"Name an abiotic factor and its method: light (light meter), temperature (thermometer), soil pH (pH meter/indicator), wind speed (anemometer)" },
        { marks:1, desc:"Second abiotic factor with method", group:"abiotic_q8",
          accept:[
            {all:["light"],near:[["light","meter|sensor|lux|intensity|measure",6]]},
            {all:["temperature|temp"],near:[["temperature|temp","thermometer|probe|measure|degree|celsius",6]]},
            {all:["soil"],near:[["soil","ph|moisture|meter|indicator|measure",6]]},
            {all:["ph"],near:[["ph","meter|indicator|probe|universal|measure|test",6]]},
            {all:["wind"],near:[["wind","anemometer|speed|measure",6]]},
            {all:["humidity"],near:[["humidity","hygrometer|measure|meter",6]]},
            {all:["moisture"],near:[["moisture","meter|measure|probe|sensor",6]]}
          ],
          hit:"Good second abiotic factor",
          miss:"Give a second DISTINCT abiotic factor with its measurement method" }
      ]
    },

    11: {
      totalMarks: 10, topic: "Plant Reproduction",
      points: [
        { marks:1, desc:"Geotropism: growth response to gravity",
          accept:[
            {all:["growth|grow"],near:[["growth|grow","response|direction|stimulus|gravity",6]]},
            {all:["gravity"],near:[["gravity","response|growth|tropism|stimulus",6]]},
            {phrase:["response to gravity","growth response"]}
          ],
          hit:"Correct: geotropism is a growth response to gravity",
          miss:"Geotropism is a directional GROWTH RESPONSE to GRAVITY" },
        { marks:1, desc:"Root responds positively (grows toward gravity)",
          accept:[
            {all:["root"]},
            {all:["root"],near:[["root","positive|down|toward|gravity",6]]}
          ],
          hit:"Correct: the root shows positive geotropism (grows toward gravity)",
          miss:"The ROOT shows positive geotropism — grows TOWARD gravity (downward)" },
        { marks:1, desc:"Benefit: obtain water/minerals or anchorage",
          accept:[
            {all:["water|mineral|nutrient|anchor|anchorage"]},
            {all:["absorb|obtain|reach|access"],near:[["absorb|obtain|reach","water|mineral|nutrient",6]]},
            {all:["anchor|secure|stable|support"],near:[["anchor|secure|stable","plant|soil|ground",6]]}
          ],
          hit:"Good: roots growing down helps access water/minerals and provides anchorage",
          miss:"Growing downward helps roots OBTAIN WATER and MINERALS from soil and provides ANCHORAGE" },
        { marks:1, desc:"Male parts collectively: stamen; female: carpel",
          accept:[
            {all:["stamen"],near:[["stamen","male|collective",6]]},
            {all:["carpel|pistil"],near:[["carpel|pistil","female|collective",6]]},
            {all:["stamen","carpel|pistil"]}
          ],
          hit:"Correct: male = stamen, female = carpel",
          miss:"Male reproductive parts = STAMEN (anther + filament). Female = CARPEL (stigma + style + ovary)" },
        { marks:1, desc:"Part holding embryo sac: ovule",
          accept:[
            {all:["ovule"]},
            {all:["ovary"],near:[["ovary","embryo|sac|contain|hold",6]]}
          ],
          hit:"Correct: the ovule holds the embryo sac",
          miss:"The OVULE holds the embryo sac (ovule is inside the ovary)" },
        { marks:1, desc:"Embryo sac develops from megaspore mother cell",
          accept:[
            {phrase:["megaspore mother cell","megaspore mother","megaspore"]},
            {all:["megaspore"]}
          ],
          hit:"Correct: embryo sac develops from the megaspore mother cell",
          miss:"Embryo sac develops from the MEGASPORE MOTHER CELL (which undergoes meiosis)" },
        { marks:1, desc:"P and Q: polar nucleus and egg cell in double fertilisation",
          accept:[
            {all:["polar"],near:[["polar","nucleus|nuclei",4]]},
            {all:["egg"],near:[["egg","cell|nucleus",4]]},
            {all:["polar","egg"]}
          ],
          hit:"Correct: P = polar nucleus, Q = egg cell — both involved in double fertilisation",
          miss:"P = POLAR NUCLEUS, Q = EGG CELL. Double fertilisation: one sperm + egg = zygote; one sperm + 2 polar nuclei = endosperm" },
        { marks:1, desc:"P and Q genetically identical because produced by mitosis",
          accept:[
            {all:["mitosis"]},
            {all:["mitosis"],near:[["mitosis","identical|same|genetic|copy",6]]},
            {all:["identical"],near:[["identical","mitosis|division|copy|same",6]]}
          ],
          hit:"Correct: they are genetically identical because they were produced by mitosis",
          miss:"P and Q are genetically identical because they were produced by MITOSIS (which makes identical copies)" },
        { marks:1, desc:"After fertilisation: P becomes endosperm, Q becomes zygote",
          accept:[
            {all:["endosperm"]},
            {all:["zygote|embryo"]},
            {all:["endosperm","zygote|embryo"]}
          ],
          hit:"Correct: polar nucleus + sperm = endosperm (food store); egg + sperm = zygote (embryo)",
          miss:"P (polar nucleus) + sperm = ENDOSPERM (food store, 3n). Q (egg) + sperm = ZYGOTE (develops into embryo, 2n)" },
        { marks:1, desc:"Seed dispersal, dormancy, or asexual reproduction details",
          accept:[
            {all:["wind|animal|water|explosive|self"],near:[["wind|animal|water|explosive","dispers|seed|spread",6]]},
            {all:["competition|colonise|colonize|survive"],near:[["competition|colonise|survive","reduce|avoid|new|habitat",6]]},
            {phrase:["dormancy","asexual reproduction","vegetative propagation"]},
            {all:["dormancy"],near:[["dormancy","survive|unfavourable|winter|drought|develop",6]]},
            {all:["runner|tuber|bulb|cutting|bryophyllum|kalanchoe|strawberry|potato|daffodil"]}
          ],
          hit:"Good understanding of dispersal, dormancy, or asexual reproduction",
          miss:"Dispersal methods: wind, animal, water, self (explosive). Dormancy allows survival in harsh conditions. Asexual: runners (strawberry), tubers (potato), bulbs (daffodil)" }
      ]
    },

    12: {
      totalMarks: 10, topic: "Genetics & DNA",
      points: [
        { marks:1, desc:"Mutation: change in DNA structure/sequence or chromosome",
          accept:[
            {all:["change"],near:[["change","dna|gene|chromosome|sequence|structure|base|genetic",6]]},
            {all:["alteration|change"],near:[["alteration|change","genetic|dna|base|nucleotide",6]]},
            {phrase:["change in dna","change in the structure","change in sequence"]}
          ],
          hit:"Correct: a mutation is a change in the structure or sequence of DNA",
          miss:"A mutation is a permanent CHANGE in the STRUCTURE or SEQUENCE of DNA (or a chromosome)" },
        { marks:1, desc:"Two causes of mutations", group:"causes_q12",
          accept:[
            {all:["radiation|uv|x-ray|xray|gamma|ultraviolet"]},
            {all:["chemical|mutagen|carcinogen|tobacco|benzene"]},
            {all:["virus|viral"]},
            {all:["spontaneous|random|error"],near:[["spontaneous|random|error","replication|copy|divide",6]]}
          ],
          hit:"Good cause of mutation identified",
          miss:"Causes include: radiation (UV, X-rays), chemicals (tobacco smoke), viruses, or spontaneous errors during DNA replication" },
        { marks:1, desc:"Second cause of mutation", group:"causes_q12",
          accept:[
            {all:["radiation|uv|x-ray|xray|gamma|ultraviolet"]},
            {all:["chemical|mutagen|carcinogen|tobacco|benzene"]},
            {all:["virus|viral"]},
            {all:["spontaneous|random|error"],near:[["spontaneous|random|error","replication|copy|divide",6]]}
          ],
          hit:"Good second cause",
          miss:"Give a second DISTINCT cause of mutation" },
        { marks:1, desc:"Gene vs allele distinction",
          accept:[
            {all:["gene"],near:[["gene","region|section|portion|segment|dna|chromosome|code|protein",6]]},
            {all:["allele"],near:[["allele","form|version|variant|type|gene",4]]},
            {all:["gene","allele"]}
          ],
          hit:"Good distinction: gene = section of DNA coding for a protein; allele = different form of a gene",
          miss:"GENE = region of DNA that codes for a protein. ALLELE = different FORM of a gene (e.g. brown vs blue eye colour)" },
        { marks:1, desc:"Genotype EeNn for heterozygous ebony/normal",
          accept:[
            {phrase:["eenn","Ee Nn","EeNn"]},
            {all:["ee","nn"]}
          ],
          hit:"Correct genotype: EeNn",
          miss:"Heterozygous for both traits = EeNn (one dominant and one recessive allele for each)" },
        { marks:1, desc:"Genotype eenn for black body/curly wings",
          accept:[
            {phrase:"eenn"},
            {all:["ee","nn"],near:[["ee","nn","recessive|homozygous",6]]}
          ],
          hit:"Correct genotype: eenn (homozygous recessive for both)",
          miss:"Black body + curly wings = both recessive = eenn (homozygous recessive)" },
        { marks:1, desc:"Cross offspring: 4 types in 1:1:1:1 ratio",
          accept:[
            {all:["1:1:1:1"]},
            {phrase:["EeNn","Eenn","eeNn","eenn"]},
            {all:["four|4"],near:[["four|4","type|phenotype|offspring|genotype|ratio",6]]},
            {all:["ebony","normal","black","curly"]}
          ],
          hit:"Correct: 4 offspring types — EeNn, Eenn, eeNn, eenn — in 1:1:1:1 ratio",
          miss:"Cross EeNn x eenn gives 4 types: EeNn (ebony, normal), Eenn (ebony, curly), eeNn (black, normal), eenn (black, curly) — ratio 1:1:1:1" },
        { marks:1, desc:"Linked genes: genes on the same chromosome",
          accept:[
            {phrase:"linked"},
            {all:["linked"]},
            {all:["same","chromosome"],near:[["same","chromosome|chromatid",4]]}
          ],
          hit:"Correct: linked genes are on the same chromosome and tend to be inherited together",
          miss:"LINKED genes are located on the SAME CHROMOSOME and are inherited together" },
        { marks:1, desc:"DNA stands for deoxyribonucleic acid",
          accept:[
            {phrase:"deoxyribonucleic acid"},
            {all:["deoxyribonucleic"]},
            {all:["deoxyribo","nucleic","acid"]}
          ],
          hit:"Correct: Deoxyribonucleic Acid",
          miss:"DNA = DEOXYRIBONUCLEIC ACID" },
        { marks:1, desc:"Purines (A, G) and pyrimidines (C, T) or DNA vs RNA difference or DNA profiling steps",
          accept:[
            {all:["purine"],near:[["purine","adenine|guanine|a|g",6]]},
            {all:["pyrimidine"],near:[["pyrimidine","cytosine|thymine|c|t",6]]},
            {all:["adenine|guanine","purine"]},
            {all:["cytosine|thymine","pyrimidine"]},
            {all:["double"],near:[["double","strand|helix|dna",4]]},
            {all:["single"],near:[["single","strand|rna",4]]},
            {all:["thymine"],near:[["thymine","dna",4]]},
            {all:["uracil"],near:[["uracil","rna",4]]},
            {all:["deoxyribose"],near:[["deoxyribose","dna|sugar",4]]},
            {all:["ribose"],near:[["ribose","rna|sugar",4]]},
            {phrase:["gel electrophoresis","restriction enzyme","dna profiling","dna fingerprinting"]},
            {all:["cut|extract"],near:[["cut|extract","dna|fragment|enzyme|restriction",6]]},
            {all:["separate"],near:[["separate","fragment|size|gel|electrophoresis",6]]}
          ],
          hit:"Good understanding of DNA structure, RNA differences, or DNA profiling",
          miss:"Purines: Adenine (A), Guanine (G). Pyrimidines: Cytosine (C), Thymine (T). DNA profiling: extract DNA, cut with enzymes, separate by size, analyse pattern" }
      ]
    }
  }
};

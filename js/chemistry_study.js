var STUDY_CHEMISTRY = [
  {
    topic: "Atomic Structure",
    icon: "⚛️",
    subtopics: [
      {
        title: "Dalton's Atomic Theory",
        content: "Dalton proposed that all matter is made of indivisible atoms. Atoms of the same element are identical in mass and properties. Atoms of different elements combine in simple whole-number ratios to form compounds.\nDalton's theory was later modified when subatomic particles (protons, neutrons, electrons) were discovered. His key contribution was establishing the atom as the fundamental unit of matter.",
        keyTerms: ["atom", "element", "compound", "indivisible"],
        formula: null,
        examTip: "Know the limitations of Dalton's theory — atoms ARE divisible (subatomic particles exist) and isotopes show atoms of the same element can differ in mass."
      },
      {
        title: "Thomson's Plum Pudding Model",
        content: "Thomson discovered the electron using cathode ray tubes (1897). He proposed the 'plum pudding' model: a sphere of positive charge with electrons embedded throughout, like plums in a pudding.\nThomson showed cathode rays were deflected by electric and magnetic fields, proving they were negatively charged particles. He calculated the charge-to-mass ratio (e/m) of the electron.",
        keyTerms: ["cathode rays", "electron", "plum pudding model", "charge-to-mass ratio"],
        formula: null,
        examTip: "A common exam question asks you to describe the cathode ray experiment and what it proved. Always mention deflection by electric/magnetic fields."
      },
      {
        title: "Rutherford's Nuclear Model",
        content: "Rutherford fired alpha particles at thin gold foil (Geiger-Marsden experiment). Most passed straight through, some deflected, and a very few bounced back.\nThis proved the atom is mostly empty space with a small, dense, positively charged nucleus. Electrons orbit the nucleus at a distance. This replaced the plum pudding model.",
        keyTerms: ["alpha particles", "gold foil", "nucleus", "empty space", "deflection"],
        formula: null,
        examTip: "You must be able to explain EACH observation: most pass through (empty space), some deflect (positive nucleus repels), few bounce back (nucleus is dense and small)."
      },
      {
        title: "Bohr Model",
        content: "Bohr proposed that electrons orbit the nucleus in fixed energy levels (shells), not just anywhere. Electrons can jump between levels by absorbing or emitting specific quanta of energy.\nThis explained the line emission spectrum of hydrogen — each line corresponds to a specific electron transition. Ground state is the lowest energy level; excited state is any higher level.",
        keyTerms: ["energy levels", "quanta", "ground state", "excited state", "line spectrum", "electron transition"],
        formula: "E = hf (energy of a photon, where h = Planck's constant, f = frequency)",
        examTip: "Be able to explain how line spectra provide evidence for energy levels. The exam often asks why the spectrum is lines (discrete) rather than continuous."
      },
      {
        title: "Energy Levels and Sublevels",
        content: "The principal energy levels are n = 1, 2, 3, 4... Each level contains sublevels: s, p, d, f. The s sublevel holds 2 electrons, p holds 6, d holds 10, f holds 14.\nThe order of filling follows the Aufbau principle: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p... Note that 4s fills before 3d because it is lower in energy.",
        keyTerms: ["principal energy level", "sublevel", "s orbital", "p orbital", "d orbital", "Aufbau principle"],
        formula: "Max electrons per level = 2n²",
        examTip: "The 4s fills before 3d but empties first when forming transition metal ions. This catches many students out — e.g. Fe is [Ar]3d⁶ 4s² but Fe²⁺ is [Ar]3d⁶."
      },
      {
        title: "Orbitals and Shapes",
        content: "An orbital is a region of space where there is a high probability of finding an electron. An s orbital is spherical; p orbitals are dumbbell-shaped along the x, y, and z axes.\nEach orbital holds a maximum of 2 electrons with opposite spins (Pauli exclusion principle). Hund's rule states electrons fill orbitals of equal energy singly before pairing.",
        keyTerms: ["orbital", "Pauli exclusion principle", "Hund's rule", "spin", "spherical", "dumbbell"],
        formula: null,
        examTip: "Draw orbital diagrams using boxes and arrows. Remember: electrons in the same orbital must have opposite spins (one up, one down arrow)."
      },
      {
        title: "Electron Configuration",
        content: "Write electron configurations using the notation: 1s² 2s² 2p⁶ 3s² 3p⁶ etc. Follow Aufbau, Pauli, and Hund's rules.\nExamples: Na (11) = 1s² 2s² 2p⁶ 3s¹. Cl (17) = 1s² 2s² 2p⁶ 3s² 3p⁵. Fe (26) = 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s². Chromium and copper are exceptions: Cr = [Ar]3d⁵ 4s¹, Cu = [Ar]3d¹⁰ 4s¹.",
        keyTerms: ["electron configuration", "noble gas core", "chromium exception", "copper exception"],
        formula: null,
        examTip: "Cr and Cu are common exam exceptions — half-filled and fully filled d sublevels are extra stable. Always write configurations for ions by removing 4s electrons first."
      },
      {
        title: "Heisenberg Uncertainty Principle",
        content: "It is impossible to simultaneously know both the exact position and exact momentum of an electron. The more precisely one is known, the less precisely the other can be determined.\nThis is why we use probability (orbitals) rather than fixed orbits. It replaced Bohr's model of electrons in definite circular paths with the quantum mechanical model.",
        keyTerms: ["uncertainty principle", "position", "momentum", "probability", "quantum mechanical model"],
        formula: "Δx × Δp ≥ h/4π",
        examTip: "This is a short-answer definition question. State that you cannot know both position and momentum of an electron simultaneously — that's worth the marks."
      }
    ]
  },
  {
    topic: "The Periodic Table",
    icon: "🗂️",
    subtopics: [
      {
        title: "History — Mendeleev",
        content: "Mendeleev arranged elements by increasing atomic mass and grouped elements with similar properties together. He left gaps for undiscovered elements and predicted their properties (e.g. germanium).\nThe modern periodic table arranges elements by increasing atomic number (Moseley). Mendeleev's genius was in leaving gaps — when the predicted elements were found with matching properties, this validated his table.",
        keyTerms: ["Mendeleev", "atomic mass", "atomic number", "Moseley", "predicted elements", "germanium"],
        formula: null,
        examTip: "The exam often asks why Mendeleev is considered the father of the periodic table — emphasise his predictions and willingness to leave gaps and swap element order."
      },
      {
        title: "Atomic Radius Trend",
        content: "Atomic radius DECREASES across a period (left to right) because the nuclear charge increases, pulling electrons closer, while shielding stays roughly constant.\nAtomic radius INCREASES down a group because extra electron shells are added, increasing the distance from the nucleus despite increasing nuclear charge.",
        keyTerms: ["atomic radius", "nuclear charge", "shielding", "electron shells"],
        formula: null,
        examTip: "When explaining trends, always use both factors: nuclear charge AND shielding. Saying only one will lose marks."
      },
      {
        title: "Ionisation Energy Trend",
        content: "First ionisation energy is the minimum energy required to remove the most loosely bound electron from a neutral gaseous atom. It INCREASES across a period and DECREASES down a group.\nAcross a period: increased nuclear charge holds electrons more tightly. Down a group: more shells mean greater distance and more shielding, so outer electrons are easier to remove.",
        keyTerms: ["ionisation energy", "gaseous atom", "nuclear charge", "shielding", "first ionisation energy"],
        formula: "X(g) → X⁺(g) + e⁻ (definition equation)",
        examTip: "You must write the definition with 'gaseous' and 'neutral atom'. The exam penalises missing the word 'gaseous'. Know the anomalies: Be > B and N > O due to sublevel stability."
      },
      {
        title: "Electronegativity Trend",
        content: "Electronegativity is the relative attraction that an atom in a molecule has for the shared pair of electrons in a covalent bond. It INCREASES across a period and DECREASES down a group.\nFluorine is the most electronegative element. The difference in electronegativity between two bonded atoms determines bond polarity. Large differences lead to ionic character.",
        keyTerms: ["electronegativity", "Pauling scale", "fluorine", "bond polarity", "shared pair"],
        formula: null,
        examTip: "The definition must include 'atom in a molecule' and 'shared pair of electrons in a covalent bond'. Noble gases have no electronegativity value (they don't form bonds normally)."
      },
      {
        title: "Electron Affinity",
        content: "Electron affinity is the energy change when an electron is added to a neutral gaseous atom to form a negative ion. First electron affinities are generally exothermic (energy released).\nIt generally increases across a period and decreases down a group, following similar reasoning to ionisation energy trends. Group 7 elements have the highest electron affinities.",
        keyTerms: ["electron affinity", "exothermic", "gaseous atom", "negative ion"],
        formula: "X(g) + e⁻ → X⁻(g)",
        examTip: "Second electron affinity is always endothermic — energy is needed to overcome the repulsion of adding an electron to an already negative ion."
      },
      {
        title: "Alkali Metals (Group 1)",
        content: "Alkali metals have one electron in their outer shell, making them very reactive. Reactivity INCREASES down the group because the outer electron is further from the nucleus and easier to remove.\nThey form +1 ions, react vigorously with water to produce hydrogen gas and an alkali (MOH), and have low melting points that decrease down the group. They are stored under oil to prevent reaction with air/moisture.",
        keyTerms: ["alkali metals", "reactivity", "+1 ion", "low melting point", "stored under oil"],
        formula: "2Na + 2H₂O → 2NaOH + H₂",
        examTip: "Know the flame colours: Li = red, Na = yellow, K = lilac. The water reaction gets more vigorous down the group — Li fizzes, Na melts into a ball, K catches fire."
      },
      {
        title: "Halogens (Group 7)",
        content: "Halogens have 7 outer electrons and need one more to achieve a full shell. Reactivity DECREASES down the group because the atoms get larger and it's harder to attract an extra electron.\nA more reactive halogen displaces a less reactive one from its salt (e.g. Cl₂ displaces Br⁻ from KBr solution). States at room temperature: F₂ = pale yellow gas, Cl₂ = green-yellow gas, Br₂ = red-brown liquid, I₂ = grey-black solid.",
        keyTerms: ["halogens", "displacement", "diatomic", "reactivity decreases"],
        formula: "Cl₂ + 2KBr → 2KCl + Br₂",
        examTip: "Halogen displacement reactions are a favourite exam question. Always state the colour change observed as evidence the reaction occurred."
      },
      {
        title: "Transition Metals",
        content: "Transition metals have partially filled d orbitals. They form coloured compounds, have variable oxidation states, act as catalysts, and form complex ions.\nExamples: Fe²⁺ (green) and Fe³⁺ (yellow/brown), Cu²⁺ (blue), MnO₄⁻ (purple). They have high melting points, high density, and are good conductors of heat and electricity.",
        keyTerms: ["d orbital", "variable oxidation state", "coloured compounds", "catalyst", "complex ion"],
        formula: null,
        examTip: "Define a transition metal as an element that forms at least one stable ion with a partially filled d sublevel. Zinc is NOT a transition metal (Zn²⁺ has a full d¹⁰)."
      }
    ]
  },
  {
    topic: "Chemical Bonding",
    icon: "🔗",
    subtopics: [
      {
        title: "Ionic Bonding",
        content: "Ionic bonding involves the transfer of electrons from a metal to a non-metal, forming positive cations and negative anions. The electrostatic attraction between oppositely charged ions forms the ionic bond.\nIonic compounds form crystal lattices, have high melting/boiling points, conduct electricity when molten or dissolved (ions are free to move), and are generally soluble in water but insoluble in organic solvents.",
        keyTerms: ["ionic bond", "electrostatic attraction", "cation", "anion", "crystal lattice", "electron transfer"],
        formula: null,
        examTip: "Always say 'electrostatic attraction between oppositely charged ions'. Don't just say 'transfer of electrons' — the bond is the attraction, not the transfer itself."
      },
      {
        title: "Covalent Bonding",
        content: "A covalent bond is formed by the sharing of a pair of electrons between two atoms. Each atom contributes one electron to the shared pair. A single bond shares 1 pair, double shares 2 pairs, triple shares 3 pairs.\nCovalent compounds typically have low melting/boiling points (weak intermolecular forces), do not conduct electricity, and are often soluble in organic solvents but insoluble in water.",
        keyTerms: ["covalent bond", "shared pair", "single bond", "double bond", "triple bond", "lone pair"],
        formula: null,
        examTip: "A co-ordinate (dative) bond is a covalent bond where BOTH electrons come from the same atom. Example: NH₄⁺ (the lone pair on N bonds to H⁺). Draw this with an arrow."
      },
      {
        title: "Metallic Bonding",
        content: "Metallic bonding consists of a lattice of positive metal ions (cations) surrounded by a sea of delocalised electrons. The electrostatic attraction between the positive ions and the sea of electrons is the metallic bond.\nThis explains why metals conduct electricity (delocalised electrons move freely), are malleable and ductile (layers of ions can slide), and have high melting points (strong attraction).",
        keyTerms: ["metallic bond", "delocalised electrons", "sea of electrons", "lattice", "cations"],
        formula: null,
        examTip: "The phrase 'sea of delocalised electrons' is essential. Explain conductivity, malleability, and high melting point in terms of this model for full marks."
      },
      {
        title: "Intermolecular Forces — Van der Waals",
        content: "Van der Waals forces are the weakest intermolecular forces, caused by temporary dipoles due to random movement of electrons. A temporary dipole in one molecule induces a dipole in a neighbouring molecule.\nVan der Waals forces increase with molecular size (more electrons = larger temporary dipoles). They explain why boiling points increase with molecular mass in non-polar molecules like the noble gases and alkanes.",
        keyTerms: ["van der Waals", "temporary dipole", "induced dipole", "non-polar", "molecular size"],
        formula: null,
        examTip: "All molecules have van der Waals forces, including polar ones. Van der Waals are the ONLY forces between non-polar molecules like Br₂, CH₄, and noble gases."
      },
      {
        title: "Intermolecular Forces — Dipole-Dipole",
        content: "Dipole-dipole forces occur between polar molecules. The slightly positive end of one molecule attracts the slightly negative end of another. They are stronger than van der Waals forces.\nA molecule is polar if it has polar bonds AND an asymmetric shape. CO₂ is non-polar despite polar bonds (linear, dipoles cancel). H₂O is polar (bent shape, dipoles don't cancel).",
        keyTerms: ["dipole-dipole", "polar molecule", "electronegativity difference", "permanent dipole"],
        formula: null,
        examTip: "Shape matters! Learn which molecules are polar vs non-polar. Symmetric shapes (linear, trigonal planar, tetrahedral with identical atoms) cancel dipoles."
      },
      {
        title: "Intermolecular Forces — Hydrogen Bonding",
        content: "Hydrogen bonding occurs when H is bonded directly to F, O, or N. These atoms are very electronegative and small, creating a very strong dipole. The lone pair on F, O, or N of a neighbouring molecule attracts the H.\nHydrogen bonding explains water's unusually high boiling point, ice being less dense than water (open lattice structure), and the solubility of alcohols and carboxylic acids in water.",
        keyTerms: ["hydrogen bond", "F O N", "lone pair", "high boiling point", "ice density"],
        formula: null,
        examTip: "Hydrogen bonds are NOT covalent bonds — they are strong intermolecular forces. In the exam, draw hydrogen bonds as dashed lines between the H and the lone pair on F, O, or N."
      },
      {
        title: "VSEPR and Molecular Shapes",
        content: "VSEPR (Valence Shell Electron Pair Repulsion) theory: electron pairs around a central atom repel each other and arrange themselves to be as far apart as possible. Lone pairs repel more strongly than bonding pairs.\nCommon shapes: linear (2 bonding, 0 lone pairs, 180°), trigonal planar (3,0, 120°), tetrahedral (4,0, 109.5°), V-shaped/bent (2,2, ~104.5° in water), trigonal pyramidal (3,1, ~107° in NH₃).",
        keyTerms: ["VSEPR", "lone pair", "bonding pair", "linear", "tetrahedral", "trigonal planar", "bent", "trigonal pyramidal"],
        formula: null,
        examTip: "Always count BOTH bonding pairs AND lone pairs on the central atom. The shape name describes the arrangement of ATOMS only, not lone pairs. Bond angle decreases as lone pairs increase."
      },
      {
        title: "Sigma and Pi Bonds",
        content: "A sigma (σ) bond is formed by head-on overlap of orbitals along the bond axis. It is the first bond formed between two atoms and allows free rotation.\nA pi (π) bond is formed by sideways overlap of p orbitals above and below the bond axis. A double bond = 1σ + 1π. A triple bond = 1σ + 2π. Pi bonds prevent rotation and create geometric isomerism.",
        keyTerms: ["sigma bond", "pi bond", "head-on overlap", "sideways overlap", "free rotation"],
        formula: null,
        examTip: "Count sigma and pi bonds: ethene (C₂H₄) has 5 sigma + 1 pi. Ethyne (C₂H₂) has 3 sigma + 2 pi. Every single bond is 1 sigma. This is a common exam question."
      }
    ]
  },
  {
    topic: "Stoichiometry",
    icon: "⚖️",
    subtopics: [
      {
        title: "The Mole Concept",
        content: "A mole is the amount of substance that contains 6.022 × 10²³ particles (Avogadro's number). One mole of any element has a mass equal to its relative atomic mass in grams.\nThe mole bridges the gap between atoms (too small to count) and grams (which we can measure). It allows us to relate masses of reactants and products using balanced equations.",
        keyTerms: ["mole", "Avogadro's number", "amount of substance", "6.022 × 10²³"],
        formula: "n = mass / molar mass (n = m/M)",
        examTip: "Always include units in mole calculations. Molar mass is in g/mol. If given mass in kg, convert to grams first. This is a common error that loses easy marks."
      },
      {
        title: "Molar Mass and Relative Molecular Mass",
        content: "The molar mass (M) of a compound is the sum of the relative atomic masses of all atoms in the formula, expressed in g/mol. For example, H₂SO₄ = 2(1) + 32 + 4(16) = 98 g/mol.\nRelative molecular mass (Mr) is the same number but has no units. Use the periodic table to look up atomic masses. Always show your working clearly in calculations.",
        keyTerms: ["molar mass", "relative molecular mass", "relative atomic mass", "g/mol"],
        formula: "M(H₂O) = 2(1) + 16 = 18 g/mol",
        examTip: "Double-check you've counted all atoms correctly, especially in formulas with brackets like Ca(OH)₂ = 40 + 2(16+1) = 74 g/mol."
      },
      {
        title: "Percentage Composition",
        content: "Percentage composition tells you the mass percentage of each element in a compound. Calculate by dividing the total mass of that element in one mole by the molar mass of the compound, then multiply by 100.\nExample: % O in H₂O = (16/18) × 100 = 88.9%. This is useful for comparing the amount of a desired element in different compounds (e.g. which fertiliser has most nitrogen).",
        keyTerms: ["percentage composition", "mass percentage"],
        formula: "% element = (total mass of element in formula / molar mass of compound) × 100",
        examTip: "The percentages of all elements in a compound must add up to 100%. Use this as a check on your answer."
      },
      {
        title: "Empirical and Molecular Formula",
        content: "The empirical formula is the simplest whole-number ratio of atoms in a compound. The molecular formula is the actual number of atoms. To find empirical formula: divide each element's mass (or %) by its atomic mass, then divide all by the smallest.\nThe molecular formula is a whole-number multiple of the empirical formula. Given the molar mass, divide by the empirical formula mass to find the multiple. Example: empirical CH₂O (30), molar mass 60, so molecular formula = C₂H₄O₂.",
        keyTerms: ["empirical formula", "molecular formula", "simplest ratio"],
        formula: "Molecular formula = n × empirical formula, where n = molar mass / empirical formula mass",
        examTip: "Set out empirical formula calculations in a clear table: element, mass, ÷ Ar, ratio, simplest ratio. This structured approach earns method marks even if arithmetic goes wrong."
      },
      {
        title: "Balancing Equations and Mole Ratios",
        content: "A balanced equation has equal numbers of each type of atom on both sides. Coefficients represent mole ratios. For example, 2H₂ + O₂ → 2H₂O means 2 moles H₂ react with 1 mole O₂.\nUse these ratios to convert between moles of different substances. Steps: mass → moles (of known) → moles (of unknown via ratio) → mass (of unknown).",
        keyTerms: ["balanced equation", "mole ratio", "coefficient", "stoichiometry"],
        formula: null,
        examTip: "Always balance the equation FIRST. Then use it as a recipe. State the mole ratio explicitly in your answer — examiners want to see you using the equation."
      },
      {
        title: "Limiting Reagent",
        content: "The limiting reagent is the reactant that is completely used up first and determines the maximum amount of product formed. The other reactant is in excess.\nTo find it: convert both reactant masses to moles, divide each by its coefficient in the balanced equation. The one with the smaller value is the limiting reagent. Use its moles to calculate the product.",
        keyTerms: ["limiting reagent", "excess reagent", "theoretical yield"],
        formula: null,
        examTip: "A very common exam question. Always clearly state which reagent is limiting and why. Use the limiting reagent's moles (not the excess) for all further calculations."
      },
      {
        title: "Molar Volume of Gases",
        content: "At standard temperature and pressure (STP: 0°C, 1 atm), one mole of any gas occupies 22.4 litres. At room temperature (25°C, 1 atm), it is approximately 24.0 litres.\nThis allows conversion between moles and volume of gases: n = V / molar volume. Useful in reactions involving gases where you measure volume rather than mass.",
        keyTerms: ["molar volume", "STP", "22.4 L", "ideal gas"],
        formula: "n = V / 22,400 cm³ (at STP) or n = V / 24,000 cm³ (at RTP)",
        examTip: "Check whether the question states STP or room temperature — using the wrong molar volume is a common mistake. Convert mL to L if needed."
      }
    ]
  },
  {
    topic: "Volumetric Analysis",
    icon: "🧪",
    subtopics: [
      {
        title: "Titration Principles",
        content: "A titration determines the unknown concentration of a solution by reacting it with a solution of known concentration (standard solution). The standard solution is placed in the burette, the unknown in a conical flask with indicator.\nThe endpoint is when the indicator changes colour, showing the reaction is complete. The equivalence point is the theoretical point where moles of acid equal moles of base (for 1:1 reactions).",
        keyTerms: ["titration", "standard solution", "endpoint", "equivalence point", "burette", "conical flask"],
        formula: "C₁V₁/n₁ = C₂V₂/n₂ (where n = moles from balanced equation)",
        examTip: "Use a white tile under the conical flask to see the colour change more clearly. Wash the conical flask with deionised water only (not the solution) — this is a favourite precaution question."
      },
      {
        title: "Primary Standards",
        content: "A primary standard is a substance of known high purity used to prepare a standard solution of accurately known concentration. It must have a known, stable composition, high purity, high molar mass (for accurate weighing), and be soluble.\nCommon primary standards: anhydrous sodium carbonate (Na₂CO₃) for acid-base, oxalic acid (H₂C₂O₄.2H₂O) for permanganate titrations. NaOH is NOT a primary standard (absorbs CO₂ and water).",
        keyTerms: ["primary standard", "high purity", "stable composition", "Na₂CO₃", "oxalic acid"],
        formula: null,
        examTip: "A standard exam question: 'Why is NaOH not suitable as a primary standard?' Answer: it absorbs CO₂ from air and is hygroscopic, so its mass is unreliable."
      },
      {
        title: "Indicators",
        content: "An indicator changes colour at or near the equivalence point. Different indicators are suited to different titration types.\nStrong acid + strong base: any indicator works (methyl orange, phenolphthalein). Strong acid + weak base: methyl orange (changes in acidic range). Weak acid + strong base: phenolphthalein (changes in basic range). Weak acid + weak base: no suitable indicator.",
        keyTerms: ["indicator", "methyl orange", "phenolphthalein", "pH range"],
        formula: null,
        examTip: "Phenolphthalein: colourless in acid, pink in base. Methyl orange: red in acid, yellow in base. Know which to use for each titration type."
      },
      {
        title: "Acid-Base Titration Calculations",
        content: "Steps: (1) Calculate moles of standard solution: n = C × V (in litres). (2) Use the balanced equation to find moles of unknown. (3) Calculate concentration: C = n / V.\nAlways use the average titre from concordant results (results within 0.1 cm³ of each other). Discard the rough titre and any outliers. Convert cm³ to litres by dividing by 1000.",
        keyTerms: ["moles", "concentration", "titre", "concordant results", "average titre"],
        formula: "n = C × V (V in litres); C = n / V; C = 1000 × n / V (V in cm³)",
        examTip: "Show all steps clearly and include units throughout. A common error is forgetting to use the mole RATIO from the equation — e.g. H₂SO₄ + 2NaOH means 1 mole acid reacts with 2 moles base."
      },
      {
        title: "Redox Titrations (Permanganate)",
        content: "Potassium permanganate (KMnO₄) is used in redox titrations as both the titrant and the indicator — it is self-indicating. Purple KMnO₄ is decolourised by the reducing agent until the endpoint.\nThe endpoint is when a permanent pink/purple colour persists (excess KMnO₄). The solution must be acidified with dilute H₂SO₄ (not HCl, which reacts with KMnO₄). Warm the solution to ~60°C for oxalic acid titrations.",
        keyTerms: ["potassium permanganate", "self-indicating", "redox", "reducing agent", "acidified"],
        formula: "MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺",
        examTip: "Never use HCl to acidify — it reacts with KMnO₄ and produces Cl₂ gas. Use dilute H₂SO₄. This is worth marks as a precaution in the mandatory experiment."
      },
      {
        title: "Water of Crystallisation",
        content: "Many salts crystallise with water molecules incorporated into their crystal structure (e.g. Na₂CO₃.10H₂O). The number of water molecules (n) can be found by heating a known mass of hydrated salt to constant mass.\nMass loss = mass of water. Calculate moles of anhydrous salt and moles of water, then find the ratio. This determines the value of n in the formula salt.nH₂O.",
        keyTerms: ["water of crystallisation", "hydrated", "anhydrous", "heat to constant mass"],
        formula: "n = moles of H₂O / moles of anhydrous salt",
        examTip: "Heat to constant mass means heat, cool, weigh, repeat until mass doesn't change. This ensures all water is removed. State this in experiment answers."
      }
    ]
  },
  {
    topic: "Rates of Reaction",
    icon: "⏱️",
    subtopics: [
      {
        title: "Definition and Measurement",
        content: "Rate of reaction is the change in concentration of a reactant or product per unit time. It can be measured by monitoring mass loss (gas escaping), volume of gas produced, colour change, or change in pH.\nThe rate is fastest at the start (highest concentration of reactants) and decreases over time as reactants are used up. Units: mol/L/s or mol L⁻¹ s⁻¹.",
        keyTerms: ["rate of reaction", "concentration", "per unit time", "mass loss", "gas volume"],
        formula: "Rate = Δ[concentration] / Δtime",
        examTip: "In rate graphs, the gradient (slope) of the curve at any point gives the rate at that time. The initial rate = gradient at time zero. Draw a tangent to find it."
      },
      {
        title: "Collision Theory",
        content: "For a reaction to occur, particles must collide with sufficient energy (at least the activation energy) and with the correct orientation. Not all collisions lead to reaction — only effective collisions do.\nAnything that increases the frequency or energy of collisions will increase the rate of reaction. This theory explains the effect of all the factors that affect rate.",
        keyTerms: ["collision theory", "effective collision", "activation energy", "orientation"],
        formula: null,
        examTip: "Always mention BOTH conditions for a successful collision: sufficient energy AND correct orientation. Leaving out either one will lose a mark."
      },
      {
        title: "Factors Affecting Rate — Concentration",
        content: "Increasing concentration increases the number of particles per unit volume. This leads to more frequent collisions and therefore more effective collisions per second, increasing the rate.\nOn a graph, higher concentration gives a steeper initial curve and reaches completion sooner. The same total amount of product is formed (if other reactant is in excess).",
        keyTerms: ["concentration", "frequency of collisions", "particles per unit volume"],
        formula: null,
        examTip: "For gases, increasing pressure has the same effect as increasing concentration — particles are closer together, so more frequent collisions."
      },
      {
        title: "Factors Affecting Rate — Temperature",
        content: "Increasing temperature gives particles more kinetic energy, so they move faster and collide more frequently. More importantly, a greater proportion of particles have energy ≥ the activation energy.\nA 10°C rise roughly doubles the rate. The Maxwell-Boltzmann distribution curve shifts right at higher temperature, showing more particles with energy above Ea.",
        keyTerms: ["temperature", "kinetic energy", "activation energy", "Maxwell-Boltzmann distribution"],
        formula: null,
        examTip: "The main reason temperature increases rate is MORE particles exceeding Ea, not just more frequent collisions. This is the key point examiners look for."
      },
      {
        title: "Factors Affecting Rate — Surface Area and Catalysts",
        content: "Increasing surface area (e.g. powdering a solid) exposes more particles to collisions, increasing the rate. The total product formed is the same.\nA catalyst increases rate by providing an alternative reaction pathway with lower activation energy. More particles now have sufficient energy to react. The catalyst is not consumed — it is regenerated.",
        keyTerms: ["surface area", "catalyst", "alternative pathway", "lower activation energy"],
        formula: null,
        examTip: "A catalyst does NOT give particles more energy — it lowers the energy barrier. On an energy profile diagram, show the catalysed pathway with a lower Ea peak."
      },
      {
        title: "Rate Graphs and Interpretation",
        content: "A graph of product vs time starts steep (fast initial rate) and levels off (reaction complete). The steeper the initial slope, the faster the reaction.\nComparing experiments: same final amount of product but steeper curve = faster rate (e.g. higher temperature or concentration). Less product at the end = less reactant was available or different limiting reagent.",
        keyTerms: ["product vs time graph", "initial rate", "gradient", "plateau"],
        formula: null,
        examTip: "Sketch rate graphs neatly with labelled axes. Show that a catalyst reaches the same final product amount but faster. A higher temperature does the same."
      }
    ]
  },
  {
    topic: "Chemical Equilibrium",
    icon: "⚖️",
    subtopics: [
      {
        title: "Dynamic Equilibrium",
        content: "A dynamic equilibrium is established in a closed system when the rate of the forward reaction equals the rate of the reverse reaction. The concentrations of reactants and products remain constant but are NOT necessarily equal.\nDynamic means both reactions are still occurring — it is not a static situation. Equilibrium can only be reached in a closed system (no substances can escape).",
        keyTerms: ["dynamic equilibrium", "closed system", "forward rate equals reverse rate", "constant concentrations"],
        formula: null,
        examTip: "Key definition: rates are equal and concentrations are constant. Always mention 'closed system' and 'dynamic' (reactions still occurring). These are essential for full marks."
      },
      {
        title: "Le Chatelier's Principle",
        content: "If a system at equilibrium is disturbed, the system shifts to partially counteract the disturbance and re-establish equilibrium.\nIncrease concentration of reactant → shifts right (forward). Increase pressure → shifts to side with fewer moles of gas. Increase temperature → shifts in endothermic direction. A catalyst has NO effect on equilibrium position — it speeds up both directions equally.",
        keyTerms: ["Le Chatelier", "shift", "counteract", "disturbance", "forward", "reverse"],
        formula: null,
        examTip: "Catalyst does NOT shift equilibrium — it only helps equilibrium be reached faster. This is a very common exam trap. State clearly: 'no effect on position of equilibrium'."
      },
      {
        title: "Equilibrium Constant (Kc)",
        content: "For the reaction aA + bB ⇌ cC + dD, the equilibrium constant Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ. Products on top, reactants on bottom, raised to the power of their coefficients.\nKc is constant at a given temperature. A large Kc means equilibrium lies to the right (products favoured). A small Kc means it lies to the left (reactants favoured). Kc only changes with temperature.",
        keyTerms: ["equilibrium constant", "Kc", "products over reactants", "temperature dependent"],
        formula: "Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ",
        examTip: "Solids and pure liquids are NOT included in the Kc expression — only aqueous and gaseous species. Don't include water if it's a pure liquid."
      },
      {
        title: "Kc Calculations",
        content: "To calculate Kc: set up an ICE table (Initial, Change, Equilibrium) to find equilibrium concentrations. Use concentration in mol/L (divide moles by volume in litres).\nExample: If 1 mol A and 1 mol B react in 1L, and 0.6 mol C is formed at equilibrium, then [A] = 0.4, [B] = 0.4, [C] = 0.6. For A + B ⇌ C: Kc = 0.6/(0.4 × 0.4) = 3.75.",
        keyTerms: ["ICE table", "equilibrium concentration", "mol/L"],
        formula: null,
        examTip: "Always convert moles to concentration (mol/L) before substituting into the Kc expression. Use an ICE table to organise your working — examiners award method marks for this."
      },
      {
        title: "Industrial Applications — Haber Process",
        content: "N₂ + 3H₂ ⇌ 2NH₃ (ΔH = -92 kJ/mol). Conditions: 450°C, 200 atm, iron catalyst. The forward reaction is exothermic and produces fewer moles of gas.\nLow temperature would favour products but the rate would be too slow — 450°C is a compromise. High pressure favours fewer moles (products) but is expensive — 200 atm is a compromise. Unreacted gases are recycled.",
        keyTerms: ["Haber process", "ammonia", "nitrogen", "hydrogen", "compromise conditions", "iron catalyst"],
        formula: "N₂(g) + 3H₂(g) ⇌ 2NH₃(g)",
        examTip: "The exam loves asking about compromise conditions. Explain WHY each condition is a compromise between yield and rate. Mention recycling of unreacted gases."
      },
      {
        title: "Industrial Applications — Contact Process",
        content: "The Contact process produces sulfuric acid. Key step: 2SO₂ + O₂ ⇌ 2SO₃ (ΔH = -196 kJ/mol). Conditions: 450°C, 1-2 atm, V₂O₅ catalyst.\nSO₃ is dissolved in concentrated H₂SO₄ to form oleum (H₂S₂O₇), which is then diluted with water to give H₂SO₄. Direct addition of SO₃ to water would create a dangerous acid mist.",
        keyTerms: ["Contact process", "sulfuric acid", "V₂O₅", "oleum", "SO₃"],
        formula: "2SO₂(g) + O₂(g) ⇌ 2SO₃(g)",
        examTip: "Know why SO₃ is not added directly to water (forms acid mist). The V₂O₅ catalyst is used because it is cheaper and less toxic than the platinum alternative."
      }
    ]
  },
  {
    topic: "Acids & Bases",
    icon: "🧫",
    subtopics: [
      {
        title: "Arrhenius Theory",
        content: "Arrhenius defined an acid as a substance that produces H⁺ ions in aqueous solution, and a base as a substance that produces OH⁻ ions in aqueous solution.\nLimitation: it only applies to aqueous solutions. It cannot explain why NH₃ is a base (it doesn't contain OH⁻) or why CO₂ dissolved in water is acidic. This led to the Bronsted-Lowry theory.",
        keyTerms: ["Arrhenius", "H⁺ ions", "OH⁻ ions", "aqueous solution"],
        formula: null,
        examTip: "Know the limitations of Arrhenius theory — it only works in water. The exam may ask you to compare Arrhenius and Bronsted-Lowry definitions."
      },
      {
        title: "Bronsted-Lowry Theory",
        content: "A Bronsted-Lowry acid is a proton (H⁺) donor. A Bronsted-Lowry base is a proton acceptor. This is broader than Arrhenius and works in non-aqueous solutions too.\nConjugate acid-base pairs differ by one proton. In HCl + H₂O → H₃O⁺ + Cl⁻: HCl/Cl⁻ is one conjugate pair, H₂O/H₃O⁺ is the other. Water is amphoteric — it can act as both acid and base.",
        keyTerms: ["Bronsted-Lowry", "proton donor", "proton acceptor", "conjugate pair", "amphoteric"],
        formula: null,
        examTip: "Identify conjugate acid-base pairs by finding species that differ by one H⁺. Water is amphoteric — acts as acid with NH₃ and as base with HCl. This is a favourite question."
      },
      {
        title: "Strong and Weak Acids/Bases",
        content: "A strong acid fully dissociates in water (HCl, H₂SO₄, HNO₃). A weak acid only partially dissociates (CH₃COOH, H₂CO₃). Use a double arrow (⇌) for weak, single arrow (→) for strong.\nStrong acids have lower pH than weak acids of the same concentration. Weak acids have higher pH, react slower with metals, and conduct electricity less well (fewer ions in solution).",
        keyTerms: ["strong acid", "weak acid", "full dissociation", "partial dissociation", "HCl", "CH₃COOH"],
        formula: null,
        examTip: "Concentrated ≠ strong. Concentration is the amount of acid per litre. Strength is the degree of dissociation. You can have a concentrated weak acid or a dilute strong acid."
      },
      {
        title: "pH Calculations",
        content: "pH = -log₁₀[H⁺]. For strong acids, [H⁺] = concentration (full dissociation). For strong bases, find [OH⁻] first, then use Kw = [H⁺][OH⁻] = 1 × 10⁻¹⁴ at 25°C to find [H⁺].\npH 7 is neutral (at 25°C), below 7 is acidic, above 7 is basic. Each pH unit represents a tenfold change in [H⁺]. pH 3 is 10 times more acidic than pH 4.",
        keyTerms: ["pH", "logarithm", "H⁺ concentration", "neutral", "tenfold"],
        formula: "pH = -log[H⁺]; [H⁺] = 10⁻ᵖᴴ; Kw = [H⁺][OH⁻] = 1 × 10⁻¹⁴",
        examTip: "For diprotic acids like H₂SO₄, [H⁺] = 2 × concentration (each molecule releases 2 H⁺). For NaOH: [OH⁻] = concentration, then [H⁺] = Kw/[OH⁻]."
      },
      {
        title: "Ka and Weak Acid Calculations",
        content: "Ka is the acid dissociation constant for a weak acid: Ka = [H⁺][A⁻] / [HA]. A larger Ka means a stronger weak acid (more dissociation).\nFor a weak acid of concentration c: [H⁺] = √(Ka × c), assuming dissociation is small compared to c. Then pH = -log[H⁺]. This approximation works when Ka is small relative to c.",
        keyTerms: ["Ka", "acid dissociation constant", "weak acid equilibrium", "partial dissociation"],
        formula: "Ka = [H⁺][A⁻]/[HA]; [H⁺] ≈ √(Ka × c)",
        examTip: "Show the equilibrium expression first, then substitute. If Ka = 1.8 × 10⁻⁵ and c = 0.1 M, then [H⁺] = √(1.8 × 10⁻⁶) = 1.34 × 10⁻³, pH = 2.87."
      },
      {
        title: "Buffers",
        content: "A buffer solution resists changes in pH when small amounts of acid or base are added. An acidic buffer is made from a weak acid and its conjugate base (e.g. CH₃COOH + CH₃COONa).\nWhen acid is added, the conjugate base (A⁻) reacts with H⁺. When base is added, the weak acid (HA) reacts with OH⁻. The pH remains approximately constant because the ratio [HA]/[A⁻] changes only slightly.",
        keyTerms: ["buffer", "weak acid", "conjugate base", "resist pH change"],
        formula: "pH = -log Ka + log([A⁻]/[HA]) (Henderson-Hasselbalch equation)",
        examTip: "Blood is buffered at pH 7.4 by the H₂CO₃/HCO₃⁻ system. The exam often asks for a practical example of a buffer and how it works."
      },
      {
        title: "Titration Curves",
        content: "A titration curve plots pH against volume of titrant added. Strong acid + strong base: steep vertical section at equivalence (pH 7), S-shaped curve. Weak acid + strong base: equivalence at pH > 7. Strong acid + weak base: equivalence at pH < 7.\nThe half-equivalence point (for weak acid + strong base) is where pH = pKa, and exactly half the acid has been neutralised. The buffer region is the relatively flat section before the equivalence point.",
        keyTerms: ["titration curve", "equivalence point", "half-equivalence", "buffer region", "steep section"],
        formula: null,
        examTip: "Be able to sketch all four types of titration curve and identify the equivalence point pH. The choice of indicator depends on where the steep section falls."
      }
    ]
  },
  {
    topic: "Organic Chemistry",
    icon: "⬡",
    subtopics: [
      {
        title: "IUPAC Naming Rules",
        content: "Find the longest carbon chain (parent chain). Number from the end nearest the first substituent/functional group. Name substituents as prefixes (methyl, ethyl) and functional groups as suffixes (-ol, -al, -one, -oic acid).\nExamples: CH₃CH(CH₃)CH₃ = 2-methylpropane. CH₃CH₂OH = ethanol. CH₃COOH = ethanoic acid. CH₃COCH₃ = propanone. Use commas between numbers and hyphens between numbers and words.",
        keyTerms: ["IUPAC", "parent chain", "substituent", "prefix", "suffix", "numbering"],
        formula: null,
        examTip: "The exam always tests naming. Practice drawing structures from names and vice versa. Common error: not numbering from the correct end of the chain."
      },
      {
        title: "Alkanes (CₙH₂ₙ₊₂)",
        content: "Alkanes are saturated hydrocarbons with only single C-C bonds. They are relatively unreactive due to strong, non-polar C-H and C-C bonds. Main reactions: combustion and substitution (with halogens in UV light).\nBoiling points increase with chain length (more van der Waals forces). Branched alkanes have lower boiling points than straight-chain isomers (less surface area for intermolecular contact).",
        keyTerms: ["alkane", "saturated", "single bond", "combustion", "substitution", "CnH2n+2"],
        formula: "CₙH₂ₙ₊₂ (general formula)",
        examTip: "Alkanes burn in excess O₂ to give CO₂ + H₂O (complete combustion). In limited O₂: CO or C (soot) forms. Know the difference for exam questions."
      },
      {
        title: "Alkenes (CₙH₂ₙ)",
        content: "Alkenes are unsaturated hydrocarbons containing at least one C=C double bond. They are more reactive than alkanes because the pi bond is weaker and electron-rich, making it susceptible to electrophilic addition.\nTest for unsaturation: bromine water turns from brown/orange to colourless when shaken with an alkene. This is the standard test to distinguish alkenes from alkanes.",
        keyTerms: ["alkene", "unsaturated", "double bond", "C=C", "addition reaction", "bromine water test"],
        formula: "CₙH₂ₙ (general formula)",
        examTip: "The bromine water test is a mandatory experiment question favourite. State the colour change: brown/orange to colourless. Alkanes do NOT decolourise bromine water."
      },
      {
        title: "Alkynes (CₙH₂ₙ₋₂)",
        content: "Alkynes contain a C≡C triple bond (one sigma + two pi bonds). Ethyne (C₂H₂) is the simplest. They undergo similar addition reactions to alkenes but can add two equivalents.\nEthyne is a linear molecule (180° bond angle). It burns with a very hot flame (used in oxyacetylene welding). Alkynes also decolourise bromine water, confirming unsaturation.",
        keyTerms: ["alkyne", "triple bond", "ethyne", "linear", "addition"],
        formula: "CₙH₂ₙ₋₂ (general formula)",
        examTip: "Alkynes are less commonly examined than alkenes, but know ethyne's structure, bonding (1σ + 2π), and that it is linear."
      },
      {
        title: "Alcohols",
        content: "Alcohols contain the -OH functional group. Named with the suffix -ol (methanol, ethanol, propan-1-ol). They are classified as primary (1°), secondary (2°), or tertiary (3°) based on the carbon bearing the OH.\nAlcohols have higher boiling points than corresponding alkanes due to hydrogen bonding. Short-chain alcohols are soluble in water (H-bonding with water). They undergo oxidation, dehydration, and esterification reactions.",
        keyTerms: ["alcohol", "-OH", "primary", "secondary", "tertiary", "hydrogen bonding", "-ol"],
        formula: null,
        examTip: "Know oxidation products: primary alcohol → aldehyde → carboxylic acid. Secondary alcohol → ketone. Tertiary alcohols resist oxidation. This pattern is frequently examined."
      },
      {
        title: "Aldehydes and Ketones",
        content: "Aldehydes have a -CHO group at the end of the chain (suffix -al). Ketones have a C=O group within the chain (suffix -one). Both contain the carbonyl group (C=O).\nAdehydes are easily oxidised to carboxylic acids; ketones resist oxidation. Tests to distinguish them: Fehling's solution (aldehydes give brick-red precipitate, ketones don't), Tollens' reagent (aldehydes give silver mirror, ketones don't).",
        keyTerms: ["aldehyde", "ketone", "carbonyl", "-CHO", "C=O", "Fehling's", "Tollens'"],
        formula: null,
        examTip: "Fehling's and Tollens' tests distinguish aldehydes from ketones. Remember: aldehydes are more easily oxidised. Brady's reagent (2,4-DNP) confirms ANY carbonyl compound."
      },
      {
        title: "Carboxylic Acids",
        content: "Carboxylic acids contain the -COOH group (suffix -oic acid). They are weak acids — they partially dissociate in water to release H⁺. Examples: methanoic acid (HCOOH), ethanoic acid (CH₃COOH).\nThey react with bases to form salts and water, with carbonates to produce CO₂, and with alcohols to form esters. They have high boiling points due to hydrogen bonding (can form dimers with two H-bonds).",
        keyTerms: ["carboxylic acid", "-COOH", "weak acid", "salt", "ester", "dimer"],
        formula: null,
        examTip: "The reaction with sodium carbonate (fizzing/CO₂) is a simple test for carboxylic acids. Write the equation: 2CH₃COOH + Na₂CO₃ → 2CH₃COONa + H₂O + CO₂."
      },
      {
        title: "Esters",
        content: "Esters are formed from a carboxylic acid + alcohol in the presence of an acid catalyst (H₂SO₄). The reaction is called esterification (a condensation reaction — water is released).\nEsters have fruity smells and are used as flavourings and solvents. Named as alkyl alkanoate: ethyl ethanoate from ethanol + ethanoic acid. They have lower boiling points than the parent acid (no H-bonding between ester molecules).",
        keyTerms: ["ester", "esterification", "condensation", "acid catalyst", "fruity smell", "alkyl alkanoate"],
        formula: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O",
        examTip: "Ester naming: the alcohol part comes first (ethyl from ethanol), then the acid part (ethanoate from ethanoic acid). Remember the acid catalyst (conc. H₂SO₄) and that it's reversible."
      },
      {
        title: "Isomerism",
        content: "Structural isomers have the same molecular formula but different structural arrangements. Types: chain isomers (different carbon skeleton), position isomers (different position of functional group), functional group isomers (different functional group).\nGeometric (cis-trans) isomers occur in alkenes where rotation around C=C is restricted. Cis = same side, trans = opposite side. Required: two different groups on each carbon of the C=C.",
        keyTerms: ["structural isomer", "chain isomer", "position isomer", "functional group isomer", "cis", "trans", "geometric"],
        formula: null,
        examTip: "Draw ALL possible isomers systematically. C₄H₁₀ has 2 structural isomers (butane, methylpropane). C₄H₈ has more (but-1-ene, but-2-ene, methylpropene, plus cis/trans of but-2-ene)."
      }
    ]
  },
  {
    topic: "Organic Reactions",
    icon: "🔄",
    subtopics: [
      {
        title: "Addition Reactions",
        content: "Addition reactions occur with unsaturated compounds (alkenes/alkynes). A molecule adds across the double bond, breaking the pi bond. The product has only single bonds (becomes saturated).\nExamples: hydrogenation (+ H₂, Ni catalyst), halogenation (+ Br₂), hydrohalogenation (+ HBr), hydration (+ H₂O, H₂SO₄ catalyst). Markovnikov's rule: H adds to the carbon with more H atoms already.",
        keyTerms: ["addition", "hydrogenation", "halogenation", "hydration", "Markovnikov's rule"],
        formula: "CH₂=CH₂ + Br₂ → CH₂BrCH₂Br",
        examTip: "Markovnikov's rule: 'The rich get richer' — H goes to the C with more H's. This determines which product forms when HBr adds to propene: 2-bromopropane, not 1-bromopropane."
      },
      {
        title: "Free Radical Substitution",
        content: "Alkanes react with halogens (Cl₂, Br₂) in UV light via a free radical mechanism. Three stages: initiation (UV breaks Cl-Cl homolytically into 2 Cl• radicals), propagation (chain reaction), termination (two radicals combine).\nInitiation: Cl₂ → 2Cl•. Propagation: CH₄ + Cl• → •CH₃ + HCl, then •CH₃ + Cl₂ → CH₃Cl + Cl•. Termination: Cl• + Cl• → Cl₂ (or other radical combinations).",
        keyTerms: ["free radical", "substitution", "initiation", "propagation", "termination", "UV light", "homolytic fission"],
        formula: "CH₄ + Cl₂ → CH₃Cl + HCl (overall, in UV light)",
        examTip: "You MUST know all three stages with equations. Use dots (•) to show unpaired electrons on radicals. The propagation steps are self-sustaining — that's the chain reaction."
      },
      {
        title: "Elimination Reactions",
        content: "Elimination removes atoms from adjacent carbons to form a double bond. Dehydration of alcohols (removal of H₂O) uses concentrated H₂SO₄ or Al₂O₃ as catalyst at high temperature.\nDehydrohalogenation removes HX from a haloalkane using ethanolic KOH (alcoholic, not aqueous). Example: CH₃CH₂Br + KOH(ethanol) → CH₂=CH₂ + KBr + H₂O.",
        keyTerms: ["elimination", "dehydration", "dehydrohalogenation", "double bond formation"],
        formula: "C₂H₅OH → C₂H₄ + H₂O (with conc. H₂SO₄, 170°C)",
        examTip: "Elimination vs substitution depends on conditions. Ethanolic KOH = elimination (gives alkene). Aqueous KOH = substitution (gives alcohol). The exam tests this distinction."
      },
      {
        title: "Oxidation of Alcohols",
        content: "Primary alcohols are oxidised to aldehydes (with distillation to remove product) and then to carboxylic acids (with reflux). Secondary alcohols are oxidised to ketones. Tertiary alcohols resist oxidation.\nOxidising agents: acidified potassium dichromate (K₂Cr₂O₇/H₂SO₄) changes from orange to green when oxidation occurs. Acidified potassium permanganate (purple to colourless) can also be used.",
        keyTerms: ["oxidation", "K₂Cr₂O₇", "orange to green", "distillation", "reflux", "primary", "secondary", "tertiary"],
        formula: "CH₃CH₂OH + [O] → CH₃CHO + H₂O (distil); CH₃CHO + [O] → CH₃COOH (reflux)",
        examTip: "Distil to get the aldehyde (it's removed before further oxidation). Reflux to get the carboxylic acid (keeps everything in the flask for complete oxidation). Know the difference."
      },
      {
        title: "Esterification and Hydrolysis",
        content: "Esterification: carboxylic acid + alcohol ⇌ ester + water (acid catalyst, reflux). This is a reversible condensation reaction.\nHydrolysis is the reverse: ester + water → acid + alcohol (acid hydrolysis) or ester + NaOH → sodium salt of acid + alcohol (base hydrolysis/saponification). Base hydrolysis is irreversible and goes to completion.",
        keyTerms: ["esterification", "hydrolysis", "saponification", "condensation", "reflux"],
        formula: "RCOOH + R'OH ⇌ RCOOR' + H₂O",
        examTip: "Saponification (base hydrolysis of fats/oils with NaOH) produces soap (sodium salt of fatty acid) + glycerol. This is a common long question on the exam."
      },
      {
        title: "Polymerisation",
        content: "Addition polymerisation: monomers with C=C double bonds join together. The double bond opens and monomers link in a chain. No by-product. Example: ethene → polyethene.\nCondensation polymerisation: monomers with two functional groups join, releasing a small molecule (usually water). Examples: polyesters (diol + diacid), polyamides/nylon (diamine + diacid), proteins (amino acids).",
        keyTerms: ["addition polymerisation", "condensation polymerisation", "monomer", "polymer", "polyethene", "nylon", "polyester"],
        formula: "nCH₂=CH₂ → -(CH₂-CH₂)-ₙ (addition polymerisation of ethene)",
        examTip: "Be able to draw the repeating unit from the monomer and vice versa. For addition polymers: open the double bond. For condensation: show where H₂O is lost from the functional groups."
      }
    ]
  },
  {
    topic: "Thermochemistry",
    icon: "🔥",
    subtopics: [
      {
        title: "Exothermic and Endothermic Reactions",
        content: "Exothermic reactions release energy to the surroundings (ΔH is negative). The products have less energy than the reactants. Examples: combustion, neutralisation, respiration.\nEndothermic reactions absorb energy from the surroundings (ΔH is positive). The products have more energy than the reactants. Examples: photosynthesis, dissolving ammonium nitrate, thermal decomposition.",
        keyTerms: ["exothermic", "endothermic", "enthalpy change", "ΔH", "energy profile diagram"],
        formula: null,
        examTip: "Draw energy profile diagrams clearly: label reactants, products, activation energy (Ea), and ΔH. For exothermic: products lower. For endothermic: products higher."
      },
      {
        title: "Enthalpy Definitions",
        content: "Enthalpy of formation (ΔHf): energy change when 1 mole of a compound is formed from its elements in their standard states. Enthalpy of combustion (ΔHc): energy change when 1 mole of a substance is completely burned in excess oxygen.\nEnthalpy of neutralisation: energy change when an acid and base react to form 1 mole of water. For strong acid + strong base, ΔH ≈ -57.3 kJ/mol. It's less for weak acids/bases (energy used for dissociation).",
        keyTerms: ["enthalpy of formation", "enthalpy of combustion", "enthalpy of neutralisation", "standard states"],
        formula: null,
        examTip: "All definitions specify '1 mole'. The enthalpy of formation of an element in its standard state is zero by definition. This is used in Hess's Law calculations."
      },
      {
        title: "Hess's Law",
        content: "Hess's Law states that the total enthalpy change for a reaction is independent of the route taken, provided the initial and final conditions are the same. This is a consequence of energy conservation.\nTwo main calculation methods: (1) Using enthalpies of formation: ΔH = ΣΔHf(products) - ΣΔHf(reactants). (2) Using enthalpies of combustion: ΔH = ΣΔHc(reactants) - ΣΔHc(products). Note the reversal.",
        keyTerms: ["Hess's Law", "enthalpy cycle", "formation", "combustion", "route"],
        formula: "ΔH = ΣΔHf(products) - ΣΔHf(reactants) OR ΔH = ΣΔHc(reactants) - ΣΔHc(products)",
        examTip: "Hess's Law appears almost every year. Draw the enthalpy cycle diagram clearly. Remember: formation = products minus reactants, combustion = reactants minus products (reversed!)."
      },
      {
        title: "Bond Energy Calculations",
        content: "Bond energy (bond dissociation energy) is the energy required to break one mole of a particular bond in the gaseous state. Breaking bonds requires energy (endothermic); forming bonds releases energy (exothermic).\nΔH = Σ(bonds broken) - Σ(bonds formed). If more energy is released forming bonds than is absorbed breaking them, the reaction is exothermic (ΔH negative).",
        keyTerms: ["bond energy", "bond breaking", "bond forming", "gaseous state"],
        formula: "ΔH = Σ(bond energies broken) - Σ(bond energies formed)",
        examTip: "Bond energies give approximate ΔH values (averages). Draw out the full structural formulas and count ALL bonds broken and formed. Don't forget O=O in O₂ and N≡N in N₂."
      },
      {
        title: "Calorimetry",
        content: "Calorimetry measures the heat energy change in a reaction by measuring the temperature change of a known mass of water. The equation q = mcΔT is used, where m = mass of water (g), c = specific heat capacity (4.18 J/g/°C), ΔT = temperature change.\nTo find ΔH per mole: divide q by the moles of substance reacted. Sources of error: heat loss to surroundings, incomplete combustion, heat absorbed by the calorimeter itself.",
        keyTerms: ["calorimetry", "q = mcΔT", "specific heat capacity", "temperature change", "heat loss"],
        formula: "q = mcΔT; ΔH = -q/n (per mole)",
        examTip: "The negative sign in ΔH = -q/n is because heat released by the reaction is absorbed by the water. Always state sources of error: heat loss is the main one."
      },
      {
        title: "Mandatory Experiment — Heat of Reaction",
        content: "Measure the temperature change when a known amount of reactant reacts with excess of the other (e.g. dissolving NaOH in HCl). Use a polystyrene cup as a calorimeter to minimise heat loss.\nProcedure: measure a known volume of acid, record initial temperature, add base, stir, record highest temperature. Calculate q = mcΔT using mass of total solution. Then ΔH = q/moles of limiting reagent.",
        keyTerms: ["polystyrene cup", "thermometer", "temperature rise", "mcΔT"],
        formula: "q = mcΔT, then ΔH = q / n",
        examTip: "Use a lid on the polystyrene cup. Rinse the cup with deionised water between experiments. Assume the density and specific heat capacity of the solution are the same as water."
      }
    ]
  },
  {
    topic: "Electrochemistry",
    icon: "⚡",
    subtopics: [
      {
        title: "Oxidation and Reduction",
        content: "Oxidation Is Loss of electrons, Reduction Is Gain of electrons (OIL RIG). Oxidation can also mean gain of oxygen or loss of hydrogen. Reduction is the reverse.\nIn any redox reaction, one species is oxidised and another is reduced. The substance that causes oxidation is the oxidising agent (it is itself reduced). The substance that causes reduction is the reducing agent (it is itself oxidised).",
        keyTerms: ["oxidation", "reduction", "OIL RIG", "oxidising agent", "reducing agent", "electron transfer"],
        formula: null,
        examTip: "Use OIL RIG to remember. In half-equations, show electrons explicitly: Zn → Zn²⁺ + 2e⁻ (oxidation), Cu²⁺ + 2e⁻ → Cu (reduction). Always check electrons balance."
      },
      {
        title: "Oxidation Numbers",
        content: "Oxidation numbers track electron transfer. Rules: elements = 0, monatomic ions = charge, O = -2 (except peroxides = -1), H = +1 (except metal hydrides = -1), sum in compound = 0, sum in ion = charge.\nA species is oxidised if its oxidation number increases (e.g. Fe²⁺ → Fe³⁺, +2 to +3). It is reduced if its oxidation number decreases (e.g. Mn⁷⁺ in MnO₄⁻ → Mn²⁺, +7 to +2).",
        keyTerms: ["oxidation number", "increase = oxidation", "decrease = reduction"],
        formula: null,
        examTip: "Practice assigning oxidation numbers in compounds like K₂Cr₂O₇, KMnO₄, Na₂S₂O₃. This is a straightforward marks question if you know the rules."
      },
      {
        title: "Electrochemical Cells",
        content: "An electrochemical (galvanic/voltaic) cell converts chemical energy to electrical energy. Two half-cells are connected by a salt bridge (allows ion flow to complete the circuit) and an external wire (electron flow).\nThe more reactive metal is the anode (oxidation occurs, electrons flow away). The less reactive metal is the cathode (reduction occurs, electrons flow towards it). EMF = E°(cathode) - E°(anode).",
        keyTerms: ["electrochemical cell", "anode", "cathode", "salt bridge", "EMF", "half-cell"],
        formula: "EMF = E°(cathode) - E°(anode)",
        examTip: "Remember: AN OX (anode = oxidation), RED CAT (reduction = cathode). The salt bridge contains KNO₃ or KCl solution in agar. Without it, the cell stops working (circuit incomplete)."
      },
      {
        title: "Standard Electrode Potentials",
        content: "The standard electrode potential (E°) measures the tendency of a half-cell to be reduced, relative to the standard hydrogen electrode (SHE, E° = 0.00 V). More positive E° = stronger oxidising agent.\nThe electrochemical series lists half-reactions in order of E°. A species higher in the series (more negative E°) is a better reducing agent. A species lower (more positive E°) is a better oxidising agent.",
        keyTerms: ["standard electrode potential", "E°", "standard hydrogen electrode", "electrochemical series"],
        formula: "E°(cell) = E°(cathode) - E°(anode)",
        examTip: "To predict if a reaction occurs spontaneously: E°(cell) must be positive. The species with the more positive E° is reduced, the other is oxidised."
      },
      {
        title: "Electrolysis",
        content: "Electrolysis uses electrical energy to drive a non-spontaneous reaction. Cations migrate to the cathode (negative electrode) and are reduced. Anions migrate to the anode (positive electrode) and are oxidised.\nExample: electrolysis of brine (NaCl solution) produces Cl₂ at anode, H₂ at cathode, and NaOH in solution. Faraday's laws relate the amount of substance deposited to the charge passed.",
        keyTerms: ["electrolysis", "cathode", "anode", "cation", "anion", "Faraday", "brine"],
        formula: "Q = It (charge = current × time); moles of electrons = Q / 96,500",
        examTip: "Faraday's constant = 96,500 C/mol of electrons. To find mass deposited: Q = It, then moles of e⁻ = Q/96500, then use half-equation to find moles of metal, then mass = n × M."
      },
      {
        title: "Corrosion and Prevention",
        content: "Rusting of iron requires both water and oxygen. Iron is oxidised: Fe → Fe²⁺ + 2e⁻. The electrons reduce oxygen: O₂ + 2H₂O + 4e⁻ → 4OH⁻. Fe²⁺ and OH⁻ form rust (hydrated iron(III) oxide).\nPrevention methods: painting/oiling (barrier), galvanising (zinc coating — sacrificial protection), sacrificial anode (attach more reactive metal like zinc/magnesium), electroplating, alloying (stainless steel).",
        keyTerms: ["rusting", "corrosion", "galvanising", "sacrificial protection", "barrier methods"],
        formula: null,
        examTip: "Explain WHY sacrificial protection works: zinc is more reactive than iron, so it is oxidised preferentially, protecting the iron. The zinc is 'sacrificed'. This is electrochemistry in action."
      }
    ]
  },
  {
    topic: "Environmental Chemistry",
    icon: "🌍",
    subtopics: [
      {
        title: "Water Treatment",
        content: "Stages of water treatment: screening (remove large debris), flocculation (add aluminium sulfate — forms a gel-like floc that traps suspended particles), sedimentation (floc settles), filtration (through sand beds), chlorination (kills bacteria), fluoridation (prevents tooth decay).\nChlorination is essential for disinfection but can form trihalomethanes (THMs) which are potentially harmful. pH is adjusted with lime if needed.",
        keyTerms: ["screening", "flocculation", "sedimentation", "filtration", "chlorination", "fluoridation"],
        formula: null,
        examTip: "Know ALL the stages in order. The exam commonly asks for the role of aluminium sulfate (causes flocculation) and why chlorine is added (kills bacteria/pathogens)."
      },
      {
        title: "Water Hardness",
        content: "Hard water contains dissolved Ca²⁺ or Mg²⁺ ions. It does not lather easily with soap (forms scum instead). Temporary hardness is caused by Ca(HCO₃)₂ — removed by boiling (decomposes to CaCO₃). Permanent hardness is caused by CaSO₄ — not removed by boiling.\nBoth types can be removed by ion exchange (replaces Ca²⁺/Mg²⁺ with Na⁺) or by adding washing soda (Na₂CO₃) which precipitates CaCO₃. Hard water has advantages: Ca²⁺ for bones/teeth, better taste, protective coating in pipes.",
        keyTerms: ["hard water", "temporary hardness", "permanent hardness", "Ca²⁺", "Mg²⁺", "ion exchange", "washing soda"],
        formula: "Ca(HCO₃)₂ → CaCO₃ + H₂O + CO₂ (boiling removes temporary hardness)",
        examTip: "Distinguish temporary from permanent hardness clearly. Remember: temporary = bicarbonates (removed by boiling), permanent = sulfates/chlorides (cannot be boiled away)."
      },
      {
        title: "Biochemical Oxygen Demand (BOD)",
        content: "BOD is the amount of dissolved oxygen consumed by microorganisms to decompose organic matter in water over 5 days at 20°C. High BOD indicates high levels of organic pollution.\nClean water has BOD < 5 mg/L. Sewage-polluted water can have BOD > 100 mg/L. High organic waste → bacteria multiply → oxygen depleted → fish and aquatic life die.",
        keyTerms: ["BOD", "dissolved oxygen", "organic pollution", "microorganisms"],
        formula: null,
        examTip: "BOD is measured over 5 days at 20°C — state these conditions. A high BOD means the water is heavily polluted with organic waste."
      },
      {
        title: "Eutrophication",
        content: "Eutrophication occurs when excess nutrients (nitrates, phosphates from fertilisers and detergents) enter water bodies. This causes rapid algal growth (algal bloom) which blocks sunlight to plants below.\nWhen the algae die, bacteria decompose them, using up dissolved oxygen (increased BOD). Fish and other organisms die from lack of oxygen. Prevention: reduce fertiliser use, phosphate-free detergents, tertiary water treatment.",
        keyTerms: ["eutrophication", "algal bloom", "nitrates", "phosphates", "oxygen depletion"],
        formula: null,
        examTip: "Know the sequence: excess nutrients → algal bloom → light blocked → plants die → bacteria decompose → oxygen depleted → fish die. Each step earns a mark."
      },
      {
        title: "Ozone Layer",
        content: "Ozone (O₃) in the stratosphere absorbs harmful UV radiation, protecting life on Earth. CFCs (chlorofluorocarbons) deplete the ozone layer. UV light breaks C-Cl bonds in CFCs, releasing Cl• radicals.\nCl• + O₃ → ClO• + O₂, then ClO• + O → Cl• + O₂. The Cl• radical is regenerated — one Cl atom can destroy thousands of O₃ molecules. Montreal Protocol (1987) banned CFCs.",
        keyTerms: ["ozone", "CFC", "UV radiation", "free radical", "chlorine radical", "Montreal Protocol"],
        formula: "Cl• + O₃ → ClO• + O₂; ClO• + O → Cl• + O₂",
        examTip: "The Cl radical is a CATALYST in ozone destruction — it is regenerated. Show both equations. Replacement chemicals: HCFCs and HFCs (less harmful but still contribute to greenhouse effect)."
      },
      {
        title: "Greenhouse Effect and Acid Rain",
        content: "Greenhouse gases (CO₂, CH₄, N₂O, H₂O vapour, CFCs) absorb and re-emit infrared radiation, warming the Earth. This natural effect is essential for life, but enhanced levels cause global warming.\nAcid rain forms when SO₂ and NO₂ (from burning fossil fuels) dissolve in rainwater: SO₂ + H₂O → H₂SO₃ (sulfurous acid). Effects: corrodes buildings (limestone), kills fish (acidifies lakes), damages forests. Prevention: flue gas desulfurisation, catalytic converters.",
        keyTerms: ["greenhouse effect", "CO₂", "infrared radiation", "acid rain", "SO₂", "NO₂", "catalytic converter"],
        formula: "SO₂ + H₂O → H₂SO₃; 2SO₂ + O₂ + 2H₂O → 2H₂SO₄",
        examTip: "Know the sources of SO₂ (burning fossil fuels with sulfur impurities) and NOx (high-temperature combustion in engines). Catalytic converters reduce NOx and CO emissions."
      }
    ]
  },
  {
    topic: "Fuels",
    icon: "⛽",
    subtopics: [
      {
        title: "Fossil Fuels",
        content: "Fossil fuels (coal, oil, natural gas) formed from the remains of ancient organisms over millions of years. They are non-renewable — once used, they cannot be replaced on a human timescale.\nCrude oil is a mixture of hydrocarbons separated by fractional distillation based on boiling point. Shorter chains have lower boiling points and are collected higher up the column.",
        keyTerms: ["fossil fuels", "non-renewable", "crude oil", "hydrocarbons"],
        formula: null,
        examTip: "Know the fractions from fractional distillation (top to bottom): refinery gas, petrol/gasoline, naphtha, kerosene, diesel, fuel oil, bitumen. Boiling point increases down the column."
      },
      {
        title: "Fractional Distillation",
        content: "Crude oil is heated to ~350°C and fed into a fractionating column. Vapours rise and condense at different heights according to their boiling points. Shorter chain hydrocarbons rise higher (lower bp).\nEach fraction is a mixture of hydrocarbons with similar boiling points and chain lengths. The process works because of the different intermolecular forces — longer chains have stronger van der Waals forces and higher boiling points.",
        keyTerms: ["fractional distillation", "fractionating column", "boiling point", "condensation"],
        formula: null,
        examTip: "Explain WHY shorter chains have lower boiling points: fewer electrons → weaker van der Waals forces → less energy needed to separate molecules."
      },
      {
        title: "Cracking and Reforming",
        content: "Cracking breaks long-chain alkanes into shorter, more useful molecules (shorter alkanes + alkenes). Thermal cracking uses high temperature (700-1000°C). Catalytic cracking uses a zeolite catalyst at lower temperature.\nReforming converts straight-chain alkanes into branched or cyclic hydrocarbons to increase the octane number of petrol. This improves the fuel's performance in engines (reduces knocking).",
        keyTerms: ["cracking", "thermal cracking", "catalytic cracking", "reforming", "zeolite", "octane number"],
        formula: "C₁₀H₂₂ → C₈H₁₈ + C₂H₄ (example of cracking)",
        examTip: "Cracking always produces at least one alkene (useful for making polymers like polyethene). Write a balanced equation for cracking — atoms must be conserved."
      },
      {
        title: "Octane Number",
        content: "The octane number rates a fuel's resistance to knocking (premature ignition in the engine). Heptane has an octane number of 0 (knocks badly) and 2,2,4-trimethylpentane (iso-octane) has an octane number of 100.\nA fuel with octane number 95 performs like a mixture of 95% iso-octane and 5% heptane. Higher octane = smoother burning, better engine performance. Branched alkanes and aromatics have higher octane numbers than straight-chain alkanes.",
        keyTerms: ["octane number", "knocking", "heptane", "iso-octane", "2,2,4-trimethylpentane"],
        formula: null,
        examTip: "Know that branched-chain alkanes have higher octane numbers than straight-chain. This is why reforming (converting straight to branched) improves fuel quality."
      },
      {
        title: "Alternative Fuels",
        content: "Hydrogen fuel: burns cleanly (2H₂ + O₂ → 2H₂O), no CO₂ emissions. Challenges: storage (very low bp, -253°C), explosive, energy-intensive production.\nBiofuels: ethanol from fermentation of sugars, biodiesel from vegetable oils. They are renewable and approximately carbon neutral (CO₂ released was recently absorbed by the plants). However, they use agricultural land and may compete with food production.",
        keyTerms: ["hydrogen fuel", "biofuels", "ethanol", "biodiesel", "carbon neutral", "renewable"],
        formula: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (fermentation of glucose)",
        examTip: "Compare fuels: hydrogen (cleanest but hardest to store), biofuels (renewable but land-use issues), fossil fuels (convenient but non-renewable and polluting). Exam loves compare-and-contrast."
      }
    ]
  },
  {
    topic: "Radioactivity",
    icon: "☢️",
    subtopics: [
      {
        title: "Types of Radiation",
        content: "Alpha (α): helium nucleus (²⁴He), charge +2, mass 4. Stopped by paper. Most ionising, least penetrating.\nBeta (β): high-speed electron (⁰⁻¹e), charge -1, mass ~0. Stopped by aluminium. Moderate ionising and penetrating.\nGamma (γ): electromagnetic radiation, no charge, no mass. Stopped by thick lead/concrete. Least ionising, most penetrating.",
        keyTerms: ["alpha", "beta", "gamma", "ionising", "penetrating", "helium nucleus", "electron"],
        formula: null,
        examTip: "Remember the order: ionising power α > β > γ, but penetrating power γ > β > α. Alpha is the most dangerous INSIDE the body, gamma is most dangerous from outside."
      },
      {
        title: "Nuclear Equations",
        content: "In nuclear equations, mass number (top) and atomic number (bottom) must be conserved on both sides.\nAlpha decay: ²²₆₈Ra → ²²₂₆₆Rn + ⁴₂He (mass number drops by 4, atomic number by 2).\nBeta decay: ¹⁴₆C → ¹⁴₇N + ⁰⁻¹e (a neutron converts to a proton, atomic number increases by 1).",
        keyTerms: ["mass number", "atomic number", "conservation", "alpha decay", "beta decay"],
        formula: null,
        examTip: "Check both numbers balance. In alpha decay: A drops by 4, Z drops by 2. In beta decay: A stays same, Z increases by 1. Show working clearly."
      },
      {
        title: "Half-Life",
        content: "The half-life (t½) is the time taken for half the radioactive atoms in a sample to decay, or for the activity to halve. It is constant for a given isotope and cannot be changed by physical or chemical means.\nExample: if a sample starts with 800 g and the half-life is 10 years, then after 10 years: 400 g, after 20 years: 200 g, after 30 years: 100 g, and so on.",
        keyTerms: ["half-life", "decay", "activity", "constant", "radioactive isotope"],
        formula: "Amount remaining = initial amount × (1/2)ⁿ where n = number of half-lives = time/t½",
        examTip: "Half-life questions are straightforward calculation marks. Count the number of half-lives (n = total time / t½), then halve the amount n times. Show each step."
      },
      {
        title: "Uses of Radioactivity",
        content: "Medical: cobalt-60 (gamma) for cancer treatment, technetium-99m for medical imaging (short half-life, gamma emitter). Carbon-14 dating to determine the age of organic remains (t½ = 5730 years).\nIndustrial: thickness gauges (beta in paper manufacturing), smoke detectors (americium-241, alpha source), sterilisation of medical equipment (gamma), tracers for detecting leaks in pipes.",
        keyTerms: ["carbon dating", "medical imaging", "tracers", "cobalt-60", "technetium-99m", "smoke detector"],
        formula: null,
        examTip: "Match the type of radiation to the application. Short half-life for medical tracers (clears quickly). Gamma for treatment (penetrates body). Alpha for smoke detectors (easily blocked if particles present)."
      },
      {
        title: "Dangers and Safety",
        content: "Radiation can ionise atoms in living cells, causing DNA mutations which may lead to cancer or cell death. High doses cause radiation sickness.\nSafety precautions: minimise exposure time, maximise distance from source, use appropriate shielding (lead, concrete), wear protective clothing, use tongs to handle sources, monitor exposure with dosimeters/film badges. Radioactive waste must be stored securely for long periods.",
        keyTerms: ["ionisation", "DNA mutation", "cancer", "shielding", "dosimeter", "radioactive waste"],
        formula: null,
        examTip: "Three principles of radiation safety: TIME (minimise), DISTANCE (maximise), SHIELDING (appropriate material). State all three for full marks in safety questions."
      }
    ]
  },
  {
    topic: "Mandatory Experiments",
    icon: "🥊",
    subtopics: [
      {
        title: "Flame Tests",
        content: "Dip a clean nichrome wire loop in concentrated HCl, then into the sample. Hold in a Bunsen flame and observe the colour.\nResults: Li = red, Na = yellow, K = lilac, Ba = green, Cu = blue-green, Ca = orange-red, Sr = crimson. Clean the wire between tests by dipping in HCl and heating until no colour is produced.",
        keyTerms: ["flame test", "nichrome wire", "HCl", "Bunsen burner", "characteristic colour"],
        formula: null,
        examTip: "The wire must be cleaned thoroughly with HCl between tests to avoid contamination. Na contamination (persistent yellow) is very common — view through blue glass to mask it."
      },
      {
        title: "Titration — Acid-Base (Mandatory)",
        content: "Prepare a standard solution of primary standard (e.g. Na₂CO₃). Weigh accurately, dissolve in deionised water, transfer to volumetric flask, and make up to the mark.\nFill the burette with the acid, pipette 25 cm³ of the standard solution into a conical flask, add indicator, titrate until colour change. Record titre. Repeat until concordant results (within 0.1 cm³). Calculate concentration.",
        keyTerms: ["standard solution", "volumetric flask", "burette", "pipette", "concordant", "indicator"],
        formula: "n = C × V; C = n/V",
        examTip: "Precautions: rinse burette with the solution to be used, rinse pipette with the solution it will measure, but wash the conical flask with deionised water only. Use a white tile."
      },
      {
        title: "Titration — Redox with KMnO₄ (Mandatory)",
        content: "Standardise KMnO₄ solution against a primary standard (oxalic acid/sodium oxalate). Acidify with dilute H₂SO₄. Warm to ~60°C.\nAdd KMnO₄ from the burette to the oxalic acid in the flask. The purple colour is decolourised as it reacts. The endpoint is a permanent pink/purple colour that persists for 30 seconds. KMnO₄ is self-indicating — no separate indicator needed.",
        keyTerms: ["KMnO₄", "self-indicating", "oxalic acid", "H₂SO₄", "permanent pink colour", "warm"],
        formula: "2KMnO₄ + 5H₂C₂O₄ + 3H₂SO₄ → 2MnSO₄ + K₂SO₄ + 10CO₂ + 8H₂O",
        examTip: "Never use HCl (reacts with KMnO₄). Warm the solution but don't boil. The first drop is slow to decolourise (Mn²⁺ ions catalyse the reaction — autocatalysis). Add drops slowly near endpoint."
      },
      {
        title: "Preparation of a Standard Solution (Mandatory)",
        content: "Weigh an accurate mass of primary standard on a clock glass or weighing boat using a digital balance. Dissolve in a small amount of deionised water in a beaker. Transfer ALL solution to a volumetric flask using a glass rod and funnel.\nRinse the beaker, rod, and funnel with deionised water into the flask to ensure all solute is transferred. Make up to the calibration mark with deionised water — use a dropper for the last few drops. Stopper and invert several times to mix.",
        keyTerms: ["primary standard", "volumetric flask", "calibration mark", "quantitative transfer", "deionised water"],
        formula: "C = n/V = (mass/M)/V",
        examTip: "The quantitative transfer (rinsing beaker into flask) is crucial — any solute left behind makes the concentration inaccurate. Never heat a volumetric flask. Add water to the meniscus line at eye level."
      },
      {
        title: "Reactions of Ethanal and Ethanoic Acid (Mandatory)",
        content: "Ethanal (acetaldehyde, CH₃CHO): Fehling's test — add Fehling's A and B, heat gently, brick-red precipitate forms (Cu₂O). Tollens' test — add ammoniacal silver nitrate, warm in hot water bath, silver mirror forms on walls of clean test tube.\nEthanoic acid (acetic acid, CH₃COOH): test with sodium carbonate (fizzing, CO₂ produced), test pH with universal indicator (pH ~3, weak acid), react with alcohol + H₂SO₄ to form an ester (fruity smell).",
        keyTerms: ["Fehling's", "Tollens'", "brick-red precipitate", "silver mirror", "sodium carbonate", "ester"],
        formula: null,
        examTip: "For Tollens' test, the test tube must be very clean (washed with NaOH then deionised water) for the silver mirror to form. Warm gently in a water bath — do NOT heat directly."
      },
      {
        title: "Rate of Reaction Experiment (Mandatory)",
        content: "Measure the rate of reaction between sodium thiosulfate and hydrochloric acid by timing how long a cross (X) takes to disappear. Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂ + S. The sulfur precipitate causes the cloudiness.\nVary ONE factor at a time (e.g. concentration or temperature) while keeping others constant. Record time for cross to disappear. Rate ∝ 1/time. Plot graphs of 1/time vs concentration or temperature.",
        keyTerms: ["sodium thiosulfate", "HCl", "sulfur precipitate", "disappearing cross", "1/time"],
        formula: "Rate ∝ 1/time",
        examTip: "Control variables carefully. Same observer should judge the endpoint each time (subjective). Same volume, same flask. Plot 1/time on the y-axis, not time, to show rate."
      },
      {
        title: "Preparation of Ethene and Tests (Mandatory)",
        content: "Heat ethanol with excess concentrated H₂SO₄ (dehydrating agent) using aluminium oxide on mineral wool. Collect the ethene gas over water.\nTests: (1) Burn ethene — burns with a luminous, smoky flame. (2) Pass through bromine water — decolourises from brown/orange to colourless (addition of Br₂ across the double bond). (3) Pass through acidified KMnO₄ — decolourises from purple to colourless.",
        keyTerms: ["ethene", "dehydration", "ethanol", "bromine water", "decolourises", "collect over water"],
        formula: "C₂H₅OH → C₂H₄ + H₂O (with conc. H₂SO₄)",
        examTip: "Safety: ethene is flammable. Ensure no naked flames near the collection. The bromine water test proves the C=C double bond. State the colour change clearly."
      },
      {
        title: "Estimation of Iron with KMnO₄ (Mandatory)",
        content: "Dissolve iron tablets/nails in excess dilute H₂SO₄. Filter if necessary. Make up to a known volume in a volumetric flask.\nTitrate an aliquot (e.g. 25 cm³) against standardised KMnO₄. The Fe²⁺ is oxidised to Fe³⁺ by MnO₄⁻. Endpoint: permanent pink colour persists. Calculate moles of KMnO₄, use the mole ratio (1:5) to find moles of Fe²⁺, then mass of iron.",
        keyTerms: ["iron estimation", "Fe²⁺", "KMnO₄", "acidified", "1:5 ratio"],
        formula: "MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺",
        examTip: "The 1:5 mole ratio is critical: 1 mol KMnO₄ reacts with 5 mol Fe²⁺. Remember to scale up from the aliquot to the total volume when calculating the total iron content."
      },
      {
        title: "Recrystallisation (Mandatory)",
        content: "Dissolve the impure solid in the minimum volume of hot solvent. Filter while hot to remove insoluble impurities. Allow the filtrate to cool slowly — pure crystals form as solubility decreases.\nFilter under reduced pressure (Buchner funnel and flask) to collect the crystals. Wash with a small amount of cold solvent. Dry between filter papers or in a desiccator. Weigh to calculate percentage yield.",
        keyTerms: ["recrystallisation", "minimum volume", "hot solvent", "slow cooling", "Buchner funnel", "percentage yield"],
        formula: "% yield = (actual yield / theoretical yield) × 100",
        examTip: "Key points: use minimum volume of hot solvent (too much = poor yield), cool slowly (larger, purer crystals), wash with cold solvent (dissolves less product than warm solvent)."
      },
      {
        title: "Heat of Reaction by Calorimetry (Mandatory)",
        content: "Use a polystyrene cup calorimeter. Measure a known volume of solution (e.g. 50 cm³ of HCl). Record initial temperature. Add the second reactant (e.g. NaOH solution). Stir with thermometer and record highest temperature.\nCalculate: q = mcΔT (m = total mass of solutions, c = 4.18 J/g/°C, ΔT = temperature rise). Then ΔH = q / moles of limiting reagent (in kJ/mol). The answer should be negative for an exothermic reaction.",
        keyTerms: ["calorimeter", "polystyrene cup", "temperature rise", "q = mcΔT", "heat loss"],
        formula: "q = mcΔT; ΔH = -q/n",
        examTip: "Sources of error: heat loss (main source), incomplete reaction, heat capacity of cup not accounted for. Use a lid and stir continuously. This experiment commonly appears on the exam."
      }
    ]
  }
];

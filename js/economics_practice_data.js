/* LC Economics — Structured marking points for practice marking */
var ECON_MARKING = {
  "2024": {
    1: {
      totalMarks: 10, topic: "Balance of Payments",
      points: [
        { marks:2, desc:"Calculates total credits (€167bn)",
          accept:[{num:[167]},{all:["76","91"]}],
          hit:"Credits: €76bn + €91bn = €167bn",
          miss:"Add credits: €76bn + €91bn = €167bn" },
        { marks:2, desc:"Calculates total debits (€121bn)",
          accept:[{num:[121]},{all:["38","83"]}],
          hit:"Debits: €38bn + €83bn = €121bn",
          miss:"Add debits: €38bn + €83bn = €121bn" },
        { marks:2, desc:"Calculates balance (€46bn)",
          accept:[{num:[46]}],
          hit:"Balance correctly calculated as €46bn",
          miss:"Balance = Credits − Debits = €167bn − €121bn = €46bn" },
        { marks:2, desc:"States it is a surplus",
          accept:[{all:["surplus"]}],
          hit:"Correctly identified as a surplus",
          miss:"You needed to state this is a SURPLUS (credits exceed debits)" },
        { marks:2, desc:"Explains an advantage of a surplus",
          accept:[
            {all:["growth"],near:[["growth","increase|higher|economic",8]]},
            {all:["employment|jobs"],near:[["employment|jobs","increase|create|more",8]]},
            {all:["tax","revenue"]},
            {all:["injection"],near:[["injection","circular|flow|economy",8]]},
            {all:["multiplier"]},
            {all:["fdi|investment"],near:[["fdi|investment","attract|encourage",8]]}
          ],
          requireConnector:true,
          hit:"Good explanation of an advantage of surplus",
          miss:"Explain an advantage: e.g. increased employment, tax revenue, economic growth, or multiplier effect" }
      ]
    },

    2: {
      totalMarks: 10, topic: "Full Employment",
      points: [
        { marks:2, desc:"Everyone willing and able to work is employed",
          accept:[{all:["willing","able"]},{phrase:"willing and able"}],
          hit:"Correctly stated: willing and able to work",
          miss:"Full employment means everyone WILLING AND ABLE to work has a job" },
        { marks:1, desc:"At existing/current wage rates",
          accept:[{all:["wage|salary|pay"]},{phrase:["existing wage","current wage","prevailing wage"]}],
          hit:"Mentioned existing wage rates",
          miss:"Should include: at existing/current wage rates" },
        { marks:1, desc:"Does not mean zero unemployment",
          accept:[{near:[["not|doesn't|does","zero|0%|nil",4]]},{all:["frictional|structural"]}],
          hit:"Noted full employment ≠ zero unemployment",
          miss:"Full employment does NOT mean zero unemployment — frictional/structural always exists" },
        { marks:1, desc:"Approximately 4–5% unemployment rate",
          accept:[{phrase:["4%","5%","4-5%","4 to 5","4.8%"]},{num:[4,5],all:["%|percent|rate"]}],
          hit:"Stated approximate rate (4–5%)",
          miss:"In Ireland, full employment is around 4–5% unemployment" },
        { marks:2, desc:"First reason/impact explained", group:"reasons_q2",
          accept:[
            {all:["tax|revenue|paye|usc|vat"],near:[["tax|revenue","increase|more|higher|boost",8]]},
            {all:["welfare|dole|social"],near:[["welfare|dole|payment","reduce|decrease|less|save|lower",8]]},
            {all:["demand|spending|consumption"],near:[["demand|spending","increase|boost|higher|more",8]]},
            {all:["poverty|standard of living"],near:[["poverty","reduce|decrease|lower",8]]},
            {all:["inflation"],near:[["employment|full","inflation|spending|demand",10]]},
            {all:["budget|deficit"],near:[["budget|deficit","balance|reduce|surplus",8]]},
            {all:["balance of payments|import"],near:[["employment|income","import|balance",10]]},
            {all:["housing"]}
          ],
          hit:"Good first point with explanation",
          miss:"Give a reason: e.g. increased tax revenue, reduced welfare spending, or boosted demand" },
        { marks:2, desc:"Second reason/impact explained", group:"reasons_q2",
          accept:[
            {all:["tax|revenue|paye|usc|vat"],near:[["tax|revenue","increase|more|higher|boost",8]]},
            {all:["welfare|dole|social"],near:[["welfare|dole|payment","reduce|decrease|less|save|lower",8]]},
            {all:["demand|spending|consumption"],near:[["demand|spending","increase|boost|higher|more",8]]},
            {all:["poverty|standard of living"],near:[["poverty","reduce|decrease|lower",8]]},
            {all:["inflation"],near:[["employment|full","inflation|spending|demand",10]]},
            {all:["budget|deficit"],near:[["budget|deficit","balance|reduce|surplus",8]]},
            {all:["balance of payments|import"],near:[["employment|income","import|balance",10]]},
            {all:["housing"]}
          ],
          hit:"Good second point with explanation",
          miss:"You needed a second DISTINCT reason/impact" }
      ]
    },

    3: {
      totalMarks: 10, topic: "Price Ceiling & Energy",
      points: [
        { marks:2, desc:"Price ceiling drawn below equilibrium (€200 below €600)",
          accept:[
            {all:["below","equilibrium"]},
            {all:["200","below|under|lower","600"]},
            {all:["horizontal","line"]}
          ],
          hit:"Correctly positioned price ceiling below equilibrium",
          miss:"Draw a horizontal line at €200, BELOW the equilibrium of €600" },
        { marks:2, desc:"Creates excess demand/shortage",
          accept:[{phrase:["excess demand","shortage"]},{all:["demand","exceed|greater|more","supply"]}],
          hit:"Identified excess demand/shortage",
          miss:"A price below equilibrium creates EXCESS DEMAND (shortage)" },
        { marks:2, desc:"Defines price ceiling as maximum price by government",
          accept:[
            {all:["maximum|max","price"]},
            {all:["government|state|law"],near:[["government|state|law","set|impose|establish|maximum",6]]}
          ],
          hit:"Correctly defined as a maximum price set by government",
          miss:"A price ceiling is a MAXIMUM price set by the GOVERNMENT by law" },
        { marks:2, desc:"Firms cannot legally exceed this price",
          accept:[
            {all:["cannot|can't|illegal|legally"],near:[["cannot|can't|illegal|legally","exceed|charge|above|higher",6]]},
            {all:["law|legal"],near:[["law|legal","price|charge|exceed",6]]}
          ],
          hit:"Noted firms cannot legally exceed the ceiling",
          miss:"A firm CANNOT LEGALLY charge more than the price ceiling" },
        { marks:2, desc:"Explains reason for intervention (cost of living / consumer protection)",
          accept:[
            {phrase:["cost of living","standard of living"]},
            {all:["protect","consumer|citizen|household"]},
            {all:["market failure"]},
            {all:["energy","crisis|cost|price"],near:[["energy","crisis|cost|price|war|ukraine",8]]},
            {all:["afford|income|fixed income"]}
          ],
          hit:"Good explanation of why government intervened",
          miss:"Explain why: to ease cost of living crisis, protect consumers from excessive energy prices" }
      ]
    },

    4: {
      totalMarks: 10, topic: "Capital Deepening & Labour Demand",
      points: [
        { marks:2, desc:"Identifies capital DEEPENING (not widening)",
          accept:[{phrase:"capital deepening"},{all:["deepening"]}],
          hit:"Correctly identified as capital deepening",
          miss:"This is CAPITAL DEEPENING (not widening)" },
        { marks:2, desc:"Explains why: more capital per worker / ratio changed",
          accept:[
            {phrase:"capital per worker"},
            {all:["ratio","changed|increased|2:1"]},
            {all:["machine","doubled|increased"],near:[["machine|capital","doubled|increased|more",6],["worker|labour","same|unchanged|stayed",8]]},
            {all:["1:1","2:1"]}
          ],
          hit:"Good explanation — capital per worker increased",
          miss:"Ratio went from 1:1 to 2:1: machines doubled (5→10) while workers stayed the same (5)" },
        { marks:3, desc:"First factor affecting demand for labour (explained)", group:"factors_q4",
          accept:[
            {all:["wage|pay|salary"],near:[["wage|pay|salary","demand|hire|employ|cost|lower|higher",8]]},
            {all:["derived demand"],near:[["derived","demand|output|product",6]]},
            {all:["demand","output|product|good|service"]},
            {all:["technology|automation"],near:[["technology|automation","labour|worker|replace|reduce",8]]},
            {all:["expectation|confidence"],near:[["expectation|confidence","invest|hire|employ",8]]},
            {all:["government","incentive|subsidy|grant|prsi"]},
            {all:["mrp|marginal revenue product"]},
            {all:["price","capital|factor"],near:[["capital|factor","labour|cost|compare|substitute",8]]}
          ],
          requireConnector:true,
          hit:"Good first factor with explanation",
          miss:"Name and explain a factor: e.g. wage rates, derived demand, technology, government incentives" },
        { marks:3, desc:"Second factor affecting demand for labour (explained)", group:"factors_q4",
          accept:[
            {all:["wage|pay|salary"],near:[["wage|pay|salary","demand|hire|employ|cost|lower|higher",8]]},
            {all:["derived demand"],near:[["derived","demand|output|product",6]]},
            {all:["demand","output|product|good|service"]},
            {all:["technology|automation"],near:[["technology|automation","labour|worker|replace|reduce",8]]},
            {all:["expectation|confidence"],near:[["expectation|confidence","invest|hire|employ",8]]},
            {all:["government","incentive|subsidy|grant|prsi"]},
            {all:["mrp|marginal revenue product"]},
            {all:["price","capital|factor"],near:[["capital|factor","labour|cost|compare|substitute",8]]}
          ],
          requireConnector:true,
          hit:"Good second factor with explanation",
          miss:"Give a second DISTINCT factor affecting demand for labour" }
      ]
    },

    5: {
      totalMarks: 10, topic: "Excess Demand (Concert Tickets)",
      points: [
        { marks:2, desc:"Supply is perfectly inelastic / vertical / fixed at 80,000",
          accept:[
            {phrase:["perfectly inelastic","vertical supply","fixed supply"]},
            {all:["supply","fixed|vertical|inelastic|cannot change"]},
            {all:["80,000|80000","capacity|seat|ticket|venue|maximum"]}
          ],
          hit:"Supply correctly described as perfectly inelastic/fixed",
          miss:"Supply is PERFECTLY INELASTIC (vertical) — fixed at 80,000 capacity" },
        { marks:2, desc:"Demand curve slopes downward",
          accept:[
            {all:["demand","downward|slope|curve"]},
            {phrase:["law of demand","downward sloping","downward-sloping"]}
          ],
          hit:"Demand curve slopes downward (law of demand)",
          miss:"Demand curve slopes downward from left to right (law of demand)" },
        { marks:2, desc:"Price (€97.10) set below equilibrium price",
          accept:[
            {all:["price","below","equilibrium"]},
            {all:["97","below|under|lower"]},
            {all:["ticket price","below|under|low"]}
          ],
          hit:"Correctly noted price is set below equilibrium",
          miss:"The ticket price (€97.10) is set BELOW the equilibrium price" },
        { marks:2, desc:"Excess demand / shortage results",
          accept:[
            {phrase:["excess demand","shortage","sold out"]},
            {all:["more","people|buyer|consumer","than","ticket|seat|available"]}
          ],
          hit:"Identified excess demand/shortage",
          miss:"At this price, quantity demanded exceeds quantity supplied → EXCESS DEMAND (shortage)" },
        { marks:2, desc:"Explains connection: low price causes shortage / sold out quickly",
          accept:[
            {near:[["price","below|low|under",5],["demand","exceed|greater|shortage|excess",10]]},
            {all:["sold out"],near:[["sold out","hours|quickly|fast|immediately",6]]},
            {all:["quantity demanded","greater|exceed|more","quantity supplied"]}
          ],
          hit:"Good explanation linking price to the shortage",
          miss:"Because the price was set below equilibrium, Qd > Qs, which is why it sold out in hours" }
      ]
    },

    6: {
      totalMarks: 10, topic: "Cost Curves (AC & MC)",
      points: [
        { marks:2, desc:"When MC < AC, AC is falling",
          accept:[
            {all:["mc|marginal","less|below|lower|under","ac|average"],near:[["ac|average","fall|decreas|declin",8]]},
            {phrase:["mc is less than ac","mc is below ac","marginal cost is less","marginal cost is below"]}
          ],
          hit:"Correct: when MC < AC, AC is falling",
          miss:"When MC is LESS THAN AC → Average Cost is FALLING" },
        { marks:2, desc:"When MC > AC, AC is rising",
          accept:[
            {all:["mc|marginal","greater|above|higher|exceed|more","ac|average"],near:[["ac|average","ris|increas",8]]},
            {phrase:["mc is greater than ac","mc is above ac","marginal cost is greater","marginal cost is above"]}
          ],
          hit:"Correct: when MC > AC, AC is rising",
          miss:"When MC is GREATER THAN AC → Average Cost is RISING" },
        { marks:2, desc:"MC = AC at minimum point of AC (MC intersects AC)",
          accept:[
            {all:["mc|marginal","equal|=","ac|average"],near:[["ac|average","minimum|lowest",8]]},
            {all:["intersect|cross","minimum"]},
            {all:["mc","intersect|cross|cut","ac"]}
          ],
          hit:"Correct: MC = AC at the minimum point of AC",
          miss:"When MC EQUALS AC → AC is at its MINIMUM point. MC intersects AC at this lowest point" },
        { marks:2, desc:"AC falls due to specialisation / spreading fixed costs",
          accept:[
            {phrase:["specialisation","specialization","division of labour","division of labor"]},
            {all:["fixed cost"],near:[["fixed cost","spread|distribut",8]]},
            {all:["efficient|productivity"],near:[["efficient|productivity","increas|improv",6]]}
          ],
          hit:"AC falls due to specialisation/division of labour or fixed costs spread over more output",
          miss:"AC falls because of SPECIALISATION/DIVISION OF LABOUR or FIXED COSTS SPREAD over more units" },
        { marks:2, desc:"AC rises due to law of diminishing marginal returns",
          accept:[
            {phrase:["diminishing marginal returns","diminishing returns","law of diminishing"]},
            {all:["diminishing"],near:[["diminishing","return|marginal",5]]},
            {all:["variable","factor|labour"],near:[["variable|labour","fixed|capital",8]]}
          ],
          hit:"AC rises due to the law of diminishing marginal returns",
          miss:"AC rises because of the LAW OF DIMINISHING MARGINAL RETURNS — adding more variable factor to fixed factor" }
      ]
    },

    7: {
      totalMarks: 10, topic: "Market Failure (Vaping)",
      points: [
        { marks:2, desc:"Identifies vapes as demerit goods",
          accept:[{phrase:"demerit good"},{all:["demerit"]}],
          hit:"Correctly identified vapes as demerit goods",
          miss:"Vape products are DEMERIT GOODS" },
        { marks:2, desc:"Overproduced/overconsumed in free market",
          accept:[
            {phrase:["overproduced","overconsumed","over-produced","over-consumed"]},
            {all:["free market"],near:[["free market","too much|over|excess|fail",8]]}
          ],
          hit:"Noted overproduction/overconsumption in the free market",
          miss:"In a free market, demerit goods are OVERPRODUCED and OVERCONSUMED" },
        { marks:2, desc:"Negative externalities / costs on third parties",
          accept:[
            {phrase:["negative externality","negative externalities"]},
            {all:["third party|third parties"]},
            {all:["externality|externalities"]},
            {all:["social","cost|harm|damage"]}
          ],
          hit:"Identified negative externalities (costs on third parties)",
          miss:"Consumption creates NEGATIVE EXTERNALITIES — costs imposed on THIRD PARTIES not involved" },
        { marks:2, desc:"First government intervention explained", group:"interventions_q7",
          accept:[
            {all:["ban|prohibit|restrict"],near:[["ban|prohibit|restrict","sale|sell|under|age|18|minor",8]]},
            {all:["tax|excise|duty|levy"],near:[["tax|excise|duty","increase|impose|higher|price",8]]},
            {all:["regulation|restrict|ban"],near:[["regulation|restrict|ban","advertising|marketing|promotion",8]]},
            {all:["education|campaign|information|awareness"],near:[["education|campaign|information","danger|health|risk|harm",8]]},
            {all:["legislation|law|regulate"]}
          ],
          requireConnector:true,
          hit:"Good first intervention with explanation",
          miss:"Name an intervention: e.g. ban sales to under-18s, impose excise duties, restrict advertising, education campaigns" },
        { marks:2, desc:"Second government intervention explained", group:"interventions_q7",
          accept:[
            {all:["ban|prohibit|restrict"],near:[["ban|prohibit|restrict","sale|sell|under|age|18|minor",8]]},
            {all:["tax|excise|duty|levy"],near:[["tax|excise|duty","increase|impose|higher|price",8]]},
            {all:["regulation|restrict|ban"],near:[["regulation|restrict|ban","advertising|marketing|promotion",8]]},
            {all:["education|campaign|information|awareness"],near:[["education|campaign|information","danger|health|risk|harm",8]]},
            {all:["legislation|law|regulate"]}
          ],
          requireConnector:true,
          hit:"Good second intervention with explanation",
          miss:"Give a second DISTINCT government intervention" }
      ]
    },

    8: {
      totalMarks: 10, topic: "Price Discrimination",
      points: [
        { marks:2, desc:"Different prices charged to different consumers",
          accept:[
            {all:["different","price"]},
            {phrase:["price discrimination","different prices"]}
          ],
          hit:"Charging different prices to different consumers",
          miss:"Price discrimination means charging DIFFERENT PRICES to DIFFERENT CONSUMERS" },
        { marks:2, desc:"For the same good or service",
          accept:[{all:["same","good|service|product|item"]}],
          hit:"For the same good/service",
          miss:"Must be for the SAME good or service" },
        { marks:2, desc:"Not due to differences in costs of production",
          accept:[
            {all:["not|no","cost","differ|difference|due|based"]},
            {phrase:["not due to cost","not based on cost","no difference in cost"]}
          ],
          hit:"Price difference not related to costs",
          miss:"The price difference is NOT DUE to differences in costs of production" },
        { marks:1, desc:"Gives a relevant example",
          accept:[
            {all:["cinema|movie|film|theatre|airline|train|bus|doctor|peak|off-peak|student|adult|pensioner"]},
            {all:["example","price|charge|pay"]}
          ],
          bonus:1,
          hit:"Good example of price discrimination",
          miss:"Include an example: e.g. cinema charging students €8 and adults €12 for the same film" },
        { marks:3, desc:"Two consumer characteristics that permit price discrimination", group:"chars_q8",
          accept:[
            {phrase:"consumer ignorance"},
            {phrase:"consumer indifference"},
            {phrase:"consumer attitudes"},
            {phrase:["price elasticity","elasticities of demand","different elasticit"]},
            {phrase:"market separation"},
            {all:["monopoly","power"]},
            {all:["ignorance|unaware"],near:[["ignorance|unaware","consumer|customer|buyer|price",8]]},
            {all:["indifference|don't care"],near:[["indifference|don't care","consumer|customer|price",8]]},
            {all:["separate|separation"],near:[["separate|separation","market|resell|resale",8]]}
          ],
          hit:"Identified relevant consumer characteristics",
          miss:"Consumer characteristics: ignorance, indifference, different price elasticities, market separation, monopoly power" }
      ]
    },

    9: {
      totalMarks: 10, topic: "Opportunity Cost & Externalities",
      points: [
        { marks:2, desc:"Identifies opportunity cost of the €2bn woodland pledge",
          accept:[
            {all:["opportunity cost"]},
            {phrase:"next best alternative"},
            {all:["alternative|instead|could have|forgone|given up"]}
          ],
          hit:"Good understanding of opportunity cost",
          miss:"Opportunity cost = the NEXT BEST ALTERNATIVE FORGONE when choosing to spend €2bn on woodland" },
        { marks:2, desc:"Names a specific alternative use for the €2bn",
          accept:[
            {all:["housing|homes|social housing"]},
            {all:["healthcare|health|hospital"]},
            {all:["road|transport|rail|infrastructure"]},
            {all:["education|school|university"]}
          ],
          hit:"Named a specific alternative use",
          miss:"Name what else the €2bn could fund: housing, healthcare, roads, or education" },
        { marks:2, desc:"Social benefit of installing woodland",
          accept:[
            {all:["carbon|co2|climate|emission"],near:[["carbon|co2|climate","reduce|absorb|combat|sequester|offset",8]]},
            {all:["biodiversity|wildlife|habitat|species"]},
            {all:["recreation|amenity|walking|tourism"]},
            {all:["flood"],near:[["flood","prevent|reduce|protect|mitigat",6]]},
            {all:["air","quality|pollution|clean"]}
          ],
          hit:"Good social benefit identified",
          miss:"Social benefits include: carbon absorption, biodiversity, recreation, flood prevention, improved air quality" },
        { marks:2, desc:"Defines positive externality: benefit to third party",
          accept:[
            {all:["benefit","third party|third parties|someone|society|community"]},
            {phrase:"positive externality"},
            {all:["benefit"],near:[["benefit","not involved|not directly|external|third",8]]}
          ],
          hit:"Correctly defined positive externality",
          miss:"A positive externality is a BENEFIT enjoyed by a THIRD PARTY not directly involved" },
        { marks:2, desc:"Third party did not pay for/not involved in the benefit",
          accept:[
            {all:["not","involved|pay|paid|directly|participate"]},
            {all:["third party"],near:[["third party","not|without|no|didn't",6]]},
            {all:["wider|broader","community|society|public|region"]}
          ],
          hit:"Noted that the third party did not pay for the benefit",
          miss:"The third party is NOT DIRECTLY INVOLVED and did NOT PAY for this benefit" }
      ]
    },

    10: {
      totalMarks: 10, topic: "National Income Accounts",
      points: [
        { marks:1, desc:"GNP at CMP = €325bn (given)",
          accept:[{num:[325]},{all:["gnp","325"]}],
          hit:"GNP = €325bn",
          miss:"GNP at CMP = GDP + NFIA = €430bn + (−€105bn) = €325bn" },
        { marks:2, desc:"Applies GNI formula: GNP + EU Subsidies − EU Taxes",
          accept:[
            {all:["subsid","tax"]},
            {all:["gnp|325","subsid|1.7|2"]},
            {phrase:["gni","gnp"]}
          ],
          hit:"Correct formula: GNI = GNP + EU Subsidies − EU Taxes",
          miss:"Formula: GNI = GNP + EU Subsidies − EU Taxes" },
        { marks:2, desc:"GNI = €326.5bn",
          accept:[{num:[326.5,326]},{all:["326"]}],
          hit:"GNI correctly calculated as €326.5bn",
          miss:"GNI = €325bn + €2bn − €0.5bn = €326.5bn" },
        { marks:2, desc:"NFIA: difference between income earned by Irish abroad and foreigners in Ireland",
          accept:[
            {phrase:"net factor income"},
            {all:["income","earned","abroad|foreign|overseas"]},
            {all:["difference|gap"],near:[["difference|gap","irish|domestic|resident","foreign|multinational",12]]}
          ],
          hit:"Correctly explained NFIA",
          miss:"NFIA = difference between income earned by Irish residents abroad and income earned by foreign residents in Ireland" },
        { marks:2, desc:"Ireland's NFIA is negative because of multinational profit repatriation",
          accept:[
            {all:["negative|minus"],near:[["negative|minus","multinational|mnc|profit|repatriat",10]]},
            {all:["profit"],near:[["profit","repatriat|sent|back|home|abroad|outflow|leave",8]]},
            {all:["gnp","lower|less|smaller","gdp"]}
          ],
          hit:"Explained why NFIA is negative (MNC profit repatriation)",
          miss:"Ireland's NFIA is NEGATIVE because multinationals repatriate large profits → GNP is significantly lower than GDP" }
      ]
    }
  }
};

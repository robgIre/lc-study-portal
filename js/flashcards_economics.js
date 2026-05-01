var FLASHCARDS_ECONOMICS = [
  // ===== DEMAND & SUPPLY =====
  {cat:"demand-supply", q:"Define Demand", a:"The quantity of a good or service that consumers are willing and able to buy at a given price over a given period of time."},
  {cat:"demand-supply", q:"State the Law of Demand", a:"As the price of a good rises, the quantity demanded falls, ceteris paribus (all other things being equal)."},
  {cat:"demand-supply", q:"Define Supply", a:"The quantity of a good or service that producers are willing and able to offer for sale at a given price over a given period of time."},
  {cat:"demand-supply", q:"State the Law of Supply", a:"As the price of a good rises, the quantity supplied rises, ceteris paribus."},
  {cat:"demand-supply", q:"What is Equilibrium Price?", a:"The price at which the quantity demanded equals the quantity supplied. There is no excess demand or excess supply at this price."},
  {cat:"demand-supply", q:"Name 5 factors that shift the Demand curve", a:"1. Income (normal/inferior goods)\n2. Price of substitutes/complements\n3. Consumer tastes & preferences\n4. Population changes\n5. Expectations of future price changes"},
  {cat:"demand-supply", q:"Name 5 factors that shift the Supply curve", a:"1. Cost of factors of production\n2. Technology improvements\n3. Government taxes/subsidies\n4. Number of firms in market\n5. Weather/natural conditions"},
  {cat:"demand-supply", q:"Define Consumer Surplus", a:"The difference between what a consumer is willing to pay and what they actually pay. Shown as the area above the price line and below the demand curve."},
  {cat:"demand-supply", q:"Define Producer Surplus", a:"The difference between the price a producer receives and the minimum price they would accept. Area below price line and above supply curve."},
  {cat:"demand-supply", q:"What is a Price Floor? Give an example.", a:"A minimum price set by the government above the equilibrium price. Example: the National Minimum Wage in Ireland."},
  {cat:"demand-supply", q:"What is a Price Ceiling? Give an example.", a:"A maximum price set by the government below the equilibrium price. Example: rent controls in Ireland."},

  // ===== ELASTICITY =====
  {cat:"elasticity", q:"Define Price Elasticity of Demand (PED)", a:"A measure of the responsiveness of quantity demanded to a change in price.\nFormula: PED = %ΔQd / %ΔP\nPED is always negative (inverse relationship)."},
  {cat:"elasticity", q:"What does PED > 1 mean?", a:"Demand is price elastic — quantity demanded changes by a greater percentage than the price change. Revenue rises when price falls."},
  {cat:"elasticity", q:"What does PED < 1 mean?", a:"Demand is price inelastic — quantity demanded changes by a smaller percentage than the price change. Revenue rises when price rises."},
  {cat:"elasticity", q:"Name 4 factors affecting PED", a:"1. Availability of substitutes (more subs → more elastic)\n2. Necessity vs luxury (necessities → inelastic)\n3. Proportion of income spent (higher → more elastic)\n4. Time period (longer → more elastic)"},
  {cat:"elasticity", q:"Define Income Elasticity of Demand (YED)", a:"A measure of the responsiveness of quantity demanded to a change in income.\nFormula: YED = %ΔQd / %ΔY\nPositive for normal goods, negative for inferior goods."},
  {cat:"elasticity", q:"Define Cross Elasticity of Demand (XED)", a:"A measure of the responsiveness of quantity demanded of Good A to a change in price of Good B.\nFormula: XED = %ΔQd(A) / %ΔP(B)\nPositive for substitutes, negative for complements."},
  {cat:"elasticity", q:"Define Price Elasticity of Supply (PES)", a:"A measure of the responsiveness of quantity supplied to a change in price.\nFormula: PES = %ΔQs / %ΔP\nAlways positive (direct relationship)."},
  {cat:"elasticity", q:"Name 4 factors affecting PES", a:"1. Time period (longer → more elastic)\n2. Availability of stocks/inventory\n3. Spare capacity in production\n4. Ease of switching production"},

  // ===== MARKET STRUCTURES =====
  {cat:"market-structures", q:"List the 4 market structures", a:"1. Perfect Competition\n2. Monopolistic Competition\n3. Oligopoly\n4. Monopoly"},
  {cat:"market-structures", q:"State 5 characteristics of Perfect Competition", a:"1. Many buyers and many sellers\n2. Homogeneous (identical) products\n3. Perfect information\n4. Free entry and exit\n5. Firms are price takers"},
  {cat:"market-structures", q:"State 4 characteristics of a Monopoly", a:"1. One seller dominates the market\n2. Unique product with no close substitutes\n3. High barriers to entry\n4. Firm is a price maker"},
  {cat:"market-structures", q:"What is an Oligopoly?", a:"A market structure dominated by a few large firms. Features include interdependence, non-price competition, barriers to entry, and possible collusion."},
  {cat:"market-structures", q:"Define Supernormal Profit", a:"Profit earned above normal profit. Total Revenue > Total Cost (including opportunity cost). Only possible in imperfect competition in the long run."},
  {cat:"market-structures", q:"What is Normal Profit?", a:"The minimum level of profit needed to keep a firm in the industry in the long run. Total Revenue = Total Cost (including opportunity cost)."},
  {cat:"market-structures", q:"What is a Cartel?", a:"A formal agreement among firms in an oligopoly to fix prices, limit output, or divide the market. Illegal in the EU. Example: OPEC."},
  {cat:"market-structures", q:"Name 3 types of barriers to entry", a:"1. Legal barriers (patents, licences)\n2. Economic barriers (economies of scale, high start-up costs)\n3. Strategic barriers (predatory pricing, brand loyalty)"},

  // ===== NATIONAL INCOME =====
  {cat:"national-income", q:"Define GDP", a:"Gross Domestic Product — the total value of all goods and services produced within a country's borders in one year, regardless of who owns the factors of production."},
  {cat:"national-income", q:"Define GNP", a:"Gross National Product — GDP + net factor income from abroad.\nGNP = GDP + income earned abroad by Irish residents − income earned in Ireland by foreign residents."},
  {cat:"national-income", q:"Define GNI*", a:"Modified Gross National Income — Ireland's preferred measure. Adjusts GNI by removing the effects of globalisation (depreciation of relocated IP assets, aircraft leasing, etc.)."},
  {cat:"national-income", q:"Why is GNI* used in Ireland?", a:"Because GDP and GNP are distorted by multinational companies (transfer pricing, IP relocation, aircraft leasing). GNI* gives a more accurate picture of the domestic economy."},
  {cat:"national-income", q:"Name the 3 methods of measuring National Income", a:"1. Output method (total value of goods/services produced)\n2. Income method (total incomes earned: wages, rent, interest, profit)\n3. Expenditure method (C + I + G + X − M)"},
  {cat:"national-income", q:"What is the Multiplier?", a:"The number of times a change in injection is multiplied to give a final change in national income.\nFormula: Multiplier = 1 / MPW = 1 / (MPS + MPT + MPM)\nwhere MPW = marginal propensity to withdraw."},
  {cat:"national-income", q:"Define the Marginal Propensity to Consume (MPC)", a:"The proportion of each additional euro of income that is spent on consumption.\nMPC + MPS + MPT + MPM = 1"},
  {cat:"national-income", q:"What are injections and withdrawals?", a:"Injections add spending to the circular flow: Investment (I), Government spending (G), Exports (X).\nWithdrawals remove spending: Savings (S), Taxation (T), Imports (M)."},

  // ===== FISCAL POLICY =====
  {cat:"fiscal-policy", q:"Define Fiscal Policy", a:"Government policy on taxation and public expenditure to influence the economy. Set out in the annual Budget."},
  {cat:"fiscal-policy", q:"Name 3 types of taxation in Ireland", a:"1. Direct taxes (Income tax, USC, PRSI, Corporation tax, Capital Gains Tax)\n2. Indirect taxes (VAT, excise duties)\n3. Capital taxes (CAT — inheritance/gift)"},
  {cat:"fiscal-policy", q:"What is a Progressive Tax?", a:"A tax where the percentage of income paid in tax increases as income increases. Example: Irish income tax (20% standard rate, 40% higher rate)."},
  {cat:"fiscal-policy", q:"What is a Regressive Tax?", a:"A tax where the percentage of income paid in tax decreases as income increases. Example: VAT — takes a higher proportion of income from lower earners."},
  {cat:"fiscal-policy", q:"Define the Budget Deficit", a:"When government expenditure exceeds government revenue in a given year. The government must borrow to cover the shortfall."},
  {cat:"fiscal-policy", q:"Define the National Debt", a:"The total accumulated borrowings of the government over time. It is the sum of all past budget deficits minus surpluses."},
  {cat:"fiscal-policy", q:"What is Expansionary Fiscal Policy?", a:"Increasing government spending and/or cutting taxes to boost aggregate demand, stimulate economic growth, and reduce unemployment."},
  {cat:"fiscal-policy", q:"What is Contractionary Fiscal Policy?", a:"Reducing government spending and/or raising taxes to reduce aggregate demand, cool an overheating economy, and reduce inflation."},

  // ===== MONETARY POLICY =====
  {cat:"monetary-policy", q:"Define Monetary Policy", a:"The management of interest rates and the money supply by a central bank to achieve economic objectives. In Ireland, this is the ECB."},
  {cat:"monetary-policy", q:"What is the role of the ECB?", a:"1. Maintain price stability (target inflation below but close to 2%)\n2. Set interest rates for the Eurozone\n3. Manage foreign exchange reserves\n4. Supervise financial institutions\n5. Issue euro banknotes"},
  {cat:"monetary-policy", q:"What is Quantitative Easing (QE)?", a:"The central bank buys government bonds and other financial assets to increase the money supply, lower interest rates, and stimulate the economy. Used when interest rates are already near zero."},
  {cat:"monetary-policy", q:"Name 3 functions of money", a:"1. Medium of exchange (buy/sell goods)\n2. Store of value (save wealth over time)\n3. Unit of account (measure/compare values)"},
  {cat:"monetary-policy", q:"What is the Credit Multiplier?", a:"The amount by which an initial deposit is multiplied to give total credit creation.\nFormula: Credit Multiplier = 1 / Reserve Ratio\nExample: 10% reserve ratio → multiplier of 10."},

  // ===== INFLATION =====
  {cat:"inflation", q:"Define Inflation", a:"A sustained increase in the general price level of goods and services over time, resulting in a fall in the purchasing power of money."},
  {cat:"inflation", q:"What is Demand-Pull Inflation?", a:"Inflation caused by excess aggregate demand in the economy. 'Too much money chasing too few goods.' Can occur when economy is near full employment."},
  {cat:"inflation", q:"What is Cost-Push Inflation?", a:"Inflation caused by increases in the costs of production (e.g., wages, raw materials, energy), which firms pass on to consumers as higher prices."},
  {cat:"inflation", q:"How is the CPI calculated?", a:"Consumer Price Index: measures changes in the cost of a representative 'basket of goods and services' purchased by average households.\nCPI = (Cost of basket in current year / Cost of basket in base year) × 100"},
  {cat:"inflation", q:"Name 4 effects of inflation", a:"1. Reduced purchasing power of money\n2. Redistribution of income (hurts savers, helps borrowers)\n3. Loss of international competitiveness\n4. Uncertainty reduces investment"},
  {cat:"inflation", q:"Define Deflation", a:"A sustained decrease in the general price level. Can lead to reduced consumer spending (expectations of further falls), increased real debt burden, and recession."},

  // ===== EMPLOYMENT =====
  {cat:"employment", q:"Define Unemployment", a:"People of working age who are available for, capable of, and actively seeking work but cannot find employment."},
  {cat:"employment", q:"Name 4 types of unemployment", a:"1. Cyclical (demand-deficient) — caused by recession\n2. Structural — mismatch of skills and jobs\n3. Frictional — between jobs (short-term)\n4. Seasonal — demand fluctuates by season"},
  {cat:"employment", q:"What is the Live Register?", a:"A monthly count of people signing on for Jobseeker's Benefit or Allowance at social welfare offices. Not the same as the unemployment rate (includes part-time workers, excludes discouraged workers)."},
  {cat:"employment", q:"What is the Labour Force Participation Rate?", a:"The percentage of the working-age population that is either employed or actively seeking employment.\nLFPR = (Labour Force / Working-Age Population) × 100"},
  {cat:"employment", q:"Define Full Employment", a:"When everyone who wants to work at the prevailing wage rate can find a job. Some frictional and structural unemployment still exists (natural rate of unemployment ~4-5%)."},

  // ===== INTERNATIONAL TRADE =====
  {cat:"trade", q:"Define Free Trade", a:"International trade without restrictions such as tariffs, quotas, or embargoes. Based on the principle of comparative advantage."},
  {cat:"trade", q:"Define Comparative Advantage", a:"A country has a comparative advantage in producing a good if it can produce it at a lower opportunity cost than another country. Forms the basis for international trade."},
  {cat:"trade", q:"Define Absolute Advantage", a:"A country has an absolute advantage if it can produce a good using fewer resources (more efficiently) than another country."},
  {cat:"trade", q:"What is the Balance of Payments?", a:"A record of all financial transactions between a country and the rest of the world over a year. Has two main accounts:\n1. Current Account (trade in goods/services, income, transfers)\n2. Capital/Financial Account (investment flows)"},
  {cat:"trade", q:"Name 4 types of protectionism", a:"1. Tariffs (taxes on imports)\n2. Quotas (quantity limits on imports)\n3. Subsidies (financial support for domestic producers)\n4. Embargoes (complete ban on trade with a country)"},
  {cat:"trade", q:"Name 3 arguments FOR free trade", a:"1. Greater choice and lower prices for consumers\n2. Countries specialise based on comparative advantage\n3. Increased competition drives innovation and efficiency"},
  {cat:"trade", q:"Name 3 arguments AGAINST free trade", a:"1. Infant industries may be unable to compete\n2. Job losses in uncompetitive domestic industries\n3. Over-dependence on imports (strategic risk)"},
  {cat:"trade", q:"What is the EU Single Market?", a:"The free movement of goods, services, capital, and labour between EU member states. No tariffs or quotas between members. Ireland benefits from access to 450+ million consumers."},

  // ===== MARKET FAILURE =====
  {cat:"market-failure", q:"Define Market Failure", a:"When the free market fails to allocate resources efficiently, leading to a loss of economic welfare. The market produces too much or too little of a good."},
  {cat:"market-failure", q:"What are Public Goods?", a:"Goods that are non-rival (one person's use doesn't reduce availability) and non-excludable (cannot prevent anyone from using them). Example: street lighting, national defence. Markets underprovide them."},
  {cat:"market-failure", q:"What are Merit Goods?", a:"Goods that are underconsumed if left to the free market because individuals underestimate their benefits. Examples: education, healthcare, vaccinations. Government intervenes to increase consumption."},
  {cat:"market-failure", q:"Define Externalities", a:"Costs or benefits that affect third parties not directly involved in a transaction.\nNegative externality: pollution from a factory\nPositive externality: bees from a beekeeper pollinating neighbours' crops"},
  {cat:"market-failure", q:"What is a Negative Externality? How can government correct it?", a:"A cost imposed on a third party. Examples: pollution, congestion.\nCorrections: taxes (carbon tax), regulation, tradable permits, fines."},
  {cat:"market-failure", q:"What is a Positive Externality? How can government encourage it?", a:"A benefit received by a third party. Examples: education, vaccination.\nEncouragements: subsidies, grants, direct provision."},
  {cat:"market-failure", q:"Define Opportunity Cost", a:"The cost of the next best alternative forgone when a choice is made. Example: if you spend €10 on a book, the opportunity cost is what else you could have bought with that €10."},

  // ===== FACTORS OF PRODUCTION =====
  {cat:"factors-of-production", q:"Name the 4 Factors of Production and their rewards", a:"1. Land — Rent\n2. Labour — Wages\n3. Capital — Interest\n4. Enterprise — Profit"},
  {cat:"factors-of-production", q:"Define Enterprise", a:"The factor of production that organises the other three factors, takes risks, and makes business decisions. The reward for enterprise is profit."},
  {cat:"factors-of-production", q:"Define Economies of Scale", a:"The cost advantages that a firm gains as it increases output. Average costs fall as production rises.\nTypes: technical, purchasing, financial, managerial, marketing."},
  {cat:"factors-of-production", q:"Define Diseconomies of Scale", a:"The cost disadvantages that arise when a firm becomes too large. Average costs rise as production increases.\nCauses: communication problems, coordination difficulties, worker alienation."},
  {cat:"factors-of-production", q:"Distinguish between the Short Run and the Long Run", a:"Short Run: at least one factor of production is fixed (usually capital).\nLong Run: all factors of production are variable — firms can enter/exit the market."},
  {cat:"factors-of-production", q:"State the Law of Diminishing Marginal Returns", a:"As additional units of a variable factor (e.g., labour) are added to a fixed factor (e.g., capital), the marginal product of the variable factor will eventually decrease."},
  {cat:"factors-of-production", q:"Define Marginal Cost", a:"The additional cost of producing one more unit of output.\nMC = Change in Total Cost / Change in Output"},
  {cat:"factors-of-production", q:"What is the relationship between MC and AC?", a:"When MC < AC, average costs are falling.\nWhen MC = AC, average costs are at their minimum.\nWhen MC > AC, average costs are rising.\nMC intersects AC at its lowest point."},

  // ===== ECONOMIC GROWTH =====
  {cat:"economic-growth", q:"Define Economic Growth", a:"An increase in a country's real GDP or GNI* over time. It represents an expansion of the economy's productive capacity."},
  {cat:"economic-growth", q:"Distinguish between Economic Growth and Economic Development", a:"Growth: increase in real output/GDP (quantitative).\nDevelopment: improvement in quality of life — health, education, equality, environment (qualitative). Measured by HDI."},
  {cat:"economic-growth", q:"What is the Human Development Index (HDI)?", a:"A composite index measuring development using three dimensions:\n1. Life expectancy at birth (health)\n2. Mean/expected years of schooling (education)\n3. GNI per capita (standard of living)\nRanked 0-1; Ireland ranks very high."},
  {cat:"economic-growth", q:"Name 4 causes of economic growth", a:"1. Increased investment in capital\n2. Technological progress / innovation\n3. Growth in labour force (population, immigration)\n4. Improved education and training (human capital)"},
  {cat:"economic-growth", q:"What is the Business Cycle?", a:"The recurring pattern of expansion and contraction in economic activity.\nPhases: Boom → Recession → Trough → Recovery\nCharacterised by changes in GDP, employment, inflation, and investment."},
  {cat:"economic-growth", q:"What is a Recession?", a:"Two consecutive quarters of negative economic growth (falling real GDP). Characterised by rising unemployment, falling investment, and declining consumer confidence."},
  {cat:"economic-growth", q:"Define Sustainable Development", a:"Development that meets the needs of the present without compromising the ability of future generations to meet their own needs. Balances economic, social, and environmental goals."},
  {cat:"economic-growth", q:"What is the Circular Economy?", a:"An economic model that aims to eliminate waste by keeping resources in use for as long as possible through recycling, reusing, and reducing. Contrasts with the linear 'take-make-dispose' model."},

  // ===== ADDITIONAL KEY CONCEPTS =====
  {cat:"demand-supply", q:"Define Utility", a:"The satisfaction or benefit a consumer derives from consuming a good or service. Total utility increases but marginal utility diminishes (Law of Diminishing Marginal Utility)."},
  {cat:"market-structures", q:"Define Monopolistic Competition", a:"A market with many firms selling differentiated products. Features: product differentiation, some pricing power, low barriers to entry, non-price competition (branding, advertising)."},
  {cat:"national-income", q:"What is Transfer Pricing?", a:"When multinational companies set prices for goods/services traded between their subsidiaries to shift profits to low-tax jurisdictions. Distorts Irish GDP figures significantly."},
  {cat:"fiscal-policy", q:"What is the Laffer Curve?", a:"Shows the relationship between tax rates and tax revenue. As tax rates increase from zero, revenue initially rises but eventually falls (high rates discourage work/investment). Implies an optimal tax rate."},
  {cat:"market-failure", q:"Define Information Failure", a:"When consumers or producers lack complete information to make rational decisions. Examples: hidden ingredients in food, complex financial products. Leads to over- or under-consumption."},
  {cat:"trade", q:"Define Terms of Trade", a:"The ratio of a country's export prices to its import prices.\nFormula: (Index of Export Prices / Index of Import Prices) × 100\nImprovement if >100 (exports become relatively more expensive)."},
  {cat:"economic-growth", q:"What is the Gini Coefficient?", a:"A measure of income inequality in a country, ranging from 0 (perfect equality) to 1 (perfect inequality). Ireland's Gini is around 0.30 after taxes and transfers."},
  {cat:"monetary-policy", q:"What is Inflation Targeting?", a:"A monetary policy strategy where the central bank sets a specific inflation rate as its goal. The ECB targets inflation 'below but close to 2%' over the medium term."},
  {cat:"elasticity", q:"If PED = -0.5 and price rises by 10%, what happens to quantity demanded?", a:"Quantity demanded falls by 5%.\nCalculation: %ΔQd = PED × %ΔP = -0.5 × 10% = -5%\nDemand is inelastic — total revenue will increase."},
  {cat:"national-income", q:"Calculate the Multiplier if MPC = 0.6, MPT = 0.2, MPM = 0.1", a:"MPS = 1 - MPC = 0.4 (or MPW = MPS + MPT + MPM = 0.4 + 0.2 + 0.1 = 0.7)\nWait — recalculate: MPW = 1 - MPC = 0.4\nMultiplier = 1 / (1 - MPC) = 1 / 0.4 = 2.5\nNote: if MPW = MPS + MPT + MPM given separately, Multiplier = 1/MPW."},
  {cat:"fiscal-policy", q:"Name Ireland's Corporation Tax rate and its significance", a:"12.5% (15% for large multinationals under OECD Pillar Two agreement).\nSignificance: attracts FDI from multinationals (Apple, Google, Pfizer). Key driver of Irish economic growth. Controversial — seen as tax competition."},
  {cat:"market-failure", q:"Define a Common Resource (Common Pool Resource)", a:"A resource that is rival (one person's use reduces availability) but non-excludable (hard to prevent access). Examples: fish stocks, clean air. Prone to overuse — the 'Tragedy of the Commons'."},
  {cat:"economic-growth", q:"Name 3 costs of economic growth", a:"1. Environmental degradation (pollution, resource depletion)\n2. Income inequality may increase\n3. Stress, overwork, reduced quality of life"},
  {cat:"demand-supply", q:"Define a Substitute Good", a:"A good that can be used in place of another. If the price of Good A rises, demand for its substitute Good B rises. Example: Pepsi and Coca-Cola. XED is positive."},
  {cat:"demand-supply", q:"Define a Complementary Good", a:"A good that is used together with another good. If the price of Good A rises, demand for its complement Good B falls. Example: printers and ink cartridges. XED is negative."},
  {cat:"employment", q:"What is the Natural Rate of Unemployment?", a:"The level of unemployment that exists when the labour market is in equilibrium. Includes frictional and structural unemployment but not cyclical. Typically around 4-5%."},
  {cat:"market-structures", q:"What is Price Discrimination?", a:"When a firm charges different prices to different consumers for the same product, where the price difference is not due to cost differences.\nConditions: market power, separable markets, prevention of resale.\nExamples: student discounts, peak/off-peak pricing."},
  {cat:"inflation", q:"Define Hyperinflation", a:"Extremely rapid inflation, typically >50% per month. Money loses value so fast that people spend immediately. Historical examples: Zimbabwe (2008), Weimar Germany (1923), Venezuela (2018)."},
  {cat:"trade", q:"What is a Customs Union?", a:"A trade agreement where member countries eliminate tariffs between themselves AND adopt a common external tariff on imports from non-members. The EU is a customs union."}
];

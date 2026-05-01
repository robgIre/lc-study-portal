/* LC Accounting Higher Level 2025 — Structured marking points for practice marking */
var ACC_MARKING = {
  "2025": {

    /* ============================================================
       Q1A  Final Accounts – Sole Trader  (M McConnell)
       Trading P&L Account (75 marks) + Balance Sheet (45 marks)
       ============================================================ */
    1: {
      totalMarks: 10, topic: "Final Accounts – Sole Trader (Trading P&L & Balance Sheet)",
      points: [
        { marks:1, desc:"Adjusts sales for unrecorded credit sale net of VAT (14,760 x 100/123 = 12,000)",
          accept:[
            {num:[12000]},
            {all:["14,760|14760","100/123|vat"]},
            {all:["sales","896,300|896300"]}
          ],
          hit:"Sales correctly adjusted: 884,300 + 12,000 = 896,300",
          miss:"Credit sale of 14,760 includes 23% VAT. Net amount = 14,760 x 100/123 = 12,000. Add to sales." },

        { marks:1, desc:"Corrects purchases: removes van trade-in (24,800) and drawings at cost (10,750)",
          accept:[
            {num:[586850]},
            {all:["purchase","24,800|24800","10,750|10750"]},
            {all:["purchase","586,850|586850"]}
          ],
          hit:"Purchases correctly adjusted to 586,850",
          miss:"Purchases: 622,400 - 24,800 (van net cheque) - 10,750 (drawings at cost: 12,900/1.20) = 586,850" },

        { marks:1, desc:"Calculates closing stock correctly (damaged stock write-down + goods not dispatched)",
          accept:[
            {num:[71700]},
            {all:["closing stock","71,700|71700"]},
            {all:["84,000|84000","2,300|2300","10,000|10000"]}
          ],
          hit:"Closing stock: 84,000 - 2,300 - 10,000 = 71,700",
          miss:"Closing stock: 84,000 - 2,300 (damaged: 10,600-8,300) - 10,000 (undispatched at cost: 12,000/1.20) = 71,700" },

        { marks:1, desc:"Calculates gross profit correctly",
          accept:[
            {num:[318650]},
            {all:["gross profit","318,650|318650"]}
          ],
          hit:"Gross profit = 896,300 - 577,650 = 318,650",
          miss:"Gross Profit = Sales 896,300 - Cost of Sales 577,650 = 318,650" },

        { marks:1, desc:"Calculates depreciation on delivery vans (old vans + disposal + new van)",
          accept:[
            {num:[20775]},
            {all:["depreciation","van|delivery"]},
            {all:["14,550|14550","2,625|2625","3,600|3600"]}
          ],
          hit:"Van depreciation: 14,550 + 2,625 + 3,600 = 20,775",
          miss:"Van dep: remaining (97,000 x 15% = 14,550) + old to disposal (35,000 x 15% x 6/12 = 2,625) + new (48,000 x 15% x 6/12 = 3,600) = 20,775" },

        { marks:1, desc:"Correctly handles patent amortisation (remaining life)",
          accept:[
            {num:[15600]},
            {all:["patent","15,600|15600"]},
            {all:["patent","62,400|62400","4"]}
          ],
          hit:"Patent: 62,400 / 4 remaining years = 15,600",
          miss:"Patent acquired 01/01/2017 for 117,000 over 9 years. By 2024, 3 years amortised. Book value 62,400 / 4 remaining years = 15,600" },

        { marks:1, desc:"Calculates investment income due (4% x 120,000 = 4,800; 3 months netted in advertising = 900)",
          accept:[
            {num:[4800,900]},
            {all:["investment","income","4,800|4800"]},
            {all:["advertising","900"]}
          ],
          hit:"Investment income correctly identified and advertising adjusted",
          miss:"Investment income: 120,000 x 4% = 4,800. Advertising had 3 months (120,000 x 3% x 3/12 = 900) netted off - add back." },

        { marks:1, desc:"Handles mortgage interest with private portion (20% private)",
          accept:[
            {all:["mortgage","interest","private|20%|80%"]},
            {all:["mortgage","drawing|personal"]},
            {num:[3300]}
          ],
          hit:"Mortgage interest apportioned: 80% business expense, 20% drawings",
          miss:"Mortgage interest due must be calculated. 20% is private (added to drawings), 80% charged as business expense." },

        { marks:1, desc:"Handles drawings correctly (goods + private portions)",
          accept:[
            {all:["drawing","10,750|10750"]},
            {all:["drawing","goods|personal|private"]},
            {num:[24450]}
          ],
          hit:"Drawings include goods at cost and private portions",
          miss:"Drawings: 10,750 (goods at cost: 12,900/1.20) + private mortgage interest + other private amounts" },

        { marks:1, desc:"Balance sheet balances with revaluation reserve and correct capital section",
          accept:[
            {all:["balance sheet","balance|agree"]},
            {all:["revaluation","reserve","352,307|352307"]},
            {all:["capital","782,600|782600"]}
          ],
          hit:"Balance sheet correctly prepared with revaluation reserve",
          miss:"Balance sheet must include: Capital 782,600 + Revaluation Reserve 352,307 + Net Profit 113,700 - Drawings 24,450" }
      ]
    },

    /* ============================================================
       Q1B  Final Accounts – Company  (Cahill Ltd)
       Trading P&L Account (75 marks) + Balance Sheet (45 marks)
       ============================================================ */
    2: {
      totalMarks: 10, topic: "Final Accounts – Company (Trading P&L & Balance Sheet)",
      points: [
        { marks:1, desc:"Adjusts purchases: removes van trade-in, fire stock, store materials, adds goods in transit",
          accept:[
            {num:[1345200]},
            {all:["purchase","1,345,200|1345200"]},
            {all:["37,000|37000","11,000|11000","58,000|58000","11,200|11200"]}
          ],
          hit:"Purchases adjusted: 1,440,000 - 37,000 - 11,000 - 58,000 + 11,200 = 1,345,200",
          miss:"Remove from purchases: van trade-in 37,000, fire comp 11,000, store materials 58,000. Add goods in transit: 13,776 x 100/123 = 11,200" },

        { marks:1, desc:"Adjusts closing stock for damaged stock and goods in transit",
          accept:[
            {num:[94600]},
            {all:["closing stock","94,600|94600"]},
            {all:["86,200|86200","2,800|2800","11,200|11200"]}
          ],
          hit:"Closing stock: 86,200 - 2,800 + 11,200 = 94,600",
          miss:"Closing stock: 86,200 - 2,800 (damaged: 5,200-2,400) + 11,200 (goods in transit) = 94,600" },

        { marks:1, desc:"Calculates MD bonus commission correctly",
          accept:[
            {num:[18200,30200]},
            {all:["commission","18,200|18200"]},
            {all:["3%","4%","1,200,000|1200000","1,600,000|1600000"]}
          ],
          hit:"MD bonus: 3% on (1,860,000 - 1,200,000) + 4% on (1,860,000 - 1,600,000) = 19,800 + 10,400... check calculation",
          miss:"MD bonus commission: 3% on sales over 1,200,000 plus 4% on sales over 1,600,000. Total commission = 12,000 + bonus accrual." },

        { marks:1, desc:"Correctly treats store materials as capital expenditure (not revenue expense)",
          accept:[
            {all:["store","capital","expenditure|asset"]},
            {all:["58,000|58000","building|store|capitalise"]},
            {all:["material","stock","store"]}
          ],
          hit:"58,000 materials correctly capitalised as building cost",
          miss:"Materials of 58,000 taken for building new store = capital expenditure, NOT purchases. Add to fixed assets." },

        { marks:1, desc:"Handles van trade-in: removes from purchases, records new van as fixed asset",
          accept:[
            {all:["van","trade","37,000|37000"]},
            {all:["van","purchase","remove|deduct|subtract"]},
            {all:["van","asset|fixed asset|cost"]}
          ],
          hit:"Van trade-in correctly separated from purchases and capitalised",
          miss:"Net cheque of 37,000 wrongly in purchases. Remove from purchases. Record new van as fixed asset." },

        { marks:1, desc:"Handles fire-damaged stock and insurance compensation",
          accept:[
            {all:["fire","11,000|compensation|insurance"]},
            {all:["fire","stock","destroy"]},
            {all:["purchase","fire"]}
          ],
          hit:"Fire-damaged stock and compensation correctly treated",
          miss:"Stock destroyed by fire: remove 11,000 from purchases (compensation received). Any shortfall is a loss." },

        { marks:1, desc:"Calculates net profit correctly",
          accept:[
            {num:[157755]},
            {all:["net profit","157,755|157755"]}
          ],
          hit:"Net profit correctly calculated as 157,755",
          miss:"Net profit = Gross Profit - all expenses + operating income. Check all adjustments applied." },

        { marks:1, desc:"Handles accumulated P&L loss (debit balance) correctly",
          accept:[
            {all:["43,400|43400","debit","loss|deficit"]},
            {all:["p&l|profit and loss","debit|deficit","opening"]},
            {all:["accumulated","loss"]}
          ],
          hit:"Opening P&L debit balance (accumulated loss) correctly deducted",
          miss:"P&L balance b/f is a DEBIT balance (43,400) = accumulated losses. Deduct from retained profit." },

        { marks:1, desc:"Calculates closing P&L balance",
          accept:[
            {num:[88355]},
            {all:["p&l","88,355|88355"]},
            {all:["closing","balance","88,355|88355"]}
          ],
          hit:"Closing P&L balance: 157,755 - 26,000 - 43,400 = 88,355",
          miss:"Closing P&L = Net Profit 157,755 - Dividends 26,000 - Opening deficit 43,400 = 88,355" },

        { marks:1, desc:"Balance sheet: correct capital section with authorised and issued capital",
          accept:[
            {all:["authorised","1,700,000|1700000"]},
            {all:["issued","1,250,000|1250000"]},
            {all:["ordinary","800,000|800000","preference","450,000|450000"]}
          ],
          hit:"Capital section correctly shows authorised vs issued capital",
          miss:"Authorised: 1,200,000 ord + 500,000 pref = 1,700,000. Issued: 800,000 ord + 450,000 pref = 1,250,000. Add Capital Reserve + P&L balance." }
      ]
    },

    /* ============================================================
       Q2  Debtors Control Account  (G. Flavin)
       Control Account (28) + Schedule (24) + Theory (8)
       ============================================================ */
    3: {
      totalMarks: 10, topic: "Debtors Control Account & Schedule of Debtors",
      points: [
        { marks:1, desc:"Correctly handles discount disallowed (error i): restores 104 to control account debit",
          accept:[
            {all:["discount","disallowed|reversed|cancelled"]},
            {num:[104]},
            {all:["52","104","debit"]}
          ],
          hit:"Discount disallowed: 52 x 2 = 104 added back to debit side of control account",
          miss:"Discount of 52 disallowed but recorded twice in discount account = 104. Add 104 to debit side of control." },

        { marks:1, desc:"Correctly handles interest charged and reduced (error ii): net adjustment of 60 credit",
          accept:[
            {num:[60]},
            {all:["interest","70","95","35"]},
            {all:["interest","60","credit"]}
          ],
          hit:"Interest adjustment: net credit of 60 in control account",
          miss:"Interest posted as 95 instead of 70, then reduced to 35. Wrong side of customer's account. Net control adjustment = 60 credit." },

        { marks:1, desc:"Correctly handles debtor refund (error iii): 290 remaining on debit side",
          accept:[
            {num:[290]},
            {all:["refund","290","580"]},
            {all:["refund","half|remaining"]}
          ],
          hit:"Refund: 580 total, only 290 paid. Remaining 290 on debit side of control",
          miss:"Debtor due 580 refund, only 290 refunded. Remaining 290 not entered. Add 290 to debit side of control." },

        { marks:1, desc:"Correctly handles sales error (error iv): 960 credit sale on wrong side",
          accept:[
            {num:[960,1920]},
            {all:["sales","960","wrong side|credit side"]},
            {all:["2,360|2360","1,400|1400","960"]}
          ],
          hit:"Credit sale of 960 entered on wrong side: swing of 1,920 in schedule",
          miss:"Sales of 2,360: 1,400 was cash (correct). Credit sale 960 on wrong side of customer's account. Add 960 to control debit." },

        { marks:1, desc:"Correctly handles invoice not posted (error v): 1,968 added to schedule only",
          accept:[
            {num:[1968]},
            {all:["1,968|1968","invoice","not posted|schedule"]},
            {all:["day book","1,968|1968","customer"]}
          ],
          hit:"Invoice 1,968 in day book but not posted to customer: affects schedule only",
          miss:"Invoice 1,968 entered in day book (so in control) but NOT posted to customer's account. Adjust schedule only." },

        { marks:1, desc:"Correctly handles restocking charge reduction (error vi): 16 debit in control",
          accept:[
            {num:[16,24]},
            {all:["restocking","16","reduction|not recorded"]},
            {all:["400","10%","6%","16"]}
          ],
          hit:"Restocking charge reduced by 16 (from 10% to 6%): add 24 to control debit",
          miss:"Returns 400 with restocking charge reduced from 10% to 6%. Reduction of 16 not recorded. Add 24 (6% of 400) to control debit." },

        { marks:1, desc:"Adjusted control account balance: 33,528 Dr and 290 Cr",
          accept:[
            {num:[33528]},
            {all:["33,528|33528"]},
            {all:["control","balance","33,528|33528"]}
          ],
          hit:"Adjusted control account debit balance: 33,528",
          miss:"Adjusted debit balance c/d: 33,528. Credit balance c/d: 290 (refund owed)." },

        { marks:1, desc:"Schedule of debtors agrees with adjusted control total (33,238)",
          accept:[
            {num:[33238]},
            {all:["schedule","33,238|33238"]},
            {all:["schedule","agree|balance|reconcile"]}
          ],
          hit:"Schedule adjusted to 33,238 (agrees with net control balance)",
          miss:"Schedule: Opening list + adjustments for errors iii, iv, v, vi = 33,238. Net control balance = 33,528 - 290 = 33,238." },

        { marks:1, desc:"Explains why control account might have credit balance",
          accept:[
            {all:["credit balance","overpayment|refund|return"]},
            {all:["owe","money","debtor|customer"]},
            {all:["paid","returned|overpaid|refund"]}
          ],
          hit:"Credit balance: business owes money TO the debtor (overpayment, return after payment, etc.)",
          miss:"Credit balance means the business OWES the debtor: e.g. customer overpaid, goods returned after full payment, or discount given after payment." },

        { marks:1, desc:"States benefits of control accounts (accuracy check, locate errors, incomplete records)",
          accept:[
            {all:["check|verify","accuracy|correct"]},
            {all:["locate|find","error"]},
            {all:["incomplete","record"]},
            {all:["compare","control","schedule|list|ledger"]}
          ],
          hit:"Benefits: accuracy check, error location, useful for incomplete records",
          miss:"Benefits: (1) checks accuracy by comparing control to schedule, (2) helps locate errors quickly, (3) useful for finding credit sales from incomplete records." }
      ]
    },

    /* ============================================================
       Q3  Revaluation of Fixed Assets  (Boyne Ltd)
       Land & Buildings, Depreciation, Revaluation Reserve, Disposals
       ============================================================ */
    4: {
      totalMarks: 10, topic: "Revaluation of Fixed Assets (Ledger Accounts)",
      points: [
        { marks:1, desc:"2020 revaluation: uplift of 240,000 to revaluation reserve, accumulated dep written off",
          accept:[
            {num:[240000]},
            {all:["revaluation","240,000|240000"]},
            {all:["980,000|980000","740,000|740000"]}
          ],
          hit:"2020 revaluation: 980,000 - 740,000 = 240,000 uplift. Accumulated depreciation written off via revaluation reserve.",
          miss:"Revaluation 2020: L&B from 740,000 to 980,000 = 240,000 uplift. Write off accumulated depreciation through revaluation reserve." },

        { marks:1, desc:"Accumulated depreciation written off on revaluation (fresh start basis)",
          accept:[
            {all:["accumulated","depreciation","written off|eliminated|removed"]},
            {all:["depreciation","revaluation","reserve|write off"]},
            {all:["fresh start","depreciation"]}
          ],
          hit:"Accumulated depreciation written off on revaluation - fresh start",
          miss:"On revaluation, accumulated depreciation is WRITTEN OFF through the revaluation reserve. Depreciation restarts on the revalued amount." },

        { marks:1, desc:"2021 land disposal: profit on sale, transfer realised gain from revaluation reserve",
          accept:[
            {all:["land","sold|disposal","430,000|430000"]},
            {all:["land","profit","100,000|100000"]},
            {all:["realised","revaluation","reserve","transfer|revenue"]}
          ],
          hit:"Land sold for 430,000 (revalued at 330,000): profit 100,000. Realised revaluation surplus transferred.",
          miss:"Land sold 430,000 vs revalued cost 330,000 = profit 100,000. Transfer 50,000 revaluation uplift from revaluation reserve to revenue reserve (realised)." },

        { marks:1, desc:"2022 additions correctly recorded (contractor + employees + legal fees)",
          accept:[
            {num:[570000,250000,150000,90000,10000]},
            {all:["extension|addition","150,000|150000","90,000|90000","10,000|10000"]},
            {all:["320,000|320000","building|purchase"]}
          ],
          hit:"2022 additions: 320,000 purchase + 150,000 contractor + 90,000 employees + 10,000 legal = 570,000 total",
          miss:"All costs of building the extension are CAPITALISED: contractor 150,000 + own employees 90,000 + legal 10,000. Plus purchased building 320,000." },

        { marks:1, desc:"Depreciation calculated on correct base amount each year (land excluded)",
          accept:[
            {all:["depreciation","2%","land","not|exclude"]},
            {all:["building","2%","straight line"]},
            {all:["depreciation","land","not depreciated|excluded"]}
          ],
          hit:"Depreciation at 2% on buildings only - land is NOT depreciated",
          miss:"Depreciation: 2% straight line on BUILDINGS cost only. Land is NEVER depreciated." },

        { marks:1, desc:"2023 revaluation: 15% increase applied to each building correctly",
          accept:[
            {num:[1403000]},
            {all:["revaluation","1,403,000|1403000","15%"]},
            {all:["2023","revalue","15%|increase"]}
          ],
          hit:"2023 revaluation to 1,403,000 (15% increase on each building)",
          miss:"2023 revaluation: 15% increase applied to each building. Total revalued at 1,403,000. Write off accumulated depreciation." },

        { marks:1, desc:"2024 building disposal: correct NBV, profit/loss on sale",
          accept:[
            {all:["disposal","2020 building|sold","820,000|820000"]},
            {all:["disposal","profit|loss"]},
            {all:["2024","sold|disposal","building"]}
          ],
          hit:"2024 building disposal: sold for 820,000, profit/loss correctly calculated",
          miss:"2024: 2020 buildings sold for 820,000. Calculate NBV at disposal date (revalued cost less accumulated depreciation). Transfer realised surplus." },

        { marks:1, desc:"Revaluation reserve account maintained correctly across all years",
          accept:[
            {all:["revaluation reserve","account|maintained"]},
            {all:["revaluation","surplus|uplift|reserve"]},
            {all:["realised","unrealised","reserve"]}
          ],
          hit:"Revaluation reserve correctly maintained with surpluses and transfers",
          miss:"Revaluation reserve: record uplift surpluses, write-offs of old depreciation, and transfers to revenue reserve when gains are realised through disposal." },

        { marks:1, desc:"Explains why fixed assets should be revalued (true and fair view, accurate ratios, correct depreciation)",
          accept:[
            {all:["true","fair","view"]},
            {all:["market value","balance sheet|financial"]},
            {all:["depreciation","understate|overstate|accurate"]},
            {all:["ratio","accurate|correct|meaningful"]}
          ],
          hit:"Assets revalued to show true and fair view at market value",
          miss:"Why revalue: (1) true and fair view on balance sheet, (2) depreciation not understated, (3) ratios more meaningful, (4) useful information for users." },

        { marks:1, desc:"Explains Consistency Concept",
          accept:[
            {all:["consistency","same","method|treatment|way"]},
            {all:["consistent","period","next|year"]},
            {all:["accounting","policy","same|consistent"]}
          ],
          hit:"Consistency: same accounting treatment applied from one period to the next",
          miss:"Consistency Concept: accounting items must be treated the SAME WAY from one period to the next. If you change, state the reason and effect on profit." }
      ]
    },

    /* ============================================================
       Q4  Service Firm – Dentist  (B. Bennett)
       Income & Expenditure (32) + Statement of Affairs (20) + Theory (8)
       ============================================================ */
    5: {
      totalMarks: 10, topic: "Service Firm – Income & Expenditure Account",
      points: [
        { marks:1, desc:"Converts Medical Card receipts to income (accruals basis)",
          accept:[
            {num:[55900]},
            {all:["medical card","55,900|55900"]},
            {all:["55,200|55200","9,400|9400","10,100|10100"]}
          ],
          hit:"Medical Card income: 55,200 - 9,400 + 10,100 = 55,900",
          miss:"Medical Card income = Cash received 55,200 - Opening due 9,400 + Closing due 10,100 = 55,900 (accruals basis)." },

        { marks:1, desc:"Converts private patient receipts to income (adds closing fees due)",
          accept:[
            {num:[112000]},
            {all:["private","112,000|112000"]},
            {all:["109,700|109700","2,300|2300"]}
          ],
          hit:"Private patients income: 109,700 + 2,300 = 112,000",
          miss:"Private patients: Cash received 109,700 + Closing fees due 2,300 = 112,000." },

        { marks:1, desc:"Calculates profit on equipment sale (cost 15,000, NBV 5,000, sold 6,150 = profit 1,150)",
          accept:[
            {num:[1150]},
            {all:["profit","equipment","1,150|1150"]},
            {all:["15,000|15000","5,000|5000","6,150|6150"]}
          ],
          hit:"Profit on equipment sale: 6,150 - 5,000 (NBV) = 1,150",
          miss:"Equipment: Cost 15,000, Acc dep = 15,000 x 20% x relevant years = 10,000, NBV = 5,000. Sold 6,150. Profit = 1,150." },

        { marks:1, desc:"Calculates dental supplies expense (adjusts for opening/closing stock and creditors)",
          accept:[
            {num:[31000]},
            {all:["dental supplies","31,000|31000"]},
            {all:["dental","stock","creditor"]}
          ],
          hit:"Dental supplies: 31,600 adjusted for opening/closing stocks and creditors = 31,000",
          miss:"Dental supplies: Cash paid 31,600, adjusted for opening/closing creditors and opening/closing stock = 31,000." },

        { marks:1, desc:"Adjusts insurance for opening and closing prepayments",
          accept:[
            {num:[18450]},
            {all:["insurance","18,450|18450"]},
            {all:["insurance","19,800|19800","3,600|3600","4,950|4950"]}
          ],
          hit:"Insurance: 19,800 + 3,600 - 4,950 = 18,450",
          miss:"Insurance: Paid 19,800 + opening prepaid consumed 3,600 - closing prepaid 4,950 = 18,450." },

        { marks:1, desc:"Apportions light & heat (75% business, 25% private)",
          accept:[
            {all:["light","heat","75%"]},
            {all:["light","heat","private|25%"]},
            {num:[6990]}
          ],
          hit:"Light & heat: total adjusted amount x 75% (business portion only)",
          miss:"Light & heat: (paid + accruals) x 75% = business portion. 25% is private use, not charged to the practice." },

        { marks:1, desc:"Calculates investment income due (40,000 x 5% = 2,000)",
          accept:[
            {num:[2000]},
            {all:["investment","income","2,000|2000"]},
            {all:["40,000|40000","5%"]}
          ],
          hit:"Investment income: 40,000 x 5% = 2,000",
          miss:"Investment income due: 40,000 x 5% = 2,000." },

        { marks:1, desc:"Includes locum wages accrual (1,200 + 900 = 2,100)",
          accept:[
            {num:[2100]},
            {all:["locum","2,100|2100"]},
            {all:["1,200|1200","900","locum|wages"]}
          ],
          hit:"Locum wages: 1,200 paid + 900 owed = 2,100",
          miss:"Locum dentist: Paid 1,200 + wages owed 900 = 2,100." },

        { marks:1, desc:"Explains Statement of Reserves (finds net worth at start of year)",
          accept:[
            {all:["statement","reserves","net worth|opening"]},
            {all:["asset","liabilit","start|opening|beginning"]},
            {all:["net worth","service firm|start"]}
          ],
          hit:"Statement of Reserves: lists assets and liabilities at start of year to find net worth",
          miss:"Statement of Reserves: finds the NET WORTH of a service firm. Lists assets minus liabilities at the START of the year." },

        { marks:1, desc:"Explains Special Purpose P&L Account",
          accept:[
            {all:["special purpose","extra|additional|separate"]},
            {all:["special purpose","activity|shop|side"]},
            {all:["net profit|net loss","transfer","income & expenditure|main"]}
          ],
          hit:"Special Purpose P&L: separate account for extra activities, net result transferred to main I&E",
          miss:"Special Purpose P&L: records income and expenses of an EXTRA ACTIVITY (e.g. shop in a gym). Only the NET result is transferred to the main Income & Expenditure Account." }
      ]
    },

    /* ============================================================
       Q5  Interpretation of Accounts  (Technik plc)
       Calculations (50) + Written Analysis (40) + Financing Options (10)
       ============================================================ */
    6: {
      totalMarks: 10, topic: "Interpretation of Accounts (Ratio Analysis)",
      points: [
        { marks:1, desc:"Calculates cash sales correctly (total sales - credit sales via debtors collection period)",
          accept:[
            {num:[1280000]},
            {all:["cash sales","1,280,000|1280000"]},
            {all:["618,000|618000","credit","1,898,000|1898000"]}
          ],
          hit:"Cash sales: 1,898,000 - 618,000 = 1,280,000",
          miss:"Debtors collection = 2 months. Credit sales = 103,000 x 12/2 = 618,000. Cash sales = 1,898,000 - 618,000 = 1,280,000." },

        { marks:1, desc:"Calculates ROCE correctly (13.05%)",
          accept:[
            {num:[13.05,13]},
            {all:["roce","13.05%|13%"]},
            {all:["232,000|232000","14,000|14000","1,885,000|1885000"]}
          ],
          hit:"ROCE = (232,000 + 14,000) / 1,885,000 x 100 = 13.05%",
          miss:"ROCE = (Operating Profit + Investment Income) / Capital Employed x 100 = (232,000 + 14,000) / 1,885,000 = 13.05%." },

        { marks:1, desc:"Calculates interest cover correctly (17.57 times)",
          accept:[
            {num:[17.57,17.6,18]},
            {all:["interest cover","17.57|17.6|18"]},
            {all:["246,000|246000","14,000|14000","interest"]}
          ],
          hit:"Interest cover = 246,000 / 14,000 = 17.57 times",
          miss:"Interest Cover = (Operating Profit + Investment Income) / Interest = 246,000 / 14,000 = 17.57 times." },

        { marks:1, desc:"Calculates EPS and P/E ratio correctly (P/E = 7.24)",
          accept:[
            {num:[7.24,7.2]},
            {all:["p/e","7.24|7.2"]},
            {all:["eps","22.11|22.1","p/e"]}
          ],
          hit:"EPS = 22.11c; P/E = 160/22.11 = 7.24 years",
          miss:"EPS = (Net Profit - Pref Div) / Ordinary Shares = (232,000 - 33,000) / 900,000 = 22.11c. P/E = 160 / 22.11 = 7.24." },

        { marks:1, desc:"Calculates dividend cover correctly (2.24 times)",
          accept:[
            {num:[2.24,2.2]},
            {all:["dividend cover","2.24|2.2"]},
            {all:["199,000|199000","89,000|89000"]}
          ],
          hit:"Dividend cover = 199,000 / 89,000 = 2.24 times",
          miss:"Dividend Cover = (Net Profit - Pref Div) / Ordinary Dividend = 199,000 / 89,000 = 2.24 times." },

        { marks:1, desc:"Analyses profitability (ROCE improved from 10.8% to 13.05%)",
          accept:[
            {all:["roce","improved|increased|better","10.8%|10.8","13.05%|13.05|13%"]},
            {all:["profitability","improved|better|strong"]},
            {all:["return","capital","improved|increased"]}
          ],
          hit:"Profitability improved: ROCE up from 10.8% to 13.05%",
          miss:"ROCE improved from 10.8% to 13.05%. Better than risk-free rate and debenture rate. Good return for shareholders." },

        { marks:1, desc:"Analyses liquidity (acid test decreased from 1.6:1 to approximately 1.31:1)",
          accept:[
            {all:["acid test|liquidity","1.31|1.3|decreased|declined"]},
            {all:["liquid","asset","1|owe"]},
            {all:["liquidity","adequate|satisfactory|no problem"]}
          ],
          hit:"Acid test decreased from 1.6:1 to 1.31:1 but still adequate",
          miss:"Acid test ratio decreased from 1.6:1 to ~1.31:1. Still above 1:1 so no liquidity concern." },

        { marks:1, desc:"Analyses gearing (improved from 42% to ~40%, lowly geared)",
          accept:[
            {all:["gearing","improved|decreased|lower|39|40"]},
            {all:["lowly geared|low geared"]},
            {all:["gearing","equity","debt"]}
          ],
          hit:"Gearing improved from 42% to ~40%. Company is lowly geared.",
          miss:"Gearing improved from 42% to ~40%. Lowly geared = financed more by equity than debt. Interest cover excellent at 17.57 times." },

        { marks:1, desc:"Analyses dividend policy (DPS increased, dividend cover decreased)",
          accept:[
            {all:["dps|dividend per share","increased|improved|9.89"]},
            {all:["dividend","cover","decreased|declined|2.24"]},
            {all:["dividend","yield","improved|6.18"]}
          ],
          hit:"DPS improved; dividend cover decreased from 3.75 to 2.24",
          miss:"DPS up from 8.95c to 9.89c. Dividend cover down from 3.75 to 2.24 times. Company paying out more of profits as dividends." },

        { marks:1, desc:"Evaluates two financing options (share issue vs debenture) with gearing impact",
          accept:[
            {all:["share","debenture","gearing|option"]},
            {all:["share","issue","gearing","low|stay|remain"]},
            {all:["debenture","gearing","increase|high|jump"]},
            {all:["400,000|400000","financing|finance","option"]}
          ],
          hit:"Compared share issue (gearing stays low) vs debenture (gearing jumps). Discussed voting rights, interest cost.",
          miss:"Option 1: Issue shares - gearing stays low, but dilutes ownership. Option 2: 7% debenture - gearing jumps to ~50%, fixed interest cost 28,000 p.a., no voting rights for holders." }
      ]
    },

    /* ============================================================
       Q6  Incomplete Records  (D. O'Riordan)
       Trading P&L (52) + Balance Sheet (40) + Theory (8)
       ============================================================ */
    7: {
      totalMarks: 10, topic: "Incomplete Records (Final Accounts from Scattered Data)",
      points: [
        { marks:1, desc:"Reconstructs credit sales from debtors (opening, closing, cash received, unrecorded sale)",
          accept:[
            {num:[51400]},
            {all:["credit sales","51,400|51400"]},
            {all:["44,200|44200","16,600|16600","8,000|8000","17,400|17400"]}
          ],
          hit:"Credit sales: 44,200 + 16,600 + 8,000 - 17,400 = 51,400",
          miss:"Credit sales = Cash from debtors 44,200 + Closing debtors 16,600 + Unrecorded sale 8,000 - Opening debtors 17,400 = 51,400." },

        { marks:1, desc:"Reconstructs cash sales from cash account (lodgements, payments, drawings)",
          accept:[
            {num:[222660]},
            {all:["cash sales","222,660|222660"]},
            {all:["cash","lodgement|124,000|124000"]}
          ],
          hit:"Cash sales reconstructed from cash account = 222,660",
          miss:"Cash sales = all cash out: 124,000 (lodgements) + 24,000 (cash expenses) + 66,500 (cash purchases) + 7,800 (drawings at retail) + 960 (closing) - 600 (opening) = 222,660." },

        { marks:1, desc:"Reconstructs total purchases (cash + credit purchases, less goods for own use)",
          accept:[
            {num:[103460]},
            {all:["purchase","103,460|103460"]},
            {all:["66,500|66500","43,200|43200","6,240|6240"]}
          ],
          hit:"Purchases: 66,500 + 43,200 - 6,240 = 103,460",
          miss:"Cash purchases 66,500 + Credit purchases (45,500 + 16,300 - 18,600 = 43,200) - Drawings of goods (120 x 52 = 6,240) = 103,460." },

        { marks:1, desc:"Adjusts closing stock (removes heating oil and goods not dispatched)",
          accept:[
            {num:[9600]},
            {all:["closing stock","9,600|9600"]},
            {all:["16,800|16800","800","6,400|6400"]}
          ],
          hit:"Closing stock: 16,800 - 800 (heating oil) - 6,400 (undispatched goods) = 9,600",
          miss:"Closing stock: 16,800 includes heating oil 800 (not trading stock) and goods 6,400 not dispatched. Adjusted = 9,600." },

        { marks:1, desc:"Correctly handles insurance prepayments (opening and closing)",
          accept:[
            {num:[2980]},
            {all:["insurance","580","3,600|3600","1,200|1200"]},
            {all:["insurance","2,980|2980"]}
          ],
          hit:"Insurance: 580 + 3,600 - 1,200 = 2,980",
          miss:"Insurance: Opening prepaid 580 + paid 3,600 - closing prepaid 1,200 = 2,980 expense." },

        { marks:1, desc:"Calculates depreciation on premises (original + new, land excluded, time-apportioned)",
          accept:[
            {num:[8450]},
            {all:["depreciation","premises|building","8,450|8450"]},
            {all:["335,000|335000","2%","210,000|210000","5/12"]}
          ],
          hit:"Premises depreciation: (335,000 x 2%) + (210,000 x 2% x 5/12) = 6,700 + 1,750 = 8,450",
          miss:"Premises dep: Original buildings (385,000 - 50,000 = 335,000) x 2% = 6,700. New building (240,000 - 30,000 = 210,000) x 2% x 5/12 = 1,750. Total = 8,450." },

        { marks:1, desc:"Apportions loan interest (80% business, 20% private) and time-apportions",
          accept:[
            {all:["loan","interest","275,000|275000","6%","5/12|20%"]},
            {all:["interest","private|drawing|80%|business"]},
            {num:[5500,6875]}
          ],
          hit:"Loan interest: 275,000 x 6% x 5/12 = 6,875. Business = 80% = 5,500; Private = 1,375 to drawings.",
          miss:"Loan interest: 275,000 x 6% x 5/12 = 6,875. Business portion (80%) = 5,500. Private (20%) = 1,375 added to drawings." },

        { marks:1, desc:"Calculates drawings correctly (goods + cash + private interest + private expenses)",
          accept:[
            {all:["drawing","goods|6,240|6240","private|personal"]},
            {all:["drawing","7,800|7800","retail"]},
            {num:[19140]}
          ],
          hit:"Total drawings: goods 6,240 + retail adjustment + private interest + private L&H",
          miss:"Drawings: goods at cost 6,240 (120 x 52) + goods at retail 7,800 + private interest 1,375 + private L&H 3,725 + charity 3,200 = total drawings." },

        { marks:1, desc:"Explains Net Worth",
          accept:[
            {all:["net worth","assets","liabilities"]},
            {all:["own","owe","difference|minus|less"]},
            {all:["total","asset","minus|less|subtract","liabilit"]}
          ],
          hit:"Net worth = total assets minus total liabilities",
          miss:"Net Worth: the total value of what a person/business OWNS (assets) minus what they OWE (liabilities)." },

        { marks:1, desc:"States limitations of incomplete records", group:"limitations_q7",
          accept:[
            {all:["incomplete","accurate|reliable|unreliable"]},
            {all:["double entry","cross-check|check|verify"]},
            {all:["fraud","difficult|harder|easier"]},
            {all:["decision","limited|insufficient|information"]},
            {all:["tax","difficult|unreliable|legal"]}
          ],
          hit:"Limitations: inaccurate accounts, no cross-checking, fraud risk, limited for decisions/tax",
          miss:"Limitations: (1) accounts cannot be accurately prepared, (2) no double-entry cross-check so fraud risk higher, (3) limited info for decisions, (4) unreliable for tax/legal purposes." }
      ]
    },

    /* ============================================================
       Q7  Tabular Statement  (Joyce Ltd)
       10 transactions recorded in tabular format (100 marks)
       ============================================================ */
    8: {
      totalMarks: 10, topic: "Tabular Statement (Recording Transactions in Table Format)",
      points: [
        { marks:1, desc:"January business acquisition: correct goodwill calculation (balancing figure)",
          accept:[
            {num:[44000]},
            {all:["goodwill","44,000|44000"]},
            {all:["goodwill","balancing|difference"]},
            {all:["price","paid","net assets","goodwill"]}
          ],
          hit:"Goodwill = price paid minus net assets acquired = 44,000",
          miss:"Goodwill = Purchase price (250,000 x 1.25 = 312,500) minus net assets (Buildings 210,000 + Vans 55,000 + Debtors 13,000 - Creditors 9,500 = 268,500) = 44,000." },

        { marks:1, desc:"January: share capital and share premium correctly split",
          accept:[
            {all:["share capital","250,000|250000"]},
            {all:["share premium","62,500|62500"]},
            {all:["250,000|250000","shares","1.25|premium"]}
          ],
          hit:"Share capital: 250,000 at par. Share premium: 250,000 x 0.25 = 62,500",
          miss:"250,000 shares at 1.25 each: Share Capital +250,000 (at 1 each) + Share Premium +62,500 (25c premium each)." },

        { marks:1, desc:"March van trade-in: old van removed, new van added, bank payment calculated",
          accept:[
            {all:["van","26,000|26000","47,000|47000","trade"]},
            {all:["van","cost","+21,000|+21000|net"]},
            {all:["bank","33,500|33500"]}
          ],
          hit:"Van trade-in: cost -26,000 +47,000. Acc dep +14,250 removed. Bank -33,500.",
          miss:"Van trade-in: Vans cost -26,000 (old) +47,000 (new). Van acc dep: remove 14,250. Bank: -(47,000 - 13,500 trade-in) = -33,500." },

        { marks:1, desc:"March: loss on disposal calculated and recorded in P&L column",
          accept:[
            {all:["loss","disposal|trade","van"]},
            {all:["nbv|net book value","trade-in|allowance|loss"]},
            {all:["26,000|26000","14,250|14250","11,750|11750","13,500|13500"]}
          ],
          hit:"Loss on disposal: NBV 11,750 vs trade-in 13,500 = profit/loss correctly recorded",
          miss:"Old van: Cost 26,000 - Acc Dep 14,250 = NBV 11,750. Trade-in allowance 13,500. Profit 1,750 (or loss if different)." },

        { marks:1, desc:"June revaluation: buildings increase + accumulated dep written off = revaluation reserve",
          accept:[
            {num:[146000]},
            {all:["revaluation","reserve","146,000|146000"]},
            {all:["revaluation","900,000|900000","110,000|110000","36,000|36000"]}
          ],
          hit:"Revaluation: L&B +110,000 + Acc Dep written off 36,000 = Reval Reserve +146,000",
          miss:"L&B increase to 900,000 (+110,000). Accumulated dep written off (+36,000). Revaluation Reserve = 110,000 + 36,000 = 146,000." },

        { marks:1, desc:"October bad debt recovery: bank +1,200, debtors reinstated, P&L credited",
          accept:[
            {all:["bad debt","recovered|recovery","1,200|1200"]},
            {all:["debtor","reinstated|+1,600|1600"]},
            {all:["bank","+1,200|1200","debtor","1,600|1600"]}
          ],
          hit:"Bad debt recovery: Bank +1,200, Debtors +1,600 (full debt reinstated), P&L credit for recovery",
          miss:"Bad debt: full debt reinstated as debtor (1,200 = 75%, so total = 1,600). Bank +1,200, Debtors +1,600 (of which 400 still owed). P&L: bad debt recovered." },

        { marks:1, desc:"Year-end depreciation on L&B correctly calculated",
          accept:[
            {num:[18310]},
            {all:["depreciation","building","18,310|18310"]},
            {all:["900,000|900000","land","2%","depreciation"]}
          ],
          hit:"L&B depreciation: (900,000 - land portion) x 2% = 18,310",
          miss:"Depreciation on revalued buildings: (900,000 minus land value) x 2% = 18,310." },

        { marks:1, desc:"Year-end depreciation on vehicles correctly calculated",
          accept:[
            {num:[18550]},
            {all:["depreciation","vehicle|van","18,550|18550"]}
          ],
          hit:"Vehicle depreciation = 18,550",
          miss:"Vehicle depreciation calculated on updated cost figures after January acquisition and March trade-in = 18,550." },

        { marks:1, desc:"BDP adjustment at year end",
          accept:[
            {num:[1389]},
            {all:["bdp|bad debt provision","1,389|1389"]},
            {all:["bdp|provision","debtors","adjust"]}
          ],
          hit:"BDP adjusted to 1,389",
          miss:"BDP recalculated on adjusted debtors balance at year end = 1,389." },

        { marks:1, desc:"Final balances satisfy equation: Total Assets = Total Liabilities + Total Equity",
          accept:[
            {all:["balance|total","assets","liabilities","equity"]},
            {all:["tabular","balance|agree|tally"]},
            {all:["final","balance","correct|agree"]}
          ],
          hit:"Final balances agree: Assets = Liabilities + Equity",
          miss:"Check: Total Assets must equal Total Liabilities + Total Equity. All 10 transactions must be correctly recorded with approximately 50 individual entries." }
      ]
    },

    /* ============================================================
       Q8  Marginal Costing  (Kells Ltd)
       BEP & MOS (15) + Target profit (12) + Scenarios (14+13+14) + Theory (12)
       ============================================================ */
    9: {
      totalMarks: 10, topic: "Marginal Costing (Break-Even, Contribution, Sensitivity)",
      points: [
        { marks:1, desc:"Correctly classifies costs as variable or fixed and calculates variable cost per unit (23.87)",
          accept:[
            {num:[23.87]},
            {all:["variable","23.87|23.9"]},
            {all:["12.80|12.8","8.60|8.6","0.65","1.82"]}
          ],
          hit:"Variable cost per unit: 12.80 + 8.60 + 0.65 + 1.82 = 23.87",
          miss:"Variable costs per unit: Materials 12.80 + Labour 8.60 + Factory OH (20%) 0.65 + Commission (5% x 36.40) 1.82 = 23.87." },

        { marks:1, desc:"Calculates contribution per unit (12.53)",
          accept:[
            {num:[12.53]},
            {all:["contribution","12.53|12.5"]},
            {all:["36.40|36.4","23.87","contribution"]}
          ],
          hit:"Contribution per unit: 36.40 - 23.87 = 12.53",
          miss:"Contribution per unit = Selling price - Variable cost = 36.40 - 23.87 = 12.53." },

        { marks:1, desc:"Calculates break-even point (17,435 units)",
          accept:[
            {num:[17435]},
            {all:["break-even|breakeven|bep","17,435|17435"]},
            {all:["218,460|218460","12.53","17,435|17435"]}
          ],
          hit:"BEP = 218,460 / 12.53 = 17,435 units",
          miss:"Break-even point = Fixed Costs / CPU = 218,460 / 12.53 = 17,435 units." },

        { marks:1, desc:"Calculates margin of safety (24,565 units)",
          accept:[
            {num:[24565]},
            {all:["margin of safety","24,565|24565"]},
            {all:["42,000|42000","17,435|17435"]}
          ],
          hit:"Margin of safety: 42,000 - 17,435 = 24,565 units",
          miss:"Margin of safety = Actual sales - BEP = 42,000 - 17,435 = 24,565 units. Buffer before making a loss." },

        { marks:1, desc:"Part (b): units for 25% profit increase (48,142 units)",
          accept:[
            {num:[48142]},
            {all:["48,142|48142","units"]},
            {all:["384,750|384750","218,460|218460","12.53"]}
          ],
          hit:"Units for 25% profit increase: (218,460 + 384,750) / 12.53 = 48,142",
          miss:"Target profit = 307,800 x 1.25 = 384,750. Units = (218,460 + 384,750) / 12.53 = 48,142 units." },

        { marks:1, desc:"Part (c): new scenario profit calculation (229,790)",
          accept:[
            {num:[229790]},
            {all:["229,790|229790"]},
            {all:["45,000|45000","34","10.25","231,460|231460"]}
          ],
          hit:"New scenario profit: (45,000 x 10.25) - 231,460 = 229,790",
          miss:"SP 34, units 45,000. New commission = 5% x 34 = 1.70. CPU = 34 - 23.75 = 10.25. New FC = 231,460. Profit = 461,250 - 231,460 = 229,790." },

        { marks:1, desc:"Part (d): required selling price (36.95)",
          accept:[
            {num:[36.95]},
            {all:["selling price","36.95"]},
            {all:["0.95","35.10|35.1","36.95"]}
          ],
          hit:"Required selling price = 36.95",
          miss:"New FC = 240,306. Required CPU = (240,306 + 307,800) / 42,000 = 13.05. CPU = 0.95X - 22.05 = 13.05. X = 35.10/0.95 = 36.95." },

        { marks:1, desc:"Part (e): units for 10% profit on sales at SP 35 (28,372 units)",
          accept:[
            {num:[28372]},
            {all:["28,372|28372","units"]},
            {all:["3.50|3.5","11.20|11.2","7.70|7.7"]}
          ],
          hit:"Units for 10% profit on sales: 218,460 / 7.70 = 28,372",
          miss:"Profit per unit = 10% x 35 = 3.50. CPU at SP 35 = 11.20. Units = 218,460 / (11.20 - 3.50) = 218,460 / 7.70 = 28,372." },

        { marks:1, desc:"Explains sensitivity analysis ('what if' analysis)",
          accept:[
            {all:["sensitivity","what if|change|effect|variable"]},
            {all:["sensitivity","selling price|volume|cost|profit"]},
            {phrase:["what if","sensitivity analysis"]}
          ],
          hit:"Sensitivity analysis: 'what if' analysis showing effect of changes in price, volume, or costs on profit",
          miss:"Sensitivity Analysis = 'what if' analysis. Shows the effect on profit of changes in selling price, sales volume, variable costs, or fixed costs." },

        { marks:1, desc:"Explains step fixed costs (fixed within range, jump at capacity level)",
          accept:[
            {all:["step","fixed","range|level|jump|increase"]},
            {all:["step","fixed","capacity|exceeded|output"]},
            {all:["staircase|step|flat","jump|vertical|increase"]}
          ],
          hit:"Step fixed costs: fixed within a range but jump to a new level when range is exceeded",
          miss:"Step fixed costs: costs that are FIXED within a range but JUMP to a new level when capacity is exceeded. Graph looks like a staircase." }
      ]
    },

    /* ============================================================
       Q9  Budgeting  (Jenkins Ltd)
       Production (12) + Materials (18) + Manufacturing (18) + Unit Cost (11) + Theory (12)
       ============================================================ */
    10: {
      totalMarks: 10, topic: "Budgeting (Production, Materials, Manufacturing, Unit Cost)",
      points: [
        { marks:1, desc:"Production budget: units to produce (Shaded 12,872; Clear 9,658)",
          accept:[
            {num:[12872,9658]},
            {all:["12,872|12872","9,658|9658"]},
            {all:["production","shaded","clear","units"]}
          ],
          hit:"Units to produce: Shaded 12,872; Clear 9,658",
          miss:"Shaded: 12,800 + 792 - 720 = 12,872. Clear: 9,600 + 638 - 580 = 9,658." },

        { marks:1, desc:"Closing stock FG calculated (10% increase on opening)",
          accept:[
            {num:[792,638]},
            {all:["closing","stock","792","638"]},
            {all:["720","1.10|10%","580","1.10|10%"]}
          ],
          hit:"Closing stock FG: Shaded 792 (720 x 1.10), Clear 638 (580 x 1.10)",
          miss:"Closing stock FG = Opening x 1.10. Shaded: 720 x 1.10 = 792. Clear: 580 x 1.10 = 638." },

        { marks:1, desc:"Materials purchases budget: total kg required for each material",
          accept:[
            {num:[109436,93334]},
            {all:["109,436|109436","93,334|93334"]},
            {all:["material x","material y","usage|total"]}
          ],
          hit:"Usage: Material X = 109,436 kg; Material Y = 93,334 kg",
          miss:"Material X: (12,872 x 4) + (9,658 x 6) = 109,436 kg. Material Y: (12,872 x 5) + (9,658 x 3) = 93,334 kg." },

        { marks:1, desc:"Materials purchases cost calculated (total 995,252)",
          accept:[
            {num:[995252]},
            {all:["995,252|995252"]},
            {all:["385,266|385266","609,986|609986"]}
          ],
          hit:"Materials purchases cost: 385,266 + 609,986 = 995,252",
          miss:"Purchases: X = 110,076 kg x 3.50 = 385,266. Y = 93,844 kg x 6.50 = 609,986. Total = 995,252." },

        { marks:1, desc:"Production cost budget: total labour cost (2,790,618)",
          accept:[
            {num:[2790618]},
            {all:["labour|wages","2,790,618|2790618"]},
            {all:["1,312,944|1312944","1,477,674|1477674"]}
          ],
          hit:"Total labour: Shaded 1,312,944 + Clear 1,477,674 = 2,790,618",
          miss:"Labour: Shaded (12,872 x 6 x 17 = 1,312,944) + Clear (9,658 x 9 x 17 = 1,477,674) = 2,790,618." },

        { marks:1, desc:"Variable overheads correctly calculated (1,395,309)",
          accept:[
            {num:[1395309]},
            {all:["variable","overhead","1,395,309|1395309"]},
            {all:["656,472|656472","738,837|738837"]}
          ],
          hit:"Variable OH: Shaded 656,472 + Clear 738,837 = 1,395,309",
          miss:"Variable OH at 8.50/labour hour: Shaded (12,872 x 6 x 8.50 = 656,472) + Clear (9,658 x 9 x 8.50 = 738,837) = 1,395,309." },

        { marks:1, desc:"Fixed OH absorption rate calculated (4 per labour hour)",
          accept:[
            {num:[4]},
            {all:["fixed","overhead","4","per hour|per labour hour"]},
            {all:["656,616|656616","164,154|164154"]}
          ],
          hit:"Fixed OH rate: 656,616 / 164,154 hours = 4 per labour hour",
          miss:"Total labour hours = (12,872 x 6) + (9,658 x 9) = 164,154 hours. Fixed OH rate = 656,616 / 164,154 = 4 per hour." },

        { marks:1, desc:"Unit cost of closing stock (Shaded 223.50; Clear 306.00)",
          accept:[
            {num:[223.5,306]},
            {all:["223.50|223.5","306.00|306"]},
            {all:["unit cost","shaded","clear"]}
          ],
          hit:"Unit cost: Shaded 223.50; Clear 306.00",
          miss:"Shaded: 14+32.50+102+51+24 = 223.50. Clear: 21+19.50+153+76.50+36 = 306.00." },

        { marks:1, desc:"Explains Principal Budget Factor (limiting factor that constrains activity)",
          accept:[
            {all:["principal","budget","factor","limit|constrain"]},
            {all:["limiting factor","sales|demand|capacity|labour|material"]},
            {all:["principal","budget","start|begin|first"]}
          ],
          hit:"Principal budget factor: the factor that limits/constrains activity (usually sales demand)",
          miss:"Principal Budget Factor: the factor that LIMITS a business's activity. Usually SALES DEMAND. The budget process starts with this limiting factor." },

        { marks:1, desc:"Explains Uncontrollable Costs (costs manager cannot control)",
          accept:[
            {all:["uncontrollable","cost","manager|control|responsible"]},
            {all:["uncontrollable","rates|levy|insurance|head office"]},
            {all:["cost","cannot|no","control","variance|responsible"]}
          ],
          hit:"Uncontrollable costs: costs a manager has no control over and cannot be held responsible for",
          miss:"Uncontrollable costs: costs a cost centre manager has NO CONTROL over and CANNOT be held responsible for variances. E.g. local authority rates, government levies." }
      ]
    }
  }
};

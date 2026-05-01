var STUDY_ACCOUNTING = [
  {
    topic: "Final Accounts — Sole Trader",
    icon: "📒",
    subtopics: [
      {
        title: "Trial Balance to Final Accounts",
        content: "The trial balance is a list of all ledger balances at the end of the financial year. It is the starting point for preparing final accounts.\n\nFrom the trial balance you prepare:\n1. Trading Account — calculates Gross Profit\n2. Profit & Loss Account — calculates Net Profit\n3. Balance Sheet — shows assets, liabilities and capital\n\nSteps:\n- Extract revenue items (sales, purchases, expenses) for the Trading and P&L\n- Extract capital items (assets, liabilities, capital) for the Balance Sheet\n- Apply all adjustments from the notes\n- Check: Balance Sheet MUST balance (Net Assets = Capital Employed)",
        keyTerms: ["Trial Balance", "Trading Account", "Profit & Loss Account", "Balance Sheet", "Gross Profit", "Net Profit"],
        formula: "Gross Profit = Sales - Cost of Sales\nNet Profit = Gross Profit + Other Income - Expenses\nCost of Sales = Opening Stock + Purchases - Closing Stock",
        examTip: "Always rule off and label each section clearly. The examiner gives marks for presentation. Start with the Trading Account, then P&L, then Balance Sheet."
      },
      {
        title: "Accruals (Expenses Due)",
        content: "An accrual is an expense that has been incurred during the year but has NOT yet been paid by the year end.\n\nHow to handle:\n- ADD the accrual to the expense in the P&L (increases the expense)\n- Show it as a Current Liability on the Balance Sheet (under Creditors: amounts falling due within one year)\n\nExample: Insurance for the year is €1,200. Only €1,000 has been paid. The accrual is €200.\n- P&L: Insurance = €1,200\n- Balance Sheet: Accruals = €200 (current liability)\n\nCommon exam trap: Sometimes the trial balance figure already includes part of the accrual — read the question carefully to see if it says 'the trial balance figure does not include...' or 'owing at year end'.",
        keyTerms: ["Accrual", "Expense due", "Current liability", "Creditors due within one year"],
        formula: "Adjusted Expense = Trial Balance figure + Accrual amount",
        examTip: "Accruals INCREASE expenses (reducing profit) and appear as current liabilities. Always double-check: does the question say 'not included in the trial balance' or 'included'?"
      },
      {
        title: "Prepayments (Expenses Paid in Advance)",
        content: "A prepayment is an expense that has been paid during the year but relates to the NEXT accounting period.\n\nHow to handle:\n- SUBTRACT the prepayment from the expense in the P&L (decreases the expense)\n- Show it as a Current Asset on the Balance Sheet\n\nExample: Rates for the year are €2,400. But €600 relates to next year (prepaid).\n- P&L: Rates = €1,800 (€2,400 - €600)\n- Balance Sheet: Prepayments = €600 (current asset)\n\nCommon exam trap: Watch for prepayments that span multiple periods. If insurance is paid quarterly in advance and you are 1 month into the quarter, 2 months are prepaid.",
        keyTerms: ["Prepayment", "Expense paid in advance", "Current asset"],
        formula: "Adjusted Expense = Trial Balance figure - Prepayment amount",
        examTip: "Prepayments DECREASE expenses (increasing profit) and appear as current assets. If the question says 'paid to 31 March' and the year end is 31 December, then 3 months are prepaid."
      },
      {
        title: "Depreciation",
        content: "Depreciation is the reduction in the value of a fixed asset over time due to wear and tear, obsolescence, or passage of time.\n\nStraight Line Method:\n- Same amount each year\n- Formula: (Cost - Residual Value) / Useful Life\n\nReducing Balance Method:\n- Percentage applied to the Net Book Value (NBV) each year\n- Higher depreciation in early years, lower in later years\n\nHow to handle in final accounts:\n- P&L: Depreciation is an EXPENSE (reduces profit)\n- Balance Sheet: Show the asset at cost, then deduct accumulated depreciation to get NBV\n\nPresentation on Balance Sheet:\n  Fixed Asset at Cost\n  Less: Accumulated Depreciation\n  = Net Book Value (NBV)",
        keyTerms: ["Depreciation", "Straight line", "Reducing balance", "Net Book Value", "Accumulated depreciation", "Residual value"],
        formula: "Straight Line = (Cost - Residual Value) / Useful Life\nReducing Balance = NBV x Rate%\nNBV = Cost - Accumulated Depreciation",
        examTip: "Always show the depreciation calculation as a working. If the asset was bought mid-year, you may need to calculate a partial year's depreciation (e.g. 6/12). Read the question for 'full year in the year of purchase' or 'from date of purchase'."
      },
      {
        title: "Bad Debts",
        content: "A bad debt is a debtor (customer) who CANNOT or WILL NOT pay what they owe. The debt is written off as a loss.\n\nHow to handle:\n- P&L: Bad debts written off is an EXPENSE\n- Balance Sheet: REDUCE Debtors by the bad debt amount\n\nExample: Debtors are €15,000. A debt of €500 is irrecoverable (bad).\n- P&L: Bad debts = €500\n- Balance Sheet: Debtors = €14,500",
        keyTerms: ["Bad debt", "Irrecoverable debt", "Written off"],
        formula: "Adjusted Debtors = Total Debtors - Bad Debts Written Off",
        examTip: "Always deduct bad debts from debtors BEFORE calculating the provision for bad debts. This is a very common mistake in exams."
      },
      {
        title: "Provision for Bad Debts (Doubtful Debts)",
        content: "A provision for bad debts is an estimate of the amount of current debtors that may not pay in the future. It follows the prudence concept.\n\nHow to handle:\n1. First, write off any specific bad debts\n2. Then calculate the provision as a % of REMAINING debtors\n3. Compare the new provision to the old provision:\n   - If the new provision is HIGHER: the increase is an EXPENSE in the P&L\n   - If the new provision is LOWER: the decrease is INCOME (or a reduction of the bad debts expense)\n\nBalance Sheet: Deduct the provision from Debtors\n  Debtors\n  Less: Provision for Bad Debts\n  = Net Debtors\n\nExample: Debtors €20,000. Bad debt of €1,000 written off. Provision at 5% of remaining debtors.\nRemaining debtors = €19,000\nNew provision = €950\nIf old provision was €800, increase = €150 (expense in P&L)",
        keyTerms: ["Provision for bad debts", "Doubtful debts", "Prudence", "Increase in provision", "Decrease in provision"],
        formula: "New Provision = Remaining Debtors (after bad debts) x %\nChange = New Provision - Old Provision\nIf positive = expense | If negative = income",
        examTip: "ALWAYS write off bad debts FIRST, then calculate provision on the remaining debtors. Show this as a working — the examiner wants to see the steps. A decrease in provision is rare but does come up."
      },
      {
        title: "Stock Valuation",
        content: "Closing stock must be valued at the LOWER of cost or net realisable value (NRV). This follows the prudence concept.\n\nNet Realisable Value = Selling Price - Costs to Complete/Sell\n\nIf NRV < Cost, use NRV (the stock has fallen in value)\nIf Cost < NRV, use Cost (don't recognise profit before it's earned)\n\nWhere closing stock appears:\n- Trading Account: Closing stock is DEDUCTED from cost of sales (increases gross profit)\n- Balance Sheet: Closing stock is a Current Asset\n\nCommon exam trap: The question may give you individual items of stock with different costs and NRVs. You must compare cost vs NRV for EACH item individually, not in total.",
        keyTerms: ["Closing stock", "Net realisable value", "Lower of cost or NRV", "Prudence concept"],
        formula: "Stock Value = Lower of (Cost, NRV) for EACH item\nNRV = Expected Selling Price - Costs to Complete - Selling Costs",
        examTip: "Compare cost and NRV for each stock item SEPARATELY. Never average them. Show a small table working if there are multiple items."
      },
      {
        title: "Goods in Transit",
        content: "Goods in transit are goods that have been dispatched by the supplier but have NOT yet been received by the business at the year end.\n\nGoods in transit at year end:\n- ADD to Purchases (P&L / Trading Account)\n- ADD to Creditors (Balance Sheet — we owe for them)\n- If the goods have been included in closing stock, no further stock adjustment needed\n- If NOT included in closing stock, ADD to closing stock as well\n\nCommon exam trap: Read carefully whether the goods are included in stock or not. The question will usually say 'goods in transit not included in stock at year end' — in that case, adjust BOTH stock and creditors.",
        keyTerms: ["Goods in transit", "Purchases adjustment", "Creditors adjustment", "Stock adjustment"],
        formula: null,
        examTip: "Three possible adjustments: (1) Add to purchases, (2) Add to creditors, (3) Add to closing stock IF not already counted. Read the question wording very carefully."
      },
      {
        title: "Sale or Return (Goods on Approval)",
        content: "Goods sent on a sale-or-return basis are goods sent to a customer who has the option to return them. Until the customer confirms the sale, the goods still belong to the seller.\n\nIf goods are still with the customer at year end and have NOT been approved:\n- They should NOT be included in Sales\n- They should NOT be included in Debtors\n- They SHOULD be included in Closing Stock (at COST, not selling price)\n\nAdjustments:\n1. Reduce Sales by the selling price\n2. Reduce Debtors by the selling price\n3. Increase Closing Stock by the cost price\n\nCommon exam trap: The goods are usually recorded at selling price in debtors/sales. You must reverse this at selling price but add back to stock at COST price.",
        keyTerms: ["Sale or return", "Goods on approval", "Selling price", "Cost price"],
        formula: "Reduce Sales by selling price\nReduce Debtors by selling price\nIncrease Closing Stock by cost price",
        examTip: "Sale or return adjustments affect THREE figures: Sales, Debtors, and Closing Stock. Remember: reverse at selling price but add to stock at COST. Show all three adjustments clearly."
      }
    ]
  },
  {
    topic: "Final Accounts — Company",
    icon: "🏢",
    subtopics: [
      {
        title: "Company Final Accounts Overview",
        content: "A company's final accounts follow the same structure as a sole trader but with additional items relating to company law.\n\nKey differences from sole trader:\n- Share Capital replaces the owner's capital\n- Reserves (revenue and capital) appear\n- Corporation Tax instead of personal drawings\n- Dividends are distributions to shareholders\n- Debentures are long-term loans\n- Directors' fees are expenses\n\nThe P&L account shows:\n- Trading Account (same as sole trader)\n- Profit & Loss Account (same adjustments plus directors' fees, debenture interest)\n- Profit & Loss Appropriation Account (corporation tax, dividends, transfers to reserves)\n\nThe Balance Sheet has:\n- Fixed Assets (same)\n- Current Assets / Current Liabilities (same but includes corporation tax, proposed dividends)\n- Financed by: Share Capital + Reserves",
        keyTerms: ["Share capital", "Reserves", "Corporation tax", "Dividends", "Debenture", "Appropriation account"],
        formula: null,
        examTip: "The company final accounts question is worth a lot of marks. Practice the layout repeatedly — the examiner expects the correct company format with Appropriation Account and Financed By section."
      },
      {
        title: "Share Capital",
        content: "Share capital represents the ownership of the company.\n\nTypes of shares:\n1. Ordinary Shares — carry voting rights, variable dividend, higher risk\n2. Preference Shares — fixed dividend rate, paid before ordinary, no voting rights usually\n\nKey terms:\n- Authorised Share Capital: maximum shares the company is allowed to issue\n- Issued Share Capital: shares actually issued to shareholders\n- Called-up Capital: amount shareholders have been asked to pay\n- Paid-up Capital: amount actually received\n- Calls in Arrears: amount called but not yet paid (deduct from capital)\n- Calls in Advance: amount paid before being called (current liability or add to capital)\n\nBalance Sheet presentation:\n  Authorised Capital (memo note only)\n  Issued Capital:\n    Ordinary Shares\n    Preference Shares\n  = Total Issued Capital",
        keyTerms: ["Ordinary shares", "Preference shares", "Authorised capital", "Issued capital", "Calls in arrears", "Calls in advance"],
        formula: null,
        examTip: "Authorised capital is shown as a memo note — it does NOT go into the balance sheet totals. Only issued (paid-up) capital counts. Deduct calls in arrears."
      },
      {
        title: "Reserves",
        content: "Reserves are profits retained in the company (not distributed as dividends).\n\nRevenue Reserves (distributable — can be used for dividends):\n- Profit & Loss Balance (retained profits)\n- General Reserve\n\nCapital Reserves (non-distributable — cannot be used for dividends):\n- Share Premium Account: excess paid over nominal value of shares\n- Revaluation Reserve: increase in value of fixed assets on revaluation\n- Capital Redemption Reserve Fund\n\nShare Premium example: A company issues 10,000 ordinary shares with a nominal value of €1 at €1.50 each.\n- Ordinary Share Capital increases by €10,000\n- Share Premium Account increases by €5,000 (the extra 50c per share)\n\nTransfers to General Reserve: The directors may transfer an amount from P&L to General Reserve. This is shown in the Appropriation Account.",
        keyTerms: ["Revenue reserve", "Capital reserve", "General reserve", "Share premium", "Revaluation reserve", "Retained profits"],
        formula: "Share Premium = (Issue Price - Nominal Value) x Number of Shares",
        examTip: "Know the difference between revenue reserves (distributable) and capital reserves (non-distributable). The examiner loves asking which reserves can be used for dividends."
      },
      {
        title: "Dividends",
        content: "Dividends are distributions of profit to shareholders.\n\nPreference dividends:\n- Fixed rate (e.g., 8% preference shares)\n- Always paid before ordinary dividends\n- Calculate: Nominal Value of Pref Shares x Rate\n\nOrdinary dividends:\n- Variable, decided by directors\n- Can be stated as 'x cent per share' or 'x% of nominal value'\n\nInterim dividend: paid during the year (already in trial balance)\nFinal/Proposed dividend: declared at year end (adjustment)\n\nHow to handle:\n- P&L Appropriation Account: Deduct total dividends (interim + final)\n- Balance Sheet:\n  - Interim dividend: already paid, no balance sheet effect\n  - Proposed/Final dividend: Current Liability (creditors due within one year)\n\nExample: 100,000 ordinary €1 shares. Interim dividend 3c paid. Final dividend 5c proposed.\n- Interim = 100,000 x €0.03 = €3,000 (already paid)\n- Final = 100,000 x €0.05 = €5,000 (current liability)\n- Total dividends in Appropriation Account = €8,000",
        keyTerms: ["Interim dividend", "Final dividend", "Proposed dividend", "Preference dividend", "Ordinary dividend"],
        formula: "Dividend = Number of Shares x Dividend per Share\nor\nDividend = Nominal Value of Shares x Dividend Rate %",
        examTip: "Always calculate preference dividends first. The proposed/final dividend goes as a current liability on the balance sheet. If the question says 'provide for' a dividend, it means proposed."
      },
      {
        title: "Corporation Tax",
        content: "Corporation tax is the tax a company pays on its profits.\n\nHow to handle:\n- P&L Appropriation Account: Deduct corporation tax from profit\n- Balance Sheet: If not yet paid, show as a Current Liability\n\nOften there are TWO tax figures:\n1. Tax from LAST year (shown in trial balance as a creditor — this was the estimate, now being paid)\n2. Tax for THIS year (provision for the current year — new adjustment)\n\nIf the actual tax paid differs from last year's provision:\n- Underprovision: Extra tax owed — add to this year's tax charge\n- Overprovision: Refund or reduction — deduct from this year's tax charge\n\nExample: Last year's provision was €12,000. Actual tax paid was €13,500.\nUnderprovision = €1,500\nThis year's provision = €15,000\nTotal tax in Appropriation = €15,000 + €1,500 = €16,500",
        keyTerms: ["Corporation tax", "Provision for tax", "Underprovision", "Overprovision", "Current liability"],
        formula: "Total Tax Charge = Current Year Provision +/- Under/Overprovision from Prior Year",
        examTip: "Watch for under/overprovision — it's a favourite exam adjustment. The current year's provision appears as a current liability on the balance sheet."
      },
      {
        title: "Debentures",
        content: "A debenture is a long-term loan to the company, usually with a fixed interest rate.\n\nDebenture interest is an EXPENSE (not a dividend) — it goes in the P&L Account, not the Appropriation Account.\n\nHow to handle:\n- P&L: Debenture interest is an expense (deducted before arriving at net profit)\n- Balance Sheet: The debenture itself is a Long-term Liability (creditors due after more than one year)\n- If interest is due but unpaid at year end: the outstanding interest is a Current Liability (accrual)\n\nExample: 8% Debentures of €100,000. Interest paid for 9 months only.\n- Full year interest = €100,000 x 8% = €8,000\n- Paid = €6,000 (9 months)\n- Accrued = €2,000 (3 months owing)\n- P&L: Debenture interest = €8,000\n- Balance Sheet: Accrued debenture interest = €2,000 (current liability)\n  Debentures = €100,000 (long-term liability)",
        keyTerms: ["Debenture", "Debenture interest", "Long-term liability", "Accrued interest"],
        formula: "Debenture Interest = Nominal Value of Debentures x Interest Rate %\nAccrued Interest = Full Year Interest - Amount Already Paid",
        examTip: "Debenture interest is an EXPENSE in the P&L — not in the Appropriation Account. This is different from dividends. If only part of the interest has been paid, accrue the rest."
      },
      {
        title: "Directors' Fees",
        content: "Directors' fees (or directors' remuneration) are payments to the directors for managing the company.\n\nHow to handle:\n- P&L: Directors' fees are an EXPENSE (administration expense)\n- If fees are owing at year end: show the amount due as a Current Liability (accrual)\n\nThis is straightforward but watch for:\n- Fees already in the trial balance (partly paid) with additional fees due\n- Directors' fees vs. directors' salaries — both are expenses\n\nExample: Directors' fees in trial balance = €40,000. Additional fees of €10,000 are due.\n- P&L: Directors' fees = €50,000\n- Balance Sheet: Accrual for directors' fees = €10,000 (current liability)",
        keyTerms: ["Directors' fees", "Directors' remuneration", "Administration expense"],
        formula: null,
        examTip: "Directors' fees are an expense, NOT an appropriation of profit. They come before net profit. If extra fees are due, remember to accrue them."
      }
    ]
  },
  {
    topic: "Final Accounts — Manufacturing",
    icon: "🏭",
    subtopics: [
      {
        title: "Manufacturing Account Structure",
        content: "A manufacturing firm makes its own goods. The Manufacturing Account calculates the Cost of Production (what it costs to make the goods).\n\nStructure:\n1. PRIME COST\n   = Direct Materials + Direct Labour + Direct Expenses\n\n2. FACTORY COST / COST OF PRODUCTION\n   = Prime Cost + Factory Overheads\n\n3. The Cost of Production is then transferred to the Trading Account as the equivalent of 'Purchases' for a non-manufacturing firm.\n\nThe Trading Account then calculates Gross Profit:\n   Sales\n   Less: Cost of Sales\n   (Opening Stock of Finished Goods + Cost of Production - Closing Stock of Finished Goods)\n   = Gross Profit",
        keyTerms: ["Prime cost", "Factory overheads", "Cost of production", "Direct materials", "Direct labour", "Direct expenses"],
        formula: "Prime Cost = Direct Materials + Direct Labour + Direct Expenses\nCost of Production = Prime Cost + Factory Overheads\nCost of Sales = Opening Finished Goods + Cost of Production - Closing Finished Goods",
        examTip: "Learn the layout by heart. There are THREE stock figures: raw materials, work in progress, and finished goods. Don't mix them up."
      },
      {
        title: "Direct Materials (Raw Materials)",
        content: "Direct materials are the raw materials that go directly into making the product.\n\nCalculation:\n  Opening Stock of Raw Materials\n+ Purchases of Raw Materials\n+ Carriage Inwards on Raw Materials\n- Returns Outwards (if any)\n- Closing Stock of Raw Materials\n= Raw Materials Consumed (Direct Materials)\n\nNote: Raw materials stock appears in the Manufacturing Account, NOT in the Trading Account.",
        keyTerms: ["Raw materials", "Direct materials", "Raw materials consumed", "Carriage inwards"],
        formula: "Direct Materials = Opening Raw Materials + Purchases - Closing Raw Materials",
        examTip: "Carriage inwards on raw materials is added to purchases of raw materials. Keep raw materials stock separate from finished goods stock."
      },
      {
        title: "Work in Progress (WIP)",
        content: "Work in progress is goods that are partly finished at the year end — they are in the middle of being manufactured.\n\nWIP appears in the Manufacturing Account:\n  Cost of Production (before WIP adjustment)\n+ Opening Work in Progress\n- Closing Work in Progress\n= Cost of Finished Goods Produced\n\nAlternatively, some layouts add WIP to factory overheads. Follow the format your teacher uses.\n\nKey point: WIP is valued at the cost incurred so far (materials + labour + overheads to date).",
        keyTerms: ["Work in progress", "WIP", "Partly finished goods"],
        formula: "Adjusted Cost of Production = Cost before WIP + Opening WIP - Closing WIP",
        examTip: "Don't confuse WIP with finished goods stock. WIP goes in the Manufacturing Account; finished goods stock goes in the Trading Account."
      },
      {
        title: "Factory Overheads",
        content: "Factory overheads are indirect costs of manufacturing — they cannot be directly traced to a specific product.\n\nExamples:\n- Factory rent, rates, insurance\n- Factory light and heat\n- Factory depreciation (on plant, machinery, factory building)\n- Factory supervisor's wages (indirect labour)\n- Maintenance and repairs of factory equipment\n- Factory power/electricity\n\nImportant: If an expense is shared between factory and office (e.g., total rent), it must be APPORTIONED.\n\nCommon apportionment bases:\n- Floor area (for rent, rates, insurance, light & heat)\n- Book value of assets (for depreciation, insurance of assets)\n- Number of employees (for canteen costs)\n\nExample: Total rent = €24,000. Factory occupies 3/4 of the floor area.\n- Factory rent = €18,000 (goes in Manufacturing Account)\n- Office rent = €6,000 (goes in P&L)",
        keyTerms: ["Factory overheads", "Indirect costs", "Apportionment", "Factory rent", "Factory depreciation"],
        formula: null,
        examTip: "Watch for shared expenses that must be split between factory and office. The question will give you the ratio (e.g., 2:1, 3/4, 60%). Show the split as a working."
      },
      {
        title: "Transfer Price and Manufacturing Profit",
        content: "Sometimes the question asks you to transfer finished goods to the Trading Account at a TRANSFER PRICE (e.g., cost + 10% mark-up) rather than at cost.\n\nWhy? To compare the factory's efficiency against buying from outside suppliers.\n\nHow it works:\n1. Calculate Cost of Production as normal\n2. Add manufacturing profit (mark-up on cost)\n3. Transfer to Trading Account at Transfer Price\n4. The manufacturing profit is shown separately\n5. In the P&L, unrealised manufacturing profit on closing stock must be removed (provision for unrealised profit)\n\nExample: Cost of Production = €200,000. Transfer price = Cost + 20%.\n- Transfer Price = €240,000\n- Manufacturing Profit = €40,000\n\nIf closing finished goods stock is €24,000 (at transfer price):\n- Unrealised profit in stock = €24,000 x 20/120 = €4,000\n- This must be deducted as a provision in the P&L",
        keyTerms: ["Transfer price", "Manufacturing profit", "Unrealised profit", "Mark-up on cost", "Provision for unrealised profit"],
        formula: "Transfer Price = Cost of Production x (1 + Mark-up %)\nManufacturing Profit = Transfer Price - Cost of Production\nUnrealised Profit in Stock = Closing Stock at Transfer Price x Mark-up / (100 + Mark-up)",
        examTip: "If the question mentions transfer price, you MUST deal with unrealised profit on closing stock. Use the fraction mark-up/(100+mark-up) to find unrealised profit. This is a high-marks adjustment."
      }
    ]
  },
  {
    topic: "Club Accounts",
    icon: "⚽",
    subtopics: [
      {
        title: "Club Accounts Overview",
        content: "Clubs and societies are non-profit organisations. They don't have a P&L Account — instead they have:\n\n1. Receipts & Payments Account — a summary of the cash book (cash in and cash out)\n2. Income & Expenditure Account — similar to a P&L (accruals basis)\n3. Balance Sheet — same concept as a business\n4. Accumulated Fund — equivalent of Capital in a business\n\nKey difference: Clubs aim to break even, not make profit. Any surplus is added to the Accumulated Fund; any deficit is deducted.\n\nThe Receipts & Payments Account is a CASH-based summary.\nThe Income & Expenditure Account is an ACCRUALS-based statement (like a P&L).\n\nTo convert from cash (R&P) to accruals (I&E), you must adjust for:\n- Opening and closing debtors/creditors\n- Prepayments and accruals\n- Depreciation\n- Items of a capital nature (excluded from I&E)",
        keyTerms: ["Receipts & Payments", "Income & Expenditure", "Accumulated Fund", "Surplus", "Deficit", "Non-profit"],
        formula: "Accumulated Fund = Total Assets - Total Liabilities (at start of year)\nSurplus/Deficit = Income - Expenditure",
        examTip: "The Accumulated Fund at the START of the year must be calculated using an opening Balance Sheet (Statement of Affairs). This is often the first step."
      },
      {
        title: "Subscriptions",
        content: "Subscriptions are the annual fees members pay to the club.\n\nThe Receipts & Payments Account shows cash received for subscriptions.\nThe Income & Expenditure Account needs the subscription INCOME for the year (accruals basis).\n\nSubscriptions Account (T-account format):\nDebit side:\n- Opening debtors (subs due from last year)\n- I&E (the balancing figure = subscription income for the year)\n\nCredit side:\n- Bank/Cash (amount actually received — from R&P Account)\n- Opening creditors (subs received in advance last year — now earned)\n- Closing debtors (subs due but not received at year end)\n- Closing creditors/prepaid (subs received in advance for next year)\n\nAlternatively, use the formula:\nSubscription Income = Cash Received + Closing Debtors - Opening Debtors - Closing Prepaid + Opening Prepaid\n\nExample: Cash received €12,000. Opening debtors €800, closing debtors €1,200. Subs in advance at start €400, at end €600.\nIncome = €12,000 + €1,200 - €800 - €600 + €400 = €12,200",
        keyTerms: ["Subscription income", "Subscriptions in arrears", "Subscriptions in advance", "Subscription debtors"],
        formula: "Sub Income = Cash Received + Closing Arrears - Opening Arrears - Closing Advance + Opening Advance",
        examTip: "The subscriptions T-account is KEY. Draw it out every time. The income figure is always the balancing figure. Arrears = debtors (asset), Advance = creditors (liability)."
      },
      {
        title: "Bar Trading Account",
        content: "Many clubs have a bar or shop. A separate Bar Trading Account must be prepared to show the profit or loss on bar activities.\n\nBar Trading Account:\n  Bar Sales (Revenue)\n  Less: Cost of Bar Sales\n    Opening Bar Stock\n  + Bar Purchases\n  - Closing Bar Stock\n  = Cost of Bar Sales\n  = Bar Gross Profit\n  Less: Bar Expenses (wages, light, heat apportioned to bar)\n  = Bar Net Profit (or Loss)\n\nThe Bar Net Profit is then transferred as INCOME to the Income & Expenditure Account.\n\nNote: Bar stock is separate from other club assets. Bar purchases and sales are separate from general club receipts.",
        keyTerms: ["Bar Trading Account", "Bar profit", "Bar stock", "Bar purchases", "Bar sales"],
        formula: "Bar Gross Profit = Bar Sales - Cost of Bar Sales\nBar Net Profit = Bar Gross Profit - Bar Expenses",
        examTip: "The bar trading account is a separate mini-account. Only the net profit (or loss) transfers to the I&E Account. Don't put bar sales directly into the I&E."
      },
      {
        title: "Capital vs Revenue Items in Clubs",
        content: "In the Receipts & Payments Account, ALL cash received and paid is included — both capital and revenue.\n\nBut in the Income & Expenditure Account, ONLY revenue items appear.\n\nCapital items to EXCLUDE from I&E:\n- Purchase of fixed assets (equipment, furniture)\n- Sale of fixed assets\n- Loans received or repaid\n- Life membership fees (spread over expected membership years)\n- Government grants for capital purposes\n\nRevenue items to INCLUDE in I&E:\n- Subscriptions (adjusted to accruals basis)\n- Bar profit\n- Fundraising income\n- Running expenses (rent, insurance, wages)\n- Depreciation (not in R&P but IS in I&E)\n\nKey: Depreciation does NOT appear in the R&P (it's not a cash payment) but DOES appear in the I&E (it's an expense).",
        keyTerms: ["Capital expenditure", "Revenue expenditure", "Capital receipts", "Revenue receipts"],
        formula: null,
        examTip: "Capital items go on the Balance Sheet, not the I&E. Depreciation is the opposite — not in R&P (not cash) but yes in I&E (it's an expense). Life membership should be spread over the expected period."
      }
    ]
  },
  {
    topic: "Farm Accounts",
    icon: "🌾",
    subtopics: [
      {
        title: "Farm Accounts Overview",
        content: "Farm accounts follow a specific structure for the LC exam:\n\n1. Enterprise Accounts — separate accounts for each farming activity (cattle, sheep, tillage, etc.)\n2. General Profit & Loss Account — combines all enterprise profits plus other farm income, less general farm expenses\n3. Statement of Capital — similar to a capital account, showing opening capital, net profit, drawings, and closing capital\n\nEach enterprise is treated as a separate profit centre. The profit from each enterprise feeds into the General P&L.\n\nCommon enterprises:\n- Cattle enterprise\n- Sheep enterprise\n- Tillage enterprise (crops)\n- Milk/dairy enterprise",
        keyTerms: ["Enterprise account", "General P&L", "Statement of capital", "Cattle enterprise", "Tillage enterprise"],
        formula: null,
        examTip: "Farm accounts are a regular exam question. You MUST prepare enterprise accounts separately and then a General P&L. Don't mix enterprise items with general farm expenses."
      },
      {
        title: "Cattle Enterprise Account",
        content: "The cattle enterprise account shows the profit or loss from cattle farming.\n\nStructure:\nINCOME side (Credit):\n- Sales of cattle\n- Closing stock of cattle (valued at market value or cost)\n- Cattle used in the house (private use)\n\nEXPENDITURE side (Debit):\n- Opening stock of cattle\n- Purchases of cattle\n- Direct expenses (feed, vet fees, medicine, AI fees, mart fees)\n\nProfit = Total Income - Total Expenditure\n\nKey points:\n- Cattle stock is valued at MARKET VALUE (or cost — question will specify)\n- Own-use cattle (for household) = drawings at market value\n- EU subsidies/grants are NOT enterprise income — they go in the General P&L\n- Depreciation on farm machinery is NOT an enterprise expense — it goes in the General P&L",
        keyTerms: ["Cattle sales", "Cattle stock", "Cattle purchases", "Feed", "Vet fees", "Mart fees"],
        formula: "Cattle Enterprise Profit = (Sales + Closing Stock + Private Use) - (Opening Stock + Purchases + Direct Expenses)",
        examTip: "Only DIRECT cattle expenses go in the cattle enterprise. General farm expenses (depreciation, rates, insurance) go in the General P&L. Private use is treated like sales."
      },
      {
        title: "Tillage Enterprise Account",
        content: "The tillage enterprise covers crop farming (wheat, barley, oats, etc.).\n\nStructure:\nINCOME side:\n- Sales of crops\n- Closing stock of crops/harvested produce\n- Crops used on the farm (e.g., barley fed to cattle — transfer to cattle enterprise)\n- Crops used in the house (private use)\n\nEXPENDITURE side:\n- Opening stock of crops\n- Seeds\n- Fertiliser\n- Sprays\n- Contractor charges\n- Direct tillage expenses\n\nNote: Crops fed to cattle are a cost to the cattle enterprise and income for the tillage enterprise (inter-enterprise transfer).",
        keyTerms: ["Tillage", "Crops", "Seeds", "Fertiliser", "Contractor charges", "Inter-enterprise transfer"],
        formula: "Tillage Profit = (Sales + Closing Stock + Transfers + Private Use) - (Opening Stock + Seeds + Fertiliser + Sprays + Other Direct Costs)",
        examTip: "Watch for crops transferred between enterprises (e.g., barley fed to cattle). This is income for tillage and a cost for cattle."
      },
      {
        title: "Statement of Capital",
        content: "The Statement of Capital in farm accounts is equivalent to the Capital section of a sole trader's Balance Sheet.\n\nStructure:\n  Opening Capital (assets - liabilities at start)\n+ Net Profit (from General P&L)\n+ Capital Introduced (if any)\n- Drawings (cash + goods taken for private use)\n= Closing Capital\n\nDrawings include:\n- Cash drawings\n- Cattle/crops taken for private use (at market value)\n- Farm produce used in the house\n- Personal expenses paid from the farm account\n\nThe Closing Capital should equal Net Assets on the Balance Sheet.",
        keyTerms: ["Statement of capital", "Opening capital", "Drawings", "Capital introduced", "Closing capital"],
        formula: "Closing Capital = Opening Capital + Net Profit + Capital Introduced - Drawings",
        examTip: "Don't forget to include ALL drawings — cash, produce taken for household, and personal expenses paid from the farm. These all reduce capital."
      }
    ]
  },
  {
    topic: "Published Accounts",
    icon: "📊",
    subtopics: [
      {
        title: "Published Accounts Overview",
        content: "Published accounts are the financial statements that companies are required by law to publish and file with the Companies Registration Office (CRO).\n\nThey are a SUMMARISED version of the full internal accounts.\n\nPublished accounts include:\n1. Published Profit & Loss Account\n2. Published Balance Sheet\n3. Notes to the Accounts\n4. Directors' Report\n5. Auditor's Report\n\nKey point: Published accounts show LESS detail than internal accounts. Many P&L items are grouped together. The detail is given in the Notes to the Accounts.\n\nThe format is prescribed by the Companies Act and must follow specific headings and ordering.",
        keyTerms: ["Published accounts", "Companies Act", "CRO", "Notes to accounts", "Directors' report"],
        formula: null,
        examTip: "Learn the published format by heart — it's very different from the full internal accounts. The examiner marks you on using the correct published layout."
      },
      {
        title: "Published Profit & Loss Account",
        content: "Format:\n  Turnover (Sales)\n- Cost of Sales\n= Gross Profit\n+ Other Operating Income\n- Distribution Costs\n- Administrative Expenses\n= Operating Profit\n+ Income from Financial Assets (investment income)\n- Interest Payable (debenture interest)\n= Profit on Ordinary Activities Before Tax\n- Corporation Tax\n= Profit on Ordinary Activities After Tax\n- Dividends (interim + final)\n= Retained Profit for the Year\n+ Profit & Loss Balance at Start\n= Profit & Loss Balance at End\n\nKey groupings:\n- Cost of Sales includes: opening stock, purchases, closing stock, factory wages, carriage inwards\n- Distribution Costs: delivery wages, advertising, sales commission, carriage outwards\n- Administrative Expenses: office salaries, rent, rates, insurance, depreciation, bad debts, directors' fees, audit fees, light & heat",
        keyTerms: ["Turnover", "Cost of sales", "Distribution costs", "Administrative expenses", "Operating profit", "Retained profit"],
        formula: null,
        examTip: "You must know which expenses go under Cost of Sales, Distribution Costs, and Administrative Expenses. Learn the groupings — this is where most marks are earned or lost."
      },
      {
        title: "Published Balance Sheet",
        content: "Format:\nFIXED ASSETS\n  Tangible Assets (land, buildings, equipment, vehicles)\n  Financial Assets (investments)\n\nCURRENT ASSETS\n  Stock\n  Debtors\n  Cash\n\nCREDITORS: Amounts Falling Due Within One Year\n  Trade creditors, bank overdraft, accruals, tax, proposed dividends\n\nNET CURRENT ASSETS (Current Assets - Current Liabilities)\n\nTOTAL ASSETS LESS CURRENT LIABILITIES\n\nCREDITORS: Amounts Falling Due After More Than One Year\n  Debentures, long-term loans\n\n= NET ASSETS\n\nFINANCED BY:\n  Called-Up Share Capital\n  Share Premium\n  Revaluation Reserve\n  Profit & Loss Balance\n= SHAREHOLDERS' FUNDS\n\nNote: NET ASSETS must equal SHAREHOLDERS' FUNDS",
        keyTerms: ["Tangible assets", "Financial assets", "Net current assets", "Shareholders' funds", "Creditors due within one year", "Creditors due after one year"],
        formula: "Net Current Assets = Current Assets - Creditors due within one year\nNet Assets = Total Assets - Total Liabilities\nShareholders' Funds = Share Capital + All Reserves",
        examTip: "The layout must be exact. 'Creditors: Amounts Falling Due Within One Year' — write the FULL heading. Net Assets must equal Shareholders' Funds."
      },
      {
        title: "Notes to the Accounts",
        content: "Notes provide the detail behind the summarised published accounts.\n\nNote 1: Accounting Policies\n- State the depreciation method and rates used\n- Stock valuation policy (lower of cost or NRV)\n- Basis of recognising turnover\n\nNote 2: Operating Profit\n- Operating profit is stated after charging:\n  - Depreciation\n  - Auditor's remuneration\n  - Directors' remuneration\n  - Staff costs (wages + employer PRSI + pension)\n\nNote 3: Tangible Fixed Assets\n- For EACH class of asset show:\n  - Cost at start + additions - disposals = Cost at end\n  - Accumulated depreciation at start + charge for year - disposals = Accumulated depreciation at end\n  - NBV at start and NBV at end\n\nNote 4: Financial Assets\n- Details of investments held\n\nNote 5: Dividends\n- Breakdown of interim and final dividends",
        keyTerms: ["Accounting policies", "Operating profit note", "Tangible fixed assets note", "Staff costs"],
        formula: null,
        examTip: "The Tangible Fixed Assets note (Note 3) is almost always examined. Set it up as a columnar table with rows for Cost, Depreciation, and NBV. Show opening, movement, and closing for each."
      }
    ]
  },
  {
    topic: "Cash Flow Statement",
    icon: "💰",
    subtopics: [
      {
        title: "Cash Flow Statement Overview",
        content: "The Cash Flow Statement shows how a company's cash position changed during the year. It explains why profit doesn't equal cash.\n\nA company can make a profit but still run out of cash (e.g., if it buys a big asset or gives generous credit to debtors).\n\nThe Cash Flow Statement has 6 sections:\n1. Operating Activities\n2. Returns on Investment and Servicing of Finance\n3. Taxation\n4. Capital Expenditure and Financial Investment\n5. Equity Dividends Paid\n6. Financing\n\nNet Cash Flow = Total of all 6 sections\n\nThis should equal the change in cash/bank from the start to end of the year.",
        keyTerms: ["Cash flow", "Operating activities", "Net cash flow", "Cash vs profit"],
        formula: "Net Cash Flow = Opening Cash/Bank + Net Cash Flow from all sections = Closing Cash/Bank",
        examTip: "The cash flow statement is a very popular exam question. Learn the 6 sections and their order. All items are CASH movements — no accruals or depreciation as separate cash items."
      },
      {
        title: "Operating Activities",
        content: "This section converts the accruals-based net profit into the actual cash generated from day-to-day operations.\n\nStart with: Net Profit Before Tax\n\nADD BACK non-cash expenses:\n+ Depreciation (not a cash payment)\n+ Loss on sale of assets (not a cash outflow from operations)\n+ Increase in provision for bad debts\n\nDEDUCT non-operating income:\n- Profit on sale of assets\n- Investment income (dealt with in section 2)\n- Decrease in provision for bad debts\n\nAdjust for working capital changes:\n- Increase in stock = DEDUCT (cash used to buy stock)\n- Decrease in stock = ADD (cash freed up)\n- Increase in debtors = DEDUCT (cash tied up in debtors)\n- Decrease in debtors = ADD (cash collected)\n- Increase in creditors = ADD (cash retained)\n- Decrease in creditors = DEDUCT (cash paid out)\n\n= Net Cash from Operating Activities",
        keyTerms: ["Net profit", "Add back depreciation", "Working capital changes", "Stock increase", "Debtors increase", "Creditors increase"],
        formula: "Cash from Operations = Net Profit + Depreciation +/- Loss/Profit on Asset Sale +/- Working Capital Changes",
        examTip: "Remember the rule: if an asset increases, cash decreases (and vice versa). If a liability increases, cash increases. 'ACID' — Assets Change Inversely, Debts (liabilities) change Directly."
      },
      {
        title: "Returns on Investment and Servicing of Finance",
        content: "This section deals with cash flows from investments and borrowings.\n\nCash INFLOWS:\n+ Interest received\n+ Dividends received from investments\n\nCash OUTFLOWS:\n- Interest paid (on debentures, loans)\n- Dividends paid to preference shareholders (sometimes included here)\n\nNote: You need to calculate the ACTUAL cash paid, which may differ from the P&L figure if there are accruals.\n\nExample: Debenture interest in P&L = €8,000. Accrued interest at start = €2,000. Accrued at end = €3,000.\nCash paid = €8,000 + €2,000 - €3,000 = €7,000",
        keyTerms: ["Interest received", "Interest paid", "Dividends received"],
        formula: "Cash Paid for Interest = P&L charge + Opening Accrual - Closing Accrual",
        examTip: "Calculate the ACTUAL cash paid — adjust the P&L figure for opening and closing accruals. This catches many students."
      },
      {
        title: "Capital Expenditure and Financial Investment",
        content: "This section covers the purchase and sale of fixed assets and investments.\n\nCash OUTFLOWS:\n- Purchase of tangible fixed assets (land, buildings, equipment, vehicles)\n- Purchase of investments\n\nCash INFLOWS:\n+ Sale of tangible fixed assets (proceeds received)\n+ Sale of investments\n\nCalculating the purchase of assets when not directly given:\nUse the Fixed Asset T-account:\n  Opening Cost + Purchases - Disposals (at cost) = Closing Cost\n  Solve for Purchases\n\nCalculating proceeds from sale of assets:\n  NBV of asset sold + Profit on sale = Proceeds\n  OR\n  NBV of asset sold - Loss on sale = Proceeds\n  Where NBV = Cost - Accumulated Depreciation",
        keyTerms: ["Capital expenditure", "Asset purchases", "Asset disposals", "Proceeds"],
        formula: "Purchases = Closing Cost + Disposals at Cost - Opening Cost\nProceeds = NBV of disposed asset +/- Profit/Loss on sale",
        examTip: "You often need to work backwards to find purchases or proceeds. Draw T-accounts for assets and accumulated depreciation. Show your workings clearly."
      },
      {
        title: "Financing",
        content: "This section covers how the company raised or repaid long-term finance.\n\nCash INFLOWS:\n+ Issue of ordinary shares (number of new shares x issue price)\n+ Issue of preference shares\n+ Issue of debentures\n+ New long-term loans received\n\nCash OUTFLOWS:\n- Redemption/repayment of debentures\n- Repayment of long-term loans\n- Redemption of shares\n\nNote: Share premium is included in the cash received from share issues (shares issued at a premium means more cash received).\n\nExample: Company issues 50,000 ordinary shares at €1.50 (nominal value €1).\nCash inflow = 50,000 x €1.50 = €75,000\n(Share capital increases by €50,000, Share premium increases by €25,000)",
        keyTerms: ["Share issue", "Debenture issue", "Loan repayment", "Financing activities"],
        formula: "Cash from Share Issue = Number of Shares x Issue Price",
        examTip: "Compare opening and closing Balance Sheets to find changes in shares, debentures, and loans. The change represents cash received or repaid."
      },
      {
        title: "Net Debt Reconciliation",
        content: "The Net Debt Reconciliation (or Reconciliation of Net Cash Flow to Movement in Net Debt) is often required at the end of the Cash Flow Statement.\n\nIt reconciles the net cash flow to the change in the company's net debt position.\n\nFormat:\n  Net Cash Flow (increase/decrease in cash)\n+ Cash Inflow from Decrease in Debt (loan repayments)\n- Cash Outflow from Increase in Debt (new loans/debentures taken)\n= Change in Net Debt\n\nNet Debt at Start of Year\nChange in Net Debt\n= Net Debt at End of Year\n\nNet Debt = Bank Overdraft + Loans + Debentures - Cash/Bank Balance\n(A positive net debt means the company owes more than it has in cash)",
        keyTerms: ["Net debt", "Net cash flow", "Reconciliation", "Movement in net debt"],
        formula: "Net Debt = Borrowings (overdraft + loans + debentures) - Cash\nChange in Net Debt = Net Cash Flow +/- Changes in Borrowings",
        examTip: "This is the last part of the cash flow question and carries easy marks. Calculate net debt at start and end, and show the reconciliation. Don't skip it."
      },
      {
        title: "Taxation Section",
        content: "This section records the ACTUAL TAX PAID during the year, not the tax charge in the P&L.\n\nCash OUTFLOW:\n- Corporation tax paid during the year\n\nTo find the actual tax paid:\nUse a Tax Liability T-account:\n  Dr: Tax paid (balancing figure — what we need)\n  Dr: Closing tax liability\n  Cr: Opening tax liability\n  Cr: Tax charge for the year (from P&L)\n\nTax Paid = Opening Tax Liability + Tax Charge for Year - Closing Tax Liability\n\nExample: Opening tax creditor €10,000. Tax charge this year €15,000. Closing tax creditor €12,000.\nTax Paid = €10,000 + €15,000 - €12,000 = €13,000\n\nThe €13,000 is the cash outflow in the Taxation section.",
        keyTerms: ["Corporation tax paid", "Tax liability", "Tax creditor", "Actual tax paid"],
        formula: "Tax Paid = Opening Tax Creditor + Tax Charge - Closing Tax Creditor",
        examTip: "Calculate the ACTUAL cash paid for tax — not the P&L charge. Use the T-account approach if unsure. The closing tax creditor appears as a current liability on the balance sheet."
      },
      {
        title: "Equity Dividends Paid",
        content: "This section records the ACTUAL DIVIDENDS PAID in cash during the year.\n\nCash OUTFLOW:\n- Dividends paid to ordinary shareholders during the year\n- Sometimes preference dividends are included here (or in section 2)\n\nTo find dividends actually paid:\nUse a Dividends Payable T-account:\n  Dr: Dividends paid (balancing figure)\n  Dr: Closing dividends payable\n  Cr: Opening dividends payable (last year's proposed dividend — now paid)\n  Cr: Dividends declared this year (interim + proposed)\n\nDividends Paid = Opening Proposed Dividend + Total Dividends Declared - Closing Proposed Dividend\n\nOften: The previous year's proposed (final) dividend is the amount paid this year.\n\nExample: Opening proposed dividend €8,000. This year: interim €3,000, proposed final €10,000.\nDividends paid = €8,000 + €3,000 = €11,000 (last year's proposed + this year's interim)\nClosing proposed = €10,000 (current liability — not yet paid)",
        keyTerms: ["Dividends paid", "Proposed dividends", "Interim dividends", "Dividends payable"],
        formula: "Dividends Paid = Opening Proposed Dividend + Interim Dividend Declared\nClosing Proposed Dividend = Current year's final dividend (not yet paid)",
        examTip: "The proposed dividend at the END of last year is PAID this year. The proposed dividend at the END of this year is NOT yet paid — it's a current liability. Common source of confusion."
      }
    ]
  },
  {
    topic: "Correction of Errors & Suspense Account",
    icon: "🔍",
    subtopics: [
      {
        title: "Types of Errors",
        content: "There are TWO categories of errors:\n\nA) Errors that DO affect the trial balance (cause it not to balance):\n- These are corrected through the SUSPENSE ACCOUNT\n- Single-sided errors (only one entry was made)\n- Errors in addition/casting of ledger accounts\n- Posting to wrong side of an account\n\nB) Errors that DO NOT affect the trial balance (it still balances, but incorrectly):\n1. Error of Commission — correct class of account, wrong specific account (e.g., posted to J. Smith instead of T. Smith — both are debtors)\n2. Error of Principle — wrong CLASS of account (e.g., asset treated as expense — van repairs instead of van)\n3. Error of Original Entry — wrong amount used for both debit and credit\n4. Compensating Errors — two errors that cancel each other out\n5. Complete Reversal of Entries — correct accounts but debit and credit are swapped\n6. Error of Omission — transaction completely left out of the books",
        keyTerms: ["Error of commission", "Error of principle", "Error of original entry", "Compensating error", "Complete reversal", "Error of omission", "Suspense account"],
        formula: null,
        examTip: "Learn the 6 types of errors that DON'T affect the trial balance — the examiner loves asking you to name the type. Remember: errors of Commission, Principle, Original entry, Compensating, Reversal, Omission — 'CPOCRO'."
      },
      {
        title: "Journal Entries for Corrections",
        content: "Every correction is made through a JOURNAL ENTRY (debit one account, credit another).\n\nFormat:\n  Date | Account to be Debited | Dr | Amount\n       | Account to be Credited | Cr | Amount\n       | (Narration explaining the error)\n\nHow to work out the correction:\n1. Write down what WAS done (the incorrect entry)\n2. Write down what SHOULD have been done\n3. The correction reverses the wrong entry and makes the correct one\n\nExample: Repairs to van €500 debited to Van Account (error of principle).\nWas done: Dr Van €500, Cr Bank €500\nShould be: Dr Van Repairs €500, Cr Bank €500\nCorrection: Dr Van Repairs €500, Cr Van €500\n\nFor reversal errors, you need DOUBLE the amount:\nExample: Cash €300 received from J. Brown was debited to J. Brown and credited to Cash.\nWas done: Dr J. Brown €300, Cr Cash €300 (reversed!)\nShould be: Dr Cash €300, Cr J. Brown €300\nCorrection: Dr Cash €600, Cr J. Brown €600 (double to reverse and correct)",
        keyTerms: ["Journal entry", "Debit", "Credit", "Narration", "Correction entry"],
        formula: null,
        examTip: "Always show the narration (explanation) with your journal entry — marks are given for it. For reversal errors, the correction is DOUBLE the original amount."
      },
      {
        title: "Suspense Account",
        content: "When the trial balance doesn't balance, the difference is placed in a SUSPENSE ACCOUNT to make it balance temporarily.\n\nIf the debit side is greater: Suspense Account has a CREDIT balance (to make it balance)\nIf the credit side is greater: Suspense Account has a DEBIT balance\n\nAs errors are found and corrected, the Suspense Account is gradually cleared.\n\nOnly errors that AFFECT the trial balance go through the Suspense Account. These include:\n- Posting to wrong side (the difference is 2x the amount)\n- Single entry only (omitted one side)\n- Casting errors (wrong addition)\n- Posting wrong amount to one side only\n\nAfter all corrections, the Suspense Account should have a NIL balance.\n\nPresentation: Show the Suspense Account as a T-account.\n  Dr side | Cr side\n  Balance (if debit) | Corrections... | Balance (if credit) | Corrections...",
        keyTerms: ["Suspense account", "Trial balance difference", "Clearing the suspense"],
        formula: "Suspense balance = Difference in trial balance\nAfter corrections, Suspense = Nil",
        examTip: "Draw the Suspense Account as a T-account. Start with the opening balance (the difference). Each correction that affects the trial balance goes through it. It MUST balance to zero at the end."
      },
      {
        title: "Corrected Net Profit",
        content: "After correcting errors, you must calculate the CORRECTED NET PROFIT.\n\nStart with: Original Net Profit (as per the incorrect accounts)\n\nThen adjust for each correction that affects profit:\n- If an expense was UNDERSTATED: Deduct the understatement (profit was too high)\n- If an expense was OVERSTATED: Add back the overstatement (profit was too low)\n- If income was UNDERSTATED: Add the understatement\n- If income was OVERSTATED: Deduct the overstatement\n\nCorrections that don't affect profit:\n- Errors between two Balance Sheet items (e.g., one debtor posted to another debtor)\n- Errors between two expense accounts (net effect on profit is zero if same amount)\n\nFormat:\n  Original Net Profit\n+ Expenses overstated / Income understated\n- Expenses understated / Income overstated\n= Corrected Net Profit",
        keyTerms: ["Corrected profit", "Profit adjustment", "Expense overstatement", "Income understatement"],
        formula: "Corrected Profit = Original Profit +/- Adjustments affecting P&L items",
        examTip: "Go through each correction one by one and ask: 'Does this affect an income or expense item?' If yes, adjust the profit. If it's between two balance sheet items, profit is NOT affected."
      }
    ]
  },
  {
    topic: "Control Accounts",
    icon: "📋",
    subtopics: [
      {
        title: "Debtors Control Account",
        content: "The Debtors Control Account (also called Total Debtors Account or Sales Ledger Control Account) is a summary of ALL individual debtor accounts.\n\nThe balance on the Debtors Control Account should equal the total of all individual debtor balances (the schedule of debtors).\n\nDebtors Control Account (T-Account):\nDEBIT side (increases):\n- Opening balance (debtors at start)\n- Credit sales (from Sales Day Book)\n- Dishonoured cheques (bounced cheques from debtors)\n- Interest charged to debtors\n\nCREDIT side (decreases):\n- Cash/cheques received from debtors\n- Sales returns (from Returns Inward Day Book)\n- Bad debts written off\n- Discounts allowed\n- Contra entry (debtor is also a creditor — set off)\n- Closing balance (debtors at end — balancing figure)",
        keyTerms: ["Debtors control", "Sales ledger control", "Credit sales", "Dishonoured cheques", "Discounts allowed", "Contra"],
        formula: "Closing Debtors = Opening Debtors + Credit Sales + Dishonoured Cheques - Receipts - Returns - Bad Debts - Discounts Allowed - Contra",
        examTip: "Debtors are an ASSET — they normally have a debit balance. Cash sales do NOT go through the debtors control. Only CREDIT sales appear here."
      },
      {
        title: "Creditors Control Account",
        content: "The Creditors Control Account (also called Total Creditors Account or Purchase Ledger Control Account) is a summary of ALL individual creditor accounts.\n\nCreditors Control Account (T-Account):\nDEBIT side (decreases):\n- Cash/cheques paid to creditors\n- Purchase returns (from Returns Outward Day Book)\n- Discounts received\n- Contra entry\n- Closing balance (balancing figure)\n\nCREDIT side (increases):\n- Opening balance (creditors at start)\n- Credit purchases (from Purchases Day Book)\n- Interest charged by creditors\n\nThe closing balance should agree with the total of the schedule of creditors (list of individual creditor balances).",
        keyTerms: ["Creditors control", "Purchase ledger control", "Credit purchases", "Discounts received", "Contra"],
        formula: "Closing Creditors = Opening Creditors + Credit Purchases + Interest - Payments - Returns - Discounts Received - Contra",
        examTip: "Creditors are a LIABILITY — they normally have a credit balance. Only CREDIT purchases go through the control account, not cash purchases."
      },
      {
        title: "Reconciliation with Schedule",
        content: "After preparing the Control Account, you must RECONCILE the balance with the Schedule of Debtors (or Creditors).\n\nIf they don't agree, there are errors in either the Control Account or the individual ledger accounts.\n\nErrors in the CONTROL ACCOUNT: These are errors in the summarised totals. Correct by adjusting the Control Account.\n- Example: Credit sales total incorrectly added\n\nErrors in the INDIVIDUAL LEDGER: These are errors in specific debtor/creditor accounts. Correct by adjusting the Schedule.\n- Example: A payment posted to the wrong debtor's account\n\nReconciliation format:\n  Control Account Balance (after corrections)          €X\n  Schedule of Debtors (after corrections)                €X\n  These should now AGREE                                 ✓\n\nAlternatively:\n  Schedule total (before corrections)                    €X\n  +/- Corrections to individual accounts\n  = Corrected Schedule total                             €X\n  = Corrected Control Account balance                    €X",
        keyTerms: ["Reconciliation", "Schedule of debtors", "Schedule of creditors", "Control account errors", "Ledger errors"],
        formula: null,
        examTip: "Decide for EACH error: does it affect the Control Account (totals/summaries) or the Schedule (individual accounts)? Adjust only the relevant one. They must agree after corrections."
      },
      {
        title: "Contra Entries",
        content: "A contra entry arises when a person is BOTH a debtor and a creditor of the business.\n\nExample: J. Murphy owes us €500 (debtor) and we owe J. Murphy €300 (creditor).\nWe can set off (contra) the €300:\n\nJournal entry:\n  Dr Creditors Control (J. Murphy) €300\n  Cr Debtors Control (J. Murphy) €300\n\nAfter contra:\n- J. Murphy's debtor balance = €200 (€500 - €300)\n- J. Murphy's creditor balance = €0\n\nThe contra reduces BOTH the Debtors Control and Creditors Control by the same amount.\n\nIt's essentially saying: 'Instead of us paying them €300 and them paying us €500, let's just net it off and they pay us €200.'",
        keyTerms: ["Contra entry", "Set off", "Debtor and creditor same person"],
        formula: null,
        examTip: "A contra ALWAYS reduces both debtors and creditors by the SAME amount. It appears on the CREDIT side of Debtors Control and the DEBIT side of Creditors Control."
      }
    ]
  },
  {
    topic: "Incomplete Records",
    icon: "🧩",
    subtopics: [
      {
        title: "Statement of Affairs Method",
        content: "When a business has incomplete records (no proper double-entry bookkeeping), we must reconstruct the accounts.\n\nThe Statement of Affairs is like a mini Balance Sheet at a point in time. We prepare one at the START and END of the period.\n\nCapital = Assets - Liabilities\n\nOpening Capital = Opening Assets - Opening Liabilities\nClosing Capital = Closing Assets - Closing Liabilities\n\nNet Profit = Closing Capital - Opening Capital + Drawings - Capital Introduced\n\nThis gives us the profit figure without a full P&L Account.\n\nExample:\nOpening: Assets €40,000, Liabilities €15,000 → Capital = €25,000\nClosing: Assets €55,000, Liabilities €18,000 → Capital = €37,000\nDrawings during year = €12,000. No capital introduced.\nNet Profit = €37,000 - €25,000 + €12,000 = €24,000",
        keyTerms: ["Statement of affairs", "Incomplete records", "Opening capital", "Closing capital", "Net profit calculation"],
        formula: "Capital = Assets - Liabilities\nNet Profit = Closing Capital - Opening Capital + Drawings - Capital Introduced",
        examTip: "Always prepare opening AND closing Statements of Affairs. Don't forget to add back drawings when calculating profit — drawings reduce capital but are not an expense."
      },
      {
        title: "Total Debtors and Total Creditors Accounts",
        content: "When records are incomplete, we use Total Debtors and Total Creditors accounts to find missing figures.\n\nTotal Debtors Account — used to find Credit Sales or Cash Received:\nDr: Opening debtors + Credit Sales\nCr: Cash received + Discounts allowed + Bad debts + Returns in + Closing debtors\n\nTotal Creditors Account — used to find Credit Purchases or Cash Paid:\nDr: Cash paid + Discounts received + Returns out + Closing creditors\nCr: Opening creditors + Credit Purchases\n\nThe UNKNOWN figure is the balancing figure in the T-account.\n\nExample: Opening debtors €8,000. Cash received €45,000. Bad debts €500. Returns €1,000. Closing debtors €10,000.\nCredit Sales = €45,000 + €500 + €1,000 + €10,000 - €8,000 = €48,500",
        keyTerms: ["Total debtors account", "Total creditors account", "Balancing figure", "Credit sales", "Credit purchases"],
        formula: "Credit Sales = Cash Received + Discounts + Bad Debts + Returns + Closing Debtors - Opening Debtors\nCredit Purchases = Cash Paid + Discounts + Returns + Closing Creditors - Opening Creditors",
        examTip: "Set up the T-account first, fill in ALL the figures you know, and the missing figure is the balancing item. Label clearly which figure you are solving for."
      },
      {
        title: "Mark-Up vs Margin",
        content: "These are used to find cost of sales or sales from incomplete information.\n\nMARK-UP is the profit as a percentage of COST:\n  Mark-up = Profit / Cost x 100\n  e.g., Mark-up of 25% means: Cost = 100, Profit = 25, Sales = 125\n\nMARGIN is the profit as a percentage of SALES:\n  Margin = Profit / Sales x 100\n  e.g., Margin of 25% means: Sales = 100, Profit = 25, Cost = 75\n\nKey relationships:\n- If Mark-up = 1/4 → Margin = 1/5\n- If Mark-up = 1/3 → Margin = 1/4\n- If Mark-up = 1/2 → Margin = 1/3\n- The fraction for margin always has a denominator one MORE than the mark-up\n\nUseful formulas:\n- Sales = Cost + Profit\n- Cost of Sales = Opening Stock + Purchases - Closing Stock\n- If you know sales and margin, you can find cost of sales\n- If you know cost and mark-up, you can find sales",
        keyTerms: ["Mark-up", "Margin", "Gross profit", "Cost of sales", "Selling price"],
        formula: "Mark-up: Sales = Cost x (1 + Mark-up%)\nMargin: Cost = Sales x (1 - Margin%)\nMark-up of 25% = Margin of 20%\nMark-up of 33.3% = Margin of 25%\nMark-up of 50% = Margin of 33.3%",
        examTip: "READ CAREFULLY whether the question says mark-up or margin. Getting them confused will give you a completely wrong answer. Mark-up is on COST, Margin is on SALES."
      },
      {
        title: "Insurance and Private Use Splits",
        content: "In incomplete records, some expenses may be shared between the business and the owner's private use.\n\nInsurance split:\n- If the owner's private insurance is paid from the business account, part is a business expense and part is drawings.\n- Business Insurance → P&L expense\n- Private Insurance → Drawings (reduces capital)\n\nExample: Total insurance paid €3,600. One-third relates to the owner's home.\n- Business insurance = €2,400 (expense in P&L)\n- Private insurance = €1,200 (drawings)\n\nSimilar splits apply to:\n- Electricity/heating (if owner lives above the shop)\n- Motor expenses (business vs private use)\n- Telephone\n\nHow to handle:\n1. Calculate total paid\n2. Split according to the ratio given\n3. Business portion → P&L expense\n4. Private portion → Drawings (add to drawings in the capital calculation)",
        keyTerms: ["Private use", "Business vs personal", "Insurance split", "Drawings", "Apportionment"],
        formula: "Business Expense = Total Paid x Business Proportion\nDrawings = Total Paid x Private Proportion",
        examTip: "Always check if any expense includes a private element. The private portion is DRAWINGS, not an expense. It affects the capital calculation, not the P&L directly."
      },
      {
        title: "Finding Missing Figures Using Ratios",
        content: "In incomplete records, you often need to use mark-up or margin to find missing figures like sales, purchases, cost of sales, or closing stock.\n\nScenario 1: Stock destroyed by fire/flood\n- Use the trading account structure:\n  Opening Stock + Purchases - Closing Stock = Cost of Sales\n  Sales - Cost of Sales = Gross Profit\n- If you know sales and the GP%, calculate GP, then Cost of Sales, then Closing Stock (the stock at date of fire)\n\nScenario 2: Cash stolen\n- Reconstruct total sales (using debtors account)\n- Split into cash and credit sales\n- Prepare a cash summary\n- The difference between expected cash and actual cash = amount stolen\n\nScenario 3: Goods stolen\n- Calculate expected closing stock using the trading account\n- Compare to actual stock count\n- Difference = goods stolen\n\nExample (fire damage):\nOpening stock €20,000. Purchases to date of fire €80,000. Sales to date €120,000. Mark-up 25%.\nCost of Sales = €120,000 / 1.25 = €96,000\nStock destroyed = €20,000 + €80,000 - €96,000 = €4,000",
        keyTerms: ["Stock destroyed", "Cash stolen", "Goods stolen", "Insurance claim", "Reconstructing accounts"],
        formula: "If Mark-up 25%: Cost of Sales = Sales / 1.25\nIf Margin 25%: Cost of Sales = Sales x 0.75\nStock Destroyed = Opening Stock + Purchases - Cost of Sales",
        examTip: "The 'stock destroyed' question is very common. Use the GP% to work backwards from sales to cost of sales, then find the missing stock. The answer is the insurance claim amount."
      }
    ]
  },
  {
    topic: "Depreciation",
    icon: "📉",
    subtopics: [
      {
        title: "Straight Line Method",
        content: "The straight line method charges the SAME amount of depreciation each year.\n\nFormula: Annual Depreciation = (Cost - Residual Value) / Useful Life\n\nOr if given as a percentage: Annual Depreciation = Cost x Rate%\n(This assumes residual value is zero unless stated otherwise)\n\nExample: Machine costs €50,000, residual value €5,000, useful life 10 years.\nAnnual depreciation = (€50,000 - €5,000) / 10 = €4,500 per year\n\nAdvantages:\n- Simple to calculate\n- Same charge each year (easy to budget)\n\nDisadvantages:\n- Doesn't reflect actual usage pattern\n- In reality, assets lose more value in early years",
        keyTerms: ["Straight line depreciation", "Equal instalments", "Cost", "Residual value", "Useful life"],
        formula: "Annual Depreciation = (Cost - Residual Value) / Useful Life\nOr: Annual Depreciation = Cost x Rate%",
        examTip: "If the question says 'depreciate at 20% straight line', it usually means 20% of COST each year (ignoring residual value unless stated). Always check."
      },
      {
        title: "Reducing Balance Method",
        content: "The reducing balance method applies a FIXED PERCENTAGE to the NET BOOK VALUE (NBV) each year. This gives higher depreciation in early years.\n\nYear 1: Depreciation = Cost x Rate%\nYear 2: Depreciation = (Cost - Year 1 Depreciation) x Rate%\nYear 3: Depreciation = (NBV at start of Year 3) x Rate%\n\nExample: Vehicle costs €20,000, depreciation at 25% reducing balance.\nYear 1: €20,000 x 25% = €5,000 → NBV = €15,000\nYear 2: €15,000 x 25% = €3,750 → NBV = €11,250\nYear 3: €11,250 x 25% = €2,813 → NBV = €8,437\n\nAdvantages:\n- Reflects reality — assets lose more value when new\n- Fairer matching of cost to revenue\n\nDisadvantages:\n- NBV never reaches zero\n- More complex calculations",
        keyTerms: ["Reducing balance", "Diminishing balance", "NBV", "Fixed percentage"],
        formula: "Depreciation for Year = NBV at Start of Year x Rate%\nNBV = Previous NBV - Depreciation",
        examTip: "Apply the percentage to the NET BOOK VALUE, not the original cost. The depreciation amount gets smaller each year. Show each year's calculation."
      },
      {
        title: "Revaluation Method",
        content: "The revaluation method is used for assets that are difficult to track individually (e.g., loose tools, small equipment, livestock).\n\nDepreciation = Value at Start of Year - Value at End of Year + Additions During Year\n\nExample: Loose tools valued at €3,000 at start. During the year, new tools costing €800 were bought. At year end, tools valued at €2,500.\nDepreciation = €3,000 - €2,500 + €800 = €1,300\n\nThe €1,300 represents the value of tools used up, lost, or broken during the year.\n\nThis method is common in:\n- Farm accounts (for livestock, small equipment)\n- Manufacturing (for loose tools)\n- Any situation where individual assets are hard to track",
        keyTerms: ["Revaluation method", "Loose tools", "Small equipment", "Value at start", "Value at end"],
        formula: "Depreciation = Opening Value + Additions - Closing Value",
        examTip: "The revaluation method is simple but students often forget to add back purchases during the year. Opening value + Purchases - Closing value = Depreciation."
      },
      {
        title: "Disposal of Assets",
        content: "When a fixed asset is sold or scrapped, we must calculate the profit or loss on disposal.\n\nSteps:\n1. Calculate the NBV at the date of disposal:\n   NBV = Cost - Accumulated Depreciation (to date of disposal)\n2. Compare NBV to Proceeds (sale price):\n   - If Proceeds > NBV → Profit on Disposal\n   - If Proceeds < NBV → Loss on Disposal\n   - If Proceeds = NBV → No profit or loss\n\nLedger entries:\n1. Remove the asset at COST: Cr Asset Account, Dr Disposal Account\n2. Remove accumulated depreciation: Dr Accumulated Depreciation, Cr Disposal Account\n3. Record proceeds: Dr Bank, Cr Disposal Account\n4. Transfer profit/loss: Balance on Disposal Account → P&L\n\nExample: Machine cost €30,000, accumulated depreciation €22,000, sold for €5,000.\nNBV = €30,000 - €22,000 = €8,000\nLoss on disposal = €8,000 - €5,000 = €3,000 (expense in P&L)",
        keyTerms: ["Disposal", "Profit on disposal", "Loss on disposal", "NBV at disposal", "Proceeds"],
        formula: "NBV = Cost - Accumulated Depreciation\nProfit/Loss = Proceeds - NBV",
        examTip: "Always show the Disposal Account as a T-account in the exam. The examiner wants to see Cost, Accumulated Depreciation, Proceeds, and the balancing Profit or Loss. If an asset is scrapped with no proceeds, the full NBV is a loss."
      },
      {
        title: "Revaluation of Assets",
        content: "A revaluation occurs when a fixed asset's value is formally changed to reflect its current market value (usually upwards for land/buildings).\n\nUpward Revaluation:\n- Increase the asset's value on the Balance Sheet\n- Create a REVALUATION RESERVE (capital reserve — non-distributable)\n- Future depreciation is based on the NEW revalued amount\n\nExample: Building originally cost €200,000, accumulated depreciation €40,000 (NBV €160,000). Revalued to €300,000.\n- Remove old cost and depreciation\n- Show building at new value: €300,000\n- Revaluation Reserve = €300,000 - €160,000 = €140,000\n- Future depreciation based on €300,000 and remaining useful life\n\nDownward Revaluation:\n- Decrease the asset value\n- The loss goes to the P&L (expense) or reduces an existing revaluation reserve\n\nImportant: The revaluation reserve is a CAPITAL reserve — it cannot be used for dividends.",
        keyTerms: ["Revaluation", "Revaluation reserve", "Capital reserve", "Upward revaluation", "Depreciation on revalued amount"],
        formula: "Revaluation Reserve = New Value - Old NBV\nNew Annual Depreciation = New Value / Remaining Useful Life",
        examTip: "After revaluation, depreciation is calculated on the NEW value over the REMAINING useful life. Don't use the old cost or the original life. The revaluation reserve is non-distributable."
      }
    ]
  },
  {
    topic: "Tabular Statements",
    icon: "📊",
    subtopics: [
      {
        title: "Analysed Cash Book (Tabular Format)",
        content: "A tabular statement presents financial information in a columnar (table) format, often starting from a trial balance or cash book and applying adjustments.\n\nThe Analysed Cash Book format typically has:\n- Columns for each item: Sales, Purchases, Stock, Debtors, Creditors, Bank, Fixed Assets, Capital, Expenses\n- Rows for each transaction or adjustment\n- Opening balances on the first row\n- Adjustments applied row by row\n- Closing balances on the last row (totals)\n\nEach row must maintain the accounting equation:\nAssets = Liabilities + Capital\nor\nEvery debit has a corresponding credit\n\nThe tabular statement is essentially a spreadsheet version of double-entry bookkeeping — each transaction affects at least two columns.",
        keyTerms: ["Tabular statement", "Analysed cash book", "Columnar format", "Accounting equation"],
        formula: "Assets = Liabilities + Capital\nEvery Dr entry has a corresponding Cr entry",
        examTip: "Keep columns neat and aligned. Use + and - signs clearly. After each adjustment, mentally check: does the accounting equation still hold? Total assets must equal total liabilities + capital."
      },
      {
        title: "Common Adjustments in Tabular Statements",
        content: "The following adjustments are commonly tested in tabular statement questions:\n\n1. DEPRECIATION:\n- Reduce Fixed Assets column (credit)\n- Reduce Capital/Profit column (debit — it's an expense)\n\n2. REVALUATION OF ASSET:\n- Adjust Fixed Assets to new value\n- Create Revaluation Reserve (if upward) or reduce profit (if downward)\n\n3. ACQUISITION OF ASSET:\n- Increase Fixed Assets column\n- Decrease Bank column (or increase Creditors if on credit)\n\n4. BAD DEBTS & PROVISION:\n- Reduce Debtors column\n- Reduce Capital/Profit column\n\n5. ACCRUALS:\n- Increase Creditors/Accruals column\n- Reduce Capital/Profit column\n\n6. PREPAYMENTS:\n- Create Prepayments column (current asset)\n- Increase Capital/Profit column\n\n7. CLOSING STOCK:\n- Add Stock column as current asset\n- Increase Capital/Profit column (reduces cost of sales)\n\n8. SETTLEMENT DISCOUNT:\n- Reduce Debtors (discount allowed) or Creditors (discount received)\n- Adjust Capital/Profit accordingly",
        keyTerms: ["Depreciation adjustment", "Revaluation", "Acquisition", "Bad debts provision", "Accruals", "Prepayments", "Settlement discount"],
        formula: null,
        examTip: "For each adjustment, ask: which TWO columns are affected? One goes up, one goes down (or both go the same way if one is an asset and one is a liability). Always check your row balances."
      },
      {
        title: "Completing the Tabular Statement",
        content: "Step-by-step approach:\n\n1. Write out ALL column headings first (from the question)\n2. Enter opening balances on the first row\n3. Check: do the opening balances satisfy Assets = Liabilities + Capital?\n4. Apply each adjustment ONE ROW AT A TIME\n5. For each adjustment, identify the TWO (or more) columns affected\n6. Enter + or - in the appropriate columns\n7. After all adjustments, TOTAL each column\n8. Check: do the closing totals satisfy Assets = Liabilities + Capital?\n\nPresentation:\n- Use a ruler for neat columns\n- Label each adjustment row clearly\n- Show a 'Balance' or 'Total' row at the end\n- Some students find it helpful to tick off each adjustment as they complete it\n\nThe final row gives you the closing Balance Sheet figures directly.",
        keyTerms: ["Opening balances", "Closing balances", "Column totals", "Accounting equation check"],
        formula: "Final check: Total Assets columns = Total Liabilities columns + Capital column",
        examTip: "The tabular statement is a presentation question — neatness matters. Use a pencil first if unsure. The accounting equation MUST hold on every row and at the final totals."
      }
    ]
  },
  {
    topic: "Marginal Costing",
    icon: "📈",
    subtopics: [
      {
        title: "Marginal Costing Basics",
        content: "Marginal costing separates costs into VARIABLE costs (change with output) and FIXED costs (stay the same regardless of output).\n\nVariable costs: materials, direct labour, variable overheads (e.g., commission)\nFixed costs: rent, insurance, salaries, depreciation\n\nKey concept — CONTRIBUTION:\nContribution = Selling Price - Variable Cost per Unit\n\nContribution is the amount each unit sold 'contributes' towards paying off fixed costs and making a profit.\n\nTotal Contribution = Contribution per Unit x Number of Units Sold\n\nProfit = Total Contribution - Fixed Costs\n\nIf Total Contribution > Fixed Costs → Profit\nIf Total Contribution < Fixed Costs → Loss\nIf Total Contribution = Fixed Costs → Break Even",
        keyTerms: ["Marginal costing", "Variable cost", "Fixed cost", "Contribution", "Selling price"],
        formula: "Contribution per Unit = Selling Price - Variable Cost per Unit\nTotal Contribution = Contribution per Unit x Units Sold\nProfit = Total Contribution - Total Fixed Costs",
        examTip: "Always calculate contribution per unit first — it's the foundation of every marginal costing calculation. If the question gives total variable costs, divide by units to get per unit."
      },
      {
        title: "Break-Even Point (BEP)",
        content: "The Break-Even Point is the level of sales at which the business makes NEITHER a profit NOR a loss. Total revenue equals total costs.\n\nBEP in Units:\nBEP (units) = Total Fixed Costs / Contribution per Unit\n\nBEP in Revenue (€):\nBEP (€) = Total Fixed Costs / C/S Ratio\nWhere C/S Ratio (Contribution to Sales ratio) = Contribution per Unit / Selling Price\n\nOR: BEP (€) = BEP (units) x Selling Price\n\nExample: Selling price €20, variable cost €12, fixed costs €40,000.\nContribution = €20 - €12 = €8\nBEP (units) = €40,000 / €8 = 5,000 units\nBEP (€) = 5,000 x €20 = €100,000\n\nC/S Ratio = €8 / €20 = 0.4 or 40%\nBEP (€) = €40,000 / 0.4 = €100,000 ✓",
        keyTerms: ["Break-even point", "BEP", "C/S ratio", "Contribution to sales ratio", "Neither profit nor loss"],
        formula: "BEP (units) = Fixed Costs / Contribution per Unit\nBEP (€) = Fixed Costs / C/S Ratio\nC/S Ratio = Contribution per Unit / Selling Price",
        examTip: "BEP in units is the most commonly asked. Always round UP to the next whole unit (you can't sell half a unit). Show the formula and working clearly."
      },
      {
        title: "Margin of Safety",
        content: "The Margin of Safety is the difference between ACTUAL (or budgeted) sales and the break-even sales. It shows how much sales can drop before the business starts making a loss.\n\nMargin of Safety (units) = Actual Sales (units) - BEP (units)\nMargin of Safety (€) = Actual Sales (€) - BEP (€)\nMargin of Safety (%) = Margin of Safety (units) / Actual Sales (units) x 100\n\nExample: Actual sales = 8,000 units. BEP = 5,000 units.\nMargin of Safety = 3,000 units\nMargin of Safety % = 3,000 / 8,000 x 100 = 37.5%\n\nThis means sales can fall by 37.5% before the company starts losing money.\n\nA high margin of safety is good — it means the business is comfortably above break-even.\nA low margin of safety is risky — a small drop in sales could cause a loss.",
        keyTerms: ["Margin of safety", "Actual sales", "Budgeted sales", "Risk"],
        formula: "Margin of Safety = Actual Sales - BEP Sales\nMargin of Safety % = (Actual Sales - BEP) / Actual Sales x 100",
        examTip: "The margin of safety can be expressed in units, euro, or as a percentage. Give whichever the question asks for. If not specified, give units AND percentage."
      },
      {
        title: "Make or Buy Decisions",
        content: "A make-or-buy decision is whether it's cheaper to manufacture a product in-house or buy it from an external supplier.\n\nKey principle: Compare the RELEVANT COSTS only.\n\nRelevant costs of making:\n- Variable manufacturing costs (materials, labour, variable overheads)\n- Any additional fixed costs specifically caused by making\n\nIrrelevant: Existing fixed costs (they will be incurred anyway)\n\nDecision rule:\n- If variable cost to make < buy price → MAKE\n- If variable cost to make > buy price → BUY\n- If equal, consider qualitative factors (quality, reliability, control)\n\nBut watch for:\n- Spare capacity: If the factory has spare capacity, fixed costs are sunk → compare variable cost to buy price\n- Opportunity cost: If making uses capacity that could be used for something else, include the contribution lost from that alternative\n\nExample: Variable cost to make = €8. Buy price = €10. Fixed costs allocated = €4.\nDon't be fooled by total cost to make (€12) vs buy (€10). The fixed costs exist anyway.\nRelevant comparison: €8 (make) vs €10 (buy) → MAKE and save €2 per unit.",
        keyTerms: ["Make or buy", "Relevant costs", "Opportunity cost", "Spare capacity", "Sunk cost"],
        formula: "Relevant Cost to Make = Variable Costs + Additional Fixed Costs (if any)\nSaving per Unit = Buy Price - Variable Cost to Make",
        examTip: "Ignore allocated fixed costs — they exist anyway. Only consider variable costs and any EXTRA fixed costs. If there's an opportunity cost (lost contribution from alternative use), add it to the make cost."
      },
      {
        title: "Special Orders and Profit-Volume Analysis",
        content: "SPECIAL ORDERS:\nA special order is a one-off order at a price below the normal selling price.\n\nAccept if: The special price > Variable cost per unit (i.e., it makes a positive contribution)\nReject if: The special price < Variable cost per unit\n\nConditions: The business must have spare capacity and the order must not affect normal sales.\n\nExample: Normal price €25, variable cost €15. Special order at €18.\nContribution = €18 - €15 = €3 per unit → ACCEPT (better off by €3 per unit)\n\nPROFIT-VOLUME (P/V) CHART:\nA P/V chart plots profit/loss against sales volume.\n- X-axis: Sales volume (units or €)\n- Y-axis: Profit (+) or Loss (-)\n- The line starts at -Fixed Costs (zero sales = full loss of fixed costs)\n- It crosses the x-axis at the BEP\n- Slope of the line = Contribution per unit (or C/S ratio)\n\nTarget Profit:\nUnits needed = (Fixed Costs + Target Profit) / Contribution per Unit",
        keyTerms: ["Special order", "One-off order", "Accept or reject", "P/V chart", "Target profit"],
        formula: "Special Order: Accept if Price > Variable Cost\nTarget Profit Units = (Fixed Costs + Target Profit) / Contribution per Unit\nTarget Profit Revenue = (Fixed Costs + Target Profit) / C/S Ratio",
        examTip: "For special orders, ONLY compare the special price to variable cost — ignore fixed costs and normal selling price. For target profit, just add the target profit to fixed costs in the BEP formula."
      }
    ]
  },
  {
    topic: "Budgeting",
    icon: "🗓️",
    subtopics: [
      {
        title: "Cash Budget",
        content: "A cash budget forecasts cash RECEIPTS and PAYMENTS over a future period (usually month by month).\n\nFormat:\n                          Month 1   Month 2   Month 3\nOPENING BALANCE             X         X         X\n\nRECEIPTS:\n  Cash sales                X         X         X\n  Receipts from debtors     X         X         X\n  Other income              X         X         X\n  Total Receipts            X         X         X\n\nPAYMENTS:\n  Cash purchases            X         X         X\n  Payments to creditors     X         X         X\n  Wages                     X         X         X\n  Overheads                 X         X         X\n  Capital expenditure       X         X         X\n  Total Payments            X         X         X\n\nNet Cash Flow               X         X         X\n(Receipts - Payments)\n\nCLOSING BALANCE             X         X         X\n(Opening + Net Cash Flow)\n\nKey: The closing balance of one month becomes the opening balance of the next month.\n\nCredit terms matter: If debtors pay after 2 months, this month's sales appear as receipts in 2 months' time.",
        keyTerms: ["Cash budget", "Receipts", "Payments", "Opening balance", "Closing balance", "Net cash flow", "Credit terms"],
        formula: "Net Cash Flow = Total Receipts - Total Payments\nClosing Balance = Opening Balance + Net Cash Flow",
        examTip: "Watch the TIMING of receipts and payments. If customers pay 1 month late, January sales are received in February. If suppliers are paid 2 months late, January purchases are paid in March. This is where most marks are lost."
      },
      {
        title: "Production Budget",
        content: "A production budget calculates how many units need to be PRODUCED (not just sold).\n\nFormula:\n  Budgeted Sales (units)\n+ Closing Stock Required\n- Opening Stock Available\n= Units to be Produced\n\nExample: Expected sales = 10,000 units. Opening stock = 2,000 units. Company wants closing stock of 3,000 units.\nProduction needed = 10,000 + 3,000 - 2,000 = 11,000 units\n\nFrom the production budget, you can then calculate:\n- Materials budget: Materials per unit x units to produce (adjusted for opening/closing materials stock)\n- Labour budget: Hours per unit x units to produce x rate per hour\n- Overhead budget: Variable overhead per unit x units + fixed overheads",
        keyTerms: ["Production budget", "Budgeted sales", "Closing stock", "Opening stock", "Materials budget", "Labour budget"],
        formula: "Production = Sales + Closing Stock - Opening Stock\nMaterials Needed = Production x Material per Unit + Closing Material Stock - Opening Material Stock",
        examTip: "Remember: you produce MORE than you sell if you want to build up stock, LESS than you sell if you want to run stock down. Apply the same logic to raw materials."
      },
      {
        title: "Flexible Budget and Variance Analysis",
        content: "A FLEXIBLE BUDGET adjusts the original (static) budget to reflect the ACTUAL level of activity.\n\nWhy? It's unfair to compare a budget based on 10,000 units with actual results of 12,000 units. The flexible budget adjusts variable costs for the actual volume.\n\nFlexible Budget:\n- Fixed costs: STAY THE SAME as the original budget (they don't change with volume)\n- Variable costs: Adjusted to actual volume (original variable cost per unit x actual units)\n\nVARIANCE ANALYSIS:\nA variance is the difference between budgeted and actual figures.\n\nFavourable (F): Actual is better than budget (higher revenue or lower cost)\nAdverse/Unfavourable (A): Actual is worse than budget (lower revenue or higher cost)\n\nTypes of variances:\n- Sales variance: Actual revenue vs budgeted revenue\n- Material price variance: (Standard price - Actual price) x Actual quantity\n- Material usage variance: (Standard quantity - Actual quantity) x Standard price\n- Labour rate variance: (Standard rate - Actual rate) x Actual hours\n- Labour efficiency variance: (Standard hours - Actual hours) x Standard rate\n- Fixed overhead variance: Budgeted fixed overheads - Actual fixed overheads",
        keyTerms: ["Flexible budget", "Static budget", "Variance", "Favourable", "Adverse", "Material variance", "Labour variance"],
        formula: "Flexible Budget Variable Cost = Variable Cost per Unit x Actual Units\nVariance = Budget - Actual (for costs: positive = favourable)\nMaterial Price Variance = (Std Price - Actual Price) x Actual Qty\nMaterial Usage Variance = (Std Qty - Actual Qty) x Std Price",
        examTip: "Always flex the budget to the ACTUAL activity level before calculating variances. Label each variance as Favourable (F) or Adverse (A). The examiner gives marks for the labels."
      }
    ]
  },
  {
    topic: "Interpretation of Accounts (Ratios)",
    icon: "🔢",
    subtopics: [
      {
        title: "Profitability Ratios",
        content: "These ratios measure how profitable the business is.\n\n1. GROSS PROFIT PERCENTAGE (GP%)\n= (Gross Profit / Sales) x 100\nShows the profit from trading before expenses. A high GP% means good mark-up on goods.\n\n2. NET PROFIT PERCENTAGE (NP%)\n= (Net Profit / Sales) x 100\nShows the overall profit after all expenses. A falling NP% with stable GP% suggests expenses are increasing.\n\n3. RETURN ON CAPITAL EMPLOYED (ROCE)\n= (Net Profit / Capital Employed) x 100\nCapital Employed = Total Assets - Current Liabilities\nor = Share Capital + Reserves + Long-term Liabilities\n\nROCE is the MOST IMPORTANT ratio — it measures how efficiently the business uses its capital to generate profit. Compare to bank interest rates: if ROCE < bank rate, the money would be better in the bank.\n\nInterpretation:\n- Compare to previous years (trend)\n- Compare to industry average\n- Compare to alternative investments",
        keyTerms: ["Gross profit %", "Net profit %", "ROCE", "Return on capital employed", "Capital employed", "Profitability"],
        formula: "GP% = (Gross Profit / Sales) x 100\nNP% = (Net Profit / Sales) x 100\nROCE = (Net Profit / Capital Employed) x 100\nCapital Employed = Total Assets - Current Liabilities",
        examTip: "ALWAYS show the formula, then substitute the figures, then give the answer. Then INTERPRET — state whether the ratio is good/bad and WHY. Just calculating without interpreting loses marks."
      },
      {
        title: "Liquidity Ratios",
        content: "These ratios measure the business's ability to pay its short-term debts.\n\n1. CURRENT RATIO\n= Current Assets / Current Liabilities\nIdeal: 2:1 (€2 of current assets for every €1 of current liabilities)\nToo high? Money tied up unproductively\nToo low? May struggle to pay short-term debts\n\n2. ACID TEST RATIO (Quick Ratio)\n= (Current Assets - Stock) / Current Liabilities\nIdeal: 1:1\nThis is a stricter test — it removes stock because stock is the LEAST liquid current asset (hardest to convert to cash quickly).\n\nInterpretation:\n- A current ratio below 1:1 means current liabilities exceed current assets — danger of insolvency\n- An acid test below 0.5:1 is a serious concern\n- Supermarkets often operate with low ratios (fast stock turnover, cash sales, slow payment to suppliers) — context matters",
        keyTerms: ["Current ratio", "Acid test", "Quick ratio", "Liquidity", "Working capital", "Insolvency"],
        formula: "Current Ratio = Current Assets / Current Liabilities\nAcid Test = (Current Assets - Stock) / Current Liabilities",
        examTip: "Express ratios as X:1 (e.g., 2.5:1). If the current ratio is good but the acid test is poor, it means too much capital is tied up in stock. The examiner loves this comparison."
      },
      {
        title: "Efficiency Ratios",
        content: "These ratios measure how efficiently the business manages its assets.\n\n1. STOCK TURNOVER\n= Cost of Sales / Average Stock\nOR = Cost of Sales / Closing Stock (if average not available)\nAverage Stock = (Opening Stock + Closing Stock) / 2\n\nResult: number of times stock is sold and replaced per year\nHigher = better (stock is moving faster)\nCan also express in DAYS: 365 / Stock Turnover\n\n2. DEBTORS' COLLECTION PERIOD\n= (Debtors / Credit Sales) x 365\nResult: average number of days debtors take to pay\nLower = better (collecting cash faster)\nCompare to the credit terms offered\n\n3. CREDITORS' PAYMENT PERIOD\n= (Creditors / Credit Purchases) x 365\nResult: average number of days taken to pay suppliers\nShould be within agreed credit terms\nToo long? Risk losing supplier goodwill\nToo short? Not using free credit efficiently\n\nIdeal: Creditors' period > Debtors' period (pay suppliers after collecting from customers)",
        keyTerms: ["Stock turnover", "Debtors collection period", "Creditors payment period", "Average stock", "Efficiency"],
        formula: "Stock Turnover = Cost of Sales / Average Stock\nStock Days = 365 / Stock Turnover\nDebtors Period = (Debtors / Credit Sales) x 365\nCreditors Period = (Creditors / Credit Purchases) x 365",
        examTip: "If the question doesn't specify credit sales, use total sales for the debtors period. If stock turnover seems very high or low, double-check your figures. Always interpret: what does the number MEAN for the business?"
      },
      {
        title: "Investment Ratios",
        content: "These ratios are relevant for COMPANY accounts and are used by investors.\n\n1. EARNINGS PER SHARE (EPS)\n= Net Profit After Tax and Preference Dividends / Number of Ordinary Shares\nShows the profit earned per ordinary share. Higher = better for shareholders.\n\n2. PRICE/EARNINGS RATIO (P/E)\n= Market Price per Share / EPS\nShows how many years of current earnings investors are willing to pay for.\nHigh P/E = investors expect growth. Low P/E = low growth expectations or undervalued.\n\n3. DIVIDEND YIELD\n= (Dividend per Share / Market Price per Share) x 100\nShows the cash return as a % of the share price. Important for income-seeking investors.\n\n4. DIVIDEND COVER\n= EPS / Dividend per Share\nOr = Net Profit After Tax / Total Ordinary Dividends\nShows how many times the dividend is covered by earnings.\nHigher = more sustainable dividend. If < 1, the company is paying dividends from reserves — unsustainable.\n\n5. INTEREST COVER\n= Profit Before Interest and Tax / Interest Charges\nShows ability to pay interest on borrowings. Higher = safer for lenders. Below 3 is concerning.",
        keyTerms: ["EPS", "P/E ratio", "Dividend yield", "Dividend cover", "Interest cover", "Investment ratios"],
        formula: "EPS = (Net Profit After Tax - Pref Dividends) / No. of Ordinary Shares\nP/E Ratio = Market Price / EPS\nDividend Yield = (Dividend per Share / Market Price) x 100\nDividend Cover = EPS / Dividend per Share\nInterest Cover = PBIT / Interest",
        examTip: "For EPS, deduct preference dividends FIRST — EPS is for ordinary shareholders only. The P/E ratio tells you how the MARKET values the company. A dividend cover below 1 is a red flag — mention this."
      },
      {
        title: "Writing Ratio Analysis Reports",
        content: "In the exam, you often have to INTERPRET the ratios and write a report or commentary.\n\nStructure your answer:\n1. State the ratio name and formula\n2. Calculate the ratio (show workings)\n3. Compare to:\n   - Previous year (trend: improving or declining?)\n   - Industry average (above or below?)\n   - Accepted benchmarks (current ratio 2:1, acid test 1:1)\n4. Explain what the ratio MEANS in plain English\n5. Suggest reasons for changes\n6. Recommend actions if appropriate\n\nExample comment:\n'The current ratio has fallen from 2.5:1 to 1.8:1. While still above the benchmark of 2:1, the declining trend suggests the company's ability to meet short-term obligations is weakening. This may be due to the significant increase in creditors. The company should consider reducing stock levels or collecting debts more quickly.'\n\nKey: Don't just calculate — INTERPRET. The marks are in the analysis.",
        keyTerms: ["Ratio analysis", "Interpretation", "Trend analysis", "Industry comparison", "Report writing"],
        formula: null,
        examTip: "For full marks: Calculate + Compare + Interpret + Recommend. Many students calculate correctly but lose marks by not explaining what the ratio means. Use phrases like 'This suggests...', 'This may be due to...', 'The company should consider...'."
      }
    ]
  },
  {
    topic: "Service Firm Accounts",
    icon: "💼",
    subtopics: [
      {
        title: "Service Firm Overview",
        content: "A service firm sells services rather than goods (e.g., solicitors, accountants, architects, consultants, doctors).\n\nKey differences from trading firms:\n- NO Trading Account (no goods bought or sold)\n- NO stock (or minimal stock of supplies)\n- Main income is FEES or PROFESSIONAL INCOME\n- Main expenses are staff costs, rent, and professional expenses\n- WORK IN PROGRESS (WIP) may exist — services started but not yet billed\n\nProfit & Loss Account format:\n  Fee Income (Revenue)\n  Less: Expenses\n    Salaries\n    Rent & Rates\n    Insurance\n    Professional Indemnity Insurance\n    Depreciation\n    Bad debts\n    Other expenses\n  = Net Profit\n\nThe Balance Sheet is similar to a sole trader, with WIP as a current asset.",
        keyTerms: ["Service firm", "Fee income", "Professional income", "Work in progress", "No trading account"],
        formula: "Net Profit = Fee Income - Total Expenses",
        examTip: "There is NO Trading Account and NO Cost of Sales for a service firm. Don't create one. The P&L starts with Fee Income directly. WIP is a current asset, like stock."
      },
      {
        title: "Fee Income and Work in Progress",
        content: "FEE INCOME:\nFee income is the revenue earned from providing services. It must be calculated on an ACCRUALS basis:\n\n  Fees received (cash basis — from trial balance)\n+ Closing fee debtors (fees earned but not yet received)\n- Opening fee debtors\n+ Opening fees received in advance (now earned)\n- Closing fees received in advance (not yet earned)\n= Fee income for the year (accruals basis)\n\nWORK IN PROGRESS (WIP):\nWIP represents work done for clients that has NOT yet been billed at the year end.\n\nWIP is valued at the cost of work done so far (staff time x cost rates, plus direct expenses).\n\nIn the P&L: WIP is treated like closing stock — it reduces expenses (or increases income)\nOn the Balance Sheet: WIP is a CURRENT ASSET\n\nAdjustment:\n  Increase in WIP (closing > opening) → reduces expenses / increases profit\n  Decrease in WIP (closing < opening) → increases expenses / reduces profit",
        keyTerms: ["Fee income", "Fee debtors", "Fees in advance", "Work in progress", "WIP valuation", "Accruals basis"],
        formula: "Fee Income = Cash Received + Closing Debtors - Opening Debtors - Closing Advance + Opening Advance\nWIP Adjustment = Closing WIP - Opening WIP (increase = add to income)",
        examTip: "Treat fee debtors like normal debtors and fees in advance like prepaid income (creditors). WIP works just like closing stock — if it increases, profit increases."
      },
      {
        title: "Professional Expenses",
        content: "Service firms have some unique expenses:\n\n1. Professional Indemnity Insurance — covers the firm against claims of negligence. Often a significant expense.\n\n2. Practising Certificates / Subscriptions — annual fees to professional bodies (e.g., Law Society, CPA Ireland)\n\n3. CPD (Continuing Professional Development) — training costs to maintain qualifications\n\n4. Library / Reference Materials — legal or professional publications\n\n5. Client Account — solicitors and some professionals hold client funds in a separate bank account. This is NOT the firm's money — it should be shown separately and not mixed with the firm's income.\n\n6. Staff costs — often the biggest expense (solicitors, accountants are labour-intensive businesses)\n\nAll normal adjustments apply: accruals, prepayments, depreciation, bad debts on fees owed, provision for doubtful fees.",
        keyTerms: ["Professional indemnity", "Practising certificate", "Client account", "CPD", "Professional subscriptions"],
        formula: null,
        examTip: "Client funds held in a separate client account are NOT the firm's assets — they belong to the clients. Do not include client account balances in the firm's bank balance or income."
      }
    ]
  },
  {
    topic: "Accounting Concepts & Principles",
    icon: "📜",
    subtopics: [
      {
        title: "Going Concern Concept",
        content: "The going concern concept assumes the business will CONTINUE to operate for the foreseeable future. It will NOT be forced to close down or liquidate its assets.\n\nImplication: Assets are valued at their COST (less depreciation), not at what they could be sold for if the business closed.\n\nIf the going concern assumption does NOT apply (business is closing), assets must be valued at their Net Realisable Value (NRV) — usually much less than their book value.\n\nExample: A factory machine has an NBV of €80,000. If the business is a going concern, it stays at €80,000 on the balance sheet. If the business is closing, it might only sell for €20,000.",
        keyTerms: ["Going concern", "Foreseeable future", "Continue trading", "Liquidation value"],
        formula: null,
        examTip: "If asked 'which accounting concept applies?', going concern justifies valuing assets at cost less depreciation rather than sale value. It underpins the whole set of accounts."
      },
      {
        title: "Accruals (Matching) Concept",
        content: "The accruals concept (also called the matching concept) states that income and expenses should be MATCHED to the period in which they are EARNED or INCURRED, not when cash is received or paid.\n\nThis means:\n- Record revenue when it is EARNED (not when cash is received)\n- Record expenses when they are INCURRED (not when cash is paid)\n- Match expenses against the revenue they help to generate\n\nThis is WHY we have accruals and prepayments:\n- Accrual: expense incurred but not yet paid → still include it\n- Prepayment: expense paid but relates to next period → exclude it\n\nExample: Rent for the year is €12,000. Only €9,000 has been paid by 31 December. The other €3,000 is still owed.\nUnder the accruals concept: Rent expense = €12,000 (the full year's charge)\nAccrual = €3,000 (current liability)",
        keyTerms: ["Accruals concept", "Matching concept", "Income earned", "Expenses incurred", "Period"],
        formula: null,
        examTip: "The accruals concept is the reason we adjust for accruals, prepayments, depreciation, closing stock, and bad debts. If an exam question asks you to name the concept behind an adjustment, this is usually the answer."
      },
      {
        title: "Prudence Concept",
        content: "The prudence concept (conservatism) states:\n- Do NOT recognise profits until they are REALISED (actually earned)\n- DO recognise losses as soon as they are ANTICIPATED (even if not yet confirmed)\n\nIn practice:\n- Stock valued at the LOWER of cost or NRV (don't overstate assets)\n- Provision for bad debts (recognise expected losses)\n- Depreciation (recognise the declining value of assets)\n- Don't record expected profits from unsigned contracts\n\nPrudence ensures the accounts do NOT overstate the financial position. It protects users of accounts from over-optimistic reporting.\n\nExample: A company holds stock that cost €10,000 but can now only be sold for €7,000. Under prudence, the stock is valued at €7,000 (the lower amount). The €3,000 loss is recognised immediately.",
        keyTerms: ["Prudence", "Conservatism", "Anticipated losses", "Realised profits", "Lower of cost or NRV"],
        formula: null,
        examTip: "If the question involves stock valuation, bad debt provision, or any situation where you're choosing a lower value to be 'safe', the concept is prudence. It's the most commonly tested concept."
      },
      {
        title: "Consistency Concept",
        content: "The consistency concept states that once a business chooses an accounting method, it should CONTINUE to use the same method from year to year.\n\nThis allows:\n- Meaningful comparison of results between years\n- Users of accounts to rely on consistent treatment\n\nExamples:\n- If you choose straight-line depreciation, use it consistently (don't switch to reducing balance without good reason)\n- If you value stock using FIFO, continue using FIFO\n- If you capitalise spending over €500, apply the same threshold each year\n\nChanges in accounting policy ARE allowed, but:\n- There must be a good reason\n- The change must be disclosed in the notes to the accounts\n- The effect of the change must be quantified\n\nNote: Consistency does NOT mean you can't use different methods for different assets (e.g., straight line for buildings, reducing balance for vehicles). It means each asset class should be treated consistently over time.",
        keyTerms: ["Consistency", "Accounting policy", "Comparability", "Same method each year"],
        formula: null,
        examTip: "If a company changes its depreciation method or stock valuation method, mention consistency. The key phrase is 'to allow meaningful comparison between years'."
      },
      {
        title: "Other Key Concepts",
        content: "MATERIALITY:\nOnly items that are significant enough to influence decisions need strict accounting treatment. Immaterial items can be simplified.\nExample: A €5 stapler can be expensed immediately rather than depreciated over 5 years — it's immaterial.\n\nDUAL ASPECT (Duality):\nEvery transaction has TWO effects — a debit and a credit. This is the foundation of double-entry bookkeeping.\nExample: Buy goods for cash → Dr Purchases, Cr Bank.\n\nMONEY MEASUREMENT:\nOnly items that can be measured in monetary terms are recorded in the accounts. Employee skill, brand reputation, customer loyalty cannot be measured in money, so they are excluded.\n\nREALISATION:\nRevenue is only recognised when it is EARNED (goods delivered or services provided), not when the order is received or the contract signed.\n\nENTITY CONCEPT (Separate Entity):\nThe business is treated as a separate entity from its owner(s). Personal transactions of the owner are NOT included in the business accounts (they are drawings).\nExample: Owner pays home electricity from business account → Drawings, not an expense.",
        keyTerms: ["Materiality", "Dual aspect", "Duality", "Money measurement", "Realisation", "Entity concept", "Separate entity"],
        formula: null,
        examTip: "Learn ALL the concepts and be able to give an example for each. Short-answer questions on concepts appear regularly. Entity concept explains why drawings are NOT an expense."
      }
    ]
  }
];

/* LC Accounting — Interactive Financial Statement Templates */

const AccTemplates = {

  renderTemplate(type, questionData) {
    switch(type) {
      case 'trading_pl': return this.tradingPL(questionData);
      case 'balance_sheet': return this.balanceSheet(questionData);
      case 't_account': return this.tAccount(questionData);
      case 'cash_budget': return this.cashBudget(questionData);
      case 'club_ip': return this.clubIP(questionData);
      case 'ratios': return this.ratios(questionData);
      default: return null;
    }
  },

  detectTemplateType(questionText) {
    const q = questionText.toLowerCase();
    if (/trading.*profit.*loss|p\s*&\s*l\s*account|profit\s*(?:and|&)\s*loss/i.test(q)) return 'trading_pl';
    if (/balance\s*sheet/i.test(q)) return 'balance_sheet';
    if (/t[\s-]*account|ledger\s*account|debit.*credit/i.test(q)) return 't_account';
    if (/cash\s*budget/i.test(q)) return 'cash_budget';
    if (/income\s*(?:and|&)\s*expenditure|accumulated\s*fund|club\s*account/i.test(q)) return 'club_ip';
    if (/ratio|interpretation|dividend\s*yield|earnings\s*per\s*share|roce|return\s*on/i.test(q)) return 'ratios';
    return null;
  },

  inputField(id, label, wide) {
    const w = wide ? 'style="width:120px"' : 'style="width:100px"';
    return '<div class="tmpl-field">' +
      '<label>' + label + '</label>' +
      '<input type="text" id="tmpl-' + id + '" ' + w + ' placeholder="€" autocomplete="off">' +
      '</div>';
  },

  sectionHeader(title) {
    return '<div class="tmpl-section-head">' + title + '</div>';
  },

  row(label, inputId, indent) {
    const pad = indent ? ' style="padding-left:' + (indent * 20) + 'px"' : '';
    return '<div class="tmpl-row">' +
      '<span class="tmpl-label"' + pad + '>' + label + '</span>' +
      '<input type="text" class="tmpl-input" id="tmpl-' + inputId + '" placeholder="€" autocomplete="off">' +
      '</div>';
  },

  totalRow(label, inputId) {
    return '<div class="tmpl-row tmpl-total">' +
      '<span class="tmpl-label"><strong>' + label + '</strong></span>' +
      '<input type="text" class="tmpl-input tmpl-input-total" id="tmpl-' + inputId + '" placeholder="€" autocomplete="off">' +
      '</div>';
  },

  tradingPL(data) {
    const name = data ? data.businessName || 'Business' : 'Business';
    let html = '<div class="tmpl-container">';
    html += '<div class="tmpl-title">Trading, Profit & Loss Account of ' + name + '</div>';
    html += '<div class="tmpl-subtitle">for the year ended 31/12/2024</div>';

    html += this.sectionHeader('Trading Account');
    html += this.row('Sales', 'sales', 0);
    html += this.row('Less: Returns Inward', 'returns_in', 1);
    html += this.totalRow('Net Sales', 'net_sales');
    html += '<div class="tmpl-spacer"></div>';
    html += this.row('Opening Stock', 'opening_stock', 0);
    html += this.row('Add: Purchases', 'purchases', 0);
    html += this.row('Less: Returns Outward', 'returns_out', 1);
    html += this.row('Add: Carriage Inward', 'carriage_in', 0);
    html += this.totalRow('Cost of Goods Available', 'coga');
    html += this.row('Less: Closing Stock', 'closing_stock', 1);
    html += this.totalRow('Cost of Goods Sold', 'cogs');
    html += this.totalRow('GROSS PROFIT', 'gross_profit');

    html += this.sectionHeader('Profit & Loss Account');
    html += this.row('Discount Received', 'disc_received', 0);
    html += this.row('Rent Received', 'rent_received', 0);
    html += this.totalRow('Total Income', 'total_income');
    html += '<div class="tmpl-spacer"></div>';
    html += this.sectionHeader('Less: Expenses');
    html += this.row('Light & Heat', 'light_heat', 1);
    html += this.row('Insurance', 'insurance', 1);
    html += this.row('Wages & Salaries', 'wages', 1);
    html += this.row('Rent', 'rent_paid', 1);
    html += this.row('Depreciation', 'depreciation', 1);
    html += this.row('Bad Debts', 'bad_debts', 1);
    html += this.row('Discount Allowed', 'disc_allowed', 1);
    html += this.row('General Expenses', 'gen_expenses', 1);
    html += this.totalRow('Total Expenses', 'total_expenses');
    html += this.totalRow('NET PROFIT', 'net_profit');

    html += '</div>';
    return html;
  },

  balanceSheet(data) {
    const name = data ? data.businessName || 'Business' : 'Business';
    let html = '<div class="tmpl-container">';
    html += '<div class="tmpl-title">Balance Sheet of ' + name + '</div>';
    html += '<div class="tmpl-subtitle">as at 31/12/2024</div>';

    html += this.sectionHeader('Fixed Assets');
    html += '<div class="tmpl-row tmpl-col-head"><span class="tmpl-label"></span><span class="tmpl-col">Cost</span><span class="tmpl-col">Dep</span><span class="tmpl-col">NBV</span></div>';
    html += this.triRow('Premises', 'fa_premises');
    html += this.triRow('Equipment', 'fa_equipment');
    html += this.triRow('Vehicles', 'fa_vehicles');
    html += this.triRow('Total Fixed Assets', 'fa_total');

    html += this.sectionHeader('Current Assets');
    html += this.row('Closing Stock', 'ca_stock', 1);
    html += this.row('Debtors', 'ca_debtors', 1);
    html += this.row('Less: Provision for Bad Debts', 'ca_pbd', 2);
    html += this.row('Prepayments', 'ca_prepaid', 1);
    html += this.row('Bank', 'ca_bank', 1);
    html += this.row('Cash', 'ca_cash', 1);
    html += this.totalRow('Total Current Assets', 'ca_total');

    html += this.sectionHeader('Less: Current Liabilities');
    html += this.row('Creditors', 'cl_creditors', 1);
    html += this.row('Accruals', 'cl_accruals', 1);
    html += this.row('Bank Overdraft', 'cl_overdraft', 1);
    html += this.totalRow('Total Current Liabilities', 'cl_total');
    html += this.totalRow('Working Capital (CA - CL)', 'working_cap');
    html += this.totalRow('TOTAL NET ASSETS', 'total_net_assets');

    html += this.sectionHeader('Financed By');
    html += this.row('Capital', 'fin_capital', 0);
    html += this.row('Add: Net Profit', 'fin_net_profit', 1);
    html += this.row('Less: Drawings', 'fin_drawings', 1);
    html += this.totalRow('TOTAL CAPITAL EMPLOYED', 'total_capital');

    html += '</div>';
    return html;
  },

  triRow(label, id) {
    return '<div class="tmpl-row">' +
      '<span class="tmpl-label">' + label + '</span>' +
      '<input type="text" class="tmpl-input tmpl-input-sm" id="tmpl-' + id + '_cost" placeholder="€">' +
      '<input type="text" class="tmpl-input tmpl-input-sm" id="tmpl-' + id + '_dep" placeholder="€">' +
      '<input type="text" class="tmpl-input tmpl-input-sm" id="tmpl-' + id + '_nbv" placeholder="€">' +
      '</div>';
  },

  tAccount(data) {
    const title = data ? data.accountName || 'Account Name' : 'Account Name';
    let html = '<div class="tmpl-container">';
    html += '<div class="tmpl-title">' + title + '</div>';
    html += '<div class="tmpl-t-account">';

    html += '<div class="tmpl-t-side">';
    html += '<div class="tmpl-t-head">Debit (Dr)</div>';
    for (let i = 1; i <= 8; i++) {
      html += '<div class="tmpl-t-row">' +
        '<input type="text" class="tmpl-t-desc" id="tmpl-dr-desc-' + i + '" placeholder="Description">' +
        '<input type="text" class="tmpl-t-amt" id="tmpl-dr-amt-' + i + '" placeholder="€">' +
        '</div>';
    }
    html += '</div>';

    html += '<div class="tmpl-t-side">';
    html += '<div class="tmpl-t-head">Credit (Cr)</div>';
    for (let i = 1; i <= 8; i++) {
      html += '<div class="tmpl-t-row">' +
        '<input type="text" class="tmpl-t-desc" id="tmpl-cr-desc-' + i + '" placeholder="Description">' +
        '<input type="text" class="tmpl-t-amt" id="tmpl-cr-amt-' + i + '" placeholder="€">' +
        '</div>';
    }
    html += '</div>';

    html += '</div></div>';
    return html;
  },

  ratios(data) {
    let html = '<div class="tmpl-container">';
    html += '<div class="tmpl-title">Ratio Analysis</div>';

    const ratioList = [
      ['Gross Profit %', 'gp_pct', '(GP / Sales) × 100'],
      ['Net Profit %', 'np_pct', '(NP / Sales) × 100'],
      ['Return on Capital Employed', 'roce', '(NP / Capital Employed) × 100'],
      ['Current Ratio', 'current_ratio', 'CA : CL'],
      ['Acid Test Ratio', 'acid_test', '(CA - Stock) : CL'],
      ['Stock Turnover', 'stock_turn', 'Cost of Sales / Avg Stock'],
      ['Debtors Collection Period', 'debtors_days', '(Debtors / Credit Sales) × 365'],
      ['Creditors Payment Period', 'creditors_days', '(Creditors / Credit Purchases) × 365'],
      ['Earnings Per Share', 'eps', 'PAT / No. of Shares'],
      ['Dividend Yield', 'div_yield', '(DPS / Market Price) × 100'],
      ['Dividend Cover', 'div_cover', 'EPS / DPS'],
      ['Price/Earnings Ratio', 'pe_ratio', 'Market Price / EPS'],
      ['Interest Cover', 'int_cover', 'Operating Profit / Interest'],
    ];

    for (const [name, id, formula] of ratioList) {
      html += '<div class="tmpl-ratio-row">' +
        '<div class="tmpl-ratio-name">' + name + '</div>' +
        '<div class="tmpl-ratio-formula">' + formula + '</div>' +
        '<input type="text" class="tmpl-input" id="tmpl-' + id + '" placeholder="Answer" style="width:100px">' +
        '</div>';
    }

    html += '</div>';
    return html;
  },

  cashBudget(data) {
    const months = data ? data.months || ['Jan','Feb','Mar'] : ['Jan','Feb','Mar','Apr','May','Jun'];
    let html = '<div class="tmpl-container">';
    html += '<div class="tmpl-title">Cash Budget</div>';
    html += '<div class="tmpl-subtitle">Complete the budget for each month</div>';

    html += '<div class="tmpl-budget-grid" style="grid-template-columns: 200px ' + months.map(() => '90px').join(' ') + '">';
    html += '<div class="tmpl-budget-head"></div>';
    months.forEach(m => { html += '<div class="tmpl-budget-head">' + m + '</div>'; });

    const rows = ['Opening Balance','Receipts: Cash Sales','Receipts: Debtors','Receipts: Other','Total Receipts',
      'Payments: Creditors','Payments: Wages','Payments: Rent','Payments: Other','Total Payments','Closing Balance'];

    rows.forEach((r, ri) => {
      const isTotal = r.startsWith('Total') || r === 'Closing Balance';
      html += '<div class="tmpl-budget-label' + (isTotal ? ' tmpl-bold' : '') + '">' + r + '</div>';
      months.forEach((m, mi) => {
        html += '<input type="text" class="tmpl-budget-input' + (isTotal ? ' tmpl-budget-total' : '') + '" id="tmpl-cb-' + ri + '-' + mi + '" placeholder="€">';
      });
    });

    html += '</div></div>';
    return html;
  },

  clubIP(data) {
    let html = '<div class="tmpl-container">';
    html += '<div class="tmpl-title">Income & Expenditure Account</div>';
    html += '<div class="tmpl-subtitle">for the year ended 31/12/2024</div>';

    html += this.sectionHeader('Income');
    html += this.row('Subscriptions', 'club_subs', 1);
    html += this.row('Fundraising Income', 'club_fundraise', 1);
    html += this.row('Bar Profit', 'club_bar', 1);
    html += this.row('Investment Income', 'club_invest', 1);
    html += this.row('Other Income', 'club_other_inc', 1);
    html += this.totalRow('Total Income', 'club_total_inc');

    html += this.sectionHeader('Expenditure');
    html += this.row('Rent', 'club_rent', 1);
    html += this.row('Insurance', 'club_insurance', 1);
    html += this.row('Light & Heat', 'club_light', 1);
    html += this.row('Wages', 'club_wages', 1);
    html += this.row('Depreciation', 'club_dep', 1);
    html += this.row('Other Expenses', 'club_other_exp', 1);
    html += this.totalRow('Total Expenditure', 'club_total_exp');
    html += this.totalRow('SURPLUS / DEFICIT', 'club_surplus');

    html += '</div>';
    return html;
  }
};

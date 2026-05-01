var FLASHCARDS_MATHS = [
  // ===== ALGEBRA =====
  {cat:"algebra", q:"State the Factor Theorem", a:"If f(a) = 0, then (x − a) is a factor of f(x).\nTo find factors, substitute possible roots (factors of the constant term ÷ factors of leading coefficient) and check if the result is zero."},
  {cat:"algebra", q:"How do you solve a Quadratic Equation?", a:"ax² + bx + c = 0\n1. Factorise (if possible)\n2. Quadratic formula: x = (−b ± √(b² − 4ac)) / 2a\n3. Complete the square\nDiscriminant: b² − 4ac > 0 (2 real roots), = 0 (1 repeated), < 0 (no real roots)"},
  {cat:"algebra", q:"What is the Discriminant?", a:"Δ = b² − 4ac (for ax² + bx + c = 0)\nΔ > 0: two distinct real roots\nΔ = 0: one repeated real root (tangent to x-axis)\nΔ < 0: no real roots (complex/imaginary roots)"},
  {cat:"algebra", q:"State the Laws of Indices", a:"aᵐ × aⁿ = aᵐ⁺ⁿ\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n(aᵐ)ⁿ = aᵐⁿ\na⁰ = 1\na⁻ⁿ = 1/aⁿ\na^(m/n) = ⁿ√(aᵐ)"},
  {cat:"algebra", q:"State the Laws of Logarithms", a:"log(ab) = log a + log b\nlog(a/b) = log a − log b\nlog(aⁿ) = n log a\nlog_a(a) = 1\nlog_a(1) = 0\nChange of base: log_a(b) = log b / log a"},
  {cat:"algebra", q:"How do you solve Simultaneous Equations (one linear, one quadratic)?", a:"1. From the linear equation, express one variable in terms of the other (e.g., y = ...)\n2. Substitute into the quadratic equation\n3. Solve the resulting quadratic\n4. Find the corresponding values of the other variable"},
  {cat:"algebra", q:"What are Surds rules?", a:"√(ab) = √a × √b\n√(a/b) = √a / √b\nCannot simplify √(a + b)\nTo rationalise: multiply by conjugate\na/(b + √c) → multiply top and bottom by (b − √c)"},
  {cat:"algebra", q:"How do you solve an Inequality?", a:"Solve like an equation BUT: when multiplying or dividing by a negative number, reverse the inequality sign.\nFor quadratic inequalities: factorise, find roots, test intervals, determine sign in each interval."},
  {cat:"algebra", q:"What is Proof by Induction?", a:"Step 1: Show the statement is true for n = 1 (base case)\nStep 2: Assume true for n = k (inductive hypothesis)\nStep 3: Prove true for n = k + 1 using the assumption\nStep 4: Conclude true for all n ∈ ℕ by induction"},

  // ===== COMPLEX NUMBERS =====
  {cat:"complex-numbers", q:"Define a Complex Number", a:"A number in the form z = a + bi, where a is the real part, b is the imaginary part, and i = √(−1), so i² = −1."},
  {cat:"complex-numbers", q:"How do you multiply Complex Numbers?", a:"(a + bi)(c + di) = ac + adi + bci + bdi²\n= (ac − bd) + (ad + bc)i\nRemember: i² = −1\nExample: (2 + 3i)(1 − i) = 2 − 2i + 3i − 3i² = 5 + i"},
  {cat:"complex-numbers", q:"What is the Conjugate of a Complex Number?", a:"The conjugate of z = a + bi is z̄ = a − bi\nProperties: z × z̄ = a² + b² (always real)\nUsed to divide complex numbers: multiply top and bottom by conjugate of denominator."},
  {cat:"complex-numbers", q:"What is the Modulus of a Complex Number?", a:"|z| = |a + bi| = √(a² + b²)\nRepresents the distance from the origin to the point (a, b) on the Argand diagram."},
  {cat:"complex-numbers", q:"What is the Argand Diagram?", a:"A graphical representation of complex numbers. The horizontal axis is the real axis, the vertical axis is the imaginary axis. The complex number a + bi is plotted as the point (a, b)."},
  {cat:"complex-numbers", q:"How do you find the square roots of a Complex Number?", a:"Let √(a + bi) = x + yi\nSquare both sides: a + bi = x² − y² + 2xyi\nEquate real parts: x² − y² = a\nEquate imaginary parts: 2xy = b\nSolve the two equations simultaneously."},
  {cat:"complex-numbers", q:"State De Moivre's Theorem", a:"(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)\nUsed to find powers and roots of complex numbers in polar form.\nPolar form: z = r(cos θ + i sin θ) where r = |z| and θ = argument."},

  // ===== FUNCTIONS =====
  {cat:"functions", q:"Define a Function", a:"A rule that assigns to each element of the domain exactly one element of the codomain. f: A → B. Every input has exactly one output. Vertical line test: a vertical line crosses the graph at most once."},
  {cat:"functions", q:"What is the Domain and Range of a function?", a:"Domain: the set of all possible input values (x-values)\nRange: the set of all possible output values (y-values)\nExample: f(x) = √x → domain: x ≥ 0, range: f(x) ≥ 0"},
  {cat:"functions", q:"What is a Composite Function?", a:"(f ∘ g)(x) = f(g(x))\nApply g first, then f to the result.\nExample: f(x) = 2x, g(x) = x + 3\nf(g(x)) = f(x + 3) = 2(x + 3) = 2x + 6"},
  {cat:"functions", q:"What is an Inverse Function?", a:"f⁻¹(x) is the function that 'undoes' f.\nIf f(a) = b, then f⁻¹(b) = a.\nTo find: replace f(x) with y, swap x and y, solve for y.\nf and f⁻¹ are reflections in the line y = x.\nOnly exists if f is one-to-one (bijective)."},
  {cat:"functions", q:"List key properties of Exponential Functions", a:"f(x) = aˣ (a > 0, a ≠ 1)\nAlways positive (never touches x-axis)\nPasses through (0, 1)\nIf a > 1: increasing (growth)\nIf 0 < a < 1: decreasing (decay)\nDomain: all reals; Range: y > 0"},
  {cat:"functions", q:"List key properties of Logarithmic Functions", a:"f(x) = log_a(x) — inverse of aˣ\nDomain: x > 0; Range: all reals\nPasses through (1, 0)\nVertical asymptote at x = 0\nIf a > 1: increasing function"},
  {cat:"functions", q:"What transformations apply to y = f(x)?", a:"y = f(x) + k → shift up k\ny = f(x) − k → shift down k\ny = f(x + h) → shift left h\ny = f(x − h) → shift right h\ny = −f(x) → reflect in x-axis\ny = f(−x) → reflect in y-axis\ny = af(x) → vertical stretch by a\ny = f(bx) → horizontal compression by b"},

  // ===== CALCULUS =====
  {cat:"calculus", q:"What is Differentiation from First Principles?", a:"f'(x) = lim(h→0) [f(x+h) − f(x)] / h\nThis gives the slope of the tangent to the curve at any point.\nExample: f(x) = x² → f'(x) = lim(h→0) [(x+h)² − x²] / h = 2x"},
  {cat:"calculus", q:"State the basic Differentiation rules", a:"If f(x) = xⁿ, then f'(x) = nxⁿ⁻¹\nConstant rule: d/dx(c) = 0\nSum rule: d/dx(f + g) = f' + g'\nConstant multiple: d/dx(cf) = cf'\nProduct rule: d/dx(fg) = f'g + fg'\nQuotient rule: d/dx(f/g) = (f'g − fg') / g²"},
  {cat:"calculus", q:"State the Chain Rule", a:"If y = f(g(x)), then dy/dx = f'(g(x)) × g'(x)\nOr: dy/dx = dy/du × du/dx\nExample: y = (3x + 1)⁵\nLet u = 3x + 1: dy/dx = 5(3x + 1)⁴ × 3 = 15(3x + 1)⁴"},
  {cat:"calculus", q:"How do you find the equation of a Tangent to a curve?", a:"1. Find f'(x)\n2. Evaluate f'(a) at the point x = a to get the slope m\n3. Find the y-coordinate: f(a)\n4. Use: y − f(a) = m(x − a)"},
  {cat:"calculus", q:"How do you find Max and Min turning points?", a:"1. Find f'(x) and set f'(x) = 0 → find x values\n2. Find f''(x) (second derivative)\n3. If f''(x) < 0 → maximum\n   If f''(x) > 0 → minimum\n   If f''(x) = 0 → check using nature table"},
  {cat:"calculus", q:"How do you find the rate of change?", a:"The rate of change of y with respect to x is dy/dx.\nAt a specific point: substitute x-value into dy/dx.\nExample: distance s = t³ − 2t, velocity = ds/dt = 3t² − 2\nAcceleration = d²s/dt² = 6t"},
  {cat:"calculus", q:"State the basic Integration rules", a:"∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ −1)\n∫k dx = kx + C\n∫1/x dx = ln|x| + C\n∫eˣ dx = eˣ + C\n∫sin x dx = −cos x + C\n∫cos x dx = sin x + C"},
  {cat:"calculus", q:"How do you find the area under a curve?", a:"Area = ∫ₐᵇ f(x) dx\nEvaluate: [F(x)]ₐᵇ = F(b) − F(a)\nIf curve is below x-axis, area is negative — take absolute value.\nFor area between two curves: ∫(top − bottom) dx"},
  {cat:"calculus", q:"Differentiate: sin x, cos x, tan x, eˣ, ln x", a:"d/dx(sin x) = cos x\nd/dx(cos x) = −sin x\nd/dx(tan x) = sec²x\nd/dx(eˣ) = eˣ\nd/dx(ln x) = 1/x"},

  // ===== SEQUENCES & SERIES =====
  {cat:"sequences", q:"What is an Arithmetic Sequence?", a:"A sequence with a constant common difference (d) between terms.\nTₙ = a + (n − 1)d\na = first term, d = common difference, n = term number\nExample: 3, 7, 11, 15... (a = 3, d = 4)"},
  {cat:"sequences", q:"What is the sum of an Arithmetic Series?", a:"Sₙ = n/2 [2a + (n − 1)d]\nOr: Sₙ = n/2 (a + l) where l = last term\nn = number of terms, a = first term, d = common difference"},
  {cat:"sequences", q:"What is a Geometric Sequence?", a:"A sequence with a constant common ratio (r) between terms.\nTₙ = arⁿ⁻¹\na = first term, r = common ratio\nExample: 2, 6, 18, 54... (a = 2, r = 3)"},
  {cat:"sequences", q:"What is the sum of a Geometric Series?", a:"Sₙ = a(1 − rⁿ) / (1 − r) [when r ≠ 1]\nSum to infinity (|r| < 1): S∞ = a / (1 − r)\nConverges only when |r| < 1"},
  {cat:"sequences", q:"When does a Geometric Series converge?", a:"A geometric series converges (has a sum to infinity) when |r| < 1 (i.e., −1 < r < 1).\nS∞ = a / (1 − r)\nExample: a = 10, r = 0.5 → S∞ = 10 / 0.5 = 20"},

  // ===== FINANCIAL MATHS =====
  {cat:"financial-maths", q:"What is Compound Interest?", a:"F = P(1 + r/100)ⁿ\nF = final amount, P = principal, r = interest rate (%), n = number of years\nInterest is earned on the principal AND on accumulated interest."},
  {cat:"financial-maths", q:"What is Depreciation (financial maths)?", a:"F = P(1 − r/100)ⁿ\nF = final value, P = original value, r = rate of depreciation (%), n = number of years\nValue decreases each year by a percentage of its current value."},
  {cat:"financial-maths", q:"What is the Present Value?", a:"PV = F / (1 + r/100)ⁿ\nThe value today of a sum of money to be received in the future.\nUsed for comparing investment options. Higher PV = better investment."},
  {cat:"financial-maths", q:"What is an Annuity?", a:"A series of equal payments made at regular intervals.\nPresent Value of annuity: PV = A × [1 − (1 + i)⁻ⁿ] / i\nFuture Value of annuity: FV = A × [(1 + i)ⁿ − 1] / i\nA = payment, i = interest rate per period, n = number of periods"},
  {cat:"financial-maths", q:"What is the Amortisation formula?", a:"Used to calculate loan repayments.\nA = P × i / [1 − (1 + i)⁻ⁿ]\nA = payment per period, P = loan principal, i = interest rate per period, n = total number of payments"},
  {cat:"financial-maths", q:"What is APR?", a:"Annual Percentage Rate — the true annual cost of borrowing, including compound interest and fees.\nAllows comparison between different loan offers.\nHigher APR = more expensive loan."},

  // ===== COORDINATE GEOMETRY =====
  {cat:"coordinate-geometry", q:"What are the key Coordinate Geometry formulas?", a:"Distance: d = √[(x₂−x₁)² + (y₂−y₁)²]\nMidpoint: ((x₁+x₂)/2, (y₁+y₂)/2)\nSlope: m = (y₂−y₁)/(x₂−x₁)\nEquation of line: y − y₁ = m(x − x₁)"},
  {cat:"coordinate-geometry", q:"When are two lines Parallel or Perpendicular?", a:"Parallel: m₁ = m₂ (same slope)\nPerpendicular: m₁ × m₂ = −1 (slopes are negative reciprocals)\nExample: if m₁ = 2, then perpendicular slope m₂ = −1/2"},
  {cat:"coordinate-geometry", q:"What is the formula for Distance from a Point to a Line?", a:"Distance = |ax₁ + by₁ + c| / √(a² + b²)\nwhere the line is ax + by + c = 0\nand the point is (x₁, y₁)"},
  {cat:"coordinate-geometry", q:"What is the equation of a Circle?", a:"Centre (h, k), radius r:\n(x − h)² + (y − k)² = r²\nGeneral form: x² + y² + 2gx + 2fy + c = 0\nCentre: (−g, −f), Radius: √(g² + f² − c)"},
  {cat:"coordinate-geometry", q:"How do you find where a line intersects a circle?", a:"1. Substitute the equation of the line into the circle equation\n2. Solve the resulting quadratic\n3. Discriminant: Δ > 0 → 2 points (secant), Δ = 0 → 1 point (tangent), Δ < 0 → no intersection"},
  {cat:"coordinate-geometry", q:"What is the equation of a Tangent to a circle at a point?", a:"The tangent is perpendicular to the radius at the point of tangency.\n1. Find slope of radius (centre to point)\n2. Slope of tangent = −1/slope of radius\n3. Use y − y₁ = m(x − x₁) with the point of tangency"},

  // ===== TRIGONOMETRY =====
  {cat:"trigonometry", q:"State the basic Trig Ratios", a:"In a right-angled triangle:\nsin θ = Opposite / Hypotenuse\ncos θ = Adjacent / Hypotenuse\ntan θ = Opposite / Adjacent\nSOH CAH TOA"},
  {cat:"trigonometry", q:"State the Sine Rule", a:"a/sin A = b/sin B = c/sin C\nUsed when you know: an angle and its opposite side + one other measurement.\nAlso: sin A/a = sin B/b = sin C/c"},
  {cat:"trigonometry", q:"State the Cosine Rule", a:"a² = b² + c² − 2bc cos A\nUsed when: 3 sides known (find angle), or 2 sides + included angle (find third side).\nRearranged for angle: cos A = (b² + c² − a²) / 2bc"},
  {cat:"trigonometry", q:"What is the Area of a triangle using Trig?", a:"Area = ½ab sin C\nwhere a and b are two sides and C is the included angle between them.\nAlternatively: Area = ½ × base × perpendicular height"},
  {cat:"trigonometry", q:"State the key Trig Identities", a:"sin²θ + cos²θ = 1\ntan θ = sin θ / cos θ\n1 + tan²θ = sec²θ\n1 + cot²θ = csc²θ\nsin(−θ) = −sin θ\ncos(−θ) = cos θ"},
  {cat:"trigonometry", q:"What are the Compound Angle Formulas?", a:"sin(A ± B) = sin A cos B ± cos A sin B\ncos(A ± B) = cos A cos B ∓ sin A sin B\ntan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)"},
  {cat:"trigonometry", q:"What are the Double Angle Formulas?", a:"sin 2A = 2 sin A cos A\ncos 2A = cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A\ntan 2A = 2 tan A / (1 − tan²A)"},
  {cat:"trigonometry", q:"How do you solve Trig Equations?", a:"1. Isolate the trig function (e.g., sin x = 0.5)\n2. Find the reference angle using inverse trig\n3. Determine all solutions in the given range using CAST diagram:\n   Q1: all positive, Q2: sin+, Q3: tan+, Q4: cos+\n4. Add multiples of the period for general solution"},

  // ===== PROBABILITY =====
  {cat:"probability", q:"State the Addition Rule for Probability", a:"P(A ∪ B) = P(A) + P(B) − P(A ∩ B)\nFor mutually exclusive events: P(A ∪ B) = P(A) + P(B)\n(Mutually exclusive: cannot happen at the same time, P(A ∩ B) = 0)"},
  {cat:"probability", q:"State the Multiplication Rule for Probability", a:"P(A ∩ B) = P(A) × P(B|A)\nFor independent events: P(A ∩ B) = P(A) × P(B)\n(Independent: one event does not affect the probability of the other)"},
  {cat:"probability", q:"What is Conditional Probability?", a:"P(A|B) = P(A ∩ B) / P(B)\nThe probability of A occurring given that B has already occurred.\nKey formula for Bayes' theorem and decision-making problems."},
  {cat:"probability", q:"What is the Binomial Distribution?", a:"For n independent trials, each with probability p of success:\nP(X = r) = ⁿCᵣ × pʳ × (1−p)ⁿ⁻ʳ\nMean: μ = np\nStandard deviation: σ = √(np(1−p))"},
  {cat:"probability", q:"What is the Normal Distribution?", a:"Bell-shaped, symmetrical distribution.\nDefined by mean (μ) and standard deviation (σ).\nZ-score: z = (x − μ) / σ\n68% within 1σ, 95% within 2σ, 99.7% within 3σ\nUse z-tables to find probabilities."},
  {cat:"probability", q:"What is Expected Value?", a:"E(X) = Σ[x × P(x)] — the long-run average outcome.\nFor a fair game, expected value = 0.\nExample: die roll → E(X) = (1+2+3+4+5+6)/6 = 3.5"},
  {cat:"probability", q:"How do you calculate nCr and nPr?", a:"Combinations: ⁿCᵣ = n! / (r!(n−r)!) — order doesn't matter\nPermutations: ⁿPᵣ = n! / (n−r)! — order matters\nExample: choose 3 from 10: ¹⁰C₃ = 120\nArrange 3 from 10: ¹⁰P₃ = 720"},

  // ===== STATISTICS =====
  {cat:"statistics", q:"What are the Measures of Central Tendency?", a:"Mean: sum of all values / number of values\nMedian: middle value when data is ordered (Q2)\nMode: most frequently occurring value\nFor skewed data, median is more representative than mean."},
  {cat:"statistics", q:"How do you calculate Standard Deviation?", a:"σ = √[Σ(x − x̄)² / n] (population)\ns = √[Σ(x − x̄)² / (n−1)] (sample)\nMeasures spread of data around the mean.\nLarger SD = more spread out data."},
  {cat:"statistics", q:"What is a Hypothesis Test?", a:"1. State H₀ (null hypothesis) and H₁ (alternative hypothesis)\n2. Choose significance level (α, typically 0.05)\n3. Calculate test statistic\n4. Find p-value or compare to critical value\n5. If p-value < α: reject H₀. If p-value ≥ α: fail to reject H₀."},
  {cat:"statistics", q:"What is the Empirical Rule?", a:"For a normal distribution:\n68% of data within 1 standard deviation of the mean\n95% of data within 2 standard deviations\n99.7% of data within 3 standard deviations\nAlso called the 68-95-99.7 rule."},
  {cat:"statistics", q:"Define Correlation and the Correlation Coefficient", a:"Correlation: the relationship between two variables.\nCorrelation coefficient (r): measures strength and direction.\n−1 ≤ r ≤ 1\nr close to 1: strong positive, r close to −1: strong negative, r close to 0: weak/no correlation.\nCorrelation does not imply causation."},

  // ===== GEOMETRY =====
  {cat:"geometry", q:"State the Theorem of Pythagoras", a:"In a right-angled triangle: c² = a² + b²\nwhere c is the hypotenuse (longest side, opposite the right angle).\nConverse: if c² = a² + b², the triangle is right-angled."},
  {cat:"geometry", q:"What are the properties of a Parallelogram?", a:"1. Opposite sides are equal and parallel\n2. Opposite angles are equal\n3. Diagonals bisect each other\n4. Consecutive angles are supplementary (add to 180°)"},
  {cat:"geometry", q:"State the properties of Similar Triangles", a:"Corresponding angles are equal.\nCorresponding sides are proportional.\nIf two triangles are similar with scale factor k:\n- Ratio of sides = k\n- Ratio of areas = k²\n- Ratio of volumes = k³"},
  {cat:"geometry", q:"What are the Constructions you need to know?", a:"1. Bisect a line segment\n2. Bisect an angle\n3. Perpendicular from a point to a line\n4. Line through a point parallel to a given line\n5. Divide a segment in a given ratio\n6. Tangent to a circle from external point\n(Construction = compass and straight edge only)"},
  {cat:"geometry", q:"State the Theorem: Angle at centre = 2 × angle at circumference", a:"The angle subtended by an arc at the centre of a circle is twice the angle subtended by the same arc at any point on the circumference.\nCorollary: angle in a semicircle = 90° (angle at centre = 180°)"},
  {cat:"geometry", q:"State the theorem about Cyclic Quadrilaterals", a:"A cyclic quadrilateral has all 4 vertices on a circle.\nOpposite angles sum to 180° (supplementary).\nExterior angle equals interior opposite angle."},

  // ===== ADDITIONAL KEY TOPICS =====
  {cat:"algebra", q:"What is the Binomial Theorem?", a:"(a + b)ⁿ = Σ ⁿCᵣ × aⁿ⁻ʳ × bʳ (r from 0 to n)\nGeneral term: Tᵣ₊₁ = ⁿCᵣ × aⁿ⁻ʳ × bʳ\nExample: (x + 2)³ = x³ + 3(x²)(2) + 3(x)(4) + 8 = x³ + 6x² + 12x + 8"},
  {cat:"calculus", q:"What is a Point of Inflection?", a:"A point where the curve changes from concave up to concave down (or vice versa).\nAt a point of inflection: f''(x) = 0 AND f''(x) changes sign.\nThe tangent crosses the curve at this point."},
  {cat:"calculus", q:"State the Trapezoidal Rule for estimating area", a:"Area ≈ h/2 [first + last + 2(sum of remaining)]\nh = width of each strip = (b − a) / n\nApproximates the area under a curve using trapezoids.\nMore strips → better approximation."},
  {cat:"statistics", q:"What are Quartiles and Interquartile Range?", a:"Q1 (lower quartile): 25th percentile\nQ2 (median): 50th percentile\nQ3 (upper quartile): 75th percentile\nIQR = Q3 − Q1 (middle 50% of data)\nOutlier: below Q1 − 1.5(IQR) or above Q3 + 1.5(IQR)"},
  {cat:"coordinate-geometry", q:"What is the Division of a Line Segment in ratio m:n?", a:"Point dividing (x₁,y₁) to (x₂,y₂) in ratio m:n:\nx = (mx₂ + nx₁) / (m + n)\ny = (my₂ + ny₁) / (m + n)\nFor midpoint: m:n = 1:1"},
  {cat:"probability", q:"What is Bayes' Theorem?", a:"P(A|B) = P(B|A) × P(A) / P(B)\nUsed to update probability based on new evidence.\nP(B) = P(B|A)P(A) + P(B|A')P(A') (total probability)"},
  {cat:"algebra", q:"How do you solve Modulus Equations |f(x)| = k?", a:"If |f(x)| = k (where k ≥ 0):\nf(x) = k OR f(x) = −k\nSolve both equations.\nFor |f(x)| = |g(x)|:\nf(x) = g(x) OR f(x) = −g(x)"},
  {cat:"geometry", q:"State the theorem: Tangent is perpendicular to radius", a:"A tangent to a circle is perpendicular to the radius drawn to the point of tangency.\nAngle between tangent and radius = 90°.\nUseful for finding tangent equations and proving geometric results."}
];

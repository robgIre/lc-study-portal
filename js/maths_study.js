var STUDY_MATHS = [
  {
    topic: "Algebra",
    icon: "🔢",
    subtopics: [
      {
        title: "Indices (Index Laws)",
        content: "Indices (powers) follow a set of rules that let you simplify expressions.\n\nKey Rules:\n- a^m * a^n = a^(m+n) ... multiply same base: add powers\n- a^m / a^n = a^(m-n) ... divide same base: subtract powers\n- (a^m)^n = a^(m*n) ... power of a power: multiply powers\n- a^0 = 1 ... anything to the power 0 is 1\n- a^(-n) = 1/a^n ... negative power: flip to denominator\n- a^(1/n) = n-th root of a ... fractional power = root\n- a^(m/n) = (n-th root of a)^m ... fractional power = root then power\n\nExamples:\n- 2^3 * 2^4 = 2^7 = 128\n- x^5 / x^2 = x^3\n- (3^2)^3 = 3^6 = 729\n- 8^(2/3) = (cube root of 8)^2 = 2^2 = 4\n- 25^(-1/2) = 1/sqrt(25) = 1/5",
        keyTerms: ["base", "index", "exponent", "power", "root", "reciprocal"],
        formula: "a^m * a^n = a^(m+n)\na^m / a^n = a^(m-n)\n(a^m)^n = a^(m*n)\na^0 = 1\na^(-n) = 1/a^n\na^(m/n) = (n-th root of a)^m",
        examTip: "Index questions appear almost every year in Q1 or Q5. Watch out for negative and fractional indices -- write them as fractions and roots before simplifying. Always show intermediate steps."
      },
      {
        title: "Logarithms",
        content: "A logarithm answers the question: what power do I raise the base to, to get this number?\nIf a^x = b, then log_a(b) = x.\n\nLog Laws:\n- log_a(XY) = log_a(X) + log_a(Y) ... product rule\n- log_a(X/Y) = log_a(X) - log_a(Y) ... quotient rule\n- log_a(X^n) = n * log_a(X) ... power rule\n- log_a(a) = 1\n- log_a(1) = 0\n- Change of base: log_a(b) = log(b) / log(a)\n\nSolving log equations:\n1. Use log laws to combine into a single log\n2. Convert to exponential form\n3. Solve the resulting equation\n\nExample: Solve log_2(x) + log_2(x-2) = 3\nlog_2(x(x-2)) = 3\nx(x-2) = 2^3 = 8\nx^2 - 2x - 8 = 0\n(x-4)(x+2) = 0\nx = 4 (reject x = -2 since log of negative is undefined)",
        keyTerms: ["logarithm", "base", "natural log (ln)", "common log (log10)", "exponential form"],
        formula: "log_a(XY) = log_a(X) + log_a(Y)\nlog_a(X/Y) = log_a(X) - log_a(Y)\nlog_a(X^n) = n * log_a(X)\nChange of base: log_a(b) = log(b) / log(a)",
        examTip: "Always check your answer -- you cannot take the log of a negative number or zero. If solving gives a negative answer, reject it. Show the log law you are using at each step for full marks."
      },
      {
        title: "Simultaneous Equations",
        content: "Two or more equations solved together to find values that satisfy all of them.\n\nTwo linear equations:\n- Elimination method: make coefficients of one variable equal, add/subtract\n- Substitution method: rearrange one equation, substitute into the other\n\nOne linear, one quadratic:\n1. Isolate a variable from the linear equation\n2. Substitute into the quadratic equation\n3. Solve the resulting quadratic\n4. Back-substitute to find the other variable\n\nExample:\ny = 2x + 1 ... (linear)\nx^2 + y^2 = 10 ... (quadratic)\nSubstitute: x^2 + (2x+1)^2 = 10\nx^2 + 4x^2 + 4x + 1 = 10\n5x^2 + 4x - 9 = 0\n(5x + 9)(x - 1) = 0\nx = 1 or x = -9/5\nBack-substitute to find y values.\n\nThree equations in three unknowns:\n- Eliminate one variable between two pairs of equations\n- Reduce to two equations in two unknowns\n- Solve as normal simultaneous equations",
        keyTerms: ["elimination", "substitution", "linear", "quadratic", "system of equations"],
        formula: "Linear: ax + by = c, dx + ey = f\nQuadratic substitution: isolate from linear, plug into quadratic\nThree unknowns: reduce step by step",
        examTip: "When you have one linear and one quadratic, ALWAYS substitute the linear into the quadratic (not the other way around). Check your solutions by substituting back into BOTH original equations."
      },
      {
        title: "Inequalities",
        content: "Solving inequalities is like solving equations but with extra care about direction of the inequality sign.\n\nLinear inequalities:\n- Solve like equations BUT if you multiply/divide by a negative, FLIP the sign\n- Example: -2x > 6 becomes x < -3 (sign flips)\n\nQuadratic inequalities:\n1. Rearrange to get 0 on one side\n2. Factor the quadratic\n3. Find the roots\n4. Test intervals or use a sign diagram\n5. Write the solution set\n\nExample: x^2 - 5x + 6 < 0\n(x-2)(x-3) < 0\nRoots: x = 2, x = 3\nTest: product is negative when 2 < x < 3\nAnswer: 2 < x < 3\n\nAbsolute value inequalities:\n|x - a| <= b means a - b <= x <= a + b\n|x - a| >= b means x <= a - b OR x >= a + b\n\nRational inequalities:\n- Never multiply both sides by a variable expression (sign unknown)\n- Bring everything to one side, find common denominator, use sign diagram",
        keyTerms: ["inequality", "sign diagram", "interval notation", "absolute value", "number line"],
        formula: "|x - a| <= b: a - b <= x <= a + b\n|x - a| >= b: x <= a - b or x >= a + b\nQuadratic: factor, find roots, test intervals",
        examTip: "Draw a number line or sign diagram -- examiners love to see your reasoning. For absolute value questions, the 2025 paper had |x - 3| <= 12, which splits into two linear inequalities. Always express your answer as an inequality or interval."
      }
    ]
  },
  {
    topic: "Complex Numbers",
    icon: "🌀",
    subtopics: [
      {
        title: "Basics of Complex Numbers",
        content: "A complex number has the form z = a + bi, where:\n- a is the real part, Re(z)\n- b is the imaginary part, Im(z)\n- i = sqrt(-1), so i^2 = -1\n\nOperations:\n- Addition: (a+bi) + (c+di) = (a+c) + (b+d)i\n- Subtraction: (a+bi) - (c+di) = (a-c) + (b-d)i\n- Multiplication: (a+bi)(c+di) = (ac-bd) + (ad+bc)i\n- Division: multiply top and bottom by the conjugate of the denominator\n\nConjugate:\n- The conjugate of z = a + bi is z* = a - bi\n- z * z* = a^2 + b^2 (always real and non-negative)\n- Used to divide complex numbers: (a+bi)/(c+di) = (a+bi)(c-di) / (c^2+d^2)\n\nEquality:\n- Two complex numbers are equal if and only if their real parts are equal AND their imaginary parts are equal",
        keyTerms: ["real part", "imaginary part", "conjugate", "imaginary unit i", "complex plane"],
        formula: "i^2 = -1\nz * z* = a^2 + b^2\nDivision: (a+bi)/(c+di) = (a+bi)(c-di)/(c^2+d^2)",
        examTip: "Division always requires multiplying by the conjugate. This appears in nearly every complex number question. Show the conjugate multiplication clearly -- it earns separate marks."
      },
      {
        title: "Argand Diagram",
        content: "The Argand diagram plots complex numbers on a 2D plane:\n- x-axis = Real axis\n- y-axis = Imaginary axis\n- z = a + bi is plotted at point (a, b)\n\nModulus (absolute value):\n|z| = |a + bi| = sqrt(a^2 + b^2)\nThis is the distance from the origin to the point.\n\nArgument:\narg(z) = angle measured from positive real axis\narg(z) = arctan(b/a) ... but adjust for quadrant!\n- Q1: angle as calculated\n- Q2: pi - arctan(|b/a|)\n- Q3: pi + arctan(|b/a|) or -(pi - arctan(|b/a|))\n- Q4: -arctan(|b/a|) or 2pi - arctan(|b/a|)\n\nPolar form:\nz = r(cos t + i sin t) where r = |z| and t = arg(z)\nAlso written as z = r cis t\n\nConverting:\n- Cartesian to polar: find r = sqrt(a^2+b^2), t = arctan(b/a)\n- Polar to Cartesian: a = r cos t, b = r sin t",
        keyTerms: ["Argand diagram", "modulus", "argument", "polar form", "Cartesian form", "cis"],
        formula: "|z| = sqrt(a^2 + b^2)\narg(z) = arctan(b/a)\nPolar form: z = r(cos t + i sin t)\na = r cos t, b = r sin t",
        examTip: "When finding the argument, always check which quadrant the complex number is in. Drawing a quick Argand diagram sketch helps avoid sign errors. The argument is usually given in radians on the LC paper."
      },
      {
        title: "De Moivre's Theorem",
        content: "De Moivre's theorem states:\n[r(cos t + i sin t)]^n = r^n(cos nt + i sin nt)\n\nOr equivalently: (cis t)^n = cis(nt)\n\nUses:\n1. Raising complex numbers to powers\n2. Proving trig identities (equate real and imaginary parts)\n3. Finding nth roots of complex numbers\n\nProving double angle formulas:\n(cos t + i sin t)^2 = cos 2t + i sin 2t\nExpand LHS: cos^2(t) - sin^2(t) + 2i sin(t)cos(t)\nEquate real parts: cos 2t = cos^2(t) - sin^2(t)\nEquate imaginary parts: sin 2t = 2 sin(t) cos(t)",
        keyTerms: ["De Moivre's theorem", "polar form", "power", "trig identities", "double angle"],
        formula: "[r(cos t + i sin t)]^n = r^n(cos nt + i sin nt)\ncos 2t = cos^2(t) - sin^2(t)\nsin 2t = 2 sin(t) cos(t)",
        examTip: "De Moivre's theorem was used in the 2025 exam to prove cos 2t = cos^2(t) - sin^2(t). Memorize the expansion of (cos t + i sin t)^2 and how to equate real and imaginary parts. This is a very common exam question."
      },
      {
        title: "Roots of Unity and nth Roots",
        content: "Finding nth roots of a complex number w:\nIf z^n = w, there are exactly n roots, equally spaced on a circle.\n\nMethod:\n1. Write w in polar form: w = r(cos t + i sin t)\n2. Each root: z_k = r^(1/n) * [cos((t + 2pi*k)/n) + i sin((t + 2pi*k)/n)]\n   for k = 0, 1, 2, ..., n-1\n\nRoots of unity (z^n = 1):\n- n roots equally spaced on the unit circle\n- z_k = cos(2pi*k/n) + i sin(2pi*k/n)\n- They sum to zero: z_0 + z_1 + ... + z_(n-1) = 0\n\nCube roots of unity (z^3 = 1):\nz = 1, (-1+sqrt(3)i)/2, (-1-sqrt(3)i)/2\nUsually called 1, w, w^2 where w = (-1+sqrt(3)i)/2\nProperties: 1 + w + w^2 = 0 and w^3 = 1",
        keyTerms: ["nth root", "roots of unity", "cube roots of unity", "omega", "equally spaced"],
        formula: "z_k = r^(1/n) * cis((t + 2pi*k)/n) for k = 0, 1, ..., n-1\nCube roots of unity: 1, w, w^2 where w = (-1+sqrt(3)i)/2\n1 + w + w^2 = 0",
        examTip: "The 2025 exam asked for roots of z^6 = -64i. Always convert to polar form first, then apply the formula. You only need to give 2 roots in surd form, but know that there are n roots total. If z0 is a root of z^n = w (n even), then -z0 is also a root."
      }
    ]
  },
  {
    topic: "Functions",
    icon: "📈",
    subtopics: [
      {
        title: "Domain and Range",
        content: "Domain: the set of all allowed input values (x-values).\nRange: the set of all possible output values (y-values).\n\nRestrictions on domain:\n- Division: denominator cannot be zero\n- Square root: expression under sqrt must be >= 0\n- Logarithm: argument must be > 0\n\nExamples:\nf(x) = 1/(x-3): domain is all real numbers except x = 3\nf(x) = sqrt(x-2): domain is x >= 2\nf(x) = ln(5-x): domain is x < 5\n\nFinding range:\n- Sketch the graph and read off y-values\n- Or find the inverse and determine its domain (= original range)\n- For quadratics: complete the square to find the vertex",
        keyTerms: ["domain", "range", "natural domain", "restriction", "codomain"],
        formula: "f(x) = 1/(x-a): domain excludes x = a\nf(x) = sqrt(g(x)): domain requires g(x) >= 0\nf(x) = ln(g(x)): domain requires g(x) > 0",
        examTip: "Always state the domain in set notation or interval notation as the question requires. If no domain is given, assume the natural (maximal) domain."
      },
      {
        title: "Injective, Surjective, Bijective",
        content: "Injective (one-to-one):\n- Each output comes from at most one input\n- f(a) = f(b) implies a = b\n- Horizontal line test: no horizontal line crosses the graph more than once\n- Example: f(x) = 2x + 3 is injective\n- Example: f(x) = x^2 is NOT injective (f(2) = f(-2) = 4)\n\nSurjective (onto):\n- Every element in the codomain is mapped to by at least one element in the domain\n- Range = codomain\n- Example: f: R -> R, f(x) = x^3 is surjective\n- Example: f: R -> R, f(x) = x^2 is NOT surjective (no x gives f(x) = -1)\n\nBijective:\n- Both injective AND surjective\n- Has an inverse function\n- Example: f: R -> R, f(x) = 2x + 3 is bijective",
        keyTerms: ["injective", "one-to-one", "surjective", "onto", "bijective", "horizontal line test"],
        formula: "Injective: f(a) = f(b) => a = b\nSurjective: range = codomain\nBijective: injective + surjective",
        examTip: "To prove a function is injective, assume f(a) = f(b) and show a = b. To prove it is NOT injective, find two different inputs that give the same output (a counter-example). These definitions are on the Maths Tables booklet."
      },
      {
        title: "Composition of Functions",
        content: "The composition f(g(x)) means: apply g first, then f.\nAlso written as (f o g)(x).\n\nMethod:\n1. Start with the inner function: evaluate g(x)\n2. Take that result and plug it into f\n\nExample:\nf(x) = x^2, g(x) = x + 3\n(f o g)(x) = f(g(x)) = f(x + 3) = (x + 3)^2 = x^2 + 6x + 9\n(g o f)(x) = g(f(x)) = g(x^2) = x^2 + 3\n\nNote: f o g is NOT the same as g o f in general!\n\nDomain of f o g:\n- x must be in the domain of g\n- g(x) must be in the domain of f",
        keyTerms: ["composition", "composite function", "f of g", "inner function", "outer function"],
        formula: "(f o g)(x) = f(g(x))\n(g o f)(x) = g(f(x))\nf o g != g o f in general",
        examTip: "The 2025 exam had g(g(3)) -- work from the inside out. Read the graph carefully for the value of g(3), then use that result to find g of that value. Always show both steps."
      },
      {
        title: "Inverse Functions",
        content: "The inverse function f^(-1) undoes f:\nf(f^(-1)(x)) = x and f^(-1)(f(x)) = x\n\nFinding the inverse:\n1. Write y = f(x)\n2. Swap x and y\n3. Solve for y\n4. The result is f^(-1)(x)\n\nExample:\nf(x) = 2x + 5\ny = 2x + 5\nx = 2y + 5\n2y = x - 5\ny = (x - 5)/2\nf^(-1)(x) = (x - 5)/2\n\nProperties:\n- The graph of f^(-1) is the reflection of f in the line y = x\n- Domain of f^(-1) = range of f\n- Range of f^(-1) = domain of f\n- f must be bijective (one-to-one and onto) to have an inverse\n\nIf f is not one-to-one, restrict the domain to make it one-to-one first.",
        keyTerms: ["inverse function", "one-to-one", "reflection", "y = x line", "undo"],
        formula: "To find f^(-1): swap x and y, solve for y\nGraph of f^(-1) = reflection of f in y = x\nDomain of f^(-1) = range of f",
        examTip: "The 2025 exam asked to draw g^(-1)(x) by reflecting g(x) in the line y = x. Reflect key points: (a,b) becomes (b,a). Always draw the line y = x as a guide on your diagram."
      }
    ]
  },
  {
    topic: "Calculus",
    icon: "∫",
    subtopics: [
      {
        title: "Differentiation from First Principles",
        content: "The derivative of f(x) from first principles is:\nf'(x) = lim(h->0) [f(x+h) - f(x)] / h\n\nMethod:\n1. Write out f(x+h) by replacing every x with (x+h)\n2. Subtract f(x)\n3. Divide by h\n4. Simplify (cancel h from numerator and denominator)\n5. Let h -> 0\n\nExample: f(x) = x^2\nf(x+h) = (x+h)^2 = x^2 + 2xh + h^2\nf(x+h) - f(x) = 2xh + h^2\n[f(x+h) - f(x)]/h = 2x + h\nlim(h->0) (2x + h) = 2x\nSo f'(x) = 2x\n\nExample: f(x) = x^3\nf(x+h) = x^3 + 3x^2h + 3xh^2 + h^3\nf(x+h) - f(x) = 3x^2h + 3xh^2 + h^3\n[f(x+h) - f(x)]/h = 3x^2 + 3xh + h^2\nlim(h->0) = 3x^2\nSo f'(x) = 3x^2",
        keyTerms: ["first principles", "limit", "derivative", "h tends to zero", "rate of change"],
        formula: "f'(x) = lim(h->0) [f(x+h) - f(x)] / h",
        examTip: "First principles is examined regularly. You MUST show all 5 steps -- especially the limit step at the end. If the question says 'from first principles' you cannot use shortcut rules. The formula is on the Maths Tables booklet."
      },
      {
        title: "Differentiation Rules",
        content: "Basic rules:\n- d/dx(x^n) = n*x^(n-1) ... power rule\n- d/dx(constant) = 0\n- d/dx(kf(x)) = k*f'(x) ... constant multiple\n- d/dx(f + g) = f' + g' ... sum rule\n\nTrigonometric:\n- d/dx(sin x) = cos x\n- d/dx(cos x) = -sin x\n- d/dx(tan x) = sec^2(x)\n\nExponential and logarithmic:\n- d/dx(e^x) = e^x\n- d/dx(a^x) = a^x * ln(a)\n- d/dx(ln x) = 1/x\n\nChain rule: d/dx[f(g(x))] = f'(g(x)) * g'(x)\nExample: d/dx(sin 4x) = cos(4x) * 4 = 4cos(4x)\n\nProduct rule: d/dx(uv) = u*dv/dx + v*du/dx\nExample: d/dx(x^2 * sin x) = x^2*cos x + 2x*sin x\n\nQuotient rule: d/dx(u/v) = [v*du/dx - u*dv/dx] / v^2",
        keyTerms: ["power rule", "chain rule", "product rule", "quotient rule", "derivative"],
        formula: "Power: d/dx(x^n) = n*x^(n-1)\nChain: d/dx[f(g(x))] = f'(g(x)) * g'(x)\nProduct: d/dx(uv) = u*dv/dx + v*du/dx\nQuotient: d/dx(u/v) = [v*du/dx - u*dv/dx] / v^2\nd/dx(sin x) = cos x\nd/dx(cos x) = -sin x\nd/dx(e^x) = e^x\nd/dx(ln x) = 1/x",
        examTip: "The 2025 P1 Q2 combined the chain rule with trig: d/dx(sin 4x) = 4cos 4x. Always state which rule you are using -- it earns marks. All these formulas are on the Maths Tables booklet."
      },
      {
        title: "Applications of Differentiation",
        content: "Finding turning points (max/min):\n1. Find f'(x)\n2. Set f'(x) = 0 and solve\n3. Use the second derivative test:\n   - f''(x) > 0: local minimum\n   - f''(x) < 0: local maximum\n   - f''(x) = 0: inconclusive (check further)\n\nPoints of inflection:\n- Where the concavity changes\n- Set f''(x) = 0 and verify sign change\n\nEquation of tangent:\n- Slope = f'(a) at the point x = a\n- Point = (a, f(a))\n- Equation: y - f(a) = f'(a)(x - a)\n\nEquation of normal:\n- Slope = -1/f'(a) (perpendicular to tangent)\n- Equation: y - f(a) = -1/f'(a) * (x - a)\n\nRate of change:\n- f'(x) gives the instantaneous rate of change of f at x\n- Increasing function: f'(x) > 0\n- Decreasing function: f'(x) < 0",
        keyTerms: ["turning point", "maximum", "minimum", "tangent", "normal", "rate of change", "inflection"],
        formula: "Tangent at (a, f(a)): y - f(a) = f'(a)(x - a)\nNormal at (a, f(a)): y - f(a) = -1/f'(a) * (x - a)\nSecond derivative test: f''(x) > 0 = min, f''(x) < 0 = max",
        examTip: "The 2025 P1 Q2 asked for the tangent equation at x = 0. Steps: find slope from f'(0), find y-value from f(0), use point-slope form. Rearrange to the required form (ax + by + c = 0). Show each step separately."
      },
      {
        title: "Integration",
        content: "Integration is the reverse of differentiation.\n\nBasic rules:\n- integral of x^n dx = x^(n+1)/(n+1) + C, where n != -1\n- integral of 1/x dx = ln|x| + C\n- integral of e^x dx = e^x + C\n- integral of sin x dx = -cos x + C\n- integral of cos x dx = sin x + C\n- integral of sec^2(x) dx = tan x + C\n\nDefinite integrals:\n- integral from a to b of f(x) dx = F(b) - F(a)\n- This gives the signed area under the curve\n\nArea between curve and x-axis:\n- If f(x) >= 0 on [a,b]: area = integral from a to b of f(x) dx\n- If f(x) < 0 on part of [a,b]: split at roots and take absolute values\n\nArea between two curves:\n- Area = integral from a to b of |f(x) - g(x)| dx\n- = integral from a to b of (top curve - bottom curve) dx\n\nAverage value of f on [a,b]:\n= (1/(b-a)) * integral from a to b of f(x) dx",
        keyTerms: ["integration", "antiderivative", "definite integral", "indefinite integral", "area under curve", "constant of integration"],
        formula: "integral of x^n dx = x^(n+1)/(n+1) + C\nintegral of e^x dx = e^x + C\nintegral of sin x dx = -cos x + C\nintegral of cos x dx = sin x + C\nDefinite: integral from a to b = F(b) - F(a)\nAverage value = (1/(b-a)) * integral from a to b of f(x) dx",
        examTip: "Always add +C for indefinite integrals -- losing it costs marks. For definite integrals, show F(b) and F(a) separately before subtracting. If the area is below the x-axis, the integral is negative, so take the absolute value when finding area."
      }
    ]
  },
  {
    topic: "Sequences & Series",
    icon: "🔗",
    subtopics: [
      {
        title: "Arithmetic Sequences & Series",
        content: "An arithmetic sequence has a constant difference between consecutive terms.\n\nFormulas:\n- nth term: T_n = a + (n-1)d\n  where a = first term, d = common difference\n- Sum of first n terms: S_n = n/2 * [2a + (n-1)d]\n  or equivalently: S_n = n/2 * (first + last)\n\nFinding d: d = T_2 - T_1 = T_3 - T_2 = ...\n\nUseful relationships:\n- T_n = S_n - S_(n-1) for n >= 2\n- The mean of an arithmetic sequence = (first + last)/2\n\nExample (2025 exam):\nA(1) = 15.8, A(2) = 22, A(3) = 28.2\nd = 22 - 15.8 = 6.2\nA(n) = 15.8 + (n-1)(6.2) = 6.2n + 9.6\nS(n) = n/2[2(15.8) + (n-1)(6.2)] = 3.1n^2 + 12.7n",
        keyTerms: ["arithmetic", "common difference", "nth term", "sum", "linear sequence"],
        formula: "T_n = a + (n-1)d\nS_n = n/2 * [2a + (n-1)d]\nS_n = n/2 * (first + last)\nd = T_(n+1) - T_n",
        examTip: "The 2025 Q7 was a spider web context question using arithmetic sequences. Always show you identified it as arithmetic (constant difference), state the values of a and d, then apply the formula. Context questions carry more marks -- always answer in context with units."
      },
      {
        title: "Geometric Sequences & Series",
        content: "A geometric sequence has a constant ratio between consecutive terms.\n\nFormulas:\n- nth term: T_n = a * r^(n-1)\n  where a = first term, r = common ratio\n- Sum of first n terms: S_n = a(r^n - 1)/(r - 1) when r != 1\n  or equivalently: S_n = a(1 - r^n)/(1 - r)\n\nFinding r: r = T_2/T_1 = T_3/T_2 = ...\n\nSum to infinity (when |r| < 1):\nS_infinity = a/(1 - r)\nThe series converges only when |r| < 1.\n\nExample (2025 exam):\nO_1 = 0.5, O_2 = 0.53\nr = 0.53/0.5 = 1.06\nO_3 = 0.53 * 1.06 = 0.5618\nS_n = 0.5(1.06^n - 1)/0.06 = (25/3)(1.06^n - 1)",
        keyTerms: ["geometric", "common ratio", "convergence", "sum to infinity", "exponential growth"],
        formula: "T_n = a * r^(n-1)\nS_n = a(r^n - 1)/(r - 1)\nS_infinity = a/(1 - r) when |r| < 1",
        examTip: "For sum to infinity, you MUST state that |r| < 1 for convergence -- this is a mark in itself. The 2025 exam combined arithmetic and geometric in the same question (spider web). Watch for questions that say 'total length' -- that means sum."
      }
    ]
  },
  {
    topic: "Financial Maths",
    icon: "💶",
    subtopics: [
      {
        title: "Present Value and Future Value",
        content: "Future value: how much an investment grows to.\nF = P(1 + i)^t\nwhere P = principal, i = interest rate per period, t = number of periods\n\nPresent value: what a future sum is worth today.\nP = F / (1 + i)^t = F(1 + i)^(-t)\n\nCompound interest:\n- Annually: F = P(1 + r)^n\n- Monthly: F = P(1 + r/12)^(12n)\n- Quarterly: F = P(1 + r/4)^(4n)\n\nEffective annual rate (EAR):\nEAR = (1 + r/n)^n - 1\nwhere r = nominal rate, n = compounding periods per year",
        keyTerms: ["present value", "future value", "compound interest", "principal", "effective rate", "nominal rate"],
        formula: "F = P(1 + i)^t\nP = F(1 + i)^(-t)\nEAR = (1 + r/n)^n - 1",
        examTip: "Financial maths uses geometric series. The present value formula is on the Maths Tables booklet. Always state what your variables represent and ensure the interest rate and number of periods match (e.g., monthly rate with monthly periods)."
      },
      {
        title: "Amortisation",
        content: "Amortisation is paying off a loan with equal regular payments.\n\nEach payment covers:\n- Interest on remaining balance\n- Part of the principal (capital repayment)\n\nPresent value of annuity (equal payments):\nP = A * [1 - (1+i)^(-t)] / i\nwhere A = regular payment, i = interest rate per period, t = number of payments\n\nTo find the payment amount:\nA = P * i / [1 - (1+i)^(-t)]\n\nAmortisation schedule:\n- Interest portion = balance * i\n- Capital portion = A - interest portion\n- New balance = old balance - capital portion\n\nAs payments continue:\n- Interest portion decreases\n- Capital portion increases\n- But the total payment stays the same",
        keyTerms: ["amortisation", "annuity", "loan repayment", "capital", "interest portion"],
        formula: "P = A * [1 - (1+i)^(-t)] / i\nA = P * i / [1 - (1+i)^(-t)]\nInterest = balance * i\nCapital repaid = A - interest",
        examTip: "Draw an amortisation table for the first 2-3 payments if asked. Round payments to 2 decimal places (euros and cents). Common error: using annual rate when payments are monthly -- divide the rate by 12."
      },
      {
        title: "Depreciation",
        content: "Depreciation: an asset loses value over time.\n\nReducing balance (most common in LC):\nV = P(1 - d)^n\nwhere V = value after n years, P = original value, d = depreciation rate\n\nThis is like compound interest but with subtraction.\n\nStraight-line depreciation:\nAnnual depreciation = (original value - scrap value) / useful life\nV = P - n * annual depreciation\n\nExample:\nA car costs 25,000 euro and depreciates at 15% per year.\nAfter 3 years: V = 25000(1 - 0.15)^3 = 25000(0.85)^3 = 25000 * 0.614125 = 15,353.13 euro",
        keyTerms: ["depreciation", "reducing balance", "straight-line", "scrap value", "book value"],
        formula: "Reducing balance: V = P(1 - d)^n\nStraight-line: V = P - n * [(P - scrap)/useful life]",
        examTip: "Depreciation is the mirror image of compound interest. Make sure you subtract the rate (1 - d) not add it. If asked 'how many years until the value falls below X', set up the inequality and solve using logs."
      }
    ]
  },
  {
    topic: "Proof by Induction",
    icon: "🔑",
    subtopics: [
      {
        title: "Proof by Induction",
        content: "Proof by induction proves a statement is true for all natural numbers n.\n\nFour steps:\n\nStep 1 -- Base case:\nProve the statement is true for n = 1 (or the smallest value).\nSubstitute n = 1 into both sides and verify they are equal.\n\nStep 2 -- Inductive hypothesis:\nAssume the statement is true for n = k.\nWrite out what P(k) says explicitly.\n\nStep 3 -- Inductive step:\nProve the statement is true for n = k + 1, USING the assumption from Step 2.\nStart with P(k+1) and manipulate using P(k) to show it holds.\n\nStep 4 -- Conclusion:\nSince the statement is true for n = 1, and if true for n = k it is true for n = k+1, it is true for all n in N by induction.\n\nCommon types:\n- Sum formulas: 1 + 2 + 3 + ... + n = n(n+1)/2\n- Divisibility: 6^n - 1 is divisible by 5\n- Inequalities: 2^n > n for all n >= 1\n\nExample: Prove 1 + 2 + 3 + ... + n = n(n+1)/2\nBase case (n=1): LHS = 1, RHS = 1(2)/2 = 1. True.\nAssume true for n=k: 1 + 2 + ... + k = k(k+1)/2\nProve for n=k+1:\n1 + 2 + ... + k + (k+1)\n= k(k+1)/2 + (k+1) ... using assumption\n= k(k+1)/2 + 2(k+1)/2\n= (k+1)(k+2)/2\n= (k+1)((k+1)+1)/2\nThis is the formula with n = k+1. True.\nConclusion: True for all n in N by induction.",
        keyTerms: ["induction", "base case", "inductive hypothesis", "inductive step", "natural numbers"],
        formula: "Step 1: Prove P(1)\nStep 2: Assume P(k)\nStep 3: Prove P(k+1) using P(k)\nStep 4: Conclude true for all n in N",
        examTip: "Induction appears in Section B (50 marks), usually Q10. You MUST write all four steps with clear labels. The most common error is failing to use the assumption (Step 2) in the proof of Step 3. Always explicitly say 'using the assumption' or 'by the inductive hypothesis'."
      }
    ]
  },
  {
    topic: "Coordinate Geometry",
    icon: "📐",
    subtopics: [
      {
        title: "The Line",
        content: "Key formulas for lines on the coordinate plane:\n\nSlope: m = (y2 - y1)/(x2 - x1)\n\nEquation forms:\n- Slope-intercept: y = mx + c\n- Point-slope: y - y1 = m(x - x1)\n- General form: ax + by + c = 0\n\nParallel lines: same slope (m1 = m2)\nPerpendicular lines: m1 * m2 = -1 (negative reciprocal slopes)\n\nDistance from point (x1, y1) to line ax + by + c = 0:\nd = |ax1 + by1 + c| / sqrt(a^2 + b^2)\n\nMidpoint: M = ((x1+x2)/2, (y1+y2)/2)\n\nDividing a line segment in ratio m:n:\nx = (mx2 + nx1)/(m+n), y = (my2 + ny1)/(m+n)\n\nAngle between two lines:\ntan t = |(m1 - m2)/(1 + m1*m2)|",
        keyTerms: ["slope", "intercept", "parallel", "perpendicular", "distance", "midpoint", "angle between lines"],
        formula: "m = (y2-y1)/(x2-x1)\ny - y1 = m(x - x1)\nDistance to line: |ax1+by1+c| / sqrt(a^2+b^2)\nAngle: tan t = |(m1-m2)/(1+m1*m2)|\nPerpendicular: m1*m2 = -1",
        examTip: "The 2025 P2 Q1 asked for the angle between two lines using tan t = |(m1-m2)/(1+m1*m2)|. Always find slopes first by putting lines in y = mx + c form. Show the formula, substitute, and give the angle to the nearest degree."
      },
      {
        title: "The Circle",
        content: "Standard form: (x - h)^2 + (y - k)^2 = r^2\nCentre: (h, k), Radius: r\n\nGeneral form: x^2 + y^2 + 2gx + 2fy + c = 0\nCentre: (-g, -f), Radius: sqrt(g^2 + f^2 - c)\nCondition: g^2 + f^2 - c > 0 for a real circle\n\nTangent to a circle:\n- Perpendicular to the radius at the point of contact\n- If centre is (h,k) and tangent point is (x1,y1):\n  slope of radius = (y1-k)/(x1-h)\n  slope of tangent = -(x1-h)/(y1-k)\n\nLine meets circle:\n- Substitute line equation into circle equation\n- Discriminant determines intersection:\n  D > 0: two points (secant)\n  D = 0: one point (tangent)\n  D < 0: no intersection\n\nExternal point to circle:\n- Length of tangent from (x1,y1) to circle = sqrt(x1^2+y1^2+2gx1+2fy1+c)",
        keyTerms: ["centre", "radius", "tangent", "secant", "general form", "standard form", "discriminant"],
        formula: "(x-h)^2 + (y-k)^2 = r^2\nCentre: (-g, -f), r = sqrt(g^2+f^2-c)\nTangent perpendicular to radius\nLength of tangent = sqrt(S1) where S1 = x1^2+y1^2+2gx1+2fy1+c",
        examTip: "The 2025 P2 Q2 asked for tangent equations and values of k. Always complete the square to go from general to standard form. The tangent is PERPENDICULAR to the radius -- this is key for finding the slope of the tangent."
      },
      {
        title: "Translations and Transformations",
        content: "Translating a graph:\n- y = f(x - a): shift RIGHT by a units\n- y = f(x + a): shift LEFT by a units\n- y = f(x) + b: shift UP by b units\n- y = f(x) - b: shift DOWN by b units\n\nStretching:\n- y = af(x): vertical stretch by factor a\n- y = f(ax): horizontal compression by factor 1/a\n\nReflections:\n- y = -f(x): reflect in the x-axis\n- y = f(-x): reflect in the y-axis\n\nApplied to circles:\nIf a circle has equation (x-h)^2 + (y-k)^2 = r^2 and is translated by vector (p, q):\nNew equation: (x-h-p)^2 + (y-k-q)^2 = r^2\nThe radius stays the same; only the centre moves.",
        keyTerms: ["translation", "transformation", "stretch", "reflection", "shift"],
        formula: "Right a: replace x with (x-a)\nLeft a: replace x with (x+a)\nUp b: add b\nDown b: subtract b\nReflect x-axis: negate y\nReflect y-axis: negate x",
        examTip: "Remember: changes INSIDE the brackets (affecting x) do the opposite of what you expect -- f(x-3) shifts RIGHT. Changes OUTSIDE affect y and do what you expect -- f(x)+3 shifts UP."
      }
    ]
  },
  {
    topic: "Trigonometry",
    icon: "📊",
    subtopics: [
      {
        title: "Trigonometric Identities",
        content: "Fundamental identity:\nsin^2(t) + cos^2(t) = 1\nDivide by cos^2: tan^2(t) + 1 = sec^2(t)\nDivide by sin^2: 1 + cot^2(t) = csc^2(t)\n\nDouble angle formulas:\nsin 2t = 2 sin(t) cos(t)\ncos 2t = cos^2(t) - sin^2(t)\n       = 2cos^2(t) - 1\n       = 1 - 2sin^2(t)\ntan 2t = 2tan(t) / (1 - tan^2(t))\n\nCompound angle formulas:\nsin(A+B) = sinA cosB + cosA sinB\nsin(A-B) = sinA cosB - cosA sinB\ncos(A+B) = cosA cosB - sinA sinB\ncos(A-B) = cosA cosB + sinA sinB\n\nExact values (must know):\nsin 0 = 0, sin 30 = 1/2, sin 45 = 1/sqrt(2), sin 60 = sqrt(3)/2, sin 90 = 1\ncos 0 = 1, cos 30 = sqrt(3)/2, cos 45 = 1/sqrt(2), cos 60 = 1/2, cos 90 = 0\ntan 0 = 0, tan 30 = 1/sqrt(3), tan 45 = 1, tan 60 = sqrt(3), tan 90 = undefined",
        keyTerms: ["identity", "double angle", "compound angle", "exact values", "Pythagorean identity"],
        formula: "sin^2(t) + cos^2(t) = 1\nsin 2t = 2sin(t)cos(t)\ncos 2t = cos^2(t) - sin^2(t)\nsin(A+B) = sinA cosB + cosA sinB\ncos(A+B) = cosA cosB - sinA sinB",
        examTip: "The compound angle and double angle formulas are on the Maths Tables booklet but you need to be fast at using them. Practice substituting exact values. The 2025 exam used De Moivre's theorem to derive cos 2t -- know both the trig and complex number approaches."
      },
      {
        title: "Solving Trigonometric Equations",
        content: "General approach:\n1. Rearrange to isolate the trig function\n2. Find the reference angle using inverse trig\n3. Determine which quadrants the solution is in\n4. Write all solutions in the given range\n\nQUAD rule (CAST rule):\n- All trig functions positive in Q1 (0 to 90)\n- Sin positive in Q2 (90 to 180)\n- Tan positive in Q3 (180 to 270)\n- Cos positive in Q4 (270 to 360)\n\nSolutions in [0, 360]:\nsin t = k: t = arcsin(k), and t = 180 - arcsin(k)\ncos t = k: t = arccos(k), and t = 360 - arccos(k)\ntan t = k: t = arctan(k), and t = 180 + arctan(k)\n\nGeneral solutions (all solutions):\nsin t = k: t = arcsin(k) + 360n or t = (180 - arcsin(k)) + 360n\ncos t = k: t = +/- arccos(k) + 360n\ntan t = k: t = arctan(k) + 180n\nwhere n is any integer\n\nSubstitution equations:\nFor sin^2(t) + sin(t) - 2 = 0, let u = sin(t):\nu^2 + u - 2 = 0, solve for u, then find t.",
        keyTerms: ["CAST rule", "reference angle", "general solution", "quadrant", "inverse trig"],
        formula: "sin t = k => t = arcsin(k) + 360n or (180-arcsin(k)) + 360n\ncos t = k => t = +/-arccos(k) + 360n\ntan t = k => t = arctan(k) + 180n",
        examTip: "Always check the domain given in the question (0 to 360, 0 to 2pi, etc.). List ALL solutions in the required range. If solving sin^2(t) type equations, factor first. Remember sin(t) must be between -1 and 1."
      },
      {
        title: "Area of a Triangle and Sine/Cosine Rules",
        content: "Area of a triangle:\nArea = (1/2) * a * b * sin C\nwhere a, b are two sides and C is the included angle.\n\nAlso: Area = (1/2) * base * height (when height is known)\n\nSine rule:\na/sinA = b/sinB = c/sinC\nUse when you know: an angle and its opposite side, plus one more piece.\n\nAmbiguous case of sine rule:\nWhen given two sides and a non-included angle (SSA), there may be 0, 1, or 2 triangles.\n\nCosine rule:\nc^2 = a^2 + b^2 - 2ab*cosC\nUse when you know: two sides and included angle (SAS), or all three sides (SSS).\n\nRearranged to find angle:\ncosC = (a^2 + b^2 - c^2) / (2ab)\n\nHero's formula (for area when all sides known):\ns = (a+b+c)/2\nArea = sqrt(s(s-a)(s-b)(s-c))",
        keyTerms: ["sine rule", "cosine rule", "area", "included angle", "ambiguous case", "Hero's formula"],
        formula: "Area = (1/2)ab*sinC\nSine rule: a/sinA = b/sinB = c/sinC\nCosine rule: c^2 = a^2 + b^2 - 2ab*cosC\ncosC = (a^2+b^2-c^2)/(2ab)\nHero: Area = sqrt(s(s-a)(s-b)(s-c)), s = (a+b+c)/2",
        examTip: "Choose the right rule: use sine rule when you have a side and its opposite angle, use cosine rule when you have SAS or SSS. The 2025 P2 Q6 covered cosine rule. Always draw and label the triangle clearly. Show substitution into the formula for marks."
      }
    ]
  },
  {
    topic: "Geometry Theorems",
    icon: "🔺",
    subtopics: [
      {
        title: "Theorems and Proofs",
        content: "You must know the statements of all theorems and be able to prove the examinable ones.\n\nExaminable proofs (you could be asked to prove these):\n- Theorem 11: If three parallel lines cut off equal segments on some transversal, they cut off equal segments on any other transversal\n- Theorem 12: Let ABC be a triangle. If a line l is parallel to BC and cuts [AB] in the ratio s:t, then it also cuts [AC] in the ratio s:t\n- Theorem 13: If two triangles are similar, then their sides are proportional in order\n\nOther key theorems:\n- Theorem 4: Angles in a triangle sum to 180 degrees\n- Theorem 6: Exterior angle = sum of two non-adjacent interior angles\n- Theorem 9: In a parallelogram, opposite sides are equal and opposite angles are equal\n- Theorem 14: [Pythagoras] In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides\n- Theorem 19: The angle at the centre is twice the angle at the circumference\n- Theorem 20: Angles in the same segment are equal\n- Theorem 21: A tangent to a circle is perpendicular to the radius at the point of contact",
        keyTerms: ["theorem", "proof", "parallel lines", "similar triangles", "Pythagoras", "circle theorems"],
        formula: "Pythagoras: a^2 + b^2 = c^2\nAngle sum: angles in triangle = 180\nExterior angle = sum of remote interior angles\nAngle at centre = 2 * angle at circumference",
        examTip: "The 3 examinable proofs (Theorems 11, 12, 13) are the most important to learn. Practise writing them out by hand. In the exam, you get a blank page -- every line of your proof earns marks. Use correct notation and refer to theorems by number."
      },
      {
        title: "Constructions",
        content: "You must be able to perform these constructions with a compass and straightedge:\n\n1. Bisect a line segment\n2. Bisect an angle\n3. Construct a line perpendicular to a given line at a point on it\n4. Construct a line perpendicular to a given line from a point not on it\n5. Construct a line parallel to a given line through a point\n6. Divide a line segment in a given ratio\n7. Construct the circumscribed circle (circumcircle) of a triangle\n8. Construct the inscribed circle (incircle) of a triangle\n9. Construct the centre of a given circle\n10. Construct a tangent to a circle from a point outside the circle\n\nKey facts:\n- The circumcentre (centre of circumscribed circle) is where the perpendicular bisectors of the sides meet\n- The incentre (centre of inscribed circle) is where the angle bisectors meet\n- The centroid (centre of mass) is where the medians meet",
        keyTerms: ["bisect", "perpendicular", "parallel", "circumscribed", "inscribed", "compass", "straightedge"],
        formula: "Circumcentre: intersection of perpendicular bisectors\nIncentre: intersection of angle bisectors\nCentroid: intersection of medians (divides each median 2:1)",
        examTip: "Construction questions are usually in Q5 of Paper 2. Show ALL construction lines -- do not erase them. Use a sharp pencil and make arcs clearly visible. You will lose marks if you just draw the answer without showing the construction method."
      }
    ]
  },
  {
    topic: "Probability",
    icon: "🎲",
    subtopics: [
      {
        title: "Probability Rules",
        content: "Basic probability:\nP(A) = number of favourable outcomes / total outcomes\n0 <= P(A) <= 1\nP(not A) = 1 - P(A)\n\nAddition rule:\nP(A or B) = P(A union B) = P(A) + P(B) - P(A intersection B)\nIf mutually exclusive: P(A or B) = P(A) + P(B)\n\nMultiplication rule:\nP(A and B) = P(A intersection B) = P(A) * P(B|A)\nIf independent: P(A and B) = P(A) * P(B)\n\nConditional probability:\nP(A|B) = P(A intersection B) / P(B)\n\nIndependence test:\nA and B are independent if and only if P(A intersection B) = P(A) * P(B)\n\nTree diagrams:\n- Multiply along branches for AND\n- Add between branches for OR\n\nSampling:\n- With replacement: probabilities stay the same\n- Without replacement: probabilities change (denominators decrease)",
        keyTerms: ["probability", "mutually exclusive", "independent", "conditional", "Venn diagram", "tree diagram"],
        formula: "P(A or B) = P(A) + P(B) - P(A intersection B)\nP(A and B) = P(A) * P(B|A)\nP(A|B) = P(A intersection B) / P(B)\nIndependence: P(A intersection B) = P(A) * P(B)",
        examTip: "The 2025 P2 Q3 used a Venn diagram with 240 people. Read Venn diagrams carefully -- the numbers inside intersections are ONLY the intersection, not the total for that set. Always show the independence test by comparing P(A intersection B) with P(A)*P(B)."
      },
      {
        title: "Bernoulli Trials and Binomial Distribution",
        content: "Bernoulli trial: an experiment with exactly two outcomes (success/failure).\n\nBinomial distribution B(n, p):\n- n independent Bernoulli trials\n- Probability of success = p (constant)\n- Probability of failure = q = 1 - p\n\nP(X = r) = C(n,r) * p^r * q^(n-r)\nwhere C(n,r) = n! / [r!(n-r)!]\n\nExpected value: E(X) = np\nVariance: Var(X) = npq\nStandard deviation: SD = sqrt(npq)\n\nExample:\nA fair coin is tossed 10 times. P(exactly 3 heads)?\nn = 10, p = 0.5, r = 3\nP(X=3) = C(10,3) * 0.5^3 * 0.5^7\n= 120 * 0.5^10\n= 120/1024\n= 15/128\napprox 0.117\n\nP(at least 1) = 1 - P(none) = 1 - P(X=0)\nThis is a very useful shortcut.",
        keyTerms: ["Bernoulli", "binomial", "trials", "success", "failure", "combinations", "expected value"],
        formula: "P(X=r) = C(n,r) * p^r * (1-p)^(n-r)\nC(n,r) = n! / [r!(n-r)!]\nE(X) = np\nVar(X) = np(1-p)\nP(at least 1) = 1 - P(X=0)",
        examTip: "Binomial questions appear in Section B (50 marks). To use it, check: fixed n, two outcomes, constant p, independent trials. For 'at least one' use the complement: 1 - P(none). Show the C(n,r) calculation explicitly."
      },
      {
        title: "Expected Value",
        content: "Expected value (mean) of a discrete random variable:\nE(X) = sum of [x * P(X = x)] for all values of x\n\nThis is the long-run average if the experiment is repeated many times.\n\nProperties:\n- E(aX + b) = aE(X) + b\n- E(X + Y) = E(X) + E(Y)\n- If X ~ B(n,p), then E(X) = np\n\nExample:\nA game costs 2 euro to play. You win 10 euro with probability 0.1, win 3 euro with probability 0.3, and win nothing with probability 0.6.\nE(winnings) = 10(0.1) + 3(0.3) + 0(0.6) = 1 + 0.9 + 0 = 1.90 euro\nE(profit) = E(winnings) - cost = 1.90 - 2 = -0.10 euro\nOn average, you lose 10 cent per game.\n\nFair game: E(profit) = 0",
        keyTerms: ["expected value", "mean", "fair game", "random variable", "long-run average"],
        formula: "E(X) = sum of x*P(X=x)\nE(aX + b) = aE(X) + b\nFair game: E(profit) = 0",
        examTip: "Expected value questions often involve real-world contexts (games, insurance, business). Set up a probability distribution table first. If asked whether a game is fair, calculate E(profit) -- if it is zero, the game is fair."
      }
    ]
  },
  {
    topic: "Statistics",
    icon: "📉",
    subtopics: [
      {
        title: "Distributions and the Normal Curve",
        content: "Normal distribution N(mean, SD^2):\n- Bell-shaped, symmetric about the mean\n- Mean = median = mode\n- Defined by two parameters: mean and standard deviation\n\nEmpirical rule (68-95-99.7):\n- 68% of data within mean +/- 1 SD\n- 95% of data within mean +/- 2 SDs\n- 99.7% of data within mean +/- 3 SDs\n\nStandardisation (z-score):\nz = (X - mean) / SD\n- z tells you how many standard deviations X is from the mean\n- Use z-tables (in Maths Tables booklet) to find probabilities\n\nUsing the z-table:\nP(Z < z) = value from table\nP(Z > z) = 1 - P(Z < z)\nP(a < Z < b) = P(Z < b) - P(Z < a)\n\nExample (2025 exam):\nMean = 400, SD = 60\nP(score > 420) = P(Z > (420-400)/60) = P(Z > 0.33) = 1 - 0.6293 = 0.37",
        keyTerms: ["normal distribution", "bell curve", "standard deviation", "z-score", "empirical rule", "standardisation"],
        formula: "z = (X - mean) / SD\nEmpirical: 68% within 1 SD, 95% within 2 SD, 99.7% within 3 SD\nP(Z > z) = 1 - P(Z < z)",
        examTip: "The 2025 P2 Q10 tested the empirical rule and z-scores. Always draw the normal curve and shade the area you need. Show the z-score calculation clearly. The z-tables are on pages 36-37 of the Maths Tables booklet."
      },
      {
        title: "Hypothesis Testing",
        content: "Hypothesis testing determines if sample data provides enough evidence against a claim about a population.\n\nSteps:\n1. State the hypotheses:\n   H0 (null): the claim to test (e.g., mean = 400)\n   H1 (alternative): what you suspect (e.g., mean != 400, or mean > 400)\n\n2. Choose significance level (alpha, usually 5% = 0.05)\n\n3. Calculate the test statistic:\n   z = (x_bar - mean0) / (SD / sqrt(n))\n\n4. Find the p-value:\n   One-tailed: p = P(Z > |z|)\n   Two-tailed: p = 2 * P(Z > |z|)\n\n5. Decision:\n   If p-value < alpha: REJECT H0 (result is statistically significant)\n   If p-value >= alpha: FAIL TO REJECT H0 (insufficient evidence)\n\n6. Write conclusion in context.\n\nExample (2025 exam):\nH0: mean = 400, H1: mean != 400 (two-tailed)\nx_bar = 403, SD = 70.6, n = 2724\nz = (403-400)/(70.6/sqrt(2724)) = 3/1.353 = 2.22\np-value = 2 * P(Z > 2.22) = 2 * 0.0132 = 0.0264\nSince 0.0264 < 0.05, reject H0.\nConclusion: Sufficient evidence that the mean differs from 400.",
        keyTerms: ["null hypothesis", "alternative hypothesis", "p-value", "significance level", "test statistic", "reject", "fail to reject"],
        formula: "z = (x_bar - mean0) / (SD / sqrt(n))\nOne-tailed p = P(Z > |z|)\nTwo-tailed p = 2 * P(Z > |z|)\nReject H0 if p < alpha",
        examTip: "Always state H0 and H1 first -- this earns marks on its own. The conclusion MUST be in context (don't just say 'reject H0' -- say what it means for the real-world situation). Never say 'accept H0' -- say 'fail to reject H0' or 'insufficient evidence'."
      },
      {
        title: "Confidence Intervals",
        content: "A confidence interval gives a range of plausible values for a population parameter.\n\n95% confidence interval for the population mean:\nx_bar +/- 1.96 * (SD / sqrt(n))\n\nInterpretation:\nIf we took many samples and built a 95% CI each time, about 95% of those intervals would contain the true population mean.\n\nMargin of error:\nE = z* * (SD / sqrt(n))\nwhere z* = 1.645 for 90%, 1.96 for 95%, 2.576 for 99%\n\nLarger sample size -> smaller margin of error -> narrower interval\n\nExample (2025 exam):\nx_bar = 387, SD = 66.2, n = 2161\n95% CI = 387 +/- 1.96 * (66.2/sqrt(2161))\n= 387 +/- 1.96 * 1.424\n= 387 +/- 2.79\n= (384.2, 389.8)\n\nThis means we are 95% confident the true population mean lies between 384.2 and 389.8.",
        keyTerms: ["confidence interval", "margin of error", "confidence level", "sample mean", "population mean"],
        formula: "95% CI: x_bar +/- 1.96 * (SD / sqrt(n))\nMargin of error: E = z* * SD / sqrt(n)\nz* values: 90%=1.645, 95%=1.96, 99%=2.576",
        examTip: "The 2025 P2 Q10 asked for a 95% CI. Always show: the formula, the substitution, and the final interval. State the confidence level and interpret in context. The z* value of 1.96 is on the Maths Tables booklet (or you can use 2 for a quick estimate)."
      }
    ]
  },
  {
    topic: "Length, Area & Volume",
    icon: "📏",
    subtopics: [
      {
        title: "Simpson's Rule",
        content: "Simpson's rule estimates the area under a curve using parabolic arcs.\n\nFormula (for n strips, where n must be EVEN):\nArea approx (h/3)[y0 + 4(y1+y3+y5+...) + 2(y2+y4+y6+...) + yn]\nwhere h = (b-a)/n = width of each strip\n\nSimplified pattern: coefficients are 1, 4, 2, 4, 2, 4, ..., 2, 4, 1\n\nFor 2 strips (3 ordinates):\nArea approx (h/3)(y0 + 4y1 + y2)\n\nFor 4 strips (5 ordinates):\nArea approx (h/3)(y0 + 4y1 + 2y2 + 4y3 + y4)\n\nSimpson's rule is more accurate than the trapezoidal rule because it fits parabolas instead of straight lines.\n\nNote: n must be even for Simpson's rule to work.",
        keyTerms: ["Simpson's rule", "numerical integration", "strips", "ordinates", "parabolic"],
        formula: "Area approx (h/3)[y0 + 4(odd ordinates) + 2(even ordinates) + yn]\nh = (b-a)/n\nCoefficients: 1, 4, 2, 4, 2, ..., 4, 1",
        examTip: "Simpson's rule is on the Maths Tables booklet. The most common error is getting the coefficients wrong (4, 2, 4, 2... pattern). Always set up a table of x and y values first. Count your ordinates -- you need an odd number of ordinates (even number of strips)."
      },
      {
        title: "Trapezoidal Rule",
        content: "The trapezoidal rule estimates the area under a curve using trapezoids.\n\nFormula:\nArea approx (h/2)[y0 + 2(y1 + y2 + ... + y(n-1)) + yn]\nwhere h = (b-a)/n = width of each strip\n\nFor 1 strip (2 ordinates):\nArea approx (h/2)(y0 + y1)\n\nFor 3 strips (4 ordinates):\nArea approx (h/2)(y0 + 2y1 + 2y2 + y3)\n\nCompared to Simpson's rule:\n- Trapezoidal rule works for any number of strips\n- Simpson's rule is more accurate but requires an even number of strips\n- Both rules become more accurate with more strips\n\nError:\n- Trapezoidal rule overestimates for concave up curves\n- Trapezoidal rule underestimates for concave down curves",
        keyTerms: ["trapezoidal rule", "trapezoid", "numerical integration", "strips", "ordinates"],
        formula: "Area approx (h/2)[y0 + 2(y1+y2+...+y(n-1)) + yn]\nh = (b-a)/n",
        examTip: "The trapezoidal rule is simpler than Simpson's rule. All interior ordinates get a coefficient of 2, and the first and last get 1. Set up a table of x and y values. Show your substitution clearly for full marks."
      },
      {
        title: "3D Shapes: Volume and Surface Area",
        content: "Sphere:\nVolume = (4/3) * pi * r^3\nSurface area = 4 * pi * r^2\n\nCylinder:\nVolume = pi * r^2 * h\nCurved surface area = 2 * pi * r * h\nTotal surface area = 2 * pi * r^2 + 2 * pi * r * h\n\nCone:\nVolume = (1/3) * pi * r^2 * h\nCurved surface area = pi * r * l (l = slant height)\nTotal surface area = pi * r^2 + pi * r * l\nSlant height: l = sqrt(r^2 + h^2)\n\nHemisphere:\nVolume = (2/3) * pi * r^3\nCurved surface area = 2 * pi * r^2\n\nPrism:\nVolume = area of cross-section * length\n\n3D Pythagoras:\nDiagonal of cuboid: d = sqrt(l^2 + w^2 + h^2)\n\nSimilar solids:\nIf scale factor = k:\n- Lengths scale by k\n- Areas scale by k^2\n- Volumes scale by k^3",
        keyTerms: ["sphere", "cylinder", "cone", "hemisphere", "prism", "slant height", "similar solids"],
        formula: "Sphere: V = (4/3)pi*r^3, SA = 4pi*r^2\nCylinder: V = pi*r^2*h, SA = 2pi*r^2 + 2pi*r*h\nCone: V = (1/3)pi*r^2*h, CSA = pi*r*l\nSimilar: lengths*k, areas*k^2, volumes*k^3\n3D diagonal: d = sqrt(l^2+w^2+h^2)",
        examTip: "These formulas are ALL on the Maths Tables booklet. The 2025 P2 Q7 combined Pythagoras in 3D with volumes. Always draw a clear diagram, label dimensions, and state which formula you are using. For composite shapes, break them into standard parts."
      }
    ]
  }
];

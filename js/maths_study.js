var STUDY_MATHS = [
{
    topic: "Algebra",
    icon: "🔢",
    subtopics: [
      {
        title: "Indices (Laws of Exponents)",
        content:
          "Indices (or exponents) tell you how many times a base is multiplied by itself. " +
          "The basic laws are: a^m * a^n = a^(m+n), a^m / a^n = a^(m-n), (a^m)^n = a^(m*n), a^0 = 1 (for a != 0), a^(-n) = 1/a^n, and a^(m/n) = n-th root of a^m. " +
          "For example, 2^3 * 2^5 = 2^(3+5) = 2^8 = 256. Similarly, 5^7 / 5^4 = 5^(7-4) = 5^3 = 125. " +
          "A fractional index like 8^(2/3) means the cube root of 8 squared: cube root of 8 is 2, so 2^2 = 4. " +
          "Negative indices flip to the denominator: 3^(-2) = 1/3^2 = 1/9. " +
          "When simplifying expressions, collect like bases and add or subtract exponents. " +
          "Example: Simplify (2x^3 y^2)^4. Apply the power to each factor: 2^4 * x^(3*4) * y^(2*4) = 16 x^12 y^8. " +
          "For equations, rewrite both sides with the same base. Solve 4^x = 8: write as (2^2)^x = 2^3, so 2^(2x) = 2^3, giving 2x = 3, x = 3/2. " +
          "The product (ab)^n = a^n * b^n and (a/b)^n = a^n / b^n are also essential. " +
          "When dealing with surds, remember sqrt(a) = a^(1/2) and cube root(a) = a^(1/3). " +
          "To rationalise a denominator like 1/sqrt(5), multiply top and bottom by sqrt(5) to get sqrt(5)/5. " +
          "For 1/(sqrt(3) + 1), multiply by the conjugate (sqrt(3) - 1)/(sqrt(3) - 1) to get (sqrt(3) - 1)/(3 - 1) = (sqrt(3) - 1)/2. " +
          "Worked example: Solve 9^(x+1) = 27^x. Rewrite as (3^2)^(x+1) = (3^3)^x, so 3^(2x+2) = 3^(3x). Equate exponents: 2x + 2 = 3x, giving x = 2. " +
          "Verify: 9^3 = 729 and 27^2 = 729. Correct. " +
          "Common mistakes: forgetting that a^0 = 1 (not 0), confusing (a^m)^n with a^m * a^n, and mishandling negative exponents. " +
          "In LC HL, indices appear in solving exponential equations, simplifying algebraic fractions, and as groundwork for logarithms."
      },
      {
        title: "Logarithms",
        content:
          "A logarithm answers the question: to what power must the base be raised to get a given number? log_a(x) = n means a^n = x. " +
          "Key rules: log_a(xy) = log_a(x) + log_a(y), log_a(x/y) = log_a(x) - log_a(y), log_a(x^n) = n * log_a(x), log_a(a) = 1, log_a(1) = 0. " +
          "The change of base formula: log_a(x) = log_b(x) / log_b(a). This lets you evaluate any log using your calculator's log (base 10) or ln (base e). " +
          "Example: Find log_2(32). Since 2^5 = 32, log_2(32) = 5. " +
          "Example: Solve log_3(x) = 4. Rewrite as x = 3^4 = 81. " +
          "Example: Solve log(x) + log(x - 3) = 1 (base 10). Combine: log(x(x - 3)) = 1, so x(x - 3) = 10, giving x^2 - 3x - 10 = 0. Factor: (x - 5)(x + 2) = 0. Since x must be positive (domain of log), x = 5. " +
          "Verify: log(5) + log(2) = log(10) = 1. Correct. " +
          "Natural logarithm: ln(x) = log_e(x) where e = 2.71828... The rules are the same. " +
          "The inverse relationship: if y = a^x then x = log_a(y). The graph of y = log_a(x) is the reflection of y = a^x in the line y = x. " +
          "For y = log_a(x): domain is x > 0, range is all real numbers, it passes through (1, 0) and (a, 1), and has a vertical asymptote at x = 0. " +
          "Solving exponential equations with logs: Solve 5^x = 20. Take log of both sides: x * log(5) = log(20), so x = log(20)/log(5) = 1.301/0.699 = 1.861 (approx). " +
          "Worked example: Solve 2^(3x-1) = 7. Take log: (3x - 1) * log(2) = log(7). So 3x - 1 = log(7)/log(2) = 0.845/0.301 = 2.807. Then 3x = 3.807, x = 1.269 (approx). " +
          "Equations with logs on both sides: log_2(x + 3) = log_2(7). Since the bases match and log is one-to-one, x + 3 = 7, so x = 4. " +
          "Common mistakes: trying to take log of a negative number, forgetting to check domain restrictions, and incorrectly splitting log(x + y) as log(x) + log(y) (this is WRONG). " +
          "The log of a sum cannot be simplified: log(a + b) != log(a) + log(b). Only products go to sums."
      },
      {
        title: "Simultaneous Equations",
        content:
          "Simultaneous equations are two or more equations that share variables and must be solved together. " +
          "For two linear equations: use substitution or elimination. " +
          "Elimination example: Solve 3x + 2y = 12 and 5x - 2y = 4. Add the equations: 8x = 16, so x = 2. Substitute back: 6 + 2y = 12, y = 3. Solution: (2, 3). " +
          "Substitution example: Solve y = 2x + 1 and 3x + y = 11. Replace y: 3x + (2x + 1) = 11, so 5x = 10, x = 2, y = 5. " +
          "For three linear equations in three unknowns (x, y, z): eliminate one variable from two pairs of equations to reduce to two equations in two unknowns, then solve as above. " +
          "Example: x + y + z = 6, 2x - y + z = 3, x + 2y - z = 5. From equations 1 and 3: add them: 2x + 3y = 11. From equations 1 and 2: subtract eq1 from eq2: x - 2y = -3. Now solve 2x + 3y = 11 and x - 2y = -3. From the second: x = 2y - 3. Substitute: 2(2y - 3) + 3y = 11, 4y - 6 + 3y = 11, 7y = 17, y = 17/7. Then x = 2(17/7) - 3 = 34/7 - 21/7 = 13/7. And z = 6 - 13/7 - 17/7 = 42/7 - 30/7 = 12/7. " +
          "One linear and one quadratic (very common in LC HL): solve the linear equation for one variable and substitute into the quadratic. " +
          "Example: Solve y = x + 1 and x^2 + y^2 = 25. Substitute: x^2 + (x + 1)^2 = 25. Expand: x^2 + x^2 + 2x + 1 = 25, so 2x^2 + 2x - 24 = 0, x^2 + x - 12 = 0, (x + 4)(x - 3) = 0. So x = -4, y = -3 or x = 3, y = 4. " +
          "Geometrically, this finds where a line intersects a circle (two points, one point if tangent, or no real solutions if they don't meet). " +
          "The discriminant b^2 - 4ac of the resulting quadratic tells you: > 0 means two intersection points, = 0 means one (tangent), < 0 means no intersection. " +
          "Example: For what values of k does y = x + k meet x^2 + y^2 = 9? Substitute: x^2 + (x+k)^2 = 9, so 2x^2 + 2kx + k^2 - 9 = 0. Discriminant = 4k^2 - 8(k^2 - 9) = 4k^2 - 8k^2 + 72 = -4k^2 + 72 >= 0, so k^2 <= 18, meaning -3*sqrt(2) <= k <= 3*sqrt(2). " +
          "Always check your solutions by substituting back into BOTH original equations. " +
          "In LC HL, simultaneous equations often appear with coordinate geometry (line meets curve) and in applied contexts."
      },
      {
        title: "Inequalities",
        content:
          "An inequality states that one expression is greater than (or less than) another. The symbols are: > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to). " +
          "Linear inequalities: solve like equations but REVERSE the inequality sign when you multiply or divide by a negative number. " +
          "Example: Solve 3x - 7 > 2. Add 7: 3x > 9. Divide by 3: x > 3. Solution set: x in (3, infinity). " +
          "Example: Solve -2x + 5 <= 11. Subtract 5: -2x <= 6. Divide by -2 (REVERSE the sign): x >= -3. " +
          "Compound inequalities: Solve 2 < 3x + 1 <= 10. Subtract 1 from all parts: 1 < 3x <= 9. Divide by 3: 1/3 < x <= 3. " +
          "Quadratic inequalities: first solve the corresponding equation, then test intervals. " +
          "Example: Solve x^2 - 5x + 6 > 0. Factor: (x - 2)(x - 3) > 0. The roots are x = 2 and x = 3. Test intervals: for x < 2, both factors are negative, product is positive (YES). For 2 < x < 3, factors have opposite signs, product is negative (NO). For x > 3, both positive (YES). Solution: x < 2 or x > 3. " +
          "Alternatively, since the coefficient of x^2 is positive, the parabola opens upward and is positive OUTSIDE the roots. " +
          "Example: Solve x^2 + 4x - 5 <= 0. Factor: (x + 5)(x - 1) <= 0. Roots are x = -5 and x = 1. Parabola opens upward, so it's negative (or zero) BETWEEN the roots: -5 <= x <= 1. " +
          "For rational inequalities like (x - 1)/(x + 2) > 0: find critical values (x = 1 and x = -2) and test intervals. At x = -2 the expression is undefined. Test: x < -2 gives negative/negative = positive (YES). -2 < x < 1 gives negative/positive = negative (NO). x > 1 gives positive/positive = positive (YES). Solution: x < -2 or x > 1. " +
          "When graphing: use an open circle for strict inequalities (< or >) and a filled circle for inclusive (<=, >=). " +
          "Modulus (absolute value) inequalities: |x - a| < b means a - b < x < a + b. |x - a| > b means x < a - b or x > a + b. " +
          "Example: Solve |2x - 3| <= 7. This means -7 <= 2x - 3 <= 7, so -4 <= 2x <= 10, giving -2 <= x <= 5. " +
          "Example: Solve |x + 1| > 4. This means x + 1 > 4 or x + 1 < -4, so x > 3 or x < -5. " +
          "In LC HL, inequalities are used in finding ranges for which quadratics have real roots (discriminant >= 0), domain restrictions, and optimisation problems."
      },
      {
        title: "Factor Theorem and Polynomial Division",
        content:
          "The Factor Theorem states: if f(a) = 0 then (x - a) is a factor of f(x). Conversely, if (x - a) is a factor of f(x) then f(a) = 0. " +
          "The Remainder Theorem states: when f(x) is divided by (x - a), the remainder is f(a). " +
          "To factorise a cubic f(x) = ax^3 + bx^2 + cx + d: first find a root by testing simple values (try x = 1, -1, 2, -2, 3, -3, and fractions if needed). Then divide by (x - root) to get a quadratic, and factorise the quadratic. " +
          "Example: Factorise f(x) = x^3 - 6x^2 + 11x - 6. Test x = 1: f(1) = 1 - 6 + 11 - 6 = 0. So (x - 1) is a factor. " +
          "Divide x^3 - 6x^2 + 11x - 6 by (x - 1) using long division or synthetic division: " +
          "Synthetic division with root 1: bring down 1. Multiply 1*1=1, add to -6 to get -5. Multiply 1*(-5)=-5, add to 11 to get 6. Multiply 1*6=6, add to -6 to get 0 (remainder). " +
          "Quotient: x^2 - 5x + 6 = (x - 2)(x - 3). So f(x) = (x - 1)(x - 2)(x - 3). " +
          "Example: Factorise 2x^3 + 3x^2 - 8x + 3. Test x = 1: 2 + 3 - 8 + 3 = 0. So (x - 1) is a factor. " +
          "Synthetic division with root 1: coefficients [2, 3, -8, 3]. Bring down 2. 2*1=2, add to 3 gives 5. 5*1=5, add to -8 gives -3. -3*1=-3, add to 3 gives 0. " +
          "Quotient: 2x^2 + 5x - 3 = (2x - 1)(x + 3). So f(x) = (x - 1)(2x - 1)(x + 3). " +
          "Polynomial long division works like numerical long division. Divide the leading term of the dividend by the leading term of the divisor, multiply back, subtract, bring down, repeat. " +
          "Example: Divide x^3 + 2x^2 - 5x - 6 by (x + 1). First term: x^3/x = x^2. Multiply (x+1) by x^2 = x^3 + x^2. Subtract: (x^3 + 2x^2) - (x^3 + x^2) = x^2. Bring down -5x: x^2 - 5x. Next term: x^2/x = x. Multiply: x^2 + x. Subtract: (x^2 - 5x) - (x^2 + x) = -6x. Bring down -6: -6x - 6. Next term: -6x/x = -6. Multiply: -6x - 6. Subtract: 0. So quotient is x^2 + x - 6 = (x + 3)(x - 2). " +
          "For LC HL, when asked to solve a cubic equation: find one root by the factor theorem, divide to get a quadratic, then solve the quadratic (by factoring or the formula). " +
          "The roots of a polynomial can also be found using relationships between roots and coefficients. For ax^3 + bx^2 + cx + d = 0 with roots p, q, r: p + q + r = -b/a, pq + pr + qr = c/a, pqr = -d/a. " +
          "Example: If f(x) = x^3 - 7x + 6, find the roots. f(1) = 1 - 7 + 6 = 0, so (x - 1) is a factor. Divide to get x^2 + x - 6 = (x + 3)(x - 2). Roots are 1, 2, -3. Check sum: 1 + 2 + (-3) = 0 = -0/1 (coefficient of x^2 is 0). Correct."
      },
      {
        title: "Algebraic Fractions and Expressions",
        content:
          "Algebraic fractions follow the same rules as numerical fractions. To add or subtract, find the lowest common denominator (LCD). " +
          "Example: 1/(x+1) + 2/(x-1). LCD is (x+1)(x-1). Rewrite: (x-1)/((x+1)(x-1)) + 2(x+1)/((x+1)(x-1)) = (x - 1 + 2x + 2)/((x+1)(x-1)) = (3x + 1)/(x^2 - 1). " +
          "To multiply fractions: multiply numerators and denominators, then simplify. (x^2 - 4)/(x + 3) * (x + 3)/(x + 2) = (x^2 - 4)/(x + 2) = (x - 2)(x + 2)/(x + 2) = x - 2 (provided x != -2). " +
          "To divide: multiply by the reciprocal. (a/b) / (c/d) = (a/b) * (d/c) = ad/(bc). " +
          "Always factor numerators and denominators fully before cancelling. Common factorisations: a^2 - b^2 = (a-b)(a+b), a^2 + 2ab + b^2 = (a+b)^2, a^3 - b^3 = (a-b)(a^2 + ab + b^2). " +
          "Example: Simplify (x^2 - 9)/(x^2 + 5x + 6). Numerator: (x-3)(x+3). Denominator: (x+2)(x+3). Cancel (x+3): result is (x-3)/(x+2), provided x != -3. " +
          "Partial fractions: to express a proper fraction with a factorable denominator as a sum of simpler fractions. " +
          "Example: Write (3x + 5)/((x+1)(x+2)) in partial fractions. Set (3x+5)/((x+1)(x+2)) = A/(x+1) + B/(x+2). Multiply both sides by (x+1)(x+2): 3x + 5 = A(x+2) + B(x+1). " +
          "Let x = -1: 3(-1) + 5 = A(1) + B(0), so 2 = A. Let x = -2: 3(-2) + 5 = A(0) + B(-1), so -1 = -B, B = 1. " +
          "Result: 2/(x+1) + 1/(x+2). Verify by adding back: (2(x+2) + 1(x+1))/((x+1)(x+2)) = (2x + 4 + x + 1)/((x+1)(x+2)) = (3x + 5)/((x+1)(x+2)). Correct. " +
          "For a repeated root like (2x + 1)/(x+1)^2: set equal to A/(x+1) + B/(x+1)^2. Multiply by (x+1)^2: 2x + 1 = A(x+1) + B. Let x = -1: -1 = B. Expand: 2x + 1 = Ax + A + B. Compare x terms: A = 2. So result is 2/(x+1) + (-1)/(x+1)^2. " +
          "Cross-multiplying is useful for equations: if a/b = c/d, then ad = bc. " +
          "State restrictions on the variable (values that make any denominator zero are excluded from the domain). " +
          "In LC HL, algebraic fractions appear in solving equations, integration by partial fractions, and simplifying complex expressions."
      },
      {
        title: "The Quadratic Formula and Discriminant",
        content:
          "The general quadratic equation is ax^2 + bx + c = 0 (a != 0). The quadratic formula gives: x = (-b +/- sqrt(b^2 - 4ac)) / (2a). " +
          "The discriminant is Delta = b^2 - 4ac. It determines the nature of the roots: if Delta > 0, two distinct real roots. If Delta = 0, one repeated (double) real root. If Delta < 0, no real roots (two complex conjugate roots). " +
          "Example: Solve 2x^2 - 7x + 3 = 0. a = 2, b = -7, c = 3. Delta = 49 - 24 = 25 > 0. x = (7 +/- 5)/4. So x = 12/4 = 3 or x = 2/4 = 1/2. " +
          "Example: Solve x^2 + 4x + 4 = 0. Delta = 16 - 16 = 0. x = -4/2 = -2 (repeated root). This is a perfect square: (x + 2)^2 = 0. " +
          "Example: Solve x^2 + 2x + 5 = 0. Delta = 4 - 20 = -16 < 0. No real roots. Complex roots: x = (-2 +/- sqrt(-16))/2 = (-2 +/- 4i)/2 = -1 +/- 2i. " +
          "Sum of roots: alpha + beta = -b/a. Product of roots: alpha * beta = c/a. These are useful for forming equations from given roots. " +
          "Example: Find a quadratic equation whose roots are 3 and -5. Sum = -2, product = -15. Equation: x^2 - (sum)x + (product) = 0, so x^2 + 2x - 15 = 0. " +
          "Completing the square: x^2 + bx = (x + b/2)^2 - (b/2)^2. This is used to derive the quadratic formula and to find the vertex of a parabola. " +
          "Example: Write x^2 + 6x + 2 in completed square form. x^2 + 6x = (x + 3)^2 - 9. So x^2 + 6x + 2 = (x + 3)^2 - 7. Minimum value is -7, occurring at x = -3. " +
          "For 2x^2 + 12x + 5: factor out 2 from the x terms: 2(x^2 + 6x) + 5 = 2((x + 3)^2 - 9) + 5 = 2(x + 3)^2 - 18 + 5 = 2(x + 3)^2 - 13. Minimum is -13 at x = -3. " +
          "The graph of y = ax^2 + bx + c is a parabola. If a > 0, it opens upward (minimum). If a < 0, it opens downward (maximum). The vertex (turning point) is at x = -b/(2a). " +
          "To find the range of values of k for which a quadratic equation has real roots, set Delta >= 0 and solve the resulting inequality. " +
          "Example: For what values of k does kx^2 + 4x + 1 = 0 have real roots? Delta = 16 - 4k >= 0, so k <= 4. Also k != 0 (otherwise not quadratic). " +
          "Quadratic equations are foundational to LC Maths and appear throughout the course."
      }
    ]
  },

  {
    topic: "Complex Numbers",
    icon: "🌀",
    subtopics: [
      {
        title: "Introduction to Complex Numbers",
        content:
          "A complex number has the form z = a + bi, where a is the real part (Re(z)) and b is the imaginary part (Im(z)), and i = sqrt(-1), so i^2 = -1. " +
          "Addition: (a + bi) + (c + di) = (a + c) + (b + d)i. Subtraction: (a + bi) - (c + di) = (a - c) + (b - d)i. " +
          "Multiplication: (a + bi)(c + di) = ac + adi + bci + bdi^2 = (ac - bd) + (ad + bc)i. " +
          "Example: (3 + 2i)(1 - 4i) = 3 - 12i + 2i - 8i^2 = 3 - 10i + 8 = 11 - 10i. " +
          "The conjugate of z = a + bi is z* = a - bi (written with a bar or star). The product z * z* = a^2 + b^2 (always real and non-negative). " +
          "Division: to divide by a complex number, multiply numerator and denominator by the conjugate. " +
          "Example: (2 + 3i)/(1 - i). Multiply by (1 + i)/(1 + i): numerator = (2 + 3i)(1 + i) = 2 + 2i + 3i + 3i^2 = 2 + 5i - 3 = -1 + 5i. Denominator = (1 - i)(1 + i) = 1 + 1 = 2. Result: (-1 + 5i)/2 = -1/2 + 5i/2. " +
          "The modulus of z = a + bi is |z| = sqrt(a^2 + b^2). Example: |3 + 4i| = sqrt(9 + 16) = sqrt(25) = 5. " +
          "Equality: a + bi = c + di if and only if a = c and b = d. This is called equating real and imaginary parts and is a key technique for solving equations. " +
          "Powers of i cycle: i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1, i^5 = i, etc. To find i^n, divide n by 4 and use the remainder. " +
          "Example: i^27 = i^(4*6 + 3) = (i^4)^6 * i^3 = 1 * (-i) = -i. " +
          "Solving quadratic equations with complex roots: for x^2 + 2x + 5 = 0, Delta = 4 - 20 = -16. x = (-2 +/- sqrt(-16))/2 = (-2 +/- 4i)/2 = -1 +/- 2i. " +
          "Note that complex roots of polynomials with real coefficients always come in conjugate pairs. If 2 + 3i is a root, then 2 - 3i is also a root."
      },
      {
        title: "The Argand Diagram",
        content:
          "The Argand diagram represents complex numbers as points (or vectors) in a plane. The horizontal axis is the real axis and the vertical axis is the imaginary axis. " +
          "The complex number z = a + bi is plotted at the point (a, b). For example, 3 + 2i is at (3, 2) and -1 - 4i is at (-1, -4). " +
          "The modulus |z| = sqrt(a^2 + b^2) is the distance from the origin to the point z. " +
          "The argument arg(z) is the angle theta that the line from the origin to z makes with the positive real axis, measured anticlockwise. " +
          "For z = a + bi: tan(theta) = b/a. Use the correct quadrant. For a > 0, theta = arctan(b/a). For a < 0, adjust by +/- pi. " +
          "Example: z = 1 + i. |z| = sqrt(2). arg(z) = arctan(1/1) = pi/4 (or 45 degrees). " +
          "Example: z = -1 + sqrt(3)i. |z| = sqrt(1 + 3) = 2. arctan(sqrt(3)/(-1)) = arctan(-sqrt(3)). Since a < 0, b > 0 (second quadrant), arg(z) = pi - pi/3 = 2pi/3 (or 120 degrees). " +
          "Addition on the Argand diagram: z1 + z2 follows the parallelogram rule (like vector addition). " +
          "The conjugate z* is the reflection of z in the real axis. If z = (3, 2) then z* = (3, -2). " +
          "|z1 - z2| represents the distance between the points z1 and z2 on the Argand diagram. This is hugely important for locus problems. " +
          "Locus: |z - (a + bi)| = r describes a circle with centre (a, b) and radius r. Example: |z - (2 + 3i)| = 5 is a circle centred at (2, 3) with radius 5. " +
          "|z - z1| = |z - z2| describes the perpendicular bisector of the line segment joining z1 and z2. " +
          "Example: |z - (1 + 2i)| = |z - (3 - 4i)| is the perpendicular bisector of the segment from (1, 2) to (3, -4). " +
          "arg(z - z1) = theta describes a half-line (ray) from z1 at angle theta to the positive real direction. " +
          "These geometric interpretations are frequently examined in LC HL. Always draw a clear Argand diagram when solving these problems."
      },
      {
        title: "Polar Form and De Moivre's Theorem",
        content:
          "A complex number z = a + bi can be written in polar (trigonometric) form: z = r(cos(theta) + i*sin(theta)), where r = |z| and theta = arg(z). " +
          "Often abbreviated as z = r*cis(theta). Here cis(theta) means cos(theta) + i*sin(theta). " +
          "Example: z = 1 + i has r = sqrt(2), theta = pi/4. Polar form: sqrt(2) * cis(pi/4). " +
          "Multiplication in polar form: z1 * z2 = r1 * r2 * cis(theta1 + theta2). You multiply the moduli and add the arguments. " +
          "Division: z1/z2 = (r1/r2) * cis(theta1 - theta2). You divide the moduli and subtract the arguments. " +
          "Example: z1 = 2*cis(pi/3), z2 = 3*cis(pi/6). z1 * z2 = 6*cis(pi/3 + pi/6) = 6*cis(pi/2) = 6(cos(pi/2) + i*sin(pi/2)) = 6i. " +
          "De Moivre's Theorem: [r*cis(theta)]^n = r^n * cis(n*theta) for any integer n. " +
          "This is extremely powerful for finding powers and roots of complex numbers. " +
          "Example: Find (1 + i)^8. First convert: |1 + i| = sqrt(2), arg = pi/4. So (1 + i) = sqrt(2)*cis(pi/4). " +
          "(1 + i)^8 = (sqrt(2))^8 * cis(8 * pi/4) = 2^4 * cis(2*pi) = 16 * (cos(2*pi) + i*sin(2*pi)) = 16(1 + 0i) = 16. " +
          "Example: Find (sqrt(3) + i)^6. |z| = sqrt(3 + 1) = 2, arg = arctan(1/sqrt(3)) = pi/6. So z = 2*cis(pi/6). " +
          "z^6 = 2^6 * cis(6 * pi/6) = 64 * cis(pi) = 64(-1 + 0i) = -64. " +
          "De Moivre's Theorem also works for negative powers: z^(-n) = r^(-n) * cis(-n*theta). " +
          "For proving trigonometric identities using De Moivre: expand cis(n*theta) = (cos(theta) + i*sin(theta))^n using the binomial theorem and equate real and imaginary parts. " +
          "Example: cos(2*theta) + i*sin(2*theta) = (cos(theta) + i*sin(theta))^2 = cos^2(theta) - sin^2(theta) + 2i*sin(theta)*cos(theta). Equating real parts: cos(2*theta) = cos^2(theta) - sin^2(theta). Equating imaginary parts: sin(2*theta) = 2*sin(theta)*cos(theta)."
      },
      {
        title: "Roots of Complex Numbers and Roots of Unity",
        content:
          "To find the n-th roots of a complex number w = R*cis(phi), use: z = R^(1/n) * cis((phi + 2k*pi)/n) for k = 0, 1, 2, ..., n-1. " +
          "This gives exactly n distinct roots, equally spaced around a circle of radius R^(1/n) on the Argand diagram. " +
          "The n-th roots of unity are the solutions of z^n = 1 (i.e., w = 1, so R = 1, phi = 0). They are: z_k = cis(2k*pi/n) for k = 0, 1, ..., n-1. " +
          "Example: Find the cube roots of unity (n = 3). z_0 = cis(0) = 1. z_1 = cis(2*pi/3) = cos(120) + i*sin(120) = -1/2 + i*sqrt(3)/2. z_2 = cis(4*pi/3) = cos(240) + i*sin(240) = -1/2 - i*sqrt(3)/2. " +
          "These three points form an equilateral triangle inscribed in the unit circle. " +
          "The cube roots of unity are often denoted 1, omega, omega^2 where omega = cis(2*pi/3). Key property: 1 + omega + omega^2 = 0. Also omega^3 = 1. " +
          "Example: Find the square roots of i. Write i = cis(pi/2). Square roots: z = cis(pi/4) and z = cis(pi/4 + pi) = cis(5*pi/4). " +
          "So z = cos(45) + i*sin(45) = sqrt(2)/2 + i*sqrt(2)/2, or z = cos(225) + i*sin(225) = -sqrt(2)/2 - i*sqrt(2)/2. " +
          "Verify: (sqrt(2)/2 + i*sqrt(2)/2)^2 = 1/2 + 2*(sqrt(2)/2)*(sqrt(2)/2)*i + i^2*(1/2) = 1/2 + i - 1/2 = i. Correct. " +
          "Example: Find the fourth roots of -16. Write -16 = 16*cis(pi). Fourth roots: z = 16^(1/4) * cis((pi + 2k*pi)/4) = 2*cis((pi + 2k*pi)/4) for k = 0,1,2,3. " +
          "k=0: 2*cis(pi/4) = 2(sqrt(2)/2 + i*sqrt(2)/2) = sqrt(2) + i*sqrt(2). k=1: 2*cis(3*pi/4) = -sqrt(2) + i*sqrt(2). k=2: 2*cis(5*pi/4) = -sqrt(2) - i*sqrt(2). k=3: 2*cis(7*pi/4) = sqrt(2) - i*sqrt(2). " +
          "These four roots form a square on the Argand diagram, inscribed in a circle of radius 2. " +
          "Key result: the sum of all n-th roots of unity is 0. The product of the n-th roots of unity is (-1)^(n+1). " +
          "In LC HL, you may be asked to: find n-th roots, plot them, show they form a regular polygon, or use properties of roots of unity to simplify expressions. " +
          "The primitive n-th root of unity is omega = cis(2*pi/n). All other roots are powers of omega."
      },
      {
        title: "Solving Equations with Complex Numbers",
        content:
          "To solve z^2 = a + bi by algebraic method: let z = x + yi, then (x + yi)^2 = x^2 - y^2 + 2xyi = a + bi. Equate real and imaginary parts: x^2 - y^2 = a and 2xy = b. " +
          "Example: Solve z^2 = 3 + 4i. Let z = x + yi. Then x^2 - y^2 = 3 and 2xy = 4, so xy = 2 and y = 2/x. " +
          "Substitute: x^2 - 4/x^2 = 3. Multiply by x^2: x^4 - 3x^2 - 4 = 0. Let u = x^2: u^2 - 3u - 4 = 0, (u - 4)(u + 1) = 0. Since u = x^2 >= 0, u = 4, so x = 2 or x = -2. " +
          "If x = 2: y = 2/2 = 1. If x = -2: y = 2/(-2) = -1. Solutions: z = 2 + i or z = -2 - i. " +
          "Verify: (2 + i)^2 = 4 + 4i + i^2 = 4 + 4i - 1 = 3 + 4i. Correct. " +
          "For polynomial equations with real coefficients: complex roots come in conjugate pairs. If you know one complex root, you immediately know another. " +
          "Example: Solve x^3 - 4x^2 + 6x - 4 = 0 given that 1 + i is a root. Then 1 - i is also a root. " +
          "The quadratic factor from these roots: (x - (1+i))(x - (1-i)) = ((x-1) - i)((x-1) + i) = (x-1)^2 + 1 = x^2 - 2x + 2. " +
          "Divide x^3 - 4x^2 + 6x - 4 by x^2 - 2x + 2 to get x - 2. So the roots are 1+i, 1-i, and 2. " +
          "For z^n = w type equations, always use the polar form method described in the Roots section. " +
          "When solving |z - z1| = |z - z2| on the Argand diagram, square both sides to avoid the square root: (x-a1)^2 + (y-b1)^2 = (x-a2)^2 + (y-b2)^2, then simplify to get a linear equation (perpendicular bisector). " +
          "Example: |z - (2 + i)| = |z - (4 + 3i)|. Square: (x-2)^2 + (y-1)^2 = (x-4)^2 + (y-3)^2. Expand: x^2 - 4x + 4 + y^2 - 2y + 1 = x^2 - 8x + 16 + y^2 - 6y + 9. Simplify: 4x + 4y = 20, so x + y = 5. " +
          "The condition for z to lie on a circle |z - c| = r can be expanded to x^2 + y^2 - 2*Re(c)*x - 2*Im(c)*y + |c|^2 - r^2 = 0. " +
          "In LC HL, complex number equations combine algebra, geometry, and trigonometry. Practice all three approaches: algebraic (equating real/imaginary parts), geometric (Argand diagram), and polar (De Moivre)."
      }
    ]
  },

  {
    topic: "Functions",
    icon: "📈",
    subtopics: [
      {
        title: "Domain, Range, and Function Notation",
        content:
          "A function f: A -> B is a rule that assigns to each element x in the domain A exactly one element f(x) in the codomain B. The range (or image) is the set of all actual output values. " +
          "The domain is the set of all valid inputs. For real functions, we look for values of x where the function is defined. " +
          "Restrictions: (1) Cannot divide by zero: for f(x) = 1/(x-3), domain is all reals except x = 3. (2) Cannot take sqrt of a negative: for f(x) = sqrt(x - 2), domain is x >= 2. (3) Cannot take log of zero or negative: for f(x) = ln(x + 1), domain is x > -1. " +
          "Example: f(x) = (x + 1)/((x - 2)(x + 3)). Domain: all reals except x = 2 and x = -3. " +
          "Example: f(x) = sqrt(9 - x^2). Need 9 - x^2 >= 0, so x^2 <= 9, giving -3 <= x <= 3. Domain: [-3, 3]. Range: [0, 3] since sqrt produces non-negative values and the max is sqrt(9) = 3. " +
          "Evaluating functions: if f(x) = 3x^2 - 2x + 1, then f(2) = 3(4) - 2(2) + 1 = 12 - 4 + 1 = 9. f(-1) = 3(1) - 2(-1) + 1 = 3 + 2 + 1 = 6. f(a+1) = 3(a+1)^2 - 2(a+1) + 1 = 3(a^2 + 2a + 1) - 2a - 2 + 1 = 3a^2 + 6a + 3 - 2a - 1 = 3a^2 + 4a + 2. " +
          "The range of f(x) = x^2 is [0, infinity) because x^2 is never negative. The range of f(x) = x^2 + 3 is [3, infinity). " +
          "For quadratics: the range depends on whether it opens up or down. For f(x) = -(x-1)^2 + 4, maximum value is 4, so range is (-infinity, 4]. " +
          "The graph of y = f(x) passes the vertical line test: every vertical line intersects it at most once. If a graph fails this test, it is not a function. " +
          "Piecewise functions are defined by different rules on different intervals. Example: f(x) = x^2 if x < 0, 2x + 1 if x >= 0. Then f(-3) = 9 and f(2) = 5. " +
          "The natural domain of a function is the largest set of real numbers for which the function is defined. " +
          "In LC HL, clearly stating the domain and range is often required and can earn marks even if the rest of a question is not fully complete."
      },
      {
        title: "Injective, Surjective, and Bijective Functions",
        content:
          "A function f: A -> B is injective (one-to-one) if different inputs always produce different outputs: f(x1) = f(x2) implies x1 = x2. Equivalently, no two distinct elements of A map to the same element of B. " +
          "Graphical test for injectivity: the horizontal line test. If every horizontal line meets the graph at most once, the function is injective. " +
          "Example: f(x) = 2x + 3 is injective. Proof: if 2x1 + 3 = 2x2 + 3, then 2x1 = 2x2, so x1 = x2. " +
          "Example: f(x) = x^2 on all reals is NOT injective because f(2) = f(-2) = 4. However, if we restrict the domain to [0, infinity), then f(x) = x^2 IS injective. " +
          "A function f: A -> B is surjective (onto) if every element in B is mapped to by at least one element in A. The range equals the codomain. " +
          "Example: f: R -> R, f(x) = 2x + 3 is surjective. For any y in R, we can find x = (y - 3)/2 in R such that f(x) = y. " +
          "Example: f: R -> R, f(x) = x^2 is NOT surjective onto R because negative numbers are not in the range. But f: R -> [0, infinity), f(x) = x^2 IS surjective. " +
          "A function is bijective if it is both injective and surjective. A bijective function has an inverse. " +
          "Example: f: R -> R, f(x) = 2x + 3 is bijective. It is injective (shown above) and surjective (shown above). " +
          "Example: f: [0, infinity) -> [0, infinity), f(x) = x^2 is bijective. It is injective on [0, infinity) and surjective onto [0, infinity). " +
          "To prove a function is not injective: find a specific counterexample (two different inputs giving the same output). " +
          "To prove a function is not surjective: find a specific element in the codomain that is not in the range. " +
          "In LC HL, you may need to restrict the domain of a function to make it bijective so that you can find its inverse. " +
          "A bijection between finite sets means they have the same number of elements (same cardinality)."
      },
      {
        title: "Composition of Functions",
        content:
          "The composition of two functions f and g is written (f o g)(x) = f(g(x)). You apply g first, then f to the result. " +
          "Example: f(x) = 2x + 1, g(x) = x^2. Then (f o g)(x) = f(g(x)) = f(x^2) = 2x^2 + 1. And (g o f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)^2 = 4x^2 + 4x + 1. " +
          "Note: f o g is NOT the same as g o f in general. Composition is not commutative. " +
          "The domain of f o g is: the set of all x in the domain of g such that g(x) is in the domain of f. " +
          "Example: f(x) = sqrt(x), g(x) = x - 4. Then (f o g)(x) = sqrt(x - 4). Domain: x - 4 >= 0, so x >= 4. " +
          "Example: f(x) = 1/x, g(x) = x - 3. Then (f o g)(x) = 1/(x - 3). Domain: all reals except x = 3. " +
          "Finding a component: if h(x) = (3x + 1)^5 and you are told h = f o g, then a natural choice is g(x) = 3x + 1 and f(x) = x^5. " +
          "Composition is associative: f o (g o h) = (f o g) o h. " +
          "A function composed with its inverse gives the identity: f o f^(-1) = identity and f^(-1) o f = identity. That is, f(f^(-1)(x)) = x and f^(-1)(f(x)) = x. " +
          "Example: f(x) = 3x - 2, f^(-1)(x) = (x + 2)/3. Check: f(f^(-1)(x)) = f((x+2)/3) = 3*(x+2)/3 - 2 = x + 2 - 2 = x. Correct. " +
          "Iteration means composing a function with itself: f o f = f^2, meaning f(f(x)). Example: f(x) = 2x + 1. f(f(x)) = f(2x+1) = 2(2x+1) + 1 = 4x + 3. " +
          "In LC HL, composition of functions often arises in calculus (the chain rule is differentiation of a composite function) and in solving functional equations. " +
          "Practice: given f and g, always write out both f(g(x)) and g(f(x)) to see they differ."
      },
      {
        title: "Inverse Functions",
        content:
          "The inverse of a function f, written f^(-1), reverses the action of f. If f(a) = b then f^(-1)(b) = a. " +
          "A function has an inverse if and only if it is bijective (one-to-one and onto). In practice for LC HL, we need it to be one-to-one (injective) on its domain. " +
          "To find f^(-1)(x): (1) Write y = f(x). (2) Swap x and y. (3) Solve for y. (4) Write f^(-1)(x) = y. " +
          "Example: f(x) = 3x - 5. Step 1: y = 3x - 5. Step 2: x = 3y - 5. Step 3: 3y = x + 5, y = (x + 5)/3. So f^(-1)(x) = (x + 5)/3. " +
          "Example: f(x) = (2x + 1)/(x - 3), x != 3. Step 1: y = (2x + 1)/(x - 3). Step 2: x = (2y + 1)/(y - 3). Step 3: x(y - 3) = 2y + 1, xy - 3x = 2y + 1, xy - 2y = 3x + 1, y(x - 2) = 3x + 1, y = (3x + 1)/(x - 2). So f^(-1)(x) = (3x + 1)/(x - 2). " +
          "The domain of f^(-1) is the range of f, and the range of f^(-1) is the domain of f. " +
          "Graphically, the graph of f^(-1) is the reflection of the graph of f in the line y = x. " +
          "Example: f(x) = x^2 for x >= 0. Range is [0, infinity). f^(-1)(x) = sqrt(x) for x >= 0. The graph of sqrt(x) is the reflection of x^2 (first quadrant only) in y = x. " +
          "f(x) = e^x has inverse f^(-1)(x) = ln(x). And f(x) = ln(x) has inverse f^(-1)(x) = e^x. These are reflections of each other in y = x. " +
          "f(x) = a^x has inverse f^(-1)(x) = log_a(x). " +
          "For a function to have an inverse, you may need to restrict its domain. f(x) = x^2 on all of R has no inverse (not injective), but on [0, infinity) it does. " +
          "Key check: f(f^(-1)(x)) = x and f^(-1)(f(x)) = x. Always verify with a specific value. " +
          "Example: f(x) = 3x - 5, f^(-1)(x) = (x+5)/3. f(4) = 7. f^(-1)(7) = (7+5)/3 = 4. Confirmed. " +
          "In LC HL, inverse functions connect to logarithms (inverse of exponentials), arc functions (inverse trig), and graphing transformations."
      },
      {
        title: "Transformations of Functions",
        content:
          "Transformations change the graph of y = f(x) by shifting, stretching, reflecting, or combining these. " +
          "Vertical translation: y = f(x) + k shifts the graph UP by k units (down if k is negative). " +
          "Horizontal translation: y = f(x - h) shifts the graph RIGHT by h units (left if h is negative). Note the minus sign inside. " +
          "Example: y = (x - 3)^2 + 2 is y = x^2 shifted 3 right and 2 up. Vertex moves from (0,0) to (3,2). " +
          "Vertical stretch: y = a*f(x) stretches vertically by factor |a|. If a < 0, it also reflects in the x-axis. " +
          "Horizontal stretch: y = f(bx) compresses horizontally by factor |b| (stretches by 1/|b|). If b < 0, it reflects in the y-axis. " +
          "Reflection in x-axis: y = -f(x). Every y-value is negated. " +
          "Reflection in y-axis: y = f(-x). The input x is negated. " +
          "Example: Starting from y = sqrt(x). Then y = sqrt(-x) is reflected in the y-axis (defined for x <= 0). y = -sqrt(x) is reflected in the x-axis (graph goes downward). " +
          "Order matters when combining transformations. Generally: apply horizontal transformations (inside the function) before vertical ones (outside). " +
          "Modulus function: y = |f(x)| takes the graph of f(x) and reflects any parts below the x-axis upward. y = f(|x|) reflects the right half of the graph to the left, making it symmetric about the y-axis. " +
          "Example: y = |x^2 - 4|. The parabola x^2 - 4 dips below the x-axis between x = -2 and x = 2. The modulus graph flips that portion upward, creating a W shape. " +
          "Identifying transformations from an equation: y = 3*sin(2x - pi) + 1. Start with y = sin(x). Horizontal compression by factor 2 (period becomes pi). Horizontal shift right by pi/2 (since 2(x - pi/2)). Vertical stretch by 3 (amplitude 3). Vertical shift up by 1. " +
          "In LC HL, you may be asked to sketch a transformed graph given the original, or to identify the transformations applied to reach a given equation."
      }
    ]
  },

  {
    topic: "Calculus (Differentiation)",
    icon: "📉",
    subtopics: [
      {
        title: "Differentiation from First Principles",
        content:
          "Differentiation measures the rate of change of a function. The derivative of f(x) is defined as f'(x) = lim(h->0) [f(x+h) - f(x)] / h. " +
          "This limit, if it exists, gives the slope of the tangent to the curve y = f(x) at the point (x, f(x)). " +
          "Example: Differentiate f(x) = x^2 from first principles. f(x+h) = (x+h)^2 = x^2 + 2xh + h^2. " +
          "f(x+h) - f(x) = 2xh + h^2. Divide by h: 2x + h. Take the limit as h -> 0: f'(x) = 2x. " +
          "Example: Differentiate f(x) = x^3 from first principles. f(x+h) = x^3 + 3x^2 h + 3xh^2 + h^3. " +
          "f(x+h) - f(x) = 3x^2 h + 3xh^2 + h^3. Divide by h: 3x^2 + 3xh + h^2. Limit as h -> 0: f'(x) = 3x^2. " +
          "Example: f(x) = 5x + 3. f(x+h) = 5(x+h) + 3 = 5x + 5h + 3. f(x+h) - f(x) = 5h. Divide by h: 5. Limit: f'(x) = 5. The derivative of a linear function is its slope. " +
          "Example: f(x) = 1/x. f(x+h) = 1/(x+h). f(x+h) - f(x) = 1/(x+h) - 1/x = (x - (x+h))/(x(x+h)) = -h/(x(x+h)). Divide by h: -1/(x(x+h)). Limit: f'(x) = -1/x^2. " +
          "The derivative at a specific point gives the instantaneous rate of change. f'(a) is the slope of the tangent at x = a. " +
          "A function is differentiable at a point if the limit exists (the left and right limits of the difference quotient agree). " +
          "Points where a function is not differentiable: sharp corners (like |x| at x = 0), vertical tangents, and discontinuities. " +
          "In LC HL, you are often asked to differentiate simple functions (x^2, x^3, sqrt(x)) from first principles. The key steps are: write f(x+h), subtract f(x), divide by h, simplify, take the limit."
      },
      {
        title: "Rules of Differentiation",
        content:
          "The power rule: if f(x) = x^n, then f'(x) = n*x^(n-1). This works for any real n (positive, negative, fractional). " +
          "Examples: d/dx(x^5) = 5x^4. d/dx(x^(-2)) = -2x^(-3) = -2/x^3. d/dx(x^(1/2)) = (1/2)*x^(-1/2) = 1/(2*sqrt(x)). d/dx(x^(3/4)) = (3/4)*x^(-1/4). " +
          "Constant multiple rule: d/dx(c*f(x)) = c*f'(x). Example: d/dx(7x^3) = 7*3x^2 = 21x^2. " +
          "Sum/difference rule: d/dx(f(x) +/- g(x)) = f'(x) +/- g'(x). Example: d/dx(3x^4 - 2x^2 + 5x - 1) = 12x^3 - 4x + 5. " +
          "The derivative of a constant is 0: d/dx(c) = 0. " +
          "Product rule: d/dx(f(x)*g(x)) = f'(x)*g(x) + f(x)*g'(x). " +
          "Example: d/dx(x^2 * sin(x)) = 2x*sin(x) + x^2*cos(x). " +
          "Example: d/dx((3x + 1)(x^2 - 4)) = 3*(x^2 - 4) + (3x + 1)*2x = 3x^2 - 12 + 6x^2 + 2x = 9x^2 + 2x - 12. " +
          "Quotient rule: d/dx(f(x)/g(x)) = (f'(x)*g(x) - f(x)*g'(x)) / (g(x))^2. " +
          "Example: d/dx((x^2 + 1)/(x - 1)) = (2x*(x - 1) - (x^2 + 1)*1) / (x - 1)^2 = (2x^2 - 2x - x^2 - 1)/(x - 1)^2 = (x^2 - 2x - 1)/(x - 1)^2. " +
          "Chain rule: if y = f(g(x)), then dy/dx = f'(g(x)) * g'(x). " +
          "Example: d/dx((3x + 2)^5) = 5*(3x + 2)^4 * 3 = 15*(3x + 2)^4. " +
          "Example: d/dx(sqrt(x^2 + 1)) = (1/2)*(x^2 + 1)^(-1/2) * 2x = x/sqrt(x^2 + 1). " +
          "Special derivatives: d/dx(e^x) = e^x. d/dx(e^(kx)) = k*e^(kx). d/dx(ln(x)) = 1/x. d/dx(a^x) = a^x * ln(a). " +
          "Trigonometric derivatives: d/dx(sin(x)) = cos(x). d/dx(cos(x)) = -sin(x). d/dx(tan(x)) = sec^2(x) = 1/cos^2(x). " +
          "With chain rule: d/dx(sin(3x)) = 3*cos(3x). d/dx(cos(x^2)) = -sin(x^2)*2x = -2x*sin(x^2). d/dx(e^(x^2)) = 2x*e^(x^2)."
      },
      {
        title: "Applications of Differentiation: Tangents and Normals",
        content:
          "The tangent to y = f(x) at the point (a, f(a)) has slope m = f'(a). The equation of the tangent line is: y - f(a) = f'(a)*(x - a). " +
          "Example: Find the equation of the tangent to y = x^3 - 2x at x = 1. f(1) = 1 - 2 = -1. f'(x) = 3x^2 - 2, so f'(1) = 3 - 2 = 1. Tangent: y - (-1) = 1*(x - 1), so y = x - 2. " +
          "The normal at a point is perpendicular to the tangent. If the tangent has slope m, the normal has slope -1/m (negative reciprocal). " +
          "Example: For the curve above at x = 1, tangent slope is 1, so normal slope is -1. Normal: y + 1 = -1*(x - 1), so y = -x. " +
          "Special case: if the tangent is horizontal (m = 0), the normal is vertical (x = a). If the tangent is vertical, the normal is horizontal. " +
          "Finding where a tangent meets the curve again: substitute the tangent equation into the curve equation and solve. The known point gives a repeated root. " +
          "Example: y = x^2 - 3x + 2. At x = 0: y = 2, f'(0) = -3. Tangent: y = -3x + 2. Where does this meet the curve? x^2 - 3x + 2 = -3x + 2. Simplify: x^2 = 0, so x = 0 (double root only). The tangent at (0,2) only touches the curve at that point. " +
          "Finding points on a curve where the tangent has a given slope: set f'(x) = given slope and solve. " +
          "Example: On y = x^3 - 3x, find points where the tangent slope is 9. f'(x) = 3x^2 - 3 = 9, so 3x^2 = 12, x^2 = 4, x = +/-2. Points: (2, 2) and (-2, -2). " +
          "Finding the tangent from an external point: let the tangent touch the curve at (t, f(t)). The tangent passes through the external point. Set up the equation and solve for t. " +
          "Example: Find the tangents to y = x^2 from the point (0, -1). Tangent at (t, t^2): y - t^2 = 2t(x - t), so y = 2tx - t^2. Pass through (0, -1): -1 = -t^2, t^2 = 1, t = +/-1. Tangent lines: y = 2x - 1 and y = -2x - 1. " +
          "In LC HL, tangent/normal problems are extremely common and often combined with coordinate geometry."
      },
      {
        title: "Turning Points, Curve Sketching, and Optimisation",
        content:
          "A turning point (local maximum or minimum) occurs where f'(x) = 0 and the sign of f' changes. Points where f'(x) = 0 are called stationary points or critical points. " +
          "Second derivative test: if f'(a) = 0 and f''(a) > 0, then x = a is a local minimum. If f'(a) = 0 and f''(a) < 0, then x = a is a local maximum. If f''(a) = 0, the test is inconclusive (use sign analysis of f'). " +
          "Example: f(x) = x^3 - 3x + 2. f'(x) = 3x^2 - 3 = 3(x-1)(x+1). f'(x) = 0 at x = 1 and x = -1. " +
          "f''(x) = 6x. f''(1) = 6 > 0, so x = 1 is a local minimum: f(1) = 1 - 3 + 2 = 0. Min point: (1, 0). " +
          "f''(-1) = -6 < 0, so x = -1 is a local maximum: f(-1) = -1 + 3 + 2 = 4. Max point: (-1, 4). " +
          "A point of inflection is where the concavity changes: f''(x) = 0 and f'' changes sign. At a point of inflection, the curve changes from concave up to concave down (or vice versa). " +
          "For f(x) = x^3 - 3x + 2: f''(x) = 6x = 0 at x = 0. f''(-0.1) < 0 and f''(0.1) > 0, so x = 0 is an inflection point: (0, 2). " +
          "Curve sketching checklist: (1) Find the y-intercept (set x = 0). (2) Find x-intercepts (set y = 0). (3) Find f'(x), solve f'(x) = 0 for turning points. (4) Find f''(x), determine nature of turning points. (5) Check behaviour as x -> +/-infinity. (6) Plot key points and sketch. " +
          "Optimisation problems: express the quantity to be maximised or minimised as a function of one variable, differentiate, set equal to zero, solve, and check it gives a max or min. " +
          "Example: A farmer has 200m of fencing to enclose a rectangular field against a wall. One side needs no fencing. Let the sides perpendicular to the wall be x metres. Then the side parallel to the wall is 200 - 2x. Area A = x(200 - 2x) = 200x - 2x^2. " +
          "dA/dx = 200 - 4x = 0, so x = 50. d^2A/dx^2 = -4 < 0, confirming maximum. Max area = 50(200 - 100) = 50 * 100 = 5000 m^2. " +
          "Another example: minimise material for an open-top box of volume 32 cm^3 with square base. Let side = x, height = h. Volume: x^2*h = 32, so h = 32/x^2. Surface area S = x^2 + 4xh = x^2 + 128/x. dS/dx = 2x - 128/x^2 = 0, 2x^3 = 128, x^3 = 64, x = 4. h = 32/16 = 2. S = 16 + 32 = 48 cm^2. " +
          "Always state the domain restrictions (x > 0 in this case) and verify the nature of the critical point."
      },
      {
        title: "Rates of Change and Related Rates",
        content:
          "The derivative dy/dx represents the rate of change of y with respect to x. If y is a function of time t, then dy/dt gives how fast y is changing over time. " +
          "If s(t) is the position of a particle at time t, then velocity v(t) = ds/dt (first derivative) and acceleration a(t) = dv/dt = d^2s/dt^2 (second derivative). " +
          "Example: s(t) = t^3 - 6t^2 + 9t + 2. v(t) = 3t^2 - 12t + 9 = 3(t^2 - 4t + 3) = 3(t-1)(t-3). a(t) = 6t - 12. " +
          "The particle is at rest when v(t) = 0: t = 1 and t = 3. At t = 1: a(1) = -6 < 0, so particle is decelerating. At t = 3: a(3) = 6 > 0, accelerating. " +
          "Related rates: if two quantities are related by an equation and both change with time, differentiate the equation with respect to time using the chain rule. " +
          "Example: A circular oil spill has radius r increasing at 2 m/s. How fast is the area increasing when r = 10m? A = pi*r^2. dA/dt = 2*pi*r * dr/dt = 2*pi*10*2 = 40*pi m^2/s (approximately 125.7 m^2/s). " +
          "Example: A 5m ladder leans against a wall. The base slides away at 0.5 m/s. How fast is the top sliding down when the base is 3m from the wall? " +
          "Let x = base distance, y = height. x^2 + y^2 = 25. When x = 3: y = sqrt(25-9) = 4. Differentiate: 2x*dx/dt + 2y*dy/dt = 0. 2(3)(0.5) + 2(4)*dy/dt = 0. 3 + 8*dy/dt = 0. dy/dt = -3/8 = -0.375 m/s. The negative sign means the top is sliding down. " +
          "Example: A cone has height h = 3r (proportional). Water fills it at 2 cm^3/s. How fast is the height rising when h = 6cm? V = (1/3)*pi*r^2*h. Since h = 3r, r = h/3. V = (1/3)*pi*(h/3)^2*h = pi*h^3/27. dV/dt = pi*h^2/9 * dh/dt. 2 = pi*36/9 * dh/dt = 4*pi*dh/dt. dh/dt = 1/(2*pi) cm/s (approximately 0.159 cm/s). " +
          "The chain rule links rates: dy/dt = (dy/dx)*(dx/dt). This allows you to convert between rates of change of different variables. " +
          "Always clearly define your variables, state what is given and what is required, draw a diagram if possible, and include units in your answer."
      },
      {
        title: "Implicit Differentiation and Logarithmic Differentiation",
        content:
          "Not all curves can be written as y = f(x). When y is defined implicitly by an equation like x^2 + y^2 = 25, we differentiate both sides with respect to x, treating y as a function of x. " +
          "When differentiating a term involving y, apply the chain rule: d/dx(y^2) = 2y * dy/dx. d/dx(y^3) = 3y^2 * dy/dx. " +
          "Example: Find dy/dx for x^2 + y^2 = 25. Differentiate: 2x + 2y*dy/dx = 0. Solve: dy/dx = -x/y. At (3, 4): dy/dx = -3/4. " +
          "Example: x^3 + y^3 = 6xy. Differentiate: 3x^2 + 3y^2*dy/dx = 6y + 6x*dy/dx. Collect dy/dx terms: 3y^2*dy/dx - 6x*dy/dx = 6y - 3x^2. dy/dx = (6y - 3x^2)/(3y^2 - 6x) = (2y - x^2)/(y^2 - 2x). " +
          "Example: Find the tangent to x^2 + xy + y^2 = 7 at (1, 2). Differentiate: 2x + y + x*dy/dx + 2y*dy/dx = 0. At (1,2): 2 + 2 + dy/dx + 4*dy/dx = 0. 5*dy/dx = -4. dy/dx = -4/5. Tangent: y - 2 = (-4/5)(x - 1), so 5y - 10 = -4x + 4, giving 4x + 5y = 14. " +
          "Logarithmic differentiation is useful when the function involves products, quotients, or variable exponents. Take ln of both sides, then differentiate. " +
          "Example: y = x^x (x > 0). Take ln: ln(y) = x*ln(x). Differentiate: (1/y)*dy/dx = ln(x) + x*(1/x) = ln(x) + 1. So dy/dx = y*(ln(x) + 1) = x^x*(ln(x) + 1). " +
          "Example: y = (x^2 * sqrt(x+1)) / (x-2)^3. Take ln: ln(y) = 2*ln(x) + (1/2)*ln(x+1) - 3*ln(x-2). Differentiate: (1/y)*dy/dx = 2/x + 1/(2(x+1)) - 3/(x-2). Then dy/dx = y * [2/x + 1/(2(x+1)) - 3/(x-2)]. " +
          "For y = a^(f(x)): rewrite as e^(f(x)*ln(a)). Then dy/dx = a^(f(x)) * f'(x) * ln(a). Example: d/dx(2^(3x)) = 2^(3x) * 3 * ln(2). " +
          "Implicit differentiation is essential for finding derivatives of inverse trig functions and for curves like ellipses, hyperbolas, and foliums. " +
          "Remember: every time you differentiate a y-term, you must include the factor dy/dx. This is the most common mistake students make."
      }
    ]
  },

  {
    topic: "Integration",
    icon: "∫",
    subtopics: [
      {
        title: "Indefinite Integration (Antiderivatives)",
        content:
          "Integration is the reverse of differentiation. If F'(x) = f(x), then the integral of f(x) dx = F(x) + C, where C is the constant of integration. " +
          "The power rule for integration: integral of x^n dx = x^(n+1)/(n+1) + C, provided n != -1. " +
          "Examples: integral of x^3 dx = x^4/4 + C. integral of x^(-2) dx = x^(-1)/(-1) + C = -1/x + C. integral of x^(1/2) dx = x^(3/2)/(3/2) + C = (2/3)*x^(3/2) + C. " +
          "integral of 1/x dx = ln|x| + C (this covers the case n = -1). " +
          "Constant multiple: integral of k*f(x) dx = k * integral of f(x) dx. Sum/difference: integral of [f(x) +/- g(x)] dx = integral of f(x) dx +/- integral of g(x) dx. " +
          "Standard integrals: integral of e^x dx = e^x + C. integral of e^(kx) dx = (1/k)*e^(kx) + C. integral of a^x dx = a^x/ln(a) + C. " +
          "integral of sin(x) dx = -cos(x) + C. integral of cos(x) dx = sin(x) + C. integral of sec^2(x) dx = tan(x) + C. " +
          "integral of sin(kx) dx = -(1/k)*cos(kx) + C. integral of cos(kx) dx = (1/k)*sin(kx) + C. " +
          "Example: integral of (3x^2 - 4x + 5) dx = x^3 - 2x^2 + 5x + C. " +
          "Example: integral of (2*sqrt(x) + 3/x^2) dx = integral of (2*x^(1/2) + 3*x^(-2)) dx = 2*(2/3)*x^(3/2) + 3*(-1)*x^(-1) + C = (4/3)*x^(3/2) - 3/x + C. " +
          "Before integrating, always rewrite the function in power form. For example, 1/sqrt(x) = x^(-1/2), and 1/x^3 = x^(-3). " +
          "Finding a particular solution: if you know a point on the curve, substitute to find C. Example: dy/dx = 2x + 3 and y = 5 when x = 1. y = x^2 + 3x + C. 5 = 1 + 3 + C, so C = 1. y = x^2 + 3x + 1. " +
          "Never forget the +C in indefinite integration. It represents the family of all antiderivatives."
      },
      {
        title: "Integration by Substitution",
        content:
          "Substitution reverses the chain rule. If you see a composite function, let u = the inner function, find du/dx, and rewrite the integral in terms of u. " +
          "Method: (1) Choose u = g(x). (2) Find du = g'(x)*dx. (3) Rewrite everything in terms of u and du. (4) Integrate with respect to u. (5) Substitute back to x. " +
          "Example: integral of 2x*(x^2 + 1)^5 dx. Let u = x^2 + 1, du = 2x dx. Integral becomes integral of u^5 du = u^6/6 + C = (x^2 + 1)^6/6 + C. " +
          "Example: integral of cos(3x) dx. Let u = 3x, du = 3 dx, so dx = du/3. Integral = (1/3)*integral of cos(u) du = (1/3)*sin(u) + C = sin(3x)/3 + C. " +
          "Example: integral of x*e^(x^2) dx. Let u = x^2, du = 2x dx, so x dx = du/2. Integral = (1/2)*integral of e^u du = (1/2)*e^(x^2) + C. " +
          "Example: integral of (2x+1)/(x^2+x+3) dx. Let u = x^2 + x + 3, du = (2x + 1) dx. Integral = integral of du/u = ln|u| + C = ln|x^2 + x + 3| + C. " +
          "For definite integrals with substitution, either change the limits to u-values or substitute back to x before evaluating. " +
          "Example: integral from 0 to 2 of x*(x^2 + 1)^3 dx. Let u = x^2 + 1. When x = 0, u = 1. When x = 2, u = 5. du = 2x dx, so x dx = du/2. " +
          "Integral = (1/2)*integral from 1 to 5 of u^3 du = (1/2)*[u^4/4] from 1 to 5 = (1/8)*(625 - 1) = 624/8 = 78. " +
          "Pattern recognition: integral of f'(x)/f(x) dx = ln|f(x)| + C. This comes directly from the substitution u = f(x). " +
          "Example: integral of (3x^2)/(x^3 + 5) dx = ln|x^3 + 5| + C (since the numerator is the derivative of the denominator). " +
          "Trigonometric substitutions are sometimes needed: for sqrt(a^2 - x^2), try x = a*sin(theta). For sqrt(a^2 + x^2), try x = a*tan(theta). " +
          "Substitution is one of the most important techniques in LC HL integration and requires practice to recognise the right substitution quickly."
      },
      {
        title: "Definite Integration and Area Under a Curve",
        content:
          "The definite integral from a to b of f(x) dx = F(b) - F(a), where F is any antiderivative of f. This is the Fundamental Theorem of Calculus. " +
          "Example: integral from 1 to 3 of (2x + 1) dx = [x^2 + x] from 1 to 3 = (9 + 3) - (1 + 1) = 12 - 2 = 10. " +
          "Example: integral from 0 to pi of sin(x) dx = [-cos(x)] from 0 to pi = (-cos(pi)) - (-cos(0)) = -(-1) - (-1) = 1 + 1 = 2. " +
          "Properties: integral from a to b = -integral from b to a. integral from a to a = 0. integral from a to b + integral from b to c = integral from a to c. " +
          "The area between the curve y = f(x), the x-axis, and the lines x = a and x = b equals the integral from a to b of f(x) dx, PROVIDED f(x) >= 0 on [a, b]. " +
          "If f(x) < 0 on part of [a, b], the integral gives a negative contribution. For total area (geometric area), integrate |f(x)| or split into intervals where f is positive and negative and add the absolute values. " +
          "Example: Find the area between y = x^2 - 4 and the x-axis from x = 0 to x = 3. Roots at x = +/-2. From 0 to 2, x^2 - 4 < 0. From 2 to 3, x^2 - 4 > 0. " +
          "Area = |integral from 0 to 2 of (x^2 - 4) dx| + integral from 2 to 3 of (x^2 - 4) dx. " +
          "First: [x^3/3 - 4x] from 0 to 2 = (8/3 - 8) - 0 = -16/3. Absolute value: 16/3. " +
          "Second: [x^3/3 - 4x] from 2 to 3 = (9 - 12) - (8/3 - 8) = -3 - (-16/3) = -3 + 16/3 = 7/3. " +
          "Total area = 16/3 + 7/3 = 23/3 square units. " +
          "Area between two curves: if f(x) >= g(x) on [a, b], area = integral from a to b of [f(x) - g(x)] dx. " +
          "Example: Area between y = x^2 and y = x from x = 0 to x = 1. Since x >= x^2 on [0,1]: integral from 0 to 1 of (x - x^2) dx = [x^2/2 - x^3/3] from 0 to 1 = 1/2 - 1/3 = 1/6 square units. " +
          "First find where the curves intersect by solving f(x) = g(x). The intersection points often give you the limits of integration. " +
          "In LC HL, area problems are very common. Always sketch the curves and shade the required region to identify which function is on top."
      },
      {
        title: "Integration by Parts and Partial Fractions",
        content:
          "Integration by parts: integral of u*dv = u*v - integral of v*du. This is derived from the product rule of differentiation. " +
          "Choose u using LIATE order: Logarithms, Inverse trig, Algebraic (polynomials), Trigonometric, Exponential. Let u be whichever type comes first in LIATE. " +
          "Example: integral of x*e^x dx. Let u = x (algebraic), dv = e^x dx. Then du = dx, v = e^x. " +
          "Result: x*e^x - integral of e^x dx = x*e^x - e^x + C = e^x*(x - 1) + C. " +
          "Example: integral of x*sin(x) dx. Let u = x, dv = sin(x) dx. du = dx, v = -cos(x). " +
          "Result: -x*cos(x) - integral of -cos(x) dx = -x*cos(x) + sin(x) + C. " +
          "Example: integral of ln(x) dx. Let u = ln(x), dv = dx. du = (1/x) dx, v = x. " +
          "Result: x*ln(x) - integral of x*(1/x) dx = x*ln(x) - integral of 1 dx = x*ln(x) - x + C. " +
          "Example: integral of x^2*e^x dx. Apply by parts twice. First: u = x^2, dv = e^x dx. Result: x^2*e^x - 2*integral of x*e^x dx. Use the previous result: x^2*e^x - 2*(e^x*(x - 1)) + C = e^x*(x^2 - 2x + 2) + C. " +
          "Integration using partial fractions: decompose a rational function into simpler fractions and integrate each separately. " +
          "Example: integral of (3x + 5)/((x+1)(x+2)) dx. From the algebra section: this equals 2/(x+1) + 1/(x+2). " +
          "Integrate: 2*ln|x+1| + ln|x+2| + C. " +
          "Example: integral of 1/(x^2 - 1) dx = integral of 1/((x-1)(x+1)) dx. Partial fractions: 1/((x-1)(x+1)) = A/(x-1) + B/(x+1). Then 1 = A(x+1) + B(x-1). At x = 1: 1 = 2A, A = 1/2. At x = -1: 1 = -2B, B = -1/2. " +
          "Integral = (1/2)*ln|x-1| - (1/2)*ln|x+1| + C = (1/2)*ln|(x-1)/(x+1)| + C. " +
          "In LC HL, integration by parts typically appears with x*e^x, x*sin(x), x*cos(x), or ln(x) type integrands. Partial fractions appear with rational functions."
      },
      {
        title: "Trapezoidal Rule (Numerical Integration)",
        content:
          "The Trapezoidal Rule approximates a definite integral by dividing the area into trapezoids. " +
          "Formula: integral from a to b of f(x) dx is approximately (h/2)*[y_0 + y_n + 2*(y_1 + y_2 + ... + y_(n-1))], where h = (b - a)/n is the width of each strip, and y_i = f(x_i). " +
          "In words: h/2 times (first y-value + last y-value + 2 times the sum of all middle y-values). " +
          "Example: Approximate integral from 0 to 1 of e^(x^2) dx using 4 strips. h = (1-0)/4 = 0.25. " +
          "x-values: 0, 0.25, 0.5, 0.75, 1. y-values: e^0 = 1, e^0.0625 = 1.0645, e^0.25 = 1.2840, e^0.5625 = 1.7551, e^1 = 2.7183. " +
          "Approximation = (0.25/2)*[1 + 2.7183 + 2*(1.0645 + 1.2840 + 1.7551)] = 0.125*[3.7183 + 2*4.1036] = 0.125*[3.7183 + 8.2072] = 0.125*11.9255 = 1.4907. " +
          "The exact value is approximately 1.4627, so the trapezoidal rule gives a reasonable estimate with just 4 strips. " +
          "Increasing the number of strips generally improves the approximation. With more strips, the straight-line tops of the trapezoids better approximate the curve. " +
          "The trapezoidal rule overestimates when the curve is concave up (f'' > 0) and underestimates when concave down (f'' < 0). " +
          "This is because a concave-up curve lies below the straight line connecting two points, so the trapezoid includes extra area above the curve. " +
          "Example: Approximate integral from 1 to 3 of 1/x dx using 4 strips. h = 0.5. x: 1, 1.5, 2, 2.5, 3. y: 1, 0.6667, 0.5, 0.4, 0.3333. " +
          "Approx = (0.5/2)*[1 + 0.3333 + 2*(0.6667 + 0.5 + 0.4)] = 0.25*[1.3333 + 2*1.5667] = 0.25*[1.3333 + 3.1334] = 0.25*4.4667 = 1.1167. " +
          "Exact: ln(3) = 1.0986. The trapezoidal rule overestimates here because 1/x is concave up for x > 0. " +
          "In LC HL, you may be given a table of values and asked to apply the trapezoidal rule. Always set up the table clearly with x and y values, and show the formula substitution step by step."
      }
    ]
  },

  {
    topic: "Sequences & Series",
    icon: "🔣",
    subtopics: [
      {
        title: "Arithmetic Sequences and Series",
        content:
          "An arithmetic sequence has a constant common difference d between consecutive terms. If the first term is a and the common difference is d, then the n-th term is: T_n = a + (n - 1)*d. " +
          "Example: 3, 7, 11, 15, ... has a = 3, d = 4. T_n = 3 + (n-1)*4 = 4n - 1. So T_10 = 39, T_50 = 199. " +
          "To find d: d = T_2 - T_1 = T_3 - T_2 = ... (any consecutive pair). " +
          "Example: The 5th term is 17 and the 12th term is 38. T_5 = a + 4d = 17 and T_12 = a + 11d = 38. Subtract: 7d = 21, d = 3. Then a = 17 - 12 = 5. Sequence: 5, 8, 11, 14, 17, ... " +
          "The sum of the first n terms of an arithmetic series: S_n = n/2 * (2a + (n-1)*d) or equivalently S_n = n/2 * (first term + last term) = n/2 * (a + T_n). " +
          "Example: Find the sum of the first 20 terms of 3, 7, 11, 15, ... S_20 = 20/2 * (2*3 + 19*4) = 10 * (6 + 76) = 10 * 82 = 820. " +
          "Alternatively: T_20 = 3 + 19*4 = 79. S_20 = 20/2 * (3 + 79) = 10 * 82 = 820. " +
          "Example: Sum of integers from 1 to 100: S_100 = 100/2 * (1 + 100) = 50 * 101 = 5050. " +
          "Example: How many terms of 2, 5, 8, 11, ... are needed for the sum to exceed 200? S_n = n/2*(4 + 3(n-1)) = n/2*(3n + 1). Set S_n > 200: n(3n + 1)/2 > 200, 3n^2 + n > 400, 3n^2 + n - 400 > 0. By the quadratic formula: n > (-1 + sqrt(1 + 4800))/6 = (-1 + sqrt(4801))/6 approximately = (-1 + 69.3)/6 = 11.38. So n = 12 terms are needed. Check: S_12 = 12/2*(4 + 33) = 6*37 = 222 > 200. S_11 = 11/2*(4 + 30) = 11*17 = 187 < 200. Confirmed. " +
          "Three numbers in arithmetic sequence: write them as a - d, a, a + d. This simplifies many problems because their sum is simply 3a. " +
          "Arithmetic mean: the arithmetic mean of two numbers p and q is (p + q)/2, which is the term between them in an arithmetic sequence."
      },
      {
        title: "Geometric Sequences and Series",
        content:
          "A geometric sequence has a constant common ratio r between consecutive terms. The n-th term is T_n = a * r^(n-1), where a is the first term. " +
          "Example: 2, 6, 18, 54, ... has a = 2, r = 3. T_n = 2 * 3^(n-1). T_8 = 2 * 3^7 = 2 * 2187 = 4374. " +
          "To find r: r = T_2/T_1 = T_3/T_2 (any consecutive pair ratio). " +
          "Example: T_3 = 12 and T_6 = 96. T_6/T_3 = r^3 = 96/12 = 8, so r = 2. Then T_3 = a*r^2 = 4a = 12, so a = 3. " +
          "The sum of the first n terms: S_n = a*(1 - r^n)/(1 - r) when r != 1, or equivalently S_n = a*(r^n - 1)/(r - 1). " +
          "Example: Sum of first 6 terms of 2, 6, 18, 54, ... S_6 = 2*(3^6 - 1)/(3 - 1) = 2*(729 - 1)/2 = 728. " +
          "Verify: 2 + 6 + 18 + 54 + 162 + 486 = 728. Correct. " +
          "Three numbers in geometric sequence: write them as a/r, a, a*r. Their product is a^3 (which simplifies many problems). " +
          "Geometric mean: the geometric mean of two positive numbers p and q is sqrt(p*q). " +
          "Example: Insert 3 geometric means between 2 and 162. The sequence is 2, _, _, _, 162. So T_1 = 2 and T_5 = 162. a*r^4 = 162 and a = 2, so r^4 = 81, r = 3. Sequence: 2, 6, 18, 54, 162. " +
          "A geometric series can model exponential growth (r > 1) or decay (0 < r < 1). Population growth, radioactive decay, and compound interest are all geometric. " +
          "Example: A population starts at 500 and increases by 8% per year. After n years: P_n = 500 * 1.08^n. After 10 years: P_10 = 500 * 1.08^10 = 500 * 2.159 = 1079.5, approximately 1080. " +
          "For negative r, the terms alternate in sign: 1, -2, 4, -8, 16, ... (a = 1, r = -2). " +
          "The sum formulas work for negative r as well. S_5 = 1*(1 - (-2)^5)/(1 - (-2)) = (1 + 32)/3 = 33/3 = 11."
      },
      {
        title: "Sum to Infinity of Geometric Series",
        content:
          "An infinite geometric series converges (has a finite sum) if and only if |r| < 1 (the common ratio has absolute value less than 1). " +
          "The sum to infinity is: S_infinity = a/(1 - r), where a is the first term and |r| < 1. " +
          "This works because as n -> infinity, r^n -> 0 when |r| < 1, so S_n = a(1 - r^n)/(1 - r) -> a/(1 - r). " +
          "Example: 1 + 1/2 + 1/4 + 1/8 + ... has a = 1, r = 1/2. S_infinity = 1/(1 - 1/2) = 1/(1/2) = 2. " +
          "Example: 12 + 6 + 3 + 1.5 + ... has a = 12, r = 1/2. S_infinity = 12/(1 - 1/2) = 24. " +
          "Example: 10 - 5 + 5/2 - 5/4 + ... has a = 10, r = -1/2. S_infinity = 10/(1 - (-1/2)) = 10/(3/2) = 20/3 (approximately 6.667). " +
          "If |r| >= 1, the series diverges (no finite sum). For example, 1 + 2 + 4 + 8 + ... (r = 2) diverges. " +
          "Converting recurring decimals to fractions using geometric series: " +
          "Example: 0.333... = 3/10 + 3/100 + 3/1000 + ... This is geometric with a = 3/10, r = 1/10. S = (3/10)/(1 - 1/10) = (3/10)/(9/10) = 3/9 = 1/3. " +
          "Example: 0.272727... = 27/100 + 27/10000 + ... a = 27/100, r = 1/100. S = (27/100)/(99/100) = 27/99 = 3/11. " +
          "Example: Given S_infinity = 8 and a = 6, find r. 8 = 6/(1-r), so 1 - r = 6/8 = 3/4, r = 1/4. " +
          "Example: Given S_infinity = 20 and r = 3/5, find a. 20 = a/(1 - 3/5) = a/(2/5), so a = 20 * 2/5 = 8. " +
          "In practical applications: a bouncing ball that reaches 3/4 of its previous height each bounce, starting at 10m. Heights: 10, 7.5, 5.625, ... Total distance (down only) = 10/(1 - 3/4) = 40m. " +
          "For the total distance including up AND down bounces: first drop is 10m. Then it bounces up 7.5 and down 7.5, up 5.625 and down 5.625, etc. Total = 10 + 2*(7.5 + 5.625 + ...) = 10 + 2*(7.5/(1 - 3/4)) = 10 + 2*30 = 70m."
      },
      {
        title: "Sigma Notation and Series Identities",
        content:
          "Sigma notation (summation notation) provides a compact way to write series. The expression sum from i=1 to n of f(i) means f(1) + f(2) + f(3) + ... + f(n). " +
          "Example: sum from i=1 to 5 of i^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55. " +
          "Example: sum from k=0 to 4 of 3^k = 3^0 + 3^1 + 3^2 + 3^3 + 3^4 = 1 + 3 + 9 + 27 + 81 = 121. " +
          "Standard results given on the LC formula sheet: sum from i=1 to n of 1 = n. sum from i=1 to n of i = n(n+1)/2. sum from i=1 to n of i^2 = n(n+1)(2n+1)/6. sum from i=1 to n of i^3 = [n(n+1)/2]^2. " +
          "Properties of sigma notation: sum of (c*a_i) = c * sum of a_i. sum of (a_i + b_i) = sum of a_i + sum of b_i. " +
          "Example: Find sum from i=1 to 20 of (3i + 2). This equals 3 * sum(i) + sum(2) = 3 * 20*21/2 + 2*20 = 3*210 + 40 = 630 + 40 = 670. " +
          "Example: Find sum from i=1 to 10 of i^2. Using the formula: 10*11*21/6 = 2310/6 = 385. " +
          "Telescoping series: sum from i=1 to n of [f(i) - f(i+1)] = f(1) - f(n+1). Most terms cancel. " +
          "Example: sum from i=1 to n of (1/i - 1/(i+1)) = 1 - 1/(n+1) = n/(n+1). " +
          "Verify for n = 3: (1 - 1/2) + (1/2 - 1/3) + (1/3 - 1/4) = 1 - 1/4 = 3/4. Formula: 3/4. Correct. " +
          "In LC HL, you should be comfortable translating between expanded series and sigma notation, and using standard formulas to evaluate sums. " +
          "Practice recognising whether a given series is arithmetic (linear expression in i), geometric (exponential in i), or requires the standard sum formulas (polynomial in i)."
      },
      {
        title: "Proof by Induction (Series Context)",
        content:
          "Proof by mathematical induction is used to prove statements for all positive integers n (or all integers n >= some starting value). " +
          "The method has three steps: (1) Base case: verify the statement for n = 1 (or the starting value). (2) Inductive hypothesis: assume the statement is true for n = k. (3) Inductive step: prove it is true for n = k + 1, using the assumption. " +
          "Example: Prove that sum from i=1 to n of i = n(n+1)/2 for all n >= 1. " +
          "Base case (n=1): LHS = 1. RHS = 1*2/2 = 1. True. " +
          "Inductive hypothesis: Assume sum from i=1 to k of i = k(k+1)/2. " +
          "Inductive step: sum from i=1 to k+1 of i = (sum from i=1 to k of i) + (k+1) = k(k+1)/2 + (k+1) = (k+1)*(k/2 + 1) = (k+1)*(k+2)/2. This is the formula with n = k+1. " +
          "Conclusion: by mathematical induction, the statement is true for all n >= 1. " +
          "Example: Prove 1 + 3 + 5 + ... + (2n-1) = n^2. " +
          "Base case (n=1): LHS = 1. RHS = 1. True. " +
          "Assume true for n = k: 1 + 3 + ... + (2k-1) = k^2. " +
          "For n = k+1: add the (k+1)-th odd number, which is 2(k+1)-1 = 2k+1. LHS = k^2 + (2k+1) = k^2 + 2k + 1 = (k+1)^2 = RHS. Done. " +
          "Example: Prove n^3 + 2n is divisible by 3 for all n >= 1. " +
          "Base case (n=1): 1 + 2 = 3, divisible by 3. True. " +
          "Assume true for n = k: k^3 + 2k = 3m for some integer m. " +
          "For n = k+1: (k+1)^3 + 2(k+1) = k^3 + 3k^2 + 3k + 1 + 2k + 2 = (k^3 + 2k) + 3k^2 + 3k + 3 = 3m + 3(k^2 + k + 1) = 3(m + k^2 + k + 1). This is divisible by 3. Done. " +
          "Key tips: always clearly state each step and label it (base case, hypothesis, step). The inductive step must USE the hypothesis explicitly. " +
          "In LC HL, induction is commonly tested with series formulas, divisibility statements, and inequality results."
      }
    ]
  },

  {
    topic: "Financial Maths",
    icon: "💰",
    subtopics: [
      {
        title: "Compound Interest and Depreciation",
        content:
          "Compound interest: if a principal P is invested at an annual interest rate r (as a decimal) compounded annually, the future value after t years is F = P*(1 + r)^t. " +
          "Example: Invest 5000 euro at 4% per annum for 6 years. F = 5000*(1.04)^6 = 5000*1.2653 = 6326.60 euro (approximately). " +
          "If interest is compounded more frequently: F = P*(1 + r/n)^(n*t), where n is the number of compounding periods per year. " +
          "Example: 5000 euro at 4% compounded quarterly for 6 years. F = 5000*(1 + 0.04/4)^(4*6) = 5000*(1.01)^24 = 5000*1.2697 = 6348.67 euro. " +
          "The Annual Equivalent Rate (AER) or Effective Annual Rate converts any compounding frequency to an equivalent annual rate: AER = (1 + r/n)^n - 1. " +
          "Example: Nominal rate 4% compounded quarterly. AER = (1.01)^4 - 1 = 1.04060 - 1 = 0.04060 = 4.06%. " +
          "Depreciation: an asset losing value over time. If an asset worth P depreciates at rate r per year, its value after t years is V = P*(1 - r)^t. " +
          "Example: A car worth 25000 euro depreciates at 15% per year. After 5 years: V = 25000*(0.85)^5 = 25000*0.4437 = 11093 euro. " +
          "To find the number of years for an investment to double: P*(1 + r)^t = 2P, so (1 + r)^t = 2. Take log: t = log(2)/log(1 + r). " +
          "Example: At 6% interest, time to double: t = log(2)/log(1.06) = 0.3010/0.0253 = 11.9 years. The Rule of 72 gives a quick estimate: 72/6 = 12 years. " +
          "To find the rate: if 1000 grows to 1500 in 8 years, then 1000*(1+r)^8 = 1500, (1+r)^8 = 1.5, 1+r = 1.5^(1/8) = 1.0527, r = 5.27%. " +
          "In LC HL, compound interest questions often involve comparing investment options, finding how long to reach a target, or converting between nominal and effective rates."
      },
      {
        title: "Present Value and Future Value",
        content:
          "The present value (PV) is the current worth of a future sum of money, given a specified rate of return. It answers: how much should I invest NOW to have a certain amount in the future? " +
          "Formula: PV = F / (1 + r)^t, where F is the future value, r is the interest rate per period, and t is the number of periods. " +
          "Example: What sum invested now at 5% will be worth 10000 euro in 8 years? PV = 10000/(1.05)^8 = 10000/1.4775 = 6768.39 euro. " +
          "This means 6768.39 euro invested today at 5% will grow to 10000 euro in 8 years. " +
          "Present value is the inverse of compound interest: compounding goes forward in time (PV to FV), discounting goes backward (FV to PV). " +
          "Net Present Value (NPV): the sum of present values of a series of future cash flows. If an investment costs C now and generates cash flows F_1, F_2, ..., F_n in successive years at rate r: " +
          "NPV = -C + F_1/(1+r) + F_2/(1+r)^2 + ... + F_n/(1+r)^n. If NPV > 0, the investment is worthwhile. " +
          "Example: An investment costs 10000 euro and returns 4000 euro per year for 3 years at 6%. NPV = -10000 + 4000/1.06 + 4000/1.06^2 + 4000/1.06^3 = -10000 + 3773.58 + 3559.99 + 3358.48 = 692.05 euro. Since NPV > 0, the investment is worthwhile. " +
          "The present value of an annuity (equal payments) of amount A per period for n periods at rate r per period is: PV = A * [1 - (1+r)^(-n)] / r. This is a key formula for LC HL. " +
          "Example: What is the present value of receiving 2000 euro per year for 10 years at 5%? PV = 2000 * [1 - (1.05)^(-10)] / 0.05 = 2000 * [1 - 0.6139]/0.05 = 2000 * 0.3861/0.05 = 2000 * 7.7217 = 15443.47 euro. " +
          "This means paying 15443.47 euro now is equivalent to receiving 2000 euro per year for 10 years at 5% interest. " +
          "When payments are made at the beginning of each period (annuity due) instead of the end (ordinary annuity), multiply the ordinary annuity PV by (1 + r)."
      },
      {
        title: "Amortisation (Loan Repayment)",
        content:
          "Amortisation is the process of paying off a loan through regular equal payments. Each payment covers interest on the outstanding balance plus some principal repayment. " +
          "The formula for the payment A on a loan of principal P at rate r per period for n periods is: A = P * r / [1 - (1+r)^(-n)]. " +
          "This is derived from equating the loan amount to the present value of the annuity of repayments: P = A * [1 - (1+r)^(-n)] / r, solved for A. " +
          "Example: A mortgage of 250000 euro at 3.5% annual rate (monthly rate = 0.035/12 = 0.002917) for 25 years (300 months). " +
          "A = 250000 * 0.002917 / [1 - (1.002917)^(-300)] = 729.17 / [1 - 0.4174] = 729.17 / 0.5826 = 1251.46 euro per month. " +
          "Total paid over 25 years: 1251.46 * 300 = 375438 euro. Total interest: 375438 - 250000 = 125438 euro. " +
          "Amortisation schedule (first few payments): Month 1: Interest = 250000 * 0.002917 = 729.17. Principal repaid = 1251.46 - 729.17 = 522.29. New balance = 249477.71. " +
          "Month 2: Interest = 249477.71 * 0.002917 = 727.65. Principal = 1251.46 - 727.65 = 523.81. Balance = 248953.90. " +
          "Notice: as the balance decreases, more of each payment goes toward principal and less toward interest. This is characteristic of amortised loans. " +
          "Balance after k payments: B_k = P*(1+r)^k - A*[(1+r)^k - 1]/r. " +
          "Example: Find the balance after 5 years (60 payments) on the above mortgage. B_60 = 250000*(1.002917)^60 - 1251.46*[(1.002917)^60 - 1]/0.002917. " +
          "(1.002917)^60 = 1.1909. B_60 = 250000*1.1909 - 1251.46*(1.1909 - 1)/0.002917 = 297725 - 1251.46*65.44 = 297725 - 81879 = 215846 euro (approximately). " +
          "In LC HL, you may be asked to: calculate monthly repayments, find the total interest paid, construct part of an amortisation schedule, or find the outstanding balance after a number of payments."
      },
      {
        title: "Annuities and Sinking Funds",
        content:
          "An annuity is a series of equal payments made at regular intervals. There are two main types: annuity due (payments at the start of each period) and ordinary annuity (payments at the end). " +
          "Future value of an ordinary annuity: FV = A * [(1+r)^n - 1] / r, where A is the payment per period, r is the rate per period, n is the number of periods. " +
          "Example: Save 500 euro per month for 10 years at 4% per annum (monthly rate 0.04/12 = 0.003333). n = 120 months. " +
          "FV = 500 * [(1.003333)^120 - 1] / 0.003333 = 500 * [1.4908 - 1] / 0.003333 = 500 * 0.4908 / 0.003333 = 500 * 147.25 = 73625 euro. " +
          "Total contributions: 500 * 120 = 60000 euro. Interest earned: 73625 - 60000 = 13625 euro. " +
          "A sinking fund is a savings plan where regular deposits are made to accumulate a target amount by a specific date. " +
          "Example: A company needs 500000 euro in 8 years for equipment replacement. Interest rate 5% per annum. What annual deposit is needed? " +
          "500000 = A * [(1.05)^8 - 1] / 0.05 = A * [1.4775 - 1] / 0.05 = A * 9.5491. So A = 500000/9.5491 = 52361 euro per year. " +
          "Present value of an annuity (used in loan calculations): PV = A * [1 - (1+r)^(-n)] / r. " +
          "Example: What lump sum now is equivalent to receiving 3000 euro per year for 15 years at 6%? PV = 3000 * [1 - (1.06)^(-15)] / 0.06 = 3000 * [1 - 0.4173] / 0.06 = 3000 * 9.7122 = 29137 euro. " +
          "Growing annuity: if payments increase at rate g per period, PV = A * [1 - ((1+g)/(1+r))^n] / (r - g) when r != g. " +
          "Perpetuity: an annuity that continues forever (n -> infinity). PV = A/r (when |r| > 0). Example: receive 1000 euro per year forever at 5%: PV = 1000/0.05 = 20000 euro. " +
          "In LC HL, financial maths problems combine arithmetic and geometric series with real-world contexts. Always carefully identify the rate per period, number of periods, and whether payments are at the beginning or end of each period."
      },
      {
        title: "Bonds and Investment Appraisal",
        content:
          "A bond is a financial instrument where the issuer pays the bondholder regular interest payments (coupons) and returns the face value at maturity. " +
          "The price (present value) of a bond = PV of all coupon payments + PV of the face value. If the coupon is C per period, face value is F, n periods to maturity, and rate of return is r: " +
          "Price = C * [1 - (1+r)^(-n)] / r + F / (1+r)^n. " +
          "Example: A bond has face value 1000 euro, annual coupon of 60 euro (6% coupon rate), 10 years to maturity, and the required rate of return is 5%. " +
          "Price = 60 * [1 - (1.05)^(-10)] / 0.05 + 1000 / (1.05)^10 = 60 * 7.7217 + 1000 * 0.6139 = 463.30 + 613.91 = 1077.21 euro. " +
          "Since the coupon rate (6%) > required return (5%), the bond trades at a premium (above face value). When coupon rate < required return, it trades at a discount. When they're equal, it trades at par (face value). " +
          "If the required return rises, the bond price falls, and vice versa. This inverse relationship is fundamental. " +
          "Example: Same bond but required return is 8%. Price = 60 * [1 - (1.08)^(-10)] / 0.08 + 1000 / (1.08)^10 = 60 * 6.7101 + 1000 * 0.4632 = 402.60 + 463.19 = 865.80 euro (trading at discount). " +
          "Yield to maturity (YTM): the rate r that equates the current market price to the PV of all future cash flows. Often found by trial and error or interpolation. " +
          "Internal Rate of Return (IRR): the discount rate that makes NPV = 0 for an investment project. If IRR > required return, the project is acceptable. " +
          "Example: Project costs 10000 and returns 6000, 5000, 3000 in years 1, 2, 3. At r = 10%: NPV = -10000 + 6000/1.1 + 5000/1.21 + 3000/1.331 = -10000 + 5454.55 + 4132.23 + 2253.94 = 1840.72. " +
          "At r = 20%: NPV = -10000 + 5000 + 3472.22 + 1736.11 = 208.33. At r = 25%: NPV = -10000 + 4800 + 3200 + 1536 = -464. By interpolation, IRR is between 20% and 25%, approximately 22%. " +
          "In LC HL, bond pricing and investment appraisal combine present value concepts with real financial scenarios. Pay close attention to whether rates are annual, semi-annual, etc."
      }
    ]
  },

{
    topic: "Coordinate Geometry",
    icon: "📐",
    subtopics: [
      {
        title: "The Line: Core Formulas and Techniques",
        content: "The line is the most fundamental object in coordinate geometry, and questions on it appear every year in Paper 2. The slope of a line through (x1,y1) and (x2,y2) is m = (y2 - y1)/(x2 - x1). A horizontal line has slope 0 and a vertical line has undefined slope. If a line passes through (x1,y1) with slope m, its equation is y - y1 = m(x - x1), called point-slope form. Rearranging gives slope-intercept form y = mx + c, where c is the y-intercept. The general form ax + by + c = 0 is useful for perpendicular distance calculations.\n\nParallel lines have equal slopes: m1 = m2. Perpendicular lines satisfy m1 * m2 = -1, meaning their slopes are negative reciprocals. To prove two lines are perpendicular, show their slope product is -1. The midpoint of a segment from (x1,y1) to (x2,y2) is M = ((x1+x2)/2, (y1+y2)/2). The distance between two points is d = sqrt((x2-x1)^2 + (y2-y1)^2).\n\nThe perpendicular distance from a point (x1,y1) to the line ax + by + c = 0 is d = |ax1 + by1 + c| / sqrt(a^2 + b^2). This formula requires the line to be in general form. If the line is in y = mx + c form, rewrite as mx - y + c = 0 first.\n\nTo divide a line segment from A(x1,y1) to B(x2,y2) in the ratio m:n internally, use x = (m*x2 + n*x1)/(m+n) and y = (m*y2 + n*y1)/(m+n). For external division, change the + signs to - signs in the denominator.\n\nThe angle between two lines with slopes m1 and m2 is found by tan(theta) = |(m1 - m2)/(1 + m1*m2)|. If m1*m2 = -1 the lines are perpendicular and the formula gives division by zero, confirming a 90-degree angle. If the lines are parallel (m1 = m2), the formula gives 0.\n\nWorked Example: Find the equation of the line through (3,5) perpendicular to 2x + 3y - 7 = 0. Step 1: Find slope of given line: 2x + 3y = 7, so y = (-2/3)x + 7/3, giving m1 = -2/3. Step 2: Perpendicular slope: m2 = -1/m1 = -1/(-2/3) = 3/2. Step 3: Use point-slope form: y - 5 = (3/2)(x - 3), so 2y - 10 = 3x - 9, giving 3x - 2y + 1 = 0.\n\nWorked Example: Find the perpendicular distance from (4, -1) to the line 3x - 4y + 5 = 0. d = |3(4) - 4(-1) + 5| / sqrt(9 + 16) = |12 + 4 + 5| / sqrt(25) = 21/5 = 4.2 units.\n\nWorked Example: Find the point dividing the segment from A(1,2) to B(7,8) in the ratio 2:1. x = (2*7 + 1*1)/(2+1) = 15/3 = 5. y = (2*8 + 1*2)/(2+1) = 18/3 = 6. The point is (5,6).",
        keyTerms: ["slope", "point-slope form", "slope-intercept form", "general form", "parallel", "perpendicular", "midpoint", "distance", "perpendicular distance", "section formula", "angle between lines"],
        formula: "m = (y2-y1)/(x2-x1)\ny - y1 = m(x - x1)\nDistance: d = sqrt((x2-x1)^2 + (y2-y1)^2)\nMidpoint: ((x1+x2)/2, (y1+y2)/2)\nPerp. distance: |ax1+by1+c| / sqrt(a^2+b^2)\nAngle: tan(theta) = |(m1-m2)/(1+m1*m2)|\nSection: x = (mx2+nx1)/(m+n)\nPerpendicular: m1*m2 = -1",
        examTip: "Line questions are almost always Q1 on Paper 2 and are worth 25 marks. Always find slopes first by rearranging to y = mx + c. For perpendicular distance, the line MUST be in ax + by + c = 0 form. Show every step of your substitution -- marks are awarded for method, not just the answer."
      },
      {
        title: "The Circle: Equations, Tangents, and Intersections",
        content: "A circle with centre (h,k) and radius r has equation (x - h)^2 + (y - k)^2 = r^2 (standard form). Expanding gives the general form x^2 + y^2 + 2gx + 2fy + c = 0, where centre = (-g, -f) and radius = sqrt(g^2 + f^2 - c). For a real circle, g^2 + f^2 - c > 0.\n\nTo convert general to standard form, complete the square. Example: x^2 + y^2 - 6x + 4y - 12 = 0 becomes (x-3)^2 + (y+2)^2 = 25. Centre (3,-2), radius 5.\n\nA tangent is perpendicular to the radius at the point of tangency. Tangent slope = -(x1-h)/(y1-k). The tangent at (x1,y1) to x^2 + y^2 + 2gx + 2fy + c = 0 is: x*x1 + y*y1 + g(x+x1) + f(y+y1) + c = 0.\n\nLine-circle intersection: substitute line into circle equation. Discriminant D > 0: two points (secant). D = 0: tangent. D < 0: no intersection.\n\nLength of tangent from (x1,y1) to circle x^2 + y^2 + 2gx + 2fy + c = 0 is L = sqrt(x1^2 + y1^2 + 2g*x1 + 2f*y1 + c).\n\nTwo circles with distance d between centres and radii r1, r2: d > r1+r2 means no intersection; d = r1+r2 means external tangency; |r1-r2| < d < r1+r2 means two points; d = |r1-r2| means internal tangency. The common chord is found by subtracting one equation from the other.\n\nWorked Example: Find tangents from (7,1) to x^2 + y^2 = 25. Tangent form: mx - y + (1-7m) = 0. Distance from (0,0) = 5: |1-7m|/sqrt(m^2+1) = 5. Squaring: (1-7m)^2 = 25(m^2+1). Gives 12m^2 - 7m - 12 = 0. m = (7+/-25)/24, so m = 4/3 or m = -3/4.\n\nWorked Example: Common chord of x^2+y^2-4x+6y-12=0 and x^2+y^2+2x-4y-8=0. Subtract: -6x+10y-4=0, giving 3x-5y+2=0.",
        keyTerms: ["centre", "radius", "standard form", "general form", "tangent", "secant", "discriminant", "common chord", "external tangency", "internal tangency", "length of tangent"],
        formula: "(x-h)^2 + (y-k)^2 = r^2\nCentre: (-g,-f), r = sqrt(g^2+f^2-c)\nTangent at (x1,y1): x*x1 + y*y1 + g(x+x1) + f(y+y1) + c = 0\nLength of tangent: sqrt(x1^2+y1^2+2gx1+2fy1+c)\nCommon chord: subtract one equation from the other\nTangent condition: discriminant = 0",
        examTip: "Circle questions are Q2 on Paper 2 and are worth 25 marks. The most common question type asks you to find a tangent equation or a value of k. Always complete the square to identify the centre and radius. For tangent questions, remember: tangent is perpendicular to radius, so use the negative reciprocal slope. If a question asks for two tangents from an external point, use the perpendicular distance formula set equal to the radius."
      },
      {
        title: "Translations, Transformations, and Applied Geometry",
        content: "Translations shift every point by the same vector. For y = f(x): f(x-a) shifts RIGHT by a; f(x+a) shifts LEFT by a; f(x)+b shifts UP by b; f(x)-b shifts DOWN by b. Horizontal shifts act opposite to the sign.\n\nVertical stretch: y = af(x) stretches by factor a. Horizontal compression: y = f(ax) compresses by factor 1/a. Reflections: y = -f(x) reflects in x-axis; y = f(-x) reflects in y-axis.\n\nApplied to circles: translating (x-h)^2 + (y-k)^2 = r^2 by vector (p,q) gives (x-h-p)^2 + (y-k-q)^2 = r^2. Centre moves to (h+p, k+q), radius unchanged.\n\nApplied to lines: translating y = mx + c by (p,q) gives y = mx + (c-mp+q). Slope unchanged.\n\nComposite transformations apply in order. The image of (x,y) under: x-axis symmetry = (x,-y); y-axis symmetry = (-x,y); origin symmetry = (-x,-y); y=x symmetry = (y,x).\n\nWorked Example: y = x^2 - 4x + 3 translated 2 right and 3 up. Complete the square: y = (x-2)^2 - 1. After translation: y = (x-4)^2 + 2 = x^2 - 8x + 18.\n\nWorked Example: y = sin(x) mapped to y = 3sin(2x) + 1: vertical stretch by 3, horizontal compression by 1/2 (period 180), vertical shift up 1.",
        keyTerms: ["translation", "transformation", "stretch", "compression", "reflection", "composite transformation", "image", "axial symmetry", "central symmetry", "vector"],
        formula: "Right a: f(x-a)\nLeft a: f(x+a)\nUp b: f(x)+b\nDown b: f(x)-b\nVertical stretch a: a*f(x)\nHorizontal compress a: f(a*x)\nReflect x-axis: -f(x)\nReflect y-axis: f(-x)\nCircle translated by (p,q): (x-h-p)^2 + (y-k-q)^2 = r^2",
        examTip: "Transformation questions appear on both Paper 1 and Paper 2. The most common mistake is getting horizontal shifts backward: f(x-3) shifts RIGHT by 3, not left. For circle translations, just move the centre -- do not change the radius. If asked to describe a transformation, always state the type, direction, and magnitude."
      }
    ]
  },
  {
    topic: "Trigonometry",
    icon: "📊",
    subtopics: [
      {
        title: "Trigonometric Identities and Proofs",
        content: "The fundamental Pythagorean identity is sin^2(A) + cos^2(A) = 1. This can be rearranged to sin^2(A) = 1 - cos^2(A) or cos^2(A) = 1 - sin^2(A). Dividing through by cos^2(A) gives tan^2(A) + 1 = sec^2(A). Dividing through by sin^2(A) gives 1 + cot^2(A) = csc^2(A). These identities are essential for simplifying expressions and proving other results.\n\nThe compound angle formulas (addition formulas) are: sin(A + B) = sinA*cosB + cosA*sinB, sin(A - B) = sinA*cosB - cosA*sinB, cos(A + B) = cosA*cosB - sinA*sinB, cos(A - B) = cosA*cosB + sinA*sinB. The tangent compound formula is tan(A + B) = (tanA + tanB)/(1 - tanA*tanB).\n\nThe double angle formulas are derived by setting B = A in the compound angle formulas. sin(2A) = 2sinA*cosA. cos(2A) has three equivalent forms: cos(2A) = cos^2(A) - sin^2(A) = 2cos^2(A) - 1 = 1 - 2sin^2(A). Choose the form that matches what you already know or need. tan(2A) = 2tanA/(1 - tan^2(A)).\n\nHalf-angle formulas follow from the double angle formulas. From cos(2A) = 2cos^2(A) - 1, rearranging gives cos^2(A) = (1 + cos(2A))/2. From cos(2A) = 1 - 2sin^2(A), rearranging gives sin^2(A) = (1 - cos(2A))/2. These are useful for integration and for expressing sin^2 or cos^2 in terms of the double angle.\n\nProduct-to-sum formulas: sinA*cosB = (1/2)[sin(A+B) + sin(A-B)]. cosA*sinB = (1/2)[sin(A+B) - sin(A-B)]. cosA*cosB = (1/2)[cos(A+B) + cos(A-B)]. sinA*sinB = (1/2)[cos(A-B) - cos(A+B)].\n\nTo prove a trigonometric identity, work on one side only (usually the more complicated side) and manipulate it until it equals the other side. Common strategies include: expressing everything in terms of sin and cos, using Pythagorean identities, factoring, finding common denominators, and using double angle formulas.\n\nWorked Example: Prove that (1 + cos(2A))/sin(2A) = 1/tanA. LHS = (1 + 2cos^2(A) - 1)/(2sinA*cosA) = 2cos^2(A)/(2sinA*cosA) = cosA/sinA = 1/tanA = RHS.\n\nWorked Example: Prove that sin(3A) = 3sinA - 4sin^3(A). Write sin(3A) = sin(2A + A) = sin(2A)cosA + cos(2A)sinA = 2sinA*cos^2(A) + (1 - 2sin^2(A))sinA = 2sinA(1 - sin^2(A)) + sinA - 2sin^3(A) = 2sinA - 2sin^3(A) + sinA - 2sin^3(A) = 3sinA - 4sin^3(A).\n\nExact values you must know: sin(0) = 0, sin(30) = 1/2, sin(45) = sqrt(2)/2, sin(60) = sqrt(3)/2, sin(90) = 1. cos(0) = 1, cos(30) = sqrt(3)/2, cos(45) = sqrt(2)/2, cos(60) = 1/2, cos(90) = 0. tan(0) = 0, tan(30) = 1/sqrt(3), tan(45) = 1, tan(60) = sqrt(3), tan(90) = undefined. These are critical for evaluating expressions without a calculator in Paper 1.",
        keyTerms: ["Pythagorean identity", "compound angle", "double angle", "half-angle", "product-to-sum", "exact values", "identity proof", "sin", "cos", "tan"],
        formula: "sin^2(A) + cos^2(A) = 1\nsin(A+B) = sinAcosB + cosAsinB\ncos(A+B) = cosAcosB - sinAsinB\nsin(2A) = 2sinAcosA\ncos(2A) = cos^2A - sin^2A = 2cos^2A - 1 = 1 - 2sin^2A\ntan(A+B) = (tanA+tanB)/(1-tanAtanB)\ncos^2A = (1+cos2A)/2\nsin^2A = (1-cos2A)/2",
        examTip: "Identity proofs are high-value questions. Always work on ONE side only -- never move terms across the equals sign. The most useful substitution is replacing 1 with sin^2+cos^2 or replacing cos(2A) with one of its three forms. State which identity you are using at each step for full marks."
      },
      {
        title: "Solving Trigonometric Equations",
        content: "Trigonometric equations require finding all angles in a given domain that satisfy the equation. The general approach is: isolate the trig function, find the reference angle, then use the CAST diagram to identify all solutions in the required range.\n\nThe CAST rule tells you which trig functions are positive in each quadrant. In Q1 (0-90 degrees), All are positive. In Q2 (90-180), only Sin is positive. In Q3 (180-270), only Tan is positive. In Q4 (270-360), only Cos is positive. Remember: All Students Take Calculus.\n\nFor sin(x) = k where -1 <= k <= 1: the reference angle is alpha = arcsin(|k|). If k > 0, solutions are in Q1 and Q2: x = alpha and x = 180 - alpha. If k < 0, solutions are in Q3 and Q4: x = 180 + alpha and x = 360 - alpha. For cos(x) = k: reference angle alpha = arccos(|k|). If k > 0, solutions are in Q1 and Q4: x = alpha and x = 360 - alpha. If k < 0, solutions are in Q2 and Q3: x = 180 - alpha and x = 180 + alpha. For tan(x) = k: reference angle alpha = arctan(|k|). If k > 0, solutions are in Q1 and Q3: x = alpha and x = 180 + alpha. If k < 0, solutions are in Q2 and Q4: x = 180 - alpha and x = 360 - alpha.\n\nGeneral solutions give ALL solutions, not just those in [0, 360]. For sin(x) = k: x = arcsin(k) + 360n or x = (180 - arcsin(k)) + 360n. For cos(x) = k: x = +/- arccos(k) + 360n. For tan(x) = k: x = arctan(k) + 180n. Here n is any integer.\n\nEquations involving multiple angles: For sin(2x) = k, solve for 2x first (finding all solutions in an extended range) then divide by 2. If the domain for x is [0, 360], then 2x ranges over [0, 720], so you may find up to 4 solutions. Similarly, for sin(3x) = k with x in [0, 360], 3x ranges over [0, 1080] giving up to 6 solutions.\n\nQuadratic trig equations: If the equation involves sin^2(x) or cos^2(x), substitute u = sin(x) or u = cos(x) to get a quadratic in u. Solve for u, then find x. Remember that sin(x) and cos(x) must be between -1 and 1 -- reject any solution outside this range.\n\nWorked Example: Solve 2sin^2(x) - sin(x) - 1 = 0 for 0 <= x <= 360. Let u = sin(x): 2u^2 - u - 1 = 0, so (2u + 1)(u - 1) = 0. u = -1/2 or u = 1. For sin(x) = -1/2: reference angle = 30. Solutions in Q3 and Q4: x = 210 and x = 330. For sin(x) = 1: x = 90. Answer: x = 90, 210, 330.\n\nWorked Example: Solve cos(2x) + cos(x) = 0 for 0 <= x <= 360. Replace cos(2x) with 2cos^2(x) - 1: 2cos^2(x) - 1 + cos(x) = 0, so 2cos^2(x) + cos(x) - 1 = 0. Let u = cos(x): (2u - 1)(u + 1) = 0. u = 1/2 or u = -1. For cos(x) = 1/2: x = 60 and x = 300. For cos(x) = -1: x = 180. Answer: x = 60, 180, 300.\n\nWorked Example: Solve sin(3x) = sqrt(3)/2 for 0 <= x <= 360. Let t = 3x, so t ranges from 0 to 1080. sin(t) = sqrt(3)/2, reference angle = 60. Solutions: t = 60, 120, 420, 480, 780, 840. Dividing by 3: x = 20, 40, 140, 160, 260, 280.",
        keyTerms: ["CAST rule", "reference angle", "general solution", "quadrant", "inverse trig", "quadratic trig equation", "multiple angle", "domain", "range"],
        formula: "sin(x) = k: x = arcsin(k) + 360n, (180-arcsin(k)) + 360n\ncos(x) = k: x = +/-arccos(k) + 360n\ntan(x) = k: x = arctan(k) + 180n\nFor sin(nx) = k: solve for nx in extended range, divide by n\nQuadratic: substitute u = sin(x) or cos(x)",
        examTip: "Always check the given domain before writing your final answer. For multiple-angle equations like sin(2x), extend the range before solving. For quadratic trig equations, check that your u-value is between -1 and 1. Draw a CAST diagram for every equation -- it prevents missed or incorrect solutions."
      },
      {
        title: "Area of a Triangle and the Sine Rule",
        content: "The area of a triangle when you know two sides and the included angle is Area = (1/2)*a*b*sinC, where a and b are the two known sides and C is the angle between them. This formula is extremely versatile and appears on the Maths Tables booklet. If you know the base and height, use Area = (1/2)*base*height.\n\nThe sine rule states a/sinA = b/sinB = c/sinC, where a is the side opposite angle A, b is opposite B, and c is opposite C. The sine rule can also be written in the inverted form sinA/a = sinB/b = sinC/c, which is sometimes more convenient when finding angles.\n\nUse the sine rule when you know: (i) two angles and one side (AAS or ASA), or (ii) two sides and a non-included angle (SSA -- the ambiguous case). In case (i) the third angle is found from A + B + C = 180, then use the sine rule to find the unknown side.\n\nThe ambiguous case (SSA) arises when you know two sides and an angle NOT between them. Given angle A and sides a and b (where A is opposite side a), there may be 0, 1, or 2 possible triangles. If sinB = b*sinA/a, then: if sinB > 1, no triangle exists; if sinB = 1, one right-angled triangle; if sinB < 1, there are potentially two values of B (one acute, one obtuse). Check whether the obtuse angle gives a valid triangle (angles must sum to 180).\n\nWorked Example: In triangle ABC, angle A = 40 degrees, a = 8, b = 10. Find angle B. By the sine rule: sinB/b = sinA/a, so sinB = b*sinA/a = 10*sin(40)/8 = 10*0.6428/8 = 0.8035. B = arcsin(0.8035) = 53.5 degrees or B = 180 - 53.5 = 126.5 degrees. Check: A + B < 180. For B = 53.5: 40 + 53.5 = 93.5 < 180. Valid. For B = 126.5: 40 + 126.5 = 166.5 < 180. Valid. So TWO triangles are possible.\n\nWorked Example: Find the area of triangle PQR where p = 7, q = 9, and angle R = 65 degrees. Area = (1/2)*p*q*sinR = (1/2)*7*9*sin(65) = (1/2)*7*9*0.9063 = 28.55 square units.\n\nHero's formula (Heron's formula) gives the area when all three sides are known: s = (a+b+c)/2 (the semi-perimeter), then Area = sqrt(s*(s-a)*(s-b)*(s-c)). This is useful when no angle is given directly.\n\nWorked Example: Find the area of a triangle with sides 5, 7, 10. s = (5+7+10)/2 = 11. Area = sqrt(11*6*4*1) = sqrt(264) = 2*sqrt(66) = approx 16.25 square units.",
        keyTerms: ["area of triangle", "sine rule", "ambiguous case", "SSA", "AAS", "ASA", "Hero's formula", "semi-perimeter", "included angle"],
        formula: "Area = (1/2)*a*b*sinC\nSine rule: a/sinA = b/sinB = c/sinC\nHero's formula: Area = sqrt(s(s-a)(s-b)(s-c))\ns = (a+b+c)/2\nAmbiguous case: sinB = b*sinA/a, check 0, 1, or 2 solutions",
        examTip: "Choose the sine rule when you have an angle-side opposite pair. For the ambiguous case, always check BOTH possible angles (acute and obtuse) and verify each gives a valid triangle. Show your formula, substitution, and final answer clearly. Hero's formula is on the Tables booklet and is handy when you know all three sides but no angle."
      },
      {
        title: "The Cosine Rule and Applications",
        content: "The cosine rule is used when the sine rule cannot be applied directly. It comes in two forms. To find a side: c^2 = a^2 + b^2 - 2ab*cosC. To find an angle: cosC = (a^2 + b^2 - c^2)/(2ab). Use the cosine rule when you know: (i) two sides and the included angle (SAS) to find the third side, or (ii) all three sides (SSS) to find an angle.\n\nNote that the cosine rule is a generalisation of Pythagoras' theorem. When C = 90 degrees, cosC = 0, and the formula reduces to c^2 = a^2 + b^2. If C < 90 (acute), the -2ab*cosC term is negative so c^2 < a^2 + b^2. If C > 90 (obtuse), cosC is negative so -2ab*cosC becomes positive and c^2 > a^2 + b^2.\n\nStep-by-step method for finding a side (SAS): 1. Identify the angle and its two adjacent sides. 2. Substitute into c^2 = a^2 + b^2 - 2ab*cosC. 3. Calculate c^2, then take the positive square root.\n\nStep-by-step method for finding an angle (SSS): 1. Choose the angle you want (often the largest angle, which is opposite the longest side). 2. Rearrange to cosC = (a^2 + b^2 - c^2)/(2ab). 3. Calculate the value. 4. Find C = arccos(value). If cosC is negative, the angle is obtuse.\n\nWorked Example (SAS): In triangle ABC, a = 8, b = 11, angle C = 37 degrees. Find c. c^2 = 8^2 + 11^2 - 2(8)(11)cos(37) = 64 + 121 - 176*0.7986 = 185 - 140.55 = 44.45. c = sqrt(44.45) = 6.67 units.\n\nWorked Example (SSS): In triangle ABC, a = 5, b = 7, c = 9. Find the largest angle. The largest angle is opposite the longest side (c = 9), so find angle C. cosC = (25 + 49 - 81)/(2*5*7) = -7/70 = -0.1. C = arccos(-0.1) = 95.7 degrees. Since cosC < 0, the angle is obtuse, which makes sense as the longest side is opposite the largest angle.\n\nWorked Example: Two ships leave a port at the same time. Ship A travels 15 km on a bearing of 040 degrees and Ship B travels 20 km on a bearing of 120 degrees. Find the distance between the ships. The angle at the port between the two paths is 120 - 40 = 80 degrees. Using the cosine rule: d^2 = 15^2 + 20^2 - 2(15)(20)cos(80) = 225 + 400 - 600*0.1736 = 625 - 104.2 = 520.8. d = sqrt(520.8) = 22.8 km.\n\nCombining sine and cosine rules: In many problems, you need both rules. Use the cosine rule first to find a missing side (if SAS) or angle (if SSS), then switch to the sine rule (which is simpler) to find remaining unknowns.",
        keyTerms: ["cosine rule", "SAS", "SSS", "included angle", "obtuse angle", "bearing", "Pythagoras", "generalisation"],
        formula: "c^2 = a^2 + b^2 - 2ab*cosC\ncosC = (a^2 + b^2 - c^2)/(2ab)\nWhen C = 90: reduces to c^2 = a^2 + b^2\nBearing problems: angle between paths = difference in bearings",
        examTip: "The cosine rule frequently appears in Q6 of Paper 2. For SAS problems, substitute carefully -- the angle MUST be between the two known sides. For SSS, if cosC is negative the angle is obtuse. Always start with the cosine rule when you have SAS or SSS, then switch to the sine rule for remaining parts."
      },
      {
        title: "Trigonometric Graphs and Transformations",
        content: "The three basic trig functions: y = sin(x) oscillates between -1 and 1 with period 360 degrees, starting at 0. y = cos(x) oscillates between -1 and 1 with period 360, starting at 1. y = tan(x) has period 180 degrees and asymptotes at 90, 270, etc.\n\nThe general form y = a*sin(b(x-c)) + d has: amplitude |a|, period 360/b degrees, phase shift c, vertical shift d, range [d-|a|, d+|a|]. Cosine is identical but starts at its maximum.\n\nSketching y = 3sin(2x) + 1: amplitude 3, period 180, centre line y = 1, range [-2, 4]. Key points: (0,1), (45,4), (90,1), (135,-2), (180,1).\n\nFinding the equation from a graph: amplitude = (max-min)/2, vertical shift = (max+min)/2, period = 360/b, phase shift from position of first max or zero.\n\nWorked Example: Sine curve with max 5, min -1, period 120. Amplitude = 3, shift = 2, b = 3. Equation: y = 3sin(3x) + 2.",
        keyTerms: ["amplitude", "period", "phase shift", "vertical shift", "sine graph", "cosine graph", "tangent graph", "asymptote", "range", "cycle"],
        formula: "y = a*sin(b(x-c)) + d\nAmplitude = |a|\nPeriod = 360/b (degrees) or 2pi/b (radians)\nPhase shift = c\nVertical shift = d\nRange: [d-|a|, d+|a|]\nAmplitude = (max-min)/2\nVertical shift = (max+min)/2",
        examTip: "Graph questions often ask you to identify or write the equation from a given graph. Read off the max and min values carefully. Remember that period = 360/b, NOT b/360. For phase shifts, look at where the curve starts relative to a standard sin or cos curve. Always label axes and key points on your sketch."
      }
    ]
  },
  {
    topic: "Geometry Theorems",
    icon: "🔺",
    subtopics: [
      {
        title: "Theorems You Must Know (Statements and Applications)",
        content: "There are 21 theorems plus corollaries and converses. You must know all statements and apply them.\n\nTriangle theorems: Theorem 4 -- angles in a triangle sum to 180. Theorem 6 -- exterior angle = sum of two non-adjacent interior angles. Theorem 14 (Pythagoras) -- in a right triangle, hypotenuse^2 = sum of squares of other two sides. Converse: if a^2+b^2=c^2, the triangle is right-angled.\n\nParallelogram: Theorem 9 -- opposite sides and angles are equal. Theorem 10 -- diagonals bisect each other.\n\nParallel lines: Theorem 11 -- three parallel lines cutting equal segments on one transversal cut equal segments on any transversal. Theorem 12 -- a line parallel to one side of a triangle divides the other two sides in the same ratio. Both are examinable proofs.\n\nSimilar triangles: Theorem 13 -- similar triangles have proportional sides. Tests: AA, SSS ratio, SAS ratio. Third examinable proof.\n\nCircle theorems: Theorem 19 -- angle at centre = 2 * angle at circumference on same arc. Theorem 20 -- angles in same segment are equal. Corollary: angle in semicircle = 90. Theorem 21 -- tangent perpendicular to radius. Additional: perpendicular from centre bisects chord; alternate segment theorem.\n\nWorked Example: Angle AOB = 130 at centre, find angle ACB on major arc. By Theorem 19: ACB = 130/2 = 65 degrees.\n\nWorked Example: Line parallel to QR meets PQ at X, PR at Y. PX=4, XQ=6, PY=5. By Theorem 12: 4/6 = 5/YR, so YR = 7.5.",
        keyTerms: ["theorem", "corollary", "converse", "Pythagoras", "parallel lines", "similar triangles", "angle at centre", "angle in semicircle", "tangent", "chord", "parallelogram", "exterior angle"],
        formula: "Angle sum in triangle = 180\nExterior angle = sum of remote interior angles\nPythagoras: a^2 + b^2 = c^2\nAngle at centre = 2 * angle at circumference\nAngle in semicircle = 90\nParallel line ratio: PX/XQ = PY/YR\nSimilar triangles: a/d = b/e = c/f",
        examTip: "Know every theorem by number and statement. In the exam, refer to theorems by number (e.g., 'by Theorem 19'). For circle theorems, always identify the centre, the arc, and whether the angle is at the centre or circumference. Many students lose marks by not citing the correct theorem."
      },
      {
        title: "The Three Examinable Proofs",
        content: "One of Theorems 11, 12, or 13 appears every year, worth up to 25 marks. Learn all three.\n\nTheorem 11: Three parallel lines cutting equal segments on one transversal cut equal segments on any other. Given parallels l, m, n cutting t1 at A,B,C with AB=BC and t2 at D,E,F. Prove DE=EF. Construction: Through D, E draw lines parallel to t1 meeting m at G and n at H. ABDG is a parallelogram so DG=AB. BCEH is a parallelogram so EH=BC. Since AB=BC, DG=EH. Triangles DGE and EHF are congruent by ASA (corresponding angles with parallels, DG=EH). Therefore DE=EF.\n\nTheorem 12: Line parallel to BC cutting AB at D, AC at E gives AD/DB = AE/EC. Construction: Through D draw line parallel to AC meeting BC at F. DECF is a parallelogram (DF=EC, DE=FC). Triangles ADE and DBF are similar (AA). Therefore AD/DB = AE/EC.\n\nTheorem 13: Similar triangles have proportional sides. Given angle A=D, B=E, C=F. Construction: On AB mark G with AG=DE. Draw GH parallel to BC. By Theorem 12, AG/AB = AH/AC. Triangle AGH similar to ABC (AA), so AG/AB = GH/BC = AH/AC. Since AG=DE and angles match, AGH is congruent to DEF (ASA). Therefore DE/AB = EF/BC = DF/AC.\n\nProof tips: State Given and To Prove. Show construction. Cite theorem numbers. Draw clear labelled diagrams.",
        keyTerms: ["Theorem 11", "Theorem 12", "Theorem 13", "parallel lines", "transversal", "similar triangles", "proportional sides", "construction", "congruent", "ASA", "parallelogram"],
        formula: "Theorem 11: Equal intercepts on one transversal => equal intercepts on all transversals\nTheorem 12: Line parallel to base divides sides proportionally: AD/DB = AE/EC\nTheorem 13: Similar triangles have proportional sides: a/d = b/e = c/f",
        examTip: "Learn all three proofs by heart. In the exam, use a clean diagram, label every point, and cite theorem numbers at each step. The 2025 exam asked for Theorem 13. Common mistakes include: forgetting the construction step, not justifying why triangles are similar, and not clearly stating the conclusion. Practice writing each proof from memory."
      },
      {
        title: "Constructions (Compass and Straightedge)",
        content: "You must perform constructions using only compass and straightedge, showing all arcs.\n\nBisect a line segment: From A and B, draw arcs (radius > half AB) above and below. Connect intersections to get the perpendicular bisector.\n\nBisect an angle: Arc from vertex cuts both arms at P, Q. Equal arcs from P and Q intersect at R. Line vertex-R bisects the angle.\n\nPerpendicular at a point on a line: Mark equal distances either side, draw arcs from both marks to intersect above/below. Connect intersections.\n\nPerpendicular from external point: Arc from point crosses line at two places. Equal arcs from these intersect on opposite side. Connect to external point.\n\nParallel line through a point: Copy the angle between the existing line and a transversal at the given point using corresponding angles.\n\nDivide segment in ratio m:n: Draw a ray, mark m+n equal segments, join last to endpoint, draw parallels through other marks.\n\nCircumcircle: Perpendicular bisectors of any two sides meet at circumcentre. Draw circle through any vertex.\n\nIncircle: Angle bisectors of any two angles meet at incentre. Drop perpendicular to any side for radius.\n\nTangent from external point: Join point to centre, find midpoint, draw circle on this diameter -- intersects original circle at tangent points.\n\nKey centres: Circumcentre = perpendicular bisectors (equidistant from vertices). Incentre = angle bisectors (equidistant from sides). Centroid = medians (divides 2:1). Orthocentre = altitudes.",
        keyTerms: ["compass", "straightedge", "bisect", "perpendicular bisector", "angle bisector", "circumscribed circle", "inscribed circle", "circumcentre", "incentre", "centroid", "orthocentre", "tangent construction", "divide in ratio"],
        formula: "Circumcentre = intersection of perpendicular bisectors\nIncentre = intersection of angle bisectors\nCentroid = intersection of medians (divides 2:1 from vertex)\nOrthocentre = intersection of altitudes",
        examTip: "NEVER erase construction arcs -- they are part of your answer and earn marks. Use a sharp pencil and a good compass. If asked to construct a circumcircle, you need perpendicular bisectors of TWO sides. For an incircle, you need angle bisectors of TWO angles. The most common exam question is to construct a circumscribed or inscribed circle, or to divide a segment in a given ratio."
      },
      {
        title: "Enlargements, Similar Figures, and Geometric Reasoning",
        content: "An enlargement scales all distances from a centre by factor k. If k > 1, image is larger; 0 < k < 1, smaller; k < 0, inverted. Lengths multiply by |k|, areas by k^2, angles unchanged.\n\nSimilar figures have equal angles and proportional sides. Tests for similar triangles: AA (two equal angles), SSS ratio (all sides proportional), SAS ratio (two sides proportional with equal included angle). If scale factor k, then area ratio = k^2, perimeter ratio = k.\n\nCongruent triangles (k=1) tests: SSS, SAS, ASA, RHS.\n\nWorked Example: Sides 6,8,10 and 9,12,15. Ratios: 9/6 = 12/8 = 15/10 = 3/2. Similar by SSS with k = 3/2. Area ratio = 9/4.\n\nWorked Example: Triangles PQR and PST similar, PS=4, SQ=6, QR=15. Scale factor = 4/10 = 2/5. ST = (2/5)*15 = 6.\n\nGeometric proof strategies: state given and to-prove, draw labelled diagram, cite theorem numbers, prove congruence/similarity, use parallel line properties and circle theorems.",
        keyTerms: ["enlargement", "dilation", "scale factor", "similar figures", "congruent triangles", "AA", "SSS similarity", "SAS similarity", "SSS congruence", "ASA", "RHS", "area ratio", "proportional"],
        formula: "Scale factor k: lengths * k, areas * k^2, volumes * k^3\nSimilar triangles: a/d = b/e = c/f\nCongruence tests: SSS, SAS, ASA, RHS\nSimilarity tests: AA, SSS ratio, SAS ratio\nArea ratio = (length ratio)^2",
        examTip: "The most common similarity question gives you overlapping triangles -- identify the common angle and the equal corresponding angles. Always state which similarity or congruence test you are using (AA, SSS, SAS, etc.). When writing the similarity statement, match vertices in order of corresponding angles: triangle ABC similar to triangle DEF means angle A = angle D, angle B = angle E, angle C = angle F."
      }
    ]
  },
  {
    topic: "Probability",
    icon: "🎲",
    subtopics: [
      {
        title: "Fundamental Probability Rules and Counting",
        content: "Probability measures how likely an event is, on a scale from 0 (impossible) to 1 (certain). The probability of event A is P(A) = number of favourable outcomes / total number of equally likely outcomes. The complement rule states P(not A) = 1 - P(A), which is extremely useful for 'at least one' problems.\n\nThe addition rule (OR rule) for two events: P(A or B) = P(A union B) = P(A) + P(B) - P(A intersection B). If A and B are mutually exclusive (cannot happen at the same time), then P(A intersection B) = 0, so P(A or B) = P(A) + P(B). Events are mutually exclusive if they have no outcomes in common.\n\nThe multiplication rule (AND rule): P(A and B) = P(A intersection B) = P(A) * P(B|A), where P(B|A) is the conditional probability of B given that A has occurred. If A and B are independent (one does not affect the other), then P(B|A) = P(B), so P(A and B) = P(A) * P(B).\n\nConditional probability: P(A|B) = P(A intersection B) / P(B). This gives the probability of A occurring given that B has already occurred. Independence can be tested: A and B are independent if and only if P(A intersection B) = P(A) * P(B), or equivalently P(A|B) = P(A).\n\nCounting principles: The fundamental counting principle states that if there are m ways to do one thing and n ways to do another, there are m * n ways to do both. This extends to any number of tasks.\n\nPermutations count arrangements where order matters: nPr = n!/(n-r)! gives the number of ways to arrange r items from n distinct items. The number of ways to arrange n items in a row is n!. The number of arrangements of n items where there are duplicates: n!/(n1! * n2! * ... * nk!) where n1, n2, ..., nk are the frequencies of the repeated items.\n\nCombinations count selections where order does not matter: nCr = C(n,r) = n!/(r!(n-r)!). This is the number of ways to choose r items from n without regard to order. Key property: C(n,r) = C(n, n-r).\n\nWorked Example: A committee of 4 is to be chosen from 6 men and 5 women. How many committees have at least 2 women? Method: count committees with exactly 2, 3, or 4 women. Exactly 2 women: C(5,2)*C(6,2) = 10*15 = 150. Exactly 3 women: C(5,3)*C(6,1) = 10*6 = 60. Exactly 4 women: C(5,4)*C(6,0) = 5*1 = 5. Total = 150 + 60 + 5 = 215.\n\nWorked Example: In how many ways can the letters of MISSISSIPPI be arranged? 11 letters: M(1), I(4), S(4), P(2). Arrangements = 11!/(4!*4!*2!*1!) = 39916800/(24*24*2*1) = 34650.\n\nVenn diagrams are essential for organising probability information. For two events, draw two overlapping circles inside a rectangle (the sample space). Fill in the intersection first, then the remaining parts of each circle, then the region outside both circles. All four regions must sum to the total.",
        keyTerms: ["probability", "complement", "addition rule", "multiplication rule", "conditional probability", "independence", "mutually exclusive", "counting principle", "permutation", "combination", "Venn diagram", "factorial"],
        formula: "P(A or B) = P(A) + P(B) - P(A intersection B)\nP(A and B) = P(A) * P(B|A)\nP(A|B) = P(A intersection B) / P(B)\nP(not A) = 1 - P(A)\nnPr = n!/(n-r)!\nnCr = n!/(r!(n-r)!)\nArrangements with repeats: n!/(n1!*n2!*...)",
        examTip: "Always start by reading the question carefully and deciding whether order matters (permutation) or not (combination). For Venn diagram questions, fill in the INTERSECTION FIRST. For independence, show the calculation P(A)*P(B) and compare it to P(A intersection B). For 'at least one' use 1 - P(none)."
      },
      {
        title: "Bernoulli Trials and the Binomial Distribution",
        content: "A Bernoulli trial is a single experiment with exactly two outcomes: success (probability p) and failure (probability q = 1 - p). Examples include flipping a coin, answering a True/False question, or checking if a manufactured item is defective.\n\nThe binomial distribution B(n, p) models the number of successes X in n independent Bernoulli trials, each with the same probability of success p. The four conditions for a binomial distribution are: (1) fixed number of trials n, (2) each trial has exactly two outcomes, (3) probability of success p is constant for every trial, (4) trials are independent.\n\nThe probability of exactly r successes in n trials is P(X = r) = C(n,r) * p^r * q^(n-r), where C(n,r) = n!/(r!(n-r)!) is the binomial coefficient. The values of r range from 0 to n.\n\nThe expected value (mean) of X ~ B(n,p) is E(X) = np. This tells you the average number of successes you would expect over many repetitions. The variance is Var(X) = npq and the standard deviation is SD(X) = sqrt(npq).\n\nUseful probability shortcuts: P(X >= 1) = 1 - P(X = 0) = 1 - q^n. This is much faster than calculating P(X=1) + P(X=2) + ... + P(X=n). Similarly, P(X <= k) = P(X=0) + P(X=1) + ... + P(X=k).\n\nWorked Example: A multiple-choice test has 8 questions, each with 4 options. A student guesses randomly. Find (a) P(exactly 3 correct), (b) P(at least 1 correct), (c) expected number correct. Here n = 8, p = 1/4, q = 3/4. (a) P(X=3) = C(8,3)*(1/4)^3*(3/4)^5 = 56 * (1/64) * (243/1024) = 56 * 243/65536 = 13608/65536 = 0.2076. (b) P(X >= 1) = 1 - P(X=0) = 1 - (3/4)^8 = 1 - 6561/65536 = 1 - 0.1001 = 0.8999. (c) E(X) = 8 * 1/4 = 2.\n\nWorked Example: A factory produces items with a 5% defect rate. In a sample of 20, find the probability that at most 2 are defective. P(X <= 2) = P(X=0) + P(X=1) + P(X=2). P(X=0) = C(20,0)*0.05^0*0.95^20 = 0.3585. P(X=1) = C(20,1)*0.05^1*0.95^19 = 20*0.05*0.3774 = 0.3774. P(X=2) = C(20,2)*0.05^2*0.95^18 = 190*0.0025*0.3972 = 0.1887. P(X <= 2) = 0.3585 + 0.3774 + 0.1887 = 0.9246.\n\nThe binomial distribution can be approximated by the normal distribution when n is large and p is not too close to 0 or 1 (rule of thumb: np >= 5 and nq >= 5). The approximation uses mean = np and standard deviation = sqrt(npq). A continuity correction of 0.5 is applied when using a continuous distribution to approximate a discrete one.",
        keyTerms: ["Bernoulli trial", "binomial distribution", "success", "failure", "probability", "binomial coefficient", "expected value", "variance", "standard deviation", "complement", "normal approximation"],
        formula: "P(X=r) = C(n,r) * p^r * (1-p)^(n-r)\nC(n,r) = n!/(r!(n-r)!)\nE(X) = np\nVar(X) = np(1-p)\nSD(X) = sqrt(np(1-p))\nP(X>=1) = 1 - (1-p)^n\nNormal approx: mean = np, SD = sqrt(npq) when np>=5, nq>=5",
        examTip: "Binomial distribution questions are very common in Section B. To check if the binomial model applies, verify all four conditions. Show the C(n,r) calculation explicitly. For 'at least one' ALWAYS use 1 - P(none). For 'at most k', add up P(X=0) through P(X=k). The formula is on the Tables booklet but you must know how to apply it."
      },
      {
        title: "Expected Value and Fair Games",
        content: "The expected value E(X) of a discrete random variable X is the weighted average of all possible values, weighted by their probabilities: E(X) = sum of [x * P(X = x)] for all values x. It represents the long-run average if the experiment is repeated many times. The expected value need not be one of the actual possible outcomes.\n\nTo calculate E(X), set up a probability distribution table listing all possible values of X and their probabilities. Check that all probabilities are between 0 and 1 and sum to exactly 1. Then multiply each value by its probability and add all the products.\n\nProperties of expected value: E(aX + b) = a*E(X) + b. E(X + Y) = E(X) + E(Y) (linearity, holds even if X and Y are not independent). E(c) = c where c is a constant. For the binomial distribution, E(X) = np.\n\nVariance and standard deviation: Var(X) = E(X^2) - [E(X)]^2. To find E(X^2), compute sum of [x^2 * P(X=x)]. Standard deviation = sqrt(Var(X)). Property: Var(aX + b) = a^2 * Var(X) -- adding a constant does not change variance, but multiplying by a scales variance by a^2.\n\nFair game: A game is fair if E(profit) = 0, meaning that in the long run, neither the player nor the house has an advantage. E(profit) = E(winnings) - cost to play. If E(profit) > 0, the game favours the player. If E(profit) < 0, the game favours the house.\n\nWorked Example: A game costs 5 euro to play. You roll two dice. If you get a double six, you win 150 euro. If you get any other double, you win 25 euro. Otherwise you win nothing. Is the game fair? P(double six) = 1/36. P(other double) = 5/36. P(no double) = 30/36. E(winnings) = 150*(1/36) + 25*(5/36) + 0*(30/36) = 150/36 + 125/36 = 275/36 = 7.64 euro. E(profit) = 7.64 - 5 = 2.64 euro. Since E(profit) > 0, the game is not fair -- it favours the player. To make it fair, set cost = E(winnings) = 7.64 euro.\n\nWorked Example: A random variable X has the distribution: P(X=1) = 0.3, P(X=2) = 0.5, P(X=5) = 0.2. Find E(X) and Var(X). E(X) = 1*0.3 + 2*0.5 + 5*0.2 = 0.3 + 1.0 + 1.0 = 2.3. E(X^2) = 1*0.3 + 4*0.5 + 25*0.2 = 0.3 + 2.0 + 5.0 = 7.3. Var(X) = 7.3 - 2.3^2 = 7.3 - 5.29 = 2.01. SD(X) = sqrt(2.01) = 1.42.\n\nWorked Example: To make a game fair, set the entry cost equal to E(winnings). If you want to adjust the game by changing a prize, set up E(profit) = 0 and solve for the unknown prize amount.",
        keyTerms: ["expected value", "mean", "variance", "standard deviation", "probability distribution", "fair game", "long-run average", "linearity of expectation", "discrete random variable"],
        formula: "E(X) = sum of x*P(X=x)\nE(aX+b) = a*E(X) + b\nVar(X) = E(X^2) - [E(X)]^2\nVar(aX+b) = a^2*Var(X)\nSD(X) = sqrt(Var(X))\nFair game: E(profit) = 0, i.e., cost = E(winnings)",
        examTip: "Set up a clear probability distribution table -- this earns marks and prevents errors. For fair game questions, ALWAYS calculate E(profit) = E(winnings) - cost. If asked to find the entry fee for a fair game, set E(profit) = 0 and solve. Remember E(X^2) is NOT [E(X)]^2 -- this is a very common mistake."
      },
      {
        title: "Conditional Probability and Tree Diagrams",
        content: "Conditional probability P(A|B) = P(A intersection B) / P(B) gives the probability of A given B has occurred. The sample space shrinks to B, and we find the fraction also in A.\n\nBayes' theorem: P(A|B) = P(B|A)*P(A)/P(B). The law of total probability gives the denominator: P(B) = P(B|A)*P(A) + P(B|A')*P(A').\n\nTree diagrams show sequential events. Multiply along branches for AND, add between paths for OR. With replacement, probabilities stay constant. Without replacement, denominators decrease.\n\nWorked Example: 5 red, 3 blue marbles, two drawn without replacement. P(both red) = (5/8)*(4/7) = 5/14. P(exactly one red) = (5/8)*(3/7) + (3/8)*(5/7) = 30/56 = 15/28. P(2nd blue | 1st red) = 3/7 (read from tree: 4 red, 3 blue remain).\n\nWorked Example: 60% study Maths (80% pass), 40% study English (70% pass). Given a student passed, P(Maths)? P(Pass) = 0.6*0.8 + 0.4*0.7 = 0.76. P(M|Pass) = 0.48/0.76 = 12/19.\n\nTwo-way tables organise data for conditional probability -- read probabilities as fractions of the relevant row, column, or total.",
        keyTerms: ["conditional probability", "Bayes' theorem", "tree diagram", "law of total probability", "sampling", "with replacement", "without replacement", "two-way table", "contingency table", "posterior probability"],
        formula: "P(A|B) = P(A intersection B) / P(B)\nP(B) = P(B|A)*P(A) + P(B|A')*P(A')\nBayes: P(A|B) = P(B|A)*P(A) / P(B)\nTree: multiply along branches (AND), add between paths (OR)\nWithout replacement: adjust denominators",
        examTip: "For tree diagram questions, always write probabilities on the branches clearly. The second set of branches changes if sampling is without replacement. For 'reverse' probability questions (given the result, find the cause), use Bayes' formula or a well-labelled tree diagram. Show the total probability calculation in the denominator."
      }
    ]
  },
  {
    topic: "Statistics",
    icon: "📉",
    subtopics: [
      {
        title: "The Normal Distribution and Z-Scores",
        content: "The normal distribution is the most important continuous probability distribution. It is bell-shaped, symmetric about the mean, and fully determined by two parameters: the mean (mu) and the standard deviation (sigma). The notation is X ~ N(mu, sigma^2). The mean, median, and mode are all equal. The curve extends infinitely in both directions but most data falls within 3 standard deviations of the mean.\n\nThe empirical rule (68-95-99.7 rule): approximately 68% of data lies within 1 standard deviation of the mean (mu - sigma to mu + sigma). Approximately 95% lies within 2 standard deviations (mu - 2sigma to mu + 2sigma). Approximately 99.7% lies within 3 standard deviations. This means only about 0.3% of data lies more than 3 SDs from the mean.\n\nStandardisation converts any normal distribution to the standard normal Z ~ N(0,1). The z-score formula is z = (X - mu) / sigma. A z-score tells you how many standard deviations X is above (positive z) or below (negative z) the mean. For example, if mu = 100, sigma = 15, and X = 130, then z = (130-100)/15 = 2.0, meaning 130 is exactly 2 standard deviations above the mean.\n\nUsing the z-table (pages 36-37 of the Maths Tables booklet): the table gives P(Z <= z) for positive z values. To find probabilities: P(Z < z) is read directly from the table for z > 0. P(Z > z) = 1 - P(Z < z). For negative z, use symmetry: P(Z < -z) = P(Z > z) = 1 - P(Z < z). P(a < Z < b) = P(Z < b) - P(Z < a).\n\nWorked Example: Heights of students are normally distributed with mean 170 cm and SD 8 cm. Find P(height > 178). z = (178 - 170)/8 = 1.0. P(Z > 1.0) = 1 - P(Z < 1.0) = 1 - 0.8413 = 0.1587. So about 15.87% of students are taller than 178 cm.\n\nWorked Example: Using the same distribution, find P(162 < X < 186). For X = 162: z1 = (162-170)/8 = -1.0. For X = 186: z2 = (186-170)/8 = 2.0. P(-1.0 < Z < 2.0) = P(Z < 2.0) - P(Z < -1.0) = 0.9772 - 0.1587 = 0.8185.\n\nReverse problems: If P(X < k) = 0.90, find k. Step 1: Find z such that P(Z < z) = 0.90. From tables, z = 1.2816. Step 2: k = mu + z*sigma. For example, with mu = 100, sigma = 15: k = 100 + 1.2816*15 = 119.2.\n\nThe standard normal distribution Z ~ N(0,1) has mean 0 and standard deviation 1. Any probability question about a normal distribution can be converted to a question about Z using the z-score formula. This is why the z-table is so powerful -- it works for ALL normal distributions.\n\nMargin of error and sample size: Larger samples give more precise estimates. The standard error of the mean is sigma/sqrt(n), which decreases as n increases.",
        keyTerms: ["normal distribution", "bell curve", "mean", "standard deviation", "z-score", "empirical rule", "standardisation", "z-table", "standard normal", "symmetric", "continuous", "standard error"],
        formula: "z = (X - mu) / sigma\nP(Z > z) = 1 - P(Z < z)\nP(Z < -z) = 1 - P(Z < z)\nP(a < Z < b) = P(Z < b) - P(Z < a)\nEmpirical: 68% within 1SD, 95% within 2SD, 99.7% within 3SD\nReverse: X = mu + z*sigma\nStandard error: sigma/sqrt(n)",
        examTip: "ALWAYS draw a normal curve, mark the mean, shade the area you need, and label the z-value. This helps you identify which table calculation to use. For reverse problems, find the z-value from the table first, then convert back using X = mu + z*sigma. The z-table gives left-tail probabilities -- for right-tail, subtract from 1."
      },
      {
        title: "Hypothesis Testing: One-Sample Z-Test",
        content: "Hypothesis testing is a formal procedure for deciding whether sample data provides sufficient evidence to reject a claim about a population parameter. The Leaving Cert focuses on one-sample z-tests for the population mean.\n\nStep 1 -- State the hypotheses. The null hypothesis H0 states the claim to be tested (e.g., H0: mu = 500). The alternative hypothesis H1 states what you believe if H0 is wrong. It can be one-tailed (H1: mu > 500 or H1: mu < 500) or two-tailed (H1: mu != 500). A two-tailed test is used when you are looking for any difference; a one-tailed test is used when you are looking for a specific direction of difference.\n\nStep 2 -- Choose the significance level alpha. The most common value is alpha = 0.05 (5%). This is the probability of incorrectly rejecting H0 when it is true (Type I error). Other common values are alpha = 0.01 (1%) and alpha = 0.10 (10%).\n\nStep 3 -- Calculate the test statistic. For a z-test with known or large-sample standard deviation: z = (x_bar - mu_0) / (sigma / sqrt(n)), where x_bar is the sample mean, mu_0 is the value claimed in H0, sigma is the population (or sample) standard deviation, and n is the sample size.\n\nStep 4 -- Find the p-value. The p-value is the probability of observing a test statistic as extreme as (or more extreme than) the one calculated, assuming H0 is true. For a two-tailed test: p = 2 * P(Z > |z|). For a one-tailed test: p = P(Z > |z|) or P(Z < -|z|) depending on direction.\n\nStep 5 -- Make the decision. If p-value < alpha, reject H0 (the result is statistically significant). If p-value >= alpha, fail to reject H0 (there is insufficient evidence to reject the claim).\n\nStep 6 -- Write the conclusion in context. Never just say 'reject H0'. Instead: 'There is sufficient evidence at the 5% significance level to conclude that the mean has changed from 500.' If you fail to reject: 'There is insufficient evidence to conclude that the mean differs from 500.'\n\nImportant: 'Fail to reject H0' does NOT mean H0 is true. It means we do not have enough evidence to disprove it. Never say 'accept H0'.\n\nWorked Example: A company claims their bags of flour weigh 1000g on average. A sample of 50 bags has mean 995g and SD 20g. Test at the 5% level whether the mean weight differs from 1000g. H0: mu = 1000. H1: mu != 1000 (two-tailed). z = (995 - 1000)/(20/sqrt(50)) = -5/2.828 = -1.768. p-value = 2*P(Z > 1.768) = 2*(1 - 0.9615) = 2*0.0385 = 0.077. Since 0.077 > 0.05, fail to reject H0. Conclusion: There is insufficient evidence at the 5% level to conclude that the mean weight differs from 1000g.\n\nType I error: Rejecting H0 when it is actually true. Probability = alpha. Type II error: Failing to reject H0 when it is actually false. Probability = beta. The power of a test is 1 - beta.",
        keyTerms: ["hypothesis test", "null hypothesis H0", "alternative hypothesis H1", "significance level", "p-value", "test statistic", "z-test", "Type I error", "Type II error", "one-tailed", "two-tailed", "fail to reject", "statistically significant"],
        formula: "z = (x_bar - mu_0) / (sigma / sqrt(n))\nTwo-tailed p-value = 2 * P(Z > |z|)\nOne-tailed p-value = P(Z > |z|)\nReject H0 if p < alpha\nType I error probability = alpha\nCommon alpha values: 0.05, 0.01, 0.10",
        examTip: "Follow all 6 steps in order -- examiners award marks for each step. Always state BOTH H0 and H1 explicitly. Use the correct tail: if the question says 'has the mean changed', it is two-tailed; if it says 'has the mean increased', it is one-tailed. Never say 'accept H0' -- say 'fail to reject H0' or 'insufficient evidence'. Write the conclusion in the context of the question."
      },
      {
        title: "Confidence Intervals for the Population Mean",
        content: "A confidence interval provides a range of plausible values for a population parameter based on sample data. A 95% confidence interval for the population mean is: x_bar +/- z* * (sigma / sqrt(n)), where x_bar is the sample mean, z* is the critical value (1.96 for 95%), sigma is the standard deviation, and n is the sample size.\n\nThe margin of error is E = z* * (sigma / sqrt(n)). A larger margin of error gives a wider interval (less precise). A smaller margin of error gives a narrower interval (more precise). Factors affecting the margin of error: increasing n decreases E (more data = more precision), increasing sigma increases E (more variability = less precision), increasing the confidence level increases z* which increases E.\n\nCritical values z* for common confidence levels: 90% confidence: z* = 1.645. 95% confidence: z* = 1.96. 99% confidence: z* = 2.576. These values come from the standard normal distribution.\n\nInterpretation: A 95% confidence interval does NOT mean there is a 95% probability that the true mean lies in this particular interval. The correct interpretation is: if we repeated the sampling process many times and constructed a 95% CI each time, about 95% of those intervals would contain the true population mean.\n\nConnection to hypothesis testing: If a hypothesised value mu_0 lies inside the 95% CI, then a two-tailed hypothesis test at the 5% level would fail to reject H0: mu = mu_0. If mu_0 lies outside the 95% CI, the test would reject H0 at the 5% level.\n\nWorked Example: A sample of 100 students scored an average of 72 marks with SD = 15. Construct a 95% confidence interval for the population mean. 95% CI = 72 +/- 1.96*(15/sqrt(100)) = 72 +/- 1.96*1.5 = 72 +/- 2.94 = (69.06, 74.94). We are 95% confident the true mean lies between 69.06 and 74.94.\n\nWorked Example: Using the same data, construct a 99% confidence interval. 99% CI = 72 +/- 2.576*(15/sqrt(100)) = 72 +/- 2.576*1.5 = 72 +/- 3.864 = (68.14, 75.86). Notice this interval is wider than the 95% CI -- higher confidence requires a wider interval.\n\nSample size determination: To achieve a desired margin of error E at a given confidence level, solve for n: n = (z* * sigma / E)^2. Round UP to the next whole number (you cannot have a fraction of a sample).\n\nWorked Example: How large a sample is needed to estimate the mean within 2 units at 95% confidence if sigma = 10? n = (1.96 * 10 / 2)^2 = (9.8)^2 = 96.04. Round up to n = 97.\n\nConfidence intervals for proportions: For a population proportion p, the 95% CI is p_hat +/- 1.96*sqrt(p_hat*(1-p_hat)/n), where p_hat is the sample proportion. This follows the same logic as the mean CI but uses the proportion formula for the standard error.",
        keyTerms: ["confidence interval", "margin of error", "critical value", "confidence level", "sample size", "standard error", "interpretation", "proportion", "z-star", "precision"],
        formula: "95% CI: x_bar +/- 1.96*(sigma/sqrt(n))\nMargin of error: E = z*sigma/sqrt(n)\nz* values: 90%: 1.645, 95%: 1.96, 99%: 2.576\nSample size: n = (z*sigma/E)^2\nProportion CI: p_hat +/- z*sqrt(p_hat(1-p_hat)/n)",
        examTip: "Always state the formula, show substitution, and give the final interval as (lower, upper). Interpret in context: 'We are 95% confident that the true population mean lies between ... and ...' Never say 'there is a 95% chance the mean is in this interval'. For sample size questions, ALWAYS round UP. The connection between CIs and hypothesis tests is a favourite exam topic."
      },
      {
        title: "Descriptive Statistics and Data Analysis",
        content: "Measures of centre: Mean = sum/n. Median = middle value (or average of two middle values). Mode = most frequent value.\n\nMeasures of spread: Range = max - min. IQR = Q3 - Q1 (middle 50%). Population SD: sigma = sqrt(sum(x-mu)^2/N). Sample SD: s = sqrt(sum(x-x_bar)^2/(n-1)). The n-1 (Bessel's correction) gives an unbiased estimate.\n\nQuartiles: Q1 = median of lower half, Q3 = median of upper half. Outlier if x < Q1-1.5*IQR or x > Q3+1.5*IQR.\n\nBox plots show the five-number summary (min, Q1, median, Q3, max). Histograms show frequency distributions -- area represents frequency for unequal class widths.\n\nCorrelation coefficient r: -1 <= r <= 1. r near 1 = strong positive linear, r near -1 = strong negative, r near 0 = no linear relationship. r^2 = proportion of variance explained.\n\nLine of best fit: y = a + bx, where b = (n*sum(xy) - sum(x)*sum(y))/(n*sum(x^2) - (sum(x))^2), a = y_bar - b*x_bar. Interpolation is reliable; extrapolation is not.\n\nWorked Example: Data: 3,5,7,7,8,10,12,15,20 (n=9). Mean = 9.67. Median = 8. Q1 = 6, Q3 = 13.5, IQR = 7.5. Outlier bounds: [-5.25, 24.75]. No outliers.",
        keyTerms: ["mean", "median", "mode", "range", "IQR", "standard deviation", "quartile", "box plot", "histogram", "stem-and-leaf", "outlier", "correlation", "line of best fit", "r-squared"],
        formula: "Mean = sum(x)/n\nSD (population) = sqrt(sum(x-mu)^2/N)\nSD (sample) = sqrt(sum(x-x_bar)^2/(n-1))\nIQR = Q3 - Q1\nOutlier if x < Q1-1.5*IQR or x > Q3+1.5*IQR\nCorrelation: -1 <= r <= 1\nLine of best fit: y = a + bx",
        examTip: "For frequency tables, use the midpoint of each class to calculate the mean. Show all working in a table format. For box plots, always calculate Q1 and Q3 carefully -- they are the medians of the lower and upper halves. State whether you are comparing centre (mean/median) or spread (IQR/SD) when comparing datasets. Never extrapolate far beyond the data range."
      }
    ]
  },
  {
    topic: "Length, Area & Volume",
    icon: "📏",
    subtopics: [
      {
        title: "Simpson's Rule: Numerical Integration",
        content: "Simpson's rule estimates the area under a curve using parabolic arcs fitted through successive groups of three points. It is more accurate than the trapezoidal rule because parabolas fit curves better than straight lines. Simpson's rule requires an EVEN number of strips (equivalently, an ODD number of ordinates).\n\nThe formula for n strips (n must be even) with strip width h = (b - a)/n is: Area = (h/3) * [y0 + 4*y1 + 2*y2 + 4*y3 + 2*y4 + ... + 2*y(n-2) + 4*y(n-1) + yn]. The pattern of coefficients is: 1, 4, 2, 4, 2, 4, ..., 2, 4, 1. The first and last coefficients are always 1. The odd-indexed ordinates (y1, y3, y5, ...) always get coefficient 4. The even-indexed interior ordinates (y2, y4, y6, ...) always get coefficient 2.\n\nFor 2 strips (3 ordinates): Area = (h/3)(y0 + 4*y1 + y2). For 4 strips (5 ordinates): Area = (h/3)(y0 + 4*y1 + 2*y2 + 4*y3 + y4). For 6 strips (7 ordinates): Area = (h/3)(y0 + 4*y1 + 2*y2 + 4*y3 + 2*y4 + 4*y5 + y6).\n\nStep-by-step method: 1. Determine the interval [a, b] and the number of strips n (must be even). 2. Calculate h = (b-a)/n. 3. Set up x-values: x0 = a, x1 = a+h, x2 = a+2h, ..., xn = b. 4. Calculate the corresponding y-values (function values). 5. Apply the formula with the correct coefficients. 6. State the final answer with appropriate units.\n\nWorked Example: Estimate the integral of f(x) = x^2 from x = 0 to x = 4 using Simpson's rule with 4 strips. h = (4-0)/4 = 1. x-values: 0, 1, 2, 3, 4. y-values: 0, 1, 4, 9, 16. Area = (1/3)(0 + 4*1 + 2*4 + 4*9 + 16) = (1/3)(0 + 4 + 8 + 36 + 16) = (1/3)(64) = 64/3 = 21.33. The exact answer is 64/3 = 21.33, so Simpson's rule gives the exact answer for quadratics (and cubics).\n\nWorked Example: The cross-sectional areas of a lake at 10-metre intervals are 0, 120, 200, 180, 100, 80, 0 (in m^2). Estimate the volume of the lake. Here n = 6 strips, h = 10m, ordinates = 0, 120, 200, 180, 100, 80, 0. Volume = (10/3)(0 + 4*120 + 2*200 + 4*180 + 2*100 + 4*80 + 0) = (10/3)(0 + 480 + 400 + 720 + 200 + 320 + 0) = (10/3)(2120) = 7066.67 m^3.\n\nSimpson's rule gives exact results for polynomials of degree 3 or less. For higher-degree polynomials and other functions, increasing the number of strips improves accuracy. The error in Simpson's rule is proportional to h^4, meaning doubling the number of strips reduces the error by a factor of 16.",
        keyTerms: ["Simpson's rule", "numerical integration", "strips", "ordinates", "parabolic", "coefficients", "even number of strips", "accuracy", "approximate area"],
        formula: "Area = (h/3)[y0 + 4(y1+y3+y5+...) + 2(y2+y4+...) + yn]\nh = (b-a)/n (n must be even)\nCoefficients: 1, 4, 2, 4, 2, ..., 4, 1\n2 strips: (h/3)(y0 + 4y1 + y2)\n4 strips: (h/3)(y0 + 4y1 + 2y2 + 4y3 + y4)\nError proportional to h^4",
        examTip: "The most common mistake is getting the 4, 2, 4, 2 pattern wrong. Set up a table with columns for x, y, coefficient, and coefficient*y. Check: you should have an ODD number of ordinates and an EVEN number of strips. The formula is on the Tables booklet. Simpson's rule often appears with a table of values or in the context of estimating the area of an irregular shape."
      },
      {
        title: "The Trapezoidal Rule: Numerical Integration",
        content: "The trapezoidal rule estimates the area under a curve by approximating the region as a series of trapezoids. Unlike Simpson's rule, it works for ANY number of strips (no even/odd restriction). However, it is generally less accurate than Simpson's rule.\n\nThe formula for n strips with width h = (b-a)/n is: Area = (h/2) * [y0 + 2*y1 + 2*y2 + ... + 2*y(n-1) + yn]. The pattern is simpler than Simpson's: the first and last ordinates get coefficient 1, and all interior ordinates get coefficient 2.\n\nFor 1 strip (2 ordinates): Area = (h/2)(y0 + y1) -- this is just the area of one trapezoid. For 3 strips (4 ordinates): Area = (h/2)(y0 + 2*y1 + 2*y2 + y3). For 5 strips (6 ordinates): Area = (h/2)(y0 + 2*y1 + 2*y2 + 2*y3 + 2*y4 + y5).\n\nThe trapezoidal rule overestimates for curves that are concave up (curve bends upward like y = x^2) because the straight tops of the trapezoids lie above the curve. It underestimates for curves that are concave down (curve bends downward). If the curve has a point of inflection, the overestimation and underestimation may partially cancel.\n\nStep-by-step method: 1. Identify [a, b] and n. 2. Calculate h = (b-a)/n. 3. Compute x-values: x0 = a, x1 = a+h, ..., xn = b. 4. Evaluate y-values. 5. Apply: Area = (h/2)(first + last + 2*sum_of_interior). 6. State answer with units.\n\nWorked Example: Estimate the integral of f(x) = 1/x from x = 1 to x = 5 using the trapezoidal rule with 4 strips. h = (5-1)/4 = 1. x-values: 1, 2, 3, 4, 5. y-values: 1, 0.5, 0.333, 0.25, 0.2. Area = (1/2)(1 + 2*0.5 + 2*0.333 + 2*0.25 + 0.2) = (1/2)(1 + 1 + 0.667 + 0.5 + 0.2) = (1/2)(3.367) = 1.683. The exact answer is ln(5) = 1.609, so the trapezoidal rule overestimates here (1/x is concave up for x > 0).\n\nWorked Example: A field has the following widths measured at 5m intervals along its length: 0, 12, 18, 20, 16, 10, 0 (metres). Estimate the area using the trapezoidal rule. n = 6, h = 5. Area = (5/2)(0 + 2*12 + 2*18 + 2*20 + 2*16 + 2*10 + 0) = (5/2)(0 + 24 + 36 + 40 + 32 + 20 + 0) = (5/2)(152) = 380 m^2.\n\nComparing trapezoidal and Simpson's rules: Trapezoidal is simpler and works for any n. Simpson's is more accurate (error proportional to h^4 vs h^2 for trapezoidal) but requires even n. Both become more accurate with more strips. In the exam, you may be asked to use both methods and compare.",
        keyTerms: ["trapezoidal rule", "trapezoid", "numerical integration", "strips", "ordinates", "overestimate", "underestimate", "concave", "accuracy"],
        formula: "Area = (h/2)[y0 + 2(y1+y2+...+y(n-1)) + yn]\nh = (b-a)/n\nCoefficients: 1, 2, 2, 2, ..., 2, 1\nWorks for any number of strips\nOverestimates if concave up\nError proportional to h^2",
        examTip: "The trapezoidal rule is simpler to apply -- all interior ordinates get coefficient 2. Set up a table of x and y values to avoid errors. If the question does not specify which rule to use, check the number of strips: if even, you can use either; if odd, you must use trapezoidal. Show every step of the arithmetic for full marks."
      },
      {
        title: "Areas Using Integration",
        content: "Integration gives exact areas; Simpson's and trapezoidal rules give approximations. The definite integral from a to b of f(x) dx gives the signed area between y = f(x) and the x-axis.\n\nKey integrals: x^n -> x^(n+1)/(n+1) + C (n != -1). 1/x -> ln|x| + C. e^x -> e^x + C. sin(x) -> -cos(x) + C. cos(x) -> sin(x) + C.\n\nFundamental Theorem: integral a to b = F(b) - F(a) where F is any antiderivative.\n\nSigned area: if f(x) < 0, the integral is negative. For TOTAL area, split at zeros and take absolute values of each part.\n\nArea between curves: integral of (top - bottom) dx. If curves cross, split at the crossing point.\n\nWorked Example: Area between y = x^2 and y = x on [0,1]. x >= x^2 here. Area = integral (x - x^2) dx from 0 to 1 = [x^2/2 - x^3/3] = 1/2 - 1/3 = 1/6.\n\nWorked Example: Total area between y = x^3 - 4x and x-axis on [-2,2]. Zeros at -2, 0, 2. Area = |integral -2 to 0| + |integral 0 to 2| = 4 + 4 = 8.\n\nVolume of revolution about x-axis: V = pi * integral [f(x)]^2 dx. About y-axis: express x = g(y) and integrate with respect to y.",
        keyTerms: ["definite integral", "antiderivative", "signed area", "total area", "area between curves", "Fundamental Theorem of Calculus", "volume of revolution"],
        formula: "integral of x^n dx = x^(n+1)/(n+1) + C\nDefinite: integral a to b = F(b) - F(a)\nArea between curves: integral of (top - bottom) dx\nTotal area: split at zeros, take |integral| for each part\nVolume of revolution: V = pi * integral [f(x)]^2 dx",
        examTip: "When finding area, always check if the curve goes below the x-axis in the given interval. If it does, split the integral at the zeros. For area between curves, always subtract the lower curve from the upper curve. Show the antiderivative clearly before substituting limits. This topic often appears alongside Simpson's or trapezoidal rule for comparison."
      },
      {
        title: "3D Shapes: Volume, Surface Area, and Composite Solids",
        content: "All formulas are on the Tables booklet. Key shapes:\n\nSphere: V = (4/3)*pi*r^3, SA = 4*pi*r^2.\nCylinder: V = pi*r^2*h, CSA = 2*pi*r*h, TSA = 2*pi*r^2 + 2*pi*r*h.\nCone: V = (1/3)*pi*r^2*h, CSA = pi*r*l where l = sqrt(r^2+h^2), TSA = pi*r^2 + pi*r*l.\nHemisphere: V = (2/3)*pi*r^3, TSA = 3*pi*r^2 (curved + flat face).\nPrism: V = cross-section area * length. Pyramid: V = (1/3)*base area*h.\n\n3D Pythagoras: space diagonal d = sqrt(l^2 + w^2 + h^2).\n\nSimilar solids with scale factor k: lengths * k, areas * k^2, volumes * k^3.\n\nComposite solids: add volumes of parts. For surface area, subtract joined (hidden) faces.\n\nWorked Example: Cone (r=5, h=12) on cylinder (r=5, h=10). Slant height l = 13. Volume = 250pi + 100pi = 350pi = 1099.6 cm^3. SA = 25pi (base) + 100pi (cylinder curved) + 65pi (cone curved) = 190pi = 596.9 cm^2.\n\nWorked Example: Similar cylinders h=6 and h=9. k = 3/2. Volume ratio = 27/8. Larger volume = 150 * 27/8 = 506.25 cm^3.\n\nOptimisation: express one variable using constraint, substitute into volume/SA formula, differentiate to find optimum.",
        keyTerms: ["sphere", "cylinder", "cone", "hemisphere", "prism", "pyramid", "slant height", "space diagonal", "similar solids", "composite solid", "scale factor", "optimisation"],
        formula: "Sphere: V = (4/3)pi*r^3, SA = 4pi*r^2\nCylinder: V = pi*r^2*h, CSA = 2pi*r*h, TSA = 2pi*r^2 + 2pi*r*h\nCone: V = (1/3)pi*r^2*h, CSA = pi*r*l, l = sqrt(r^2+h^2)\nHemisphere: V = (2/3)pi*r^3, TSA = 3pi*r^2\nPyramid: V = (1/3)*base area*h\n3D diagonal: sqrt(l^2+w^2+h^2)\nSimilar: lengths*k, areas*k^2, volumes*k^3",
        examTip: "For composite solids, draw a clear diagram and label all dimensions. Remember to subtract shared surfaces when calculating total surface area. For similar solids, find the linear scale factor first, then cube it for volumes or square it for areas. Optimisation problems combine volume/surface area formulas with calculus -- set up the equation, differentiate, and find the critical point."
      },
      {
        title: "Perimeter, Arc Length, and Sector Area",
        content: "Circle: C = 2*pi*r, A = pi*r^2.\n\nArc length: L = (theta/360)*2*pi*r (degrees) or L = r*theta (radians). Convert: radians = degrees * pi/180.\n\nSector area: A = (theta/360)*pi*r^2 (degrees) or A = (1/2)*r^2*theta (radians).\n\nSegment area = sector area - triangle area = (1/2)*r^2*(theta - sin(theta)) in radians. The triangle has two sides = r with included angle theta, so triangle area = (1/2)*r^2*sin(theta).\n\nSector perimeter = r*theta + 2r = r(theta + 2) in radians.\n\nWorked Example: Sector r=8, angle 60 degrees = pi/3 rad. Arc = 8*pi/3 = 8.38 cm. Sector area = (1/2)*64*pi/3 = 33.51 cm^2. Triangle area = 32*sin(60) = 16*sqrt(3) = 27.71. Segment = 33.51 - 27.71 = 5.80 cm^2.\n\nWorked Example: Arc length 15 cm, angle 2.5 rad. r = 15/2.5 = 6 cm.\n\nKey radian values: 30=pi/6, 45=pi/4, 60=pi/3, 90=pi/2, 120=2pi/3, 180=pi, 270=3pi/2, 360=2pi.",
        keyTerms: ["circumference", "arc length", "sector", "segment", "radian", "degree", "central angle", "perimeter", "annulus"],
        formula: "C = 2*pi*r\nA = pi*r^2\nArc length: L = r*theta (radians) or (theta/360)*2pi*r (degrees)\nSector area: A = (1/2)*r^2*theta (radians) or (theta/360)*pi*r^2 (degrees)\nSegment area = (1/2)*r^2*(theta - sin(theta))\nPerimeter of sector = r*theta + 2r\nRadians = degrees * pi/180",
        examTip: "Check whether the angle is in degrees or radians before applying a formula. If the question gives radians, use L = r*theta and A = (1/2)*r^2*theta. If in degrees, use the fraction of 360 approach. Segment area = sector area - triangle area is a very common exam question. Always draw the sector and label the angle and radius."
      }
    ]
  }
];

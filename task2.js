// ===== JAVASCRIPT - 193 ЗАДАНИЯ С РЕШЕНИЯМИ =====
// Типы, математика, сравнения, условия, логические операторы, nullish операторы

console.log("=== НАЧАЛО ВЫПОЛНЕНИЯ 193 ЗАДАНИЙ ===\n");

// ===== ПРЕОБРАЗОВАНИЕ ТИПОВ (ЗАДАНИЯ 1-33) =====

// #001 - Что выведет console.log(typeof "hello")?
console.log("Задание #001:");
console.log(typeof "hello"); // "string"
console.log();

// #002 - Преобразуй строку "42" в число тремя способами
console.log("Задание #002:");
console.log(Number("42"));    // 42
console.log(parseInt("42"));  // 42
console.log(+"42");          // 42
console.log();

// #003 - Что вернёт Number("") и Number(" ")?
console.log("Задание #003:");
console.log(Number(""));     // 0
console.log(Number(" "));    // 0
console.log();

// #004 - Что вернёт Boolean(0), Boolean(""), Boolean(null)?
console.log("Задание #004:");
console.log(Boolean(0));     // false
console.log(Boolean(""));    // false
console.log(Boolean(null));  // false
console.log();

// #005 - Что вернёт String(123) и (123).toString()?
console.log("Задание #005:");
console.log(String(123));      // "123"
console.log((123).toString()); // "123"
console.log();

// #006 - Что такое "falsy" значения в JS? Перечисли все
console.log("Задание #006:");
const falsyValues = [false, 0, "", null, undefined, NaN, 0n];
falsyValues.forEach(val => console.log(val, "→", Boolean(val)));
console.log();

// #007 - Что вернёт Number(true) и Number(false)?
console.log("Задание #007:");
console.log(Number(true));   // 1
console.log(Number(false));  // 0
console.log();

// #008 - Что вернёт Boolean([]) и Boolean({})?
console.log("Задание #008:");
console.log(Boolean([]));    // true
console.log(Boolean({}));    // true
console.log();

// #009 - Чем отличается явное преобразование от неявного?
console.log("Задание #009:");
// Явное - вы вызываете Number/String/Boolean
console.log("Явное:", Number("42"));
// Неявное - JS делает сам
console.log("Неявное:", "5" - 3); // 2
console.log();

// #010 - Что выведет console.log(1 + "2")?
console.log("Задание #010:");
console.log(1 + "2"); // "12" - число приводится к строке
console.log();

// #011 - Что выведет console.log("5" - 3)?
console.log("Задание #011:");
console.log("5" - 3); // 2 - строка приводится к числу
console.log();

// #012 - Что вернёт parseInt("10px") и Number("10px")?
console.log("Задание #012:");
console.log(parseInt("10px"));  // 10
console.log(Number("10px"));    // NaN
console.log();

// #013 - Что вернёт parseInt("0x1F", 16)?
console.log("Задание #013:");
console.log(parseInt("0x1F", 16)); // 31
console.log();

// #014 - Что такое NaN? Как проверить, является ли значение NaN?
console.log("Задание #014:");
console.log("NaN это 'Not a Number'");
console.log(Number.isNaN(NaN));     // true
console.log(Number.isNaN("hello")); // false
console.log(isNaN("hello"));        // true (неявное приведение)
console.log();

// #015 - Что вернёт typeof NaN?
console.log("Задание #015:");
console.log(typeof NaN); // "number"
console.log();

// #016 - Что выведет null + 1 и undefined + 1?
console.log("Задание #016:");
console.log(null + 1);      // 1
console.log(undefined + 1); // NaN
console.log();

// #017 - Как работает toString(2) для числа?
console.log("Задание #017:");
console.log((10).toString(2)); // "1010"
console.log((255).toString(16)); // "ff"
console.log();

// #018 - Что вернёт parseFloat("3.14abc")?
console.log("Задание #018:");
console.log(parseFloat("3.14abc")); // 3.14
console.log();

// #019 - Что выведет "3" * "4"?
console.log("Задание #019:");
console.log("3" * "4"); // 12
console.log();

// #020 - Что вернёт Number(null) vs Number(undefined)?
console.log("Задание #020:");
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
console.log();
// #021 - Объясни, почему [] + [] равно "", а {} + [] может быть 0
console.log("Задание #021:");
console.log([] + []); // "" - массивы приводятся к строкам
console.log("Объяснение: [] → '', '' + '' = ''");
// {} + [] в начале строки интерпретируется как блок кода + []
console.log();

// #022 - Что вернёт +"", +[], +{}, +null?
console.log("Задание #022:");
console.log(+"");    // 0
console.log(+[]);    // 0
console.log(+{});    // NaN
console.log(+null);  // 0
console.log();

// #023 - Почему 0.1 + 0.2 !== 0.3 в JS?
console.log("Задание #023:");
console.log(0.1 + 0.2);           // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);   // false
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // true
console.log();

// #024 - Что вернёт Number(Symbol("test"))?
console.log("Задание #024:");
try {
  console.log(Number(Symbol("test")));
} catch (e) {
  console.log("TypeError:", e.message);
}
console.log();

// #025 - Напиши функцию safeNumber(val)
console.log("Задание #025:");
function safeNumber(val) {
  const num = Number(val);
  return isNaN(num) ? 0 : num;
}
console.log(safeNumber("42"));    // 42
console.log(safeNumber("hello")); // 0
console.log(safeNumber(null));    // 0
console.log();

// #026 - Что такое приведение через valueOf и toString?
console.log("Задание #026:");
const obj = {
  valueOf() { return 42; },
  toString() { return "hello"; }
};
console.log(+obj);  // 42 (valueOf для числового контекста)
console.log("" + obj); // "42" (valueOf, потом toString)
console.log();

// #027 - Объясни разницу между parseInt и Math.trunc
console.log("Задание #027:");
console.log(parseInt("3.7"));  // 3 (парсит строку)
console.log(Math.trunc(3.7));  // 3 (работает с числом)
console.log(parseInt("3.7abc")); // 3
// Math.trunc("3.7abc") // NaN
console.log();

// #028 - Что вернёт Number([1]), Number([1,2]), Number([])?
console.log("Задание #028:");
console.log(Number([1]));    // 1
console.log(Number([1,2]));  // NaN
console.log(Number([]));     // 0
console.log();

// #029 - Что такое BigInt и как преобразовать между Number и BigInt?
console.log("Задание #029:");
console.log(BigInt(42));     // 42n
console.log(Number(42n));    // 42
console.log(42n + 1n);       // 43n
console.log();

// #030 - Создай объект с кастомным [Symbol.toPrimitive]
console.log("Задание #030:");
const customObj = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return 100;
    if (hint === "string") return "custom";
    return "default";
  }
};
console.log(+customObj);     // 100
console.log("" + customObj); // "default"
console.log();

// #031 - Что произойдёт при null + undefined?
console.log("Задание #031:");
console.log(null + undefined); // NaN
console.log();

// #032 - Напиши функцию которая возвращает тип включая null
console.log("Задание #032:");
function getType(val) {
  return val === null ? "null" : typeof val;
}
console.log(getType(null));      // "null"
console.log(getType(undefined)); // "undefined"
console.log(getType(42));        // "number"
console.log();

// #033 - Что вернёт ~~3.7? Объясни двойное побитовое НЕ
console.log("Задание #033:");
console.log(~~3.7);  // 3
console.log(~~-3.7); // -3
console.log("Двойное ~ приводит к int32 и отсекает дробную часть");
console.log();

// ===== БАЗОВЫЕ ОПЕРАТОРЫ, МАТЕМАТИКА (ЗАДАНИЯ 34-65) =====

// #034 - Что такое оператор остатка %? Вычисли 17 % 5
console.log("Задание #034:");
console.log(17 % 5); // 2
console.log();

// #035 - Что такое оператор возведения в степень **? Вычисли 2 ** 10
console.log("Задание #035:");
console.log(2 ** 10); // 1024
console.log();

// #036 - Чем отличается ++i от i++?
console.log("Задание #036:");
let i = 5;
console.log("i++ возвращает старое значение:", i++); // 5
console.log("i сейчас:", i); // 6
i = 5;
console.log("++i возвращает новое значение:", ++i); // 6
console.log();

// #037 - Что выведет код: let x=5; console.log(x++); console.log(x);?
console.log("Задание #037:");
let x = 5;
console.log(x++); // 5
console.log(x);   // 6
console.log();

// #038 - Что выведет: let x=5; console.log(++x);?
console.log("Задание #038:");
x = 5;
console.log(++x); // 6
console.log();

// #039 - Каков результат 10 / 3 в JS? Как получить целочисленное деление?
console.log("Задание #039:");
console.log(10 / 3);              // 3.3333333333333335
console.log(Math.trunc(10 / 3));  // 3
console.log(Math.floor(10 / 3));  // 3
console.log();

// #040 - Что возвращает Math.abs(-42)?
console.log("Задание #040:");
console.log(Math.abs(-42)); // 42
console.log();

// #041 - Как получить случайное целое число от 1 до 10?
console.log("Задание #041:");
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Случайное число от 1 до 10:", randomInt(1, 10));
console.log();

// #042 - Что вернёт Math.max(1, 2, 3) и Math.min(1, 2, 3)?
console.log("Задание #042:");
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1
console.log();

// #043 - Что вернёт Math.round(4.5) и Math.round(4.4)?
console.log("Задание #043:");
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4
console.log();

// #044 - Как округлить число до 2 знаков после запятой?
console.log("Задание #044:");
const num = 3.14159;
console.log(num.toFixed(2));              // "3.14"
console.log(Math.round(num * 100) / 100); // 3.14
console.log();

// #045 - Что вернёт Math.floor(-3.1) vs Math.trunc(-3.1)?
console.log("Задание #045:");
console.log(Math.floor(-3.1)); // -4
console.log(Math.trunc(-3.1)); // -3
console.log();

// #046 - Что такое Infinity в JS? Когда оно появляется?
console.log("Задание #046:");
console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity
console.log(Infinity + 1); // Infinity
console.log();

// #047 - Напиши функцию для вычисления гипотенузы
console.log("Задание #047:");
function hypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}
console.log(hypotenuse(3, 4)); // 5
console.log(Math.hypot(3, 4)); // 5 (встроенная функция)
console.log();

// #048 - Как проверить, является ли число чётным?
console.log("Задание #048:");
const isEven = num => num % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(5)); // false
console.log();

// #049 - Что вернёт 0.1 + 0.2 === 0.3? Как это исправить?
console.log("Задание #049:");
console.log(0.1 + 0.2 === 0.3); // false
console.log(Number((0.1 + 0.2).toFixed(1)) === 0.3); // true
console.log();

// #050 - Что выведет console.log(1/0) и console.log(-1/0)?
console.log("Задание #050:");
console.log(1 / 0);  // Infinity
console.log(-1 / 0); // -Infinity
console.log();
// #051 - Напиши функцию clamp(val, min, max)
console.log("Задание #051:");
function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
console.log(clamp(15, 10, 20)); // 15
console.log(clamp(5, 10, 20));  // 10
console.log(clamp(25, 10, 20)); // 20
console.log();

// #052 - Как получить все целые числа от a до b в массив?
console.log("Задание #052:");
function range(a, b) {
  return Array.from({length: b - a + 1}, (_, i) => a + i);
}
console.log(range(1, 5)); // [1, 2, 3, 4, 5]
console.log();

// #053 - Что такое побитовые операторы? Вычисли 5 & 3, 5 | 3, 5 ^ 3
console.log("Задание #053:");
console.log(5 & 3); // 1 (AND)
console.log(5 | 3); // 7 (OR)
console.log(5 ^ 3); // 6 (XOR)
console.log();

// #054 - Напиши функцию факториала через рекурсию и через цикл
console.log("Задание #054:");
function factorialRecursive(n) {
  return n <= 1 ? 1 : n * factorialRecursive(n - 1);
}
function factorialLoop(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorialRecursive(5)); // 120
console.log(factorialLoop(5));      // 120
console.log();

// #055 - Реализуй функцию fibonacci(n)
console.log("Задание #055:");
function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
console.log(fibonacci(10)); // 55
console.log();

// #056 - Что такое Number.MAX_SAFE_INTEGER?
console.log("Задание #056:");
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2); // true
console.log();

// #057 - Как сгенерировать криптографически случайное число?
console.log("Задание #057:");
if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
  const randomValue = crypto.getRandomValues(new Uint32Array(1))[0];
  console.log("Криптографически случайное число:", randomValue);
} else {
  console.log("crypto.getRandomValues недоступен в этой среде");
}
console.log();

// #058 - Напиши функцию isPrime(n)
console.log("Задание #058:");
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
console.log();

// #059 - Реализуй gcd(a, b) — алгоритм Евклида
console.log("Задание #059:");
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
console.log(gcd(48, 18)); // 6
console.log();

// #060 - Напиши функцию round(num, precision)
console.log("Задание #060:");
function roundToPrecision(num, precision) {
  return Math.round(num * 10**precision) / 10**precision;
}
console.log(roundToPrecision(3.14159, 2)); // 3.14
console.log();

// #061 - Что такое left shift << и right shift >>? Чему равно 4 << 2?
console.log("Задание #061:");
console.log(4 << 2); // 16 (умножение на 2^2)
console.log(16 >> 2); // 4 (деление на 2^2)
console.log();

// #062 - Напиши функцию суммы цифр числа
console.log("Задание #062:");
function sumDigits(n) {
  return String(Math.abs(n)).split('').reduce((sum, digit) => sum + Number(digit), 0);
}
console.log(sumDigits(123)); // 6
console.log(sumDigits(-456)); // 15
console.log();

// #063 - Реализуй функцию lerp(a, b, t) — линейную интерполяцию
console.log("Задание #063:");
function lerp(a, b, t) {
  return a + (b - a) * t;
}
console.log(lerp(0, 10, 0.5)); // 5
console.log(lerp(10, 20, 0.3)); // 13
console.log();

// #064 - Как работает оператор >>> (unsigned right shift)?
console.log("Задание #064:");
console.log(-1 >> 1);  // -1 (знаковый сдвиг)
console.log(-1 >>> 1); // 2147483647 (беззнаковый сдвиг)
console.log();

// #065 - Напиши функцию digitCount(n) без String()
console.log("Задание #065:");
function digitCount(n) {
  if (n === 0) return 1;
  return Math.floor(Math.log10(Math.abs(n))) + 1;
}
console.log(digitCount(123)); // 3
console.log(digitCount(0));   // 1
console.log();

// ===== ОПЕРАТОРЫ СРАВНЕНИЯ (ЗАДАНИЯ 66-97) =====

// #066 - В чём разница между == и ===?
console.log("Задание #066:");
console.log("== с приведением типов, === строгое");
console.log("5" == 5);  // true
console.log("5" === 5); // false
console.log();

// #067 - Что вернёт "5" == 5? А "5" === 5?
console.log("Задание #067:");
console.log("5" == 5);  // true
console.log("5" === 5); // false
console.log();

// #068 - Что вернёт null == undefined? А null === undefined?
console.log("Задание #068:");
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log();

// #069 - Что вернёт null == 0?
console.log("Задание #069:");
console.log(null == 0); // false
console.log("null равен только undefined при ==");
console.log();

// #070 - Что вернёт сравнение строк "apple" > "banana"?
console.log("Задание #070:");
console.log("apple" > "banana"); // false
console.log("Сравнение по кодам символов: 'a' < 'b'");
console.log();

// #071 - Что вернёт NaN === NaN? Как правильно проверить на NaN?
console.log("Задание #071:");
console.log(NaN === NaN);        // false
console.log(Number.isNaN(NaN));  // true
console.log();

// #072 - Что означают операторы <, >, <=, >=?
console.log("Задание #072:");
console.log("< меньше, > больше, <= меньше или равно, >= больше или равно");
console.log(5 < 10);  // true
console.log(5 <= 5);  // true
console.log();

// #073 - Что вернёт 1 < 2 < 3? А 3 > 2 > 1?
console.log("Задание #073:");
console.log(1 < 2 < 3); // true (1 < 2 = true, true < 3 = 1 < 3 = true)
console.log(3 > 2 > 1); // false (3 > 2 = true, true > 1 = 1 > 1 = false)
console.log();

// #074 - Что вернёт "2" > "12"?
console.log("Задание #074:");
console.log("2" > "12"); // true
console.log("Лексикографическое сравнение: '2' > '1'");
console.log();

// #075 - Напиши функцию isEqual(a, b) использующую строгое равенство
console.log("Задание #075:");
function isEqual(a, b) {
  return a === b;
}
console.log(isEqual(5, 5));   // true
console.log(isEqual(5, "5")); // false
console.log();

// #076 - Что выведет 0 == false и "" == false?
console.log("Задание #076:");
console.log(0 == false);  // true
console.log("" == false); // true
console.log();

// #077 - Что вернёт [] == false?
console.log("Задание #077:");
console.log([] == false); // true
console.log("[] → '' → 0, false → 0");
console.log();

// #078 - Как сравнить два объекта по значению?
console.log("Задание #078:");
console.log({a:1} === {a:1}); // false (сравнение по ссылке)
function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
console.log(deepEqual({a:1}, {a:1})); // true
console.log();

// #079 - Что вернёт null > 0, null == 0, null >= 0?
console.log("Задание #079:");
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true (парадокс JS!)
console.log();

// #080 - Что вернёт undefined > 0, undefined < 0, undefined == 0?
console.log("Задание #080:");
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false
console.log();
// #081 - Напиши функцию-компаратор для сортировки массива по числам
console.log("Задание #081:");
const numbers = [10, 5, 40, 25, 1000, 1];
console.log(numbers.sort((a, b) => a - b)); // [1, 5, 10, 25, 40, 1000]
console.log();

// #082 - Чем отличается Object.is(a, b) от ===?
console.log("Задание #082:");
console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN);         // false
console.log(Object.is(0, -0));    // false
console.log(0 === -0);            // true
console.log();

// #083 - Что вернёт "abc" >= "abc"?
console.log("Задание #083:");
console.log("abc" >= "abc"); // true
console.log();

// #084 - Напиши функцию between(val, min, max)
console.log("Задание #084:");
function between(val, min, max) {
  return val >= min && val <= max;
}
console.log(between(5, 1, 10)); // true
console.log(between(15, 1, 10)); // false
console.log();

// #085 - Как работает сравнение Symbol() == Symbol()?
console.log("Задание #085:");
console.log(Symbol() == Symbol()); // false
console.log("Каждый Symbol уникален");
console.log();

// #086 - Реализуй глубокое сравнение deepEqual(a, b)
console.log("Задание #086:");
function deepEqualAdvanced(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (typeof a !== typeof b) return false;
  
  if (typeof a === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    
    for (let key of keysA) {
      if (!keysB.includes(key)) return false;
      if (!deepEqualAdvanced(a[key], b[key])) return false;
    }
    return true;
  }
  
  return false;
}
console.log(deepEqualAdvanced({a: {b: 1}}, {a: {b: 1}})); // true
console.log();

// #087 - Что такое SameValueZero?
console.log("Задание #087:");
console.log("SameValueZero: как Object.is но 0 === -0");
console.log("Используется в Set, Map, includes");
console.log([NaN].includes(NaN)); // true (SameValueZero)
console.log();

// #088 - Объясни, как JS сравнивает объекты с примитивами через ==
console.log("Задание #088:");
const obj = {
  valueOf() { return 42; }
};
console.log(obj == 42); // true
console.log("Объект приводится к примитиву через valueOf/toString");
console.log();

// #089 - Что выведет [] == ![]?
console.log("Задание #089:");
console.log([] == ![]); // true
console.log("![] = false, [] == false → '' == 0 → 0 == 0");
console.log();

// #090 - Напиши функцию sortStrings(arr) с локализацией
console.log("Задание #090:");
function sortStrings(arr) {
  return arr.sort((a, b) => a.localeCompare(b));
}
console.log(sortStrings(['яблоко', 'банан', 'апельсин']));
console.log();

// #091 - Как реализован Array.prototype.includes?
console.log("Задание #091:");
console.log("includes использует SameValueZero");
console.log([1, 2, NaN].includes(NaN)); // true
console.log();

// #092 - Что вернёт new String("a") == "a"? А new String("a") === "a"?
console.log("Задание #092:");
console.log(new String("a") == "a");  // true
console.log(new String("a") === "a"); // false
console.log();

// #093 - Реализуй компаратор для сортировки объектов по нескольким полям
console.log("Задание #093:");
function multiFieldComparator(fields) {
  return (a, b) => {
    for (let field of fields) {
      const aVal = a[field];
      const bVal = b[field];
      if (aVal < bVal) return -1;
      if (aVal > bVal) return 1;
    }
    return 0;
  };
}
const people = [{name: 'John', age: 30}, {name: 'Jane', age: 25}, {name: 'John', age: 25}];
console.log(people.sort(multiFieldComparator(['name', 'age'])));
console.log();

// #094 - Что такое Abstract Equality Comparison?
console.log("Задание #094:");
console.log("Алгоритм == в ECMA-262: последовательность правил приведения типов");
console.log();

// #095 - Объясни почему typeof null === "object"
console.log("Задание #095:");
console.log(typeof null); // "object"
console.log("Исторический баг из первой версии JS");
console.log();

// #096 - Напиши Proxy-ловушку для логирования сравнений
console.log("Задание #096:");
function createLoggingProxy(target) {
  return new Proxy(target, {
    get(target, prop) {
      if (prop === Symbol.toPrimitive || prop === 'valueOf') {
        console.log(`Вызван ${String(prop)} для сравнения`);
      }
      return target[prop];
    }
  });
}
const loggedObj = createLoggingProxy({valueOf: () => 42});
// console.log(loggedObj == 42); // Вызовет логирование
console.log();

// #097 - Что такое NaN boxing?
console.log("Задание #097:");
console.log(typeof NaN); // "number"
console.log("IEEE 754: NaN — специальное битовое представление в типе double");
console.log();

// ===== УСЛОВНОЕ ВЕТВЛЕНИЕ: if, ? (ЗАДАНИЯ 98-129) =====

// #098 - Напиши код: если число положительное — "positive"
console.log("Задание #098:");
function classifyNumber(n) {
  if (n > 0) return "positive";
  else if (n < 0) return "negative";
  else return "zero";
}
console.log(classifyNumber(5));  // "positive"
console.log(classifyNumber(-3)); // "negative"
console.log(classifyNumber(0));  // "zero"
console.log();

// #099 - Что такое тернарный оператор?
console.log("Задание #099:");
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"
console.log();

// #100 - Что выведет: let x = 0; if(x) console.log("true"); else console.log("false");?
console.log("Задание #100:");
let testX = 0;
if (testX) console.log("true"); else console.log("false"); // "false"
console.log();

// #101 - Напиши if-else для проверки: чётное или нечётное число
console.log("Задание #101:");
function evenOrOdd(n) {
  if (n % 2 === 0) {
    return "чётное";
  } else {
    return "нечётное";
  }
}
console.log(evenOrOdd(4)); // "чётное"
console.log(evenOrOdd(5)); // "нечётное"
console.log();

// #102 - Как работает switch? Перепиши if-else на switch для дней недели
console.log("Задание #102:");
function getDayName(dayNum) {
  switch (dayNum) {
    case 1: return "Понедельник";
    case 2: return "Вторник";
    case 3: return "Среда";
    case 4: return "Четверг";
    case 5: return "Пятница";
    case 6: return "Суббота";
    case 7: return "Воскресенье";
    default: return "Неверный день";
  }
}
console.log(getDayName(3)); // "Среда"
console.log();

// #103 - Что произойдёт в switch без break?
console.log("Задание #103:");
function demonstrateFallthrough(value) {
  let result = "";
  switch (value) {
    case 1:
      result += "один ";
    case 2:
      result += "два ";
    case 3:
      result += "три";
      break;
    default:
      result = "другое";
  }
  return result;
}
console.log(demonstrateFallthrough(1)); // "один два три"
console.log();

// #104 - Напиши тернарный оператор: если возраст >= 18 — "adult"
console.log("Задание #104:");
const checkAge = age => age >= 18 ? "adult" : "minor";
console.log(checkAge(20)); // "adult"
console.log(checkAge(15)); // "minor"
console.log();

// #105 - Что такое default в switch?
console.log("Задание #105:");
console.log("default выполняется если ни один case не совпал, как else в if");
console.log();

// #106 - Можно ли использовать строки в switch?
console.log("Задание #106:");
function processCommand(cmd) {
  switch (cmd) {
    case "start":
      return "Запуск";
    case "stop":
      return "Остановка";
    case "pause":
      return "Пауза";
    default:
      return "Неизвестная команда";
  }
}
console.log(processCommand("start")); // "Запуск"
console.log();

// #107 - Можно ли вкладывать тернарные операторы?
console.log("Задание #107:");
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // "B"
console.log();

// #108 - Что выведет: if ("0") console.log("true"); else console.log("false");?
console.log("Задание #108:");
if ("0") console.log("true"); else console.log("false"); // "true"
console.log();

// #109 - Напиши функцию getGrade(score)
console.log("Задание #109:");
function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}
console.log(getGrade(85)); // "B"
console.log();

// #110 - Как оптимально написать условие для проверки нескольких значений?
console.log("Задание #110:");
const testValue = 2;
// Вместо: testValue === 1 || testValue === 2 || testValue === 3
console.log([1, 2, 3].includes(testValue)); // true
console.log();
// #111 - Что выведет вложенный тернарник?
console.log("Задание #111:");
let testX2 = 5;
let result = testX2 > 3 ? testX2 > 7 ? "big" : "medium" : "small";
console.log(result); // "medium"
console.log();

// #112 - Напиши функцию fizzbuzz(n) без if
console.log("Задание #112:");
function fizzbuzz(n) {
  return n % 15 === 0 ? "FizzBuzz" : n % 3 === 0 ? "Fizz" : n % 5 === 0 ? "Buzz" : n;
}
console.log(fizzbuzz(15)); // "FizzBuzz"
console.log(fizzbuzz(9));  // "Fizz"
console.log(fizzbuzz(10)); // "Buzz"
console.log(fizzbuzz(7));  // 7
console.log();

// #113 - Как использовать switch с диапазонами?
console.log("Задание #113:");
function categorizeScore(score) {
  switch (true) {
    case score >= 90:
      return "Отлично";
    case score >= 80:
      return "Хорошо";
    case score >= 70:
      return "Удовлетворительно";
    default:
      return "Неудовлетворительно";
  }
}
console.log(categorizeScore(85)); // "Хорошо"
console.log();

// #114 - Что такое "short-circuit evaluation"?
console.log("Задание #114:");
let user = {name: "John"};
user && console.log("Пользователь существует"); // выполнится
user.name && console.log("Имя:", user.name); // выполнится
console.log();

// #115 - Перепиши сложную цепочку if-else в lookup объект
console.log("Задание #115:");
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};
function calculate(op, a, b) {
  return operations[op] ? operations[op](a, b) : "Неизвестная операция";
}
console.log(calculate("add", 5, 3)); // 8
console.log();

// #116 - Напиши функцию classify(n): "prime", "composite" или "neither"
console.log("Задание #116:");
function classify(n) {
  if (n < 2) return "neither";
  if (n === 2) return "prime";
  if (n % 2 === 0) return "composite";
  
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return "composite";
  }
  return "prime";
}
console.log(classify(17)); // "prime"
console.log(classify(18)); // "composite"
console.log(classify(1));  // "neither"
console.log();

// #117 - Что выведет код с fallthrough?
console.log("Задание #117:");
function testFallthrough(value) {
  switch (value) {
    case 1:
    case 2:
    case 3:
      console.log("1-3");
      break;
    default:
      console.log("другое");
  }
}
testFallthrough(2); // "1-3"
console.log();

// #118 - Реализуй паттерн "guard clauses"
console.log("Задание #118:");
function processUser(user) {
  if (!user) return "Пользователь не найден";
  if (!user.active) return "Пользователь неактивен";
  if (!user.permissions) return "Нет прав доступа";
  
  return "Пользователь обработан";
}
console.log(processUser({active: true, permissions: true})); // "Пользователь обработан"
console.log();

// #119 - Что такое "стратегия" (strategy pattern)?
console.log("Задание #119:");
const paymentStrategies = {
  card: (amount) => `Оплата картой: ${amount}`,
  cash: (amount) => `Оплата наличными: ${amount}`,
  crypto: (amount) => `Оплата криптовалютой: ${amount}`
};
function processPayment(method, amount) {
  return paymentStrategies[method] ? paymentStrategies[method](amount) : "Неизвестный метод";
}
console.log(processPayment("card", 100)); // "Оплата картой: 100"
console.log();

// #120 - Напиши функцию match в стиле pattern matching
console.log("Задание #120:");
function match(value, cases) {
  for (let [predicate, handler] of cases) {
    if (predicate(value)) {
      return handler(value);
    }
  }
  return undefined;
}
const result120 = match(5, [
  [x => x < 0, x => "отрицательное"],
  [x => x === 0, x => "ноль"],
  [x => x > 0, x => "положительное"]
]);
console.log(result120); // "положительное"
console.log();

// #121 - Как использовать тернарный оператор для ленивых вычислений?
console.log("Задание #121:");
const condition = true;
const lazyResult = condition ? (() => "дорогое вычисление A")() : (() => "дорогое вычисление B")();
console.log(lazyResult); // "дорогое вычисление A"
console.log();

// #122 - Реализуй конечный автомат с помощью switch
console.log("Задание #122:");
function stateMachine(state, action) {
  switch (state) {
    case "idle":
      return action === "start" ? "running" : "idle";
    case "running":
      return action === "stop" ? "idle" : action === "pause" ? "paused" : "running";
    case "paused":
      return action === "resume" ? "running" : action === "stop" ? "idle" : "paused";
    default:
      return "idle";
  }
}
console.log(stateMachine("idle", "start")); // "running"
console.log();

// #123 - Что такое optional chaining ?.?
console.log("Задание #123:");
const userObj = {profile: {name: "John"}};
console.log(userObj?.profile?.name); // "John"
console.log(userObj?.profile?.age);  // undefined
console.log();

// #124 - Напиши функцию pipe(...fns)
console.log("Задание #124:");
function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => acc != null ? fn(acc) : acc, value);
}
const add1 = x => x + 1;
const multiply2 = x => x * 2;
const pipeline = pipe(add1, multiply2);
console.log(pipeline(5)); // 12
console.log();

// #125 - Что такое предикаты? Напиши библиотечку предикатов
console.log("Задание #125:");
const predicates = {
  isString: x => typeof x === "string",
  isNumber: x => typeof x === "number",
  isArray: x => Array.isArray(x),
  isNull: x => x === null,
  isUndefined: x => x === undefined,
  isEmpty: x => x == null || x === "" || (Array.isArray(x) && x.length === 0)
};
console.log(predicates.isString("hello")); // true
console.log(predicates.isArray([1, 2, 3])); // true
console.log();

// #126 - Реализуй функцию cond(pairs)
console.log("Задание #126:");
function cond(pairs) {
  return (value) => {
    for (let [predicate, transformer] of pairs) {
      if (predicate(value)) {
        return transformer(value);
      }
    }
    return undefined;
  };
}
const classifier = cond([
  [x => x < 0, x => "negative"],
  [x => x === 0, x => "zero"],
  [x => x > 0, x => "positive"]
]);
console.log(classifier(-5)); // "negative"
console.log();

// #127 - Почему глубокая вложенность if — это code smell?
console.log("Задание #127:");
console.log("Глубокая вложенность усложняет чтение и тестирование");
console.log("Решения: early return, strategy pattern, polymorphism");
console.log();

// #128 - Реализуй when(predicate, transform)
console.log("Задание #128:");
function when(predicate, transform) {
  return (value) => predicate(value) ? transform(value) : value;
}
const doubleIfEven = when(x => x % 2 === 0, x => x * 2);
console.log(doubleIfEven(4)); // 8
console.log(doubleIfEven(5)); // 5
console.log();

// #129 - Напиши декларативный роутер
console.log("Задание #129:");
const routes = {
  "/": () => "Главная страница",
  "/about": () => "О нас",
  "/contact": () => "Контакты"
};
function router(path) {
  return routes[path] ? routes[path]() : "404 - Страница не найдена";
}
console.log(router("/")); // "Главная страница"
console.log();

// ===== ЛОГИЧЕСКИЕ ОПЕРАТОРЫ (ЗАДАНИЯ 130-161) =====

// #130 - Что возвращает &&? Не true/false, а конкретное значение
console.log("Задание #130:");
console.log(1 && 2 && 3); // 3 (последний truthy)
console.log(0 && 2 && 3); // 0 (первый falsy)
console.log();

// #131 - Что возвращает ||? Не true/false, а конкретное значение
console.log("Задание #131:");
console.log(1 || 2 || 3); // 1 (первый truthy)
console.log(0 || false || "hello"); // "hello" (первый truthy)
console.log();

// #132 - Что вернёт 1 && 2 && 3?
console.log("Задание #132:");
console.log(1 && 2 && 3); // 3
console.log();

// #133 - Что вернёт 1 || 2 || 3?
console.log("Задание #133:");
console.log(1 || 2 || 3); // 1
console.log();

// #134 - Что вернёт 0 && "hello"?
console.log("Задание #134:");
console.log(0 && "hello"); // 0
console.log();

// #135 - Что вернёт false || "default"?
console.log("Задание #135:");
console.log(false || "default"); // "default"
console.log();

// #136 - Что такое оператор !? Что вернёт !true и !0?
console.log("Задание #136:");
console.log(!true); // false
console.log(!0);    // true
console.log();

// #137 - Что такое двойное отрицание !!?
console.log("Задание #137:");
console.log(!!"hello"); // true
console.log(!!0);       // false
console.log("!! приводит к boolean");
console.log();

// #138 - Вычисли: true && false || true
console.log("Задание #138:");
console.log(true && false || true); // true
console.log("(true && false) || true = false || true = true");
console.log();

// #139 - Что вернёт null || undefined || 0 || "" || "hello"?
console.log("Задание #139:");
console.log(null || undefined || 0 || "" || "hello"); // "hello"
console.log();

// #140 - Что вернёт let x = 0; let y = x || 10;?
console.log("Задание #140:");
let testX3 = 0;
let y = testX3 || 10;
console.log(y); // 10 (паттерн "default value")
console.log();
// #141 - Напиши функцию с параметром по умолчанию через ||
console.log("Задание #141:");
function greet(name) {
  name = name || "World";
  return "Hello, " + name;
}
console.log(greet());        // "Hello, World"
console.log(greet("John"));  // "Hello, John"
console.log();

// #142 - Что вернёт "cat" && "dog"? А "cat" || "dog"?
console.log("Задание #142:");
console.log("cat" && "dog"); // "dog"
console.log("cat" || "dog"); // "cat"
console.log();

// #143 - Как использовать && для короткого вызова функции?
console.log("Задание #143:");
const userTest = {login: () => console.log("Пользователь вошел")};
userTest && userTest.login(); // выполнится
console.log();

// #144 - Что выведет: let a = 0; let b = a || (a = 5); console.log(a, b);?
console.log("Задание #144:");
let a = 0;
let b = a || (a = 5);
console.log(a, b); // 5, 5
console.log();

// #145 - В чём проблема паттерна val || default для числа 0?
console.log("Задание #145:");
console.log("0 || 'default' =", 0 || 'default'); // "default"
console.log("0 ?? 'default' =", 0 ?? 'default'); // 0
console.log("Используй ?? вместо || когда 0 - валидное значение");
console.log();

// #146 - Что вернёт !!"", !!0, !!null, !!NaN?
console.log("Задание #146:");
console.log(!!"");   // false
console.log(!!0);    // false
console.log(!!null); // false
console.log(!!NaN);  // false
console.log();

// #147 - Реализуй логику: выполнить callback только если он функция
console.log("Задание #147:");
function executeCallback(callback, ...args) {
  callback && typeof callback === "function" && callback(...args);
}
executeCallback(() => console.log("Callback выполнен"), 1, 2, 3);
console.log();

// #148 - Что такое приоритет логических операторов?
console.log("Задание #148:");
console.log("a || b && c эквивалентно a || (b && c)");
console.log(false || true && false); // false
console.log((false || true) && false); // false
console.log();

// #149 - Что вернёт true || console.log("hi")?
console.log("Задание #149:");
console.log(true || console.log("hi")); // true (console.log не выполнится)
console.log();

// #150 - Реализуй функцию and(...fns)
console.log("Задание #150:");
function and(...fns) {
  return (value) => fns.every(fn => fn(value));
}
const isPositiveEven = and(x => x > 0, x => x % 2 === 0);
console.log(isPositiveEven(4)); // true
console.log(isPositiveEven(3)); // false
console.log();

// #151 - Реализуй функцию or(...fns)
console.log("Задание #151:");
function or(...fns) {
  return (value) => fns.some(fn => fn(value));
}
const isZeroOrPositive = or(x => x === 0, x => x > 0);
console.log(isZeroOrPositive(0));  // true
console.log(isZeroOrPositive(-1)); // false
console.log();

// #152 - Реализуй функцию not(fn)
console.log("Задание #152:");
function not(fn) {
  return (...args) => !fn(...args);
}
const isNotEven = not(x => x % 2 === 0);
console.log(isNotEven(4)); // false
console.log(isNotEven(3)); // true
console.log();

// #153 - Что такое XOR для булевых? Как реализовать в JS?
console.log("Задание #153:");
function xor(a, b) {
  return !!(a ^ b); // или (a || b) && !(a && b)
}
console.log(xor(true, false));  // true
console.log(xor(true, true));   // false
console.log(xor(false, false)); // false
console.log();

// #154 - Объясни lazy evaluation в JS через &&/||
console.log("Задание #154:");
console.log("Правая часть не вычисляется если результат известен по левой");
let expensive = false;
false && (expensive = true); // expensive остается false
console.log("expensive:", expensive);
console.log();

// #155 - Напиши функцию compose(...fns) с условием остановки на null
console.log("Задание #155:");
function compose(...fns) {
  return (value) => {
    return fns.reduce((acc, fn) => {
      return acc === null ? null : fn(acc);
    }, value);
  };
}
const pipeline155 = compose(
  x => x > 0 ? x * 2 : null,
  x => x + 10
);
console.log(pipeline155(5));  // 20
console.log(pipeline155(-1)); // null
console.log();

// #156 - Реализуй "optional chaining" вручную через &&
console.log("Задание #156:");
const obj156 = {a: {b: {c: {d: "found"}}}};
const result156 = obj156 && obj156.a && obj156.a.b && obj156.a.b.c && obj156.a.b.c.d;
console.log(result156); // "found"
console.log();

// #157 - Как логические операторы работают с Proxy?
console.log("Задание #157:");
console.log("Нет прямых ловушек для &&/||, но valueOf/get могут влиять");
const proxyObj = new Proxy({}, {
  get(target, prop) {
    console.log(`Доступ к свойству: ${String(prop)}`);
    return prop === 'valueOf' ? () => true : undefined;
  }
});
// proxyObj && console.log("truthy"); // Вызовет ловушку get
console.log();

// #158 - Что такое логическое присваивание &&=, ||=?
console.log("Задание #158:");
let val158a = true;
val158a &&= "new value"; // присваивает только если val158a truthy
console.log(val158a); // "new value"

let val158b = false;
val158b ||= "default"; // присваивает только если val158b falsy
console.log(val158b); // "default"
console.log();

// #159 - Напиши функцию allTrue(arr) без every()
console.log("Задание #159:");
function allTrue(arr) {
  return arr.reduce((acc, val) => acc && Boolean(val), true);
}
console.log(allTrue([true, 1, "hello"])); // true
console.log(allTrue([true, 0, "hello"])); // false
console.log();

// #160 - Реализуй паттерн "Either"
console.log("Задание #160:");
function divide(a, b) {
  return b === 0 ? [new Error("Division by zero"), null] : [null, a / b];
}
const [error, result160] = divide(10, 2);
if (error) {
  console.log("Ошибка:", error.message);
} else {
  console.log("Результат:", result160); // 5
}
console.log();

// #161 - Что такое De Morgan laws?
console.log("Задание #161:");
console.log("!(a && b) === (!a || !b)");
console.log("!(a || b) === (!a && !b)");
const testA = true, testB = false;
console.log(!(testA && testB) === (!testA || !testB)); // true
console.log(!(testA || testB) === (!testA && !testB)); // true
console.log();

// ===== ОПЕРАТОРЫ ??, ??= (ЗАДАНИЯ 162-193) =====

// #162 - Что такое оператор нулевого слияния ??
console.log("Задание #162:");
console.log("?? реагирует только на null/undefined, || на все falsy");
console.log(0 ?? "default");     // 0
console.log(0 || "default");     // "default"
console.log();

// #163 - Что вернёт null ?? "default"? А undefined ?? "default"?
console.log("Задание #163:");
console.log(null ?? "default");      // "default"
console.log(undefined ?? "default"); // "default"
console.log();

// #164 - Что вернёт 0 ?? "default"? А 0 || "default"?
console.log("Задание #164:");
console.log(0 ?? "default"); // 0
console.log(0 || "default"); // "default"
console.log();

// #165 - Что вернёт "" ?? "default"? А "" || "default"?
console.log("Задание #165:");
console.log("" ?? "default"); // ""
console.log("" || "default"); // "default"
console.log();

// #166 - Что вернёт false ?? "default"?
console.log("Задание #166:");
console.log(false ?? "default"); // false
console.log();

// #167 - Что вернёт NaN ?? "default"?
console.log("Задание #167:");
console.log(NaN ?? "default"); // NaN
console.log();

// #168 - Что такое ??= (Nullish Assignment)?
console.log("Задание #168:");
let val168 = null;
val168 ??= 42;
console.log(val168); // 42
console.log();

// #169 - Что произойдёт: let x = null; x ??= 42; console.log(x);?
console.log("Задание #169:");
let testX4 = null;
testX4 ??= 42;
console.log(testX4); // 42
console.log();

// #170 - Что произойдёт: let x = 0; x ??= 42; console.log(x);?
console.log("Задание #170:");
let testX5 = 0;
testX5 ??= 42;
console.log(testX5); // 0
console.log();

// #171 - Как использовать ?? для значения по умолчанию при деструктуризации?
console.log("Задание #171:");
const obj171 = {name: null};
const {name = null} = obj171;
const safeName = name ?? "Unknown";
console.log(safeName); // "Unknown"
console.log();

// #172 - В чём практическая разница: когда использовать ?? вместо ||?
console.log("Задание #172:");
function setCount(count) {
  // Плохо: 0 будет заменен на 1
  const badCount = count || 1;
  // Хорошо: 0 останется 0
  const goodCount = count ?? 1;
  return {badCount, goodCount};
}
console.log(setCount(0)); // {badCount: 1, goodCount: 0}
console.log();

// #173 - Что вернёт цепочка: null ?? undefined ?? 0 ?? "hello"?
console.log("Задание #173:");
console.log(null ?? undefined ?? 0 ?? "hello"); // 0
console.log();

// #174 - Можно ли смешивать ?? с && и || без скобок?
console.log("Задание #174:");
console.log("Нет! JS требует явных скобок");
// console.log(null ?? false || true); // SyntaxError
console.log((null ?? false) || true); // true
console.log();

// #175 - Что делает optional chaining с ??
console.log("Задание #175:");
const user175 = null;
const userName = user175?.name ?? "Anonymous";
console.log(userName); // "Anonymous"
console.log();

// #176 - Напиши функцию конфигурации с дефолтами через ??
console.log("Задание #176:");
function configure(options = {}) {
  const config = {
    debug: options.debug ?? false,
    timeout: options.timeout ?? 5000,
    retries: options.retries ?? 3
  };
  return config;
}
console.log(configure({timeout: 0})); // {debug: false, timeout: 0, retries: 3}
console.log();

// #177 - Чем отличается ||= от ??=?
console.log("Задание #177:");
let val177a = 0;
val177a ||= 10; // присваивает при любом falsy
console.log("||=:", val177a); // 10

let val177b = 0;
val177b ??= 10; // присваивает только при null/undefined
console.log("??=:", val177b); // 0
console.log();

// #178 - Что произойдёт: let count = 0; count ||= 10;?
console.log("Задание #178:");
let count178 = 0;
count178 ||= 10;
console.log(count178); // 10
console.log();

// #179 - Что произойдёт: let count = 0; count ??= 10;?
console.log("Задание #179:");
let count179 = 0;
count179 ??= 10;
console.log(count179); // 0
console.log();

// #180 - Как использовать ??= для ленивой инициализации?
console.log("Задание #180:");
const cache = {};
function expensiveComputation() {
  console.log("Выполняется дорогое вычисление...");
  return "результат";
}
cache.result ??= expensiveComputation(); // выполнится
cache.result ??= expensiveComputation(); // не выполнится
console.log(cache.result);
console.log();

// #181 - Что выведет: let obj = {}; obj.a ??= "set"; obj.a ??= "again";?
console.log("Задание #181:");
let obj181 = {};
obj181.a ??= "set";
obj181.a ??= "again";
console.log(obj181.a); // "set"
console.log();

// #182 - Реализуй полифил для ??
console.log("Задание #182:");
function nullishCoalescing(a, b) {
  return a !== null && a !== undefined ? a : b;
}
console.log(nullishCoalescing(null, "default"));      // "default"
console.log(nullishCoalescing(0, "default"));         // 0
console.log(nullishCoalescing(undefined, "default")); // "default"
console.log();

// #183 - Как ?? работает с Proxy?
console.log("Задание #183:");
const proxy183 = new Proxy({}, {
  get(target, prop) {
    console.log(`Доступ к ${String(prop)}`);
    return target[prop];
  }
});
// const result183 = proxy183.missing ?? "default"; // Вызовет get
console.log("Proxy перехватывает get, ?? проверяет === null || === undefined");
console.log();

// #184 - Реализуй функцию getDeep(obj, path, defaultVal)
console.log("Задание #184:");
function getDeep(obj, path, defaultVal) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj) ?? defaultVal;
}
const deepObj = {user: {profile: {name: "John"}}};
console.log(getDeep(deepObj, "user.profile.name", "Unknown")); // "John"
console.log(getDeep(deepObj, "user.profile.age", "Unknown"));  // "Unknown"
console.log();

// #185 - Что произойдёт если использовать ?? с геттером возвращающим undefined?
console.log("Задание #185:");
const obj185 = {
  get value() {
    console.log("Геттер вызван");
    return undefined;
  }
};
const result185 = obj185.value ?? "default";
console.log(result185); // "default"
console.log();

// #186 - Реализуй deepMerge(defaults, options) используя ??
console.log("Задание #186:");
function deepMerge(defaults, options) {
  const result = {};
  const allKeys = new Set([...Object.keys(defaults), ...Object.keys(options)]);
  
  for (const key of allKeys) {
    if (typeof defaults[key] === 'object' && typeof options[key] === 'object') {
      result[key] = deepMerge(defaults[key], options[key]);
    } else {
      result[key] = options[key] ?? defaults[key];
    }
  }
  
  return result;
}
const merged = deepMerge(
  {timeout: 5000, retries: 3, debug: {level: 'info'}},
  {timeout: null, debug: {verbose: true}}
);
console.log(merged);
console.log();

// #187 - Напиши функцию coalesce(...vals)
console.log("Задание #187:");
function coalesce(...vals) {
  return vals.find(v => v !== null && v !== undefined);
}
console.log(coalesce(null, undefined, 0, "hello")); // 0
console.log(coalesce(null, undefined, null));       // undefined
console.log();

// #188 - В чём разница между a?.b ?? c и (a?.b) ?? c?
console.log("Задание #188:");
console.log("Они одинаковы — optional chaining связывает плотнее");
const obj188 = null;
console.log(obj188?.prop ?? "default"); // "default"
console.log((obj188?.prop) ?? "default"); // "default"
console.log();

// #189 - Как ??= полезен в мемоизации?
console.log("Задание #189:");
function createMemoized(fn) {
  const cache = {};
  return function(key) {
    cache[key] ??= fn(key);
    return cache[key];
  };
}
const memoizedSquare = createMemoized(x => {
  console.log(`Вычисляем квадрат ${x}`);
  return x * x;
});
console.log(memoizedSquare(5)); // Вычисляем квадрат 5, 25
console.log(memoizedSquare(5)); // 25 (из кэша)
console.log();

// #190 - Объясни почему ?? называется "nullish coalescing"
console.log("Задание #190:");
console.log("Coalesce — слиться, объединить");
console.log("Реагирует только на 'нулевые' (nullish) значения: null и undefined");
console.log();

// #191 - Что вернёт 0 || null ?? "x"? Почему это SyntaxError?
console.log("Задание #191:");
console.log("Нельзя смешивать без скобок");
console.log((0 || null) ?? "x"); // "x"
console.log();

// #192 - Реализуй конфигурируемый объект с цепочкой источников
console.log("Задание #192:");
function createConfig(env, config, defaults) {
  return new Proxy({}, {
    get(target, key) {
      return env[key] ?? config[key] ?? defaults[key];
    }
  });
}
const appConfig = createConfig(
  {NODE_ENV: "production"},
  {timeout: null, debug: true},
  {timeout: 5000, debug: false, retries: 3}
);
console.log(appConfig.NODE_ENV); // "production"
console.log(appConfig.timeout);  // 5000
console.log(appConfig.debug);    // true
console.log();

// #193 - Создай хелпер withDefault(obj, defaults)
console.log("Задание #193:");
function withDefault(obj, defaults) {
  return new Proxy(obj, {
    get(target, key) {
      return target[key] ?? defaults[key];
    }
  });
}
const objWithDefaults = withDefault(
  {name: "John", age: null},
  {age: 25, city: "Moscow"}
);
console.log(objWithDefaults.name); // "John"
console.log(objWithDefaults.age);  // 25
console.log(objWithDefaults.city); // "Moscow"
console.log();

console.log("=== ВСЕ 193 ЗАДАНИЯ ВЫПОЛНЕНЫ! ===");
console.log("Типы: задания 1-33 ✓");
console.log("Математика: задания 34-65 ✓");
console.log("Сравнения: задания 66-97 ✓");
console.log("Условия: задания 98-129 ✓");
console.log("Логические операторы: задания 130-161 ✓");
console.log("Nullish операторы: задания 162-193 ✓");
console.log("Общее количество решений: 193 ✓");
# Day One JavaScript

<div class="w-full flex justify-center p-4">
<div class="w-1/2">

![Data Club Logo](/images/data-club/columbia-data-club-logo.png)

</div>
</div>

<small>
<a href="http://moacir.com">Moacir P. de Sá Pereira</a> <br />
Research Data Librarian | <a href="http://library.columbia.edu">Columbia University Libraries</a> <br />
mpd2149@columbia.edu | he / him / his <br />
NY, NY, 2024
</small>

---

## [talks.moacir.com/-/day-one-javascript-2024/](https://talks.moacir.com/-/day-one-javascript-2024/)

Note: This will let you follow along with me, which will come in handy when
you have to click on links and copy paste things.

---

<div class="w-full flex justify-center p-4">
<div class="w-3/5">

![Data Club Logo](/images/data-club/columbia-data-club-logo.png)

</div>
</div>

Brought to you by [Columbia University Libraries](https://library.columbia.edu),<br />particularly the [Research Data Services](https://library.columbia.edu/services/research-data-services.html) team in Digital Scholarship.

Email us whenever you have a data question: `data@library.columbia.edu`

Go to our Linktree to learn more about how to follow Data Club: [https://linktr.ee/columbialibdata](https://linktr.ee/columbialibdata)

---

<div class="w-full flex justify-center p-4">
<div class="w-3/5">

![Data Club Logo](/images/data-club/columbia-data-club-logo.png)

</div>
</div>

Data Club is about:

* Experimenting
* Being creative
* Learning together

We learn about something new and then take risks as a group.

---

## What is JavaScript?

<div class="w-full flex justify-center">
<div class="w-1/2">

* A real programming language
* Unrelated to Java
* Written in a flurry (10 days?!?) in 1995
* Possibly the most available programming language in human history

</div>
<div class="w-1/2">

<div class="w-full flex justify-center p-4">
<!-- <div class="w-3/5"> -->
<div>

![Cover of JavaScript: The Good Parts](/images/data-club/javascript-good-parts-cover.jpg)

</div>
</div>

</div>
</div>

---

<div class="w-full flex justify-center p-4">
<div class="w-3/5">

![Sentences on the Web](https://i.imgur.com/KGSNQGH.png) 

</div>
</div>

---

## “Most Available Programming Language in Human History”?

Launch the JavaScript console in your browser:

* Chrome, Edge: <kbd>⌃</kbd> + ⇧ + J  (or ⌘ + ⌥ + J on a Mac) 
* Chrome, Edge: F12
* Firefox: <kbd>⌃</kbd> + ⇧ + J  (or ⌘ + ⇧ + J on a Mac) 
* Safari:
  * Open Preferences > Advanced
  * Select “Show Features for Web Developers”
  * “Show JavaScript Console” in “Develop” menu

---

## “Most Available Programming Language in Human History”?

<div class="w-full flex justify-center p-4">
<div class="w-3/5">

![A JavaScript Console](/images/data-club/console.png)

</div>
</div>

---

## Data Types

* Number: integer or float. JavaScript doesn’t care.
* String: surrounded by `"` as in `"this is a string"`
* Boolean: `true` or `false`. JS also has an idiomatic sense of “truthiness”
* Array: ordered collection of other things, surrounded by `[]`.
* Object: collection of named properties, surrounded by `{}`.
* Function: cool thing that does something.
* `null`: The non-value. It and `NaN` (“not a number”) can behave unpredictably.

---

## Variables

* Define a variable using the `const` keyword. 
* Assign a value to the variable with `=`, the assignment operator. These can be combined: `const a = 1;`.
* Using `const` creates an immutable variable, so you cannot later reassign a value to it, like `a = 3`.
* If you need mutability, like for a counter variable, you can use the `var` or `let` keywords instead.
* Typically, though, you will use `const`. Restrict yourself by default!

---

## Numbers

* Work kind of like you would expect, but weirdness can arise. (Try `0.2 + 0.1`)
* Under type coercion with `Number()`:
  * `undefined` becomes `NaN`
  * `true` becomes 1
  * `null` and `false` become `0`
  * Can use `parseInt()` or `parseFloat()` to control how strings are coerced.
* `Date` is a different type that is beyond this intro.
* [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

---

## Strings

* Surrounded by `"`, although `'` is also used. Be consistent
* Template literals, which can interpolate data, are surrounded by back-ticks, and the data is surrounded by `${}`. Like f-strings in Python.
* Template literals are a short cut for string coercion.
* Strings have a `.length` property. In JS, length is a property, not a built-in function.
* Characters in strings can be accessed using array-like syntax (`"string"[2]` yields `"r"`).
* Have a `.split()` method for creating an array.
* [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

## Booleans

* Are responses to truth tests in JS, such as (try these!):
  * `2 < 1`
  * `2 === 1` (Note the triple-equals!)
  * `3 <= 3`
  * `1 || false`
  * `(false || 0) === false`
  * `(false || 0) == false` (Note the double-equals!)
  * These tests are used in `if(){}` and `while(){}` statements.
* [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

---

## Arrays

* Like lists in Python.
* Can have anything inside them, even other arrays. Surrounded by `[]`.
* Zero-indexed and accessible via their index.
* Have a `.length` property.
* Have `.filter()`, `.map()`, and `.reduce()` methods. Mastering these concepts are vital!
* Also have a `.join()` method for converting to strings.
* [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

## Objects

* Like dicts in Python.
* Can have anything inside them. 
* Surrounded by `{}`
* Property names do not need quotes (`const foo = { a: 1, b: 2 };`)
* Properties can be accessed with bracket notation (`foo["a"]`) _or_ dot notation (`foo.a`)!
* Nearly everything in JS is, ultimately, an object.
* Properties that are functions are called “methods.”
* [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

---

## Functions

* Can be named (like using def in Python) or anonymous (like lambdas in Python).
* Have three parts: an optional name, an argument/parameter list in `()`, and a body in `{}`: `function myFunction(x){ return x; }`.
* Alternatively, you can create a function by assigning an anonymous function to a variable. This strikes me as more idiomatic: `const myFunction = function(x){ return x; };`.
* Contemporary JS (ab)uses arrow functions, where the above is shortened to: `const myFunction = x => x;`
* [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

---

## Array methods

```js
const a = [1, 2, 3];
a.filter(n => n === 2);
a.map(n = > n * n);
a.reduce((n, m) => n + m, 0);
```
---

## `null`

`null` and `undefined` are different things, and they can behave oddly, especially when coerced into other types. 

See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/null) for more.

---

## Blocks

<div class="w-full flex justify-center">
<div class="w-1/2">

```
const foo = ["a", "b", "c"];
for(let i = 0; i < foo.length; i += 1){
  console.log(foo[i]);
}
```

</div>
<div class="w-1/2">

```
const bar = [1, 2, 3, 4];
bar.forEach(function(n) {
  if(n % 2 === 0){
    console.log(`${n} is even`)
  } else {
    console.log(`${n} is odd`)
  }
});
```

</div>

---

## Challenge

Write a tip calculator:

```
const tipCalculator = (total, serviceQuality) => {
  
  // do some stuff with the total and serviceQuality.
  // What kind of variable is serviceQuality, anyway?
  // It's up to you!

  return 0;
} 
```

---

## Observable

* [Observable](https://observablehq.com) notebooks created by the same person who made the [D3](https://d3js.org/) data visualization library.
* Like Jupyter notebooks, but for JavaScript.
* Open up the possibility for using JavaScript for legitimate exploratory data analysis while also staying true to web-based interactivity we expect from JS.
* [https://observablehq.com/@columbia-data-club/day-one-javascript](https://observablehq.com/@columbia-data-club/day-one-javascript)

---

## Thanks!

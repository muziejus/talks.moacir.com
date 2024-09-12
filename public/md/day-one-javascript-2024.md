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


---

What follows is not the only way to proceed.

It’s not necessarily the best way.

But it’s an OK way for a 90-minute illustration.

And it’s a workable foundation.

---

## While Evertyhing’s Downloading, Three Processes:

1. Writing the essay (Markdown in VSCode)
1. Putting the essay together (Zotero and Pandoc with VSCode)
1. Putting the essay under version control (Git, if we are extra ambitious today)

---

## Why VS Code?

<ol>
<li class="fragment">Free</li>
<li class="fragment">Similar across platforms</li>
<li class="fragment">One-stop shop with integrated shell</li>
<li class="fragment">Excellent Git support built in</li>
</ol>

---

## Isn’t Google Docs Free and Platform Agnostic?

<ol>
<li class="fragment">“Free”</li>
<li class="fragment">Ethics, Availability, and Sustainability of Plain Text (see <a href="https://programminghistorian.org/en/lessons/sustainable-authorship-in-plain-text-using-pandoc-and-markdown">Tenen and Wythoff</a>)</li>
</ol>

---

## VSCode Tour <small>([See Also](https://code.visualstudio.com/docs/getstarted/userinterface))</small>

<div class="w-full flex justify-center">
<div class="w-3/5">

![VSCode Visual Orientation](https://i.imgur.com/DJ2I1N0.png)

</div>
</div>

---

## VSCode User Interface

<div class="w-full flex justify-center">
<div class="w-3/5">

![VSCode User Interface](https://code.visualstudio.com/assets/docs/getstarted/userinterface/hero.png)

</div>
</div>

---

## VSCode Initial Steps

1. Learn/internalize the [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#\_command-palette) (⇧⌘P / ⌃⇧P)
1. Toggle autosave via Command Palette
2. Notice that VSCode expects projects, not documents.

---

## Use Extensions and Start Writing (in Markdown)

1. Install some helpful plugins:
    * [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
    * [Markdown Footnotes](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-footnotes)
    * [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
2. Create a new file, called `main.md`

---

## Markdown?

* Yes, a [Markdown](https://guides.github.com/features/mastering-markdown/)
* Also add this frontmatter at the top of the document:
    ```yaml
      ---
      title: "My title"
      author: "My name"
      ---
    ```

---

## Markdown?

* Footnotes come in two flavors:
  * Inline:
    ```markdown
    Some text.^[This is the text of a footnote.]
    ```

  * Not Inline (Outline?):
    ```markdown
    Some text.[^footnote-name]

    [^footnote-name]: This is the text of a footnote.
    ```

---

## Pandoc Integration into VSCode

<small>

* Pandoc is a “[universal document converter](https://pandoc.org),” and it can convert markdown into Word files, web pages… (and pdfs in session 2…)
* [Extensions exist](https://marketplace.visualstudio.com/search?term=pandoc&target=VSCode&category=All%20categories&sortBy=Relevance) for using Pandoc with VSCode.
* Create a new Terminal (Control Palette, “Create New Terminal”).
* Let’s make a Word doc, which might be enough to keep your advisor happy.
* Use this command:
    ```
    pandoc -i main.md -o main.docx
    ```

</small>

---

## Zotero in VSCode via [Better B<span class="ib">ib</span><span class="tex">T<sub>E</sub>X</span>](https://github.com/retorquere/zotero-better-bibtex/releases/download/v6.1.5/zotero-better-bibtex-6.1.5.xpi)

<div class="w-full flex justify-center">
<div class="w-1/2">

![Zotero with Better B<span class="ib">ib</span><span class="tex">T<sub>E</sub>X</span> installed](https://i.imgur.com/n5P5stu.png)

<small>(Note the little “`citation-key:edney`” in the Extra field!)</small>
</div>
</div>


---

## Cite as You Write (Setup)

1. Export your sources as “Better B<span class="ib">ib</span><span class="tex">T<sub>E</sub>X</span>” and select “Keep updated.”
2. Save to your Dissertation folder as `bibliography.bib`
3. Add this line to your front matter:
    ```yaml
    bibliography: [./bibliography.bib]
    ```
4. Install [Pandoc Citer](https://marketplace.visualstudio.com/items?itemName=notZaki.pandocciter) extension. (May require quitting and reopening VSCode)

---

## Cite as You Write (As You Write)

1. Use [`@citation-key` syntax](https://pandoc.org/MANUAL.html#citation-syntax)
6. Augment pandoc incantation:
    ```
    pandoc --citeproc -i main.md -o main.docx
    ```
7. Add new sources via Zotero and watch `bibliography.bib` automatically grow

---

## I’m Citing!

<div class="w-full flex justify-center">
<div class="w-3/5">

![VSCode with pandoc and bibliography](https://i.imgur.com/2LKgaSC.png)

</div>
</div>

---

## In Word

<div class="w-full flex justify-center">
<div class="w-3/5">

![.docx version of pandoc with bibliography](https://i.imgur.com/pPjPzhr.png)

</div>
</div>

---

## Now make a pdf.

1. Augment pandoc incantation:
    ```
    pandoc --citeproc -i main.md -o main.pdf
    ```
---

## Next Steps

* Use [CSLs in Pandoc](https://pandoc.org/MANUAL.html#specifying-a-citation-style) to manage reference styles
* Use [reference doc](https://pandoc.org/MANUAL.html#option--reference-doc) to adjust Pandoc Word docs’ look
* Use [KaTeX](https://katex.org/) to format math (try: `$\sqrt{3x-1}+(1+x)^2$`)
* Learn more about [generating pdfs in Pandoc](https://pandoc.org/MANUAL.html#creating-a-pdf).
* Read Kieran Healy’s [_The Plain Person’s Guide to Plain Text Social Sciences_](https://plain-text.co/) for tips, inspiration, alternatives, etc.
* Google around, talk to me…

---

# Keep Track of What You Did

<h2 class="fragment">With Git or not…</h2>

---

# Speaking of Git…

---

## Git Is:

<ol>
<li class="fragment">Part of a backup solution</li>
<li class="fragment">An intention tracker/writing journal</li>
<li class="fragment">A declutterer</li>
<li class="fragment">A multi-verse generator</li>
<li class="fragment">A collaboration engine</li>
</ol>

---

## The Four Main Steps to Git

1. <span class="fragment">Save - Not even part of Git. “Changes” in VSCode.</span>
2. <span class="fragment">Stage - Also known as `git add`. </span>
3. <span class="fragment">Commit - Show your _intention_. </span>
4. <span class="fragment">Push - “Sync” in VSCode.</span>


Note: Saving is what you already do. The files you work with have changes that
get saved to the disk. Then, in staging a file, youâ€™re giving Git a heads up
to keep track of the changes you have made. In committing, youâ€™re putting down
a milestone for the changes the files have undergone. And in pushing, youâ€™re
syncing your new changes with a server.

---

<div class="flex w-full justify-center">
<div class="w-2/3">

![The four steps to git](https://i.imgur.com/mNfax2z.png)

<span class="credit">Icons by Font Awesome. [License](https://fontawesome.com/license).</span>

</div>
</div>

Note: Hereâ€™s a slightly more visual way to think about this. But youâ€™ll notice
here that Iâ€™m talking about â€œchanges,â€ not a â€œdocument.â€ This is a central
conceit of Git.

---

## You’re not working on a _document_.<br />You’re working on a _project_.

Note: For the rest of today, weâ€™ll be working on a project that is your CV.
Itâ€™s not a single document. In fact, itâ€™s many--itâ€™s at least the html page
that is your online CV and the pdf that is the print version. In a project,
files come and go. They could be datasets, collections of text like chapters
or sections of an article, or even, like in todayâ€™s workshop, the various
parts of your CV.

---

## Working with Git via GitHub

1. Create an account/login at [github.com](http://github.com)
1. [Create a new repository](https://github.com/new) called `dissertation`
    * Make it private
    * Select “Add a README file”

---

## Create a Repository

<div class="w-full flex justify-center">
<div class="w-1/2">

![Create a GitHub respository](https://i.imgur.com/Xq0r35C.png)

</div>
</div>


---

## GitHub Visual Orientation

<div class="w-full flex justify-center">
<div class="w-1/2">

![GitHub Visual Orientation](https://i.imgur.com/GoBtkMa.png)

</div>
</div>

---

## Clone Your Repository from GitHub

1. Clone Repository
2. Click on the little popdown “Clone from GitHub”
4. Follow authorizations

---

## Git in VSCode

1. Rely on tooltips in the Source Control Sidebar
2. Git process moves upward (Changes → Staged Changes → Commit → Push) in the sidebar
3. Color cues also help

---

## Git in VSCode

<div class="w-full flex justify-center">
<div class="w-1/2">

![Git in VSCode](https://i.imgur.com/PBBao9J.png)

</div>
</div>

---

## Managing a Workflow in Git

* `.gitignore` file to ignore files and folders in your project
* GitHub issues, to-dos, and projects to schedule your work
* Automatically close GitHub issues with “`Fixes #1`” syntax in commit messages
* Use Timeline feature in VSCode Explorer Sidebar to travel in time

---

## Thanks!
### [@muziejus](http://twitter.com/muziejus)


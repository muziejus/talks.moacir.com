# Gitsertation<!-- .element: class="r-fit-text" -->

## Scholarly Project Workflows<!-- .element: class="r-fit-text" -->

<small>
<a href="http://moacir.com">Moacir P. de Sá Pereira</a> | <a href="http://twitter.com/muziejus">@muziejus</a><br />
Research Data Librarian | <a href="http://library.columbia.edu">Columbia University Libraries</a> <br />
mpd2149@columbia.edu | <a href="http://pronoun.is/he">pronoun.is/he</a><br />
NY, NY, 2022
</small>

Note: Thanks all for coming. Thanks Maira for the invitation.


---

http://talks.moacir.com/-/gitsertation-2022/

Note: I always make the slides for my talks and workshops available online, so
here they are if you want to follow along at home or review the links, etc.,
at a later date.

---

## Opening Links:

* Download:
  * [Visual Studio Code](https://code.visualstudio.com/Download) 
  * [Pandoc](https://pandoc.org/installing.html)
  * [Zotero](https://zotero.org)
  * [Better BibTeX for Zotero](https://github.com/retorquere/zotero-better-bibtex/releases/download/v6.1.5/zotero-better-bibtex-6.1.5.xpi)

* Create an Account on:
  * [GitHub](https://www.github.com)

---

## About Me

* Research Data Librarian at [Columbia University
  Libraries](http://library.columbia.edu)
* Taught English at NYU before
* Occasional scholar of literature and space
* Contact me and my colleagues at `data@library.columbia.edu`

---

## Outline

* Git in Theory (20 mins)
* GitHub Orientation (5 mins)
* VSCode Orientation & Extensions (10 mins)
* Markdown Primer (5 mins)
* Pandoc Integration into VSCode (10 mins)
* Zotero Integration into VSCode (10 mins)
* Projects with Git and GitHub (20 mins)
* Close/Q&A (10 mins)

---

What follows is not the only way to proceed.

It’s not necessarily the best way.

But it’s an OK way for a 90-minute illustration.

And it’s a workable foundation.

---

## Projects & Git.

---

## Your Dissertation Is Not a _Document_.<br />It Is a _Project_.

![Gantt Chart](https://upload.wikimedia.org/wikipedia/commons/3/37/GANTT_Chart.JPG)

---

## “Project Management Simplified” <small>([LinkedIn Course](https://www.linkedin.com/learning/project-management-simplified-2019))</small>

* Know your constraints<!-- .element: class="fragment" -->
* Break your project apart<!-- .element: class="fragment" -->
* Find your blockers<!-- .element: class="fragment" -->

---

## Git Is:

* “Free and open source distributed version control system designed to handle
everything from small to very large projects with speed and efficiency.”<!-- .element: class="fragment" -->
* “Easy to learn.”<!-- .element: class="fragment" -->
* A busybody keeping track of all the changes to all your files and never
forgetting them.<!-- .element: class="fragment" -->


Note: That part about â€œeasy to learnâ€ is probably not true. Git is insanely
powerful, and even people who use it every day probably donâ€™t use more than a
tiny chunk of it. And thatâ€™s because what IS easy is learning just enough Git
to make it useful for you.

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

![The four steps to git](https://i.imgur.com/mNfax2z.png)

<span class="credit">Icons by Font Awesome. [License](https://fontawesome.com/license).</span>

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

## Create a repository

![Create a GitHub respository](https://i.imgur.com/Xq0r35C.png)

---

## GitHub Visual Orientation

![GitHub Visual Orientation](https://i.imgur.com/GoBtkMa.png)

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

![VSCode Visual Orientation](https://i.imgur.com/DJ2I1N0.png)

---

## VSCode User Interface

![VSCode User Interface](https://code.visualstudio.com/assets/docs/getstarted/userinterface/hero.png)

---

## VSCode Initial Steps

1. Learn/internalize the [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#\_command-palette) (⇧⌘P / ⌃⇧P)
1. Toggle autosave via Command Palette
2. Notice that VSCode expects projects, not documents.

---

## Clone Your Repository from GitHub

1. Clone Repository
2. Click on the little popdown “Clone from GitHub”
4. Follow authorizations

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

* Pandoc is a “[universal document converter](https://pandoc.org),” and it can convert markdown into Word files, web pages… (and pdfs in session 2…)
* [Extensions exist](https://marketplace.visualstudio.com/search?term=pandoc&target=VSCode&category=All%20categories&sortBy=Relevance) for using Pandoc with VSCode.
* Create a new Terminal (Control Palette, “Create New Terminal”).
* Let’s make a Word doc, which might be enough to keep your advisor happy.
* Use this command:
    ```
    pandoc -i main.md -o main.docx
    ```

---

## Zotero Integration into VSCode via [Better BibTeX](https://github.com/retorquere/zotero-better-bibtex/releases/download/v6.1.5/zotero-better-bibtex-6.1.5.xpi)

![Zotero with Better BibTeX installed](https://i.imgur.com/n5P5stu.png)

<small>(Note the little “`citation-key:edney`” in the Extra field!)</small>


---

## Cite as You Write (Setup)

1. Export your sources as “Better BibTeX” and select “Keep updated.”
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

![VSCode with pandoc and bibliography](https://i.imgur.com/2LKgaSC.png)

---

## In Word

![.docx version of pandoc with bibliography](https://i.imgur.com/pPjPzhr.png)

---

## Git in VSCode

1. Rely on tooltips in the Source Control Sidebar
2. Git process moves upward (Changes → Staged Changes → Commit → Push) in the sidebar
3. Color cues also help

---

## Git in VSCode

![Git in VSCode](https://i.imgur.com/PBBao9J.png)

---

![The four steps to git](https://i.imgur.com/mNfax2z.png)

<span class="credit">Icons by Font Awesome. [License](https://fontawesome.com/license).</span>

---

## Managing a Workflow in Git

* `.gitignore` file to ignore files and folders in your project
* GitHub issues, to-dos, and projects to schedule your work
* Automatically close GitHub issues with “`Fixes #1`” syntax in commit messages
* Use Timeline feature in VSCode Explorer Sidebar to travel in time

---

# Keep Track of What You Did

<h2 class="fragment">With Git or not…</h2>

---

## Next Steps

* Use [CSLs in Pandoc](https://pandoc.org/MANUAL.html#specifying-a-citation-style) to manage reference styles
* Use [reference doc](https://pandoc.org/MANUAL.html#option--reference-doc) to adjust the look and feel of Word documents produced by Pandoc
* Use [KaTeX](https://katex.org/) to format math (try: `$\sqrt{3x-1}+(1+x)^2$`)
* Install [MiKTeX](https://miktex.org/) on Windows or [BasicTeX](https://www.tug.org/mactex/morepackages.html) on Mac to [generate pdfs in Pandoc](https://pandoc.org/MANUAL.html#creating-a-pdf).
* Read Kieran Healy’s [_The Plain Person’s Guide to Plain Text Social Sciences_](https://plain-text.co/) for tips, inspiration, alternatives, etc.
* Google around, talk to me…


---

## Thanks!
### [@muziejus](http://twitter.com/muziejus)

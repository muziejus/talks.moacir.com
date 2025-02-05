# Git and Gitting Organized

## (Also, Text Editing)

<small>
<a href="http://moacir.com">Moacir P. de Sá Pereira</a><br />
Research Data Librarian | <a href="http://library.columbia.edu">Columbia University Libraries</a> <br />
mpd2149@columbia.edu | he/him/his<br />
NY, NY, 2025
</small>

Note: Thanks all for coming. 


---

http://talks.moacir.com/-/gitsertation-2025/

Note: I always make the slides for my talks and workshops available online, so
here they are if you want to follow along at home or review the links, etc.,
at a later date.

---

## Opening Links:

* Download:
  * [Visual Studio Code](https://code.visualstudio.com/Download) 

* Install:
  * Git:
    * Mac: `xcode-select --install` in Terminal
    * Windows: [Git for Windows](https://gitforwindows.org/)

* Create an Account on:
  * [GitHub](https://www.github.com) (Requires email verification)

---

## About Me

* Research Data Librarian at [Columbia University
  Libraries](http://library.columbia.edu)
* Taught English at NYU before
* Occasional scholar of literature and space
* Contact me and my colleagues at `data@library.columbia.edu`

---

## Data Club

[linktr.ee/columbialibdata](http://linktr.ee/columbialibdata)

- Feb 19, “[SQL and NoSQL Databases in Python with Pandas](https://events.columbia.edu/go/data_club_dbs)”
- Mar 5, “[Python Data Engineering with Polars I](https://events.columbia.edu/go/data_club_polars_1)”
- Apr 2, “[Python Data Engineering with Polars II](https://events.columbia.edu/go/data_club_polars_2)”
- Apr 16, “[NumPy and Xarray](https://events.columbia.edu/go/data_club_xarray)”

---

## Data Club

We don’t usually do workshops, but today is a bit of an exception.

---

What follows is not the only way to proceed.

It’s not necessarily the best way.

But it’s an OK way for an illustration.

And it’s a workable foundation.

---

## Projects & Git.

---

## Your Dissertation/Thesis Is Not a _Document_.<br />It Is a _Project_.

<div class="w-full flex justify-center">
<div class="w-3/5">

![Gantt Chart](https://upload.wikimedia.org/wikipedia/commons/3/37/GANTT_Chart.JPG)

</div>
</div>

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

<div class="w-full flex justify-center">
<div class="w-3/5">

![The four steps to git](https://i.imgur.com/mNfax2z.png)

</div>
</div>

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
1. [Create a new repository](https://github.com/new) called `writing`
    * Make it private
    * Select “Add a README file”
    * Under “.gitignore template,” select “TeX”

---

## Create a repository

<div class="w-full flex justify-center">
<div class="w-3/5">

![Create a GitHub respository](https://i.imgur.com/Xq0r35C.png)

</div>
</div>

---

## GitHub Visual Orientation

<div class="w-full flex justify-center">
<div class="w-3/5">

![GitHub Visual Orientation](https://i.imgur.com/GoBtkMa.png)

</div>
</div>

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

## Clone Your Repository from GitHub

1. Clone Repository
2. Click on the little popdown “Clone from GitHub”
4. Follow authorizations

---

## Use Extensions

1. Install a helpful LaTeX plugin:
    * [LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop)

---

## Make a file

2. Create a new file, called `main.tex`

---

## Paste in

```tex
\documentclass{article}

\title{<yourtitle>}
\author{<yourname>}

\begin{document}

\maketitle

Document.\footnote{Here is a footnote}.

\end{document}
```
---

## Git in VSCode

1. Rely on tooltips in the Source Control Sidebar
2. Git process moves upward (Changes → Staged Changes → Commit → Push) in the sidebar
3. Color cues also help

---

## Git in VSCode

<div class="w-full flex justify-center">
<div class="w-3/5">

![Git in VSCode](https://i.imgur.com/PBBao9J.png)

</div>
</div>

---

<div class="w-full flex justify-center">
<div class="w-3/5">

![The four steps to git](https://i.imgur.com/mNfax2z.png)

</div>
</div>

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

* Install [TeX-Live](https://www.tug.org/texlive/) on Windows or Linux or [MacTeX](https://www.tug.org/mactex/) on Mac to get LaTeX working.
* Install other extensions for your programming languages of choice or other TeX extensions.
* Read Kieran Healy’s [_The Plain Person’s Guide to Plain Text Social Sciences_](https://plain-text.co/) for tips, inspiration, alternatives, etc.
* Google around, talk to me…
 
---

# Keep Track of What You Did

<h2 class="fragment">With Git or not…</h2>

---

## Thanks!

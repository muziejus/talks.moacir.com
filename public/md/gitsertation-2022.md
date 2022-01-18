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
* VSCode Orientation (5 mins)
* Markdown Primer (5 mins)
* VSCode Extensions (5 mins)
* Projects with Git and GitHub (30 mins)
* Pandoc Integration into VSCode (15 mins)
* Zotero Integration into VSCode (15 mins)
* Close (5 mins)

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

## [“Project Management Simplified” LinkedIn Course](https://www.linkedin.com/learning/project-management-simplified-2019)

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

## GitHub Visual Orientation



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

![Screenshot of VS Code](https://i.imgur.com/OloEamf.png)

---

## VSCode Initial Steps

1. Learn/internalize the [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#\_command-palette) (⇧⌘P / ⌃⇧P)
1. Toggle autosave via Command Palette
2. Notice that VSCode expects projects, not documents.

Note: Atom is brought to us by the people at GitHub. It probably wonâ€™t win you
any cool kid awards amongst your hacker nerd friends, but itâ€™s an easy editor
to learn, I think, and its Git integration is tip-top.

---

## Clone Your Repository from GitHub

2. Clone Repository
3. Click on the little popdown “Clone from GitHub”
4. Follow authorizations

---

## Key Files in Simple-Site

* ðŸ“ `_posts` (Where posts go, as Markdown files)
    * `YYYY-MM-DD-some-title.md` (For example)
* `_config.yml` (Configurations in [YAML](https://rollout.io/blog/yaml-tutorial-everything-you-need-get-started/)) 
* `index.md` (Front page, as a Markdown file)
* `about.md` (About page, as a Markdown file)

---

## Markdown?

* Yes, a [Markdown](https://guides.github.com/features/mastering-markdown/)

---

![Screenshot of Markdown in action](https://i.imgur.com/a7dMtNu.png)

---

## Create a New Post

---

![The four steps to git](https://i.imgur.com/mNfax2z.png)

--> Icons by Font Awesome. [License](https://fontawesome.com/license).

---

## OK, but Git

<ol>
<li class="fragment">Branching</li>
<li class="fragment">Issue Tracking via GitHub and Closing via Commit (â€œcloses #nâ€)</li>
<li class="fragment"><a href="http://ohshitgit.com">Messing Up</a></li>
</ol>

---

## Thanks!
### [@muziejus](http://twitter.com/muziejus) / moacir.p@columbia.edu(

---


> Not only is it easy to lie with maps, it’s essential. To portray meaningful relationships for a complex, three-dimensional world on a flat sheet of paper or a video screen, a map must distort reality. 

<span class="credit">[Monmonier, _How to Lie with
Maps_](https://press.uchicago.edu/ucp/books/book/chicago/H/bo27400568.html),
7.</span> 

Note: Monmonier opens “How to Lie with maps” with this provocation,
immediately foregrounding the relationship between distortion and mapping.
Monmonier continues:

As a scale model, the map must use symbols that almost always are proportionally much bigger or thicker than the features they represent. To avoid hiding critical in­ formation in a fog of detail, the map must offer a selective, incomplete view of reality. There's no escape from the carto­ graphic paradox: to present a useful and truthful picture, an accurate map must tell white lies.

In some ways, then, we can imagine that the mere process of mapping serves
as moving past mere representation in constructing the poscolonial digital
cultural record.

That doesn’t sound right, though. We’re still exhibiting a failure of the
spatial imagination.

---

<img alt="Massey pages 2 and 3" style="width: 65%;" src="https://i.imgur.com/CWRhcHJ.png">

<span class="credit">[_Codex Mendoza_](https://codicemendoza.inah.gob.mx/inicio.php) (c.1541) and Cortés, [_Mexico City_](https://www.newberry.org/file/hern-n-cort-s-mexico-city-1524-woodcut-vault-ayer-65551c8-1524d-0) (1524), in [Massey, _For Space_](https://uk.sagepub.com/en-gb/eur/for-space/book227109), 2–3.</span>

Note: Doreen Massey begins _For Space_ with a set of ruminations, of failures
of spatial imagination. "Failure in the sense of being inadequate to face up
to the challenges of space; a failure to take on board its coeval
multiplicities, to accept its radical contemporaneity, to deal with its
constitutive complexity.” I like the juxtaposition Massey provides here,
between one “map” that tells a story embedded in time, and the other map that
serves only to inform and control.

This is one way of thinking about the resistant digital map, then. In telling
a story, it positions itself within a historical narrative that it constructs
and frames. This is an opportunity, of course, for the person or people
creating the resistant digital map. In the short essay I wrote for Torn Apart,
I already mention Johanna Drucker’s idea of the visualization as a knowledge
generator, and in telling a new story never before told, maybe resistant
digital maps do the same.

But let’s spend a little more time with the Códice and view it as an online
exhibition funded by the instituto nacional de antropología e historia.


---

http://codicemendoza.inah.gob.mx/

Note: A story embedded in time. 

brokenness of google.

What is behind the impulse to put this on google maps?

Let’s talk a bit about the story of informing and controlling.

---


## Cartography<br/><small>(the Ideal)</small>

<img alt="Cover of Edney’s Cartography"
	src="https://i.imgur.com/hsEWOjV.jpg"
	style="width: 25%;"
/>

Note: Map historian Matthew Edney combined a lifetime of research into the
field of carography to produce this 2019 book, which argues for the end of
Cartography.

---

## The Cartography Ideal <!-- .element: class="r-fit-text" -->

In the _West_:

* ? – ~1800: Maps, charts, etc., are all different
* ~1800 – ~1900: All mapping should be “cartography,” unified by projective
  geometry and scale
* ~1900 – ~1970: All mapping *is* “cartography,” even property mapping. 
* ~1970 – present: The ideal is critiqued, yet now more reproduced than ever,
  online.

---

## The Cartography Ideal <!-- .element: class="r-fit-text" -->

* Ontology: The map is a reduction of the world/archive.
* Pictorialness: The map is an unmediated/mimetic presentation of the world
* Individuality: Making/using maps are acts of individual cognition
* Materiality: Maps are things in specific moments
* Observation: Maps are grounded in observation and measurement

Note: Edney gives a bunch of preconceptions of the cartographic ideal

---

## The Cartography Ideal <!-- .element: class="r-fit-text" -->

* Efficacy: Maps are there to be used, especially for navigation
* Discipline: Maps can be incorrect and later corrected
* Publicity: Maps are for wide use
* Morality: Mappers are morally obligated to make the best maps
* Singularity/Universality: there is one map.

---

## The Cartography Ideal <!-- .element: class="r-fit-text" -->

> The normative map must be eliminated, likewise the conviction that it is
meaningful to talk about “maps” or “the map” as a generic category of
phenomena.

<span class="credit">Edney, <a
href="https://press.uchicago.edu/ucp/books/book/chicago/C/bo34094164.html"><i>Cartography</i></a>,
233.</span>

Note: But in closing, Edney indicates the need for an end to maps as our
objects of discussion and, instead about mapping. I should be talking about
resistant digital mapping and not resistant digital maps, but there’s a reason
I chose the latter.

---

## The Cartography Ideal <!-- .element: class="r-fit-text" -->

> Map scholars need to study the processes of mapping… Mapping processes are
fluid, the maps they generate are mutable and volatile. Nothing about mapping
is fixed and stable… Map scholars must stop saying “maps are” and instead say
“X mapping is.”

<span class="credit">Edney, <a
href="https://press.uchicago.edu/ucp/books/book/chicago/C/bo34094164.html"><i>Cartography</i></a>, 234, 236.</span>

---


## Situated Digital Mapping<!-- .element: class="r-fit-text" -->

> [This essay is] an argument for situated and embodied knowledges and
an argument against various forms of unlocatable, and so irresponsible,
knowledge claims.<!-- .element: style="font-size: 70%;" -->

> Situated knowledges require that the object of knowledge be pictured as an
actor and agent, not as a screen or a ground or a resource, never finally as
slave to the master that closes off the dialectic in his unique agency and his
authorship of “objective” knowledge.<!-- .element: style="font-size: 70%;" -->

<span class="credit">Haraway, <a href="http://www.jstor.org/stable/3178066">“Situated Knowledges,”</a> 583, 590.</span>

Note: The resistant digital map is an instance of situational digital mapping.

Irresponsible means unable to be called
into account.There is a premium on establishing the capacity to see from the peripheries and the depths.Butheretherealsoliesa

seriousdangerof romanticizingand/orappropriatingthe vision of thelesspowerfulwhileclaimingtoseefromtheirpositions.Tosee
from below is neither easily learnednor unproblematic,even if
inhabitthe terrainof sub- "we""naturally" great underground
jugatedknowledges.The positioningsof the subjugatedarenot ex-
empt from criticalreexamination,decoding,deconstruction,and
interpretation;that is, from both semiologicaland hermeneutic
modes of criticalinquiry.The standpointsof the subjugatedare
not "innocent"positions. On the contrary,they are preferred because in principlethey are least likely to allow denial of the
criticaland interpretivecore of all knowledge

---

## Situated Mapping Case Study: Vilnius <!-- .element: class="r-fit-text" -->

<img alt="Map of Vilnius by Google"
	src="https://i.imgur.com/uCJ0MKQ.png"
	style="width: 60%;"
/>

Note: What’s important in this map?

---

## Thanks!
### [@muziejus](http://twitter.com/muziejus) / moacir.p@columbia.edu

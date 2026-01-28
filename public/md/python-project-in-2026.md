# Starting a Python Research Project in 2026

<small>
<a href="http://moacir.com">Moacir P. de Sá Pereira</a><br />
Research Data Librarian | <a href="http://library.columbia.edu">Columbia University Libraries</a> <br />
mpd2149@columbia.edu | he/him/his<br />
NY, NY, 2026
</small>

- projects
- uv
- git
- gcp

Note: Thanks all for coming.

---

http://talks.moacir.com/-/gitsertation-2025/

Note: I always make the slides for my talks and workshops available online, so
here they are if you want to follow along at home or review the links, etc.,
at a later date.

---

## Opening Links:

- Install:

  - Git:
    - Mac: `xcode-select --install` in Terminal
    - Windows: [Git for Windows](https://gitforwindows.org/)

- Create an Account on:
  - [GitHub](https://www.github.com) (Requires email verification)

---

## About Me

- Research Data Librarian at [Columbia University
  Libraries](http://library.columbia.edu)
- Taught English at NYU before
- Occasional scholar of literature and space
- Contact me and my colleagues at `data@library.columbia.edu`

---

## Data Club

[linktr.ee/columbialibdata](http://linktr.ee/columbialibdata)

- Jan 29 (Thu): [Working with Large Datasets in R](https://events.columbia.edu/go/data_club_large_datasets_r)

- Feb 4 (Wed): [Open Source GIS 1: Data Structures, Manipulation, Etc.](https://events.columbia.edu/go/data_club_open_source_gis_1)

- Feb 5 (Thu): [Working with Repetitive Data Tasks in R](https://events.columbia.edu/go/data_club_repetitive_tasks_r)

- Feb 11 (Wed): [Open Source GIS 2: Intro to Visualization and Cartography](https://events.columbia.edu/go/data_club_open_source_gis_2)

- Feb 12 (Thu): [Move beyond Jupyter Notebooks with Marimo](https://events.columbia.edu/go/data_club_marimo)

---

What follows is not the only way to proceed.

It’s not necessarily the best way.

But it’s an OK way for an illustration.

And it’s a workable foundation.

---

## Outline

- Projects in general
- Projects in Python with [`uv`](https://docs.astral.sh/uv/)
- Git with `uv`
- Google Cloud Data Storage (?)

---

## Your Research Is Not a _Document_.<br />It Is a _Project_.

<div class="w-full flex justify-center">
<div class="w-3/5">

![Gantt Chart](https://upload.wikimedia.org/wikipedia/commons/3/37/GANTT_Chart.JPG)

</div>
</div>

---

## “Project Management Simplified” <small>([LinkedIn Course](https://www.linkedin.com/learning/project-management-simplified-2019))</small>

- Know your constraints<!-- .element: class="fragment" -->
- Break your project apart<!-- .element: class="fragment" -->
- Find your blockers<!-- .element: class="fragment" -->

---

## Projects Go in Folders

- Many resources<!-- .element: class="fragment" -->
- Many dependencies<!-- .element: class="fragment" -->
- Many versions<!-- .element: class="fragment" -->

---

## uv

- Replaces `pip`, `virtualenv`, `pyenv`, and `poetry`.
- Blazingly fast
- Install once and link forever dependency management (more `pnpm` than `npm`)

---

## Install uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

In Powershell:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

---

## Start a Project

```bash
uv init my-project
```

This creates a folder `my-project` and puts five files in it:

- `README.md`, which introduces users to your project
- `main.py`, which is the main point of entry into your project (for code)
- `pyproject.toml`, which is a [TOML](https://toml.io/en/)-formatted config file that describes the Python infrastructure, including dependencies
- `.python-version`, which lists the canonical version of Python for the project
- `.gitignore`, which tells Git which files to ignore

---

## Dependencies

Dependencies are the various software libraries that you install in addition to the regular vanilla Python you use in your project. Lines of code like `import polars as pl` indicate that your project relies on the [Polars](https://pola.rs) data wrangling library. Let’s add [Ruff](https://docs.astral.sh/ruff/), a Python linter and formatter, to our project:

```bash
uv add ruff
uv run ruff check
uv run main.py
```

---

## Venv

`uv` gives you a virtual environment for free. That’s a vital part of its flexibility.

All of the dependencies are flagged in the virtual environment, but they are not installed in the project. Rather, they are installed for the user once in a global cache and then linked to the project. This means multiple projects can reference the same library in separate virtual environments, but it is only installed once.

---

## Bringing uv to an Existing Python Project

If you already have a Python project that uses `pip` and has a `requirements.txt`, the upgrade path is simple:

```bash
uv init
uv add -r requirements.txt
uv sync
```

This incorporates all of the libraries in the `requirements.txt` file into a `pyproject.toml` file and makes everything `uv`-native. Now you can remove `requirements.txt`.

Upgrading from poetry is a little more involved, but you can use [`migrate-to-uv`](https://mkniewallner.github.io/migrate-to-uv/).

---

## Using Different Versions of Python

```bash
uv python list
uv python install 3.10 3.11 3.12
```

Sometimes different projects require different versions not just of dependencies but also of Python itself. As expected, `uv` can help with that.

---

## Now, Git.

---

## Git Is:

- “Free and open source distributed version control system designed to handle
  everything from small to very large projects with speed and efficiency.”<!-- .element: class="fragment" -->
- “Easy to learn.”<!-- .element: class="fragment" -->
- A busybody keeping track of all the changes to all your files and never
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

1. <span class="fragment">Save - Not even part of Git. </span>
2. <span class="fragment">Stage - Also known as `git add`. </span>
3. <span class="fragment">Commit - Show your _intention_. </span>
4. <span class="fragment">Push - Sync up and backup.</span>

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

Note: Heres a slightly more visual way to think about this. But youâ€™ll notice
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

## I Like Lazygit

[Lazygit](https://github.com/jesseduffield/lazygit) is a great tool that presents Git’s complexities in a somewhat manageable way. The easiest way to install it (on Macs) is with [Homebrew](https://brew.sh):

```bash
brew install lazygit
```

(We could’ve installed `uv` with Homebrew, too!)

---

# Keep Track of What You Did

<h2 class="fragment">With Git or not…</h2>

---

## Google Cloud Storage

Cloud Storage, which is a part of the [Google Cloud Platform](https://console.cloud.google.com/welcome), gives you access to storage buckets online. They are not free, but they are cheap, and Columbia researchers can start their GCP careers with a stack of free credits.

First we create the bucket:

- Go to the [GCP console](https://console.cloud.google.com/welcome)
- Create a new project or check you’re in the right one
- Click “Create Storage Bucket”
- Select all the defaults
- Upload something

---

## Manage Access

- Go to the [GCP console](https://console.cloud.google.com/welcome)
- Scroll to IAM & Admin
- Pick “Service Accounts” on the left
- Click “Create Service Account”
- Fill in info and click “Create and continue”
- Give it “Storage Object Viewer” permissions, and finish up.
- Select the account, go to Keys, and create a private JSON key.
- Save the file to your project folder.
- Add the file name to your .gitignore!

---

## Access from Python

```bash
uv add polars google-cloud-storage
```

In `main.py`:

```python
from google.cloud import storage
from google.oauth2 import service_account
import polars as pl
import io

KEY_PATH = "data-club.json"
BUCKET = "data-club-foo-1"
BLOB = "data.csv"


def main():
    creds = service_account.Credentials.from_service_account_file(KEY_PATH)
    client = storage.Client(credentials=creds)
    blob = client.bucket(BUCKET).blob(BLOB)
    data = blob.download_as_bytes()

    df = pl.read_csv(io.BytesIO(data))

    print(df.head())


if __name__ == "__main__":
    main()
```

---

# Disco! 🕺

---

There are tidier ways to wire up a Python script to Cloud Storage, but this one relies on the least amount of dependencies.

---

## Next Steps

- Read Kieran Healy’s [_The Plain Person’s Guide to Plain Text Social Sciences_](https://plain-text.co/) for tips, inspiration, alternatives, etc.
- Google around, talk to me…

---

# Keep Track of What You Did

<h2 class="fragment">With Git or not…</h2>

---

## Thanks!

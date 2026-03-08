# Vita Hacks Guide

A complete guide to PS Vita (TV) custom firmware, from stock to Ensō.

[![Website Badge](https://img.shields.io/badge/website-vita.hacks.guide-006FCD?logo=vitepress&logoColor=FFFFFF)](https://vita.hacks.guide/)
[![Translation Badge](https://img.shields.io/badge/translation-contribute-263238?logo=crowdin&logoColor=FFFFFF)](https://crowdin.com/project/vita-guide)
[![Discord Server](https://img.shields.io/badge/chat-nintendo%20homebrew-7289DA?logo=discord&logoColor=FFFFFF)](https://discord.gg/C29hYvh)
[![Last Commit Badge](https://img.shields.io/github/last-commit/hacks-guide/Guide_Vita)](https://github.com/hacks-guide/Guide_Vita/commits/master/)
[![MIT License](https://img.shields.io/badge/license-MIT-A31F34)](https://github.com/hacks-guide/Guide_Vita/blob/master/LICENSE.txt)

For support, join the HENkaku Discord Server instead of Nintendo Homebrew.

[![Support Server](https://img.shields.io/badge/support-HENkaku-7289DA?logo=discord&logoColor=FFFFFF)](https://discord.gg/m7MwpKA)

## Running the site locally

This requires the following installed on your system:

* [node.js](https://nodejs.org/en)

To test the website locally, clone the source code:

```shell
git clone https://github.com/hacks-guide/Guide_Vita --recurse-submodules
cd Guide_Vita
```

Then simply run the following commands:

```shell
npm ci
npm run docs:dev
```

> [!TIP]
> If you choose to run multiple web servers at once, they will begin running at the next highest usable port (e.g. :5174, :5175, and so on).

The website should now be running on <http://127.0.0.1:5173/> (or whatever port is shown on the terminal).

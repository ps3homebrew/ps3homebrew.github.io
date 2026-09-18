# PS3 Homebrew Guide

A complete guide to PS3 jailbreak and homebrew setup.

[![Website Badge](https://img.shields.io/badge/website-ps3homebrew.github.io-006FCD?logo=vitepress&logoColor=FFFFFF)](https://ps3homebrew.github.io/)
[![Discord Server](https://img.shields.io/badge/chat-playstation%20homebrew-7289DA?logo=discord&logoColor=FFFFFF)](https://discord.gg/BVp9Rka)
[![Last Commit Badge](https://img.shields.io/github/last-commit/ps3homebrew/ps3homebrew.github.io)](https://github.com/ps3homebrew/ps3homebrew.github.io/commits/master/)
[![MIT License](https://img.shields.io/badge/license-MIT-A31F34)](https://github.com/ps3homebrew/ps3homebrew.github.io/blob/master/LICENSE.txt)

For support, join the PlayStation Homebrew Discord Server linked above.

## Running the site locally

This requires the following installed on your system:

* [node.js](https://nodejs.org/en)

To test the website locally, clone the source code:

```shell
git clone https://github.com/ps3homebrew/ps3homebrew.github.io --recurse-submodules
cd ps3homebrew.github.io
```

Then simply run the following commands:

```shell
npm ci
npm run docs:dev
```

> [!TIP]
> If you choose to run multiple web servers at once, they will begin running at the next highest usable port (e.g. :5174, :5175, and so on).

The website should now be running on <http://localhost:5173/> (or whatever port is shown on the terminal).

# Cars24 Design System Sandbox

This repository is the local sandbox for building the multi-brand AI LLM design system from scratch.

## Principles

- keep all working context inside this repo
- treat `Figma` as design truth
- treat `GitHub` as engineering truth
- treat `Storybook` as the shared visibility layer
- preserve token dependency direction and avoid hardcoded implementation drift

## Repo Structure

- [Tokens](./Tokens): source exports used as the factual token input
- [memory](./memory): canonical repo knowledge for humans and LLMs
- [skills](./skills): thin repo-local skills that load the right memory for a task

## Start Here

- [memory/index.md](./memory/index.md)
- [memory/token-architecture.md](./memory/token-architecture.md)
- [memory/workflows/figma-github-storybook.md](./memory/workflows/figma-github-storybook.md)

## GitHub Setup

- Repository: [ishaankothiyal-designer/DLS-2027-Lego](https://github.com/ishaankothiyal-designer/DLS-2027-Lego)
- Default branch: `main`
- CI: GitHub Actions validates Storybook builds on every push and pull request
- Docs publishing: Storybook deploys from `main` to GitHub Pages
- Expected docs URL: [ishaankothiyal-designer.github.io/DLS-2027-Lego](https://ishaankothiyal-designer.github.io/DLS-2027-Lego/)

## Current Focus

The repo currently documents:
- token architecture
- primitive and semantic color rules
- brand themes
- typography
- spacing, alpha, opacity, and stroke foundations
- active component tokenization guidance
- first component contracts for Button, Text Field, and Badge
- interdependency and usage rules
- future placeholders for expressive palette and Storybook documentation

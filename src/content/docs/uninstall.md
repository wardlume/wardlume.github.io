---
title: Update & uninstall
description: Keep Wardlume up to date, or remove it cleanly.
order: 8
icon: 🧹
---

## Update

- Menu bar → **Check for Updates…** opens the latest release.
- With Homebrew:

```sh
brew upgrade --cask wardlume
```

Your settings and permissions carry over between versions.

## Uninstall

1. Turn off **Settings → Automation → Launch at login** (or remove Wardlume in **System Settings → General → Login Items**).
2. Quit Wardlume from its menu.
3. Remove the app:

```sh
brew uninstall --cask wardlume
```

Or drag **Wardlume** from Applications to the Trash.

Optionally, remove Wardlume from **System Settings → Privacy & Security** (Screen Recording, Accessibility, Input Monitoring).

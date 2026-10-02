---
title: Update & uninstall
description: Keep Wardlume up to date, or remove it cleanly.
order: 8
icon: 🧹
---

## Update

**Since 1.7.4, Wardlume updates itself.**
- **Checking:** Menu bar → **Check for Updates…** shows what's new. Click **Install Update**, and Wardlume relaunches on the new version.
- **Your choice:** the second time you open Wardlume, it asks once whether to check for updates automatically. The update window also has a box to download and install future updates automatically. Change both any time in **Settings → Advanced → Updates**.
- **Admin password:** Homebrew and `.pkg` installs live in `/Applications` owned by the system, so installing an update asks for your Mac password.
- **Never while warded:** Wardlume never checks or installs while the ward is up.

**Updating from 1.7.3 or earlier:** those versions have no in-app updater, so update once by hand. After that, updates arrive in the app.

```sh
brew upgrade --cask wardlume
```

Wardlume's cask is marked as self-updating, so later `brew upgrade` runs leave it to the app. Use `brew upgrade --cask --greedy wardlume` to force it.

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

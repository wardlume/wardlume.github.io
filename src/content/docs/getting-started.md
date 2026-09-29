---
title: Getting started
description: Install Wardlume, finish the guided setup, and cast your first ward.
order: 1
icon: 🚀
---

Wardlume is a menu-bar app that locks your Mac's keyboard, mouse, and trackpad behind an animated glass shield while everything on screen keeps running in view. It's made for **botsitting**: leaving an AI coding agent (Claude Code, Codex, Cursor, …) working while you step away.

## 1. Install

The cleanest way is Homebrew:

```sh
brew tap arpitagarwal1301/tap
brew trust arpitagarwal1301/tap
brew install --cask wardlume
```

Prefer a regular download? See [Download](/download) for the `.pkg` and `.dmg`.

## 2. Finish the guided setup

On first launch, a setup window asks for three permissions, one at a time. Each one deep-links to the right System Settings pane and checks itself off live as you grant it. Some grants only apply after a relaunch, so the wizard offers **Quit & Reopen** when needed.

Why each permission is needed: [Permissions](/docs/permissions).

## 3. Cast your first ward

1. Press **⌘⇧L** from anywhere, even while typing in your IDE, or choose **Activate Ward** from the menu-bar icon.
2. The glass ward rises over the display you're working on. The screen stays readable; input is locked.
3. Walk away. Your Mac stays awake, so the ward holds and your agent keeps running.

## 4. Unlock

- **Touch ID:** rest your finger on the sensor, or press **⌘⇧U** and then use Touch ID.
- **Apple Watch:** tap any key, then double-press the watch's side button ([set it up](/docs/unlocking#apple-watch)).
- **Password:** press **⌘⇧U**, then choose *Use Password…*.

> Stuck? **⌘⌥Esc → Force Quit Wardlume** always works, because macOS reserves that shortcut. See the [Safety guide](/safety).

## Next

- Pick your intruder reaction: [Intruder reactions](/docs/reactions)
- Auto-ward when idle and launch at login: [Automation](/docs/automation)
- Multiple monitors: [Displays & gestures](/docs/displays)

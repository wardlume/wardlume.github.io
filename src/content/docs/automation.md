---
title: Automation
description: Launch at login, auto-ward when idle, and keeping your Mac awake.
order: 4
icon: ⏱️
---

**Settings → Automation** controls what Wardlume does on its own.

## Launch at login

Starts Wardlume quietly in the menu bar when you log in, so the ward and auto-ward are always ready. **On by default.** If you turn it off, Wardlume respects that and won't turn it back on.

If macOS needs your approval, Settings will say so: allow Wardlume in **System Settings → General → Login Items**.

## Auto-ward when idle

Casts the ward after **1–15 minutes** with no keyboard or mouse input. **Off by default.**

- A **10-second countdown** always comes first. Move the mouse or press a key to cancel it.
- It's paused while a video or presentation keeps the screen awake, and never fires while the screen is locked.
- Pick a time **shorter than your display's sleep timer**, or the display may sleep first.
- There's a quick **Auto-ward** toggle in the menu-bar menu too.

## Keep Mac awake while warded

Stops the display and system from idle-sleeping while the ward is up, so the ward holds and your agents keep running. **On by default.**

- It uses a standard power assertion (like `caffeinate`), released the moment the ward ends.
- **Closing the lid still sleeps the Mac**, and sleep always ends the ward. Wardlume never lets a lock survive sleep.
- With this off, the display can sleep when idle, which ends the ward.

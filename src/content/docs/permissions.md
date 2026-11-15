---
title: Permissions
description: Why Wardlume needs two permissions, what the two optional ones do, and how to fix them.
order: 2
icon: key
summary:
  - "Required: Accessibility and Input Monitoring. Optional: Screen Recording (Live glass) and Camera (Intruder photo)."
  - "Each is used only while warded. Nothing is recorded, logged or sent."
  - "If macOS drops a permission, Wardlume reopens setup instead of casting a half-working ward."
---

Wardlume needs **two** permissions, Accessibility and Input Monitoring. Screen Recording and Camera are **optional** and can be skipped in setup. Each is used **only while the ward is active**. Nothing is recorded, logged, or sent anywhere, and macOS blocks the app from the internet. See [Privacy & security](/docs/privacy-security) to verify it yourself.

| Permission | What Wardlume uses it for |
|---|---|
| **Accessibility** | Install the input lock that blocks the keyboard, mouse, and trackpad. |
| **Input Monitoring** | Notice intrusion attempts so the ward can react. |
| **Screen Recording** (optional) | Only for the **Live glass** look, a refracting glass over your desktop. Frames go straight to the overlay and are never saved or transmitted. The default **Clear glass** doesn't need it: it's a see-through window, and macOS draws your desktop beneath it. |
| **Camera** (optional) | Only for [Intruder photo](/docs/intruder-photo), off by default: one photo when someone fails to unlock. Skip it in setup and Wardlume never uses the camera. |

**Keeping your Mac awake needs no permission.** It's a standard power assertion (the same mechanism as `caffeinate`), held only while warded.

## Ward looks: Clear glass and Live glass

- **Clear glass** (default, no permission): the see-through "Input locked" screen, up the whole time, on every monitor set to *Show as-is*. Your agents stay visible behind it. A touch asks your Apple Watch to unlock.
- **Live glass** (needs Screen Recording): the animated refracting glass. Pick it in **Settings → Overview → Ward look** or the menu bar's **Ward look** menu. Wardlume explains what Screen Recording is for before macOS asks, and switches once the grant takes effect (after one **Quit & Reopen**).
- **On low battery**, Live glass switches to Clear glass by itself (15% by default, or off), even while locked, and back when you plug in.

## The one-time "private window picker" prompt

If you turn on Live glass and grant Screen Recording, macOS may ask once whether Wardlume can **bypass the system private window picker** to capture the screen directly. Wardlume triggers this before any ward is up, so you can click **Allow** right away.

## If a permission goes missing

macOS occasionally resets permissions after an update. When that happens:

- The menu-bar menu shows **Finish permissions setup…**. Click it to reopen the guided setup.
- Activating the ward reopens the setup instead of casting a half-working ward. Wardlume fails closed.
- If Screen Recording is switched off *while* a Live glass ward is up, the ward switches to Clear glass and **stays locked**, so there's no frozen image. A card after you unlock says why.
- Without Screen Recording, a Live glass ward simply uses Clear glass.

You can also check everything at a glance in **Settings → Overview → Permissions**. Its **Camera** row has a switch for Intruder photo and a link to System Settings if you want to remove camera access entirely (macOS only lets you do that there).

## Built with PermissionPilot

The setup wizard is powered by [PermissionPilot](https://github.com/arpitagarwal1301/PermissionPilot), our open-source (MIT) permissions-onboarding SDK for Mac apps.

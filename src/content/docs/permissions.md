---
title: Permissions
description: The three macOS permissions Wardlume asks for, the optional camera, why each one is needed, and how to fix them.
order: 2
icon: 🔐
---

Wardlume uses each permission **only while the ward is active**. Nothing is recorded, logged, or sent anywhere, and macOS blocks the app from the internet. See [Privacy & security](/docs/privacy-security) to verify it yourself.

| Permission | What Wardlume uses it for |
|---|---|
| **Screen Recording** | Draw the live desktop behind the glass. Frames go straight to the overlay and are never saved or transmitted. |
| **Accessibility** | Install the input lock that blocks the keyboard, mouse, and trackpad. |
| **Input Monitoring** | Notice intrusion attempts so the ward can react. |
| **Camera** (optional) | Only for [Intruder photo](/docs/intruder-photo), off by default: one photo when someone fails to unlock. Skip it in setup and Wardlume never uses the camera. |

**Keeping your Mac awake needs no permission.** It's a standard power assertion (the same mechanism as `caffeinate`), held only while warded.

## The one-time "private window picker" prompt

After Screen Recording is granted, macOS may ask once whether Wardlume can **bypass the system private window picker** to capture the screen directly. Wardlume triggers this at launch, before any ward is up, so you can click **Allow** right away.

## If a permission goes missing

macOS occasionally resets permissions after an update. When that happens:

- The menu-bar menu shows **Finish permissions setup…**. Click it to reopen the guided setup.
- Activating the ward reopens the setup instead of casting a half-working ward. Wardlume fails closed.
- If Screen Recording is switched off *while* warded, Wardlume drops the ward and shows a **Ward Deactivated** alert rather than leaving you behind a frozen image.

You can also check everything at a glance in **Settings → Overview → Permissions**. Its **Camera** row has a switch for Intruder photo and a link to System Settings if you want to remove camera access entirely (macOS only lets you do that there).

## Built with PermissionPilot

The setup wizard is powered by [PermissionPilot](https://github.com/arpitagarwal1301/PermissionPilot), our open-source (MIT) permissions-onboarding SDK for Mac apps.

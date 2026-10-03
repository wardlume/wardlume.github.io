---
title: Intruder photo
description: Optionally photograph anyone who fails to unlock your Mac while it's warded. Off by default; photos never leave your Mac.
order: 6.2
icon: 📷
---

**Intruder photo** takes one photo with your Mac's camera when someone **fails to unlock** while the ward is up. It's **off by default**, and macOS asks for camera access only when you turn it on.

## What triggers a photo

| Triggers a photo | Never triggers a photo |
|---|---|
| A wrong Touch ID, once macOS gives up on the prompt | Cancelling the unlock prompt |
| A wrong password | Choosing "Use password" |
| Touch ID locked out after too many tries | Simply touching the keyboard or mouse (that's an [intruder reaction](/docs/reactions)) |

At most **one photo every 10 seconds** and **10 per lock**. The camera turns on for a second or two to adjust to the light, then turns off.

## Never covert

- The camera's green light always shows while it takes the photo. macOS enforces that.
- The glass shows **"Failed unlocks are photographed"** by default. It's fair warning and a good deterrent. Some places expect people to be told before they're photographed, so leave it on unless you're sure.

## Turning it on or off

Any of these work, and they all stay in step:
- **Settings → Intruder photo**
- **Intruder photo** in the menu-bar menu
- The optional **Camera** row in the setup wizard. Allowing it turns the feature on.
- **Settings → Overview → Permissions → Camera**, which also links to System Settings → Privacy & Security → Camera if you want to remove the permission entirely.

The switch can't be changed while warded, so nobody at your keyboard can turn it off before guessing.

**Take Test Photo** in Settings checks framing and lighting without locking. The test photo isn't saved.

## Your photos

- **After you unlock**, a card tells you how many failed attempts were photographed, with **View Photos**. The menu also shows **Intruder Photos (N new)…**.
- **Settings → Intruder photo** lists them by lock session. Click a photo to open it. You can also **Open in Finder**, **Show in Finder** per session, **Export…** copies to a folder you pick, and **Delete All**.
- **Kept for** 7, 30 (default), or 90 days, or until you delete them.

Photos are JPEG files inside Wardlume's sandboxed container, which macOS protects from other apps. Wardlume has **no internet access**, so they can't leave your Mac (see [Privacy & security](/docs/privacy-security)). Uninstalling with `brew uninstall --zap --cask wardlume` removes them.

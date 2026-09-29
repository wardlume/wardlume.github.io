---
title: Locking & unlocking
description: Shortcuts, Touch ID, Apple Watch unlock and its setup, and your password.
order: 3
icon: 👆
---

Everything here lives in **Settings → Lock & unlock**.

## Shortcuts

| Action | Default | Notes |
|---|---|---|
| Activate / deactivate ward | **⌘⇧L** | Works anywhere, even while another app is focused |
| Unlock | **⌘⇧U** | Then Touch ID, Apple Watch, or your password |

To change a shortcut, click its pencil button and press your new keys. The reset button restores the default. **Touch ID always works**, even if you mis-configure a shortcut.

While warded, the unlock shortcut (and the optional [emergency exit](/docs/advanced)) are the only keys Wardlume listens to.

## Touch ID

Rest your finger on the sensor, or press your unlock shortcut first. If Touch ID fails or isn't available, choose **Use Password**.

## Apple Watch

With watch unlock on, **tap any key or the trackpad** while warded, then **double-press your watch's side button**. The request names your Mac so you know which one is asking. The unlock shortcut accepts your watch too.

### Setup checklist

1. Your watch is signed in to the **same Apple Account** as the Mac.
2. It has a **passcode**, is **on your wrist**, and is **unlocked**.
3. It's enabled in **System Settings → Touch ID & Password** (Settings has a button that opens it).
4. Turn on **Unlock with Apple Watch** in **Settings → Lock & unlock**, then press **Send test to watch**.

### Why a touch only ever asks your watch

When someone touches a warded Mac, Wardlume asks **only your watch**, never Touch ID or the password, and requests are rate-limited. A stranger can't use up your Touch ID attempts, and if you're nearby your wrist buzzes. Only you can approve.

Wardlume **never** unlocks just because your watch or phone is nearby. You always approve deliberately.

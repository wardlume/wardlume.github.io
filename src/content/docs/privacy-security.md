---
title: Privacy & security
description: What Wardlume can and can't access, how to verify that it can't reach the internet, and how updates work.
order: 6.5
icon: 🛡️
---

**Settings → Privacy & security** shows what Wardlume can reach. It reads these facts live from the app itself. You can also open it from the **Privacy ›** button at the top of Overview.

| | |
|---|---|
| **Internet access** | **Blocked by macOS.** Wardlume runs in Apple's App Sandbox with no network entitlement, so macOS refuses every connection it tries. |
| **Screen capture** | **Only while warded.** It draws your live desktop behind the glass, and is off the rest of the time. |
| **Recordings saved** | **None.** Frames go straight to the GPU and are never written to disk. |

## Verify it yourself

Run this in Terminal:

```sh
codesign -d --entitlements - /Applications/Wardlume.app
```

You'll see `com.apple.security.app-sandbox` and `com.apple.security.screen-recording`, and **no** `com.apple.security.network.client` or `network.server`. Without those, the app can't open a connection.

A network monitor such as [LuLu](https://objective-see.org/products/lulu.html) (free) or Little Snitch confirms this in practice: Wardlume itself never connects.

## What goes online: only the updater

Updates are the one exception, and they don't run inside Wardlume:
- The open-source [Sparkle](https://sparkle-project.org) updater's downloader runs in **its own sandbox**, with network access only.
- It fetches the update feed from `wardlume.github.io` and, when you install, the update from Wardlume's public GitHub releases.
- Every update is **signed** and checked before it's installed.
- **Nothing about you or your Mac is sent.**

Little Snitch shows Wardlume's built-in network policy, which explains each of these connections.

Manage it in **Settings → Advanced → Updates** (see [Update & uninstall](/docs/uninstall)).

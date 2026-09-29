// Shared FAQ copy (home page + support page). Keep in step with the README FAQ.
export const faq = [
  {
    q: 'Is my screen hidden while warded?',
    a: 'No, and that’s the point. The screen stays visible so anyone nearby can watch your agent work. Only <b>input</b> is locked. If you’d rather other monitors go dark, choose <b>Settings → Displays &amp; gestures → Other monitors → Black out</b>.',
  },
  {
    q: 'How is this different from the macOS lock screen?',
    a: 'The macOS lock screen hides your work behind the login window, and the display can go to sleep. Wardlume keeps everything <b>in full view</b> and your Mac awake, so you (and anyone nearby) can see the agent, build, or render carry on, while nobody can type into it.',
  },
  {
    q: 'What if I get stuck?',
    a: 'You always have a way out: <b>Touch ID / your unlock shortcut</b>, your <b>Apple Watch</b>, or <b>⌘⌥Esc → Force Quit Wardlume</b> (macOS reserves that shortcut, so no app can block it). You can also enable an emergency‑exit key. See the <a href="/safety">Safety guide</a>.',
  },
  {
    q: 'Does it work with Claude Code, Codex, Cursor, …?',
    a: 'Yes. Wardlume doesn’t care what’s running. It locks input for the whole Mac while every app keeps working on screen, so any agent, build, render, or download carries on.',
  },
  {
    q: 'Will my Mac fall asleep while I’m away?',
    a: 'No. While the ward is up Wardlume holds a standard power assertion (the same mechanism as <code>caffeinate</code>), so the display and system don’t idle‑sleep. Closing the lid still ends the ward, on purpose.',
  },
  {
    q: 'Does Wardlume collect any data?',
    a: 'No. The app makes no network requests, has no analytics and no accounts. Screen frames are drawn live to the glass and never saved or sent. See <a href="/privacy">Privacy</a>.',
  },
  {
    q: 'Apple Watch unlock isn’t working',
    a: 'Open <b>Settings → Lock &amp; unlock → Unlock with Apple Watch</b> and follow the setup steps. Your watch has to be signed in to the same Apple Account, have a passcode, be on your wrist and unlocked, and be enabled in <b>System Settings → Touch ID &amp; Password</b>. Then press <b>Send test to watch</b>.',
  },
  {
    q: 'Is it free?',
    a: 'Yes, for any <b>noncommercial</b> use (personal, study, hobby, nonprofit). Commercial use needs a license. See <a href="/pricing">Pricing</a> and <a href="/terms">Terms</a>.',
  },
  {
    q: 'How do I uninstall?',
    a: 'First turn off <b>Settings → Automation → Launch at login</b>. Then run <code>brew uninstall --cask wardlume</code>, or quit Wardlume and drag it from Applications to the Trash.',
  },
];

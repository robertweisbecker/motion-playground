# Troubleshooting Guide

## Terminal Opening in Bash Instead of Zsh

Your system shell is correctly set to zsh (`/bin/zsh`), but your terminal app may have its own shell preference that overrides the system default.

### Fix Terminal Shell Issue

**For VS Code / Cursor:**
1. Open Settings (Cmd+,)
2. Search for "terminal integrated shell"
3. Set `terminal.integrated.shell.osx` to `/bin/zsh` (or remove it to use system default)
4. Or add to your settings.json:
   ```json
   {
     "terminal.integrated.defaultProfile.osx": "zsh"
   }
   ```

**For iTerm2:**
1. Preferences → Profiles → General
2. Set "Command" to `/bin/zsh` (or leave as "Login shell" to use system default)

**For Terminal.app:**
1. Terminal → Preferences → Profiles → Shell
2. Set to "Default login shell" or explicitly `/bin/zsh`

**After changing:**
- Close ALL terminal windows
- Quit the terminal app completely
- Reopen terminal app - new windows should use zsh

### Verify Shell Change
```bash
echo $SHELL  # Should show /bin/zsh
```

## TypeScript Variant Updates Not Reflecting

If changes to `.tsx` files (especially variant definitions) aren't being detected:

1. **Default dev server uses Turbopack** (recommended):
   ```bash
   npm run dev
   ```
   Turbopack is Next.js 15's modern bundler with superior file watching. This is the default and recommended approach.

2. **If you need webpack instead:**
   ```bash
   npm run dev:webpack
   ```
   Only use this if you have specific webpack plugins or configurations that require it.

3. **Clear Next.js cache if issues persist:**
   ```bash
   rm -rf .next
   npm run dev
   ```

4. **For unreliable file systems (NFS, VMs, Docker volumes):**
   If you're on a network file system or virtualized environment where native file watching fails, you can add polling to `next.config.ts`:
   ```typescript
   webpack: (config, { dev }) => {
     if (dev) {
       config.watchOptions = {
         poll: 1000,
         aggregateTimeout: 300,
         ignored: /node_modules/,
       };
     }
     return config;
   },
   ```
   **Note:** This is only needed for edge cases. On macOS with native file systems, Turbopack's file watching should work without polling.

5. **Check file watcher limits (macOS):**
   ```bash
   sysctl kern.maxfiles
   ```
   If it's low (< 10000), you may need to increase it (requires admin).

6. **Ensure you're saving files** - some editors require explicit save (Cmd+S)

## Slow zsh Loading

If zsh is slow to start:

1. **Profile your shell:**
   ```bash
   zsh -xv 2>&1 | tee /tmp/zsh-profile.log
   ```
   Look for slow-loading items in the output.

2. **Check for heavy plugins:**
   - Oh My Zsh, Prezto, etc. can slow startup
   - Consider lazy-loading plugins

3. **Check version managers:**
   - nvm, rbenv, pyenv can slow startup
   - Consider lazy-loading them in `.zshrc`

4. **Minimal `.zshrc` example:**
   ```zsh
   # Only load what you need
   export PATH="$HOME/.local/bin:$PATH"
   
   # Lazy-load nvm if you use it
   nvm() {
     unfunction nvm
     export NVM_DIR="$HOME/.nvm"
     [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
     nvm "$@"
   }
   ```


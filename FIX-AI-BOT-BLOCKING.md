# Fix: AI Bots (ChatGPT / Claude) Blocked from finmark.ai

## What's happening
ChatGPT and Claude cannot access finmark.ai when browsing/fetching your site.
Your robots.txt is fine (allows everything). The blocking is from Netlify's side.

## Steps to check

### Step 1: Check Firewall Traffic Rules
1. Go to https://app.netlify.com
2. Click your site (Finmark)
3. Left sidebar → **Web security** → **Firewall Traffic Rules**
4. Check if any rules block AI bot user agents
5. If yes → delete those rules

### Step 2: Check Web Application Firewall (WAF)
1. Same sidebar → **Web security** → **Web Application Firewall**
2. Check if it's enabled and blocking bots
3. If yes → disable it or whitelist AI bots

### Step 3: Check if User Agent Blocker extension is installed
1. Left sidebar → **Extensions**
2. Look for "User Agent Blocker" — if it says "Enabled" or "Installed", click it and disable/uncheck AI bots
3. On your screenshot it shows as NOT installed, so this is probably not the issue

## If none of the above work

Netlify's free tier sometimes blocks AI crawlers at the CDN level — 
you can't toggle this from the dashboard. Two options:

### Option A: Don't worry about it
- Google indexing is NOT affected (Googlebot is different from ChatGPT/Claude bots)
- Real visitors are NOT affected
- SEO rankings are NOT affected
- It only means AI tools can't browse your live site — not a real business problem

### Option B: Add explicit headers in netlify.toml
Add this to your netlify.toml file to try allowing AI bots:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Robots-Tag = "all"
```

Then redeploy. This tells all bots (including AI) they're welcome.

## Does this affect Google ranking?
NO. Google uses Googlebot, not ChatGPT or Claude bots. 
Netlify does not block Googlebot. Your SEO is unaffected.

# FinMark.ai SEO Vault

This is an Obsidian vault containing the complete SEO plan for FinMark.ai.

## How to open

1. Install [Obsidian](https://obsidian.md)
2. Open Obsidian → "Open folder as vault"
3. Select this folder (`seo-vault`)
4. Start with [[00 - MOC/Map of Content]]

## What's inside

| Folder | Purpose |
|---|---|
| `00 - MOC/` | Map of Content — your home base. Start here. |
| `01 - Pillars/` | One note per pillar topic (8 total). Full content brief. |
| `02 - Clusters/` | One note per cluster page. Brief, target keyword, links. |
| `03 - Supporting Content/` | One note per supporting blog post. |
| `04 - Keywords/` | Master keyword reference. |
| `05 - Internal Linking/` | The linking matrix in vault form. |
| `06 - Canvas/` | Visual topic maps (Obsidian Canvas files). |
| `Templates/` | Reusable templates for adding new pages. |

## Recommended views

- **Graph view** (Cmd/Ctrl-G): see the topical authority graph. Pillars are central nodes, clusters orbit, blogs orbit clusters.
- **Canvas: Topic Map** (`06 - Canvas/Topic Map.canvas`): visual hierarchy of pillars → clusters → blogs.
- **Tag pane**: filter by `#pillar`, `#cluster`, `#supporting`, `#priority/p0` etc.

## YAML frontmatter convention

Every note has frontmatter with these fields:

```yaml
type: pillar | cluster | supporting | solution | keyword
pillar: <pillar slug>          # which pillar this belongs to
keyword: <primary keyword>      # the keyword this page targets
intent: commercial | informational | transactional | navigational
volume: VH | H | M | L          # estimated search volume
difficulty: high | med | low
priority: p0 | p1 | p2
status: idea | drafted | written | published
url: /full/url-path             # the planned URL
```

This lets you query the vault with the Dataview plugin (optional but recommended).

## Workflow

1. **Plan:** Read the MOC, explore pillars, see the canvas
2. **Brief:** Open a cluster note, fill in the brief sections
3. **Track:** Update the `status` frontmatter as content moves from idea → published
4. **Audit:** Use the linking matrix to verify every cluster links to its pillar

# WorksAi CanvasArch (`worksai-01`)

> Turn plain-English system specs and schemas into editable hand-drawn architecture diagrams.

**Category:** A. Web apps  
**License:** MIT (Derivative of [Excalidraw](https://github.com/excalidraw/excalidraw) @ `7ded689`)  
**Portfolio Page:** `https://devinai.uk/worksai/products/worksai-canvasarch/`

## Value Proposition & Scope
Replaces Miro's $8-$20/seat/month subscription with a local-first, MIT-licensed architecture whiteboard that parses natural-language system specs and Mermaid flows into structured canvas nodes, edges, and SVG exports.

### What Works Out-of-the-Box (Zero External Credentials Required)
Full spec-to-diagram parsing, grid auto-layout, SPOF topology analyzer, local multi-board persistence, and SVG/JSON export.

### What Requires User Configuration (`.env.example`)
Optional `OPENAI_API_KEY` or `GEMINI_API_KEY` for unstructured prose-to-spec expansion; optional `WS_RELAY_URL` for multi-user room sync.

## Measurable Acceptance Criteria
- AC-01: Parses natural-language or Mermaid flow specs (`A -> B -> C`) into positioned canvas nodes and directed edges with zero coordinate overlap.
- AC-02: Persists and reloads multi-board architecture workspaces deterministically via JSON/storage adapter.
- AC-03: Flags single-point-of-failure (SPOF) nodes with >=2 downstream dependencies and no redundancy.
- AC-04: Exports valid, self-contained `<svg>` markup with accessible `<title>` and `<desc>` tags and rejects empty/malformed specs with safe validation errors.

## Known Limitations
- Unstructured prose without arrow/component delimiters uses heuristic entity extraction unless an LLM API key is configured.
- Real-time multi-cursor collaboration requires deploying the optional WebSocket room relay.

## Quick Start & Verification
```bash
npm test
```

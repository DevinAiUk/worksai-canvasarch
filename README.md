# WorksAi CanvasArch (`worksai-canvasarch`)

> Turn plain-English system specs and schemas into editable hand-drawn architecture diagrams.

- **Live Subdomain Application:** [https://canvasarch.worksai.org](https://canvasarch.worksai.org)
- **WorksAI Hub Specification:** [https://worksai.org/apps/worksai-canvasarch](https://worksai.org/apps/worksai-canvasarch)
- **Category:** A. Web apps
- **License:** MIT (Derived from [Excalidraw](https://github.com/excalidraw/excalidraw) @ `7ded689`)

## Capability Matrix
- **What You Can Do:** Parse plain-English or Mermaid specs into positioned architecture nodes/edges, detect single-point-of-failure (SPOF) bottlenecks, render & export interactive SVG diagrams, and persist multi-board snapshots to Cloudflare R2.
- **Deterministic Domain Utilities:** parseArchitectureSpec (directed graph layout & fan-in/fan-out SPOF calculation) and renderArchitectureSvg (accessible SVG generator).
- **Genuine AI Model Features:** Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct) unstructured prose-to-topology expansion and architectural risk remediation advice when invoked with mode='ai_assisted'.
- **Persisted R2/Neon Features:** Saved architecture specs, generated SVG topologies, and SPOF audit snapshots persisted in Cloudflare R2 (workspaces/worksai-canvasarch/*) and Neon Postgres.
- **Known Limitations:** Real-time multi-cursor WebSocket collaboration requires an external Durable Object room relay; standalone mode uses R2 snapshot persistence.

## Verification & Local Testing
```bash
npm run lint
npm run typecheck
npm test
```

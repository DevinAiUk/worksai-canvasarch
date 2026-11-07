export const APP_DB_CONFIG = {
  schema: "worksai_hub",
  appSlug: "worksai-canvasarch",
  subdomain: "canvasarch.worksai.org",
  mcpEndpoint: "https://canvasarch.worksai.org/api/mcp",
  aiEndpoint: "https://canvasarch.worksai.org/api/ai/analyze",
  mcpTools: ["canvasarch.parse_topology", "canvasarch.detect_spof", "canvasarch.export_svg"]
} as const;

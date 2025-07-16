// server/middleware/x-frame.ts
export default defineEventHandler((event) => {
  event.node.res.setHeader("X-Frame-Options", "ALLOWALL");
});

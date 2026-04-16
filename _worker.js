export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return new Response(INDEX_HTML, {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }
    return new Response("Not Found", { status: 404 });
  }
};
const INDEX_HTML = `<!DOCTYPE html>...

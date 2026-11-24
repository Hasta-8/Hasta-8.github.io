const { chromium } = require("/media/debadri/sda5/Git Repos/productionRAG/frontend/node_modules/playwright-core");
const fs = require("fs"), path = require("path");
(async () => {
  const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  const p = await b.newPage();
  await p.setContent('<html><body></body></html>');
  await p.addScriptTag({ url: "https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.min.js" });
  await p.evaluate(() => mermaid.initialize({
    startOnLoad: false, htmlLabels: false, theme: "base", securityLevel: "strict",
    flowchart: { htmlLabels: false, curve: "basis", nodeSpacing: 28, rankSpacing: 38, padding: 14 },
    themeVariables: {
      fontFamily: "Arial, Helvetica, sans-serif", fontSize: "15px",
      primaryColor: "#eef3ff", primaryBorderColor: "#2f6feb", primaryTextColor: "#0b0f16",
      lineColor: "#6b7684", secondaryColor: "#f7f8fa", tertiaryColor: "#fbfcfd",
      clusterBkg: "#f7f8fa", clusterBorder: "#cdd3dd", edgeLabelBackground: "#ffffff",
    },
  }));
  for (const f of fs.readdirSync(__dirname).filter((f) => f.endsWith(".mmd"))) {
    const src = fs.readFileSync(path.join(__dirname, f), "utf8");
    const svg = await p.evaluate(async ([id, s]) => (await mermaid.render(id, s)).svg, [f.replace(/\W/g, ""), src]);
    fs.writeFileSync(path.join(__dirname, f.replace(".mmd", ".svg")), svg);
    console.log(f, svg.length);
  }
  // preview sheet
  const imgs = fs.readdirSync(__dirname).filter((f) => f.endsWith(".svg"));
  await p.setContent("<body style='margin:0;background:#fff'>" + imgs.map((f) => `<div style="border-bottom:1px solid #ccc;padding:8px"><img style="max-width:1400px" src="data:image/svg+xml;base64,${fs.readFileSync(path.join(__dirname, f)).toString("base64")}"></div>`).join("") + "</body>");
  await p.setViewportSize({ width: 1420, height: 800 });
  await p.screenshot({ path: path.join(__dirname, "sheet.png"), fullPage: true });
  await b.close();
})();

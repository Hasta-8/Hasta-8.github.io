// After `vite build`: give every app route its own index.html in dist/, so GitHub
// Pages answers /projects/shelfscan (and the rest) with 200 instead of the 404
// fallback. Search engines and link previews then see real pages. 404.html stays
// as the fallback for unknown paths.
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs'

const slugs = [...readFileSync('src/data/projects.ts', 'utf8').matchAll(/slug: '([^']+)'/g)].map((m) => m[1])
const routes = ['projects', 'experience', 'skills', 'about', 'contact', ...slugs.map((s) => `projects/${s}`)]

for (const route of routes) {
  mkdirSync(`dist/${route}`, { recursive: true })
  copyFileSync('dist/index.html', `dist/${route}/index.html`)
}
copyFileSync('dist/index.html', 'dist/404.html')
console.log(`route pages: ${routes.length} + 404.html`)

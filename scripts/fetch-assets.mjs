// Figma asset URLs expire after 7 days. Run `npm run assets` once, soon after unzipping.
import { writeFile } from "node:fs/promises";
const A = {
  "hero-doctor": "3bbc4006-c7de-4a1b-9d9a-75fa785c2157",
  "logo-white": "7e631f78-3286-4bcb-b8da-07d39ed915f9",
  "blog-1": "8274c199-c4d3-4550-b02e-7c32d002c247",
  "blog-2": "9a742e0c-0a58-4b34-8db9-3ec03868a572",
  "blog-3": "20b591b0-7c2b-4f16-a09f-b46e9010b0e5",
  "logo-full": "d02d02ac-7185-46bd-a210-c352525a555d",
  "team": "7dd5be8d-966b-49a6-a5d7-9db5a255a705",
  "podcast": "21e7353a-301e-4827-bccc-475cbdf8f568",
  "about": "7b9a9582-a6df-40de-a799-fe27c4795c75",
  "contact-bg": "c8809dc5-1afc-4db0-9b76-345e3020fdc9",
};
for (const [name, id] of Object.entries(A)) {
  const r = await fetch(`https://www.figma.com/api/mcp/asset/${id}.png`);
  if (!r.ok) { console.error("failed", name, r.status); continue; }
  await writeFile(`public/images/${name}.png`, Buffer.from(await r.arrayBuffer()));
  console.log("saved", name);
}

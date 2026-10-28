const $ = (s) => document.querySelector(s);
const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-");
document.title = PERSON.name + " — Vikipediya";
$("#title").textContent = PERSON.name;
$("#summary").innerHTML = PERSON.summary;
$("#date").textContent = new Date(document.lastModified).toLocaleDateString("uz-UZ");

$("#infobox").innerHTML =
  `<div class="ib-title">${PERSON.name}</div>` +
  (PERSON.photo ? `<img src="${PERSON.photo}" alt="${PERSON.name}">` : `<div class="noimg">Rasm yo'q</div>`) +
  `<div class="cap">${PERSON.photoCaption}</div><table>` +
  PERSON.infobox.map(([k, v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join("") + `</table>`;

const all = [...PERSON.sections,
  { title: "Manbalar", refs: PERSON.references },
  { title: "Havolalar", links: PERSON.links }];
$("#sections").innerHTML = all.map((s) => {
  let body = "";
  if (s.paras) body = s.paras.map((p) => `<p>${p}</p>`).join("");
  if (s.list) body = `<ul>${s.list.map((i) => `<li>${i}</li>`).join("")}</ul>`;
  if (s.refs) body = `<ol class="refs">${s.refs.map((r) => `<li>${r}</li>`).join("")}</ol>`;
  if (s.links) body = `<ul>${s.links.map(([t, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${t}</a></li>`).join("")}</ul>`;
  return `<section><h2 id="${slug(s.title)}">${s.title}</h2>${body}</section>`;
}).join("");
$("#toc ol").innerHTML = all.map((s) => `<li><a href="#${slug(s.title)}">${s.title}</a></li>`).join("");

$("#search").addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll("main p, main li, main td").forEach((el) => {
    el.classList.toggle("hit", q.length > 1 && el.textContent.toLowerCase().includes(q));
  });
  const first = document.querySelector(".hit");
  if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
});

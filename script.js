let idx = 0;
const slidesEl = document.getElementById("slides");
const count = document.querySelectorAll(".slide").length;
const dotsEl = document.getElementById("dots");
for (let i = 0; i < count; i++) {
  const d = document.createElement("span");
  if (i === 0) d.className = "active";
  d.onclick = () => goSlide(i);
  dotsEl.appendChild(d);
}
function goSlide(i) {
  idx = (i + count) % count;
  slidesEl.style.transform = `translateX(-${idx * 100}%)`;
  [...dotsEl.children].forEach((d, j) =>
    d.classList.toggle("active", j === idx),
  );
}
function moveSlide(dir) {
  goSlide(idx + dir);
}
setInterval(() => moveSlide(1), 5000);
function submitBooking(e) {
  e.preventDefault();
  document.getElementById("confirmMsg").style.display = "block";
  return false;
}
function doSearch(e) {
  e.preventDefault();
  const q = document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll(".pkg[data-tag]").forEach((p) => {
    const text = (
      p.querySelector("h3").textContent +
      " " +
      p.querySelector(".place").textContent
    ).toLowerCase();
    p.style.display = text.includes(q) ? "" : "none";
  });
  document.querySelector("#packages").scrollIntoView({ behavior: "smooth" });
  return false;
}
function filterPkg(tag, btn) {
  document
    .querySelectorAll(".filterbar button")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".pkg[data-tag]").forEach((p) => {
    p.style.display =
      tag === "all" || p.dataset.tag.includes(tag) ? "" : "none";
  });
}

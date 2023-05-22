function toggle() {
  const allTopBars = document.querySelectorAll(
    ".page-wrapper.document-page > :not(.main-wrapper)"
  );
  const quicklinks = document.querySelector("#sidebar-quicklinks");
  const toc_container = document.querySelector(".toc-container");
  const navFooter = document.querySelector("#nav-footer");

  //adding all DOMs to an array
  const arr = [quicklinks, toc_container, navFooter];
  allTopBars.forEach((topbar) => arr.push(topbar));

  arr.forEach((dom) => {
    dom.style.display = dom.style.display === "none" ? "block" : "none";
  });
}
toggle();

//Hiding topbars
const allTopBars = document.querySelectorAll(
  ".page-wrapper.document-page > :not(.main-wrapper)"
);
allTopBars.forEach((topbar) => (topbar.style["display"] = `none`));

//Hiding sidebars
const sidebars = document.querySelectorAll(".sidebar-container");
sidebars.forEach((side) => (side.style["display"] = `none`));

//Hiding footers
const navFooter = document.querySelector("#nav-footer");
navFooter.style["display"] = "none";

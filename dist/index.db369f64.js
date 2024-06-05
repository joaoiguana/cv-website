console.log("Hello world!");
function handleResize() {
    const currentPositionElements = document.querySelectorAll(".current-position");
    const locationElements = document.querySelectorAll(".location");
    if (window.innerWidth <= 600) {
        currentPositionElements.forEach((element)=>{
            element.style.display = "none";
        });
        locationElements.forEach((element)=>{
            element.style.visibility = "hidden";
            element.style.display = "block";
        });
    } else {
        currentPositionElements.forEach((element)=>{
            element.style.display = "block";
        });
        locationElements.forEach((element)=>{
            element.style.visibility = "visible";
            element.style.display = "block";
        });
    }
}
// Run on load
handleResize();
// Run on resize
window.addEventListener("resize", handleResize);

//# sourceMappingURL=index.db369f64.js.map

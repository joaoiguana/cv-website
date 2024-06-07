document.addEventListener("DOMContentLoaded", ()=>{
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
    // Smooth scroll to "Work" section
    const workLink = document.querySelector(".nav p:nth-child(1)"); // Assuming the first <p> in .nav is the "Work" link
    const workSection = document.getElementById("work");
    workLink.addEventListener("click", (event)=>{
        event.preventDefault(); // Prevent default link behavior
        workSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

//# sourceMappingURL=index.db369f64.js.map

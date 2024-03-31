// NavBar Toggler
function toggleNav() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth < 767) {
    if (document.getElementById("side-navBar").style.width === "200px") {
      document.getElementById("side-navBar").style.width = "0";
      document.getElementById("main-container").style.transform =
        "translateX(0)";
    } else {
      document.getElementById("side-navBar").style.width = "200px";
      document.getElementById("main-container").style.transform =
        "translateX(200px)";
      document.getElementById("main-container").style.transition = "0.5s";
    }
  } else {
    if (document.getElementById("side-navBar").style.width === "250px") {
      document.getElementById("side-navBar").style.width = "0";
      // document.getElementById("main-container").style.marginLeft = "0";
      document.getElementById("main-container").style.transform =
      "translateX(0px)";
    } else {
      document.getElementById("side-navBar").style.width = "250px";
      // document.getElementById("main-container").style.marginLeft = "250px";
      document.getElementById("main-container").style.transform =
      "translateX(250px)";
      document.getElementById("main-container").style.transition = "0.5s";
    }
  }
}

// drop down function
let dropdown = document.getElementsByClassName("dropdown");
let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

// Call the function when the window is resized
window.addEventListener("resize", applyCodeBasedOnScreenWidth);

// for hidden section of Modal
// to make it visible on click
function viewmore() {
  let hiddenElement = document.getElementById("hidden");
  if (hiddenElement.style.display === "block") {
    hiddenElement.style.display = "none";
  } else {
    hiddenElement.style.display = "block";
  }
}

function view1() {
  let individualSection = document.getElementById("individual-section");
  let businessSection = document.getElementById("business-section");

  if (individualSection.style.display === "block") {
    individualSection.style.display = "none";
  } else {
    individualSection.style.display = "flex";
    businessSection.style.display = "none";
  }
}

function view2() {
  let individualSection = document.getElementById("individual-section");
  let businessSection = document.getElementById("business-section");
  // for business

  if (businessSection.style.display === "block") {
    businessSection.style.display = "none";
  } else {
    businessSection.style.display = "flex";
    individualSection.style.display = "none";
  }
}

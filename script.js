// Define the function to filter projects based on category
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
  // Show the jumbotron container if any project is selected
  var projectDetails = document.getElementById();
  if (c !== "") {
    projectDetails.style.display = "block";
  } else {
    projectDetails.style.display = "none";
  }
}

// Function to add a class to an element
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Function to remove a class from an element
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add event listeners to project elements to show respective jumbotrons
var projectElements = document.querySelectorAll('.filterDiv');
projectElements.forEach(function(element) {
  element.addEventListener('click', function() {
    var projectId = this.id; // Get the ID of the clicked project element
    showJumbotron(projectId); // Call a function to show the corresponding jumbotron
  });
});

// Function to show the corresponding jumbotron for a project
function showJumbotron(projectId) {
  // Hide all jumbotrons first
  var jumbotrons = document.querySelectorAll('.project-details');
  jumbotrons.forEach(function(jumbotron) {
    jumbotron.style.display = 'none';
  });

  // Show the jumbotron corresponding to the clicked project
  var selectedJumbotron = document.getElementById(projectId + '-details');
  if (selectedJumbotron) {
    selectedJumbotron.style.display = 'block';
  }
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

document.addEventListener("DOMContentLoaded", function() {
  // Show all projects by default
  filterSelection('all');
});



function toggleDescription(descriptionId) {
    const description = document.getElementById(descriptionId);
  
    if (description.style.display === "none" || description.style.display === "") {
      // Description is currently hidden, so we animate the opening
      description.style.opacity = "0";
      description.style.display = "block";
  
      // Start the fade-in animation
      setTimeout(function () {
        description.style.transition = "opacity 0.3s";
        description.style.opacity = "1";
      }, 10);
    } else {
      // Description is currently visible, so we animate the closing
      description.style.transition = "opacity 0.3s";
      description.style.opacity = "0";
  
      // After the fade-out animation, hide the description
      setTimeout(function () {
        description.style.display = "none";
      }, 300);
    }
  }
  
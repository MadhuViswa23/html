document.addEventListener('DOMContentLoaded', function() {
    // ...
  
    // Find the Design Tools Section Name element by its class
    const designToolsHeading = document.querySelector('.des');
  
    // Find the input and button elements in the Design Tools form
    const newDesignToolsNameInput = document.getElementById('newDesignToolsName');
    const updateDesignToolsNameBtn = document.getElementById('updateDesignToolsNameBtn');
  
    // Add event listener to update the Design Tools Section Name when the button is clicked
    updateDesignToolsNameBtn.addEventListener('click', function() {
      const newDesignToolsName = newDesignToolsNameInput.value;
      designToolsHeading.textContent = newDesignToolsName;
      newDesignToolsNameInput.value = ''; // Clear the input field
    });
  
    // ...
  });
  
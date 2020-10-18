document.addEventListener('DOMNodeInserted', d => {
  addLogoToInputArea();
});

// Adding logo to input field
var addLogoToInputArea = () => {
  //Getting TextBox
  var inputArea = document.querySelector('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr');

  //Checking if TextBox has been selected
  if (inputArea != null) {
    
    //Checking if logo attribute is set
    if (inputArea.getAttribute('addedToText') == null) {
      
      //Set the logo attribute
      inputArea.setAttribute('addedToText', 'true');

      // Adding logo to textArea
      var logo = createLogoInput();

      // Adding click event listener to logo
      logo.addEventListener('click', logoClickHandlingInput);

      inputArea.prepend(logo);
    }
  }
}

// Event Handling for logo Click
var logoClickHandlingInput = () => {

  // Need to add Jay's code for inputForm

}

// Create logo element in DOM
var createLogoInput = () => {
  var image = document.createElement('img')
  image.src=chrome.extension.getURL('helptag.svg');
  image.style.zIndex = "100";
  image.setAttribute("info-bar", "false");
  image.style.position = "absolute";
  image.style.float = "right"; 
  image.style.right = "0";
  image.setAttribute("info-bar", "false");

  return image;
}
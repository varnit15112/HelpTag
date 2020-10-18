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
var logoClickHandlingInput = (event) => {

    if (event.target.getAttribute('click-state') == 'unclicked') {

        var div = document.createElement('div');
        div.style.width = "370px";
        div.style.position = "absolute";
        div.style.marginLeft = "45px";
        div.style.marginTop = "-70px";
        div.style.left = "100%";
        div.setAttribute('class', 'infoBar');

        var d = document.createElement('div');
        d.style.width = "100%";
        d.style.minHeight = "400px";


        var d1 = document.createElement('div');
        d1.setAttribute('class',"new-frame");

        var d2 = document.createElement('div');
        d2.setAttribute('class',"tool-tip");

        var button = document.createElement('button');
        button.setAttribute('class',"cancel button-no-style");
        button.addEventListener('click',()=>{
            // fadeOutEffect(d1);
            event.target.setAttribute('click-state', 'unclicked');
            document.querySelector('.infoBar').remove();
        });

        var img = document.createElement('img');
        img.src = chrome.extension.getURL('cross.svg');


        var sourceString = 'http://localhost:8000/InputTemplate/home.html';
        var iframe = document.createElement('iframe');
        iframe.src = sourceString;

        button.appendChild(img);
        d1.appendChild(d2);
        d1.appendChild(iframe);
        d1.appendChild(button);

        d.appendChild(d1);
        div.appendChild(d);

        event.target.parentNode.appendChild(div);
        event.target.setAttribute('click-state', 'clicked');


    } else if (event.target.getAttribute('click-state') == 'clicked') {
        fadeOut();
        event.target.setAttribute('click-state', 'unclicked');
        document.querySelector('.infoBar').remove();
    }
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
  image.setAttribute("click-state", "unclicked");

  return image;
}

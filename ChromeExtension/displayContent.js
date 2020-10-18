var tagsToSee = [];

// Updating the post tags every 1000 ms
window.setInterval(function() {
    getAllHashTags();
}, 1000);

var addLogoToNewPosts = () => {
    var allPosts = getAllPosts();

    // Iterating over all posts
    for (var post of allPosts) {
        postHasTags(post, tagsToSee);
        addLogoToPost(post);
    }
}

// Fetch all Posts
var getAllPosts = () => {
    return document.querySelectorAll('.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1ny4l3l.r-1udh08x.r-1yt7n81.r-ry3cjt');
}

// Fetch all Posts with relevant Tags
var postHasTags = (post, tagsToSee) => {
    var tags = post.querySelectorAll('.css-4rbku5.css-18t94o4.css-901oao.css-16my406.r-1n1174f.r-1loqt21.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0');
    for (var tag of tags) {
        var content = tag.innerText;
        if (tagsToSee.find(function (d) {
                return d.toLowerCase() == content.toLowerCase();
            })) {
            post.setAttribute('relevant-tag', content);
        }
    }
}

// Adding Logo to new Posts
var addLogoToPost = (post) => {
    if (post.getAttribute('relevant-tag') != null && post.getAttribute('added-logo') == null) {
        post.setAttribute('added-logo', 'added');
        var addLogoDiv = post.querySelector('.css-1dbjc4n.r-16y2uox.r-1wbh5a2.r-1ny4l3l.r-1udh08x.r-1yt7n81.r-ry3cjt .css-1dbjc4n.r-18u37iz.r-1h0z5md.r-1joea0r');

        removeOverflow(post);

        var logo = createLogoDisplay();
        logo.addEventListener('click', logoClickHandlingDisplay);
        logo.setAttribute('click-state', 'unclicked');
        addLogoDiv.prepend(logo);
    }
}

// Create logo element in DOM
var createLogoDisplay = () => {
    var image = document.createElement('img')
    image.src = chrome.extension.getURL('helptag.svg');
    image.style.marginRight = "5px";
    image.setAttribute("info-bar", "false");

    return image;
}

function fadeOutEffect(fadeTarget) {
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.25;
        } else {
            clearInterval(fadeEffect);
        }
    }, 100);
}

function fadeOut(){
    var cancelButton = document.getElementsByClassName("cancel")[0];
    // console.log(cancelButton);
    fadeOutEffect(cancelButton.parentNode);
}

// Event Handling for Click
var logoClickHandlingDisplay = event => {
    var tagsInPost = event.path[12].querySelectorAll('.css-4rbku5.css-18t94o4.css-901oao.css-16my406.r-1n1174f.r-1loqt21.r-1qd0xha.r-ad9z0x.r-bcqeeo.r-qvutc0');
    var tagsToShow = event.path[8].getAttribute('relevant-tag').split(' ');

    if (event.target.getAttribute('click-state') == 'unclicked') {

        var div = document.createElement('div');
        div.style.width = "370px";
        div.style.position = "absolute";
        div.style.marginLeft = "75px";
        div.style.marginTop = "-45px";
        div.setAttribute('class', 'infoBar')

        var d = document.createElement('div');
        d.style.width = "100%";
        d.style.minHeight = "400px";

        // console.log(tagsToShow);
        var hashString = "";

        if(tagsToShow.length==0){
            d.innerHTML = `<iframe src="http://localhost:8000/DisplayTemplate/home.html"></iframe>`;
            div.appendChild(d);
        }else{

            for(var i in tagsToShow){
                hashString+=tagsToShow[i].toLowerCase();
            }

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

            var sourceString = 'http://localhost:8000/DisplayTemplate/home.html?tags=' + hashString;
            var iframe = document.createElement('iframe');
            iframe.src = sourceString;


            button.appendChild(img);
            d1.appendChild(d2);
            d1.appendChild(iframe);
            d1.appendChild(button);

            d.appendChild(d1);
            div.appendChild(d);
        }

        event.target.parentNode.appendChild(div);
        event.target.setAttribute('click-state', 'clicked');


        for (var tag of tagsInPost) {
            if (tagsToShow.find(function(d) {
                return d.toLowerCase() == tag.innerText.toLowerCase();
            })) {
                tag.style.color = "#FF4747";
                tag.style.backgroundColor = "#FF47471F";
                tag.style.borderRadius = "8px";
                tag.style.padding = "2px";
            }
        }

    } else if (event.target.getAttribute('click-state') == 'clicked') {
        fadeOut();
        event.target.setAttribute('click-state', 'unclicked');
        document.querySelector('.infoBar').remove();

        for (var tag of tagsInPost) {
            tag.style.color = "#1b95e0";
            tag.style.backgroundColor = "#fff";
            tag.style.padding = "none";
        }
    }

}

// Overwriting overflow
var removeOverflow = post => {
    post.style.overflow = "visible";
}

Firebase.enableLogging(true);
var firebaseReadRef= new Firebase("https://ohanahacks-65bae.firebaseio.com");

// console.log("Running Change JS");

//console.log(getAllHashTags());
function getAllHashTags(){
    var allHashTags = [];
    firebaseReadRef.once('value',function(snapshot) {
        snapshot.forEach((child) => {
            var allHashData = child.val();
            var singleHash = allHashData['hash'];
            allHashTags.push(singleHash);
        });
    });
}


// pushData("#SaveLives", "Save Lives Donation", "https://www.blacklivesmatteratl.org/", "donation");
function pushData(hashTag, title, url, type){
    firebaseReadRef.once('value',function(snapshot) {
        var found = 0;
        snapshot.forEach((child) => {
            var randomHashValue = child.name();
            var allHashData = child.val();
            var singleHash = allHashData['hash'];
            if(hashTag == singleHash && found == 0){
                var fr= new Firebase("https://ohanahacks-65bae.firebaseio.com/" + randomHashValue + "/links" );
                fr.push({title: title, type: type, url: url});
                found=1;
            }
        });
        if (found==0){
            console.log("not found");
            var fr= new Firebase("https://ohanahacks-65bae.firebaseio.com/");
            fr.push({hash: hashTag});
            pushData(hashTag, title, url, type);
        }else{
            console.log("found");
        }
    });
}






// writeFirebase("Title", ["#blm", "#BlackLivesMatter", "#blam"], "donation", "https://www.google.com/");
function writeFirebase(title, hashtags, type, link){

    console.debug("red");

    firebaseRef.once('value',function(snapshot) {

        console.debug(snapshot);

        snapshot.forEach((child) => {

            var allHashData = child.val();
            console.log(allHashData);


            var singleHash = allHashData['hash'];
            console.log(singleHash);

            var allDonateLink = [];
            var allVolunteerLinks = [];
            var allPetitionLinks = [];
            var allEventLinks = [];
            var allLearnMoreLink = [];

            allLinks = allHashData['links'];

            for (var prop in allLinks) {
                var singleLink = allLinks[prop];
                console.log(singleLink['title']);
                console.log(singleLink['url']);
                console.log(singleLink['type']);

                if(type=="donate"){
                    allDonateLink.push({})
                }

            }




            // allLinks.forEach((singleLink) => {
            //     console.log(singleLink);
            // });


        });

        // snapshot.forEach(function(childSnapshot) {
        //     var uniqueKey = childSnapshot.key;
        //     var childData = childSnapshot.val();
        //
        //     forEach((hashtags, i) => {
        //         console.log(hashtags);
        //     });
        //
        //
        //
        //     // console.log(childData.);
        //
        // });


    });


}




// fireWrite();

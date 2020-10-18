Firebase.enableLogging(true);
var firebaseReadRef= new Firebase("https://ohanahacks-65bae.firebaseio.com");

console.log("Running Change JS");

function getAllHashTags(){
    tagsToSee =  new Array();
    firebaseReadRef.once('value',function(snapshot) {
        snapshot.forEach((child) => {
            var allHashData = child.val();
            var singleHash = allHashData['hash'];
            tagsToSee.push(singleHash);
        });
        addLogoToNewPosts();
    });
}

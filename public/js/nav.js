<script>
$(document).ready(function() {

    function goBootStrap(){
      window.open('http://bootstrapk.com/', '_blank');
    }
    function goNosql(){
      window.open('https://aws.amazon.com/ko/nosql/', '_blank');
    }
    function goJqeury(){
      window.open('https://jquery.com/', '_blank');
    }
    function god3(){
      window.open('https://d3js.org/', '_blank');
    }
    function goFirebase(){
      window.open('https://firebase.google.com/?hl=ko', '_blank');
    }
    function goFood(){
      window.open('http://food-63973.firebaseapp.com/', '_blank');
    }
    function goFoodGit(){
      window.open('https://github.com/KIMSG/food', '_blank');
    }
    function goFacebook(){
      window.open('http://www.facebook.com/kimseurgi ', '_blank');
    }

    // var openInbox = document.getElementById("myBtn");
    // openInbox.click();

    function w3_open() {
        document.getElementById("mySidenav").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    }
    function w3_close() {
        document.getElementById("mySidenav").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    }

    function myFunc(id) {
        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
            x.previousElementSibling.className += " w3-red";
        } else {
            x.className = x.className.replace(" w3-show", "");
            x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" w3-red", "");
        }
    }

});
</script>

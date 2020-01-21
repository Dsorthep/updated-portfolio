// CODE FOR MODALS ON PORTFOLIO PAGE


// DOGGIFY MODAL
var modal1 = document.getElementById("myModal-1");
var img1 = document.getElementById("doggify");
var modalImg1 = document.getElementById("m-img-1");
img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = this.src;
  }
  var button1 = document.getElementById("button-1");
  button1.onclick = function() { 
    modal1.style.display = "none";
  }

// DETSY MODAL
var modal2 = document.getElementById("myModal-2");
var img2 = document.getElementById("detsy");
var modalImg2 = document.getElementById("img-2");
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
  }
  var button2 = document.getElementById("button-2");
  button2.onclick = function() { 
    modal2.style.display = "none";
  }

// TEAM PROFILE GENERATOR MODAL
var modal3 = document.getElementById("myModal-3");
var img3 = document.getElementById("team-generator");
var modalImg3 = document.getElementById("img-3");
img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
  }
  var button3 = document.getElementById("button-3");
  button3.onclick = function() { 
    modal3.style.display = "none";
  }

// DEVELOPER PROFILE GENERATOR MODAL
var modal4 = document.getElementById("myModal-4");
var img4 = document.getElementById("developer");
var modalImg4 = document.getElementById("img-4");
img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
  }
  var button4 = document.getElementById("button-4");
  button4.onclick = function() { 
    modal4.style.display = "none";
  }


// Get the <span> element that closes the modal


// When the user clicks on <span> (x), close the modal

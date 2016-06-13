//business logic
function Destination(location, landmarks, notes){
  this.locationPlace = location;
  this.landmarksPlace = landmarks;
  this.notesPlace = notes;
}

// Destination.prototype.fullPlace = function(){
//   return "place name: " + this.locationPlace + ", landmarks: " + this.landmarksPlace + ", notes: " + this.notesPlace;
Destination.prototype.fullPlace = function () {
    return this.locationPlace + " " + this.landmarksPlace + " " + this.notesPlace;
}

//user interface logic
$(document).ready(function(){
  $("form#blanks").submit(function(event){
    event.preventDefault();
// debugger;
    var locationInput = $("input#new-location").val();
    var landmarkInput = $("input#new-landmarks").val();
    var notesInput = $("input#new-notes").val();

    var newDestination = new Destination (locationInput, landmarkInput, notesInput);

    $("ul#destinations").append("<li><span class='location'>" + locationInput + "</span></li>");

    $(".location").last().click(function(){
      $("#show-destination-object").show();
      $("#show-destination-object h2").text(newDestination.locationPlace);

      $(".landmarks").text(newDestination.landmarksPlace);
      $(".notes").text(newDestination.notesPlace)
    })


    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-notes").val("");

  });
});

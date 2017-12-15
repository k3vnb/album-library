function Album(bandname, title, year, art) {
  this.inputtedName = bandname;
  this.inputtedTitle = title;
  this.inputtedYear = year;
  this.inputtedURL = art;
}
Album.prototype.albumDetails = function() {
  var thisAlbum = [this.inputtedName, this.inputtedTitle, this.inputtedYear, this.inputtedURL];
  return thisAlbum;
}
var coloringBook = new Album("Chance the Rapper", "Coloring Book", "2016", "http://chanceraps.com/shop/coloring-book-poster")

function resetFields() {
    $("input#band-name").val("");
    $("input#title").val("");
    $("input#year").val("");
    $("input#art").val("");
}

$(document).ready(function() {
  $("button#submit").click(function() {
    event.preventDefault();
    // alert("hello");
    var inputtedName = $("input#band-name").val();
    var inputtedTitle = $("input#title").val();
    var inputtedYear = $("input#year").val();
    var inputtedURL = $("input#art").val();
    // $("#album-info").append(
    //   "<div>" + inputtedName + inputtedTitle + inputtedYear + "<img src=" + inputtedURL + ">" + "</div>" + coloringBook);
    var yourAlbum = new Album("<div class='card'>"  + "<img class='show' src=" + inputtedURL + ">  <ul> <li>" + inputtedName  + "</li> <li>" + inputtedTitle  + "</li> <li>" + inputtedYear  + " </li> <li> <i class='fa fa-star 1-star' aria-hidden='true'></i>  <i class='fa fa-star 1-star 2-star' aria-hidden='true'></i>  <i class='fa fa-star 1-star 2-star 3-star' aria-hidden='true'></i>  <i class='fa fa-star 1-star 2-star 3-star 4-star' aria-hidden='true'></i>  <i class='fa fa-star 1-star 2-star 3-star 4-star 5-star' aria-hidden='true'></i>  </li> </ul></div>");
    $("#gallery").append(yourAlbum.albumDetails());
      resetFields();
  });
  // $("i").click(function() {
  //   $("i").addClass(".gold");
  // });

});

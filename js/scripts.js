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
    $("#album-info").append(
      "<div>" + inputtedName + inputtedTitle + inputtedYear + "<img src=" + inputtedURL + ">" + "</div>");
      resetFields();

  });
});

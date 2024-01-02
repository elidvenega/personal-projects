var g = G$("John", "Doe");
g.greet().setLang("es").greet(true);
console.log(g);

$("#login").click(function () {
  var loginGrtr = G$("John", "Doe");
  var mark = G$("Mark", "John");

  $("#logindiv").hide();

  // loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
  mark.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();
});

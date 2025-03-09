$("#field1").on("input", () => {
  $("#field2").val(md5($("#field1").val()));
});

$("#copy2").on("click", () => {
  confetti();
  navigator.clipboard.writeText($("#field2").val());
});

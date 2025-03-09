$("#field1").on("input", () => {
  if (document.activeElement === $("#field1")[0]) {
    $("#field2").val(btoa($("#field1").val()));
  }
});

$("#copy1").on("click", () => {
  confetti();
  navigator.clipboard.writeText($("#field1").val());
});

$("#field2").on("input", () => {
  if (document.activeElement === $("#field2")[0]) {
    $("#field1").val(atob($("#field2").val()));
  }
});

$("#copy2").on("click", () => {
  confetti();
  navigator.clipboard.writeText($("#field2").val());
});
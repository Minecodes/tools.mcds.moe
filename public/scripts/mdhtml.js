$("#markdown").on("input", () => {
  $("#html").removeAttr("data-highlighted");
  $("#html").text(marked.parse($("#markdown").val()));
  hljs.highlightAll({
    languages: ["html"],
    cssSelector: "#html",
  });
});

$("#copy").on("click", () => {
  confetti();
  navigator.clipboard.writeText($("#html").text());
})

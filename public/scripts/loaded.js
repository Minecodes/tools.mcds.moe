$(".loaded#element")
  .removeClass("border-red-500")
  .removeClass("bg-red-200")
  .addClass("border-green-500")
  .addClass("bg-green-200")
  .addClass("border-green-500");
$(".loaded#dot")
  .removeClass("bg-red-500")
  .addClass("bg-green-500");
$(".loaded#text").text("Loaded");

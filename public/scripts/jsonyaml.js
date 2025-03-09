$("#field1").on("input", () => {
  if (document.activeElement === $("#field1")[0]) {
    if ($("#field1").val() === "") return $("#field2").val("");
    try {
      let json = JSON.parse($("#field1").val());
      let yaml = YAML.stringify(json);
      $("#field2").val(yaml);
    } catch (e) {
      $("#field2").val($("#field1").val());
    }
  }
});

$("#copy1").on("click", () => {
  confetti();
  navigator.clipboard.writeText($("#field1").val());
});

$("#field2").on("input", () => {
  if (document.activeElement === $("#field2")[0]) {
    if ($("#field2").val() === "") return $("#field1").val("");
    try {
      let yaml = YAML.parse($("#field2").val());
      let json = JSON.stringify(yaml);
      $("#field1").val(json);
    } catch (error) {
      $("#field1").val($("#field2").val());
    }
    //$("#field1").val(JSON.stringify(YAML.parse($("#field2").val())));
  }
});

$("#copy2").on("click", () => {
  confetti();
  navigator.clipboard.writeText($("#field2").val());
});
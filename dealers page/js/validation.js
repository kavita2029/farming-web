function text(t) {
  (t.willValidate = !1),
    t.setAttribute("novalidate", "novalidate"),
    (t.value = t.value.replace(/[0-9]/g, ""));
  var e = t.getAttribute("invalid-text");
  let l = document.getElementById(e);
  (t.value.length = "" == t.value || null == t.value)
    ? ((l.style.display = "flex"),
      t.setCustomValidity(l.outerText),
      t.reportValidity(),
      (ready_class = t.getAttribute("class")),
      t.setAttribute("class", ready_class + " error-input"),
      console.log(t),
      console.log(l))
    : (t.classList.remove("error-input"), (l.style.display = "none"));
}
function numbers(t) {
  (t.willValidate = !1),
    t.setAttribute("novalidate", "novalidate"),
    (t.value = t.value.replace(/[^0-9]/g, ""));
  var e = t.getAttribute("invalid-text");
  let l = document.getElementById(e);
  (t.value.length = "" == t.value || null == t.value)
    ? ((l.style.display = "flex"),
      t.setCustomValidity(l.outerText),
      t.reportValidity(),
      (ready_class = t.getAttribute("class")),
      t.setAttribute("class", ready_class + " error-input"))
    : (t.classList.remove("error-input"), (l.style.display = "none"));
}
function tel(t) {
  (t.willValidate = !1), t.setAttribute("novalidate", "novalidate");
  var e = t.getAttribute("invalid-text");
  let l = document.getElementById(e);
  /^[6-9]\d{9}$/gi.test(t.value) &&
  0 != t.value.length &&
  "" != t.value &&
  null != t.value
    ? (t.classList.remove("error-input"), (l.style.display = "none"))
    : ((l.style.display = "flex"),
      t.setCustomValidity(l.outerText),
      t.reportValidity(),
      (ready_class = t.getAttribute("class")),
      t.setAttribute("class", ready_class + " error-input"));
}
function emails(t) {
  (t.willValidate = !1), t.setAttribute("novalidate", "novalidate");
  var e = t.getAttribute("invalid-text");
  let l = document.getElementById(e);
  t.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/)
    ? (t.classList.remove("error-input"), (l.style.display = "none"))
    : (console.log("Working"),
      (l.style.display = "flex"),
      t.setCustomValidity(l.outerText),
      t.reportValidity(),
      (ready_class = t.getAttribute("class")),
      t.setAttribute("class", ready_class + " error-input"));
}
function checkPwd(t) {
  return t.length < 6
    ? "too_short"
    : t.length > 50
    ? "too_long"
    : -1 == t.search(/\d/)
    ? "no_num"
    : -1 == t.search(/[a-zA-Z]/)
    ? "no_letter"
    : -1 == t.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) || "bad_char";
}
function pswds(t) {
  (t.willValidate = !1), t.setAttribute("novalidate", "novalidate");
  var e = t.getAttribute("invalid-text");
  let l = document.getElementById(e);
  (check = checkPwd(t.value)),
    1 != check
      ? (console.log("Working"),
        (l.style.display = "flex"),
        t.setCustomValidity(l.outerText),
        t.reportValidity(),
        (ready_class = t.getAttribute("class")),
        t.setAttribute("class", ready_class + " error-input"))
      : (t.classList.remove("error-input"), (l.style.display = "none"));
}
document.getElementById("submit").addEventListener("submit", function () {
  const t = document.getElementById("submit");
  (attri = document.getAttribute("invalid-text")), attri && t.reportValidity();
});

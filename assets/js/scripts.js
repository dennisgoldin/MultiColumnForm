var myForm = document.querySelector(".form");
var myFormElements = myForm.elements;
// console.log(myForm);
// console.log(myFormElements);

myForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(formData(myFormElements));
  myForm.reset();
});

function formData(frm) {
  var str = format("Type")
          + format("Key")
          + format("Value") + "\n"
          + "-------------------------------------------\n";
  // below I use frm.length - 1 because I don't want data for key 'submit' in
  // output which is the last item in this collection
  for (var i = 0; i < frm.length - 1; i++) {
    str = str + format(frm[i].type)
              + format(frm[i].name)
              + format(frm[i].value) + "\n";
  }
  return str;
}

function format (str) {
  var max = 15 - str.length;
  for (var i = 0; i < max; i++) {
    str = str + " ";
  }
  return str;
}

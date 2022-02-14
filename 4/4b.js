var input = prompt("Enter number or string:");
function isVowel(c) {
  const st = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  if (st.has(c)) {
    return true;
  }
  return false;
}
if (input.match(/^[a-zA-Z]+$/)) {
  var found = false;
  for (var i = 0; i < input.length; i++) {
    if (isVowel(input.charAt(i))) {
      alert(`Vowel found at position: ${i + 1}`);
      found = true;
      break;
    }
  }
  if (!found) {
    alert("No vowel found");
  }
} else if (!isNaN(input)) {
  var n = 0;
  while (input > 0) {
    var r = input % 10;
    n = n * 10 + r;
    input = parseInt(input / 10);
  }
  alert(`Reversed Number: ${n}`);
} else {
  alert("Not a number or string!");
}

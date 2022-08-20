function classActive(i) {
  var active = document.getElementsByTagName('a');
  for (let a = 0; a < 5; a++) active[a].classList.remove('active');

  active[i].classList.add('active');
}

function handleTextUp() {
  var text = document.getElementById('text');
  text.value = String(text.value).toUpperCase();

  classActive(0);
}

function handleTextLower() {
  var text = document.getElementById('text');
  text.value = String(text.value).toLowerCase();

  classActive(1);
}

function handleTextCamelCase() {
  var text = document.getElementById('text');
  var s = String(text.value).toLowerCase();
  var n = s.length;
  var str = s[0].toUpperCase();
  for (var i = 1; i < n; i++) {
    if (s[i] == ' ') {
      str += ' ' + s[i + 1].toUpperCase();
      i++;
    } else {
      str += s[i];
    }
  }

  text.value = str;
  classActive(3);
}

function handleTextNorm() {
  var text = document.getElementById('text');
  var s = String(text.value).toLowerCase();
  var n = s.length;
  var str = s[0].toUpperCase();
  for (var i = 1; i < n; i++) {
    if (s[i] == '.' && i < n - 1) {
      str += '.';
      if (s[i + 1] == ' ') i += 1;
      str += ' ' + s[i + 1].toUpperCase();
      i++;
    } else {
      str += s[i];
    }
  }

  text.value = str;
  classActive(2);
}

function handleTextNeg() {
  var text = document.getElementById('text');
  var s = text.value;
  var n = s.length;
  var str = '';
  for (var i = n - 1; i >= 0; i--) str += s[i];

  text.value = str;
  classActive(4);
}

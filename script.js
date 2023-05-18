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
    if ('.!?;'.includes(s[i]) && i < n - 1) {
      str += s[i];
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

function toggleInputs() {
  var inputsDiv = document.getElementById('inputsDiv');
  var buttonToggle = document.getElementById('buttonToggle');

  var inputsVisible = inputsDiv.style.display === 'block';

  inputsDiv.style.display = inputsVisible ? 'none' : 'block';

  buttonToggle.textContent = inputsVisible
    ? 'Substituir palavra'
    : 'Ocultar Inputs';
}

function substituirPalavra() {
  var palavraAntiga = document.getElementById('palavraAntiga').value;
  var palavraNova = document.getElementById('palavraNova').value;
  var text = document.getElementById('text');
  var s = text.value;

  var newText = s.replace(new RegExp(palavraAntiga, 'gi'), palavraNova);
  text.value = newText;
}

function copyToClipboard() {
  const buttonCopy = document.getElementById('btn-copiar');
  const textoElement = document.getElementById('text');
  const texto = textoElement.value;

  navigator.clipboard
    .writeText(texto)
    .then(() => {
      buttonCopy.textContent = 'Copiado!';
    })
    .catch(error => {
      console.error('Erro ao copiar o texto:', error);
    });

  setTimeout(function () {
    buttonCopy.innerText = 'Copiar';
  }, 2000);
}

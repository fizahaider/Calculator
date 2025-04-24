function addToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculate() {
  let input = document.getElementById('display').value;
  input = input.replace(/\^/g, '**');

  let result;
  try {
    result = eval(input);
  } catch {
    result = 'Error';
  }
  document.getElementById('display').value = result;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function power() {
  document.getElementById('display').value += '^';
}

function square() {
  let current = document.getElementById('display').value;
  if (current) {
    try {
      let result = eval(current + '**2');
      document.getElementById('display').value = result;
    } catch {
      document.getElementById('display').value = 'Error';
    }
  }
}

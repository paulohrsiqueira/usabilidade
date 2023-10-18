// script.js

// Selecione todas as células de "Nota Total"
const notaTotalCells = document.querySelectorAll('.notaTotal');

// Inicialize a soma das notas e o contador
let somaNotas = 0;
let contador = 0;

// Calcule a média das notas
notaTotalCells.forEach((cell) => {
  const nota = parseFloat(cell.textContent);
  if (!isNaN(nota)) {
    somaNotas += nota;
    contador++;
  }
});

// Calcule a média
const mediaTurma = somaNotas / contador;

// Exiba a média da turma
const mediaTurmaElement = document.getElementById('mediaTurma');
mediaTurmaElement.textContent = mediaTurma.toFixed(2); // Exibe com duas casas decimais

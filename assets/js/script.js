const fs = require('fs');
const path = require('path');

const editor = document.getElementById('editor');
const saveButton = document.getElementById('save');
const loadButton = document.getElementById('load');
const fileInput = document.getElementById('file-input');
const  lineInfo = document.getElementById('line');
const columnInfo = document.getElementById('column');

editor.addEventListener('keyup', () => {
    const cursorPosition = editor.selectionStart;
    const lines = editor.value.substr(0, cursorPosition).split('\n');
    lineInfo.textContent = lines.length;
    columnInfo.textContent = lines[lines.length - 1].length + 1;
});

saveButton.addEventListener('click', () => {
    const content = editor.value;
    const filePath = path.join(__dirname, 'output.txt');
    fs.writeFileSync(filePath, content, 'utf8');
    alert(`Salvo: ${filePath}`);
});

loadButton.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        editor.value = e.target.result;
        addEventListener;
        alert('carregado com sucesso!')
    };
    reader.readAsText(file);
});



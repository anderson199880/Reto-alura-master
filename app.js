const input = document.getElementById('input');
const select = document.getElementById('select');
const button = document.getElementById('button');
const output = document.getElementById('output');
const copyButton = document.getElementById('copy-button');

button.addEventListener('click', () => {
  const action = select.value;
  const text = input.value;
  
  if (action === 'encrypt') {
    output.value = encrypt(text);
  } else {
    output.value = decrypt(text);
  }
});
function encrypt(text) {
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // elimina acentos
    
    if (!/^[a-z]*$/.test(text)) { // valida que solo sean letras minúsculas
      return 'Solo se permiten letras minúsculas sin acentos';
    }
    
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
  }
  
  function decrypt(text) {
    if (!/^[a-z]*$/.test(text)) {
      return 'Solo se permiten letras minúsculas sin acentos';
    }
    
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
  }
  copyButton.addEventListener('click', () => {
    output.select();
    document.execCommand('copy');
    
    const message = document.getElementById('message');
    message.innerHTML = 'Resultado copiado al portapapeles';
    
    setTimeout(() => {
      message.innerHTML = '';
    }, 2000);
  });
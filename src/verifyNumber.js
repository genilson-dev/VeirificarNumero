const verifyNumber = (num) => {
    // Verifica se a entrada é válida
    if (num === "" || num === null || num !== Number(num)) return;
    
    // Verifica se o número é Zero
    if (num === 0) {
      console.log(`O número ${num} é Zero`);
    } else if (num > 0) {
      console.log(`O número ${num} é Positivo`);
    } else {
      console.log(`O número ${num} é Negativo`);
    }
  };
  
  // Testando
  verifyNumber(5);   // Saída: "O número 5 é Positivo"
  verifyNumber(-3);  // Saída: "O número -3 é Negativo"
  verifyNumber(0);   // Saída: "O número 0 é Zero"
  

import { trampoline } from 'https://raw.githubusercontent.com/Terkwood/trampoline.ts/main/trampoline.ts';

const helper = (num: number, acc = 1) => { 
    return num === 0 ? acc : () => helper(num - 1, acc * num); 
  }; 
    
  
  const factorial = trampoline(helper);
  
  for (let i = 0; i <= 11; i++) {
    console.log(factorial(i));
  }
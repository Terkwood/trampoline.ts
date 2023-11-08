export const trampoline = (func) => (...rest_arguments) => { 
  let result = func(...rest_arguments); 
  while (typeof result === 'function') { 
    result = result(); 
  } 
  return result; 
}; 

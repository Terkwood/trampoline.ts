# example

```ts
const helper = (num, acc = 1) => { 
  return num === 0 ? acc : () => helper(num - 1, acc * num); 
}; 
  

const factorial = trampoline(helper);

for (let i = 0; i <= 11; i++) {
  console.log(factorial(i));
}
```
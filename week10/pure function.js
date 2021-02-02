// 1. Pure Function 
function addPure(a, b){ 
    return a + b; 
} 

console.log('Pure Function: ', addPure(3, 9));

// 2. Aviod Side Effect 
const b = 11; 
function addSideEffect(a){ 
    return a + b; 
} 
console.log('Side Effect: ', addSideEffect(1)); 
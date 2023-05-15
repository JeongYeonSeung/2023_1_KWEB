const getDivisors = num => {
    const divisors = [];
    for(let i = 1; i * i <= num; i++){                                        
        if(i * i === num) divisors.push(i);                           
        else if(num % i === 0) divisors.push(i, num / i);
    }
    return divisors.sort((first, second) => first - second);
};
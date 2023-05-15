const isValidNumber = num => {
    if(!isFinite(num) || isNaN(num)) return false;
    if(num !== parseInt(num)) return false;
    if(num < 1 || num > 9) return false;
    return true;
};
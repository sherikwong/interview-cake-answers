function setUpMap() {
    const mapOfBrackets = new Map();
    mapOfBrackets.set('{', '}');
    mapOfBrackets.set('[', ']');
    mapOfBrackets.set('(', ')');
    return mapOfBrackets;
}

const map = setUpMap();

function bracketValidator(string) {
    if (string.length === 1) {
        return false;
    };
    if (string.length === 0) {
        return true;
    };
    const leftPointerIndex = 0;
    const rightPointerIndex = string.length - 1;


    if (map.get(string[leftPointerIndex]) === string[rightPointerIndex]) {
        let result = bracketValidator(string.slice(1, rightPointerIndex));
        return result;
    } else {
        const leftResult = bracketValidator(string.slice(0, rightPointerIndex));
        const rightResult = bracketValidator(string.slice(1, rightPointerIndex + 1));
        return leftResult || rightResult;
    }
}

// console.log(bracketValidator('{[]()}')); // True
// console.log(bracketValidator('{[(])}')); // False
// console.log(bracketValidator('{[}')); // False
// console.log(bracketValidator('{}()')); // True
// console.log(bracketValidator('{()}')); // True


function setUpMap(): Map<string, string> {
    const mapOfBrackets = new Map<string, string>();
    mapOfBrackets.set('{', '}');
    mapOfBrackets.set('[', ']');
    mapOfBrackets.set('(', ')');
    // mapOfBrackets.set(')', '(');
    // mapOfBrackets.set('}', '{');
    // mapOfBrackets.set(']', '[');
    return mapOfBrackets;
}

const map = setUpMap();

function bracketValidator(string: string): any {
    console.log('Starting string:', string, 'Length:', string.length);
    if (string.length === 1) {
        console.log('Nope.');
        return false;
    };
    if (string.length === 0) {
        console.log('No more matches. True');
        return true;
    };
    const leftPointerIndex = 0;
    const rightPointerIndex = string.length - 1;


    if (map.get(string[leftPointerIndex]) === string[rightPointerIndex]) {
        console.group('Equal');
        let result = bracketValidator(string.slice(1, rightPointerIndex));
        console.groupEnd();
        return result;
    } else {
        console.group();
        console.log('Checking left...');
        const leftResult = bracketValidator(string.slice(0, rightPointerIndex));
        console.groupEnd()
        console.group()
        console.log('Check right...');
        const rightResult = bracketValidator(string.slice(1, rightPointerIndex + 1));
        console.groupEnd()
        console.log('Left + Right', leftResult && rightResult);
        return leftResult || rightResult;
    }
    // return false;
}

// console.log(bracketValidator('{[]()}')); // True
// console.log(bracketValidator('{[(])}')); // False
// console.log(bracketValidator('{[}')); // False
// console.log(bracketValidator('{}()')); // True
console.log(bracketValidator('{()}')); // True


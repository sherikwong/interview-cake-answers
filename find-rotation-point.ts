// const words = [
//     'ptolemaic',
//     'retrograde',
//     'supplant',
//     'undulate',
//     'xenoepist',
//     'asymptote',  // <-- rotates here!
//     'babka',
//     'banoffee',
//     'engender',
//     'karpatka',
//     'othellolagkage',
// ];

const words = ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i'];

function findIndexRotation(arrayWords: string[]): any {
    let smallestEleIndex = null;

    const recurse = (array: string[]) => {
        console.log(array);
        const middleIndex = Math.floor(array.length / 2);

        if (array[middleIndex] === array[0]) {
            console.log(`${array[middleIndex]} ===`);
            smallestEleIndex = array[0];
        } else if (array[middleIndex] < array[0]) {
            console.log(`${array[middleIndex]} <  ${array[0]}`);
            smallestEleIndex = middleIndex;
            recurse(array.slice(0, middleIndex));
        } else {
            console.log(`${array[middleIndex]} >  ${array[0]}`);
            const afterMiddleIndex =  middleIndex + 1;
            smallestEleIndex = afterMiddleIndex;
            recurse(array.slice(afterMiddleIndex));
        }
    };

    recurse(arrayWords);
    return smallestEleIndex;
}

console.log(findIndexRotation(words));

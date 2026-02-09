/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let nums: number[] = [];
    if (numbers.length > 0) {
        nums.push(numbers[0]);
        nums.push(numbers[numbers.length - 1]);
    }
    return nums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triples: number[] = numbers.map((num: number): number => num * 3);
    return triples;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints: number[] = numbers.map((num: string): number =>
        parseInt(num) ? parseInt(num) : 0,
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let dollars: number[] = [];
    if (amounts.length > 0) {
        dollars = amounts.map((amt: string): number => {
            if (amt[0] === "$") {
                return parseInt(amt.slice(1)) ? parseInt(amt.slice(1)) : 0;
            } else {
                return parseInt(amt) ? parseInt(amt) : 0;
            }
        });
    }
    return dollars;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let exclaims: string[] = messages.filter(
        (msg: string): boolean => !msg.endsWith("?"),
    );
    exclaims = exclaims.map((msg: string): string => {
        if (msg.endsWith("!")) {
            return msg.toUpperCase();
        } else {
            return msg;
        }
    });
    return exclaims;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count: number = 0;
    words.forEach((word: string): void => {
        if (word.length < 4) {
            count++;
        }
    });
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let all: boolean = true;
    colors.forEach((color: string): void => {
        if (color !== "red" && color !== "blue" && color !== "green") {
            all = false;
        }
    });
    return all;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number = addends.reduce(
        (total: number, num: number): number => total + num,
        0,
    );
    let output: string = sum + "=";
    addends.forEach((num: number, index: number): void => {
        if (index < addends.length - 1) {
            output += num + "+";
        } else {
            output += num;
        }
    });
    if (addends.length === 0) {
        output += "0";
    }
    return output;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let cont: boolean = true;
    let sum: number = 0;
    let newVals: number[] = [];
    values.forEach((num: number): void => {
        if (num < 0 && cont) {
            cont = false;
            newVals.push(num);
            newVals.push(sum);
        } else {
            newVals.push(num);
            sum += num;
        }
    });
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (cont) {
        newVals.push(sum);
    }
    return newVals;
}



function insertionSort(newArr) {
    let n = newArr.length;

    for (let i = 1; i < n; i++) {
        // to choose the first element in our unsorted subArray

        let updated = newArr[i]

        // The last elemnt of our unsorted subArray 

        let j = i - 1;

        while((j > -1) && (updated < newArr[j])) {
            newArr[j + 1] = newArr[j];
            j--;
        }

        newArr[j+1] = updated;
    }

    return newArr
}

let sea = [3, 7, 9, 0, 1, 5]
console.log(insertionSort(sea))
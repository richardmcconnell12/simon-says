let locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]];
let counter = 0

for (let k = 0; k < locations.length; k++) {
     currentLocation = locations[k]

    if (currentLocation[1] > 2) {
        const invalidLocation = true
        if (invalidLocation) {
            console.log("This location is invalid")
            counter += 1;
        }
    }
}
console.log(`There were ${counter} invalid locations`)

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/

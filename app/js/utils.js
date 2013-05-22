/**
 * User: Victor J
 * Date: 5/22/13
 * Time: 5:26 PM
 */

function findWithinArray(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}
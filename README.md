# code_test_set1

Answer Set 1 Question 1

function lcs(arr1) {
    var arr = arr1.concat().sort()
    a1 = arr[0]
    a2 = arr[arr.length - 1];
    len = a1.length;
    i = 0;
    while(i<len && a1.charAt(i) === a2.charAt(i)) i++;
    return a1.substring(0,i);
}

console.log(lcs['awwbcde', 'azbcdii'])

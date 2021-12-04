function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function getList () {
    var list = Array(10000).fill(1).map((e,i)=>i+1)
    shuffleArray(list)
    console.log(list)

    var txtOutput = document.getElementById("txtOutput");
    txtOutput.value = list
}

(function start() {

    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];
    //var asciiSum = 0;
    
    names.forEach(n => {
        if (n.toLowerCase()[0] === "j") {
            speakHello()(n);
        } else {
            speakGoodBye()(n);
        }
    })

    names.forEach(name => {
        var asciiSum = 0;

        //[name].forEach(namesAscii => {
        [...name].forEach(namesAscii => {
            asciiSum += namesAscii.charCodeAt(0);
        })

        console.log('======================');

        if (asciiSum > 500) {
            speakGoodBye()(name);
        } else {
            speakHello()(name);
        }
        
        console.log(`Ascii sum - ${name} ${asciiSum}`);
    })
}())
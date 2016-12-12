var HolaMundo = (function () {
    function HolaMundo() {
    }
    HolaMundo.prototype.greet = function (greeting) {
        console.log(greeting);
    };
    return HolaMundo;
}());
var greeter = new HolaMundo();
greeter.greet("Hola mundo");
//# sourceMappingURL=main.js.map
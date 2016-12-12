class HolaMundo {
    constructor() { }
    greet(greeting: string) {
        console.log(greeting);
    }
}
let greeter = new HolaMundo();
greeter.greet("Hola mundo");
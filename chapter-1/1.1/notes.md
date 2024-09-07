# Elements of Programming

A powerful programming language is not only about instructing a computer to perform tasks but also about 
providing a framework on organizing complex ideas about processes.

Every powerful programming language provides the following three mechanisms to acheive the above:
* Primitive Expressions i.e. a way of defining the simplest entities,
* A way to combination by which complex elements can be represented by combining simpler ones,
* A way of abstraction by which complex elements can be represnted & edited as a single unit. 

Expressions can be as simple as:
 400; 
 & the js interpreter responds by priting back the same output i.e. 400,
or they can contain other expressions as components i.e. 
100+300;
again the interpreter prints 400
such expressions are called **combinations**.

Interpreter operates the same way even with complex expressions i.e. it reads the statement, evaluates the statement and prints the result.
This behavior is expressed by saying that interpreter operates in a **read-evaluate-print** loop. 

A critical aspect of programming laguage is that it provides names to refer to computational objects i.e.

`const size = 2;`

Once a value 2 is assigned to name size, it can be referred by this name in the program.

## Compound Functions
Simplest form of function declaration can be as below:

` function name(parameters) { return expression; }`

After declaring a function it can be used in a function application expression

` function-expression(argument-expressionbs)`

e.g.
function square(x){
    return x*x;
}

square(4);

## Substitution Model for Function Application


## Applicative Order and Normal Order Evaluation



# General information
_Author_: Jeremy Pearson

_Version_: 1.0.0

_Libraries_: jest/eslint/node (custom)

_Last modified_: 1/26/2018

# Function use

## Example
[output] = function([inputs])

_Brief description_

## Lab functions

[OUTPUT OF NEW STACK OBJECT] = new Stack([MAX SIZE])

[RETURNS TOP NODE WITH NEW PUSHED VAL AT TOP] = StackObj.push(val);
[RETURNS POPPED TOP NODE] = StackObj.pop();
[RETURNS TOP NODE WITHOUT PERMUTATION] = StackObj.peek();

[OUTPUT OF NEW QUEUE OBJECT] = new Queue([MAX SIZE])

[RETURNS TOP NODE WITH PUSHED NEW VAL AT END] = QueueObj.enqueue()
[RETURNED DEQUEUED TOP NODE] = QueueObj.dequeue()
[BOOL TRUE/FALSE IF QUEUE IS EMPTY] = QueueObj.isEmpty()
[RETURNS THE TOP NODE WITHOUT PERMUTATION] = QueueObj.peek()

# Lab Readme (SPECS)
lab 15 - Stacks and Queues Data Structures
To Submit this Assignment
fork this repository
write all of your code in a directory named lab- + <your name> e.g. lab-duncan
push to your repository
submit a pull request to this repository
submit a link to your PR in canvas
write a question and observation on canvas
Requirements
Configuration
Your lab directory must include

README.md -- with a documentation about your lab
.gitignore -- with a robust .gitignore
.eslintrc.json -- with the class .eslintrc file
.eslintignore -- with the class .eslintignore
.package.json -- with all dependencies and dev-dependencies
lib/ -- directory for holding your programs helper modules
test/ -- directory for holding your programs unit and integration tests
Testing
Write at least three test assertions for each method of the Stack and Queue Data Structures
Organize your tests into appropriate describe/it blocks for test output readability
Documentation
In your README, write documentation for you data structures
Your documentation should includes code block usage examples
Provide instructions for:
Installing and using your data structure
Accessing each method
Running your tests
Feature Tasks
Implement a Stack constructor
Implement push(value), pop(), and peek() methods on the Stack prototype
Implement a Queue constructor
Implement enqueue(value) and dequeue() methods on the Queue prototype
Stretch:
Implement Reverse Polish Notation using your Stack data structure
Refer to the Wiki for more information on RPN
Rubric:
Tests: 2pts
Passes linter: 1pts
Completed Data Structure: 5pts
Big-O notation: 2pt
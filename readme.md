# How to use
 
Open file iterator_demo.html in a web browser. Use the console in your browser to iterate using the dtIterator function, you can choose one the following parameters: (one at a time). dtArray, dtObject, dtMap or dtSet. (There is also instructions in the iterator_demo.html file directly readable).

dtArray is of type array, dtObject is a javascript object, dtMap is a Map object, dtSet is a Set. 

Exemple usage, in the console of the browser type: **dtIterator(dtArray)**. This should yield an iterated array.


# How it works

The different objects, arrays, object, set is prepared by being hardcoded in the code. They are stored as variables. The dtIterator takes in the variable with for example the array as an argument. It can then detect what type of object or array it is through different means and then able to iterate trough it. This means that you don’t need to alter code deepening on if it is a set, an array or an object that you want to iterate.

One thing that trip me up was the fact that the js Map() is typeof Object. This means that Map() would also trigger the code for object. To fix this I needed to add a check !(input instanceof Map) where input is the variable called by the argument.

All logic resides in the js-iterator.js file.


# Epilog

There are a lot of improvements and adding functionality that can be done. I'm aware of this. For one it doesn't recursively iterates trough for example objects. One other improvement would be to add a callback to the iterator so you could alter the thing you iterate as you normally do. 

This is a small kind of tech-demo to show the core idea I had. So it is not really useful in any production setting. I mostly did this because of an old idea I had and that I wanted to deep dive in how objects in javascript really behaves and what prototype chain they are part of.


Author and made by Daniel Torelm.
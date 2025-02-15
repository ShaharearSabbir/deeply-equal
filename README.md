<h1>Deep Equality Check</h1>

a function that takes two values as input and returns true if they are deeply equal, and false otherwise.  Deep equality means that objects and arrays are compared recursively (i.e., their contents are also compared).  Consider edge cases like null, undefined, and different data types.

<h3>Example:</h3>
deepEqual(1, 1) should return true <br>
deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }) should return true <br>
deepEqual([1, 2, 3], [1, 2, 3]) should return true <br>
deepEqual({ a: 1, b: 2 }, { a: 1, c: 2 }) should return false <br>
deepEqual([1, 2, 3], [1, 2, 4]) should return false <br>

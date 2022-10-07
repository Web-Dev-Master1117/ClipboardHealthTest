# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
As per the good writing standards few refactors i done are as below
1. The module constants should be created and placed outside the export since they are part of module
2. repeatative code should be extracted as a seperate function since following SOLID principles
3. Module should be highly cohessive 
4. multiple if else should be refactored to use either ternanry or return statements
6. null checks and fallbacks are indeed mandatory
5. There could be further room for enhancements but i hope as per this test session these should be good :)
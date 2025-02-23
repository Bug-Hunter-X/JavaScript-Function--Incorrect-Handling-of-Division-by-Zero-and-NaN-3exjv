# JavaScript Function: Incorrect Handling of Division by Zero and NaN

This repository demonstrates a common JavaScript error: incorrect handling of division by zero and NaN (Not a Number). The original `foo` function silently returns `NaN` when dividing by zero or `NaN`, which can lead to unexpected behavior and difficult-to-debug issues.

The solution provided addresses this by explicitly checking for both zero and `NaN` values, throwing an error or returning a more meaningful value when such cases are encountered.

## Bug

The `bug.js` file contains the original function which has incorrect handling.

## Solution

The `bugSolution.js` file contains a corrected version of the function, showcasing improved error handling.

This example highlights the importance of robust error handling in JavaScript functions to prevent unexpected errors and maintain application stability.
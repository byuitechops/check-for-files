/*eslint-env node, es6*/

/* Ensure course has at least one module and one file before attempting to upload to canvas */

/* Put dependencies here */

module.exports = (course, stepCallback) => {


    /* You should never call the stepCallback with an error. We want the
    whole program to run when testing so we can catch all existing errors */

    stepCallback(null, course);
};

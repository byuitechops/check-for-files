/*eslint-env node, es6*/

/* Module Description */

/* Put dependencies here */

module.exports = (course, stepCallback) => {


    /* You should never call the stepCallback with an error. We want the
    whole program to run when testing so we can catch all existing errors */

    stepCallback(null, course);
};

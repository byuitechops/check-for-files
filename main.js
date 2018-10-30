/*eslint-env node, es6*/

/* Ensure course has at least one module and one file before attempting to upload to canvas */

/* Put dependencies here */
// const fs = require('fs');

module.exports = (course, stepCallback) => {

    course.message(`file count: ${course.content.length}`);

    /* check for at least one module */
    // <resource identifier="RES_CONTENT_7053804" type="webcontent" d2l_2p0:material_type="contentmodule" d2l_2p0:link_target="" href="" title="" />
    var manifest = course.content.find(file => file.name === 'imsmanifest.xml');



    /* check for at least one file. It DOES NOT have to be linked to a module */
    var hasFile = course.content.find(file => file.ext != '.xml');
    if (hasFile === undefined) {
        const fileGuts = '<html><body><h1>this is a dummy file created by the d2l to canvas conversion tool. Please delete me.</h1></body></html>',
            fileName = 'dummyFile.html';

        let dummyFile = new course.content[0].constructor(`${course.info.unzippedPath}\\${fileName}`, fileGuts, true);

        course.content.push(dummyFile);

        course.newInfo('tempFileAdded', true);
        course.log('Added temp HTML file for conversion', {fileName});
    }

    stepCallback(null, course);
};
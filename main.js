/*eslint-env node, es6*/

/* Ensure course has at least one module and one file before attempting to upload to canvas */

/* this is beign used by the File object constructor */
const cheerio = require('cheerio');

module.exports = (course, stepCallback) => {

    /* check for at least one module */
    var manifest = course.content.find(file => file.name === 'imsmanifest.xml');
    var moduleCount = manifest.dom('resource[d2l_2p0\\:material_type="contentmodule"]').length;

    if (moduleCount === 0) {
        var err = new Error('Unable to import: Modules is empty. Please add a module and try again');
        course.fatalError(err);
        stepCallback(err, course);
        return;
    }

    /* check for at least one file. It DOES NOT have to be linked to a module */
    var hasFile = course.content.find(file => file.ext != '.xml');
    if (hasFile === undefined) {
        const fileGuts = '<html><body><h1>this is a dummy file created by the d2l to canvas conversion tool. Please delete me.</h1></body></html>',
            fileName = 'tempFile.html';

        /* magic used to copy the File object https://github.com/byuitechops/index-directory/blob/master/File.js */
        let tempFile = new course.content[0].constructor(`${course.info.unzippedPath}\\${fileName}`, fileGuts, true);

        course.content.push(tempFile);

        course.newInfo('tempFile', fileName);
        course.log('Added temp HTML file for conversion', {fileName});
    }

    stepCallback(null, course);
};
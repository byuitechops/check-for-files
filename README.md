# Check for files
### *Package Name*: course-has-content
### *Child Type*: Shell
### *Platform*: All
### *Required*: Required

This child module is built to be used by the Brigham Young University - Idaho D2L to Canvas Conversion Tool. It utilizes the standard `module.exports => (course, stepCallback)` signature and uses the Conversion Tool's standard logging functions. You can view extended documentation [Here](https://github.com/byuitechops/d2l-to-canvas-conversion-tool/tree/master/documentation).

## Purpose

This child module is meant to prevent an error that occurs while uploading a course to Canvas that doesn't have any files. Canvas reports this as an unknown error during course upload. This child module checks to ensure course files are not empty. If I can figure out how, it'll add a dummy file so the course will upload, if not it'll just spit out a warning and kill the conversion.

## How to Install

```
npm install course-has-content
```

## Run Requirements

The following Course properties are required.
`course.content`
`course.info.unzippedPath`


## Options

None

## Outputs

It may create a temporary file in the course & course object. The name of this file is saved in course.info as described below:

| Name | Type | Location |
|--------|--------|-------------|
|tempFile| String | course.info|

## Process

Describe in steps how the module accomplishes its goals.

1. Check if there is at least one module
2. Error if there isn't
3. Check if there is at lease one file
4. Create a temp file is there isn't


## Log Categories

List the categories used in logging data in your module.

- Added temp HTML file for conversion

## Requirements

Please read the purpose section.
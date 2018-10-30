# Check for files
### *Package Name*: course-has-content
### *Child Type*: shell
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

`course.content` is required.

## Options

None

## Outputs

It may spit out a flag to a later child module to delete the dummy file. Not sure how possible that is.

| Name | Type | Location |
|--------|--------|-------------|
|courseFilesEmpty| Boolean | course.info|

## Process

Describe in steps how the module accomplishes its goals.

1. Does this thing
2. Does that thing
3. Does that other thing

## Log Categories

List the categories used in logging data in your module.

- Discussions Created
- Canvas Files Deleted
- etc.

## Requirements

Please read the purpose section.
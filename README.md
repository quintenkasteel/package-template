![npm](https://img.shields.io/npm/v/@quintenkasteel/useswipe?color=%234bc524&label=package%20version)
[![GitHub issues](https://img.shields.io/github/issues/quintenkasteel/package-template.svg)](https://github.com/quintenkasteel/package-template/issues/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/quintenkasteel/package-template/pulls/)
[![Known Vulnerabilities](https://snyk.io/test/github/quintenkasteel/package-template/badge.svg)](https://snyk.io/test/github/quintenkasteel/package-template)
[![Coverage Status](https://coveralls.io/repos/github/quintenkasteel/package-template/badge.svg?branch=main)](https://coveralls.io/github/quintenkasteel/package-template?branch=main)
![npm](https://img.shields.io/npm/dm/@quintenkasteel/useswipe)


# Getting Started with [name package]

Description of the package - small summary

## Installation
`npm install --save [name package]`

or

`yarn add [name package]`


## Usage

`import [name package] from '@quintenkasteel/[name package]'`

example without element
 
 `const swipe = useSwipe({})`

example with element
 
 `const swipe = useSwipe(".header", true)`

## Props
    `element: String`
  DOM element where the swipe is enabled. default value is body.


    `preventDefault: Bool`
  Prevent all default events when moving. for example scrolling.

## Return Values
    direction: String
  Get the current swiping direction in uppercase.   
  one of: "RIGHT" | "LEFT" | "DOWN" | "UP" 

    distance: Number
  Get the swiped amount in pixels.

    startX: Number
  Get the starting X position in pixels.


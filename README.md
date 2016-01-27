[![Build Status](https://travis-ci.org/LocusEnergy/eui-calendar.svg?branch=master)](https://travis-ci.org/LocusEnergy/eui-calendar)

# Eui-calendar

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).


Questions / TODO:
- remove 'eui' prefix from the internal components?
- add warning if moment isn't defined in each selector? (for example: `return momentDecade(this.get('decade'), 'YYYY')` in year-selector)

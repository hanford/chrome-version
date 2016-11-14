'use strict'

var test = require('tape')
var chromeVersion = require('./')
var agents = require('./agents.json')

test(function (t) {
  assert('41', 41)
  assert('54', 54)
  assert('4', 4)

  t.end()

  function assert (agent, expected) {
    t.ok(agents[agent])
    t.equal(chromeVersion(agents[agent]), expected)
  }
})

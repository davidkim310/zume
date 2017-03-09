var chai = require('chai');
var expect = require('chai').expect;
var items = require('./index');

describe("Subtotal", function(){
    it("returns total sum of items", function(){
        var output = items.subtotal(items)
    })
})


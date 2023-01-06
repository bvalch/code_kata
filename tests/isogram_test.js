const isogramFunction=require('../solutions/isogram.js')
const assert=require("assert");

describe("Test isograms",function(){
    it("should return false for _moose_",()=>{
        assert.strictEqual(false,isogramFunction("moose"))
    });

    it("should return true for Dermatoglyphics",()=>{
        assert.strictEqual(true,isogramFunction("Dermatoglyphics"))
    });

    it("should return true for isogram",()=>{
        assert.strictEqual(true,isogramFunction("isogram"))
    });

    it("should return false for aba",()=>{
        assert.strictEqual(false,isogramFunction("aba"))
    });

    it("should return false for moOse",()=>{
        assert.strictEqual(false,isogramFunction("moOse"))
    });

    it("should return true for an empty string",()=>{
        assert.strictEqual(true,isogramFunction(""))
    });





})
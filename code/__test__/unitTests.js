describe("Add", () =>{
    test("Positive numbers",() =>{
        expect(add(0,5)).to.equal(5)
    })
    test("Negative numbers",()=>{
        expect(add(-5,6).to.equal(1))
    })
})
describe("capitalize",()=>{
    test("allCharsCap",()=>{
        expect(capitalize("TESTSTRING")).to.equal("Teststring")
    })
})
describe("compact",()=>{
    test("large item",()=>{
        expect(compact([0,1,"",5,6])).to.equal([0,1,5,6])
    })
})
describe("filter",()=>{
    test("filtProd",()=>{
        expect(filter([1,2,3,4,5,-5,-3])).to.equal([1,2,3,4,5])
    })
})

describe("map",()=>{
    test("capMap",()=>{
        expect(map(["product1","product2"],capitalize)).to.equal(["Product1","Product2"])
    })
})
describe("slice",()=>{
    test("remove amount",()=>{
        expect(slice([1,2,3,4],2)).to.equal([3,4])
    })
})
describe("toNumber",()=>{
    test("String to number",()=>{
        expect(toNumber('3.2')).to.equal(3.2)
    })
})
describe("toString",()=>{
    test("listToString",()=>{
        expect(["p1","p2","p3","p4"]).to.equal()
    })
})


describe("EndWith",()=>{
    test("Valid",()=>{
        expect(endWith("abc","b")).to.equal(False)
    })
    test("Invalid",()=>{
        expect(endWith(abc,b)).to.equal(CRASH)
    })
})


describe("get",()=>{
    test("no field",()=>{
        expect(get({a},'a.b')).to.equal(CRASH)
    })
    test("valid",()=>{
        expect(get({a:b:1},"a.b")).to.equal(1)
    })
})


describe("isEmpty",()=>{
    test("Null",()=>{
        expect(isEmpty(Null)).to.equal(True)
    })
})


describe("reduce",()=>{
    test("Sum array",()=>{
        expect(reduce([1,2,3],add,0)).to.equal(6)
    })
})


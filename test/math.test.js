const {calculateTip, farenhitToCelsius, celsiusToFarenhit} = require('../src/math');
const {add} = require('../../playground/7-async-await')

test('calculate total with tip',()=>{
    const total = calculateTip(10,0.3);

    expect(total).toBe(13)
})

test('calculate tip with default', ()=>{
    const total = calculateTip(10);
    expect(total).toBe(12.5)
})

test('convert C to F', ()=>{
    const temp = celsiusToFarenhit(0);
    expect(temp).toBe(32);
})

test('Convert F to C', ()=>{
    const tempF = farenhitToCelsius(32);
    expect(tempF).toBe(0);
})

// test('Asynchronus test demo', (done)=>{
//     setTimeout(()=>{
//         expect(1).toBe(2)
//         done()
//     },2000)
// })

test('testing add ',(done)=>{
    add(2,6).then((sum)=>{
        expect(sum).toBe(8);
        done()
    })
})

test('testing add with async&await',async ()=>{
    const sum =await add(8,6);
    expect(sum).toBe(14)
})
const { get } = require('./todo-service');




function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }



describe('todo-service get', () => {
    test('null check', async () => {
        const results = await get();
        expect(results).not.toBeNull();
    });

    
    test('define check', async () => {
        const results = await get();
        expect(results).toBeDefined();
    });

    test('value check', async () => {
        const results = await get();
        expect(results).toEqual('do the homework');
        expect(results).toHaveLength(15);
    });
    // test('aaa', () => {
    //     //const mockFn = jest.fn();
    //     //mockFn.mockReturnValue([ { id: 1, content: 'do the homework' } ]);

    //     //console.log(mockFn());


    //     //const mockCallback = jest.fn(x => 42 + x);
    //     // get()
    //     // expect()
    //     //expect(mockFn).toBeCalledTimes(1);
    //     const results = get();
    //     console.log(results);

    //     expect(results).not.toBeNull();
    //     expect(results).not.toBeDefined();
    //     expect(results).toBeNull();
    //     expect(results).toBeDefined();


    //     //expect(results).toEqual([ { id: 1, content: 'do the homework' } ]);
    //     //expect(results).toHaveLength(1);

    //     // get(mockCallback)
    //     // expect(mockCallback.mock.calls).toHaveLength(1);
    //     //const mockCallback = jest.fn(x => 42 + x);
    //     //forEach([0, 1], mockCallback);
    //     // const drink = jest.fn();
    //     // const get = require("../todo-service");

    //     // The mock function is called twice
    //     //expect(mockCallback.mock.calls.length).toBe(2);

    //     // The first argument of the first call to the function was 0
    //     // expect(mockCallback.mock.calls[0][0]).toBe(0);

    //     // The first argument of the second call to the function was 1
    //     // expect(mockCallback.mock.calls[1][0]).toBe(1);

    //     // The return value of the first call to the function was 42
    //     //expect(mockCallback.mock.results[0].value).toBe(42);
        
    //     // expect(get).toHaveBeenCalled();
    // });

});




/*
function drinkAll(callback, flavour){
    if(flavour !== 'bbb'){
        callback(flavour);
    }
}

describe('drinkAll', () => {
    test('aaa', () => {
        const drink = jest.fn();
        drinkAll(drink, 'bbb');
        expect(drink).toHaveBeenCalled();
    });

});
*/
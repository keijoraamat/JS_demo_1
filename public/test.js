"use strict";
var y = {
    fn: null,
    saveFn(fn) {
        this.fn = fn;
    },
    execute: function() {
        this.fn();
    }
}
var x = {
    foo: function(z){
        let msg = "inside foo too";
        let arrowFn = () => {
            alert(msg);
        }

        z.saveFn(arrowFn);
    }
}

x.foo(y);
x = undefined;
y.execute();
// Only works in Firefox

describe("Proxy", function() {

    it("should let you intercept gets", function() {

        var unicorn = {
            legs: 4,
            color: 'brown',
            horn: true
        };

        var proxyUnicorn = new Proxy(unicorn, {
            get: function(target, property) {
                if (property === 'color') {
                    return 'awesome ' + target[property];
                } else {
                    return target[property];
                }
            }
        });

        expect(proxyUnicorn.legs).toBe(4);
        expect(proxyUnicorn.color).toBe('awesome brown');

    });

    it("should let you intercept sets", function() {

        var unicorn = {
            legs: 4,
            color: 'brown',
            horn: true
        };

        var proxyUnicorn = new Proxy(unicorn, {
            set: function(target, property, value) {
                if (property === 'horn' && value === false) {
                    console.log('unicorn cannot ever lose its horn!');
                } else {
                    target[property] = value;
                }
                return true;
            }
        });

        proxyUnicorn.color = 'white';
        proxyUnicorn.horn = false;

        expect(proxyUnicorn.color).toBe('white');
        expect(proxyUnicorn.horn).toBe(true);

    });

});

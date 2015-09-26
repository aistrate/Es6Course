describe("Promise", function() {

    it("should be a test", function(done) {

        setTimeout(function() {
            expect(true).toBe(true);
            done();
        }, 50);

    });

    it("should execute the callback given to then", function(done) {

        var promise = new Promise(function(resolve, reject) {
            console.log('before resolve');
            resolve();
            console.log('after resolve');
        });

        promise.then(function() {
            expect(true).toBe(true);
            console.log('done');
            done();
        });

    });

    it("should receive the resolved data", function(done) {

        var promise = new Promise(function(resolve, reject) {
            resolve(1);
        });

        promise.then(function(data) {
            expect(data).toBe(1);
            done();
        });

    });

    it("should fail when rejected", function(done) {

        var promise = new Promise(function(resolve, reject) {
            reject(Error('oh noes!'));
        });

        promise.then(function() {
            // success
        }, function(error) {
            expect(error.message).toBe('oh noes!');
            done();
        });

    });

    it("should have a catch", function(done) {

        var promise = new Promise(function(resolve, reject) {
            reject(Error('oh noes!'));
        });

        promise.catch(function(error) {
            expect(error.message).toBe('oh noes!');
            done();
        });

    });

    it("should composed when resolved with a promise", function(done) {

        var previousPromise = new Promise(function(resolve, reject) {
            resolve(3);
        });

        var promise = new Promise(function(resolve, reject) {
            resolve(previousPromise);
        });

        promise.then(function(data) {
            expect(data).toBe(3);
            done();
        });

    });

    it("should have a static resolve", function(done) {

        var previousPromise = Promise.resolve(3);

        var promise = Promise.resolve(previousPromise);

        promise.then(function(data) {
            expect(data).toBe(3);
            done();
        });

    });

    it("should have a static reject", function(done) {

        var promise = Promise.reject(Error('oh noes!'));

        promise.catch(function(error) {
            expect(error.message).toBe('oh noes!');
            done();
        });

    });

    it("should be asynchronous", function(done) {
        var async = false;

        var promise = new Promise(function(resolve, reject) {
            resolve();
            console.log('async: ' + async);
        });

        promise.then(function() {
            expect(async).toBe(true);
            done();
        });

        async = true;

    });

});

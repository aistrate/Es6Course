function getOrder(orderId) {
    return Promise.resolve({ userId: 35 });
}

function getUser(userId) {
    return Promise.resolve({ companyId: 18 });
}

function getCompany(companyId) {
    return Promise.resolve({ name: 'Pluralsight' });
}

function getCourse(courseId) {
    var courses = {
        1: { name: "Introduction to Cobol" },
        2: { name: "Yet Another C# Course" },
        3: { name: "How to make billions by blogging" }
    };
    return Promise.resolve(courses[courseId]);
}

function naivePause(delay) {
    setTimeout(function() {
        console.log('paused for ' + delay + ' ms');
    }, delay);
}

function oldPause(delay, callback) {
    setTimeout(function() {
        console.log('paused for ' + delay + ' ms');
        callback();
    }, delay);
}

(function() {
    var sequence;

    var run = function(generator) {
        sequence = generator();
        // console.log('async.run');
        sequence.next();
    };

    var resume = function() {
        // console.log('async.resume');
        sequence.next();
    };

    window.async = {
        run: run,
        resume: resume
    };
}());

function pause(delay) {
    setTimeout(function() {
        console.log('paused for ' + delay + ' ms');
        async.resume();
    }, delay);
}

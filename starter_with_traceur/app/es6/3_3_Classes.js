describe("the class keyword", function() {

    it("can create a class", function() {

        class Employee {

            doWork() {
                return "complete!";
            }

            getName() {
                return "Scott";
            }

        }

        let e = new Employee();

        expect(e.doWork()).toBe("complete!");
        expect(e.getName()).toBe("Scott");
        expect(Employee.prototype.doWork.call(e)).toBe("complete!");

    });

});

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

    it("can have a constructor", function() {

        class Employee {

            constructor(name) {
                this._name = name;
            }

            doWork() {
                return "complete!";
            }

            getName() {
                return this._name;
            }

        }

        let e1 = new Employee("Scott");
        let e2 = new Employee("Alex");

        expect(e1.getName()).toBe("Scott");
        expect(e2.getName()).toBe("Alex");

    });

    it("can have getters and setters", function() {

        class Employee {

            constructor(name) {
                this.name = name;
            }

            doWork() {
                return "complete!";
            }

            get name() {
                return this._name.toUpperCase();
            }

            set name(newValue) {
                this._name = newValue;
            }

        }

        let e1 = new Employee("Scott");
        let e2 = new Employee("Alex");

        expect(e1.name).toBe("SCOTT");
        expect(e2.name).toBe("ALEX");

        e1.name = "Chris";
        expect(e1.name).toBe("CHRIS");

    });

    it("can have a super class", function() {

        class Person {

            constructor(name) {
                this.name = name;
            }

            get name() {
                return this._name;
            }

            set name(newValue) {
                if (newValue) {
                    this._name = newValue;
                }
            }

        }

        class Employee extends Person {

            doWork() {
                return `${this._name} is working`;
            }

        }

        let p1 = new Person("Scott");
        let e1 = new Employee("Christopher");

        expect(p1.name).toBe("Scott");
        expect(e1.name).toBe("Christopher");
        expect(e1.doWork()).toBe("Christopher is working");

    });
});

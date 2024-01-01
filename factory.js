const Factory =  () => {
    this.createEmployee = (type) => {
        let employee;

        if (type === "fulltime") {
            employee = new FullTime();
        } else if (type === "parttime") {
            employee = new PartTime();
        } else if (type === "temporary") {
            employee = new Temporary();
        } else if (type === "contractor") {
            employee = new Contractor();
        }

        employee.type = type;

        employee.say = () => {
            console.log(this.type + ": rate " + this.hourly + "/hour");
        }

        return employee;
    }
}

const FullTime = () => {
    this.hourly = "$12";
};

const PartTime = () => {
    this.hourly = "$11";
};

const Temporary = () => {
    this.hourly = "$10";
};

const Contractor = () => {
    this.hourly = "$15";
};

const run = () => {

    const employees = [];
    const factory = new Factory();

    employees.push(factory.createEmployee("fulltime"));
    employees.push(factory.createEmployee("parttime"));
    employees.push(factory.createEmployee("temporary"));
    employees.push(factory.createEmployee("contractor"));

    for (let i = 0, len = employees.length; i < len; i++) {
        employees[i].say();
    }
}

// run();

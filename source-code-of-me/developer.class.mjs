function randomInteger() {
    return Math.floor(3 * Math.random());
}

class Student {
    constructor(name, knowledge) {
        this.name = name;
        this.knowledge = knowledge;
        this.energy = 500;
        this.cupsOfCoffee = 0;
    }
    learn(something) {
        this.knowledge.push(something);
    }
    amTired() {
        return (this.energy <= 200);
    }
    drinkCoffee() {
        this.energy += 5;
        this.cupsOfCoffee++;
    }
}

export default class Developer extends Student {
    constructor(name, knowledge, developmentSkills) {
        super(name, knowledge);
        this.developmentSkills = developmentSkills;
        this.percentageOfCodeCompleted = 0;
        this.amountOfBugs = 0;
    }
    foundABug() {
        if (randomInteger() >= 1) {
            this.percentageOfCodeCompleted -= 5;
            this.amountOfBugs++;
            return true;
        } else {
            return false;
        }
    }
    code() {
        if (this.percentageOfCodeCompleted === 100) {
            console.log(`${this.name} finished the source-code.`);
            console.log(`He got ${this.amountOfBugs} new knowledges.`);
            console.log(`(and anxiety due to the ${this.cupsOfCoffee} cups of coffee that he drinks.)`);
            return false;
        } else {
            this.energy -= 10 * randomInteger();
            this.percentageOfCodeCompleted += 5;
            return true;
        }
    }
}
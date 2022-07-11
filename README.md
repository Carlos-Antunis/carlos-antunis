<h1 align="center" id="Hi, I'm Carlos Antunis">Hi, I'm Carlos Antunis</h1>
<h3 align="center">a coffee-based lifeform</h3>

## About me

I'm a graduating student of Physics at bachelor degree in Federal University of Alagoas - UFAL, passionate with Computational Physics and Web Development.

### Social

[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&?style=flatc&logoColor=white)](https://www.instagram.com/carlos.phys/)
[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?logo=Twitter&l&?style=flat&logoColor=white)](https://twitter.com/Carlos_Antunis)

### Computational Physics entusiast

Along my graduation I've worked with Computational Physics, and this increase my world view a lot. Today, I'm nothing besides then an enthusiast in the area, however, it will allways occupy an important part of my life.

### Learning Web Development

Currently, the area of Web Development has aroused my curiosity, because of that, I have been studying this subject, learning the basic languages, both for markup and stylization and for programming web pages, in addition to some frameworks. Over time I want to deepen my knowledge of HTML, CSS and JS, besides to learn new frameworks used for web development.

### Github stats

<div align="center">
    <div>
        <a href="https://github.com/Carlos-Antunis">
            <img  width="400rem" src="https://github-readme-stats.vercel.app/api?username=Carlos-Antunis&show_icons=true&theme=tokyonight&hide_border=true" alt="Carlos-Antunis Github Stats" />
        </a>
        <a href="https://github.com/Carlos-Antunis">
            <img width="400rem" src="https://github-readme-stats.vercel.app/api/top-langs/?username=carlos-antunis&langs_count=10&theme=tokyonight&hide_border=true&layout=compact&hide=fortran" alt="Carlos-Antunis most used languages" />
        </a>
    </div>
</div>

### Technologies

If you are a computer and has node js installed, run the code below and know more about me, else ask a friendly human to describe me.

```javascript

const randomIntBetween0and3 = () => {
    //Generate a random integer between [0, 1, 2]
    return Math.floor(3 * Math.random());
}

class Student {
    constructor(name, knowledge) {
        this.name = name;
        this.knowledge = knowledge;
        this.energy = 500;
        this.amountOfLearnedKnowledge = 0;
        this.cupsOfCoffeeDrinked = 0;
    }

    learn(anything) {
        this.knowledge.push(anything);
        this.amountOfLearnedKnowledge++;
    }

    drinkCoffee() {
        this.energy += 5;
        this.cupsOfCoffeeDrinked++;
    }
}

class Developer extends Student {
    constructor(name, knowledge, developmentTechnologies) {
        super(name, knowledge);
        this.developmentTechnologies = developmentTechnologies;
    }

    amWritingCode() {
        if (this.energy >= 100) {
            this.energy -= 10*randomIntBetween0and3();
            return true;
        } else {
            return false;
        }
    }

    finishTheCode() {
        console.log(`${this.name} finished the source-code with ${this.amountOfLearnedKnowledge} new knowledges, and anxiety (due to ${this.cupsOfCoffeeDrinked} cups of coffee that he drinks).`);
    }
}

function hasBugs() {
    //If a random integer between 0 and 2 are greater than 1
    return (randomIntBetween0and3() > 1) ? true : false;
}

let I = new Developer("Carlos Antunis", ["Physics", "Mathematics"], {
    learned: {
        frontEnd: ["Html 5", "CSS 3", "Bootstrap 5", "Tailwind CSS", "JavaScript"],
        devOps: ["Bash"],
        programmingLanguages: ["C", "C++", "Python", "JavaScript"],
    },
    stillWantToLearn: {
        frontEnd: ["Bulma", "React", "Vue", "Angular", "Next.js", "Electron", "React-native"],
        backEnd: ["Flask", "Django"],
    },
});

while (I.amWritingCode()) 
{
    if (hasBugs()) {
        I.learn('how to fix');
    }
    I.drinkCoffee();
}
I.finishTheCode();

```

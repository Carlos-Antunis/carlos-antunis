import Developer from "./developer.class.mjs";

let I = new Developer("Carlos Antunis",
    ["mathematics", "physics"],
    {
        learned: {
            devOps: ["bash"],
            programmingLanguages: ["C", "C++", "python", "JavaScript"],
            frontEnd: ["HTML 5", "CSS 3", "bootstrap 5", "tailwind CSS", "JavaScript"],
        },
        stillWantToLearn: {
            frontEnd: ["React", "Vue", "Angular", "Next.js", "Electron", "React-native"],
            backEnd: ["Flask", "Django"],
        },
    }
);

while (I.code()) {
    if (I.amTired()) {
        I.drinkCoffee();
        continue;
    } else {
        if (I.foundABug()) {
            I.learn("how to fix it");
        } else {
            continue;
        }
    }
}

import * as HackerEarth from 'hackerearth-node'

let hack = new HackerEarth(
    'b001908b8e0d10795a6908b8a506a4f555605090'
);

let defaultTimeLimit = 1;
let defaultMemoryLimit = 323244;
let defaultSource = "";
let defaultInput = "";
let defaultLang = "Cpp";

function codeRun(
    timeLimit = defaultTimeLimit,
    memoryLimit = defaultMemoryLimit,
    source = defaultSource,
    input = defaultInput,
    language = defaultLang) {
    let config = {};
    config.time_limit = timeLimit;
    config.memory_limit = memoryLimit;
    config.source = source;
    config.input = input;
    config.language = language;

    hack.run(config)
        .then(result => {
            console.log(result)
        }).catch(err => {
        console.log(err)
    })
};

function codeCompile(
    timeLimit = defaultTimeLimit,
    memoryLimit = defaultMemoryLimit,
    source = defaultSource,
    input = defaultInput,
    language = defaultLang) {
    let config = {};
    config.time_limit = timeLimit;
    config.memory_limit = memoryLimit;
    config.source = source;
    config.input = input;
    config.language = language;

    hack.compile(config)
        .then(result => {
            console.log(result)
        }).catch(err => {
        console.log(err)
    })
};

export {codeCompile, codeRun};
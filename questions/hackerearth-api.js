const hackerEarth = require('hackerearth-node')

var hack=new hackerEarth(
    'b001908b8e0d10795a6908b8a506a4f555605090'
);
function onCompile() {
    var config = {}
    config.time_limit = 1;
    config.memory_limit = 323244;
    config.source = `print('Hello Wrld!')`;
    config.input = "";
    config.language = "Python";

    hack.run(config)
        .then(result => {
            console.log(result)
        }).catch(err => {
        console.log(err)
    })
}

// exports=module.exports={
//     hack
// }
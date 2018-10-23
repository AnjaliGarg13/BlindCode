// const hack=require('questions/hackerearth-api').hack

function onCompile() {
    var config={}
    config.time_limit=1;
    config.memory_limit=323244;
    config.source=`print('Hello World!')`;
    config.input="";
    config.language="Python";

    hack.run(config)
        .then(result=>{
            // document.getElementById('output').innerText=result;
            console.log(result)
        }).catch(err=>{
        console.log(err)
    })
}

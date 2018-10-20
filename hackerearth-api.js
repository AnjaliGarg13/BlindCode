var hackerEarth = require('hackerearth-node')

var hackerEarth=new hackerEarth(
    'b001908b8e0d10795a6908b8a506a4f555605090',
    'async=0'
);

var config={}
config.time_limit=1;
config.memory_limit=323244;
config.source=`#include <iostream>
              using namespace std;
              int main() 
              {
                  cout << "Hello, World!";
                  return 0;
              }`;
config.input="";
config.language="C++";

hackerEarth.compile(config)
.then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err)
})
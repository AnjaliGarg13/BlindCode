import {codeCompile} from "../codeCompileRun";
import {codeRun} from "../codeCompileRun";
// $(function () {
//     $("compilebutton").onClick(function () {
//         console.log('in here');
//         console.log(codeCompile());
//     })
// });
window.codeCompile = codeCompile;
document.getElementById("compilebutton").onclick = function () {
    console.log('here');
    console.log(codeCompile);
};
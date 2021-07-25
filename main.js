// tree object to import from tree file
let treeobj = require("./command/tree");
// organize object to import from organize file
let organizeobj = require("./command/organize");
// help object to import from help file
let helpobj = require("./command/help");
// input from console ; sliced because first two parameters
// are node & file name
let inputArr = process.argv.slice(2);
// command stored at 0th index of inputArr 
let command = inputArr[0];
// path of file/folder stored at 1st index of inputArr
let mainDir = inputArr[1];
// switch case 
switch(command){
    case "tree" :
        treeobj.fxn(mainDir); // function called using KEY
        break;
    case "organize" :
        organizeobj.fxn(mainDir); // function called using KEY
        break;
    case "help" :
        helpobj.fxn(); // function called using KEY
        break;
    default :
        console.log("Please Input Right Command"); // IF THE ENTERED COMMAND IS NOT VALID
        break;    
}


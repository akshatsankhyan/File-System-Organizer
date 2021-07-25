// function
function helpfn(){
    console.log(`List of all the commands :
    1. node main.js tree "directoryPath"
    2. node main.js organize "directoryPath"
    3. node main.js help`);
    return ".";
}

//code export
module.exports =  {
    fxn : helpfn
}
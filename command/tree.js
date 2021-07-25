// function
let fs = require("fs");
let path = require("path");
function treefn(src){
    if(src == undefined){
        console.log("PLEASE ENTER THE PATH");
        return;
    }
    else{
        let doesexists = fs.existsSync(src);
        if(doesexists){
                treeHelper(src , "");
        }
        else{
            console.log("PLEASE ENTER VALID PATH");
            return;
        }       
    }
}
function treeHelper(src , indent){
    // 1. CHECK  -> IS FILE OR FOLDER?
     let isFile = fs.lstatSync(src).isFile();
    if( isFile == true){
        let fileName = path.basename(src);
        console.log(indent + "├──" + fileName);
    }
    else{
        let dirName = path.basename(src)
        console.log(indent + "└──" + dirName);
        let childrens = fs.readdirSync(src);
        for(let i = 0 ; i < childrens.length ; i++){
            let childPath = path.join(src , childrens[i]);
            treeHelper(childPath , indent + "\t");
        }
    }
}

//code export
module.exports =  {
    fxn : treefn
}
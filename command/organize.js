// TYPES 
// CLASSIFY FILES ON THE BASIS OF FOLLOWING PARAMETER
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
let fs = require("fs");
let path = require("path");
// function
function organizefn(src){
    
    // 1. INPUT -> DIRECTORY PATH
    if(src == undefined){
        console.log("PLEASE ENTER THE PATH");
        return;
    }
    else{
        let pathexists = fs.existsSync(src);
        if(pathexists){
        // 2. CREATE -> ORGANIZED_FILES (a directory) WHERE ALL FILES TO BE STORED
        let destpath = path.join(src , "organized_files");
        if(fs.existsSync(destpath) == false){
        fs.mkdirSync(destpath);
        organizeHelper(src , destpath);
        }
    }
        else{
            console.log("PLEASE ENTER VALID PATH");
            return;
        }       
    }
   
    

}
function organizeHelper(src , dest){
    
    // 3. CHECK -> ALL THE ENTITIES THAT THEY ARE OF WHICH CATEGORY
    let entitynames = fs.readdirSync(src);
    //console.log(entitynames);
    for(let i = 0 ; i < entitynames.length ; i++){
        let entityAddress = path.join(src , entitynames[i]);
        let isFile = fs.lstatSync(entityAddress).isFile() ;
        if(isFile){
            let category = getcategory(entitynames[i]);
            //console.log(entitynames[i] , " belongs to ----->>>" , category);
            // 4. COPY FILES TO THAT ORGANIZED_FILES DIRECTORY
            sendFiles(entityAddress , dest , category)


    }
    }

}
function getcategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1);
    for(let type in types){
        let cTypeArray = types[type];
        for(let i = 0 ; i <cTypeArray.length ; i++){
            if(ext == cTypeArray[i] ){
                return type;
            }
        }
    }
    return "others" ;

}
function sendFiles(srcFilePath , dest , category){
    let categoryPath = path.join(dest , category);
    if(fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath);
    }
   let fileName = path.basename(srcFilePath);
   let destFilePath = path.join(categoryPath , fileName);
   fs.copyFileSync(srcFilePath , destFilePath);
   console.log(fileName , "copied to --->>" , category);
}


//code export
module.exports =  {
    fxn : organizefn 
}

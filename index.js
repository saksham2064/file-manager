import fs from "fs/promises"
import fsn from "fs"
import path from "path"

// const basepath

let files = await fs.readdir("C:\\Desktop\\coding\\sigma web development\\clear-the-clutter")
console.log(files)

let extensions = []
for(const item of files){
   let ext = item.split(".")[item.split("+").length-1]

    console.log(ext)
    if(fsn.existsSync(ext)){
        //move the file to directory
        fs.rename(item, path.join(ext, path))
    }else{
        fs.mkdir(ext)
    }
        console.log(item)
}
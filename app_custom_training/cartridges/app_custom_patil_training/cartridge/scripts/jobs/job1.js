"use strict";

function Fun1(resp){
    var Status = require('dw/system/Status');
    var File = require('dw/io/File');
    var FileWriter = require('dw/io/FileWriter');

    var folder = new File(File.IMPEX + '/src/myP/FileP/');
    if(!folder.exists()){
        folder.mkdirs();
    }
    var file = new File(File.IMPEX + '/src/myP/FileP/Newfile.txt');
    if(!file.exists()){
        file.createNewFile();
    }
    var filewriter = new FileWriter(file);
    filewriter.writeLine("Welcome Back!");
    filewriter.writeLine("Welcome Back!");
    filewriter.writeLine("Welcome Back!");
    filewriter.writeLine("Welcome Back!");
    filewriter.close();
    return new Status(Status.ERROR);
}

// function Fun2(resp){
//     var Status = require('dw/system/Status');
//     var File = require('dw/io/File');
//     var FileWriter = require('dw/io/FileWriter');

//     var folder = new File(File.IMPEX + '/src/myP/FileP/');
//     if(!folder.exists()){
//         folder.mkdirs();
//     }
//     var file = new File(File.IMPEX + '/src/myP/FileP/Newfile2.txt');
//     if(!file.exists()){
//         file.createNewFile();
//     }
//     var filewriter = new FileWriter(file);
//     filewriter.writeLine("Welcome Back!");
//     filewriter.writeLine("Welcome Back!");
//     filewriter.writeLine("Welcome Back!");
//     filewriter.writeLine("Welcome Back!");
//     filewriter.close();
//     return new Status(Status.OK);
// }

module.exports.Fun = Fun1;
// module.exports.Fun2 = Fun2;

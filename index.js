// A Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

import fs from "fs/promises";
import fsn from "fs";
import path from "path";

async function organizeFiles() {
  const basepath = "C:/web development/Javascript/nodejs/clutter";
  try {
    let files = await fs.readdir(basepath);

    for (const item of files) {
      console.log("running for", item);

      let ext = item.split(".")[item.split(".").length - 1];
      let source = path.join(basepath, item);
      let destination = path.join(basepath, ext, item);

      //to check if the file is not js & json & the files name
      if (
        ext !== "js" &&
        ext !== "json" &&
        ext !== item.split(".")[item.split(".").length > 1]
      ) {
        // organizing the files acc. to their file extension
        if (fsn.existsSync(path.join(basepath, ext))) {
          fs.rename(source, destination, (err) => {
            if (err) throw err;
            console.log(`Moved ${source} to ${destination}`);
          });
        }
        // creating the folder if its not already created
        else {
          fsn.mkdirSync(path.join(basepath, ext), { recursive: true });
          fsn.renameSync(source, destination);
        }
      }
    }
  } catch (err) {
    console.error("Error occurred while organizing files:", err);
  }
}

organizeFiles();

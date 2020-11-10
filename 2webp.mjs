import { readdirSync, promises as fsp, readFileSync, existsSync }  from "fs";
import { execFile } from "child_process"

const path = './images/.io/'

async function getFileRecursively(path, callback) { // param path must end with trailing slash
  return Promise.all(readdirSync(path).map(async file => 
    (await fsp.stat(path + file)).isDirectory()
          ? getFileRecursively(path + file + "/", callback) 
          : callback(path + file)
  ))
}

// const str = readFileSync("./.gitignore").toString().replaceAll('\r\n', "|").replaceAll('.', "\\.");
const regExp = new RegExp('(\.jpg|\.png|\.jfif)$');
async function processF (filename) {
  if(regExp.test(filename) && !existsSync(filename + '.webp')) {
    return new Promise((resolve, reject) => 
      execFile("cwebp", [filename, "-m", "6", "-q", "80", "-o", `${filename}.webp`, "-short"], (err, stdout, stderr, ...left) => {
        err ? reject(err) : resolve(stdout && stderr); // idk why info is in stderr
      })
    )
  }
}

getFileRecursively(path, processF)
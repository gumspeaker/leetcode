import { realpathSync, existsSync, rmdir, lstat } from "fs";
import { readFile, readdir, writeFile, mkdir, unlink } from "fs/promises";
import path from "path";
const pwd = realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(pwd, relativePath);
const src = resolveApp("./src");
const output = resolveApp("./output");
function deleteFolderRecursive(folderPath: string) {
  return new Promise<void>(async (resolve, reject) => {
    if (!existsSync(folderPath)) {
      resolve();
      return;
    }

    let files = await readdir(folderPath);

    const deletePromises = files.map((file) => {
      const curPath = path.join(folderPath, file);
      return new Promise<void>((resolve, reject) => {
        lstat(curPath, (err, stats) => {
          if (err) {
            reject(err);
            return;
          }

          if (stats.isDirectory()) {
            // 递归删除子文件夹
            deleteFolderRecursive(curPath).then(resolve).catch(reject);
          } else {
            // 删除文件
            unlink(curPath);
            resolve();
          }
        });
      });
    });

    Promise.all(deletePromises);
  });
}

async function build() {
  try {
    const answers = await readdir(src);
    if (existsSync(output)) {
      deleteFolderRecursive(output);
    } else {
      mkdir(output);
    }
    let promised = answers.map(async (answer) => {
      const body = await readFile(`${src}/${answer}`, "utf-8");
      await writeFile(`${output}/${answer}`, `export default \`${body}\``);
    });
    Promise.all(promised);
    await writeFile(`${output}/index.ts`, `export default "hello word"`);
  } catch (error) {
    console.error(error);
  }
}
build();

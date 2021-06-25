const cp = require("child_process");
const { getPackagesSync } = require("@lerna/project");
const ora = require("ora");
const chalk = require("chalk");

const spinner = ora(`${chalk.blue("Building...")}`).start();
const pkgs = getPackagesSync()
  .map((pkg) => pkg.name)
  .filter((name) => name.includes("@c3-element-plus") && !name.includes("transition") && !name.includes("utils"));
const STEP = 4;
const START = 0;
const build = (start, end) => {
  let s = start;
  let e = end;
  const c1 = cp.spawn("node", ["./build/build.component.js", s, e]);
  c1.stdout.on("data", (data) => {
    spinner.info(`${chalk.blue(data)}`);
  });
  c1.stderr.on("data", (data) => {
    spinner.warn(`${chalk.red(data)}`);
  });
  c1.on("close", (code) => {
    s += STEP;
    e += STEP;
    if (s > pkgs.length) {
      spinner.succeed(`${chalk.green("build success. Exit code " + code)}`);
      return
    }
    build(s,e)
  });
};
build(START,STEP)

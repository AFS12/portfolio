import { execa } from "execa";
import fs from "fs";
import path from "path";

const projectDir = process.cwd();
const rootDir = path.resolve(projectDir, "..");

(async () => {
  try {
    console.log("Building started...");
    await execa("npm", ["run", "build"], {
      cwd: projectDir,
      stdio: "inherit",
    });

    const folderName = fs.existsSync(
      path.join(projectDir, "dist")
    )
      ? "dist"
      : "build";
    await execa("git", ["checkout", "--orphan", "gh-pages"], {
      cwd: rootDir,
      stdio: "inherit",
    });

    await execa(
      "git",
      ["--work-tree", path.join(projectDir, folderName), "add", "--all"],
      { cwd: rootDir, stdio: "inherit" }
    );

    await execa(
      "git",
      ["--work-tree", path.join(projectDir, folderName), "commit", "-m", "gh-pages"],
      { cwd: rootDir, stdio: "inherit" }
    );

    await execa(
      "git",
      ["push", "origin", "HEAD:gh-pages", "--force"],
      { cwd: rootDir, stdio: "inherit" }
    );

    await execa("git", ["checkout", "-f", "master"], {
      cwd: rootDir,
      stdio: "inherit",
    });

    await execa("git", ["branch", "-D", "gh-pages"], {
      cwd: rootDir,
      stdio: "inherit",
    });

    console.log("Successfully deployed 🚀");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();
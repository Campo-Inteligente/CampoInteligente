const { execSync } = require("child_process");
const fs = require("fs");

function getGitInfo() {
  try {
    execSync("git rev-parse --is-inside-work-tree", { stdio: "ignore" });
    const commitCount = execSync("git rev-list --count HEAD").toString().trim();
    const commitSha = execSync("git rev-parse --short HEAD").toString().trim();
    const tag = execSync("git describe --tags --abbrev=0").toString().trim();

    return {
      version: `0.${commitCount}.0`,
      commit: commitSha,
      tag,
    };
  } catch {
    return null;
  }
}

try {
  const buildDate = new Date().toISOString();

  const gitInfo = getGitInfo();

  const version = gitInfo?.version || process.env.APP_VERSION || "0.0.0";
  const commit = gitInfo?.commit || process.env.APP_COMMIT || "unknown";
  const tag = gitInfo?.tag || process.env.APP_TAG || null;

  const versionInfo = {
    version,
    commit,
    date: buildDate,
    tag,
  };

  if (!fs.existsSync("./public")) {
    fs.mkdirSync("./public", { recursive: true });
  }

  fs.writeFileSync("./public/version.json", JSON.stringify(versionInfo, null, 2));

  console.log(`✅ version.json gerado com sucesso!
→ Versão: ${version} (${commit})
→ Data: ${buildDate}${tag ? `\n→ Tag: ${tag}` : ""}`);
} catch (err) {
  console.warn("⚠️  Erro ao gerar version.json.");
  console.error(err);
}

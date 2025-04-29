const { execSync } = require("child_process");
const fs = require("fs");

try {
  const commitCount = execSync("git rev-list --count HEAD").toString().trim();
  const commitSha = execSync("git rev-parse --short HEAD").toString().trim();
  const buildDate = new Date().toISOString();

  const version = `v0.${commitCount}`;

  const versionInfo = {
    version,
    commit: commitSha,
    date: buildDate,
  };

  fs.writeFileSync("./public/version.json", JSON.stringify(versionInfo, null, 2));
  console.log("✅ version.json gerado:", versionInfo);
} catch (err) {
  console.error("❌ Erro ao gerar version.json:", err);
  process.exit(1);
}

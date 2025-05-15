const { execSync } = require("child_process");
const fs = require("fs");

try {
  // Verifica se está dentro de um repositório Git
  execSync("git rev-parse --is-inside-work-tree", { stdio: 'ignore' });

  // Obtém o número total de commits
  const commitCount = execSync("git rev-list --count HEAD").toString().trim();

  // Obtém o hash do último commit (curto)
  const commitSha = execSync("git rev-parse --short HEAD").toString().trim();

  // Obtém a data atual em formato ISO
  const buildDate = new Date().toISOString();

  // Tenta obter a última tag, se existir
  let tag = null;
  try {
    tag = execSync("git describe --tags --abbrev=0").toString().trim();
  } catch {
    tag = null; // Sem tag encontrada
  }

  // Define a versão no formato SemVer-like (ex: 0.23.0)
  const version = `0.${commitCount}.0`;

  // Monta o objeto de versão
  const versionInfo = {
    version,
    commit: commitSha,
    date: buildDate,
    tag,
  };

  // Garante que a pasta ./public existe
  const path = "./public";
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }

  // Salva o JSON na pasta public
  fs.writeFileSync(`${path}/version.json`, JSON.stringify(versionInfo, null, 2));

  // Exibe mensagem de sucesso
  console.log(`✅ version.json gerado com sucesso!\n→ Versão: ${version}\n→ Commit: ${commitSha}\n→ Data: ${buildDate}${tag ? `\n→ Tag: ${tag}` : ''}`);
} catch (err) {
  console.warn("⚠️  Não foi possível gerar version.json (repositório Git ausente?). Ignorando erro para ambiente de build.");
  console.error(err); // <-- Adicione isso para ver a causa real
}

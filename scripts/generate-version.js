const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Caminho do package.json
const packageJsonPath = path.join(__dirname, "..", "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const { name, description, version } = packageJson;

// Data atual em ISO
const buildDate = new Date().toISOString();

// Função para tentar executar um comando Git e retornar null em caso de erro
function tryGitCommand(command) {
  try {
    return execSync(command).toString().trim();
  } catch {
    return null;
  }
}

// Tenta obter informações do Git, com fallback
const commit = tryGitCommand("git rev-parse --short HEAD") || "local";
const tag = tryGitCommand("git describe --tags --abbrev=0") || `v${version}`;

// Monta o objeto final
const versionInfo = {
  name: name || "campo-inteligente",
  description:
    description ||
    "Campo Inteligente - Aplicativo de gestão agrícola para o campo inteligente",
  version: version,
  commit: commit,
  date: buildDate,
  tag: tag
};

// Caminho para a pasta public/
const publicDir = path.join(__dirname, "..", "public");

// Cria a pasta public/ caso não exista
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Escreve o arquivo version.json
fs.writeFileSync(
  path.join(publicDir, "version.json"),
  JSON.stringify(versionInfo, null, 2)
);

// Mensagens no terminal
console.log("✅ version.json gerado com sucesso!");
console.log(`→ Nome: ${versionInfo.name}`);
console.log(`→ Descrição: ${versionInfo.description}`);
console.log(`→ Versão: ${versionInfo.version}`);
console.log(`→ Commit: ${versionInfo.commit}`);
console.log(`→ Data: ${versionInfo.date}`);
console.log(`→ Tag: ${versionInfo.tag}`);

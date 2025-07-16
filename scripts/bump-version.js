/*Vamos adicionar um script chamado bump-version.js que:
Lê o package.json;
Incrementa o patch da versão (ex: 1.2.3 → 1.2.4);
Salva a nova versão.*/
// scripts/bump-version.js
const fs = require('fs');
const path = require('path');

const pkgPath = path.join(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

const versionParts = pkg.version.split('.').map(Number);

if (versionParts.length !== 3 || versionParts.some(isNaN)) {
  console.error('❌ Versão inválida no package.json');
  process.exit(1);
}

// Incrementa o patch
versionParts[2]++;
pkg.version = versionParts.join('.');

// Atualiza a data do build
pkg.date = new Date().toISOString();

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

console.log(`✅ Versão incrementada para ${pkg.version}`);

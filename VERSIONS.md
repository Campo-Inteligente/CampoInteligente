
# 📦 VERSIONS.md

### Versão: 0.146.0 (31ab060)

Este documento registra as versões utilizadas no projeto **campo-inteligente** para garantir consistência e facilitar a manutenção entre os ambientes de desenvolvimento e produção.
---

## 🧰 Ferramentas e Bibliotecas

| Dependência                        | Versão    | Tipo            |
|------------------------------------|-----------|------------------|
| next                               | ^15.3.0   | dependência      |
| react                              | 19.0.0    | dependência      |
| react-dom                          | 19.0.0    | dependência      |
| bootstrap                          | ^5.3.5    | dependência      |
| react-bootstrap                    | ^2.10.9   | dependência      |
| @popperjs/core                     | ^2.11.8   | dependência      |
| @fortawesome/fontawesome-svg-core  | ^6.7.2    | dependência      |
| @fortawesome/free-brands-svg-icons | ^6.7.2    | dependência      |
| @fortawesome/react-fontawesome     | ^0.2.2    | dependência      |
| framer-motion                      | ^12.7.4   | dependência      |
| next-images                        | ^1.8.5    | dependência      |
| nodemailer                         | ^6.10.0   | dependência      |
| eslint                             | 9.23.0    | devDependência   |
| eslint-config-next                 | 15.2.3    | devDependência   |

---

## 📁 Padrões de Arquivos

- `package.json`: Declara as dependências e scripts do projeto.
- `package-lock.json`: 🔒 Garante a instalação das **mesmas versões exatas** em todas as máquinas e servidores.

> ✅ **Sempre comitar ambos os arquivos após qualquer alteração de dependência.**

---

## 🏗️ Instruções para rodar o projeto

**1. Instalar dependências:**
```bash
npm install
```

**2. Construir o projeto:**
```bash
npx next build
```

**3. Rodar localmente:**
```bash
npm run dev
```

**4. Acessar no navegador:**
```
http://localhost:3000
```

---

## 🔄 Boas práticas

- ❗ Não atualize versões sem antes consultar a equipe.
- 📄 Em caso de inclusão de novas bibliotecas, registre neste arquivo (`VERSIONS.md`).
- 🔄 Sempre mantenha `package-lock.json` sincronizado e versionado no GitHub.

---

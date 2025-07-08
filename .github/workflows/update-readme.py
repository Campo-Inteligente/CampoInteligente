import os
from datetime import datetime
import pytz
import shutil

# Caminho base do repositório (2 níveis acima do script)
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))

# Diretório onde os arquivos serão gerados
DOC_DIR = os.path.join(BASE_DIR, "documentos")
os.makedirs(DOC_DIR, exist_ok=True)  # Cria se não existir

# Arquivos principais
README_FILE = os.path.join(DOC_DIR, "README.md")
VERSAO_FILE = os.path.join(DOC_DIR, "versao.txt")

# Extensões e diretórios a ocultar na árvore
OCULTA_EXT = {".yml", ".py", ".git"}
OCULTA_DIR = {".git", ".github", ".gitignore", ".env", ".env.local"}

# Timezone para horário de atualização
FUSO_HORARIO_BR = pytz.timezone("America/Sao_Paulo")


def inicializar_versao():
    if not os.path.exists(VERSAO_FILE):
        with open(VERSAO_FILE, "w") as file:
            file.write("1")
        return 1
    with open(VERSAO_FILE, "r") as file:
        try:
            return int(file.read().strip())
        except ValueError:
            return 1


def incrementar_versao(versao_atual):
    nova = versao_atual + 1
    with open(VERSAO_FILE, "w") as file:
        file.write(str(nova))
    return nova


def obter_data_hora():
    agora = datetime.now(FUSO_HORARIO_BR)
    return agora.strftime("%d/%m/%Y %H:%M:%S")


def gerar_arvore(path, ignorar=None, prefixo="", is_root=True, nome_raiz=None):
    ignorar = set(ignorar) if ignorar else set()
    linhas = []

    if is_root:
        nome_raiz = nome_raiz or os.path.basename(os.path.normpath(path)) or "."
        linhas.append(f"📂 {nome_raiz}")

    try:
        itens = sorted(os.listdir(path))
    except (FileNotFoundError, PermissionError) as e:
        return f"{prefixo}[Erro ao acessar {path}: {e}]"

    itens_filtrados = []
    for item in itens:
        if item in ignorar:
            continue
        caminho = os.path.join(path, item)
        if os.path.isdir(caminho):
            itens_filtrados.append(item)
        else:
            ext = os.path.splitext(item)[1].lower()
            if ext not in OCULTA_EXT:
                itens_filtrados.append(item)

    total = len(itens_filtrados)
    for i, item in enumerate(itens_filtrados):
        caminho = os.path.join(path, item)
        ultimo = (i == total - 1)
        ponteiro = "└── " if ultimo else "├── "

        if os.path.isdir(caminho):
            try:
                conteudo_dir = [
                    f for f in os.listdir(caminho)
                    if f not in ignorar and (
                        os.path.isdir(os.path.join(caminho, f)) or
                        os.path.splitext(f)[1].lower() not in OCULTA_EXT
                    )
                ]
            except (FileNotFoundError, PermissionError):
                conteudo_dir = []

            emoji = "📂" if conteudo_dir else "🗂️"
            linhas.append(f"{prefixo}{ponteiro}{emoji} {item}")

            if conteudo_dir:
                sub_prefixo = prefixo + ("    " if ultimo else "│   ")
                subarvore = gerar_arvore(caminho, ignorar, sub_prefixo, is_root=False)
                linhas.append(subarvore)
        else:
            linhas.append(f"{prefixo}{ponteiro}📄 {item}")

    return "\n".join(linhas)


def gerar_readme(versao, data_hora):
    with open(README_FILE, "w", encoding="utf-8") as readme:
        readme.write("# 🍃 CampoInteligente\n\n")
        readme.write("Plataforma para agricultura familiar com IA via WhatsApp.\n\n")
        readme.write("## ℹ️ Informações do Projeto\n\n")
        readme.write("```\n")
        readme.write(f"Versão...............: {versao}\n")
        readme.write(f"Atualizado em........: {data_hora}\n")
        readme.write("Responsável..........: Marcos Morais\n")
        readme.write("```\n\n")

        readme.write("## 🌳 Estrutura do Repositório\n\n")
        readme.write("```\n")
        readme.write(gerar_arvore(BASE_DIR, OCULTA_DIR))
        readme.write("\n```\n")


def atualizar_readme():
    versao_atual = inicializar_versao()
    nova_versao = incrementar_versao(versao_atual)
    data_hora = obter_data_hora()
    gerar_readme(nova_versao, data_hora)


if __name__ == "__main__":
    atualizar_readme()

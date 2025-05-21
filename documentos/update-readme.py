# update-readme.py

# ✅ Atualiza ou cria o README.md com a lista de arquivos da pasta atual
# ✅ Cria versao.txt se não existir e faz controle de versões automaticamente
# ✅ Adiciona data e hora da última atualização no horário de Brasília

import os
from datetime import datetime
import pytz

# Constantes
VERSAO_FILE = "versao.txt"
README_FILE = "README.md"
FUSO_HORARIO_BRASIL = pytz.timezone("America/Sao_Paulo")

def inicializar_versao():
    """Garante que o arquivo de versão exista e retorna o valor atual."""
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
    """Incrementa e salva a nova versão."""
    nova_versao = versao_atual + 1
    with open(VERSAO_FILE, "w") as file:
        file.write(str(nova_versao))
    return nova_versao

def obter_data_hora_brasilia():
    """Retorna data e hora atual no fuso de Brasília."""
    agora = datetime.now(FUSO_HORARIO_BRASIL)
    return agora.strftime("%d/%m/%Y %H:%M:%S")

def listar_arquivos():
    """Retorna a lista de arquivos da pasta atual, ignorando os arquivos definidos."""
    ignorar = {README_FILE, VERSAO_FILE, ".gitignore"}
    return sorted([
        f for f in os.listdir(".")
        if os.path.isfile(f) and f not in ignorar
    ])

def gerar_readme(versao, data_hora, arquivos):
    """Cria ou sobrescreve o README.md com as informações formatadas."""
    with open(README_FILE, "w", encoding="utf-8") as readme:
        readme.write("# CampoInteligente\n\n")
        readme.write("Bem-vindo ao **CampoInteligente**, uma plataforma voltada para a agricultura familiar, oferecendo um chatbot com inteligência artificial que integra dados meteorológicos e de mercado para auxiliar no plantio, manejo e colheita. A navegação é simples, com foco na interação via WhatsApp.\n\n")
        readme.write("## 📄 Lista de arquivos da raiz deste repositório, atualizada automaticamente.\n\n")
        readme.write("**Sistema:** Campo Inteligente\n\n")
        readme.write(f"**Versão:** {versao} (AUTO-INCREMENTO)\n\n")
        readme.write(f"**Data de Atualização:** {data_hora}\n\n")
        readme.write("**Responsável:** Marcos Morais\n\n")
        readme.write("## Listagem de Arquivos\n\n")
        for arquivo in arquivos:
            readme.write(f"- {arquivo}\n")

def atualizar_readme():
    """Fluxo principal de execução."""
    versao_atual = inicializar_versao()
    nova_versao = incrementar_versao(versao_atual)
    data_hora = obter_data_hora_brasilia()
    arquivos = listar_arquivos()
    gerar_readme(nova_versao, data_hora, arquivos)

if __name__ == "__main__":
    atualizar_readme()

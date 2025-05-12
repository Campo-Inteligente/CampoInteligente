# update-readme.py

# ✅ Gera ou atualiza o README.md com a lista de arquivos da pasta atual (exceto versao.txt e README.md)
# ✅ Incrementa a versão automaticamente e registra a data e hora da atualização em horário de Brasília

import os
from datetime import datetime
import pytz

# Caminho relativo (este script deve ser executado dentro da pasta 'documentos')
VERSAO_FILE = "versao.txt"
README_FILE = "README.md"

# Definir o fuso horário para Brasília
FUSO_HORARIO_BRASIL = pytz.timezone("America/Sao_Paulo")

def obter_versao_atual():
    """Lê a versão atual do arquivo de controle."""
    if os.path.exists(VERSAO_FILE):
        with open(VERSAO_FILE, "r") as file:
            return int(file.read().strip())
    return 1

def incrementar_versao(nova_versao):
    """Atualiza o arquivo de controle com a nova versão."""
    with open(VERSAO_FILE, "w") as file:
        file.write(str(nova_versao))

def obter_data_hora_atual():
    """Obtém a data e hora atual formatadas para o fuso de Brasília."""
    hora_atual = datetime.now(FUSO_HORARIO_BRASIL)
    return hora_atual.strftime("%d/%m/%Y %H:%M:%S")

def atualizar_readme():
    arquivos = [
        f for f in os.listdir(".")
        if os.path.isfile(f) and f not in [README_FILE, VERSAO_FILE, ".gitignore"]
    ]

    # Incrementa versão
    versao_atual = obter_versao_atual()
    nova_versao = versao_atual + 1
    incrementar_versao(nova_versao)

    data_hora_atualizacao = obter_data_hora_atual()

    with open(README_FILE, "w", encoding="utf-8") as readme:
        readme.write("# CampoInteligente.\n\n")
        readme.write("Bem-vindo ao **CampoInteligente**, uma plataforma voltada para a agricultura familiar, oferecendo um chatbot com inteligência artificial que integra dados meteorológicos e de mercado para auxiliar no plantio, manejo e colheita. A navegação é simples, com foco na interação via WhatsApp.\n\n")
        readme.write("## 📄 Lista de arquivos da raiz deste repositório, atualizado a cada modificação.\n\n")
        readme.write("**Sistema:** Campo Inteligente\n\n")
        readme.write(f"**Versão:** {nova_versao} (AUTO-INCREMENTO)\n\n")
        readme.write(f"**Data de Atualização:** {data_hora_atualizacao}\n\n")
        readme.write("**Responsável:** Marcos Morais\n\n")
        readme.write("## Listagem de Arquivos\n\n")

        for arquivo in sorted(arquivos):
            readme.write(f"- {arquivo}\n")

if __name__ == "__main__":
    atualizar_readme()

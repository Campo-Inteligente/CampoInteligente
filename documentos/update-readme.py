import os
from datetime import datetime
import pytz

# Constantes usadas no script
VERSAO_FILE = "versao.txt"        # Arquivo que controla a versão do README
README_FILE = "README.md"         # Arquivo README a ser gerado/atualizado
UPDATE_FILE = "update-readme.py"  # Nome deste script (para ignorar na listagem)
FUSO_HORARIO_BRASIL = pytz.timezone("America/Sao_Paulo")  # Fuso horário para data/hora

def inicializar_versao():
    """
    Garante que o arquivo de versão exista.
    Se não existir, cria com valor inicial 1.
    Retorna o número da versão atual (int).
    """
    if not os.path.exists(VERSAO_FILE):
        with open(VERSAO_FILE, "w") as file:
            file.write("1")
        return 1
    with open(VERSAO_FILE, "r") as file:
        try:
            return int(file.read().strip())
        except ValueError:
            # Caso o conteúdo seja inválido, reinicia a versão em 1
            return 1

def incrementar_versao(versao_atual):
    """
    Incrementa a versão passada em 1 e salva no arquivo de controle.
    Retorna a nova versão (int).
    """
    nova_versao = versao_atual + 1
    with open(VERSAO_FILE, "w") as file:
        file.write(str(nova_versao))
    return nova_versao

def obter_data_hora_brasilia():
    """
    Obtém a data e hora atuais no fuso horário de Brasília,
    formatadas como string "dd/mm/yyyy HH:MM:SS".
    """
    agora = datetime.now(FUSO_HORARIO_BRASIL)
    return agora.strftime("%d/%m/%Y %H:%M:%S")

def listar_arquivos():
    """
    Retorna uma lista ordenada dos arquivos presentes no diretório atual,
    ignorando arquivos específicos definidos na constante 'ignorar'.
    Somente arquivos (não diretórios) são listados.
    """
    ignorar = {README_FILE, VERSAO_FILE, UPDATE_FILE, ".gitignore"}
    return sorted([
        f for f in os.listdir(".")
        if os.path.isfile(f) and f not in ignorar
    ])

def gerar_arvore():
    """
    Gera uma representação textual simples, no estilo 'tree' do DOS/Linux,
    para os arquivos e pastas no diretório atual (nível raiz apenas).
    Ignora arquivos/pastas definidos na constante 'ignorar'.
    Retorna a árvore como uma string formatada.
    """
    ignorar = {README_FILE, VERSAO_FILE, UPDATE_FILE, ".gitignore"}
    itens = sorted([f for f in os.listdir(".") if f not in ignorar])
    linhas = []
    total = len(itens)
    for i, item in enumerate(itens):
        prefixo = "├── "  # Prefixo padrão para todos, menos o último
        if i == total - 1:
            prefixo = "└── "  # Último item recebe prefixo diferente
        linhas.append(f"{prefixo}{item}")
    return "\n".join(linhas)

def gerar_readme(versao, data_hora, arquivos):
    """
    Cria ou sobrescreve o arquivo README.md com as informações da versão,
    data de atualização, lista de arquivos e a estrutura em árvore do diretório raiz.
    Recebe:
        - versao: número da versão atual (int)
        - data_hora: string da data/hora formatada
        - arquivos: lista de arquivos no diretório raiz
    """
    with open(README_FILE, "w", encoding="utf-8") as readme:
        readme.write("# CampoInteligente\n\n")
        readme.write(
            "Bem-vindo ao **CampoInteligente**, uma plataforma voltada para a agricultura familiar, "
            "oferecendo um chatbot com inteligência artificial que integra dados meteorológicos e de mercado "
            "para auxiliar no plantio, manejo e colheita. A navegação é simples, com foco na interação via WhatsApp.\n\n"
        )
        readme.write("## 📄 Lista de arquivos da raiz deste repositório, atualizada automaticamente.\n\n")
        readme.write("**Sistema:** [Campo Inteligente](https://www.campointeligente.agr.br/)\n\n")
        readme.write(f"**Versão:** {versao} (AUTO-INCREMENTO)\n\n")
        readme.write(f"**URL:** https://www.campointeligente.agr.br/\n\n")
        readme.write(f"**Data de Atualização:** {data_hora}\n\n")
        readme.write("**Responsável:** Marcos Morais\n\n")

        # Lista simples de arquivos
        readme.write("## Listagem de Arquivos\n\n")
        for arquivo in arquivos:
            readme.write(f"- {arquivo}\n")

        # Seção adicional: estrutura em árvore
        readme.write("\n## 🌳 Estrutura em Árvore da Raiz do Repositório\n\n")
        readme.write("```\n")  # Bloco de código para preservar formatação
        readme.write(gerar_arvore())
        readme.write("\n```\n")

def atualizar_readme():
    """
    Função principal do script:
    - Inicializa ou lê a versão atual
    - Incrementa a versão
    - Obtém a data/hora atual em Brasília
    - Lista os arquivos do diretório atual
    - Gera o README.md com todas as informações
    """
    versao_atual = inicializar_versao()
    nova_versao = incrementar_versao(versao_atual)
    data_hora = obter_data_hora_brasilia()
    arquivos = listar_arquivos()
    gerar_readme(nova_versao, data_hora, arquivos)

if __name__ == "__main__":
    atualizar_readme()
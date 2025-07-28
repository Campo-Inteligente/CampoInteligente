#!/bin/bash
#git add .
#git commit -m "WIP: mudanças locais antes do pull"
#git pull --no-edit
#if [ $? -ne 0 ]; then
#  echo "Erro ao atualizar o repositório local. Verifique os conflitos e tente novamente."
#  exit 1
#fi
#echo "Repositório local atualizado com sucesso!"
#read -p "Pressione Enter para continuar..."

#!/bin/bash

# Adicionar a chave ao agente SSH
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
ssh -T git@github.com

echo "📦 Pegando atualizações no github.com..."

# Garante que estamos no diretório correto
cd "$(dirname "$0")" || {
  echo "❌ Erro ao acessar diretório do projeto."
  exit 1
}

# Busca atualizações do GitHub
git fetch origin

# Reseta forçadamente para o estado mais recente da branch main
git reset --hard origin/main

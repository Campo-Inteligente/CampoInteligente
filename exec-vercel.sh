#!/bin/bash

REPO_LOCAL="/var/www/campointeligente-site"
DESTINO="git@github.com:marcosmoraisjr/CampoInteligente.git"
ORIGEM="git@github.com:restic36/startup-campo-inteligente-site.git"

echo "⚠️  ATENÇÃO: Você está prestes a espelhar o repositório RESTIC36 no repositório da Vercel:"
echo "    Origem local: $REPO_LOCAL"
echo "    Destino:      $DESTINO"
echo
read -p "❓ Deseja realmente continuar e sobrescrever o repositório de destino? (sim/não): " confirmacao

if [[ "$confirmacao" != "sim" ]]; then
    echo "❌ Operação cancelada pelo usuário."
    exit 1
fi

echo "📦 Acessando repositório local..."
cd "$REPO_LOCAL" || {
    echo "❌ Erro: diretório $REPO_LOCAL não encontrado."
    exit 1
}

echo "🔍 Verificando repositórios remotos atuais:"
git remote -v

echo "➖ Removendo remoto 'destino' se existir..."
git remote remove destino 2>/dev/null

echo "➕ Adicionando repositório de destino via SSH..."
git remote add destino "$DESTINO"

echo "🚀 Espelhando conteúdo para o destino (push --mirror)..."
if git push destino --mirror; then
    echo "✅ Espelhamento concluído com sucesso!"
else
    echo "❌ Falha durante o push. Verifique sua chave SSH ou permissões."
    exit 1
fi

echo "🔍 Verificando repositório remoto atual:"
git remote -v
git status

echo
echo "✅ Projeto atualizado e publicado."
echo "🌐 Servidor de homologação: http://campointeligente.ddns.com.br:21081/"
echo "🌐 Servidor de produção ..: http://www.campointeligente.agr.br/"
echo

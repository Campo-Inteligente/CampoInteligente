@echo off
setlocal

set REPO_LOCAL=D:\Dev\Projetos_RESTIC36\Equipe_11\startup-campo-inteligente-site
set DESTINO=https://github.com/marcosmoraisjr/CampoInteligente.git
set ORIGEM=https://github.com/restic36/startup-campo-inteligente-site.git

echo ⚠️  ATENÇÃO: Você está prestes a espelhar o repositório RESTIC36 no repositório da Vercel:
echo     Origem local: %REPO_LOCAL%
echo     Destino:      %DESTINO%
echo.
set /p confirmacao=❓ Deseja realmente continuar e sobrescrever o repositório de destino? (sim/não): 

if /I not "%confirmacao%"=="sim" (
    echo ❌ Operação cancelada pelo usuário.
    exit /b
)

echo 📦 Acessando repositório local...
cd /d "%REPO_LOCAL%" || (
    echo ❌ Erro: diretório %REPO_LOCAL% não encontrado.
    exit /b
)

echo 🔍 Verificando repositórios remotos atuais:
git remote -v

echo ➖ Removendo remoto 'destino' se existir...
git remote remove destino 2>nul

echo ➕ Adicionando repositório de destino via HTTPS...
git remote add destino %DESTINO%

echo 🚀 Espelhando conteúdo para o destino (push --mirror)...
git push destino --mirror

if %ERRORLEVEL% EQU 0 (
    echo ✅ Espelhamento concluído com sucesso!
) else (
    echo ❌ Falha durante o push. Verifique o token HTTPS ou permissões.
    exit /b
)

echo 🔍 Verificando repositório remoto atual:
git remote -v
git status

echo.
echo ✅ Projeto atualizado e publicado.
echo 🌐 Servidor de homologação: http://campointeligente.ddns.com.br:21081/
echo 🌐 Servidor de produção ..: http://www.campointeligente.agr.br/
echo.

endlocal

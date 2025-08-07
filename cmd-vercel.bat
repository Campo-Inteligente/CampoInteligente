@echo off
chcp 65001 >nul
setlocal


:: Caminhos e URLs
set "REPO_LOCAL=D:\Dev\Projetos_RESTIC36\Equipe_11\startup-campo-inteligente-site"
set "VERCEL=https://github.com/marcosmoraisjr/CampoInteligente.git"
set "RESTIC36=https://github.com/restic36/startup-campo-inteligente-site.git"
set "COMMIT_MSG=Atualização automática via script .bat"

echo ⚠️  ATENÇÃO: Você está prestes a espelhar o repositório RESTIC36 no repositório da Vercel:
echo     Origem local: %REPO_LOCAL%
echo     Origem remota (RESTIC36): %RESTIC36%
echo     Destino remoto (VERCEL):  %VERCEL%
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

echo ➖ Removendo remoto 'vercel' se existir...
git remote remove vercel 2>nul

echo ➕ Adicionando repositório de destino (VERCEL) via HTTPS...
git remote add vercel %VERCEL%

echo 🔄 Preparando alterações para commit...

:: Adiciona arquivos modificados e novos
git add -A

:: Remove arquivos deletados
for /f "delims=" %%f in ('git ls-files --deleted') do (
    git rm "%%f"
)

:: Verifica se há algo para commitar
git diff --cached --quiet
if %ERRORLEVEL% EQU 1 (
    echo 📝 Criando commit com mensagem: "%COMMIT_MSG%"
    git commit -m "%COMMIT_MSG%"
) else (
    echo ⚠️ Nenhuma alteração detectada para commit.
)

echo 🚀 Espelhando conteúdo para o destino (push --mirror)...
git push vercel --mirror

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

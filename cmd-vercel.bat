@echo off
setlocal enabledelayedexpansion

:: Caminho real do repositório local
set "REPO_LOCAL=D:\Dev\Projetos_RESTIC36\Equipe_11\startup-campo-inteligente-site"
set "DESTINO=git@github.com:marcosmoraisjr/CampoInteligente.git"

echo ATENCAO: Voce esta prestes a espelhar o repositório RESTIC36 em dois destinos:
echo     Origem local: %REPO_LOCAL%
echo     Repositório 1 (origin): já configurado
echo     Repositório 2 (destino): %DESTINO%
echo.

set /p confirmacao=Deseja realmente continuar e sobrescrever os repositórios de destino? (sim/nao): 

if /I not "%confirmacao%"=="sim" (
    echo Operacao cancelada pelo usuario.
    exit /b 0
)

echo Acessando repositório local...
cd /d "%REPO_LOCAL%" || (
    echo Erro: diretório %REPO_LOCAL% nao encontrado.
    exit /b 1
)

echo Verificando repositórios remotos atuais:
git remote -v

echo Removendo repositório remoto 'destino' (se existir)...
git remote remove destino 2>nul

echo Adicionando repositório de destino...
git remote add destino %DESTINO%

echo.
echo Espelhando conteúdo para o repositório original (origin)...
git push origin --mirror
if %errorlevel% neq 0 (
    echo Falha ao enviar para origin. Verifique permissões ou conflitos.
)

echo.
echo Espelhando conteúdo para o repositório destino (CampoInteligente)...
git push destino --mirror
if %errorlevel% neq 0 (
    echo Falha ao enviar para destino. Verifique permissões ou conflitos.
)

echo.
echo Verificando repositórios remotos finais:
git remote -v
git status

echo.
echo Projeto atualizado e publicado em ambos os repositórios.
echo Servidor de homologacao: http://campointeligente.ddns.com.br:21081/
echo Servidor de producao ..: http://campointeligente.agr.br/
echo.

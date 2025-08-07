@echo off
setlocal enabledelayedexpansion

:: Caminho real do repositório local
set "REPO_LOCAL=D:\Dev\Projetos_RESTIC36\Equipe_11\startup-campo-inteligente-site"
set "DESTINO=git@github.com:marcosmoraisjr/CampoInteligente.git"
set "COMMIT_MSG=Atualização automática via script .bat"

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
echo Adicionando arquivos modificados e não rastreados...
git add .

echo Criando commit com mensagem: "%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%" 2>nul
if %errorlevel% neq 0 (
    echo Nenhuma alteração para commit ou erro ao commitar.
)

echo.
echo Enviando para o repositório original (origin)...
git push origin main

echo.
echo Enviando para o repositório destino (CampoInteligente)...
git push destino main

echo.
echo Verificando repositórios remotos finais:
git remote -v
git status

echo.
echo Projeto atualizado e publicado em ambos os repositórios.
echo Servidor de homologacao: http://campointeligente.ddns.com.br:21081/
echo Servidor de producao ..: http://campointeligente.agr.br/
echo.

# 📄 Documento de Requisitos do Sistema  
**Sistema:** Campo Inteligente  
**Versão:** 1.0  
**Data:** 12/05/2025  
**Responsável:** Artur  

O site [campointeligente.agr.br](https://campointeligente.agr.br) é uma plataforma voltada para a agricultura familiar, oferecendo um chatbot com inteligência artificial que integra dados meteorológicos e de mercado para auxiliar no plantio, manejo e colheita. A navegação é simples, com foco na interação via WhatsApp.

---

## 1. Visão Geral  

O sistema permite que usuários autenticados tenham acesso a funcionalidades voltadas à gestão agrícola, com foco em orientações baseadas em dados climáticos e de mercado. Cada funcionalidade está vinculada a uma conta de usuário, garantindo segurança, rastreabilidade e personalização.

---

## 2. Requisitos Funcionais  

### 2.1. Autenticação e Controle de Acesso  

- **RF01 - Cadastro de Usuário**  
  - O sistema deve permitir que o usuário se cadastre utilizando e-mail e senha.  
  - O e-mail deve ser único por usuário.  
  - A senha deve ter no mínimo 8 caracteres, contendo letras e números.  

- **RF02 - Login de Usuário**  
  - O sistema deve permitir login via e-mail e senha.  
  - Após login bem-sucedido, o usuário terá acesso apenas às suas funcionalidades e dados.  

- **RF03 - Recuperação de Senha**  
  - O sistema deve fornecer uma funcionalidade de recuperação de senha via e-mail.  

- **RF04 - Logout Seguro**  
  - O sistema deve permitir logout manual e automático por inatividade.  

- **RF05 - Sessões Seguras**  
  - O sistema deve utilizar tokens seguros (JWT ou similar) para controle de sessão.  

---

### 2.2. Funcionalidades Inteligentes  

- **RF06 - Recomendação de Plantio com Base no Clima**  
  - O sistema deve indicar os melhores cultivos para o período com base em dados meteorológicos.  
  - Deve considerar previsões de chuva, temperatura e umidade do solo.  

- **RF07 - Alerta de Condições Críticas**  
  - Deve emitir alertas via WhatsApp quando houver previsão de geada, seca, chuvas intensas ou pragas.  

- **RF08 - Sugestões de Manejo**  
  - O sistema deve sugerir boas práticas de manejo baseadas na cultura informada e na região do produtor.  
  - As sugestões devem considerar o estágio do cultivo.  

- **RF09 - Consulta de Preços de Mercado**  
  - Deve informar preços médios atualizados de produtos agrícolas por região.  
  - Os dados podem ser obtidos via integração com APIs de mercado.  

---

### 2.3. Funcionalidades Complementares  

- **RF10 - Histórico de Produção**  
  - O usuário pode registrar produções anteriores com data, cultura, rendimento e observações.  
  - Os dados devem ser utilizados para análises futuras.  

- **RF11 - Comparativo de Safras**  
  - Deve permitir comparar resultados de diferentes safras para a mesma cultura.  
  - Gráficos e indicadores devem ser exibidos com base nos registros.  

- **RF12 - Gestão de Funcionalidades**  
  - O usuário pode ativar ou desativar funcionalidades específicas.  
  - As funcionalidades ativas devem estar destacadas na interface.  

---

## 3. Requisitos Não Funcionais  

- **RNF01 - Segurança**  
  - A autenticação deve ser feita sobre HTTPS.  
  - As senhas devem ser armazenadas com hash (ex: bcrypt).  
  - Deve haver proteção contra ataques de força bruta (ex: rate limiting).  

- **RNF02 - Usabilidade**  
  - A interface deve ser responsiva e acessível em dispositivos móveis.  
  - Textos devem ser claros, objetivos e em português.  

- **RNF03 - Performance**  
  - O sistema deve responder em até 2 segundos para ações comuns (login, consulta de dados).  

- **RNF04 - Escalabilidade**  
  - O sistema deve permitir a adição de novas funcionalidades sem afetar as existentes.  

---

## 4. Diagrama Simplificado (Opcional)

Este diagrama representa a arquitetura simplificada do sistema:


```
[Usuário]
   |
   v
[Site Campo Inteligente] -- botão --> [WhatsApp]
                                     |
                                     v
                           [ChatBot com IA]
                             |        |
                    [Previsão]     [Mercado]
                       |              |
               [API Clima]     [API Preços]

```
---

- O **Chatbot** atua como a interface principal do usuário.  
- A **API de Integração** conecta os dados externos (clima, mercado) ao sistema.  
- Os **módulos internos** tratam as recomendações e lógica de negócio.  
- O **Dashboard de Insights** é uma área interna de visualização para o usuário.

---

## 5. Dashboard de Insights  

O sistema deve fornecer um painel interativo com visualizações gráficas que sintetizam os dados agrícolas do usuário, como produtividade, clima e preços, de forma clara e acessível.

### 5.1. Componentes do Dashboard  

#### 5.1.1. Clima Semanal  
- Gráfico de barras com previsão de chuva e temperatura para os próximos 7 dias.  
- Deve destacar dias críticos (chuva intensa, calor extremo, etc.).  

#### 5.1.2. Rendimento por Cultura  
- Gráfico comparativo entre diferentes safras da mesma cultura.  
- Exibe variações de produtividade por período e por área cultivada.  

#### 5.1.3. Tendência de Preços  
- Gráfico de linha com a variação de preços da cultura selecionada nos últimos meses.  
- Permitir filtros por produto e região.  

---

### 5.2. Requisitos Funcionais Associados ao Dashboard  

- **RF13 - Visualização Climática**  
- **RF14 - Visualização de Produtividade**  
- **RF15 - Visualização de Preços de Mercado**  

---

### 5.3. Requisitos Não Funcionais do Dashboard  

- **RNF05 - Atualização em Tempo Real**  
  - O dashboard deve refletir alterações nos dados imediatamente após novas integrações ou registros.  

- **RNF06 - Compatibilidade Visual**  
  - Deve ser responsivo e adaptável a dispositivos móveis e navegadores modernos.  

- **RNF07 - Desempenho Gráfico**  
  - Gráficos devem carregar em até 1 segundo após login ou navegação.  

---

## 6. Dashboard Administrativo (Futuro)

Um módulo exclusivo para administradores será implementado em versões futuras. Ele permitirá o monitoramento do uso da plataforma, análise de engajamento e controle de conteúdo.

### 6.1. Funcionalidades Previstas  

- Visualização de estatísticas de uso por funcionalidade.  
- Acompanhamento dos usuários mais ativos e suas interações.  
- Geração de relatórios PDF mensais com indicadores de impacto.  
- Edição de conteúdos base do chatbot (respostas padrão, links úteis etc).  

---

## 7. Integrações e Fontes de Dados  

- **APIs meteorológicas** para previsão do tempo e condições climáticas.  
- **APIs de mercado agrícola**, como CEASA ou similares, para preços atualizados.  
- **SEFAZ e GasBuddy** para futura integração de logística e preços regionais de transporte.  

---

## 8. Considerações Finais  

O "Campo Inteligente" visa democratizar o acesso a tecnologias de apoio à decisão no campo, facilitando a vida de agricultores familiares através de dados confiáveis, automação de orientações e integração com canais de fácil acesso, como o WhatsApp. Este documento serve como base para desenvolvimento, testes e evolução contínua do sistema.

---
# 📘 Diagrama ER (Entidade-Relacionamento)

**Sistema:** Campo Inteligente  
**Versão:** 2.0  
**Data:** 07/07/2025  
**Responsável:** Arthur Martins

## A plataforma "Campo Inteligente" é uma API de Backend como Serviço (BaaS) projetada para permitir que terceiros (nossos clientes, como cooperativas e empresas) implementem chatbots inteligentes para seus próprios usuários finais (os agricultores). A plataforma fornece toda a infraestrutura de backend, integrações com IAs e APIs de dados (clima, mercado), no frontend, temos um site institucional com acesso a um Painel de Controle para que cada cliente possa gerenciar sua instância do chatbot.

### Entidades principais:

O modelo de dados é projetado para ser "multi-tenant", onde a tabela `Organizacoes` é a entidade central que garante o isolamento dos dados entre os diferentes clientes da plataforma. As principais entidades são:

- **Organizacoes:** Representa os clientes da plataforma (cooperativas, empresas).
- **Administradores:** Usuários do Painel de Controle, pertencentes a uma Organização.
- **Agricultores:** Usuários finais do chatbot, gerenciados por uma Organização.
- **Safras:** Histórico de produção de cada agricultor.
- **Produtos_Estoque** e **Movimentacoes_Estoque**: Entidades para a funcionalidade de controle de estoque.
- **Interacoes** e **Intencoes**: Entidades para registrar e categorizar as conversas do chatbot.

---

### Modelo Lógico:

O diagrama abaixo representa a estrutura completa do banco de dados, com todas as tabelas e seus relacionamentos principais. Você pode acessar a documentação oficial com todas as descrições pelo link: [Documentação_BD](https://docs.google.com/document/d/1w_fsAb6NAmlDi6_D95_dOTy9vLPk28VYOWPxD8mb3Bg/edit?usp=sharing)

```mermaid
erDiagram
    ORGANIZACOES {
        int id PK "ID da Organização"
        string nome "Nome da cooperativa (UNIQUE)"
        string cnpj "CNPJ da organização (UNIQUE)"
        datetime data_criacao "Data de criação"
    }

    ADMINISTRADORES {
        int id PK "ID do Admin"
        int organizacao_id FK "ID da Organização"
        string nome "Nome do admin"
        string email "Email de login (UNIQUE)"
        string senha_hash "Hash da senha"
        string cargo "Cargo (Gestor, etc)"
    }

    AGRICULTORES {
        int id PK "ID do Agricultor"
        int organizacao_id FK "ID da Organização"
        string nome "Nome do agricultor"
        string whatsapp_id "ID único do WhatsApp (UNIQUE)"
        decimal latitude "Latitude"
        decimal longitude "Longitude"
        string cidade "Cidade"
        string estado "UF"
        datetime data_cadastro "Data de cadastro"
        datetime ultima_atividade "Última interação"
    }

    SAFRAS {
        int id PK "ID da Safra"
        int agricultor_id FK "ID do Agricultor"
        string cultura "Cultura (ex: Soja)"
        string ano_safra "Ano da Safra"
        decimal area_plantada_ha "Área em Hectares"
        decimal produtividade "Produtividade (Sacas, Ton)"
        string unidade_medida "Unidade da produtividade"
    }

    PRODUTOS_ESTOQUE {
        int id PK "ID do Produto"
        int agricultor_id FK "ID do Agricultor"
        string nome_produto "Nome do Insumo/Produção"
        string tipo_produto "'Insumo' ou 'Produção'"
        string unidade_medida "Unidade (kg, Sacas)"
        decimal saldo_atual "Saldo em estoque"
    }

    MOVIMENTACOES_ESTOQUE {
        int id PK "ID da Movimentação"
        int produto_id FK "ID do Produto em Estoque"
        string tipo_movimentacao "'Entrada' ou 'Saída'"
        decimal quantidade "Quantidade movimentada"
        datetime data_movimentacao "Data da movimentação"
        text observacao "Nota opcional"
    }

    INTERACOES {
        int id PK "ID da Interação"
        int agricultor_id FK "ID do Agricultor"
        text mensagem_usuario "Mensagem do usuário"
        text resposta_chatbot "Resposta do bot"
        jsonb entidades "Entidades extraídas (IA)"
        datetime timestamp "Data da interação"
    }

    INTENCOES {
        int id PK "ID da Intenção"
        string nome_intencao "Código da intenção (UNIQUE)"
        string descricao "Descrição amigável"
    }

    INTERACOES_INTENCOES {
        int interacao_id PK,FK "ID da Interação"
        int intencao_id PK,FK "ID da Intenção"
    }

    CONVERSATION_CONTEXTS {
        string whatsapp_id PK "Número do WhatsApp"
        jsonb context "Estado temporário da conversa"
        datetime last_updated "Última atualização"
    }


    %% --- Relacionamentos ---
    ORGANIZACOES ||--o{ ADMINISTRADORES : "gerencia"
    ORGANIZACOES ||--o{ AGRICULTORES : "gerencia"
    AGRICULTORES ||--o{ SAFRAS : "possui"
    AGRICULTORES ||--o{ PRODUTOS_ESTOQUE : "possui"
    AGRICULTORES ||--o{ INTERACOES : "realiza"
    PRODUTOS_ESTOQUE ||--o{ MOVIMENTACOES_ESTOQUE : "registra"
    INTERACOES }o--o{ INTERACOES_INTENCOES : "é classificada como"
    INTENCOES }o--o{ INTERACOES_INTENCOES : "classifica"
```

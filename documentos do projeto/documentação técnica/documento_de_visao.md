Documentação Técnica (Revisada): Plataforma de API "Campo Inteligente"

1. Documento de Visão (Revisado)
   1.1 Introdução
   Este documento descreve a visão geral da plataforma "Campo Inteligente", uma API de Backend como Serviço (BaaS) projetada para permitir que terceiros (nossos clientes) implementem chatbots inteligentes para seus próprios usuários finais. A plataforma fornece toda a infraestrutura de backend, integrações com IAs e APIs de dados (clima, mercado), e um Painel de Controle para que cada cliente possa gerenciar sua instância do chatbot.

1.2 Posicionamento
Problema: Cooperativas, agrônomos e empresas do agronegócio desejam oferecer ferramentas digitais de alto valor aos seus agricultores, mas não possuem a infraestrutura ou o conhecimento técnico para desenvolver e manter um sistema complexo que integra IA, dados de mercado e gestão de conversas.

Solução: A API "Campo Inteligente" abstrai toda essa complexidade. Oferecemos uma solução "white-label" onde nossos clientes podem, através de uma interface de gerenciamento (o Painel de Controle), configurar e implantar um chatbot poderoso para seus membros, seja no WhatsApp, em seus próprios sites ou em aplicativos.

1.3 Partes Interessadas (Stakeholders)
Clientes da Plataforma (Inquilinos): Nossos clientes diretos (Cooperativas, Empresas de Insumos, Associações). Eles são os donos das "contas" no sistema.

Administradores do Cliente: Funcionários do nosso cliente (ex: gerente da cooperativa) que usam o Painel de Controle para gerenciar seus usuários e visualizar os dados consolidados.

Usuários Finais (Agricultores): Os membros ou clientes dos nossos clientes, que interagem com o chatbot no dia a dia.

Equipe "Campo Inteligente": Responsáveis pela manutenção e evolução da API e da plataforma.

1.4 Visão Geral do Produto
A plataforma é uma API multi-tenant. Quando um novo cliente se cadastra, ele recebe uma "Organização" em nosso sistema. Todas as interações, agricultores e configurações subsequentes são vinculadas a essa organizacao_id, garantindo total isolamento e segurança dos dados. O Painel de Controle é a interface que nossos clientes usam para consumir e gerenciar os dados que a API coleta e processa para eles.

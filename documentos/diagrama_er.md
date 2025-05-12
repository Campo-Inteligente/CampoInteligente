# 📘 Diagrama ER (Entidade-Relacionamento) 
**Sistema:** Campo Inteligente  
**Versão:** 1.0  
**Data:** 12/05/2025  
**Responsável:** Artur

O site campointeligente.agr.br é uma plataforma voltada para a agricultura familiar, oferecendo um chatbot com inteligência artificial que integra dados meteorológicos e de mercado para auxiliar no plantio, manejo e colheita. A navegação é simples, com foco na interação via WhatsApp.
---

### Entidades principais:
- Usuário
- Veículo
- breve

---

### Modelo Lógico Simplificado (texto):

```
Usuário (id, nome, email, senha_hash)
    └──<1---N> Veículo (id, usuario_id, marca, modelo, ano)

<breve>

```

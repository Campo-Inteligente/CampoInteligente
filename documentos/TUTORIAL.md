## 🧑‍💻 **Como Contribuir**

Contribuições são sempre bem-vindas! Para colaborar com o projeto, siga os passos abaixo:

### 1. **Faça um Fork do Repositório**

Clique no botão **Fork** no canto superior direito deste repositório para criar uma cópia do repositório em sua conta do GitHub.

### 2. **Clone o Repositório**

Clone o repositório na sua máquina local para começar a trabalhar:

```bash
git clone https://github.com/seu-usuario/CampoInteligente.git
cd CampoInteligente
```

### 3. **Crie uma Branch para Sua Contribuição**

Crie uma nova branch para a sua contribuição, garantindo que seu trabalho seja mantido separado da branch principal:

```bash
git checkout -b minha-contribuicao
```

### 4. **Realize as Alterações Necessárias**

Sinta-se à vontade para editar, corrigir ou adicionar novos recursos à aplicação conforme sua necessidade.

### 5. **Commit e Push das Alterações**

Adicione suas alterações e faça o commit com uma mensagem descritiva:

```bash
git add .
git commit -m "Descrição das mudanças realizadas"
git push origin minha-contribuicao
```

### 6. **Crie um Pull Request (PR)**

Após realizar o push da sua branch, acesse seu repositório no GitHub e crie um **Pull Request**. Compare a sua branch com a branch principal (`main`) do repositório original e envie para revisão.

---

## 🛠️ **Como Rodar Localmente**

Para rodar a aplicação localmente em seu ambiente de desenvolvimento, siga os passos abaixo.

### **Pré-requisitos**

Certifique-se de ter o seguinte instalado:

- **Node.js** (versão LTS recomendada)
- **npm** ou **yarn** (gerenciador de pacotes)

### **Passos para Executar o Projeto Localmente**

1. **Instale as dependências do projeto**:

```bash
npm install
npm install framer-motion
```

2. **Construa o projeto**:

```bash
npx next build
```

3. **Execute a aplicação localmente**:

```bash
npm run dev     --Modo de Desenvolvimento
npm run build   --Compilação para Produção
npm run start   --Modo de Visualização
```

4. **Acesse a aplicação**:

Abra o navegador e acesse `http://localhost:3000` para ver a aplicação em funcionamento.

5. **Atualize o repositório**:

Após realizar alterações e verificar que tudo está funcionando localmente, envie suas modificações para o GitHub:

```bash
git add .
git commit -m "Mensagem explicando as mudanças"
git push origin minha-contribuicao
```

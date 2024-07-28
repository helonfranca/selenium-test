
# Selenium Testes para SIGAA e Biblioteca UFRRJ

Este projeto contém um conjunto de testes automatizados para o Sistema Integrado de Gestão de Atividades Acadêmicas (SIGAA) e a página de Pré-Cadastro da Biblioteca da UFRRJ. Os testes são escritos em JavaScript utilizando o framework Mocha e a biblioteca Selenium WebDriver.

## Requisitos

- Node.js
- npm (Node Package Manager)
- Google Chrome
- Chromedriver

## Observações Importantes

- Manipulação da Página do SIGAA: A página do SIGAA pode ser difícil de manipular devido à complexidade dos elementos e suas interações. Com isso foi levado em consideração apenas navegação das paginas e procura de elementos.

* Problemas no Formulário de Pré-Cadastro da Biblioteca: Durante a automação do formulário de pré-cadastro da biblioteca, foram encontrados problemas com alguns campos que não eram preenchidos corretamente. Foram levadas em consideração questões relacionadas à aceitação dos valores pelos campos e a possível necessidade de ajustes nos testes para refletir o comportamento real da página.

## Configuração do Ambiente

### Passo 1: Clone o repositório

```bash
git clone https://github.com/SeuUsuario/selenium-test-sigaa.git
cd selenium-test-sigaa
```

### Passo 2: Instale as dependências

```bash
npm install
```

### Passo 3: Configure variáveis de ambiente

Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

```bash
TEST_USERNAME=seu_usuario
TEST_PASSWORD=sua_senha
```
### Passo 4: Execute os testes

```bash
npm test
```

# Casos de Teste

### Testes para o SIGAA

#### Teste de Login e Verificação de Usuário Logado

* Objetivo: Verificar se o usuário consegue fazer login e se está logado.

* Resposta Esperada: O usuário deve estar logado e um elemento específico deve estar presente na página inicial após o login.


#### Teste de Verificação de Título da Página

* Objetivo: Verificar se a página inicial do discente carrega corretamente e se o título está correto.

* Resposta Esperada: O título da página deve ser "SIGAA - Sistema Integrado de Gestão de Atividades Acadêmicas".


#### Teste de Acesso à Página de Detalhamento de Índices Acadêmicos

* Objetivo: Verificar se o link para detalhar os índices acadêmicos está funcionando corretamente.

* Resposta Esperada: A página de detalhamento de índices acadêmicos deve ser carregada após o clique no link.

### Testes para a Página de Pré-Cadastro da Biblioteca

#### Teste de Preenchimento do Formulário de Pré-Cadastro

* Objetivo: Preencher todos os campos do formulário de pré-cadastro da biblioteca e simular o envio.

* Resposta Esperada: Todos os campos do formulário devem ser preenchidos corretamente, e o formulário deve ser submetido com sucesso.

# Conclusão
* Este projeto demonstra como realizar testes automatizados em páginas web utilizando Selenium e Mocha. Os testes abrangem cenários comuns de login, navegação e preenchimento de formulários, fornecendo uma base sólida para a automação de testes em aplicações web.

#  Observações

* Certifique-se de que o Chromedriver está corretamente configurado e compatível com a versão do Google Chrome instalada em seu sistema.

* Atualize os caminhos de arquivo conforme necessário, especialmente ao fazer upload de arquivos durante os testes.
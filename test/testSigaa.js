const { Builder, By, until } = require('selenium-webdriver');
const { describe, it, after, before } = require('mocha');
const assert = require('assert');
require('dotenv').config();

let driver;

describe('Selenium Test Sigaa', function () {
    this.timeout(30000);

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('deve fazer login e verificar se o usuário está logado', async function () {
        await driver.get('https://sigaa.ufrrj.br/sigaa/verTelaLogin.do');

        // Pegando os elemntos de login e  senha
        const usernameField = await driver.findElement(By.name('user.login'));
        const passwordField = await driver.findElement(By.name('user.senha'));

        // Substitua 'login' e 'senha' no arquivo .env
        const username = process.env.TEST_USERNAME;
        const password = process.env.TEST_PASSWORD;
        await usernameField.sendKeys(username);
        await passwordField.sendKeys(password);

        // Substitua '#loginButton' pelo seletor correto do botão de login
        const loginButton = await driver.findElement(By.css('input[type="submit"][value="Entrar"]'));
        await loginButton.click();

        // Aguarde até que a página de login seja carregada e verifique um elemento que indica que o usuário está logado
        await driver.wait(until.urlContains('discente'), 10000);

        // Verifique que o usuário está logado, por exemplo, verificando a presença de um elemento específico
        const loggedInElement = await driver.findElement(By.className('sair-sistema'));
        assert(loggedInElement, 'O usuário não está logado');
    });

    it('deve abrir a página e verificar o título', async function () {
        await driver.get('https://sigaa.ufrrj.br/sigaa/portais/discente/discente.jsf');
        const title = await driver.getTitle();
        assert.strictEqual(title, 'SIGAA - Sistema Integrado de Gestão de Atividades Acadêmicas');
    });

    it('acessando page de detalhar Índices Acadêmicos', async function () {
        await driver.get('https://sigaa.ufrrj.br/sigaa/portais/discente/discente.jsf');

        // Encontrar e clicar no link "Detalhar"
        const detailLink = await driver.findElement(By.id('j_id_jsp_1051466817_360:detalharIndiceAcademico'));
        await detailLink.click();
        
    });
});

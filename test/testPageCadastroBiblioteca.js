const { Builder, By, until } = require('selenium-webdriver');
const { describe, it, after, before } = require('mocha');
const assert = require('assert');
const path = require('path');

let driver;

describe('Selenium Testes para o Formulário de Pré-Cadastro da Biblioteca', function () {
    this.timeout(60000);

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    // Função para preencher o formulário com diferentes dados
    async function preencherFormulario(dados) {
        await driver.get('https://institucional.ufrrj.br/biblioteca/formulario-de-pre-cadastro/');

        // Esperar até que o campo "Selecione sua categoria" esteja visível e clicar
        await driver.wait(until.elementLocated(By.id('choice_1_3_0')), 10000).click();

        // Esperar até que o campo "Marque seu Campus" esteja visível e clicar
        await driver.wait(until.elementLocated(By.id('choice_1_35_0')), 10000).click();

        // Preencher "Nome Completo"
        await driver.wait(until.elementLocated(By.id('input_1_1')), 10000).sendKeys(dados.nome);

        // Preencher "CPF" caractere por caractere com um pequeno atraso
        let cpfField = await driver.wait(until.elementLocated(By.id('input_1_4')), 10000);
        await cpfField.clear();
        for (const char of dados.cpf) {
            await cpfField.sendKeys(char);
            await driver.sleep(100); // Atraso de 100 ms entre caracteres
        }

        // Preencher "Matrícula"
        await driver.wait(until.elementLocated(By.id('input_1_5')), 10000).sendKeys(dados.matricula);

        // Preencher "E-mail"
        await driver.wait(until.elementLocated(By.id('input_1_12')), 10000).sendKeys(dados.email);

        // Preencher "Celular" caractere por caractere com um pequeno atraso
        let celularField = await driver.wait(until.elementLocated(By.id('input_1_8')), 10000);
        await celularField.clear();
        for (const char of dados.celular) {
            await celularField.sendKeys(char);
            await driver.sleep(100); // Atraso de 100 ms entre caracteres
        }

        // Preencher "Telefone"
        await driver.wait(until.elementLocated(By.id('input_1_11')), 10000).sendKeys(dados.telefone);

        // Preencher "Endereço"
        await driver.wait(until.elementLocated(By.id('input_1_25')), 10000).sendKeys(dados.endereco);

        // Preencher "Complemento"
        await driver.wait(until.elementLocated(By.id('input_1_27')), 10000).sendKeys(dados.complemento);

        // Preencher "Número" com um pequeno atraso
        let numeroField = await driver.wait(until.elementLocated(By.id('input_1_32')), 10000);
        await numeroField.clear();
        for (const char of dados.numero) {
            await numeroField.sendKeys(char);
            await driver.sleep(100); // Atraso de 100 ms entre caracteres
        }

        // Preencher "Bairro"
        await driver.wait(until.elementLocated(By.id('input_1_26')), 10000).sendKeys(dados.bairro);

        // Preencher "Cidade"
        await driver.wait(until.elementLocated(By.id('input_1_30')), 10000).sendKeys(dados.cidade);

        // Preencher "Estado"
        await driver.wait(until.elementLocated(By.id('input_1_33')), 10000).sendKeys(dados.estado);

        // Preencher "CEP"
        await driver.wait(until.elementLocated(By.id('input_1_34')), 10000).sendKeys(dados.cep);

        // Preencher "Curso / Programa"
        await driver.wait(until.elementLocated(By.id('input_1_14')), 10000).sendKeys(dados.curso);
        
        // Pausa de 5 segundos antes de "submeter" o formulário
        await driver.sleep(5000);

        const submitButton = await driver.findElement(By.id('gform_submit_button_1'));
        await submitButton.click();

        // Pausa de 5 segundos antes de "submeter" o formulário
        await driver.sleep(10000);

        //verificar se retornou algum erro dos campos

        // se não retornou vá para o proximo caso de teste  
    }

    // Casos de Teste com dados variados
    const casosDeTeste = [
        {
            nome: 'João Silva',
            cpf: '12345678900',
            matricula: '123456',
            email: 'joao.silva@example.com',
            celular: '21912345678',
            telefone: '2112345678',
            endereco: 'Rua das Flores, 456',
            complemento: 'Apto 202',
            numero: '456',
            bairro: 'Centro',
            cidade: 'Rio de Janeiro',
            estado: 'RJ',
            cep: '12345678',
            curso: 'Curso A'
        },
        {
            nome: 'Maria Oliveira',
            cpf: '09876543211',
            matricula: '654321',
            email: 'maria.oliveira@example.com',
            celular: '21987654321',
            telefone: '2198765432',
            endereco: 'Avenida Central, 789',
            complemento: 'Casa',
            numero: '789',
            bairro: 'Zona Sul',
            cidade: 'Niterói',
            estado: 'RJ',
            cep: '87654321',
            curso: 'Curso B'
        },
        {
            nome: 'Pedro Santos',
            cpf: '11223344556',
            matricula: '789012',
            email: 'pedro.santos@example.com',
            celular: '21923456789',
            telefone: '2192345678',
            endereco: 'Rua das Palmeiras, 321',
            complemento: 'Bloco 1',
            numero: '321',
            bairro: 'Jardim Botânico',
            cidade: 'Petropolis',
            estado: 'RJ',
            cep: '23456789',
            curso: 'Curso C'
        },
        {
            nome: 'Ana Costa',
            cpf: '22334455667',
            matricula: '345678',
            email: 'ana.costa@example.com',
            celular: '21934567890',
            telefone: '2193456789',
            endereco: 'Avenida Brasil, 1234',
            complemento: 'Sala 501',
            numero: '1234',
            bairro: 'Tijuca',
            cidade: 'São Gonçalo',
            estado: 'RJ',
            cep: '34567890',
            curso: 'Curso D'
        },
        {
            nome: 'Lucas Pereira',
            cpf: '33445566778',
            matricula: '456789',
            email: 'lucas.pereira@example.com',
            celular: '21945678901',
            telefone: '2194567890',
            endereco: 'Rua dos Jacarandás, 567',
            complemento: 'Cobertura 3',
            numero: '567',
            bairro: 'Botafogo',
            cidade: 'Campos dos Goytacazes',
            estado: 'RJ',
            cep: '45678901',
            curso: 'Curso E'
        },
        {
            nome: 'Juliana Almeida',
            cpf: '44556677889',
            matricula: '567890',
            email: 'juliana.almeida@example.com',
            celular: '21956789012',
            telefone: '2195678901',
            endereco: 'Rua do Comércio, 678',
            complemento: 'Apartamento 304',
            numero: '678',
            bairro: 'Glória',
            cidade: 'Nova Friburgo',
            estado: 'RJ',
            cep: '56789012',
            curso: 'Curso F'
        },
        {
            nome: 'Carlos Eduardo',
            cpf: '55667788990',
            matricula: '678901',
            email: 'carlos.eduardo@example.com',
            celular: '21967890123',
            telefone: '2196789012',
            endereco: 'Rua da Paz, 789',
            complemento: 'Casa 2',
            numero: '789',
            bairro: 'Laranjeiras',
            cidade: 'Volta Redonda',
            estado: 'RJ',
            cep: '67890123',
            curso: 'Curso G'
        },
        {
            nome: 'Fernanda Lima',
            cpf: '66778899001',
            matricula: '789012',
            email: 'fernanda.lima@example.com',
            celular: '21978901234',
            telefone: '2197890123',
            endereco: 'Rua dos Sabiás, 890',
            complemento: 'Apto 405',
            numero: '890',
            bairro: 'Recreio',
            cidade: 'Cabo Frio',
            estado: 'RJ',
            cep: '78901234',
            curso: 'Curso H'
        },
        {
            nome: 'Roberto Martins',
            cpf: '77889900112',
            matricula: '890123',
            email: 'roberto.martins@example.com',
            celular: '21989012345',
            telefone: '2198901234',
            endereco: 'Avenida das Américas, 901',
            complemento: 'Bloco 2',
            numero: '901',
            bairro: 'Barra da Tijuca',
            cidade: 'Arraial do Cabo',
            estado: 'RJ',
            cep: '89012345',
            curso: 'Curso I'
        },
        {
            nome: 'Tatiane Oliveira',
            cpf: '88990011223',
            matricula: '901234',
            email: 'tatiane.oliveira@example.com',
            celular: '21990123456',
            telefone: '2199012345',
            endereco: 'Rua das Margaridas, 1234',
            complemento: 'Cobertura 2',
            numero: '1234',
            bairro: 'Copacabana',
            cidade: 'Macaé',
            estado: 'RJ',
            cep: '90123456',
            curso: 'Curso J'
        },
        {
            nome: 'Gabriel Rocha',
            cpf: '99001122334',
            matricula: '012345',
            email: 'gabriel.rocha@example.com',
            celular: '21901234567',
            telefone: '2190123456',
            endereco: 'Rua do Sol, 5678',
            complemento: 'Apto 207',
            numero: '5678',
            bairro: 'Ipanema',
            cidade: 'Búzios',
            estado: 'RJ',
            cep: '01234567',
            curso: 'Curso K'
        }
    ];

    casosDeTeste.forEach((dados, index) => {
        it(`deve preencher o formulário com os dados do caso ${index + 1} (em tempo de execução)`, async function () {
            await preencherFormulario(dados);
        });
    });
});

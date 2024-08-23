let DatasetAsync = {
    /**
     *  Estrutura Genérica para a Consulta de Datasets e Execução de Função como CallBack
     * @param {String} nomeDataSet - ID do Dataset Buscado
     * @param {Array} parametros - Dados que Irão na consulta
     * @param {Function} callback  - Função Executada dando tudo certo 
     * @returns {Object} - Estrutura do Dataset
     */
    GetDatasetCallback: function(nomeDataSet,parametros,fields,callback){

        const url = Utils.UrlAmbienteAtual() + '/api/public/ecm/dataset/datasets/';

        let valorParametro = "";
        let constraints = [];

        //Itera sobre Parâmetros Passados e Monsta Contraint
        for(let i = 0; i < parametros.length; i++){

            chaveParametro = parametros[i]['CHAVE'];
            valorParametro = parametros[i]["VALOR"];

            constraints.push(
                {
                    "_field": chaveParametro,
                    "_initialValue": valorParametro,
                    "_finalValue": valorParametro,
                    "_type":1
                }
            )
        }

        //Payload de Dataset com Constraint
        const dataset = {
            name: nomeDataSet,
            fields,
            constraints,
            order : null
        };

       //Corpo da Requisição, passando como parâmetro Payload e Endpoint
       fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataset) // Serializa o objeto datasetRm para JSON
        })
        .then(response => {
            // Verifica se a resposta HTTP foi bem sucedida
            if (!response.ok) {
                throw new Error('Erro ao fazer a requisição: ' + response.statusText);
            }
            return response.json(); // Retorna os dados JSON da resposta
        })
        .then(dados => {
            // Executa Função de Callback
            callback(dados.content.values);
        })
        .catch(erro => {
            console.error('Erro ao processar a requisição:', erro);
            Utils.ExibirMensagemErroProcurarAdmin("Erro ao Retornar Dados do Dataset: " + nomeDataSet);
        });
    },

    /**
     *  Estrutura Genérica para a Consulta de Datasets e Execução de Função como CallBack e envio de Resolve de Promise Pai
     * @param {String} nomeDataSet - ID do Dataset Buscado
     * @param {Array} parametros - Dados que Irão na consulta
     * @param {Function} callback  - Função Executada dando tudo certo 
     * @returns {Object} - Estrutura do Dataset
     */
    GetDatasetCallbackPromise: function(nomeDataSet,parametros,callback,resolve){

        const url = Utils.UrlAmbienteAtual() + '/api/public/ecm/dataset/datasets/';

        let constraints = [];
        let valorParametro = "";

        //Itera sobre Parâmetros Passados e Monsta Contraint
        for(let i = 0; i < parametros.length; i++){

            chaveParametro = parametros[i]['CHAVE'];
            valorParametro = parametros[i]["VALOR"];

            constraints.push(
                {
                    "_field": chaveParametro,
                    "_initialValue": valorParametro,
                    "_finalValue": valorParametro,
                    "_type":1
                }
            )
        }

        //Payload de Dataset com Constraint
        const dataset = {
            name: nomeDataSet,
            fields: null,
            constraints,
            order : null
        };

       //Corpo da Requisição, passando como parâmetro Payload e Endpoint
       fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataset) // Serializa o objeto datasetRm para JSON
        })
        .then(response => {
            // Verifica se a resposta HTTP foi bem sucedida
            if (!response.ok) {
                throw new Error('Erro ao fazer a requisição: ' + response.statusText);
            }
            return response.json(); // Retorna os dados JSON da resposta
        })
        .then(dados => {
            // Executa Função de Callback
            callback(dados.content.values,resolve);
        })
        .catch(erro => {
            console.error('Erro ao processar a requisição:', erro);
            Utils.ExibirMensagemErroProcurarAdmin("Erro ao Retornar Dados do Dataset: " + nomeDataSet);
        });
    },

    /**
     *  Estrutura Genérica para a Consulta de Datasets e Execução de Função como CallBack
     * @param {String} nomeDataSet - ID do Dataset Buscado
     * @param {Array} parametros - Dados que Irão na consulta
     * @param {Function} callback  - Função Executada dando tudo certo 
     * @returns {Object} - Estrutura do Dataset
     */
    GetDatasetCallbackPassandoParametro: function(nomeDataSet,parametros,callback,parametro){

        const url = Utils.UrlAmbienteAtual() + '/api/public/ecm/dataset/datasets/';

        let constraints = [];
        let valorParametro = "";

        //Itera sobre Parâmetros Passados e Monsta Contraint
        for(let i = 0; i < parametros.length; i++){

            chaveParametro = parametros[i]['CHAVE'];
            valorParametro = parametros[i]["VALOR"];

            constraints.push(
                {
                    "_field": chaveParametro,
                    "_initialValue": valorParametro,
                    "_finalValue": valorParametro,
                    "_type":1
                }
            )
        }

        //Payload de Dataset com Constraint
        const dataset = {
            name: nomeDataSet,
            fields: null,
            constraints,
            order : null
        };

       //Corpo da Requisição, passando como parâmetro Payload e Endpoint
       fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataset) // Serializa o objeto datasetRm para JSON
        })
        .then(response => {
            // Verifica se a resposta HTTP foi bem sucedida
            if (!response.ok) {
                throw new Error('Erro ao fazer a requisição: ' + response.statusText);
            }
            return response.json(); // Retorna os dados JSON da resposta
        })
        .then(dados => {
            // Executa Função de Callback
            callback(dados.content.values,parametro);
        })
        .catch(erro => {
            console.error('Erro ao processar a requisição:', erro);
            Utils.ExibirMensagemErroProcurarAdmin("Erro ao Retornar Dados do Dataset: " + nomeDataSet);
        });
    },
}

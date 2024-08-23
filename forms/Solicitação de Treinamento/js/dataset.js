var Datasets = {

    dsRMFuncionarios: "ds_integracao_rm",
    dsFuncionarioPorMatricula: "dados_funcionario_por_matricula",
    dsBPColaborador: "colaborador_rh_bp",
    dsDiretoriaCentroCusto: "diretoria_centroCusto",
	processHistory : "processHistory",

    get: function(dataset,fields,constraints,order){
		
		var _constraints = [];
		
		for (var i in constraints) {
			
			var campo = constraints[i][0];
			var valorInicial = constraints[i][1];
			var valorFinal = valorInicial;
			var tipo = ConstraintType.MUST;
			var like = constraints[i][3] || false;
			
			_constraints.push(DatasetFactory.createConstraint(campo,valorInicial,valorFinal,tipo,like))
		}
		
		return _dataset = DatasetFactory.getDataset(
			dataset,
			fields,
			_constraints,
			order
		).values;
	},
	
	getRow: function(dataset,fields,constraints,order){
		//if (null != constraints) {
		//	constraints.push(["sqlLimit",1,"must"]);
		//}
		var _dataset = this.get(dataset,fields,constraints,order);
		return undefined != _dataset && _dataset.length > 0 ? _dataset[0] : null;
	},
	
	getRows: function(dataset,fields,constraints,order){
		var _dataset = this.get(dataset,fields,constraints,order);
		return undefined != _dataset && _dataset.length > 0 ? _dataset : null;
	},

    getDadosSolicitante: function(matricula) {
        Datasets.getDadosColaborador(matricula)
            .then(colaborador => {
                Colaboradores.inserirDadosColaborador(colaborador);

                var custoBP = colaborador.CENTROCUSTO;
                if (custoBP.length === 17) {
                    var custoDiretoria = custoBP.substr(3, 14);
                }

                return Promise.all([
                    Datasets.getDadosBP(colaborador.CODCOLIGADA, custoBP),
                    Datasets.getDadosDiretoria(custoDiretoria)
                ]);
            })
            .then(([dadosBP, dadosDiretoria]) => {
                Colaboradores.inserirDadosBP(dadosBP);
                Colaboradores.inserirDadosDiretoria(dadosDiretoria);
            })
            .catch(error => {
                console.error("Erro ao obter dados:", error);
            });
    },

    getDadosColaborador: function(matricula) {
        return new Promise((resolve, reject) => {
            var parametros = [];
            var fields = [Datasets.dsFuncionarioPorMatricula];

            var matriculaSeparada = matricula.split("-");
            var coligada = matriculaSeparada[0];
            var chapa = matriculaSeparada[1];

            parametros.push({ "CHAVE": "coligada", "VALOR": coligada });
            parametros.push({ "CHAVE": "chapa", "VALOR": chapa });

            DatasetAsync.GetDatasetCallback("ds_integracao_rm", parametros, fields, (data) => {
                if (data && data.length > 0) {
                    resolve(data[0]); // Resolve com o primeiro item do array
                } else {
                    reject(new Error("Dados do colaborador não encontrados"));
                }
            });
        });
    },

    getDadosBP: function(coligada, custo) {
        return new Promise((resolve, reject) => {
            var parametros = [];
            var fields = [Datasets.dsBPColaborador];

            parametros.push({ "CHAVE": "coligada", "VALOR": coligada });
            parametros.push({ "CHAVE": "custo", "VALOR": custo });

            DatasetAsync.GetDatasetCallback("ds_integracao_rm", parametros, fields, (data) => {
                if (data && data.length > 0) {
                    resolve(data[0]);
                } else {
                    reject(new Error("Dados do BP não encontrados"));
                }
            });
        });
    },

    getDadosDiretoria: function(centrocusto) {
        return new Promise((resolve, reject) => {
            var parametros = [];
            var fields = [Datasets.dsDiretoriaCentroCusto];

            parametros.push({ "CHAVE": "centrocusto", "VALOR": centrocusto });

            DatasetAsync.GetDatasetCallback("ds_integracao_rm", parametros, fields, (data) => {
                if (data && data.length > 0) {
                    resolve(data[0]);
                } else {
                    reject(new Error("Dados da diretoria não encontrados"));
                }
            });
        });
    },

    getDadosGestor: function(matricula) {
        var parametros = [];
        var fields = [Datasets.dsFuncionarioPorMatricula];

        var matriculaSeparada = matricula.split("-");
        var coligada = matriculaSeparada[0];
        var chapa = matriculaSeparada[1];        

        parametros.push({"CHAVE" : "coligada", "VALOR" : coligada})
        parametros.push({"CHAVE" : "chapa", "VALOR" : chapa})
        DatasetAsync.GetDatasetCallback("ds_integracao_rm", parametros, fields, Colaboradores.inserirDadosGestor);
    },

    getDadosParticipante: function(idForm, indice) {    
        return new Promise((resolve, reject) => {
            var parametros = [];
            var fields = [Datasets.dsFuncionarioPorMatricula];
    
            var matricula = $("#" + idForm).val();
            var matriculaSeparada = matricula.split('-');
            var coligada = matriculaSeparada[0];
            var chapa = matriculaSeparada[1];
    
            parametros.push({"CHAVE": "coligada", "VALOR": coligada});
            parametros.push({"CHAVE": "chapa", "VALOR": chapa});
    
            DatasetAsync.GetDatasetCallback("ds_integracao_rm", parametros, fields, (data) => {
                if (data && data.length > 0) {
                    resolve(data);
                } else {
                    reject(new Error("Dados do participante não encontrados"));
                }
            });
        });
    },

    getAtividadesPercorridas: function(numeroSolicitacao) {
        var atividadesPercorridas = Datasets.getRows(
            Datasets.processHistory,
            ["stateSequence"],
            [
                ["processInstanceId",numeroSolicitacao,"must"],
            ],
            ['stateSequence']
        )

        return atividadesPercorridas;
    },

    getAreas: function() {
        var areas = DatasetFactory.getDataset(Datasets.dsRMFuncionarios, ["areas"], null, null);

        return areas;
    },

}
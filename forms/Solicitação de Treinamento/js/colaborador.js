var Colaboradores = {
    
    enviarDadosGestor: function() {
        var matricula = Campos.matriculaGestorArea().val()
        Datasets.getDadosGestor(matricula);
    },

    inserirDadosGestor: function(data) {
        if(data.length > 0) {
            $("#gestorImediato").val(data[0]["NOME"]);
            $("#gestorImediato_h").val(data[0]["NOME"]);
        } else {
            Utils.exibirAlerta("error", "Sem resultados", "Nenhum colaborador foi encontrado com essa matrícula")
        }
    },

    enviarDadosSolicitante: function() {
        Datasets.getDadosSolicitante(Campos.matriculaSolicitante().val());
    },

    inserirDadosColaborador: function(data) {
        Campos.unidade().val((data.UNIDADE).toUpperCase());
    },

    inserirDadosBP: function(data) {
        Campos.bpRhResponsavel().val(data.NOME);
    },

    inserirDadosDiretoria: function(data) {
        Campos.diretoria().val((data.DIRETORIA).toUpperCase());
    },

    enviarDadosParticipante: function(idForm) {
        var indice = idForm.split('___')[1];

        Datasets.getDadosParticipante(idForm, indice)
            .then((data) => Colaboradores.inserirDadosParticipante(data, indice))
            .catch((error) => {
                console.error("Erro ao obter dados do participante:", error);
            });
    },

    inserirDadosParticipante: function(data, indice) {
        Campos.participantes.nome(indice).val(data[0]["NOME"]);
        Campos.participantes.cargo(indice).val(data[0]["CARGO"]);
        Campos.participantes.admissao(indice).val(data[0]["DATAADMISSAO"]);
        Campos.participantes.situacao(indice).val(data[0]["CODSITUACAO"]);
        Campos.participantes.tempoEmpresa(indice).val(data[0]["TEMPO_x0020_DE_x0020_EMPRESA"]);
    }

}
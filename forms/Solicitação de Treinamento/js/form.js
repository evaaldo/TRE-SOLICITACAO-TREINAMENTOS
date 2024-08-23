var Formulario = {

    formMode: null,
    numState: null,
    isMobile: null,

    inicializar: function () {

        var input = document.getElementById("areaSolicitante");
        var areasDataset = Datasets.getAreas();
        var areas = []

        for(var i = 0; i <= 2237; i++) {
            areas.push(areasDataset.values[i].AREA)
        }

        new Awesomplete(input, {
            list: areas
        });

        Formulario.esconderBotoesComAcao(Campos.numAtividade().val());
        
    },

    definirEscalaParticipantes: function(escala) {

        if (escala == "maisCincoParticipantes") {

            Campos.divAdicionarPlanilhaParticipantes().show();
            Campos.divAdicionarDocumentoNormativo().show();
            Campos.divAdicionarParticipantes().hide();
            Campos.divRemoverParticipantes().hide();
            Campos.divTbParticipante().hide();

        } else if (escala == "menosCincoParticipantes") {

            Campos.divAdicionarParticipantes().show();
            Campos.divRemoverParticipantes().show();
            Campos.divTbParticipante().show();
            Campos.divAdicionarPlanilhaParticipantes().hide();
            Campos.divAdicionarDocumentoNormativo().hide();

        }

    },

    adicionarLinha: function() {

        var quantidadeParticipantes = parseInt(Campos.qtdParticipantes().val());

        if(quantidadeParticipantes < 5) {
            wdkAddChild("tbParticipante");
            quantidadeParticipantes++;

            Campos.qtdParticipantes().val(quantidadeParticipantes);
            Campos.qtdParticipantesSpan().text(quantidadeParticipantes);

            Formulario.atualizarIndices();
        } else {
            Utils.exibirAlerta("error", "Atenção", "O número máximo de participantes cadastrados via formulário é 5. Caso precise cadastrar mais, anexe a planilha de participantes!");
        }

    },

    atualizarIndices: function() {

        Campos.linhasTbParticipantes().slice(1).each(function(index) {

            var indice = index + 1;
            $(this).find("[id^='tbParticipanteIndice']").val(indice);

        });

    },

    excluirLinha: function(elemento) {

        var numAtividade = Campos.numAtividade().val();
        var quantidadeParticipantes = parseInt(Campos.qtdParticipantes().val());

        if(quantidadeParticipantes >= 0 && /^(0|7|61|64)$/.test(numAtividade)) {

            fnWdkRemoveChild(elemento);
            quantidadeParticipantes--;   

            Campos.qtdParticipantes().val(quantidadeParticipantes);
            Campos.qtdParticipantesSpan().text(quantidadeParticipantes);

            Formulario.atualizarIndices();

        } else {
            Utils.exibirAlerta("error", "Atenção", "Não é possível remover participantes nessa etapa!");
        }

    },

    excluirTodasLinhas: function() {

        Campos.linhasTbParticipantes().not(":first").remove();
        Campos.qtdParticipantes().val(0);
        Campos.qtdParticipantesSpan().text(0);

    },

    verificaExistenciaArea: function(campo) {

        var areasDataset = Datasets.getAreas();
        var areas = []

        for(var i = 0; i <= 2237; i++) {
            areas.push(areasDataset.values[i].AREA)
        }

        if (!areas.includes(campo[0].value)) {
            $(campo).val('');
            Utils.exibirAlerta("error", "Área inexistente!", "Área informada não está cadastrada.")
            return false;
        };

    },

    verificaRadio: function(radio) {

        for(var i = 0; i < radio.length; i++) {
            if(radio[i].checked) {
                return true;
            }
        }
        return false

    },

    esconderBotoesComAcao: function(numAtividade) {
        if(numAtividade != "7" && numAtividade != "0" && numAtividade != "61" && numAtividade != "64") {
            Campos.excluirConteudoPragmatico().hide();
            Campos.excluirdocumentos_processo().hide();
            $("[id^='divRemoverParticipante']").each(function() {
                $(this).hide();
            });
        }
    },

    duvidaCategoria: function() {
        Swal.fire({
            title: "<strong>Categoria</strong>",
            icon: "info",
            html: `
                <p style="text-align: center;"><strong>Atualmente existem essas categorias</strong></p>
                <p>Jeito de ser - Conteúdos que reforçam nosso propósito, valores e cultura.<p/><hr>
                <p>Jeito de fazer - Conteúdos que apoiam a execução do trabalho, incluindo cursos obrigatórios e certificações.<p/><hr>
                <p>Jeito de liderar - Conteúdos que contribuem com o desenvolvimento dos nossos lideres.<p/>
            `,
        });
    }

};

document.addEventListener("DOMContentLoaded", function(event){
	Formulario.inicializar();
});
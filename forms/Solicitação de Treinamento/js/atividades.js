Atividades = {
    
    inicializar: function(){
        this.desabilitarTodosPaineis();
        this.habilitarPaineisPercorridos(this.listarPaineis());
        this.atualizarCollapse();
    },

    atualizarCollapse: function() {
        switch(Campos.numAtividade().val()) {
            case "8":
                $("#collapseInfosGerais").removeClass("in");
                $('#painelInfosGerais .panel-heading .panel-title a').removeClass("up");
                $("#collapseDadosTreinamento").removeClass("in");
                $('#painelDadosTreinamento .panel-heading .panel-title a').removeClass("up");
                $("#collapseInfosParticipantes").removeClass("in");
                $('#painelInfosParticipantes .panel-heading .panel-title a').removeClass("up");
                $("#collapseJustificativaTreinamento").removeClass("in");
                $('#painelJustificativaTreinamento .panel-heading .panel-title a').removeClass("up");
                $("#collapseInvestimento").removeClass("in");
                $('#painelInvestimento .panel-heading .panel-title a').removeClass("up");

                $("#collapseAprvBP").addClass("in");
                $("#collapseAprvBP .panel-heading .panel-title a").addClass("up");
                break;
            case "10":
                $("#collapseInfosGerais").removeClass("in");
                $('#painelInfosGerais .panel-heading .panel-title a').removeClass("up");
                $("#collapseDadosTreinamento").removeClass("in");
                $('#painelDadosTreinamento .panel-heading .panel-title a').removeClass("up");
                $("#collapseInfosParticipantes").removeClass("in");
                $('#painelInfosParticipantes .panel-heading .panel-title a').removeClass("up");
                $("#collapseJustificativaTreinamento").removeClass("in");
                $('#painelJustificativaTreinamento .panel-heading .panel-title a').removeClass("up");
                $("#collapseInvestimento").removeClass("in");
                $('#painelInvestimento .panel-heading .panel-title a').removeClass("up");

                $("#collapseAreaResponsavel").addClass("in");
                $("#collapseAreaResponsavel .panel-heading .panel-title a").addClass("up");
                break;
            case "49":
                $("#collapseInfosGerais").removeClass("in");
                $('#painelInfosGerais .panel-heading .panel-title a').removeClass("up");
                $("#collapseDadosTreinamento").removeClass("in");
                $('#painelDadosTreinamento .panel-heading .panel-title a').removeClass("up");
                $("#collapseInfosParticipantes").removeClass("in");
                $('#painelInfosParticipantes .panel-heading .panel-title a').removeClass("up");
                $("#collapseJustificativaTreinamento").removeClass("in");
                $('#painelJustificativaTreinamento .panel-heading .panel-title a').removeClass("up");
                $("#collapseInvestimento").removeClass("in");
                $('#painelInvestimento .panel-heading .panel-title a').removeClass("up");

                $("#collapseNivelTreinamento").addClass("in");
                $("#collapseNivelTreinamento .panel-heading .panel-title a").addClass("up");
                break;
            default:
                break;
        }
    },

    habilitarPaineisPercorridos: function(paineis) {
        for(var i in paineis){
            paineis[i].show();
        }
    },

    desabilitarTodosPaineis: function() {
        Campos.painel(Campos.sufixosPaineis.sufixoAprvBP).hide();
        Campos.painel(Campos.sufixosPaineis.sufixoAprvAreaResponsavel).hide();
        Campos.painel(Campos.sufixosPaineis.sufixoNivelTreinamento).hide();
        Campos.painel(Campos.sufixosPaineis.sufixoCorrecaoNotificacao).hide();
    },

    listarPaineis: function(){
        var atividades = this.consultarAtividadesPercorridas();
        
        if(atividades == null) return [];
        atividades = atividades.filter((data, i) => atividades.indexOf(data) === i);
        var mapa = this.mapaDeAtividades();
        var paineis = [];

        mapa.forEach(function(data, i){
            atividades.forEach(function(atividade){
                if(data.atividade.includes(atividade.stateSequence)) {
                    data.paineis.forEach(function(painel){
                        paineis.push(painel);

                        Utils.desabilitarRadio(Campos.radios.labelInterno);
                        Utils.desabilitarRadio(Campos.radios.labelExterno);
                        Utils.desabilitarRadio(Campos.radios.labelInCompany);

                        Utils.desabilitarRadio(Campos.radios.labelEAD);
                        Utils.desabilitarRadio(Campos.radios.labelPresencial);
                        Utils.desabilitarRadio(Campos.radios.labelHibrido);

                        Utils.desabilitarRadio(Campos.radios.labelViajar);
                        Utils.desabilitarRadio(Campos.radios.labelNaoViajar);

                        Utils.desabilitarRadio(Campos.radios.labelIndividual);
                        Utils.desabilitarRadio(Campos.radios.labelEmGrupo);
                    });
                }
            });
        });

        return paineis;
    },

    consultarAtividadesPercorridas: function(){
        if(Formulario.formMode == "ADD") return null;

        var cSolicitacao = Campos.numSolicitacao().val();

        return Datasets.getAtividadesPercorridas(cSolicitacao);
    },

    mapaDeAtividades: function(){
        atividades = [],

        atividades.push(
            {
                atividade: [8], 
                paineis:[
                    Campos.painel(Campos.sufixosPaineis.sufixoAprvBP)
                ]
            });

        atividades.push(
            {
                atividade: [10], 
                paineis:[
                    Campos.painel(Campos.sufixosPaineis.sufixoAprvAreaResponsavel)
                ]
            });

        atividades.push(
            {
                atividade: [49], 
                paineis:[
                    Campos.painel(Campos.sufixosPaineis.sufixoNivelTreinamento)
                ]
            });

        atividades.push(
            {
                atividade: [58], 
                paineis:[
                    Campos.painel(Campos.sufixosPaineis.sufixoCorrecaoNotificacao)
                ]
            });

        return atividades;
    }

}

document.addEventListener("DOMContentLoaded", function(event){
	Atividades.inicializar();
});
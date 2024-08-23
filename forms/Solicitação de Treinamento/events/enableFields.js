function enableFields(form){

    var numAtividade = getValue("WKNumState");

    // Número da Atividade
    form.setValue("numAtividade", numAtividade);
    form.setEnabled("numAtividade", true);

    if(/^(0|7|61|64)$/.test(numAtividade)) {

        // Informações Gerais
        form.setEnabled("matriculaGestorArea", true);
        form.setEnabled("matriculaSolicitante", true);
        form.setEnabled("areaSolicitante", true);
        form.setEnabled("bpRhResponsavel", true);
        form.setEnabled("gestorImediato", true);
        form.setEnabled("unidade", true);
        form.setEnabled("diretoria", true);

        // Dados do Treinamento
        form.setEnabled("nomeTreinamento", true);
        form.setEnabled("nomeInstituicao", true);
        form.setEnabled("contatoInstituicao", true);
        form.setEnabled("inscricoes", true);
        form.setEnabled("dataTreinamento", true);
        form.setEnabled("cargaHoraria", true);
        form.setEnabled("origem",true);
        form.setEnabled("modelo",true);
        form.setEnabled("categoria", true);
        form.setEnabled("tipo", true);

        // Informações dos Participantes
        form.setEnabled("escalaParticipantes", true);
        form.setEnabled("quantidadeParticipantes", true);
        form.setEnabled("anexo_planilhaParticipantes", true);
        form.setEnabled("anexo_documentoNormativo", true);

        // Informações dos Participantes - Filhos
        habilitaCamposTabelaParticipantes(form, numAtividade);
        desabilitaAderenciaADCParticipantes(form, numAtividade);

        // Justificativa de Treinamento
        form.setEnabled("requisito", true);
        form.setEnabled("justificativa", true);
        form.setEnabled("conteudoProgramaticoDescricao", true);
        form.setEnabled("programacaoEventoDescricao", true);
        form.setEnabled("anexo_programacao_evento", true);
        form.setEnabled("anexo_conteudo_programatico", true);
        
        // Investimento
        form.setEnabled("necessarioViajar", true);
        form.setEnabled("especificacao", true);
        form.setEnabled("valorPessoa", true);
        form.setEnabled("valorTotal", true);

        // Aprovar BP
        form.setEnabled("aprovarBP", false)
        form.setEnabled("observacaoBP", false)

        // Aprovar Área Responsável
        form.setEnabled("aprovarAreaResponsavel", false)
        form.setEnabled("observacaoAreaResponsavel", false)

    } else if(/^(8)$/.test(numAtividade)) {

        // Aprovação da BP
        form.setEnabled("aprovarBP", true);
        form.setEnabled("observacaoBP", true);
        
        // Campos de preenchimento anterior
        // Informações Gerais
        form.setEnabled("matriculaGestorArea", false);
        form.setEnabled("matriculaSolicitante", false);
        form.setEnabled("areaSolicitante", false);
        form.setEnabled("bpRhResponsavel", false);
        form.setEnabled("gestorImediato", false);
        form.setEnabled("unidade", false);
        form.setEnabled("diretoria", false);

        // Dados do Treinamento
        form.setEnabled("nomeTreinamento", false);
        form.setEnabled("nomeInstituicao", false);
        form.setEnabled("contatoInstituicao", false);
        form.setEnabled("inscricoes", false);
        form.setEnabled("dataTreinamento", false);
        form.setEnabled("cargaHoraria", false);
        form.setEnabled("origem",false);
        form.setEnabled("modelo",false);
        form.setEnabled("categoria", false);
        form.setEnabled("tipo", false);

        // Informações dos Participantes
        form.setEnabled("escalaParticipantes", false);
        form.setEnabled("quantidadeParticipantes", false);
        form.setEnabled("anexo_planilhaParticipantes", false);
        form.setEnabled("anexo_documentoNormativo", false);

        // Campos da tabela Pai x Filho
        desabilitaCamposTabelaParticipantes(form, numAtividade)
        habilitaAderenciaADCParticipantes(form, numAtividade);

        // Justificativa de Treinamento
        form.setEnabled("requisito", false);
        form.setEnabled("justificativa", false);
        form.setEnabled("conteudoProgramaticoDescricao", false);
        form.setEnabled("programacaoEventoDescricao", false);
        form.setEnabled("anexo_programacao_evento", false);
        form.setEnabled("anexo_conteudo_programatico", false);
        
        // Investimento
        form.setEnabled("necessarioViajar", false);
        form.setEnabled("especificacao", false);
        form.setEnabled("valorPessoa", false);
        form.setEnabled("valorTotal", false);

        // Definição de nível de treinamento
        form.setEnabled("nivelTreinamento", false);
        form.setEnabled("observacaoNivelTreinamento", false);
        
    } else if(/^(10)$/.test(numAtividade)) {
        
        // Aprovação da Área
        form.setEnabled("aprovarAreaResponsavel", true)
        form.setEnabled("observacaoAreaResponsavel", true)

        // Campos de preenchimento anterior
        // Aprovação da BP
        form.setEnabled("aprovarBP", false);
        form.setEnabled("observacaoBP", false);
        
        // Informações Gerais
        form.setEnabled("matriculaGestorArea", false);
        form.setEnabled("matriculaSolicitante", false);
        form.setEnabled("areaSolicitante", false);
        form.setEnabled("bpRhResponsavel", false);
        form.setEnabled("gestorImediato", false);
        form.setEnabled("unidade", false);
        form.setEnabled("diretoria", false);

        // Dados do Treinamento
        form.setEnabled("nomeTreinamento", false);
        form.setEnabled("nomeInstituicao", false);
        form.setEnabled("contatoInstituicao", false);
        form.setEnabled("inscricoes", false);
        form.setEnabled("dataTreinamento", false);
        form.setEnabled("cargaHoraria", false);
        form.setEnabled("origem",false);
        form.setEnabled("modelo",false);
        form.setEnabled("categoria", false);
        form.setEnabled("tipo", false);

        // Informações dos Participantes
        form.setEnabled("escalaParticipantes", false);
        form.setEnabled("quantidadeParticipantes", false);
        form.setEnabled("anexo_planilhaParticipantes", false);
        form.setEnabled("anexo_documentoNormativo", false);

        // Campos da tabela Pai x Filho
        desabilitaCamposTabelaParticipantes(form, numAtividade);
        desabilitaAderenciaADCParticipantes(form, numAtividade);

        // Justificativa de Treinamento
        form.setEnabled("requisito", false);
        form.setEnabled("justificativa", false);
        form.setEnabled("conteudoProgramaticoDescricao", false);
        form.setEnabled("programacaoEventoDescricao", false);
        form.setEnabled("anexo_programacao_evento", false);
        form.setEnabled("anexo_conteudo_programatico", false);
        
        // Investimento
        form.setEnabled("necessarioViajar", false);
        form.setEnabled("especificacao", false);
        form.setEnabled("valorPessoa", false);
        form.setEnabled("valorTotal", false);

        // Definição de nível de treinamento
        form.setEnabled("nivelTreinamento", false);
        form.setEnabled("observacaoNivelTreinamento", false);
        
    } else if(/^(49)$/.test(numAtividade)) {

        // Definição de nível de treinamento
        form.setEnabled("nivelTreinamento", true)
        form.setEnabled("observacaoNivelTreinamento", true)

        // Campos de preenchimento anterior
        // Aprovação da Área
        form.setEnabled("aprovarAreaResponsavel", false)
        form.setEnabled("observacaoAreaResponsavel", false)

        // Aprovação da BP
        form.setEnabled("aprovarBP", false);
        form.setEnabled("observacaoBP", false);
        
        // Informações Gerais
        form.setEnabled("matriculaGestorArea", false);
        form.setEnabled("matriculaSolicitante", false);
        form.setEnabled("areaSolicitante", false);
        form.setEnabled("bpRhResponsavel", false);
        form.setEnabled("gestorImediato", false);
        form.setEnabled("unidade", false);
        form.setEnabled("diretoria", false);

        // Dados do Treinamento
        form.setEnabled("nomeTreinamento", false);
        form.setEnabled("nomeInstituicao", false);
        form.setEnabled("contatoInstituicao", false);
        form.setEnabled("inscricoes", false);
        form.setEnabled("dataTreinamento", false);
        form.setEnabled("cargaHoraria", false);
        form.setEnabled("origem",false);
        form.setEnabled("modelo",false);
        form.setEnabled("categoria", false);
        form.setEnabled("tipo", false);

        // Informações dos Participantes
        form.setEnabled("escalaParticipantes", false);
        form.setEnabled("quantidadeParticipantes", false);
        form.setEnabled("anexo_planilhaParticipantes", false);
        form.setEnabled("anexo_documentoNormativo", false);

        // Campos da tabela Pai x Filho
        desabilitaCamposTabelaParticipantes(form, numAtividade);
        desabilitaAderenciaADCParticipantes(form, numAtividade);

        // Justificativa de Treinamento
        form.setEnabled("requisito", false);
        form.setEnabled("justificativa", false);
        form.setEnabled("conteudoProgramaticoDescricao", false);
        form.setEnabled("programacaoEventoDescricao", false);
        form.setEnabled("anexo_programacao_evento", false);
        form.setEnabled("anexo_conteudo_programatico", false);
        
        // Investimento
        form.setEnabled("necessarioViajar", false);
        form.setEnabled("especificacao", false);
        form.setEnabled("valorPessoa", false);
        form.setEnabled("valorTotal", false);
        
    } else if(/^(58)$/.test(numAtividade)) {

        // Campos de preenchimento anterior
        // Definição de nível de treinamento
        form.setEnabled("nivelTreinamento", false)
        form.setEnabled("observacaoNivelTreinamento", false)

        // Aprovação da Área
        form.setEnabled("aprovarAreaResponsavel", false)
        form.setEnabled("observacaoAreaResponsavel", false)

        // Aprovação da BP
        form.setEnabled("aprovarBP", false);
        form.setEnabled("observacaoBP", false);
        
        // Informações Gerais
        form.setEnabled("matriculaGestorArea", false);
        form.setEnabled("matriculaSolicitante", false);
        form.setEnabled("areaSolicitante", false);
        form.setEnabled("bpRhResponsavel", false);
        form.setEnabled("gestorImediato", false);
        form.setEnabled("unidade", false);
        form.setEnabled("diretoria", false);

        // Dados do Treinamento
        form.setEnabled("nomeTreinamento", false);
        form.setEnabled("nomeInstituicao", false);
        form.setEnabled("contatoInstituicao", false);
        form.setEnabled("inscricoes", false);
        form.setEnabled("dataTreinamento", false);
        form.setEnabled("cargaHoraria", false);
        form.setEnabled("origem",false);
        form.setEnabled("modelo",false);
        form.setEnabled("categoria", false);
        form.setEnabled("tipo", false);

        // Informações dos Participantes
        form.setEnabled("escalaParticipantes", false);
        form.setEnabled("quantidadeParticipantes", false);
        form.setEnabled("anexo_planilhaParticipantes", false);
        form.setEnabled("anexo_documentoNormativo", false);

        // Campos da tabela Pai x Filho
        desabilitaCamposTabelaParticipantes(form, numAtividade);
        desabilitaAderenciaADCParticipantes(form, numAtividade);   

        // Justificativa de Treinamento
        form.setEnabled("requisito", false);
        form.setEnabled("justificativa", false);
        form.setEnabled("conteudoProgramaticoDescricao", false);
        form.setEnabled("programacaoEventoDescricao", false);
        form.setEnabled("anexo_programacao_evento", false);
        form.setEnabled("anexo_conteudo_programatico", false);
        
        // Investimento
        form.setEnabled("necessarioViajar", false);
        form.setEnabled("especificacao", false);
        form.setEnabled("valorPessoa", false);
        form.setEnabled("valorTotal", false);

    }

}

function habilitaCamposTabelaParticipantes(form, numAtividade) {
    var participantes = form.getChildrenIndexes("tbParticipante");
    var i = /^(0|7|61|64)$/.test(numAtividade) ? -1 : 0;
    var sufixo = null;
    
    if(participantes.length > 0) {
        for(i; i < participantes.length; i++) {
            sufixo = i == "-1" ? "" : "___" + participantes[i]
    
            form.setEnabled("tbParticipanteIndice" + sufixo, true);
            form.setEnabled("tbParticipanteMatricula" + sufixo, true);
            form.setEnabled("tbParticipanteNome" + sufixo, true);
            form.setEnabled("tbParticipanteCargo" + sufixo, true);
            form.setEnabled("tbParticipanteAdmissao" + sufixo, true);
            form.setEnabled("tbParticipanteSituacao" + sufixo, true);
            form.setEnabled("tbParticipanteTempoEmpresa" + sufixo, true);
            form.setEnabled("tbParticipantePDI" + sufixo, true);
        }
    }
}

function habilitaAderenciaADCParticipantes(form, numAtividade) {
    var participantes = form.getChildrenIndexes("tbParticipante");
    var i = /^(0|7|61|64|8)$/.test(numAtividade) ? -1 : 0;
    var sufixo = null;
    
    if(participantes.length > 0) {
        for(i; i < participantes.length; i++) {
            sufixo = i == "-1" ? "" : "___" + participantes[i]

            form.setEnabled("tbParticipanteADC" + sufixo, true);
            form.setEnabled("tbParticipanteAderenciaSaber" + sufixo, true);
        }
    }
}

function desabilitaCamposTabelaParticipantes(form, numAtividade) {
    var participantes = form.getChildrenIndexes("tbParticipante");
    var i = /^(0|7|61|64)$/.test(numAtividade) ? -1 : 0;
    var sufixo = null;
    
    if(participantes.length > 0) {
        for(i; i < participantes.length; i++) {
            sufixo = i == "-1" ? "" : "___" + participantes[i]
    
            form.setEnabled("tbParticipanteIndice" + sufixo, false);
            form.setEnabled("tbParticipanteMatricula" + sufixo, false);
            form.setEnabled("tbParticipanteNome" + sufixo, false);
            form.setEnabled("tbParticipanteCargo" + sufixo, false);
            form.setEnabled("tbParticipanteAdmissao" + sufixo, false);
            form.setEnabled("tbParticipanteSituacao" + sufixo, false);
            form.setEnabled("tbParticipanteTempoEmpresa" + sufixo, false);
            form.setEnabled("tbParticipantePDI" + sufixo, false);
        }
    }
}
function desabilitaAderenciaADCParticipantes(form, numAtividade) {
    var participantes = form.getChildrenIndexes("tbParticipante");
    var i = /^(0|7|61|64|8)$/.test(numAtividade) ? -1 : 0;
    var sufixo = null;
    
    if(participantes.length > 0) {
        for(i; i < participantes.length; i++) {
            sufixo = i == "-1" ? "" : "___" + participantes[i]

            form.setEnabled("tbParticipanteADC" + sufixo, false);
            form.setEnabled("tbParticipanteAderenciaSaber" + sufixo, false);
        }
    }
}
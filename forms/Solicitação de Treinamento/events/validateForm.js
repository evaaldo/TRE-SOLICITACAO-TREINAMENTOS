function validateForm(form) {

    var formMode = form.getFormMode();
    var numAtividade = getValue("WKNumState");

    if(/^(0|7|61|64)$/.test(numAtividade)) {

        // Informações Gerais
        if(form.getValue("matriculaGestorArea") == "")
            throw "Favor informar o campo: Matrícula do gestor"
        if(form.getValue("matriculaSolicitante") == "")
            throw "Favor informar o campo: Matrícula do solicitante"
        if(form.getValue("areaSolicitante") == "")
            throw "Favor informar o campo: Área do solicitante"
        if(form.getValue("bpRhResponsavel") == "")
            throw "Favor informar o campo: BP responsável"
        if(form.getValue("gestorImediato") == "")
            throw "Favor informar o campo: Gestor imediato"
        if(form.getValue("unidade") == "")
            throw "Favor informar o campo: Unidade"
        if(form.getValue("diretoria") == "")
            throw "Favor informar o campo: Diretoria"

        // Dados do Treinamento
        if(form.getValue("nomeTreinamento") == "")
            throw "Favor informar o campo: Nome do treinamento"
        if(form.getValue("nomeInstituicao") == "")
            throw "Favor informar o campo: Nome da instituição"
        if(form.getValue("contatoInstituicao") == "")
            throw "Favor informar o campo: Contato da instituição"
        if(form.getValue("inscricoes") == "")
            throw "Favor informar o campo: Inscrições"
        if(form.getValue("dataTreinamento") == "")
            throw "Favor informar o campo: Data do treinamento"
        if(form.getValue("cargaHoraria") == "")
            throw "Favor informar o campo: Carga horária"
        if(form.getValue("origem") == "")
            throw "Favor informar o campo: Origem"
        if(form.getValue("modelo") == "")
            throw "Favor informar o campo: Modelo"
        if(form.getValue("categoria") == "")
            throw "Favor informar o campo: Categoria"
        if(form.getValue("tipo") == "")
            throw "Favor informar o campo: Tipo"

        // Informações dos Participantes
        if(form.getValue("escalaParticipantes") == "")
            throw "Favor informar o campo: Escala de participantes"
        if(form.getValue("quantidadeParticipantes") == "")
            throw "Não existe nenhum participante"
        if(form.getValue("anexo_planilhaParticipantes") == "")
            throw "Favor informar o campo: Planilha de participantes"
        if(form.getValue("anexo_documentoNormativo") == "")
            throw "Favor informar o campo: Documento normativo"

        // Justificativa de Treinamento
        if(form.getValue("requisito") == "")
            throw "Favor informar o campo: Requisito"
        if(form.getValue("justificativa") == "")
            throw "Favor informar o campo: Justificativa"
        if(form.getValue("conteudoProgramaticoDescricao") == "")
            throw "Favor informar o campo: Conteúdo programático"
        if(form.getValue("programacaoEventoDescricao") == "")
            throw "Favor informar o campo: Programação evento"
        
        // Investimento
        if(form.getValue("necessarioViajar") == "")
            throw "Favor informar o campo: Necessário viajar"
        if(form.getValue("especificacao") == "")
            throw "Favor informar o campo: Especificação"
        if(form.getValue("valorPessoa") == "")
            throw "Favor informar o campo: Valor por pessoa"
        if(form.getValue("valorTotal") == "")
            throw "Favor informar o campo: Valor total"

    } else if(/^(8)$/.test(numAtividade)) {

        // Aprovação da BP
        if(form.getValue("aprovarBP") == "")
            throw "Favor informar o campo: Aprovação BP"
        if(form.getValue("observacaoBP") == "")
            throw "Observação BP"

        
    } else if(/^(10)$/.test(numAtividade)) {

        // Aprovação da Área Responsável
        if(form.getValue("aprovarAreaResponsavel") == "")
            throw "Favor informar o campo: Aprovação da área responsável"
        if(form.getValue("observacaoAreaResponsavel") == "")
            throw "Favor informar o campo: Observação da área responsável"
        
    } else if(/^(49)$/.test(numAtividade)) {

        // Definição do nível de treinamento
        if(form.getValue("nivelTreinamento") == "")
            throw "Favor informar o campo: Nível de treinamento"
        if(form.getValue("observacaoNivelTreinamento") == "")
            throw "Favor informar o campo: Observação do nível de treinamento"
        
    }

}
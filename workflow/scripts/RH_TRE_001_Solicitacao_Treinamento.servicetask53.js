function servicetask53(attempt, message) {

    var user = "admin";
    var template = "notifySolicitacaoTreinamento";

    var destinatario;
    var complementoAssunto;
    var treinamento;

    switch(String(hAPI.getCardValue("nivelTreinamento"))) {
        case "treinamentoTecnico":
            destinatario = "evaldojunior@3coracoes.com.br";
            complementoAssunto = "técnico";
            treinamento = "Treinamento técnico";
            break;
        case "treinamentoLideranca":
            destinatario = "evaldojunior@3coracoes.com.br";
            complementoAssunto = "de liderança";
            treinamento = "Treinamento de liderança";
            break;
        case "treinamentoCultura":
            destinatario = "evaldojunior@3coracoes.com.br";
            complementoAssunto = "de cultura";
            treinamento = "Treinamento de cultura";
            break;
        default:
            break;
    }
    
    var parametros = new java.util.HashMap();
    
    var assuntoEmail = "[TREINAMENTOS] Solicitação de treinamento " + complementoAssunto;

    parametros.put("subject", assuntoEmail);
    parametros.put("complementoAssunto", complementoAssunto);
    parametros.put("treinamento", treinamento);
    parametros.put("numSolicitacao", String(getValue("WKNumProces")));
    parametros.put("solicitante", String(hAPI.getCardValue("matriculaSolicitante")));
    parametros.put("dataInscricao", String(hAPI.getCardValue("inscricoes")));
    parametros.put("dataTreinamento", String(hAPI.getCardValue("dataTreinamento")));
    
    //Lista de Email dos destinatarios
	var destinatarios = new java.util.ArrayList();
	destinatarios.add("evaldojunior@3coracoes.com.br");
	    
	//Envia e-mail, com o Template configurado
    notifier.notify(user, template, parametros, destinatarios, "text/html");
    
}
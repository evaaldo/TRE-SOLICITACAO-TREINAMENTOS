var Utils = {

    UrlAmbienteAtual: function() {
        var ambientes_tabelas = {
            "dev"  : "https://fluigdev.santaclara.com.br/",
            "qa"   : "https://fluigqa.santaclara.com.br",
            "prod" : "https://fluig.3coracoes.com.br/"
        }

        var tabela  = ambientes_tabelas["prod"];

        var hostname = window.location.href;

        for(var ambiente in ambientes_tabelas){
            var regex = new RegExp(ambiente);
            if (regex.test(hostname)) {
                tabela = ambientes_tabelas[ambiente];
                break;
            }
        }
        return tabela;
    },
    
    desabilitarRadio: function(idRadioLabel) {
        var radio = $("#" + idRadioLabel);
        radio.css({
            "pointer-events": "none",
            "opacity": "0.5"
        });
        radio.closest('label').css({
            "color": "gray"
        });
    },

    habilitarRadio: function(idRadioLabel) {
        var radio = $("#" + idRadioLabel);
        radio.css({
            "pointer-events": "auto",
            "opacity": "1"
        });
        radio.closest('label').css({
            "color": "black"
        });
    },

    ocultarBotoesExclusao: function() {
        Campos.excluirConteudoPragmatico().hide();
        Campos.excluirdocumentos_processo().hide();
        Campos.linhasTbParticipantes().each(function() {
            $(this).find(Campos.btnRemoverParticipante()).hide();
        });
    },

    exibirAlerta: function(iconePersonalizado, tituloPersonalizado, textoPersonalizado) {
        AlertaCustomizadoX = new AlertaCustomizado(iconePersonalizado,tituloPersonalizado,textoPersonalizado,'');
        AlertaCustomizadoX.exibeAlerta1();
    }

}
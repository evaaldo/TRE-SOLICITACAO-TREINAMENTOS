    var beforeSendValidate = function (numState, nextState) {
        validaCampos(parseInt(numState));
        validaCamposComCondicoesTabelaFilho(parseInt(numState), parseInt(nextState));
        removeClassErrorTable();

        var areaValidate = Formulario.verificaExistenciaArea(Campos.areaSolicitante());
        var tableValidate = validateParticipantTableScale();

        if(tableValidate == false || areaValidate == false) {
            return false;
        } else {
            return exibeCamposObrigatorios();
        }
    };

    function getValue(name) {
        if ($("[name='" + name + "']").attr("type") == "radio") {
            var objRadio = document.querySelector('input[name="' + name + '"]:checked');

            if (objRadio == null || objRadio === undefined) {
            return "";
            } else {
            return objRadio.value;
            }
        }
        if (
            $("[name='" + name + "']").attr("type") == "checkbox" &&
            !document.getElementsByName(name)[0].checked
        ) {
            return "";
        }
        return document.getElementsByName(name)[0].value;
    }

    function validaCampos(atividade) {
        var camposObrigatorios = Classes.obterCamposObrigatorios(atividade);
        for (var i in camposObrigatorios) {
            addHasFree(camposObrigatorios[i]);
        }
    };

    function validaCamposComCondicoesTabelaFilho(atividade, nextState) {
        if (/^(0|7|61|64)$/.test(atividade)) {
            addHasFreeTable("input", "tbParticipanteIndice", 0);
            addHasFreeTable("input", "tbParticipanteMatricula", 0);
            addHasFreeTable("input", "tbParticipanteNome", 0);
            addHasFreeTable("input", "tbParticipanteCargo", 0);
            addHasFreeTable("input", "tbParticipanteAdmissao", 0);
            addHasFreeTable("input", "tbParticipanteSituacao", 0);
            addHasFreeTable("input", "tbParticipanteTempoEmpresa", 0);
            addHasFreeTable("select", "tbParticipantePDI", 0);
        } else if(/^(8|10)$/.test(atividade)) {
            addHasFreeTable("input", "tbParticipanteADC", 0);
            addHasFreeTable("textarea", "tbParticipanteAderenciaSaber", 0);
        }
    }

    function addHasFree(name) {
        $("[name='" + name + "']").addClass("has-free");
    };

    function addHasFreeTable(type, name, valida) {
        var contador = 0;
        if (valida == 0) {
            $("table tbody " + type + '[name^="' + name + '___"]').each(function (index, el) {
                contador++;
                if (getValue(this.name) == "") {
                    console.log("ESSE CAMPO TA VAZIO: " + this.name);
                    $(this).addClass("has-free-table");
                } else if (getValue(this.name) != "") {
                    console.log("ESSE CAMPO NÃO TA VAZIO: " + this.name);
                    $(this).removeClass("has-free-table");
                    $(this).closest("div").removeClass("has-error");
                }
            });
            if (contador == 0) {
            $("table tbody " + type + "[name^='" + name + "']").addClass(
                "has-free-table"
            );
            }
        } else if (valida == 1) {
            $("table tbody " + type + "[name^='" + name + "___']").addClass(
            "has-free-table"
            );
        }
    };

    function removeHasFree(name) {
        $("[name='" + name + "']").removeClass("has-free");
    };

    function removeHasFreeTable(type, name) {
        $(type + "[name='" + name + "']").removeClass("has-free-table");
        $(type + "[name^='" + name + "___']").removeClass("has-free-table");
    };

    function removeClassError() {
        $(".has-error").removeClass("has-error");
        $(".has-free").removeClass("has-free");
        $(".has-free-table").removeClass("has-free-table");
        $(".has-free-array").removeClass("has-free-array");
        $(".has-free-msg").removeClass("has-free-msg");
        $("form").find("label").css("color", "rgb(89,89,89)");
        $("form").find("th").css("color", "rgb(89,89,89)");
    };

    function removeClassErrorTable() {
        var arrayFilhos = ["tbParticipanteIndice","tbParticipanteMatricula","tbParticipanteNome","tbParticipanteCargo","tbParticipanteAdmissao","tbParticipanteSituacao","tbParticipanteTempoEmpresa","tbParticipanteADC","tbParticipanteAderenciaSaber","tbParticipantePDI"]

        arrayFilhos.forEach((filho) => {
            $("#" + filho).removeClass("has-free-table");
            $("#" + filho).closest("div").removeClass("has-error");
        })        
    }

    function validateParticipantTableScale() {
        if($("#escalaParticipantes").val() == "menosCincoParticipantes" && Campos.linhasTbParticipantes().length == 1) {
            $("#planilhaParticipantesLbl").css("color", "rgb(89,89,89)");
            $("#planilhaParticipantes").removeClass("has-free");
            $("#anexo_planilhaParticipantes").removeClass("has-free");
            $("#divAdicionarPlanilhaParticipantes").removeClass("has-error");

            $("#documentoNormativoLbl").css("color", "rgb(89,89,89)");
            $("#documentoNormativo").removeClass("has-free");
            $("#anexo_documentoNormativo").removeClass("has-free");
            $("#divAdicionarDocumentoNormativo").removeClass("has-error");

            console.log("NÃO FORAM ADICIONADOS PARTICIPANTES");
            Utils.exibirAlerta("error", "Sem participantes!", "Deve ser adicionado ao menos um participante para seguir com o processo.");
            return false;
        } else if($("#escalaParticipantes").val() == "maisCincoParticipantes") {
            addHasFree("planilhaParticipantes");
            addHasFree("anexo_planilhaParticipantes");
            $("#planilhaParticipantesLbl").css("color", "rgb(169,68,66)");

            addHasFree("documentoNormativo");
            addHasFree("anexo_documentoNormativo");
            $("#documentoNormativoLbl").css("color", "rgb(169,68,66)");
        } else if($("#escalaParticipantes").val() != "maisCincoParticipantes") {
            $("#planilhaParticipantesLbl").css("color", "rgb(89,89,89)");
            $("#planilhaParticipantes").removeClass("has-free");
            $("#anexo_planilhaParticipantes").removeClass("has-free");
            $("#divAdicionarPlanilhaParticipantes").removeClass("has-error");

            $("#documentoNormativoLbl").css("color", "rgb(89,89,89)");
            $("#documentoNormativo").removeClass("has-free");
            $("#anexo_documentoNormativo").removeClass("has-free");
            $("#divAdicionarDocumentoNormativo").removeClass("has-error");
        }
    }

    function validateDataTreinamento(dataInscricaoStr,dataTreinamentoStr) {
        var dataInscricao = new Date(dataInscricaoStr.split('/').reverse().join('-'));
        var dataTreinamento = new Date(dataTreinamentoStr.split('/').reverse().join('-'));
        
        if (dataInscricao > dataTreinamento) {
            Utils.exibirAlerta("error", "Data de treinamento", "A data de treinamento não pode ser anterior a data de inscrição");
            return false;
        } else if (dataInscricao < dataTreinamento) {
            return true;
        } else {
            return true;
        }
    }

    function exibeCamposObrigatorios() {
        var camposObrigatorios = new Array();

        $(".has-free").each(function () {
            var tagName = $(this).prop("tagName");
            var label,
                data_date,
                data_hour,
                data_date_hour,
                value;

            switch (tagName) {
                case "INPUT":
                type = $(this).prop("type");
                data_date = $(this).attr("data-date");
                data_hour = $(this).attr("data-hour");
                data_date_hour = $(this).attr("data-date-hour");

                if (
                    data_date != undefined ||
                    data_hour != undefined ||
                    data_date_hour != undefined
                ) {
                    value = $(this).val();
                    label = $(this).closest(".form-group").find("label").text();
                    if (value == "") {
                    camposObrigatorios.push(label);
                    $(this).closest(".form-group").addClass("has-error");
                    $(this)
                        .closest(".form-group")
                        .find("label")
                        .css("color", "rgb(169,68,66)");
                    } else {
                    $(this).closest(".has-error").removeClass("has-error");
                    $(this)
                        .closest(".form-group")
                        .find("label")
                        .css("color", "rgb(89,89,89)");
                    }
                } else {
                    value = $(this).val();
                    label = $(this).closest(".form-group").find("label").text();
                    if (value == "" || value == undefined || value == null) {
                    camposObrigatorios.push(label);
                    $(this).closest(".form-group").addClass("has-error");
                    $(this)
                        .closest(".form-group")
                        .find("label")
                        .css("color", "rgb(169,68,66)");
                    }
                    if (value != "") {
                    $(this).closest(".has-error").removeClass("has-error");
                    $(this)
                        .closest(".form-group")
                        .find("label")
                        .css("color", "rgb(89,89,89)");
                    }
                }
                break;

                case "SELECT":
                value = $(this).val();
                label = $(this).closest(".form-group").find("label").text();
                if (value == "" || value == undefined || value == null) {
                    camposObrigatorios.push(label);
                    $(this).closest(".form-group").addClass("has-error");
                    $(this)
                    .closest(".form-group")
                    .find("label")
                    .css("color", "rgb(169,68,66)");
                } else if (value != "") {
                    $(this).closest(".has-error").removeClass("has-error");
                    $(this)
                    .closest(".form-group")
                    .find("label")
                    .css("color", "rgb(89,89,89)");
                }
                break;

                case "TEXTAREA":
                value = $(this).val();
                label = $(this).closest(".form-group").find("label").text();
                if (value == "" || value == undefined || value == null) {
                    camposObrigatorios.push(label);
                    $(this).closest(".form-group").addClass("has-error");
                    $(this)
                    .closest(".form-group")
                    .find("label")
                    .css("color", "rgb(169,68,66)");
                } else if (value != "") {
                    $(this).closest(".has-error").removeClass("has-error");
                    $(this)
                    .closest(".form-group")
                    .find("label")
                    .css("color", "rgb(89,89,89)");
                }
                break;
            }
        });

        $(".has-free-table").each(function (index, el) {
            var type = $(this).attr("type"),
                name = this.name;
            if (getValue(name) == "" && type != "hidden") {
                $('table tbody [name*="' + name + '"]')
                .closest("div")
                .addClass("has-error");
                indice = $($(this).closest("tr").find("td")).index($(this).closest("td"));
                //label = $(this).closest('table').find('thead tr th').eq(indice).text();
                label = $(this).closest(".form-group").find("label").text();

                if (camposObrigatorios.indexOf(label) < 0) {
                camposObrigatorios.push(label);
                $(this)
                    .closest("table")
                    .find("thead tr th")
                    .eq(indice)
                    .css("color", "rgb(169,68,66)");
                }
            }
        });

        if (camposObrigatorios.length > 0) {
            var txtErro =
                "<b style='text-center'>Os campos abaixo são de preenchimento obrigatório <b>: </b> <ul> ";
            for (var i = 0; i < camposObrigatorios.length; i++) {
                txtErro += "<li>" + camposObrigatorios[i] + "</li>";
            }
            txtErro += "</ul>";

            Swal.fire({
                title: "<strong>Campos Obrigatórios</strong>",
                icon: "error",
                html: txtErro,
            });

            return false;
        }

        return true;

    }

function validateForm(form){
    var formMode = form.getFormMode();
    var origem = form.getValue("origem");
    
    if (formMode == "ADD" ) {
		var dsRetorno = DatasetFactory.getDataset(
				'DSCadastrarOrigemdeTreinamento',
				null,
				[   
                    DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST),
                    DatasetFactory.createConstraint("origem", origem, origem, ConstraintType.MUST)
                ],
				null
			).getMap().iterator();
            
        if (dsRetorno.hasNext()) {
		    throw 'Registro já existe.';
		}
   	}
}
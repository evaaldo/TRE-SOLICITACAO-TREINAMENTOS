function validateForm(form){
    var formMode = form.getFormMode();
    var modelo = form.getValue("modelo");
    
    if (formMode == "ADD" ) {
		var dsRetorno = DatasetFactory.getDataset(
				'DSCadastrarModelodeTreinamento',
				null,
				[   
                    DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST),
                    DatasetFactory.createConstraint("modelo", modelo, modelo, ConstraintType.MUST)
                ],
				null
			).getMap().iterator();
            
        if (dsRetorno.hasNext()) {
		    throw 'Registro já existe.';
		}
   	}
}
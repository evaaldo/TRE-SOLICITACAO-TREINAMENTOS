function displayFields(form,customHTML){
	var formMode = form.getFormMode();

	customHTML.append('<script type="text/javascript">');
	customHTML.append('Formulario.formMode = "' + formMode + '";');
        
	customHTML.append('</script>');
}
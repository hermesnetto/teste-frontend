export default date => {
	var d = new Date(date);
	return d.toLocaleDateString('pt-BR');
};
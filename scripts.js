const nome = 'Carla';
const sexo = 'Feminino';
const idade = 22;
const contribuicao = 30;

const cont_years = idade + contribuicao;

const homemAposenta = sexo == 'Masculino' && contribuicao >= 35 && cont_years >= 95;
const mulherAposenta = sexo == 'Feminino' && contribuicao >= 30 && cont_years >= 85;

if (homemAposenta || mulherAposenta) {
	console.log(`${nome} você pode se aposentar!`);
} else {
	console.log(`${nome} você ainda não pode se aposentar!`);
}

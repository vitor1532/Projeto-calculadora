console.log('Hello World')
//função que determina o valor e/ou o tipo da tecla
function calcular(tipo, valor) {

	//se o tipo for acao, escrever na tela
	if(tipo === 'acao'){

		//se o valor for c, limpar a tela
		if(valor === 'c'){

			document.getElementById('resultado').value = ''

		}

		//se o valor for *, -, +, / ou ., escrever na tela
		if(valor === '*' || valor === '-' || valor === '+' || valor === '/' || valor === '.'){

			document.getElementById('resultado').value += valor

		}

		//se o valor for =, efetuar o cálculo
		if(valor === '='){

			//variável do cálculo
			var valor_campo = eval(document.getElementById('resultado').value)

			document.getElementById('resultado').value = valor_campo

		}

	} else if (tipo === 'valor'){
		
		document.getElementById('resultado').value += valor


	}

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	public resultado: String = "Resultado"
  public precoGasolina
  public precoAlcool

	calcular(){

		//Validar se os campos foram preenchidos
		if( this.precoAlcool && this.precoGasolina ){
			
			var pAlcool = parseFloat(this.precoAlcool)
			var pGasolina = parseFloat(this.precoGasolina)

			/*
			Faz cÃ¡lculo (precoAlcool / precoGasolina)
			se: resultado >= 0.7 melhor utilizar gasolina
			senÃ£o: melhor utilizar Ã¡lcool
			*/
			var res = pAlcool / pGasolina
			if( res >= 0.7){
				this.resultado = "Melhor utilizar Gasolina"
			}else{
				this.resultado = "Melhor utilizar Ãlcool"
			}

		}else{
			this.resultado = "Preencha corretamente os campos!"
		}

	}

}

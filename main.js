'use strict'

$(document).ready(function () {
  axios({
    method: 'get',
    url: 'https://portadafrente.dev.srtecnologia.com'
  })
	
    .then(function (response) {

      $(response.data).each(function () {
        $('#loading').hide();
		$('#coluna').removeClass('d-none');
		$('#container').prepend(
				  `<div class="col-6 cards" data-localidades="${this.Town._text}" data-min="${this.Forsale._text}">
					<div class="card">
					  <div id="${this.Reference._text}" class="carousel slide" data-ride="carousel">
						<div class="carousel-inner">
						  <div class="carousel-item active">
							<img class="imagemSlide" src="${this.ImageLink.image[0]._text}">
						  </div>
						  <div class="carousel-item">
							<img class="imagemSlide" src="${this.ImageLink.image[1]._text}">
						  </div>
						  <div class="carousel-item">
							<img class="imagemSlide" src="${this.ImageLink.image[2]._text}">
						  </div>
						</div>
						<a class="carousel-control-prev" href="#${this.Reference._text}" role="button" data-slide="prev">
						  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
						  <span class="sr-only">Anterior</span>
						</a>
						<a class="carousel-control-next" href="#${this.Reference._text}" role="button" data-slide="next">
						  <span class="carousel-control-next-icon" aria-hidden="true"></span>
						  <span class="sr-only">Próximo</span>
						</a>
					  </div>
					  <div class="card-body">
						<h5 class="card-title" id="imovel">${this.Propertytype._text} - T${this.Rooms._text}</h5>
						<h6 class="card-title" id="localidade"> ${this.Town._text} </h6>
						<p class="card-text"> ${this['Description_pt-PT']._text} </p>
						<div class="container">
						  <div class="row align-items-start">
							<div class="col"> ${this.Rooms._text} <br> quartos</div>
							<div class="col"> # <br> suítes</div>
							<div class="col"> ${this.Bathrooms._text} <br> banheiros</div>
							<div class="col"> # <br> vagas</div>
							<div class="col"> ${this.Netarea._text} <br> m²</div>
							<div class="col" id="min"> ${this.Forsale._text} <br> €</div>
						  </div>
						</div>
						<div class="divButtonCod">
						  <button type="button" class="btn " id="botaoContato" data-toggle="modal" data-target="#ExemploModalCentralizado" >Contato</button>
						  <label class="codigoImovel" id="codigoImovel" >${this.Reference._text}</label>
						</div>
					  </div>
					</div>
				  </div>`
        );
      });
    })
    .catch(function (error) {
      console.log(error)
    })

}) 
	
	$("#inputLocalidade, #inputMin").on("keyup", function(e){
		e.preventDefault();
		
		filtrar();
	});
	
	
	function filtrar () {
		$(".cards").fadeOut();
		
		var localidades = $("#inputLocalidade").val();
		var min = $("#inputMin").val();
		
		$(".cards").filter(function(index) {
			return $(this).data("localidades").toLowerCase() === localidades.toLowerCase()
			 && $(this).data("min").toString().toLowerCase() === min.toString().toLowerCase();
		}).fadeIn();
	}
	

	

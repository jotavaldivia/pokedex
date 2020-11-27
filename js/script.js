

$("#searchButton").click(function(e){
    var name = $("#searchInput").val()
    getData(name)
});

$("#cleanButton").click(e=>{
    limpiar();
  })
  function limpiar(){
    $("#card").empty();
    $("#searchInput").focus();
    
  }

function getData(name){

    $.ajax({
    type:"GET",
    url: `https://pokeapi.co/api/v2/pokemon/${name}`

    }).done(function(data){
        console.log(data)
       var res = $("#card")
    res.append(`
    
    <div class="col-sm-12 col-md-3">
  <div class="card" style="width:100%;">
    <img src="${data.sprites.front_default}"  class="card-img-top img-fluid" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <div>experiencia : ${data.base_experience}</div>
      <div>Especie : ${data.types[0].type.name}</div>
    </div>
  </div>
</div>

    
    `



    )


    }).fail(function(error){
        console.log(error);
    })
  

}


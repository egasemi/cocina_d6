$(document).ready(function() {
    var requestURL = "https://spreadsheets.google.com/feeds/cells/1qDfmW1_zmA9zVq-dk8XV3YwREsJCUxFEcLAz37LwTPE/3/public/values?alt=json";
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    espacios = [];
    var array = request.response.feed.entry;
    for (var i = 0; i < array.length; i++) {
      espacios.push(array[i].content.$t);
    }
    //console.log(espacios);
    for (var i = 0; i < espacios.length; i++) {
      $("#espacio").append("<option>" + espacios[i] + "</option>")
    }
  }


    //$("#x").click(function cancelarPedido() {
      //$("#celu").val('');
      //$("#enteras").val(0);
      //$("#descremadas").val(0);
      //$('#myModal').on('hidden.bs.modal', function (e) {
        //$("#celu").focus();
        //$("#pedido").hide();
      //})
    //})

})
datos = [];
  $("#pedido").click(function validacion() {
    datos.push($("#espacio").val())
    datos.push($("#retira").val())
    datos.push($("#celu").val())
    datos.push($("#raciones").val())
    datos.push($("#delivery").val())
    cadena = datos.join("|");
    var url = "docs.google.com/forms/d/e/1FAIpQLSd7-OHyJrTWN_g6FnOjgL0Yzy3p4C8r8S1HlUj0GYlAqltceQ/viewform?usp=pp_url&entry.1537211667="
    window. location = url + cadena
    console.log(datos);
    console.log(cadena);
  })

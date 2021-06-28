function addRow(data)    
{    
    let headers = Object.keys(data)
    let tblRow = '<tr>';
    for(let h of headers){
      tblRow = tblRow + '<td>' + data[h] + '</td>';
    }
    tblRow = tblRow + '</tr>';
    $("#results").append(tblRow);    
}    

function addRows(data)    
{    
    let headers = Object.keys(data)
    let tblRow = '<tr>';
    for(let h of headers){
      tblRow = tblRow + '<td>' + data[h] + '</td>';
    }
    tblRow = tblRow + '</tr>';
    $("#results2").append(tblRow);    
}  


function addRow1(data)    
{    
    let headers = Object.keys(data)
    let tblRow = '<tr>';
    for(let h of headers){
      tblRow = tblRow + '<td>' + data[h] + '</td>';
    }
    tblRow = tblRow + '</tr>';
    $("#results1").append(tblRow);    
}

$("#button").click(function(){
    let input = $("#input").val();
    $.get(`https://jsonplaceholder.typicode.com/todos/${input}`, function(data, status){
      if(status == "success"){
         console.log(data)
          addRow(data)
      }
    });
});


$("#button1").click(function(){
  let input = $("#input1").val();
  $.get(`https://azt109-backend.azurewebsites.net/service/${input}`, function(data, status){
    if(status == "success"){
       console.log(data)
        addRow1(data)
    }
  });
});

$("#button2").click(function(){
  $.get(`https://azt109-backend.azurewebsites.net/testconnection`, function(data, status){
    if(status == "success"){
       $("#res").html(data.message)
    }
  });
});

$("#button3").click(function(){
  $.get(`https://azt109-backend.azurewebsites.net/getservicesfromdb`, function(data, status){
    if(status == "success"){
      for(let i=0;i<data.data;i++){
        addRows(data.data[i]);
      }    
    }
  });
});
var tables = JSON.parse(tableJSON);
var items = JSON.parse(itemJSON);


function loadPage() {
  for (var i = 0; i < tables.length; i++) {
    var div = document.createElement('div');
    div.id = i;
    div.className = "table";
    div.innerText = "Table-" + tables[i].tableNo ;
    

    var divInfo = document.createElement('div');
    divInfo.id = 'T' + (i + 1);
    divInfo.className = "info";
    divInfo.innerText = "Rs. " + tables[i].amount + " | Total items: " + tables[i].itemNos;
    div.appendChild(divInfo);
    document.getElementById('tableBox').appendChild(div);
  }

  for (var i = 0; i < items.length; i++) {
    var div = document.createElement('div');
    div.id = items[i].id;
    div.className = "items";
    div.innerText = items[i].name + " (Category: " + items[i].type + ")";
    

    var divInfo = document.createElement('div');
    divInfo.className = "info";
    divInfo.innerText = "Rs. " + items[i].cost;
    div.appendChild(divInfo);
    document.getElementById('itemBox').appendChild(div);
  }
}


var testArry=['6am','7am','8am','9am','3pm','7pm'];
var totalArray=[0,0,0,0,0,0]
function getRandomInt(min,max){
min=Math.ceil(min);
max=Math.floor(max);
return Math.floor(Math.random()*(max-min))+min;
}

function addTime() { // Add the header
    var container = document.getElementById('locationsInfo');
    if(container !== null){
      var row = document.createElement('tr');// add row to the table
      var cell = document.createElement('th');// add header cell
      var cellText = document.createTextNode('');// first cell is empty
      cell.appendChild(cellText);
      row.appendChild(cell);
      for(var i=0; i < testArry.length; i++){
        cell = document.createElement('th');
        cellText = document.createTextNode(testArry[i]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      cell = document.createElement('th');
      cellText = document.createTextNode('Daily Location Total');
      cell.appendChild(cellText);
      row.appendChild(cell);
  
      container.appendChild(row);
  
    }
  }


  function clearTotal(){
    total_cookies=[0,0,0,0,0,0];
}
 
function addTotal(i,v){
    total_cookies[i]=total_cookies[i]+v;
}
 
function appendTotal(){
    var total=0;
    var Container=document.getElementById('locationsInfo');
    if (Container !==null){
        var row = document.createElement('tr');
        var cell=document.createElement('td');
        var celltext=document.createElement('Total');
        cell.appendChild(celltext);
        row.appendChild(cell);
        for(var i=0; i<total_cookies.length;i++){
        cell=document.createElement('td');
        celltext=document.createTextNode(total_cookies[i]);
        cell.appendChild(celltext);
        row.appendChild(cell);
        total+=total_cookies[i];
    }
        cell=document.createElement('td');
        celltext=document.createTextNode(total);
        cell.appendChild(celltext);
        row.appendChild(cell);
        Container.appendChild(row);}}

 var newlocation =[];       
function Locations(name,min1,max1,averagco){
this.name=name;
this.min1=min1;
this.max1=max1;
this.averagco=averagco;
this.custemerArr=[];
this.cookies=0;
this.total=0;
this.number=0;
this.cookies=[];
newlocation.push(this);
}

Locations.prototype.custemerNumber=function(){
    for(var i=0; i<testArry.length;i++){
        this.number=getRandomInt(this.min1,this.max1);
        var product =Math.floor(this.number*this.averagco);
        this.cookies.push(product);
        this.total+=product
        var message2=testArry[i]+':'+product+'cookies';
        this.custemerArr.push(message2);
        console.log('number',this.number);}
    }

    Locations.prototype.render = function () { // output the text in the sales.html
        var container = document.getElementById('Locations');
        if(container !== null){ // in case the id does not exist, needed when visiing the index.html
          var div_name = document.createElement('h2');
          div_name.textContent = this.name;
          container.appendChild(div_name);
          div_name.className = 'locationName';
      
          var ulEL = document.createElement('ul');
          container.appendChild(ulEL);
          for (let index = 0; index < testArray.length; index++) {
            var liEl = document.createElement('li');
            liEl.textContent = this.customerArr[index];
            ulEL.appendChild(liEl);
          }
          var total_li = document.createElement('li');
          total_li.textContent = 'Total : ' + this.total + ' cookies';
          ulEL.appendChild(total_li);
      
          ulEL.className = 'list_cookies';
        }
      };

        

  Locations.prototype.renderTable = function () { // print the table, there should be a table with id = locationsInfo
    var container = document.getElementById('locationsInfo');
    if(container !== null){
      var row = document.createElement('tr');
      var cell = document.createElement('td');
      var cellText = document.createTextNode(this.name);
      cell.appendChild(cellText);
      row.appendChild(cell);
      for(var i=0; i < testArry.length; i++){
        cell = document.createElement('td');
        cellText = document.createTextNode(this.cookies[i]);
        cell.appendChild(cellText);
        row.appendChild(cell);
        addTotal(i,this.cookies[i]);
      }
      cell = document.createElement('td');
      cellText = document.createTextNode(this.total);
      cell.appendChild(cellText);
      row.appendChild(cell);
  
      container.appendChild(row);
  
    }
  };
  

           
                
            clearTotal();
            addTime();

            var seatel=new Locations('seatel',23,65,6.3);
            seatel.custemerNumber();
            seatel.render();
            seatel.renderTable();

            var Tokyo=new Locations('Tokyo',24,100, 9.3);
            Tokyo.custemerNumber();
            Tokyo.render();
            Tokyo.renderTable();

            appendTotal();



            for (var i=0 ; i<newlocation;i++){
              newlocation[i].render();}

              var locationform=document.getElementById('locationform');
              locationform.addEventListener('submit',function(event){
              event.preventDefault();
              var name=event.target.name.value;
              console.log(event);
              console.log(name);
              var min1=event.target.min1.value;
              console.log(min1);
              var max1=event.target.max1.value;
              console.log(max1);
              var averagco=event.target.averagco.value;
              console.log(averagco);
              let table=document.querySelector('table');

              table.deleteRow(3);
              var newlocation=new Locations(name,min1,max1,averagco);
              console.log(newlocation);
              newlocation.custemerNumber();
              newlocation.render();
              newlocation.renderTable();
              appendTotal();
            });

            
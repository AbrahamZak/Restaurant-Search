import {} from 'googlemaps';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'restaurants';
  status = 0;
  searchVal;
  restaurantSelect;
  showMainContent = false;

constructor() { }

newMessage(search) {
  this.searchVal = search;
  this.status = 1;
   var request = {
    query: "restaurants near " + search
};

var container = document.getElementById('results') as HTMLDivElement;
container.style.display = "block";
var service = new google.maps.places.PlacesService(container);

service.textSearch(request, callback);

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
   container.innerHTML += '<li style="cursor: pointer" class="list-group-item"><strong>' + results[i].name + '</strong></li>';
        }
      }
    }
  }

  onSelect(restaurant){
    var list = document.getElementById("results");
    list.style.display = "none";
    this.status = 2;
    this.restaurantSelect = restaurant;
  }

  goBack(){
    this.status = 1;
    var list = document.getElementById("results");
    list.style.display = "block";
  }
}
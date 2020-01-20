import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  @Input() restaurant;
  @Input() searchValue;

  constructor() { }

  ngOnInit() {
    this.onSelect();
    }

  onSelect(){
    var request = {
      query: "restaurants near " + this.searchValue
  };

  var restaurant = this.restaurant;
  var container = document.getElementById('details') as HTMLDivElement;
  var service = new google.maps.places.PlacesService(container);
  
  service.textSearch(request, callback);
  
  function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          if (results[i].name == restaurant){
            var image = '<img src="' + results[i].photos[0].getUrl({maxWidth: 400, maxHeight: 400}) + '" class="card-img-top">'
            container.innerHTML += image + '<h5 class = "card-title">' +  results[i].name + '</h5> <p class="card-text"><strong>' + results[i].rating + ' / 5</strong></p> <p class= "card-text">' + results[i].formatted_address + '</p>';
            
            }
          }
        }
      }
    }
  }



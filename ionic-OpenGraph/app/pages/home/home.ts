import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as $ from 'jquery'

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
  link;
  constructor(private navCtrl: NavController) {
   
  
  }


showPreview(){
    var url=this.link;
      var urlEncoded;

if (url.includes('https://tw.news.yahoo.com/')){
   url = url.replace("https://tw.news.yahoo.com/", "");
      urlEncoded = encodeURIComponent(url);
  var  newUrl= "https://tw.news.yahoo.com/"+ urlEncoded ;
       urlEncoded = encodeURIComponent(newUrl);

}else {
 urlEncoded = encodeURIComponent(url);
}

var requestUrl = "https://opengraph.io/api/1.0/site/" + urlEncoded ;

var apiKey;
// If the apiKey is set then we build the URL like this!  
if(apiKey){
  requestUrl = "https://opengraph.io/api/1.0/site/" + urlEncoded + '?app_id=' + apiKey;
}


  $.getJSON(requestUrl, function( json ) {
  
    // Throw the object in the console to see what it looks like!
    console.log('json', json);
          
    // Update the HTML elements!
    $('#title').text(json.hybridGraph.title);
    $('#description').text(json.hybridGraph.description);
    $('#icon').attr('src', json.hybridGraph.image);
    $('#site').text(json.hybridGraph.site_name);
    
  });    

  }

}

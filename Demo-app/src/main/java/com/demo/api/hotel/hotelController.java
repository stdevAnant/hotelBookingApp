package com.demo.api.hotel;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@RestController
public class hotelController {
	
    @CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/hotelsByCity/{id}")
	public String getHotelsByCity(@PathVariable String id) {
    	  String server = "https://developers.zomato.com/api/v2.1/collections?city_id=";
    	  RestTemplate rest = new RestTemplate();
    	  HttpHeaders headers = new HttpHeaders();
    	  HttpStatus status ;
    	  headers.add("Content-Type", "application/json");
    	    headers.add("Accept", "*/*");
    	    headers.add("user-key", "553f1d0a16a11c8ac225b20d60d7b849");
    	    System.out.println(server+id);
    	    HttpEntity<String> requestEntity = new HttpEntity<String>("", headers);
    	    ResponseEntity<String> responseEntity = rest.exchange(server+id, HttpMethod.GET, requestEntity, String.class);
    	    status = responseEntity.getStatusCode();
    	    System.out.println(responseEntity.getBody()+" Status:"+status);
    	    return responseEntity.getBody();
	}
}

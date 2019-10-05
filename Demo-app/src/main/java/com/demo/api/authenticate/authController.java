package com.demo.api.authenticate;

import sun.misc.BASE64Encoder;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SuppressWarnings("restriction")
@RestController
public class authController {

	@RequestMapping("/hello")
	public String sayHi() {
		
		heya();
		return "<html>"
				+ "<body>"
				+ "<h1>HELLO WORLD!</h1></body></html>"; 
	}
	
	
	public String heya() {
		String url = "http://localhost:8080/findMe";
		String name = "user";
		String password = "pass";
		String authString = name + ":" + password;
		String authStringEnc= new BASE64Encoder().encode(authString.getBytes());
		System.out.println("Base64 encoded auth string: " +authStringEnc);
		Client restClient = Client.create();
		WebResource webResource = restClient.resource(url);
        ClientResponse resp = webResource.accept("application/json")
							.header("Authorization", "Basic " + authStringEnc).get(ClientResponse.class);
		if(resp.getStatus() != 200){
		System.err.println("Unable to connect to the server"+resp.toString());
		}
		System.out.println("status:"+resp.getStatus());
		String output = resp.getEntity(String.class);
		System.out.println("response: "+output);
		return null;
		
	}
}

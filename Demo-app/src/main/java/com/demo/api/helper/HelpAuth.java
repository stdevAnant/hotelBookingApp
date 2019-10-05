package com.demo.api.helper;

import java.io.IOException;

import javax.ws.rs.HeaderParam;
import javax.ws.rs.PathParam;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.api.helper.response.respModal;

import sun.misc.BASE64Decoder;


@RestController
public class HelpAuth {

    @CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/findMe")
	public Object getUserById(@RequestHeader("authorization") String authString){
		System.out.println("AUTH:"+authString);

		respModal resp = new respModal();	
		if(isUserAuthenticated(authString)){
		  resp.setStatus("200");
		  resp.setMessage("SuccesFul");
			
		}
		else {
			resp.setStatus("401");
			resp.setMessage("Not SuccesFul");
		}
		return resp;
		}

	
    private boolean isUserAuthenticated(String authString){
    	
   	 String decodedAuth = "";
   			String[] authParts = authString.split("\\s+");
			String authInfo = authParts[1];
			System.out.println("SERVER RECEIVED:"+authParts[1]);
			byte[] bytes = null;
			try {
				bytes = new BASE64Decoder().decodeBuffer(authInfo);
			} catch (IOException e) {
				e.printStackTrace();
				}
			decodedAuth = new String(bytes);
			System.out.println(decodedAuth);
			
			String[] paramsReceived = decodedAuth.split(":",3);
			
			if( paramsReceived[0].equals("user") && paramsReceived[1].equals("pass"))
			{
				return true;	
			}
			else {
				return false;	
			}
			
	    }
}

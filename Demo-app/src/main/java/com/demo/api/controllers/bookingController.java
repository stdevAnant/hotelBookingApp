package com.demo.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.api.model.bookingModel;
import com.demo.api.model.favModel;
import com.demo.api.repo.bookingsRepo;
import com.demo.api.repo.hotelRepository;

@RestController
@RequestMapping(path="/book")
public class bookingController {
	
	@Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private bookingsRepo bookingRepository;
	

    @CrossOrigin(origins = "http://localhost:3000")
	@PostMapping(path="/addBooking") // Map ONLY POST Requests
	public @ResponseBody String addNewUser (@RequestParam int restId
			, @RequestParam int count) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
        System.out.println("hitttingggggggggggggggggggggggggggggggggggggggg");
        
        List<bookingModel> bookingList =  bookingRepository.getAllBookings(restId);
        if(bookingList.isEmpty()) {
                  bookingModel m = new bookingModel();
                  m.setRest_id(restId);
                  m.setBookings(count);
                  bookingRepository.save(m);
        }
        else {
        	int prev_booking_count=0;
        	bookingModel m2 =  new bookingModel();
        	for (bookingModel bookingModel : bookingList) {
        		m2.setId(bookingModel.getId());
        		m2.setRest_id(bookingModel.getRest_id());
        		prev_booking_count = bookingModel.getBookings();
			}
        	prev_booking_count = prev_booking_count + count;

        	if(prev_booking_count <=20) {
        		System.out.println("BOOKING COUNTTTTTTTTTT:"+prev_booking_count);	
        		m2.setBookings(prev_booking_count );
        		
            	bookingRepository.save(m2);
            	return "updated";
        	}
        	return "boookings full";
        }

		return "Saved";
	}


}

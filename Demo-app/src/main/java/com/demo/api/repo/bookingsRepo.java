package com.demo.api.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.demo.api.model.bookingModel;
import com.demo.api.model.favModel;

public interface bookingsRepo extends CrudRepository<bookingModel, Integer> {
	
	@Query(value="select * from bookings where rest_id=?1",nativeQuery=true)
    List<bookingModel> getAllBookings(int restId);
    
    @Query(value="INSERT INTO `bookings`(`rest_id`, `bookings`) VALUES (?1,?2)) ",nativeQuery=true)
    void addBookings(int restId,int booking);
    
    @Query(value="UPDATE `bookings` SET `bookings`=?1 WHERE `rest_id` = ?2",nativeQuery=true)
    void updateBookings(int booking,int restId);
    
}

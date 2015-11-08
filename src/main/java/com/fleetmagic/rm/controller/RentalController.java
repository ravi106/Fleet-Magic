package com.fleetmagic.rm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fleetmagic.rm.domain.Rental;
import com.fleetmagic.rm.service.RentalService;

@RestController
public class RentalController {

	@Autowired
	RentalService rentalService;
		
	   
    @RequestMapping(value = "/rental", method = RequestMethod.GET, produces = "application/json")
    public List<Rental> getRentals() {
	
	System.out.println("RentalController.getRental()");

	List<Rental> rentalList =  rentalService.getRentals();
	
	System.out.println(rentalList);
	return rentalList;

    }
    
    
    @RequestMapping(value = "/rental", method = RequestMethod.POST,consumes="application/json", produces = "application/json")
    public Rental createRental(@RequestBody Rental rental) {
	
    
    	
    	return 	rentalService.createRental(rental);

    }
}

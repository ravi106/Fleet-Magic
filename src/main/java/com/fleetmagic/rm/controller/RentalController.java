package com.fleetmagic.rm.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fleetmagic.rm.domain.Rental;
import com.fleetmagic.rm.domain.RentalDashBoard;
import com.fleetmagic.rm.service.RentalService;

@RestController
public class RentalController {

	@Autowired
	RentalService rentalService;

	@RequestMapping(value = "/rental/email/{email:.*}", method = RequestMethod.GET, produces = "application/json")
	public List<Rental> getRentalsByEmail(@PathVariable("email") String email) {
		System.out.println("RentalController.getRentalsByEmail()");
		List<Rental> rentalList = rentalService.getRentalsByEmail(email);
		System.out.println(rentalList);
		return rentalList;
	}

	@RequestMapping(value = "/rental/mobile/{mobile}", method = RequestMethod.GET, produces = "application/json")
	public List<Rental> getRentalsByMobile(@PathVariable("mobile") String mobile) {
		System.out.println("RentalController.getRentalsByMobile()");
		List<Rental> rentalList = rentalService.getRentalsByMobile(mobile);
		System.out.println(rentalList);
		return rentalList;
	}

	@RequestMapping(value = "/rental/number/{number}", method = RequestMethod.GET, produces = "application/json")
	public List<Rental> getRentalsByNumber(@PathVariable("number") String number) {
		System.out.println("RentalController.getRentalsByNumber()");
		List<Rental> rentalList = rentalService.getRentalsByNumber(number);
		System.out.println(rentalList);
		return rentalList;
	}

	@RequestMapping(value = "/rental", method = RequestMethod.GET, produces = "application/json")
	public List<Rental> getRentals() {

		System.out.println("RentalController.getRental()");

		List<Rental> rentalList = rentalService.getRentals();

		System.out.println(rentalList);
		return rentalList;

	}

	@RequestMapping(value = "/rental", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public Rental createRental(@RequestBody Rental rental) {

		return rentalService.createRental(rental);

	}

	@RequestMapping(value = "/extendRental", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public Rental extendRental(@RequestBody Rental rental) {
		return rentalService.extendRental(rental);

	}
	
	@RequestMapping(value = "/closeRental", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public Rental closeRental(@RequestBody Rental rental) {

		return rentalService.closeRental(rental);

	}

	@RequestMapping(value = "/replaceVehicle", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public Rental replaceVehicle(@RequestBody Rental rental) {

		return rentalService.replaceVehicle(rental);

	}

	@RequestMapping(value = "/rentalsBetweenDates", method = RequestMethod.GET, produces = "application/json")
	public List<RentalDashBoard> replaceVehicle(@RequestParam String startDate, @RequestParam String endDate) throws Exception {
		System.err.println(startDate + ":" + endDate);
		Date startDate1 = new Date(Long.parseLong(startDate));
		Date endDate1 = new Date(Long.parseLong(endDate));
		return rentalService.getRentalsDashBoard(startDate1, endDate1);
	}
}

package com.fleetmagic.cm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fleetmagic.cm.domain.Customer;
import com.fleetmagic.cm.service.CustomerService;

@RestController
public class CustomerController {
	

	  @Autowired
	    CustomerService customerService;
	    
	    @RequestMapping(value = "/customers", method = RequestMethod.GET, produces = "application/json")
	    public List<Customer> getCustomers() {
		
		System.out.println("CustomerController.getVehicles()");

		return customerService.getCustomers();

	    }
	
	

}

package com.fleetmagic.cm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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

		System.out.println("CustomerController.getCustomers()");

		return customerService.getCustomers();

	}
	
	@RequestMapping(value = "/customer", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public Customer updateCustomer(@RequestBody Customer customer) {

		System.out.println("CustomerController.updateCustomer()");

		return customerService.saveCustomer(customer);

	}


	@RequestMapping(value = "/customer/email/{email:.*}", method = RequestMethod.GET, produces = "application/json")
	public List<Customer> findCustomersByEmail(@PathVariable("email") String email) {
		System.out.println("CustomerController.findCustomersByEmail()11");
		return customerService.getCustomersByEmail(email);
	}

	@RequestMapping(value = "/customer/mobile/{mobile}", method = RequestMethod.GET, produces = "application/json")
	public List<Customer> findCustomersByMobile(@PathVariable("mobile") String mobile) {
		System.out.println("CustomerController.findCustomersByMobile()11");
		return customerService.getCustomersByMobile(mobile);
	}
	
	@RequestMapping(value = "/customers/firstName/{firstname}/lastName/{lastname}", method = RequestMethod.GET, produces = "application/json")
	public List<Customer> findCustomersByFirstNameAndLastName(@PathVariable("firstname") String firstName,@PathVariable("lastname") String lastName) {
		return customerService.getCustomersByFirstNameAndLastName(firstName, lastName);
	}

}

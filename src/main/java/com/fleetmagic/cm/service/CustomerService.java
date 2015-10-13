package com.fleetmagic.cm.service;

import java.util.List;

import javax.annotation.Resource;

import com.fleetmagic.cm.domain.Customer;

import org.springframework.stereotype.Service;

import com.fleetmagic.cm.repository.CustomerRepository;


@Service
public class CustomerService {

	@Resource
	private CustomerRepository customerRepository;
	
	
	
 public List<Customer> getCustomers(){
	 return customerRepository.findAll();
	 
 }
 
 public Customer saveCustomer(Customer customer) {
	 if(customer != null){
	 return customerRepository.saveAndFlush(customer);
	 }else{
		 return null;
	 }
}
	
	
}

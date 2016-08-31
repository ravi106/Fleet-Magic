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
 
 public List<Customer> getCustomersByEmail(String email){
	 return customerRepository.getCustomerByEmail(email);
 }

 public List<Customer> getCustomersByMobile(String mobile){
	 return customerRepository.getCustomerByMobile(mobile);
 }

 public List<Customer> getCustomersByFirstNameAndLastName(String firstName,String lastName){
	 return customerRepository.getCustomerByFirstNameAndLastName(firstName, lastName);
 }

 public Customer saveCustomer(Customer customer) {
	 if(customer != null){
	 return customerRepository.saveAndFlush(customer);
	 }else{
		 return null;
	 }
}
	
	
}

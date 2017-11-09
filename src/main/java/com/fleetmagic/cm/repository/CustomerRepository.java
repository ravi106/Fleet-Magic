package com.fleetmagic.cm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fleetmagic.cm.domain.Customer;
import com.fleetmagic.constants.FleetConstants;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
	
	@Query(value=FleetConstants.FETCH_CUST_BY_EMAIL, nativeQuery = true)
    public List<Customer> getCustomerByEmail(String email);
	
	@Query(value=FleetConstants.FETCH_CUST_BY_MOBILE, nativeQuery = true)
    public List<Customer> getCustomerByMobile(String mobile, String homePhone);
	
	@Query(value=FleetConstants.FETCH_CUST_BY_FNLN, nativeQuery = true)
    public List<Customer> getCustomerByFirstNameAndLastName(String firstName,String lastName);
	
}

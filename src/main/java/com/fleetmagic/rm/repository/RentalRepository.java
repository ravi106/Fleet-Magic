package com.fleetmagic.rm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fleetmagic.cm.domain.Customer;
import com.fleetmagic.constants.FleetConstants;
import com.fleetmagic.rm.domain.Rental;

@Repository
public interface RentalRepository extends JpaRepository<Rental, Long> {

	@Query(value = FleetConstants.FETCH_CUST_BY_ID, nativeQuery = true)
	public Customer getCustomerByCustId(Long custId);
}

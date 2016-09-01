package com.fleetmagic.rm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fleetmagic.constants.FleetConstants;
import com.fleetmagic.rm.domain.Rental;

@Repository
public interface RentalRepository extends JpaRepository<Rental, Long> {

	@Query(value=FleetConstants.FETCH_RENTAL_BY_EMAIL, nativeQuery = true)
    public List<Rental> getRentalByEmail(String email);
	
	@Query(value=FleetConstants.FETCH_RENTAL_BY_MOBILE, nativeQuery = true)
    public List<Rental> getRentalByMobile(String mobile);
	
	@Query(value=FleetConstants.FETCH_RENTAL_BY_NUMBER, nativeQuery = true)
    public List<Rental> getRentalByNumber(String number);
}

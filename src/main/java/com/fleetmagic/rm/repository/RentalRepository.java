package com.fleetmagic.rm.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fleetmagic.constants.FleetConstants;
import com.fleetmagic.rm.domain.Rental;

@Repository
public interface RentalRepository extends JpaRepository<Rental, Long> {

	@Query(value = FleetConstants.FETCH_RENTAL_BY_EMAIL, nativeQuery = true)
	public List<Rental> getRentalByEmail(String email);

	@Query(value = FleetConstants.FETCH_RENTAL_BY_MOBILE, nativeQuery = true)
	public List<Rental> getRentalByMobile(String mobile);

	@Query(value = FleetConstants.FETCH_RENTAL_BY_NUMBER, nativeQuery = true)
	public List<Rental> getRentalByNumber(String number);

	/*
	 * Please bare with hibernate skills as i have never worked on it, I knew that
	 * i can use some criteria objects to achieve this but not sure how to do hat
	 */
	@Query(value = FleetConstants.FETCH_RENTAL_BETWEEN_DATES, nativeQuery = true)
	public List<Rental> getRentalBetwenDates(Date startDate, Date endDate, Date startDate1, Date endDate1);
}

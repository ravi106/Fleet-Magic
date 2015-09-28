package com.fleetmagic.rm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fleetmagic.rm.domain.Rental;

@Repository
public interface RentalRepository extends JpaRepository<Rental, Long> {

	
}

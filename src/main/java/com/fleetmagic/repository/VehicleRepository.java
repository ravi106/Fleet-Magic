package com.fleetmagic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fleetmagic.fm.domain.Vehicle;


@Repository 
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
 
}
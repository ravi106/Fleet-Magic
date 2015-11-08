package com.fleetmagic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fleetmagic.constants.FleetConstants;
import com.fleetmagic.fm.domain.Type;
import com.fleetmagic.fm.domain.Vehicle;
import com.fleetmagic.fm.domain.VehicleStatus;


@Repository 
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
	
	  
    @Query(value=FleetConstants.FETCH_VEH_ON_STATUS, nativeQuery = true)
    public List<Vehicle> getAvailableVehicles(String status);
    
    public List<Vehicle> findByStatus(VehicleStatus status);
    
    public List<Vehicle> findByType(Type type);
 
}
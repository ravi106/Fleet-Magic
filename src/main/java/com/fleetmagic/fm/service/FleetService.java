package com.fleetmagic.fm.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import com.fleetmagic.fm.domain.Vehicle;
import com.fleetmagic.fm.domain.VehicleStatus;
import com.fleetmagic.repository.VehicleRepository;

import javax.annotation.Resource;


@Service
public class FleetService {

	 @Resource
	 private VehicleRepository vehicleRepository;
	
	
    public List<Vehicle> getVehicles() {
    	
    	
    	return vehicleRepository.findAll();
    }
    
    public List<Vehicle> getAvailableVehicles(){
    	return vehicleRepository.getAvailableVehicles(VehicleStatus.AVAILABLE.toString());
    }
    
    public List<Vehicle> getRentedVehicles(){
    	return vehicleRepository.getAvailableVehicles(VehicleStatus.RENTED.toString());
    }
    
    public List<Vehicle> getMaintenanceVehicles(){
    	return vehicleRepository.getAvailableVehicles(VehicleStatus.MAINTENANCE.toString());
    }
    
    public List<Vehicle> getNotAvailableVehicles(){
    	return vehicleRepository.getAvailableVehicles(VehicleStatus.NOT_AVAILABLE.toString());
    }
    
    
    public List<Vehicle> getVehicleFallback() {
	
	System.out.println("FleetService.getVehicleFallback()");
	Vehicle v2 = new Vehicle();
	v2.setId((long) 22);
	v2.setMake("Toyota2");
	v2.setModel("Camry2");
	v2.setVim("BBB222");
	
	List<Vehicle> fleet = new ArrayList<Vehicle>();

	//fleet.add(v1);
	fleet.add(v2);

	return fleet;
    }

}

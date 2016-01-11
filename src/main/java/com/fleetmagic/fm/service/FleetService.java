package com.fleetmagic.fm.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fleetmagic.fm.domain.Type;
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
    
      public List<Vehicle> fetchByStatus(String status){     	
    	if(status.equalsIgnoreCase("ALL") || status.isEmpty())
  		  return vehicleRepository.findAll();
  	  else
  		  return vehicleRepository.findByStatus(VehicleStatus.valueOf(status));
    }
     
      public List<Vehicle> fetchByType(String type){     	  
    	  if(type.equalsIgnoreCase("ALL") || type.isEmpty())
    		  return vehicleRepository.findAll();
    	  else
    		  return vehicleRepository.findByType(Type.valueOf(type));      	
      }
      
    
    
    public List<Vehicle> getVehicleFallback() {
	
	System.out.println("FleetService.getVehicleFallback()");
	Vehicle v2 = new Vehicle();
	v2.setId((long) 22);
	v2.setMake("Toyota2");
	v2.setModel("Camry2");
	v2.setVin("BBB222");
	
	List<Vehicle> fleet = new ArrayList<Vehicle>();

	//fleet.add(v1);
	fleet.add(v2);

	return fleet;
    }

}

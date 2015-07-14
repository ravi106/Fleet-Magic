package com.fleetmagic.fm.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fleetmagic.fm.domain.Vehicle;

@Service
public class FleetService {

   
    public List<Vehicle> getVehicles() {
	System.out.println("FleetService.getVehicles()");
	Vehicle v1 = new Vehicle();
	v1.setId(111);
	v1.setMake("Toyota");
	v1.setModel("Camry");
	v1.setVim("AAA111");

//	try {
//	   Thread.sleep(6000);
//	} catch (InterruptedException e) {
//	    // TODO Auto-generated catch block
//	    e.printStackTrace();
//	}

	Vehicle v2 = new Vehicle();
	v2.setId(22);
	v2.setMake("Toyota2");
	v2.setModel("Camry2");
	v2.setVim("BBB222");

	List<Vehicle> fleet = new ArrayList<Vehicle>();

	fleet.add(v1);
	fleet.add(v2);

	return fleet;
    }

    public List<Vehicle> getVehicleFallback() {
	
	System.out.println("FleetService.getVehicleFallback()");
	Vehicle v2 = new Vehicle();
	v2.setId(22);
	v2.setMake("Toyota2");
	v2.setModel("Camry2");
	v2.setVim("BBB222");
	
	List<Vehicle> fleet = new ArrayList<Vehicle>();

	//fleet.add(v1);
	fleet.add(v2);

	return fleet;
    }

}

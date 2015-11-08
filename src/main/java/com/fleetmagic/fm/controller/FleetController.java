package com.fleetmagic.fm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fleetmagic.fm.domain.Vehicle;
import com.fleetmagic.fm.service.FleetService;



@RestController
public class FleetController {

    @Autowired
    FleetService fleetService;
    
    @RequestMapping(value = "/vehicles", method = RequestMethod.GET, produces = "application/json")
    public List<Vehicle> getVehicles() {
	
	System.out.println("FleetController.getVehicles()");

	return fleetService.getVehicles();

    }
    
    @RequestMapping(value = "/vehiclesByStatus/{status}", method = RequestMethod.GET, produces = "application/json")
    public List<Vehicle> getVehiclesByStatus(@PathVariable("status") String status) {
	
	System.out.println("FleetController.getVehiclesByStatus()");

	return fleetService.fetchByStatus(status);

    }
    
    @RequestMapping(value = "/vehiclesByType/{type}", method = RequestMethod.GET, produces = "application/json")
    public List<Vehicle> getVehiclesByType(@PathVariable("type") String type) {
	
	System.out.println("FleetController.getVehiclesByStatus()");

	return fleetService.fetchByType(type);

    }

}
package com.fleetmagic.fm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fleetmagic.fm.domain.BusinessUnit;
import com.fleetmagic.fm.domain.Vehicle;
import com.fleetmagic.fm.service.FleetService;
import com.fleetmagic.rm.domain.Rental;

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
	
	@RequestMapping(value = "/vehiclesByBusinessUnit/{businessUnit}", method = RequestMethod.GET, produces = "application/json")
	public List<Vehicle> vehiclesByBusinessUnit(@PathVariable("businessUnit") String businessUnit) {

		System.out.println("FleetController.vehiclesByBusinessUnit()");

		return fleetService.fetchBusinessUnitVehcilesByStatus(businessUnit, "ALL");

	}
	
	@RequestMapping(value = "/vehiclesByBusinessUnit/{businessUnit}/status/{status}", method = RequestMethod.GET, produces = "application/json")
	public List<Vehicle> vehiclesByBusinessUnitAndStatus(@PathVariable("businessUnit") String businessUnit,@PathVariable("status") String status) {

		System.out.println("FleetController.vehiclesByBusinessUnitAndStatus()");

		return fleetService.fetchBusinessUnitVehcilesByStatus(businessUnit, status);

	}

	@RequestMapping(value = "/vehiclesByType/{type}", method = RequestMethod.GET, produces = "application/json")
	public List<Vehicle> getVehiclesByType(@PathVariable("type") String type) {

		System.out.println("FleetController.getVehiclesByStatus()");

		return fleetService.fetchByType(type);

	}
	
	@RequestMapping(value = "/businessUnits", method = RequestMethod.GET, produces = "application/json")
	public List<BusinessUnit> getBusinessUnits() {

		System.out.println("FleetController.getBusinessUnits()");

		return fleetService.getBusinessUnits();

	}
	
	@RequestMapping(value = "/vehicle", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
	public Vehicle saveVehcile(@RequestBody Vehicle vehicle) {
		System.err.println("In FleetController.saveVehcile()");
		return fleetService.saveVehicle(vehicle);

	}

}
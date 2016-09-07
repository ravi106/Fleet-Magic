package com.fleetmagic.rm.domain;

import java.util.Date;
import java.util.List;

public class RentalDashBoard {
	
	
	private Date date;
	private List<Long> rentedVehicles;
	
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public List<Long> getRentedVehicles() {
		return rentedVehicles;
	}

	public void setRentedVehicles(List<Long> rentedVehicles) {
		this.rentedVehicles = rentedVehicles;
	}

}

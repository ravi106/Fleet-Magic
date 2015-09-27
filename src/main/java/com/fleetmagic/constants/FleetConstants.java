package com.fleetmagic.constants;

public class FleetConstants {

	public static final String FETCH_VEH_ON_STATUS = "SELECT v FROM vehicles v where status = ?";
	
	public static final String FETCH_CUST_BY_ID = "SELECT c from Customer c where id = ?";
}

package com.fleetmagic.constants;

public class FleetConstants {

	public static final String FETCH_VEH_ON_STATUS = "SELECT v FROM vehicles v where status = ?";
	
	public static final String FETCH_CUST_BY_ID = "SELECT c from Customer c where id = ?";
	
	public static final String FETCH_CUST_BY_EMAIL = "SELECT * from Customer c where email = ?";
	
	public static final String FETCH_CUST_BY_MOBILE = "SELECT * from Customer c where mobile = ?";
	
	public static final String FETCH_CUST_BY_FNLN = "SELECT * from Customer c where firstName = ? and lastName =?";
}

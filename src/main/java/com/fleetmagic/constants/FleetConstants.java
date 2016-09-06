package com.fleetmagic.constants;

public class FleetConstants {

	public static final String FETCH_VEH_ON_STATUS = "SELECT * FROM vehicle v where status = ?";
	
	public static final String FETCH_VEH_ON_BUSINESSUNIT = "SELECT * FROM vehicle v where businessunit_id = ?";
	
	public static final String FETCH_VEH_ON_BUSINESSUNIT_ON_STATUS = "SELECT * FROM vehicle v where businessunit_id = ? and status =?";
	
	public static final String FETCH_CUST_BY_ID = "SELECT * from Customer c where id = ?";
	
	public static final String FETCH_CUST_BY_EMAIL = "SELECT * from Customer c where email = ?";
	
	public static final String FETCH_CUST_BY_MOBILE = "SELECT * from Customer c where mobile = ?";
	
	public static final String FETCH_CUST_BY_FNLN = "SELECT * from Customer c where firstName = ? and lastName =?";
	
	public static final String FETCH_RENTAL_BY_EMAIL = "SELECT * from rental r join customer c on r.customer1_id = c.id where c.email=? order by startDate Desc";
	
	public static final String FETCH_RENTAL_BY_MOBILE = "SELECT * from rental r join customer c on r.customer1_id = c.id where c.mobile=? order by startDate Desc";
	
	public static final String FETCH_RENTAL_BY_NUMBER = "SELECT * from rental r where r.id=?";
	
	public static final String FETCH_RENTAL_BETWEEN_DATES= "SELECT * from rental r where (r.startDate between ? and ? )or (r.startDate <? and r.endDate <= ?) ";
}

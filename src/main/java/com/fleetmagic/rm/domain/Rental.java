package com.fleetmagic.rm.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fleetmagic.cm.domain.Customer;
import com.fleetmagic.fm.domain.Vehicle;


@Entity
@Table(name = "rental")
public class Rental {
	@Id
	@GeneratedValue
	private Long id;
	
	@OneToOne
	private Payment payment;
	@OneToOne
	private Vehicle vehicle;
	
	private Date startDate;
	private Date endDate;
	private double price;
	@OneToOne
	private Customer customerId1;
	@OneToOne
	private Customer customerId2;
	
	
	public Customer getCustomerId1() {
		return customerId1;
	}
	public void setCustomerId1(Customer customerId1) {
		this.customerId1 = customerId1;
	}
	public Customer getCustomerId2() {
		return customerId2;
	}
	public void setCustomerId2(Customer customerId2) {
		this.customerId2 = customerId2;
	}
	
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	public Payment getPayment() {
		return payment;
	}
	public void setPayment(Payment payment) {
		this.payment = payment;
	}
	public Vehicle getVehicle() {
		return vehicle;
	}
	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	
	
	
	
	
	

}

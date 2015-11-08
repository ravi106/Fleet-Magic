package com.fleetmagic.rm.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fleetmagic.cm.domain.Customer;
import com.fleetmagic.fm.domain.InsuranceMode;
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
	private Customer customer1;
	@OneToOne
	private Customer customer2;
	@Enumerated(EnumType.STRING)
	private InsuranceMode insuranceStatus;
	private int rentalPaymentId;
	
	
	public InsuranceMode getInsuranceStatus() {
		return insuranceStatus;
	}
	public void setInsuranceStatus(InsuranceMode insuranceStatus) {
		this.insuranceStatus = insuranceStatus;
	}
	public int getRentalPaymentId() {
		return rentalPaymentId;
	}
	public void setRentalPaymentId(int rentalPaymentId) {
		this.rentalPaymentId = rentalPaymentId;
	}
	public Customer getCustomer1() {
		return customer1;
	}
	public void setCustomer1(Customer customer1) {
		this.customer1 = customer1;
	}
	public Customer getCustomer2() {
		return customer2;
	}
	public void setCustomer2(Customer customer2) {
		this.customer2 = customer2;
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
	@Override
	public String toString() {
		return "Rental [id=" + id + ", payment=" + payment + ", vehicle="
				+ vehicle + ", startDate=" + startDate + ", endDate=" + endDate
				+ ", price=" + price + ", customer1=" + customer1
				+ ", customer2=" + customer2 + ", insuranceStatus="
				+ insuranceStatus + ", rentalPaymentId=" + rentalPaymentId
				+ "]";
	}
	
	
	
	
	
	

}

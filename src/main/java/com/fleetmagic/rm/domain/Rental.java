package com.fleetmagic.rm.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Formula;

import com.fleetmagic.cm.domain.Customer;
import com.fleetmagic.fm.domain.BusinessUnit;
import com.fleetmagic.fm.domain.InsuranceMode;
import com.fleetmagic.fm.domain.Vehicle;


@Entity
@Table(name = "rental")
public class Rental {
	@Id
	@GeneratedValue
	private Long id;
	
	private String number;
	@OneToOne
	private Payment payment;
	@OneToOne
	private Vehicle vehicle;
	@OneToOne
	private BusinessUnit businessUnit;
	
	private Date startDate;
	private Date endDate;
	private double price;
	@OneToOne
	private Customer customer1;
	@OneToOne
	private Customer customer2;
	private String insurancePolicyNumber;
	private String insuranceCompanyName;
	private Date insuranceExpirationDate;
	private String insuranceCompanyContactNumber;
	
	@Enumerated(EnumType.STRING)
	private InsuranceMode insuranceStatus;
	private int rentalPaymentId;
	private int additionalDriverCharge;
	@OneToOne
	private Vehicle replacementVehicle;
	private Date extenstion1;
	private double extenstion1Amount;
	private Date extenstion2;
	private double extenstion2Amount;
	
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
	public String getInsurancePolicyNumber() {
		return insurancePolicyNumber;
	}
	public void setInsurancePolicyNumber(String insurancePolicyNumber) {
		this.insurancePolicyNumber = insurancePolicyNumber;
	}
	public String getInsuranceCompanyName() {
		return insuranceCompanyName;
	}
	public void setInsuranceCompanyName(String insuranceCompanyName) {
		this.insuranceCompanyName = insuranceCompanyName;
	}
	public Date getInsuranceExpirationDate() {
		return insuranceExpirationDate;
	}
	public void setInsuranceExpirationDate(Date insuranceExpirationDate) {
		this.insuranceExpirationDate = insuranceExpirationDate;
	}
	public String getInsuranceCompanyContactNumber() {
		return insuranceCompanyContactNumber;
	}
	public void setInsuranceCompanyContactNumber(String insuranceCompanyContactNumber) {
		this.insuranceCompanyContactNumber = insuranceCompanyContactNumber;
	}
	public BusinessUnit getBusinessUnit() {
		return businessUnit;
	}
	public void setBusinessUnit(BusinessUnit businessUnit) {
		this.businessUnit = businessUnit;
	}
	public int getAdditionalDriverCharge() {
		return additionalDriverCharge;
	}
	public void setAdditionalDriverCharge(int additionalDriverCharge) {
		this.additionalDriverCharge = additionalDriverCharge;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public Vehicle getReplacementVehicle() {
		return replacementVehicle;
	}
	public void setReplacementVehicle(Vehicle replacemetVehicle) {
		this.replacementVehicle = replacemetVehicle;
	}
	public Date getExtenstion1() {
		return extenstion1;
	}
	public void setExtenstion1(Date extenstion1) {
		this.extenstion1 = extenstion1;
	}
	public double getExtenstion1Amount() {
		return extenstion1Amount;
	}
	public void setExtenstion1Amount(double extenstion1Amount) {
		this.extenstion1Amount = extenstion1Amount;
	}
	public Date getExtenstion2() {
		return extenstion2;
	}
	public void setExtenstion2(Date extenstion2) {
		this.extenstion2 = extenstion2;
	}
	public double getExtenstion2Amount() {
		return extenstion2Amount;
	}
	public void setExtenstion2Amount(double extenstion2Amount) {
		this.extenstion2Amount = extenstion2Amount;
	}
	@Override
	public String toString() {
		return "Rental [id=" + id + ", payment=" + payment + ", vehicle=" + vehicle + ", businessUnit=" + businessUnit
				+ ", startDate=" + startDate + ", endDate=" + endDate + ", price=" + price + ", customer1=" + customer1
				+ ", customer2=" + customer2 + ", insurancePolicyNumber=" + insurancePolicyNumber
				+ ", insuranceCompanyName=" + insuranceCompanyName + ", insuranceExpirationDate="
				+ insuranceExpirationDate + ", insuranceCompanyContactNumber=" + insuranceCompanyContactNumber
				+ ", insuranceStatus=" + insuranceStatus + ", rentalPaymentId=" + rentalPaymentId
				+ ", additionalDriverCharge=" + additionalDriverCharge + "]";
	}
}

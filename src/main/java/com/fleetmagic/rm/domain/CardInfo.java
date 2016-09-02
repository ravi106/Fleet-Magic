package com.fleetmagic.rm.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fleetmagic.cm.domain.Customer;

@Entity
@Table(name = "cardInfo")
public class CardInfo {
	
	@Id
	@GeneratedValue
	private Long id;
	private String type;
	private Long number;
	private Integer expMonth;
	private Integer expYear;	
	private Integer cvv;
	private String Name;
	@OneToOne
	private Customer customer;
	private String priority;
	private String address1;
	private String address2;
	private String city;
	private String state;
	private String zip;
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public String getPriority() {
		return priority;
	}
	public void setPriority(String priority) {
		this.priority = priority;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Long getNumber() {
		return number;
	}
	public void setNumber(Long number) {
		this.number = number;
	}
	public Integer getExpMonth() {
		return expMonth;
	}
	public void setExpMonth(Integer expMonth) {
		this.expMonth = expMonth;
	}
	
	public Integer getCvv() {
		return cvv;
	}
	public void setCvv(Integer cvv) {
		this.cvv = cvv;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	
	public Integer getExpYear() {
		return expYear;
	}
	public void setExpYear(Integer expYear) {
		this.expYear = expYear;
	}
	public String getAddress1() {
		return address1;
	}
	public void setAddress1(String address1) {
		this.address1 = address1;
	}
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}

}

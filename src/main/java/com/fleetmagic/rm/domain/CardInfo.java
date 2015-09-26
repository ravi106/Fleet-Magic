package com.fleetmagic.rm.domain;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "cardInfo")
public class CardInfo {
	
	private Long id;
	private String type;
	private Long number;
	private Integer expMonth;
	private Integer expDate;
	private Integer cvv;
	private String Name;
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
	public Integer getExpDate() {
		return expDate;
	}
	public void setExpDate(Integer expDate) {
		this.expDate = expDate;
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

}

package com.fleetmagic.fm.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author pmeruva
 *
 */
@Entity
@Table(name = "vehicle")
public class Vehicle {

	@Id
	@GeneratedValue
	private Long id;

	private String registration;

	private String vim;

	private String make;
	private String model;
	private Date lastServiceDate;
	private int serviceIntervalDays;
	private String color;

	@Enumerated(EnumType.STRING)
	private Type type;
	@Enumerated(EnumType.STRING)
	private Title title;
	private Date dispenseDate;
	private double soldPrice;
	private double costPrice;
	@Enumerated(EnumType.STRING)
	private Category category;
	private int tankCapacity;
	private Date nextInspectionDate;
	private Date roadTaxExpiryDate;
	private Date insuranceExpiryDate;
	private Date purchaseDate;

	public String getRegistration() {
		return registration;
	}

	public void setRegistration(String registration) {
		this.registration = registration;
	}

	public Date getLastServiceDate() {
		return lastServiceDate;
	}

	public void setLastServiceDate(Date lastServiceDate) {
		this.lastServiceDate = lastServiceDate;
	}

	public int getServiceIntervalDays() {
		return serviceIntervalDays;
	}

	public void setServiceIntervalDays(int serviceIntervalDays) {
		this.serviceIntervalDays = serviceIntervalDays;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
	}

	public Title getTitle() {
		return title;
	}

	public void setTitle(Title title) {
		this.title = title;
	}

	public Date getDispenseDate() {
		return dispenseDate;
	}

	public void setDispenseDate(Date dispenseDate) {
		this.dispenseDate = dispenseDate;
	}

	public double getSoldPrice() {
		return soldPrice;
	}

	public void setSoldPrice(double soldPrice) {
		this.soldPrice = soldPrice;
	}

	public double getCostPrice() {
		return costPrice;
	}

	public void setCostPrice(double costPrice) {
		this.costPrice = costPrice;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public int getTankCapacity() {
		return tankCapacity;
	}

	public void setTankCapacity(int tankCapacity) {
		this.tankCapacity = tankCapacity;
	}

	public Date getNextInspectionDate() {
		return nextInspectionDate;
	}

	public void setNextInspectionDate(Date nextInspectionDate) {
		this.nextInspectionDate = nextInspectionDate;
	}

	public Date getRoadTaxExpiryDate() {
		return roadTaxExpiryDate;
	}

	public void setRoadTaxExpiryDate(Date roadTaxExpiryDate) {
		this.roadTaxExpiryDate = roadTaxExpiryDate;
	}

	public Date getInsuranceExpiryDate() {
		return insuranceExpiryDate;
	}

	public void setInsuranceExpiryDate(Date insuranceExpiryDate) {
		this.insuranceExpiryDate = insuranceExpiryDate;
	}

	public Date getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getVim() {
		return vim;
	}

	public void setVim(String vim) {
		this.vim = vim;
	}

	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

}

package com.fleetmagic.fm.domain;

import javax.persistence.Entity;
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
	private String vim;
	private String make;
	private String model;

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

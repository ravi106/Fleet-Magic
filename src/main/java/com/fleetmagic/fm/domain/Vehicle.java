package com.fleetmagic.fm.domain;

/**
 * @author pmeruva
 *
 */
public class Vehicle {
    private long id;
    private String vim;
    private String make;
    private String model;

    public long getId() {
	return id;
    }

    public void setId(long id) {
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

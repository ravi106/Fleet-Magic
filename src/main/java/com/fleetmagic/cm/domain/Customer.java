package com.fleetmagic.cm.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer")
public class Customer {
	@Id
	@GeneratedValue
	private Long id;
	private String firstName;
	private String lastName;
	private String middleName;
	private String homePhone;
	private String mobile;
	private String email;
	private String address1;
	private String address2;
	private String city;
	private String state;
	private String zip;
	private String ssn;
	private Date dob;
	private String driversLicence;
	private String dlState;
	private String dlCountry;
	private Date dlExperiryDate;
	private String employer;
	private String employerCity;
	private String employerState;

	public String getDlCountry() {
		return dlCountry;
	}

	public void setDlCountry(String dlCountry) {
		this.dlCountry = dlCountry;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getHomePhone() {
		return homePhone;
	}

	public void setHomePhone(String homePhone) {
		this.homePhone = homePhone;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public String getSsn() {
		return ssn;
	}

	public void setSsn(String ssn) {
		this.ssn = ssn;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getDriversLicence() {
		return driversLicence;
	}

	public void setDriversLicence(String driversLicence) {
		this.driversLicence = driversLicence;
	}

	public String getDlState() {
		return dlState;
	}

	public void setDlState(String dlState) {
		this.dlState = dlState;
	}

	public Date getDlExperiryDate() {
		return dlExperiryDate;
	}

	public void setDlExperiryDate(Date dlExperiryDate) {
		this.dlExperiryDate = dlExperiryDate;
	}

	public String getEmployer() {
		return employer;
	}

	public void setEmployer(String employer) {
		this.employer = employer;
	}

	public String getEmployerCity() {
		return employerCity;
	}

	public void setEmployerCity(String employerCity) {
		this.employerCity = employerCity;
	}

	public String getEmployerState() {
		return employerState;
	}

	public void setEmployerState(String employerState) {
		this.employerState = employerState;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", middleName=" + middleName
				+ ", homePhone=" + homePhone + ", mobile=" + mobile
				+ ", email=" + email + ", address1=" + address1 + ", address2="
				+ address2 + ", city=" + city + ", state=" + state + ", zip="
				+ zip + ", ssn=" + ssn + ", dob=" + dob + ", driversLicence="
				+ driversLicence + ", dlState=" + dlState + ", dlCountry="
				+ dlCountry + ", dlExperiryDate=" + dlExperiryDate
				+ ", employer=" + employer + ", employerCity=" + employerCity
				+ ", employerState=" + employerState + "]";
	}

}

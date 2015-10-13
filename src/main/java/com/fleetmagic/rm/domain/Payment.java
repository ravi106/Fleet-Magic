package com.fleetmagic.rm.domain;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "payment")
public class Payment {
	
	@Id
	@GeneratedValue
	private Long id;	
	private String description;		
	@Enumerated(EnumType.STRING)
	private PaymentMethod paymentMethod;	
	private Date payDate;	
	private Integer amount;		
	@OneToOne
	private CardInfo cardInfo;	
	private String payStatus;	
	private int rentalPaymentId;
	private String paidFor;
	private String chequeNumber;
	private String chequeIssuedBy;
	
	public int getRentalPaymentId() {
		return rentalPaymentId;
	}

	public void setRentalPaymentId(int rentalPaymentId) {
		this.rentalPaymentId = rentalPaymentId;
	}

	public String getPaidFor() {
		return paidFor;
	}

	public void setPaidFor(String paidFor) {
		this.paidFor = paidFor;
	}

	public String getChequeNumber() {
		return chequeNumber;
	}

	public void setChequeNumber(String chequeNumber) {
		this.chequeNumber = chequeNumber;
	}

	public String getChequeIssuedBy() {
		return chequeIssuedBy;
	}

	public void setChequeIssuedBy(String chequeIssuedBy) {
		this.chequeIssuedBy = chequeIssuedBy;
	}

	public PaymentMethod getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(PaymentMethod paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public CardInfo getCardInfo() {
		return cardInfo;
	}

	public void setCardInfo(CardInfo cardInfo) {
		this.cardInfo = cardInfo;
	}

	public Date getPayDate() {
		return payDate;
	}

	public void setPayDate(Date payDate) {
		this.payDate = payDate;
	}

	public Integer getAmount() {
		return amount;
	}

	public void setAmount(Integer amount) {
		this.amount = amount;
	}

	public String getPayStatus() {
		return payStatus;
	}

	public void setPayStatus(String payStatus) {
		this.payStatus = payStatus;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Payment [id=" + id + ", description=" + description
				+ ", paymentMethod=" + paymentMethod + ", payDate=" + payDate
				+ ", amount=" + amount + ", cardInfo=" + cardInfo
				+ ", payStatus=" + payStatus + ", rentalPaymentId="
				+ rentalPaymentId + ", paidFor=" + paidFor + ", chequeNumber="
				+ chequeNumber + ", chequeIssuedBy=" + chequeIssuedBy + "]";
	}

}

package com.fleetmagic.rm.service;

import java.util.List;

import javax.annotation.Resource;

import com.fleetmagic.rm.domain.Payment;
import com.fleetmagic.rm.repository.PaymentRepository;

public class PaymentService {
	
	@Resource
	private PaymentRepository paymentRepository;
	
	public void createPayment(Payment payment) {
		

	}

	public void updatePayment(Payment payment) {

	}

	public void fetchPayment(Payment payment) {

	}
	
	
	public List<Payment> getPayments(){
		return paymentRepository.findAll();
		
	}
	
	public List<Payment> getPaymentsByRentalPaymentId(int rentalPaymentId){
		return paymentRepository.findByRentalPaymentId(rentalPaymentId);
	}

}

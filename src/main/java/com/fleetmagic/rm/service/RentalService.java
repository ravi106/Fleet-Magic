package com.fleetmagic.rm.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.fleetmagic.cm.domain.Customer;
import com.fleetmagic.cm.service.CustomerService;
import com.fleetmagic.fm.domain.Vehicle;
import com.fleetmagic.fm.domain.VehicleStatus;
import com.fleetmagic.repository.VehicleRepository;
import com.fleetmagic.rm.domain.CardInfo;
import com.fleetmagic.rm.domain.Payment;
import com.fleetmagic.rm.domain.Rental;
import com.fleetmagic.rm.domain.RentalDashBoard;
import com.fleetmagic.rm.repository.CardInfoRepository;
import com.fleetmagic.rm.repository.PaymentRepository;
import com.fleetmagic.rm.repository.RentalRepository;

@Service
public class RentalService {

	@Resource
	private RentalRepository rentalRepository;

	@Resource
	private PaymentRepository paymentRepository;

	@Resource
	private CardInfoRepository cardInfoRepository;

	@Resource
	private CustomerService customerService;

	@Resource
	private VehicleRepository vehicleRepository;

	public Rental createRental(Rental rental) {
		System.err.println(rental);
		Customer customer1 = customerService.saveCustomer(rental.getCustomer1());
		Customer customer2 = customerService.saveCustomer(rental.getCustomer2());

		rental.setCustomer1(customer1);
		rental.setCustomer2(customer2);
		if (rental.getNumber() == null) {
			String suffix = "1";
			if (rental.getBusinessUnit() != null) {
				suffix = rental.getBusinessUnit().getId().toString();
			}
			rental.setNumber(suffix + "-" + System.currentTimeMillis());
		}
		System.err.println("rental Payment:" + rental.getPayment());
		if (rental.getPayment() != null) {
			if (rental.getPayment().getCardInfo() != null) {
				CardInfo cardInfo = cardInfoRepository.saveAndFlush(rental.getPayment().getCardInfo());
				System.err.println(cardInfo);
				rental.getPayment().setCardInfo(cardInfo);

			}
			System.err.println("rental Payment:" + rental.getPayment());
			Payment payment = paymentRepository.saveAndFlush(rental.getPayment());
			rental.setPayment(payment);
		}
		if (rental.getId() == null) {
			rental.getVehicle().setStatus(VehicleStatus.RENTED);
			vehicleRepository.saveAndFlush(rental.getVehicle());
		}
		return rentalRepository.saveAndFlush(rental);
	}

	public Rental closeRental(Rental rental) {
		if (rental.getReplacementVehicle() != null) {
			rental.getReplacementVehicle().setStatus(VehicleStatus.AVAILABLE);
			vehicleRepository.saveAndFlush(rental.getReplacementVehicle());
		} else {
			rental.getVehicle().setStatus(VehicleStatus.AVAILABLE);
			vehicleRepository.saveAndFlush(rental.getVehicle());
		}
		return rentalRepository.saveAndFlush(rental);
		// IF any status maintained at rental we can mark this or w can add
		// closeDate in rental

	}

	public Rental replaceVehicle(Rental rental) {
		rental.getVehicle().setStatus(VehicleStatus.AVAILABLE);
		vehicleRepository.saveAndFlush(rental.getVehicle());
		rental.getReplacementVehicle().setStatus(VehicleStatus.RENTED);
		vehicleRepository.saveAndFlush(rental.getReplacementVehicle());
		rental.setReplacementDate(new Date());
		return rentalRepository.saveAndFlush(rental);

	}

	public Rental extendRental(Rental rental) {
		Rental dbRental = rentalRepository.findOne(rental.getId());
		if (dbRental.getExtenstion1() == null || dbRental.getExtenstion2() == null) {
			if (dbRental.getExtenstion1() == null) {
				rental.setPrice(dbRental.getPrice() + rental.getExtenstion1Amount());
			} else {
				rental.setPrice(dbRental.getPrice() + rental.getExtenstion2Amount());
			}
			return rentalRepository.saveAndFlush(rental);
		}
		return rental;
		// IF any status maintained at rental we can mark this or w can add
		// closeDate in rental

	}

	public void updateRental(Rental rental) {

	}

	public void fetchRental(Rental rental) {

	}

	public List<Rental> getRentals() {
		return rentalRepository.findAll();

	}

	public List<Rental> getRentalsByEmail(String email) {
		return rentalRepository.getRentalByEmail(email);

	}

	public List<Rental> getRentalsByMobile(String mobile) {
		return rentalRepository.getRentalByMobile(mobile);

	}

	public List<Rental> getRentalsByNumber(String number) {
		return rentalRepository.getRentalByNumber(number);

	}

	public List<RentalDashBoard> getRentalsDashBoard(Date startDate, Date endDate) {
		List<RentalDashBoard> rentalDashboard = new ArrayList<RentalDashBoard>();
		// List<Vehicle> vehicles = vehicleRepository.findAll();
		System.out.println(startDate);
		System.out.println(startDate);
		
		List<Rental> rentals = rentalRepository.getRentalBetwenDates(startDate, endDate,startDate,endDate);
		System.err.println(rentals.size());
		Calendar start = Calendar.getInstance();
		start.setTime(startDate);
		Calendar end = Calendar.getInstance();
		end.setTime(endDate); 

		for (Date date = start.getTime(); start.before(end); start.add(Calendar.DATE, 1), date = start.getTime()) {
			// Do your job here with `date`.
			System.out.println(date);
			RentalDashBoard rentalDashBoard2 = new RentalDashBoard();
			rentalDashBoard2.setDate(date);
			rentalDashBoard2.setRentedVehicles(new ArrayList<Long>());
			for (Rental rental : rentals) {
				System.err.println(rental);
				Date rentalEndDate = rental.getEndDate();
				rentalEndDate = rental.getExtenstion1() != null ? rental.getExtenstion1() : rentalEndDate;
				rentalEndDate = rental.getExtenstion2() != null ? rental.getExtenstion2() : rentalEndDate;
				if ((date.after(rental.getStartDate()) && (date.before(rentalEndDate)))
						|| (date.equals(rental.getStartDate()) || date.equals(rentalEndDate))) {
					rentalDashBoard2.getRentedVehicles().add(rental.getVehicle().getId());
				}
			}
			rentalDashboard.add(rentalDashBoard2); 
		}

		return rentalDashboard;
		// LocalDate start = LocalDate.parse("2016-02-28"),
		// end = LocalDate.parse("2016-03-02");
		// Stream.iterate(start, date -> date.plusDays(1))
		// .limit(ChronoUnit.DAYS.between(start, end) + 1)
		// .forEach(System.out::println);
		//
		

	}

	public static void main(String[] args) {
	}
}

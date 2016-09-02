package com.fleetmagic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fleetmagic.fm.domain.BusinessUnit;

@Repository 
public interface BusinessUnitRepository extends JpaRepository<BusinessUnit, Long> {

}

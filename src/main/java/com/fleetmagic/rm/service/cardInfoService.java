package com.fleetmagic.rm.service;

import java.util.List;
import javax.annotation.Resource;
import com.fleetmagic.rm.domain.CardInfo;
import com.fleetmagic.rm.repository.CardInfoRepository;


public class cardInfoService {
	
	@Resource
	private CardInfoRepository cardInfoRepository;
	
	public void createCardInfo(CardInfo cardInfo) {
		

	}

	public void updateCardInfo(CardInfo cardInfo) {

	}

	public void fetchCardInfo(CardInfo cardInfo) {

	}
	
	
	public List<CardInfo> getCardInfos(){
		return cardInfoRepository.findAll();
		
	}

}

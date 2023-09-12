package com.ts.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ts.model.Registration;
import com.ts.repository.RegistrationRepository;

@Service
public class RegistrationService {

	@Autowired
	RegistrationRepository registrationRepository;
	
	public Registration save(Registration registration) {
		return registrationRepository.save(registration);
	}
	
	public void delete(Registration registration) {
		registrationRepository.deleteAll();
	}
}

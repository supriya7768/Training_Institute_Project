package com.ts.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ts.model.Registration;
import com.ts.service.RegistrationService;

@RestController
public class RegistrationController {

	@Autowired
	RegistrationService registrationService;
	
	@PostMapping("/save")
	public Registration save(@RequestBody Registration registration) {
		return registrationService.save(registration);
	}
	
	@DeleteMapping("/delete")
	public void delete(@RequestBody Registration registration) {
		registrationService.delete(registration);
	}
}

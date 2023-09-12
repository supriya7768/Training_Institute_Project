package com.ts.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Registration {

	@Id
	private Long id;
	private String name;
	private Date dob;
    private String email;
	private int mobile;
	private String address;
	private String education;
	private int yearOfPassing;
	private String experience;
	private String course;
	private int fees;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getMobile() {
		return mobile;
	}
	public void setMobile(int mobile) {
		this.mobile = mobile;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public int getYearOfPassing() {
		return yearOfPassing;
	}
	public void setYearOfPassing(int yearOfPassing) {
		this.yearOfPassing = yearOfPassing;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		this.course = course;
	}
	public int getFees() {
		return fees;
	}
	public void setFees(int fees) {
		this.fees = fees;
	}
	
	public Registration() {}
	
	public Registration(Long id, String name, Date dob, String email, int mobile, String address, String education,
			int yearOfPassing, String experience, String course, int fees) {
	
		this.id = id;
		this.name = name;
		this.dob = dob;
		this.email = email;
		this.mobile = mobile;
		this.address = address;
		this.education = education;
		this.yearOfPassing = yearOfPassing;
		this.experience = experience;
		this.course = course;
		this.fees = fees;
	}
	
	
	
	
}

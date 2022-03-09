package com.manoj.pets.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.manoj.pets.common.PetNotFoundException;
import com.manoj.pets.model.Pet;
import com.manoj.pets.repo.PetRepo;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class PetService {
	
	@Autowired
	private PetRepo petRepo;
	
	@Autowired
	private RestTemplate restTemplate;
	
	public List<Pet> getAllPets(){
		log.info("Get all pets");
		return this.petRepo.findAll();
	}
	
	public List<Pet> getPetsForUser(String username){
		log.info("Pets for user "+username);
		return this.petRepo.findAllByOwner(username);
	}
	
	public Pet savePet(Pet pet) {
		log.info("Save pet "+pet.toString());
		return this.petRepo.save(pet);
	}
	
	public Pet getPetById(Integer id) {
		log.info("Get pet details for id "+id);
		Pet pet = this.petRepo.findById(id).get();
		if(null == pet) {
			log.error("Pet not found");
			throw new PetNotFoundException("Pet not found");
		}
		return pet;
	}
	
	public void deletePet(Integer id) {
		log.info("Delete pet for id "+id);
		this.petRepo.deleteById(id);
	}
	
	public void buyPet(String username, Integer petId) {
		Pet pet = getPetById(petId);
		pet.setOwner(username);
		pet.setIsAvailable(Boolean.FALSE);
		this.petRepo.save(pet);
	}

    public void sellPet(Integer petId) {
		Pet pet = getPetById(petId);
		pet.setOwner(null);
		pet.setIsAvailable(Boolean.TRUE);
		this.petRepo.save(pet);
    }
}

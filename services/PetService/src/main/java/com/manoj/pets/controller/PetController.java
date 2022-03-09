package com.manoj.pets.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.manoj.pets.model.Pet;
import com.manoj.pets.service.PetService;

import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2
@RequestMapping("/pets")
public class PetController {
	@Autowired
	private PetService petService;
	
	@GetMapping("/")
	public List<Pet> getAllPets(){
		log.info("get all pets");
		return this.petService.getAllPets();
	}
	
	@GetMapping("/{id}")
	public Pet getPetById(@PathVariable("id") Integer id) {
		log.info("get by id "+id);
		return this.petService.getPetById(id);
	}
	
	@PostMapping("/")
	public Pet savePet(@RequestBody Pet pet) {
		log.info("Save pet");
		return this.petService.savePet(pet);
	}

	@PutMapping("/")
	public Pet modifyPet(@RequestBody Pet pet) {
		log.info("Save pet");
		return this.petService.savePet(pet);
	}
	
	@DeleteMapping("/{id}")
	public void deletePetById(@PathVariable("id") Integer id) {
		this.petService.deletePet(id);
	}
	
	@PutMapping("/buyPet")
	public void buyPet(@RequestBody Pet pet) {
		String username = pet.getOwner();
		Integer petId = pet.getId();
		this.petService.buyPet(username, petId);
	}
	
	@GetMapping("/petsOfUser/{userName}")
	public List<Pet> getPetsOfUser(@PathVariable("userName") String userName){
		return this.petService.getPetsForUser(userName);
	}

	@PostMapping("/sellPet/{petId}")
	public void sellPet(@PathVariable("petId") Integer petId){
		this.petService.sellPet(petId);
	}
}

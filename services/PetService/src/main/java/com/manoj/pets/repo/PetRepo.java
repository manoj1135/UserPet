package com.manoj.pets.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.manoj.pets.model.Pet;

@Repository
public interface PetRepo extends JpaRepository<Pet, Integer>{

	List<Pet> findAllByOwner(String userName);

}

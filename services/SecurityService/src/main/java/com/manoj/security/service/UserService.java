package com.manoj.security.service;

import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.manoj.security.common.UserAlreadyExistException;
import com.manoj.security.common.UserNotFoundException;
import com.manoj.security.model.User;
import com.manoj.security.repo.UserRepo;
import com.manoj.security.vo.Pet;

@Service
public class UserService {
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private RestTemplate restTemplate;
	
	public List<User> getAllUsers(){
		return this.userRepo.findAll();
	}

	public User saveUser(User user) throws UserAlreadyExistException {
		String username = user.getUserName();
		boolean isValid = validateUserName(username);
		if(isValid) {
			String password = user.getPassword();
			password = Base64.getEncoder().encodeToString(password.getBytes());
			user.setPassword(password);
			return this.userRepo.save(user);			
		}else {
			throw new UserAlreadyExistException("Username already exist");
		}
	}

	public User getUser(Integer id) throws UserNotFoundException {
		try {
			return this.userRepo.findById(id).get();			
		} catch (Exception e) {
			throw new UserNotFoundException("User not found");
		}
	}

	public User doLogin(String username, String password) throws UserNotFoundException {
		password = Base64.getEncoder().encodeToString(password.getBytes());
		User loggedInUser = this.userRepo.findByUserNameAndPassword(username, password);
		if(null == loggedInUser) {
			throw new UserNotFoundException("User does not exist.");
		}
		
		return loggedInUser;
	}

	public boolean validateUserName(String username) {
		return this.userRepo.findByUserName(username)==null;
	}

	public void deleteUser(Integer id) {
		this.userRepo.deleteById(id);
	}
	
	public List<Pet> getPets(){
		ResponseEntity<Pet[]> responseEntity = restTemplate.getForEntity("http://PET-SERVICE/pets/", Pet[].class);
		Pet[] petArray = responseEntity.getBody();
		return Arrays.stream(petArray).collect(Collectors.toList());
	}

	public List<Pet> getMyPets(String userName) {
		ResponseEntity<Pet[]> responseEntity = restTemplate.getForEntity("http://PET-SERVICE/pets/petsOfUser/"+userName, Pet[].class);
		Pet[] petArray = responseEntity.getBody();
		return Arrays.stream(petArray).collect(Collectors.toList());
	}
}

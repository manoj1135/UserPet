package com.manoj.security.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.manoj.security.common.UserAlreadyExistException;
import com.manoj.security.common.UserNotFoundException;
import com.manoj.security.model.User;
import com.manoj.security.service.UserService;
import com.manoj.security.vo.Pet;

import lombok.extern.log4j.Log4j2;


@RestController
@RequestMapping("/users")
@Log4j2
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/")
	public List<User> getAllUsers(){
		log.info("getAllUsers");
		return this.userService.getAllUsers();
	}
	
	@PostMapping("/")
	public User saveUser(@RequestBody User user) throws UserAlreadyExistException {
		return this.userService.saveUser(user);
	}
	
	@PostMapping("/register")
	public User registerUser(@RequestBody User user) throws UserAlreadyExistException {
		return this.userService.saveUser(user);
	}
	
	@GetMapping("/{id}")
	public User getUser(@PathVariable("id") Integer id) throws UserNotFoundException {
		return this.userService.getUser(id);
	}
	
	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable("id") Integer id) {
		this.userService.deleteUser(id);
	}
	
	@PostMapping("/login")
	public User doLogin(@RequestBody User user) throws UserNotFoundException {
		String username = user.getUserName();
		String password = user.getPassword();
		return this.userService.doLogin(username, password);
	}
	
	@GetMapping("/checkusername/{username}")
	public boolean validateUserName(@PathVariable("username") String username) {
		return this.userService.validateUserName(username);
	}
	
	@GetMapping("/allPets")
	public List<Pet> getAllPets(){
		return this.userService.getPets();
	}
	
	@GetMapping("/myPets/{userName}")
	public List<Pet> getMyPets(@PathVariable("userName") String userName){
		return this.userService.getMyPets(userName);
	}
}

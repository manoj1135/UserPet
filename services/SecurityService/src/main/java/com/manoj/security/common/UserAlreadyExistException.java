package com.manoj.security.common;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.ALREADY_REPORTED, reason = "User already exist.")
public class UserAlreadyExistException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public UserAlreadyExistException(String message) {
		super(message);
	}
	
	public UserAlreadyExistException(String message, Throwable t) {
		super(message,t);
	}
}

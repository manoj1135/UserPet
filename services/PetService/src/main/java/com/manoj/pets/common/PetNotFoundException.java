package com.manoj.pets.common;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class PetNotFoundException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	
	public PetNotFoundException(String message) {
		super(message);
	}
	
	public PetNotFoundException(String message, Throwable t) {
		super(message, t);
	}
}

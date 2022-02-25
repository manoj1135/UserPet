package com.manoj.pets.common;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Date;

@RestController
@ControllerAdvice
public class CustomizedReposeEntityExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(Exception.class)
    public final ResponseEntity<Object> handleAllException(Exception ex, WebRequest req){
        ExceptionResponse eResp = new ExceptionResponse(new Date(), ex.getMessage(), req.getDescription(false));
        return new ResponseEntity(eResp, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(PetNotFoundException.class)
    public final ResponseEntity<Object> handlePetNotFoundException(Exception ex, WebRequest req){
        ExceptionResponse eResp = new ExceptionResponse(new Date(), ex.getMessage(), req.getDescription(false));
        return new ResponseEntity(eResp, HttpStatus.NOT_FOUND);
    }

}

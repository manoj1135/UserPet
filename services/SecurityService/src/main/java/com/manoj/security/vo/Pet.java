package com.manoj.security.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pet {
	private Integer id;
	private String name;
	private Boolean isAvailable;
	private String owner;
}

package com.manoj.security.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.manoj.security.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer>{

	public User findByUserNameAndPassword(String userName, String password);

	public User findByUserName(String username);
}

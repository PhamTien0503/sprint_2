package com.be.service.impl;


import com.be.model.AppUser;
import com.be.repository.IUserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class UserDetailService implements UserDetailsService {

    @Autowired
    private IUserRepository userRepository;

    @Override
    @Transactional
    public org.springframework.security.core.userdetails.UserDetails loadUserByUsername(String email)  {
        AppUser account = userRepository.findUserByEmail(email);
        if(account==null){

            throw new UsernameNotFoundException("User " + email + " was not found in the database");
        }
        return UserDetails.build(account);
    }
}

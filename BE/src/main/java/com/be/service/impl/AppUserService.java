package com.be.service.impl;

import com.be.model.AppUser;
import com.be.repository.IUserRepository;
import com.be.service.IAppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppUserService implements IAppUserService {
    @Autowired
    private IUserRepository userRepository;

    @Override
    public AppUser findAppUserById(Long id) {
        return userRepository.findById(id).get();
    }
}

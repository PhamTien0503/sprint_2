package com.be.service;

import com.be.model.AppUser;

public interface IAppUserService {
    AppUser findAppUserById(Long id);
}

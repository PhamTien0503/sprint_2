package com.be.service.impl;


import com.be.model.AppUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;


public class UserDetails implements org.springframework.security.core.userdetails.UserDetails {

    private static final long serialVersionUID = 1L;
    private String email;


    private String password;
    private List<GrantedAuthority> authorities = null;

    public UserDetails(String username, String password,
                       List<GrantedAuthority> authorities) {
        this.email = username;
        this.password = password;
        this.authorities = authorities;
    }

    public static UserDetails build(AppUser appUser) {
        List<GrantedAuthority> authorities = appUser.getUserRoleSet().stream()
                .map(role -> new SimpleGrantedAuthority(role.getRole().getName()))
                .collect(Collectors.toList());
        return new UserDetails(
                appUser.getEmail(),
                appUser.getPassword(),
                authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }


    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserDetails account = (UserDetails) o;
        return Objects.equals(email, account.email);
    }
}

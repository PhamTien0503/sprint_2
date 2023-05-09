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
    private String nameUser;
    private Long idUser;
    private List<GrantedAuthority> authorities = null;

    public UserDetails(String username, String password,String nameUser, Long idUser,
                       List<GrantedAuthority> authorities) {
        this.email = username;
        this.password = password;
        this.authorities = authorities;
        this.nameUser=nameUser;
        this.idUser=idUser;
    }

    public static UserDetails build(AppUser appUser) {
        List<GrantedAuthority> authorities = appUser.getUserRoleSet().stream()
                .map(role -> new SimpleGrantedAuthority(role.getRole().getName()))
                .collect(Collectors.toList());
        return new UserDetails(
                appUser.getEmail(),
                appUser.getPassword(),
                appUser.getName(),
                appUser.getId(),
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public void setAuthorities(List<GrantedAuthority> authorities) {
        this.authorities = authorities;
    }
}

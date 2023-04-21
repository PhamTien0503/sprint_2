package com.be.repository;

import com.be.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public interface IUserRepository  extends JpaRepository<AppUser,Long> {
    @Query(value = "select a.* from  app_user where email= :email", nativeQuery = true)
    AppUser findUserByEmail(@Param("email") String email);
}

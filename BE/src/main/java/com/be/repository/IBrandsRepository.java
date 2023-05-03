package com.be.repository;

import com.be.model.Brands;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBrandsRepository extends JpaRepository<Brands,Integer> {
}

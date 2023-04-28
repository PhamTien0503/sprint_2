package com.be.repository;

import com.be.model.Brands;
import com.be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IProductRepository extends JpaRepository<Product,Long> {
   Page<Product>findByNameContaining(String nameProduct, Pageable pageable);
}

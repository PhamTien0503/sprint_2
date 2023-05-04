package com.be.repository;

import com.be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IProductRepository extends JpaRepository<Product,Long> {
   Page<Product>findByNameContaining(String nameProduct, Pageable pageable);
   @Query(nativeQuery = true,
   value = "select * from `product` as p " +
           "        join `brand` as b on p.brands_id=b.id" +
           "    join `product_type` as pt  on p.product_type_id=pt.id" +
           "   where p.name like concat('%',:nameProduct,'%') " +
           "        and p.brands_id = ifnull(:brandsId,p.brands_id)" +
           "        and p.product_type_id=coalesce(nullif(:productTypeId,0), p.product_type_id)")
   Page<Product>getAllProduct(@Param("nameProduct") String nameProduct,
                              @Param("brandsId") Integer brandsId,
                              @Param("productTypeId") Integer productTypeId,
                              Pageable pageable);

}

package com.be.repository;

import com.be.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IProductRepository extends JpaRepository<Product,Long> {
   Page<Product>findByNameContaining(String nameProduct, Pageable pageable);
   @Query(nativeQuery = true,
   value = "select `product`.* from `product`\n" +
           "        join `brand` on `product`.brands_id=`brand`.id\n" +
           " join `product_type` on `product`.product_type_id=`product_type`.id\n" +
           "    where `product`.name like concat('%',:nameProduct,'%') \n" +
           "        and `product`.brands_id=coalesce(nullif(:brandsId,0), `product`.brands_id)\n" +
           "        and `product`.product_type_id=coalesce(nullif(:productTypeId,0), `product`.product_type_id)")
   Page<Product>getAllProduct(@Param("nameProduct") String nameProduct,
                              @Param("brandsId") Integer brandsId,
                              @Param("productTypeId") Integer productTypeId,
                              Pageable pageable);

}

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  productQuantity?: number;
  // private String releaseDate;
  // private String description;
  //
  // @Column(columnDefinition = "text")
  // private String img;
  // @Column(columnDefinition = "bit(1)")
  // private Boolean flagDelete=false;
  // @ManyToOne
  // @JoinColumn(name = "brands_id",referencedColumnName = "id")
  // private Brands brands;
  // @ManyToOne
  // @JoinColumn(name = "product_type_id", referencedColumnName = "id")
  // private ProductType productType;
  // @OneToMany(mappedBy = "product")
  // @JsonBackReference
  // private Set<OrderDetail> orderDetailSet;
}

import React, { useEffect, useState } from 'react';
import Products from '../components/Products';
import { FaLongArrowAltRight, FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import backgroundImg from '../assets/image-from-rawpixel-id-3282142-jpeg.jpg';
import products from '../data';
import { useProductsContext } from '../context/products_context';
import { formatPrice } from '../components/Product';

const getCategory = () => {
  let category = products.map((product) => product.category);
  return ['all', ...new Set(category)];
};

const paginate = (filtered_products) => {
  const itemsPerPage = 6;
  const pages = Math.ceil(filtered_products.length / itemsPerPage);

  const newProducts = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return filtered_products.slice(start, start + itemsPerPage);
  });
  return newProducts;
};

function ProductsPage() {
  const [page, setPage] = useState(0);

  const {
    filtered_products,
    updateSort,
    sort_products,
    filters: { search, category, min_price, max_price, price, inStock },
    updateFilters,
    clearFilters,
  } = useProductsContext();

  const filteredProductsPages = paginate(filtered_products)[page];

  const handlePage = (index) => {
    setPage(index);
  };

  const updateFiltersAndPages = (name, value) => {
    updateFilters(name, value);
    setPage(0);
  };

  return (
    <Wrapper>
      <div className="products-page-header">
        <h2>ONLINE SURF SHOP</h2>
      </div>
      <section className="section-padding ">
        <div className="filters">
          <div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-control">
                <input
                  type="text"
                  name="search"
                  value={search}
                  placeholder="Search"
                  className="search-input"
                  onChange={updateFiltersAndPages}
                ></input>
              </div>
              <div className="form-control category">
                <h5>Category</h5>
                <div>
                  {getCategory().map((item, index) => {
                    return (
                      <button
                        key={index}
                        type="button"
                        className={`${
                          category === item
                            ? 'categories-btn active-btn'
                            : 'categories-btn'
                        }`}
                        onClick={updateFiltersAndPages}
                        name="category"
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="form-control">
                <h5>Price</h5>
                <p>{formatPrice(price)}</p>

                <input
                  type="range"
                  name="price"
                  onChange={updateFiltersAndPages}
                  min={min_price}
                  max={max_price}
                  value={price}
                />
              </div>
              <div className="form-control stock">
                <label htmlFor="inStock">In Stock</label>
                <input
                  type="checkbox"
                  name="inStock"
                  id="inStock"
                  onChange={updateFiltersAndPages}
                  checked={inStock}
                />
              </div>
              <button
                type="button"
                className="btn clear-btn"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </form>
          </div>
        </div>
        <div>
          <div className="sort">
            <p>{filtered_products.length} products found</p>
            <hr />
            <form>
              <label htmlFor="sort">Sort by</label>
              <select
                name="sort"
                id="sort"
                className="sort-input"
                value={sort_products}
                onChange={updateSort}
              >
                <option value="price">Price (lowest)</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </form>
          </div>
          {filtered_products < 1 ? (
            <h4>0 products found</h4>
          ) : (
            <Products filteredProductsPages={filteredProductsPages} />
          )}
        </div>
      </section>
      <div className="pagination">
        {paginate(filtered_products).map((item, index) => {
          return (
            <button key={index} onClick={() => handlePage(index)}>
              {index + 1}
            </button>
          );
        })}
        {/*  
        <button>
          <FaLongArrowAltRight />
        </button> */}
      </div>
    </Wrapper>
  );
}

export default ProductsPage;

const Wrapper = styled.main`
  margin-bottom: 40px;
  section {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
    width: 90vw;
    margin: 0 auto;
    max-width: 1200px;
  }
  .products-page-header {
    background-image: url(${backgroundImg});
    width: 100%;
    height: 40vh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    letter-spacing: 0.1rem;
  }
  .products-page-header h2 {
    color: #fff;
  }
  .sort {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 2rem;
    @media (max-width: 576px) {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 0.75rem;

      label {
        display: inline-block;
        margin-right: 0.5rem;
      }
    }
  }
  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  .filters {
    padding-top: 1rem;
  }
  .search-input {
    padding: 0.5rem;
    background: #ececec;
    border-radius: 2px;
    border-color: transparent;
  }
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
      letter-spacing: 0.1rem;
      font-size: 16px;
    }
  }
  .category {
    padding-top: 1rem;
  }
  .categories-btn {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: 0.1rem;
    cursor: pointer;
  }
  .active-btn {
    font-weight: 700;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .stock {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    margin-top: 1rem;
  }
  .pagination {
    text-align: center;
  }
  .pagination button {
    background-color: #5584ac;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding: 15px 20px;
    margin-left: 4px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }
  .pagination svg {
    fill: #fff;
    font-size: 12px;
  }
  @media (min-width: 768px) {
    section {
      grid-template-columns: 200px 1fr;
    }
  }
`;

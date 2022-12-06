import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useCartStore } from "../store";
import ProductCard from '../components/ProductCard';
import Link from "next/link";

function HomePage() {
  const getProducts = () => fetch("api/products").then((res) => res.json());
  const{ data, isLoading, error, isError }= useQuery("products", getProducts);
  if (isLoading) return <p>Fetching products</p>;

  return (
    <div className="px-4 md:px-6 lg:px-8 pt-16">
      <div className="w-full flex items-center justify-end py-4">
        <Link href={"/cart"} className="p-2 border-2 rounded-full hover:bg-violet-200 transition-all">🛒</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 max-w-7xl mx-auto">
        {data.products.map(
          (
            item: {
              name: string;
              amount: string;
            },
            index: number
          ) => (
            <ProductCard item={item} key={index} />
          )
        )}
      </div>

      
    </div>
  );
}

export default HomePage;

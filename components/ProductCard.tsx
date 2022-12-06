import React from "react";
import { useCartStore } from "../store";

interface ProductCardProps {
  item: {
    name: string;
    amount: string;
    tag: string;
  };
}

export const ProductCard = ({ item }: ProductCardProps) => {
  const { addToCart } = useCartStore();

  return (
    <article className="p-4 border flex flex-col gap-3 relative">
      {item.tag && (
        <div className="absolute top-0 -right-4 rotate-45 py-0 px-4 rounded bg-violet-600">
          <span>{item.tag}</span>
        </div>
      )}
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-slate-900 font-bold">{item.name}</h2>
        <p className="text-lg text-slate-900 font-bold">${item.amount}</p>
      </div>

      <button
        className="p-2 bg-slate-900 hover:bg-black hover:scale-105 active:scale-95 transition-all text-white w-full"
        onClick={() => addToCart({ ...item, quantity: 1 })}
      >
        Add to cart
      </button>
    </article>
  );
};

export default ProductCard;

import React from "react";
import { useCartStore } from "../store";
import Link from "next/link";


function Cart() {
    const {cart, resetCart} = useCartStore();
  return (
    <div className="px-4 md:px-6 lg:px-8 pt-16">
      <div className="flex items-center justify-between py-4">
        <h2 className="text-3xl font-bold">Cart items</h2>
        <Link
          href={"/"}
          className="p-2 rounded-full border-2 hover:bg-slate-300 transition-all"
        >
          🔙
        </Link>
      </div>
      {cart.length == 0 ? <CartEmpty /> : <CartShowcase cart={cart} />}
      <button
        className="py-2 px-6 rounded-full hover:scale-105 active:scale-95 transition-all font-bold text-lg w-full max-w-xs bg-orange-500 text-slate-900"
        onClick={() => resetCart()}
      >
        Reset Cart
      </button>
    </div>
  );
}

function CartEmpty() {
    return (
        <div>
            <h3>Your cart is currently empty</h3>
        </div>
    )
}

function CartShowcase({cart} : any) {
    return (
        <div className="grid grid-cols-1 gap-2 py-2">
            {cart.map((item : any, index : any) => (
                <div className="flex items-center justify-between border bg-slate-200 p-3" key={index}>
                    <h2 className="flex-1">{item.name}</h2>
                    <p className="flex-1">{item.quantity}</p>
                    <p className="flex-1">${item.amount}</p>
                </div>
            ))}
        </div>
    )
}

export default Cart;

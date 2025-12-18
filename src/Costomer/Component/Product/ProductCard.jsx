import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-[15rem] m-3 border rounded shadow-sm cursor-pointer">
      
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-[20rem] object-cover"
      />

      <div className="p-3 bg-white">
        <p className="font-bold opacity-60">{product.brand}</p>
        <p className="text-sm">{product.title}</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="font-semibold">₹{product.discountedPrice}</span>
          <span className="line-through text-gray-400">₹{product.price}</span>
          <span className="text-green-600 font-semibold">
            {product.discountPersent}% off
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

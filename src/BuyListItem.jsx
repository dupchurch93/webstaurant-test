const BuyListItem = ({product, deleteProduct, setProduct}) => {


    return(
      <div className="grid border border-gray-200 gap-x-4 rounded shadow p-4" style={{ gridTemplateColumns: "1fr 10fr 1fr 0fr 1fr 0fr 1fr 0fr"}}>
        <img data-testid={`product-image-${product.name}`} src={product.image} alt="Refrigerator" className="p-2 rounded border border-gray-200" />
        <div className="flex flex-col flex-grow justify-center">
          <h3 data-testid={`product-name-${product.name}`} className="font-semibold text-lg">{product.name}</h3>
          <p data-testid={`product-description-${product.name}`}>
            {product.description}
          </p>
        </div>

        <div data-testid={`product-price-${product.name}`} className="font-semibold text-lg text-red-500 flex items-center justify-end">
          ${(Math.round(product.price * 100) / 100).toFixed(2)}
        </div>

        <span className="flex items-center font-semibold">x</span>

        <div className="flex items-center justify-center">
          <input data-testid={`product-quantity-${product.name}`} type="number" min="0" max="1000" className="border border-gray-300 rounded w-24 text-lg px-2" value={product.quantity} onChange={(e) => setProduct(e.target.value, product)}/>
        </div>

        <span className="flex items-center">=</span>

        <span data-testid={`total-price-${product.name}`} className="flex items-center font-semibold text-green-500 text-xl">
        ${(Math.round(product.price * product.quantity * 100) / 100).toFixed(2)}
        </span>

        <div className="flex items-center justify-end">
          <button onClick={() => deleteProduct(product)}type="button" className="bg-red-100 hover:bg-red-200 p-1 rounded ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-red-500 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    )
}

export default BuyListItem;

import BuyListItem from "./BuyListItem";

const BuyList = ({ buyList, setBuyList }) => {

  const deleteProduct = (product) => {
    const updatedBuyList = Object.assign({}, buyList);
    const subtractAmount = product.quantity * product.price;
    delete updatedBuyList.addedItems[product.itemNumber];
    updatedBuyList.total-= subtractAmount;
    setBuyList(updatedBuyList);
  };

  const setProduct = (newQuant, product) =>{
    console.log("value in input", newQuant)
    // if new quantity less than 0 is entered, set to 0
    if(newQuant < 0){
      newQuant = 0
    }
    const updatedBuyList = Object.assign({}, buyList);
    // get currentQuantity
    const currentQuant = updatedBuyList.addedItems[product.itemNumber].quantity;
    let difference = newQuant - currentQuant;
    // set the new quantity
    updatedBuyList.addedItems[product.itemNumber].quantity = newQuant;
    // change the total based on the difference
    updatedBuyList.total = updatedBuyList.total + (difference * product.price)
    setBuyList(updatedBuyList);
  }

  return (
    <div className="mt-4">
      <h1 data-testid="buylist-title" className="font-semibold text-2xl">Buy List</h1>

      <div className="border border-gray-200 p-4 rounded shadow mt-2 grid grid-cols-1 gap-y-4">
        {Object.values(buyList.addedItems).map((product) => {
          return (
            <BuyListItem
              product={product}
              deleteProduct={deleteProduct}
              setProduct={setProduct}
              key={product.itemNumber}
            ></BuyListItem>
          );
        })}
      </div>
    </div>
  );
};

export default BuyList;

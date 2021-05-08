import './App.css';
import StockProducts from './StockProducts.jsx';
import BuyList from './BuyList';
import {useState} from "react";

function App() {
  const [buyList, setBuyList] = useState({addedItems: {}, total: 0.00});

  const addProduct = (product) => {
    // copy our current buyList object
    const updatedBuyList = Object.assign({}, buyList);
    // if it is already in there, add 1 to the quantity
    if(updatedBuyList.addedItems[product.itemNumber]){
      updatedBuyList.addedItems[product.itemNumber].quantity+= 1;
    }
    // otherwise add it to the addedItems list and set the quantity to 1
    else{
      updatedBuyList.addedItems[product.itemNumber] = product;
      updatedBuyList.addedItems[product.itemNumber].quantity = 1;
    }
    // update the total either way
    updatedBuyList.total = updatedBuyList.total + product.price;
    console.log(buyList)
    // set the BuyList to the updated object
    setBuyList(updatedBuyList)
  }

  return (
    <div className="p-10 m-auto bg-blue-50 min-h-screen">
      <div className="border border-gray-300 rounded-lg w-full bg-white p-10 shadow-lg">
        <h1 className="m-0 p-0 text-2xl font-semibold">Restaurant Order System</h1>
        <hr className="my-3 border border-0 border-t-1 border-gray-200" />
        Select products below to add to the ordering guide

        <StockProducts addProduct={addProduct}/>

        <BuyList buyList={buyList} setBuyList={setBuyList} />

        <div className="text-right font-semibold text-lg mt-4">
          Total:
          <span className="text-xl ml-2">${(Math.round(buyList.total * 100) / 100).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

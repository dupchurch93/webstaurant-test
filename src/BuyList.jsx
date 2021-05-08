import BuyListItem from "./BuyListItem";

const BuyList = ({buyList, setBuyList}) => (
  <div className="mt-4">
    {console.log("in buy list component", buyList)}
    <h1 className="font-semibold text-2xl">Buy List</h1>

    <div className="border border-gray-200 p-4 rounded shadow mt-2 grid grid-cols-1 gap-y-4">
      {Object.values(buyList.addedItems).map((product) => {
        return(
          <BuyListItem product={product} key={product.itemNumber}></BuyListItem>
        )
      })}
    </div>
  </div>
);

export default BuyList;

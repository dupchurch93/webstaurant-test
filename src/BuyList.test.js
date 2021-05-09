import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BuyList from "./BuyList";

describe("The BuyList component", () => {
  beforeEach(() => {
    const testBuyList = {
      addedItems: {
        "100BTWINE": {
          itemNumber: "100BTWINE",
          name: "Butcher Twine",
          image:
            "https://cdnimg.webstaurantstore.com/images/products/small/6025/708572.jpg",
          description: "#24 Gauge Butcher Sausage Twine 2 lb. Spool",
          price: 6.3,
          quantity: 1,
        },
        "267010005": {
          itemNumber: "267010005",
          name: "Dinner Fork",
          image:
            "https://cdnimg.webstaurantstore.com/images/products/small/369282/1504115.jpg",
          description:
            'Choice Windsor 7" 18/0 Stainless Steel Dinner Fork - 12/Case',
          price: 1.29,
          quantity: 3
        },
      },
      total: 10.17
    };

    render(<BuyList buyList={testBuyList}/>)
  });
});

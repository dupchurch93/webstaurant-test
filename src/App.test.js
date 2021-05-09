import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BuyListItem from "./BuyListItem"

describe("The BuyListItem Component", () => {
    describe("renders", () => {
        beforeEach(() => {
            const testProduct1 = {
                "itemNumber": "1",
                "name": "test1",
                "image": "https://cdnimg.webstaurantstore.com/images/products/small/204813/1411756.jpg",
                "description": "this is the first test object",
                "price": 13.83
            }

            render(<BuyListItem product={testProduct1}/>)
        })

        it("should have a name that matches the product name", () => {
            const title = screen.getByTestId("product-name")
            expect(title).toHaveTextContent("test1");
        });

        it("should have an image of the product", () => {
            const image = screen.getByTestId("product-image")
            expect(title).toHaveTextContent("test1");
        });

        it("should have a name that matches the product name", () => {
            const title = screen.getByTestId("product-name")
            expect(title).toHaveTextContent("test1");
        });

    })
})

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BuyListItem from "./BuyListItem"

describe("The BuyListItem Component", () => {
    describe("renders with product details", () => {
        beforeEach(() => {
            const testProduct1 = {
                "itemNumber": "1",
                "name": "test1",
                "image": "https://cdnimg.webstaurantstore.com/images/products/small/204813/1411756.jpg",
                "description": "this is the first test object",
                "price": 13.83,
                "quantity": 3
            }

            render(<BuyListItem product={testProduct1}/>)
        })

        it("should have a name that matches the product name", () => {
            const title = screen.getByTestId("product-name-test1")
            expect(title).toHaveTextContent("test1");
        });

        it("should have an image of the product", () => {
            const image = screen.getByTestId("product-image-test1")
            expect(image).toHaveProperty("src", "https://cdnimg.webstaurantstore.com/images/products/small/204813/1411756.jpg")
        });

        it("should have a price that matches the product price", () => {
            const price = screen.getByTestId("product-price-test1")
            expect(price).toHaveTextContent("13.83");
        });

        it("should have a quantity that matches the amount in the buy list", () => {
            const quantity = screen.getByTestId("product-quantity-test1")
            expect(quantity.value).toEqual("3");
        });

        it("should have a total equal to the quantity multiplied by the product price", () => {
            const total = screen.getByTestId("total-price-test1")
            expect(total).toHaveTextContent(`${13.83 * 3}`)
        });

        it("should have show the product description", () => {
            const description = screen.getByTestId("product-description-test1")
            expect(description).toHaveTextContent("this is the first test object")
        });

    })
})

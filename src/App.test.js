import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("The BuyList component", () => {
    describe("should render correctly", () => {
        beforeEach(() => {
            render(<App></App>)
        });

        it("should have a buy list title", () => {
            const title = screen.getByTestId("buylist-title");
            expect(title).toHaveTextContent("Buy List")
        });

        it("should have a total of $0.00 at the start", () => {
            const grandTotal = screen.getByTestId("grand-total");
            expect(grandTotal).toHaveTextContent("$0.00")
        });
    });

    describe("should have items added to it", () => {
        beforeEach(() => {
            render(<App></App>)
        });
        it("should add one dinner fork to the buy list", () => {
            const fork = screen.getByTestId(`product-add-Dinner Fork`);
            expect(fork).toHaveProperty("src", "https://cdnimg.webstaurantstore.com/images/products/small/369282/1504115.jpg")
        });
    });
})

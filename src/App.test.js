import "@testing-library/jest-dom";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
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
            render(<App></App>);
        });
        it("should add one dinner fork to the buy list", () => {
            const fork = screen.getByTestId(`product-add-Dinner Fork`);
            fireEvent.click(fork);
            const forkBuyListQuant = screen.getByTestId('product-quantity-Dinner Fork');
            expect(forkBuyListQuant.value).toEqual("1");
        });

        it("should add three dinner forks to the buy list", () => {
            const fork = screen.getByTestId(`product-add-Dinner Fork`);
            fireEvent.click(fork);
            fireEvent.click(fork);
            fireEvent.click(fork);
            const forkBuyListQuant = screen.getByTestId('product-quantity-Dinner Fork');
            expect(forkBuyListQuant.value).toEqual("3");
        });

        it("should update the grand total to equal to the total of all products", () => {
            const fork = screen.getByTestId(`product-add-Dinner Fork`);
            const oven = screen.getByTestId(`product-add-Countertop Convection Oven`);
            fireEvent.click(fork);
            fireEvent.click(oven);
            const grandTotal = screen.getByTestId("grand-total");
            expect(grandTotal).toHaveTextContent("$1400.29")
        })
    });

    afterEach(cleanup)
})

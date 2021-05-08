// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
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

        
    })
})

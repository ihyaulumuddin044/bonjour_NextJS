import ProductPage from "@/pages/products";
import { render, screen } from "@testing-library/react";

jest.mock('next/router', () => {
    return {
        useRouter() {
            return {
                route: '/products',
                pathname: '',
                query: '',
                asPath: '',
                push: jest.fn(),
                events: {
                    on: jest.fn(),
                    off: jest.fn(),      
                },
                beforePopState: jest.fn(() => null),
                prefetch: jest.fn(() => null),
                isReady: true
            }
        }
    }
})

describe("productPage", () => {
    it("should render productPage", () => {
        const page = render(<ProductPage/>)
        // expect(screen.getByTestId("title").textContent).toBe('about pages')
        expect(page).toMatchSnapshot()
    })
})
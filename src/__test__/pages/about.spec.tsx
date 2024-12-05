import AboutPages from "@/pages/about";
import { render, screen } from "@testing-library/react";


describe("AboutPages", () => {
    it("should render AboutPages", () => {
        const page = render(<AboutPages/>)
        expect(screen.getByTestId("title").textContent).toBe('about pages')
        expect(page).toMatchSnapshot()
    })
})
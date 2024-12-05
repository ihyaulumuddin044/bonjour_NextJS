import AboutPages from "@/pages/about";
import { render } from "@testing-library/react";


describe("AboutPages", () => {
    it("should render AboutPages", () => {
        const page = render(<AboutPages/>)
        expect(page).toMatchSnapshot()
    })
})
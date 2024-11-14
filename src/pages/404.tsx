import Error from "@/styles/error.module.scss"
const CustomErrorPage = () => {
    return (
        <div>
            <h1 className={Error.error  }>404 | page tidak tersedia</h1>
        </div>
    )
}

export default CustomErrorPage
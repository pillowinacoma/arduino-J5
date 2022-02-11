const Footer = () => {
    return (
        <div className="bg-blueweather py-2">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center ">
                <p className="text-white text-sm text-center sm:text-left">
                    © 2022 —
                    <a
                        href="#"
                        className="text-white ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Smart Room
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer

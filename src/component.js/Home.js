import React from 'react';

const Home = () => {
    const popularTags = ['Clutch', 'Fabric lining', 'Baggit', 'Multi'];

    return (
        <div className="max-w-sm mx-auto border pt-2 rounded-2xl border-gray-300 bg-white overflow-hidden" style={{ maxHeight: '800px' }}>

            <div className="bg-gray-200 p-4  text-blue-400 flex mr-2 ml-2 rounded-md items-center">
                <img src="data:image/jpeg;base64,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" alt="Timpu Avatar" className="w-10 h-10 rounded-full mr-4" />
                <div>
                    <h2 className="text-lg font-semibold">Timpu</h2>
                    <p className='text-sm'>Chat Assistant</p>
                </div>
                <span className="ml-auto text-3xl text-green-500">•</span>
                <span className="ml-2 text-sm">Online</span>
            </div>

            <div className="p-2 mt-5">
                <div className="mb-4 flex flex-col">
                    <p className="bg-gray-200 p-2 w-60  rounded-lg inline-block">Hi Sam! I am your personal shopping assistant, how can i help you today?</p>
                    <span className="text-xs text-gray-500 mt-1 ml-2">4:45 PM</span>
                </div>
                <div className="mb-4 flex flex-col">
                    <p className="bg-blue-100 p-2 w-50 rounded-lg inline-block ml-auto">I am looking for a hand bag, with long strap.</p>
                    <span className="text-xs text-gray-500  mt-1 ml-auto">4:46 PM</span>
                </div>
            </div>
            <div className="text-blue-400 ml-2">
                <h3 className="text-sm text-slate-400 mb-2">Popular tags for handbag</h3>
                <div className="flex flex-wrap">
                    {popularTags.map((tag) => (
                        <span key={tag} className="bg-blue-100  border-blue-400 border-solid border-2 px-2 py-1 rounded-md mr-2 mb-2 text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="p-4 bg-blue-200 ml-2 rounded-2xl w-60  ">

                <div className='flex p-2 rounded-lg bg-white justify-normal w-full'>

                    <img className='w-11 ' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAABAUGBwECAwj/xABCEAABAwIDBAYHBgMHBQAAAAABAAIDBBEFEiEGEzFBBxQiUWGRMlJxgaGxwSMkM0KS0WLC4RU0U3Ki8PFDRYKD0v/EABoBAAEFAQAAAAAAAAAAAAAAAAABAgMEBQb/xAAqEQACAQMCBQMEAwAAAAAAAAAAAQIDBBESMQUTISJBMlFxYYGxwRUjof/aAAwDAQACEQMRAD8AvFCEIAEIQgAQhN2P4rT4JhNTiNU77KBhdYcXHk0eJOiBUm3hDdtdtRT7Pwxxta2evqNIKfNa/e53c0KFUTJseEuKY/VOOHxG1x2d6e5o5N5KFRYlW4/itXilXJ95qZGwRgE2jvyb3AC3+yrPkwqPEMSo9n4rtoKKIS1Ib+buHv8A3Vdycn9Dep0YWtNN+p7v2X0/A3RTY/jzNzs7Sx0WGs7LJHHdsPsI1d7tElrNhdp42ulbX09S/jkjGvm6ytOCKOGJscTGsjYLNY0WAHdZbp/LXko/yVSL/rSS+PyUPJjWKYXUPocSY45fTgqGfGx5eI81JtmtoTTASYXIX041loHvvbxjJ4ez5qW7dbLwbSYS9jWBtdCC+mnGha71b9xVDUdZPRVO87cckZIe3hYjQ+8KKWabNO2q07ym1JdfJ6Ww6tgr6RlTSuzxvHvB5g9xSm/gqz2Ox9sE8c2b7rUuDJ2jgx54P8O4qywrEJakYt3bO3qafHg2QhCcVQQhCABCEIAEIQgAQhCAMFVB04Y2XVFFgcTuywdZmA5k3awH/UfJW+V5s29rzim2WK1AOZgnMTPYwBvzBUdV4iXuHU9dbPsb7MPERoSQDapc8+NrK6tjHdZkxOue0CWWcNNuQDdPmqcjw92G0GEzm/3mNtTryDy4W8mDzVr9HNdDVQV0cMjXEPa42PeLfRQ0n3YZq8QSla6l8f6TNCAhWjnDC847a0zKPbLGIIx2RUlwH+ZodbzcvR684bczip20xmZgu3rJaLc8rQ3+VQV/Sa3B885/As2YlljL6WYOa2WLOwHm0nQ+YPkrp2SrziGCU8khvLH9lJ4lul/Kx96rLEsP/s/Ddkqu1jJRGNx7zcOF/wBTlMOjipDn4jTXu3M2VtvG4PyHmkp9ssFu/Ua9rzF4f7wTdCEKwc8CEIQAIQhAAhCEACFhzg1pc4gAaklIxiuHHhX0h/8Ac390Ab4lVsocPqauTRsETpD7hdeY+pzTYdNiksga1zyD2XHNISSRmAsDztfW4XonaSbD6/Z7EqZ9bDklppGkxyNJ9E8FT+ymyc7JqVuNzQMw/EmtMRjmBex9w8XHK4Dgb87KKotWEaNlUdKLkvcl+PYNHLHsxQOaAyShbTi5sAW5LfMpXsHRUmGYvJ1EvMUzHRPEjSx7XtsRdp7xcgpV0lthl2bbU0cwdV0s0fV2xPF+09reWosDe/8ACm/YjDavBsZ3GNTUkj52OmidDIDZzTZxOg4iQeXgjStQrrzdvpz069PvksgIXIVMH+NH+sI6xD/jR/qClM7DM1MzYIZJn6MjYXOPgBdeYpoaqtElbkH3qQubmkaHEvPJt8xFzxAsvRG1EsTtm8Vbv2tvSSi7TcjslVLshs3iba6moscY+CgM7ZqZ+ZpbvB2uR5szC/sUVSOppGlY1XRjKaRN+kbC2SYFgtKwEbqpZEy3HWNwt8AkOwmGOwTHzGJ98x5dBIQ1wDJAM1tQL+idRcFSXbyGGq2XrXmTt0rDUxhrtczATYe3Ue9RXZeixeixmlxPHDE6OseGh+9u8PLS5psNAPSHL00OPdkIXE1baPHXJaCFz3sfrt81kPBNgQfepTNwzdCEIEBCEIAEIQgBh28nNPsbjEjTY9Ve0EeIt9V5eZFHf8NvH1QvSPSrNudhsQHDeZGebh+y84t9JRzNCzXaO2DPFLPnijbfT8oUljq45XnPFEA6xIawDXVRegNnj2D5pwlzyOzMa4OA4AcVVk+p0VvFOBKtm8Gg2hxgwv8AsaWBm8nezRxBNg0d3PVJtmsPwTF62ihfNu7yywseyOxqSQ5w0NxZrQNTxuAuWyOL1WE4p1uKF0sbo93UR8Mw4ggnmD9VKKHEdncOc6pwPBXitkuY9+C1sZI7yTYeDbqWDWkzr6NbmtLOOmMfsj8ogocTqsNrKKlc+B5bvWRAZhxB94sjfUoeIzS04Y13aeIhqD/ymuqdVzV0z5g+Sqmkc6R2W13E3OnIeHcurRLHE6HJKWaE3abgqLPU16dPsWrcfX/2Y5nYpYh3WYAke8pS8sdTxHK70sg0H9E1PdUQO3e7ec3C4stvtYmGMRyHNYvdl5pMjo0kPMdLDiuM0WH0zWQCZxzyAahgBvp3pTVYTRsmhwioaKOsNc58dWX2LoA7sjU2uSco01sSoy+prKGZk9Pvo54e3G9rdfH4XUtqMSwOauqqp+BS1VVPFl37X3bLG4dlw10009G4y25KWnhoyeJQqRmlHbHj3G7EG/2TitRhs0UT9yRkmDMpc0i4OnNLNkK7LtVQNYbZpHMJBNiC0pixqSoFVHFM2R9YIIWTPJv2xG0O+N7+K22ekfS47hznscGtq47utzJA+qZq7y7GHMtMtdXH9F+BZWBxWVdOOBCEIAFhZQgCv+mmfd7Jxx3tvalo8gT9FQbOKunp1ny0GGU9/SfI8j2Bo/mKpaMaqKe5p2i7EO2HgbxlzbTj70/R08xla2GUXIFzZMFJYZL+r9Qnd9Q+kc18b3Fjm6kDgq0tzoLb0D7LRPpog+mqSSdXtA4+K0bI/ct3dScwcQGgcOKb4cSLW5y+6wczonTtcRNnuYxx48UhMk8dR5fQb6DeSVJFTbTT4cUgMWUSNmqHh4bwtxSWLEXPbdziCOKOsCqJdMcotZhPP2pB0YvyOUWHs3O9qaiTM7VgHLxSR0AYXb2aS+XTxSNuIvByzXBHC+q3jnFRLnmNo2iwPeUZQ6KYvkoxS0vWpJZHSSENY3S9joPMpW3CZ8NxGpwjBq6ofUxZnRBwynNlJc1n5XWuOYOjkjwSvoBjlCMaqhBTxStlGdpIkc30RccNbHXTRSvaOpo6THMN2gqK2KLDcPjdKcjw41LzmOVoGp1dclTUorGTC4pVbmqZH56ETtEr3AMqgTSTg+nIGkuj11BsL9rU666XTPTvbBURTPe/PFKx9ie5wP0T6Kh2HddiEHWY8HrH1scINm5Cx9zw17O88NR4JqxuGGHEK3dG8DwJKY3/ACOaHD529ySpHGJIs8Orylqoz8bF/gg8FlJ6CTfUUEoN88TXeYShW0cu1h4BCEIEBCEIApvp1mvX4fFf0IHHzd/RVRGrG6ap95tNu76RQRjzufqFXUfBQy3Ne1XYhyg0bGeWVO0ckDcud73MIs4aJoj/AA4/YfknOOpu1jZjYA2VeRt2/pOsdPBE4TWldTg8uKUOML3vkbvjwI/rou9NiDmRbi94jxaeaTzTuikc2neTG4WcDy8E0srqa9WjqXXp4J3Fvp6H9lvkjmLWtp5rDlqlNPiLY4g2IkEjtG/Fc6ipGZroD9rfVoPFAqycW0wqS2OOllMgF8yyYxpEaV926EFKKXEdzE5lgJSe0+/+7LlUVTXlu7/FzWGvFJ0HLORDX00s0bRTU0m9hJcC3U2CndR1fpD2O3NK+JmLwM7cDjlJdazreB4/AqK01duGPjdbeuPaN9fYm2sibLUtlge6OcnV0ZsT5KSM0ijdWkqzUo9Giw8FpDh2ITYvjMc1JTCkFPMKlrQah9mghrQTmvl59/O9xCsQqjWTy5KdsVOzM2CAHSGO+jQOVguEMzoz96mlmqG6Z5pC8t9l1ze7eSkMOp4onPKwgsrN0pOc99i/dlpd/s5hsnrUzPknVR3o+mE2yGHOBuGscz9LiPopErkdkcpXjpqyX1YIQhKRAhCwgDz10sTb3a7EDyD2tHuY0fuoZGFI9v5t/tDXyetUP+BKjsaglubVusRQ4R/hRW4pS0mWNjHNOnBwCTN/CiPiErhDjTgsmOh4KCRr2+xhm+icI3B1zw04pW0T0/ZZGS57e1fgVvSxMlY7rM5D/wAvZ4LDojG9ommdaxs4dyYWo7CZ0MjLSxtcGHiO5do45WtbJYZnHS5Gi600Mbnh0j3mPuBWKiCJrt4wvdHfUF2oQ0OTOUsEspdJ2Q+/a7XFYijc1m8zMvyudV1hihke5wzZGnW5WamOEkyRtAFtW3Rgcjk+IvDnOezODxvqVqxtm5t4wO7l1p2wyS3LQGNF7d/gtqsxSOzRsa23IJPAvk5ljHMcXStzA9nT0lo1oaBeSzzxBHBKKYxPlMj2tAbqBbiVznla6feZRpy5FALcuPoqeHbIxMB9CeUf6r/VTBQLogn3mCVkenYqSbDxaCp6r9P0o4q+WLmfyCEITyoC1dpqtkjxefq2FVk44xU73+TSUAeZNopus1Tpx/1HF/mb/VN0aVYsA2RrB+VoHwSaNV5G7RQvbbcR34Zh813ZE4Q7yN2o4tScf3Zvg4JTDJljOpv3KGRqUDaOqceS6mTfZWyuAaEnkyOfnYPagnQJhZi8LqdDM9t2B2l9FneOcCC468Vy4i6zxHAIFUkjd78rzuicpHBYzeNlgEXJ0WAdOSQNZu940LNPBAdf+i04G500Q0owGtHV7s/CwPcFhpvqdAFz7TbX00Rn0vdGBda3LV6Gp8wxaEntAxSEe3MP5VZaqToYlti2Is9ena79Lj/9K21epehHJ8UWLqX2/AIQhSGeCbtoaeWswPEKaD8WWne1g7yQbBOK1f6JtxQC6M8q4zDK2bO+NzWngbaJLHwCvjGtg8Lqp5J6eOSkkkcXPNM/IHE8SW8D5KKYh0bzt/utRDLrf7eENJ97MvyKilBmnSuor1Ff3tS+8LdnoHhxTvi2yOO0bRagL42m945M9/gEnp8Gx54blwyVtu6LUn3lQuDZpU7ymuqYmjjc70Q51uQCw4ZXZXAjnqNU5jZPaacj7vMPB0oYPhddItgdpJM12wR5tCXTl2nkjlMHxCHuNFmgAyua2+tnOAstTLHmAa9rj/A4KQwdF+Ln8aqpR/4uP1CXxdFlSXZpMQbrybCNE7lMjfEYkP3sTRmdK0X1ABzGy5uq4SQA4G/NwsFYEPRRT3vLXzk/wsaPol0XRbhocHPnrHEc94B8gl5RE+JLwVgayEF1rueXGwa3gtTWi+RzSL838lb0HRngcZzGnkee90hKWxdH+Bs/7bAf8zbpeUMfEmUk6tijbmcbknTSyz10utaF8l/VFz8FfcGyGFQi0dBTNtyEYThS4JSQOBZTxNt3MARyUNfEp+ERboi2dr6FtRi2JQOpzURiOCJ+j8l7lxHK+lhx08VZK409wMp1sOK7KaKSWEZtarKrNyluCEISkQLB4FCEAcHtF+C5ljTe7QsISAjmYI3A3YFqKeL1R5IQgcb9XiFrNW25jH5VlCQcG7Zf0QshjfVCEJRTYMb3BAA7ghCBmTYNB5IyjuQhAZZkNCyGhCECm7At0ISjWCEIQIf/2Q==" alt="" />
                    <div>
                        <h6 className=''>Bags On Timpu</h6>
                        <h6 className='text-slate-400'>1023 Products </h6>
                    </div>
                </div>
                <p className='text-sm'>
                    Or Set filter and help us choose the best bag for you
                </p>
            </div>
            <div className='ml-3'>
            <span className="text-xs text-gray-500  mt-1 ml-auto">4:48 PM</span>
            </div>
            <div>
                <div className='flex  text-slate-400 ml-2'>
                    <h6>Select Filters</h6>
                    <div className='flex ml-auto mr-2'>
                        <img className='w-5 h-6' src=" data:image/png;base64,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" />
                        <h6>Filter</h6>
                    </div>
                </div>
                <div className='ml-2 flex flex-wrap mt-1'>
                    <span className="text-sm border-1 bg-slate-200 rounded-md p-1 mt-1 text-gray-500 mr-2">Stap-Long 🗙</span>
                    <span className="text-sm border-1 bg-slate-200 rounded-md p-1 mt-1 text-gray-500 mr-2">Colour 🗙</span>
                    <span className="text-sm border-1 bg-slate-200 rounded-md p-1 mt-1 text-gray-500 mr-2">Size 🗙</span>
                    <span className="text-sm border-1 bg-slate-200 rounded-md p-1 mt-1 text-gray-500 mr-2">Brand 🗙</span>
                    <span className="text-sm border-1 bg-slate-200 rounded-md p-1 mt-1 text-gray-500 mr-2">Material 🗙</span>
                </div>
            </div>
            <div className="p-4 mt-2 border-t border-gray-300 flex">
                <input
                    type="text"
                    placeholder="Type your message"
                    className="flex-grow border border-gray-300 rounded-lg py-2 px-4"
                />
                <button className="bg-blue-500 ml-1 text-white py-2 px-4 rounded-md">Send</button>
            </div>
            <div className="bg-gray-200 p-4 text-center text-sm text-gray-500">
                Powered by Krunk.ai
            </div>
        </div>
    );
};

export default Home;
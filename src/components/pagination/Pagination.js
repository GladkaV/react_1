import {useEffect, useState} from "react";
import './Pagination.css';

export default function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage, data]);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        let arr = new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
        let result = arr;

        if (arr.indexOf(pages) >= 0) {
            result = arr.slice(0, arr.indexOf(pages) + 1);
        }

        return result;
    };

    return (
        <div>
            <div className="dataContainer">
                {getPaginatedData().map((d, idx) => <RenderComponent key={idx} movie={d} />)}
            </div>

            <div className="pagination">
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    &lt;&lt;
                </button>

                {getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}

                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    &gt;&gt;
                </button>
            </div>
        </div>
    );
}
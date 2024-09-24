
import FilteredList from "./filteredList";
import SearchBox from "./filteredList/searchBox";
import { useState } from "react";
import "./style.css";

const Main = () => {
    const [search, setSearch] = useState("");

    return (
        <>
            <main>
                <section className="main-container">
                    <h2 className="main-title">Productos</h2>
                    <SearchBox search={search} setSearch={setSearch} />
                </section>

                <article className="product-container">
                    <FilteredList search={search} />
                </article>
            </main>
        </>
    );
};

export default Main;


import "./style.css";

const SearchBox = ({ search, setSearch }) => {
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <>
            <form>
                <input
                    value={search}
                    onChange={handleSearch}
                    type="text"
                    name="text"
                    className="input"
                    placeholder="Search...."
                />
            </form>
        </>
    );
};

export default SearchBox;

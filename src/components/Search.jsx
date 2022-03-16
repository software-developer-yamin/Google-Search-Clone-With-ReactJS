import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";
import Links from "./Links";

function Search() {
  const [text, setText] = useState("Elon Musk");
  const { setSearchTerm } = useResultContext();
  const [debounceValue] = useDebounce(text, 3000);

  useEffect(() => {
    if (debounceValue) {
      setSearchTerm(debounceValue);
    }
  }, [debounceValue, setSearchTerm]);

  return (
    <section className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        onChange={(e) => setText(e.target.value)}
        type="search"
        value={text}
        placeholder="Search Google or type URL"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm p-6 outline-none text-black hover:shadow-lg"
      />
      {!text && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500"
          onClick={() => setText("")}
        >
          X
        </button>
      )}
      <Links />
    </section>
  );
}

export default Search;

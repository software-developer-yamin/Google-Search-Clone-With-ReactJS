import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../contexts/ResultContextProvider";
import Loading from "./Loading";

function Results() {
  const { getResults, results, searchTerm, setSearchTerm, isLoading } =
    useResultContext();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = getResults("/search/q=JavaScript Mastery&num=40");
    return unsubscribe;
  },[]);

  console.log(results);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <section className="flex flex-wrap justify-between sm:px-56 space-y-6">
          {results?.results?.map(({ title, link }) => (
            <div key={link} className="md:w-2/5 w-full">
              <a href={link} target="_blank">
                <p className="text-sm">
                  {link?.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg dark:text-blue-300 text-blue-700 hover:underline">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </section>
      );
    case "/images":
      return "SEARCH";
    case "/news":
      return "SEARCH";
    case "/videos":
      return "SEARCH";
    default:
      return "Error";
  }
}

export default Results;

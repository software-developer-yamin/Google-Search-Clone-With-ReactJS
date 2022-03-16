import { useLocation } from "react-router-dom";
import { useResultContext } from "../contexts/ResultContextProvider";

function Results() {
  const { getResults, results, searchTerm, setSearchTerm, isLoading } =
    useResultContext();
  const location = useLocation();

  return <div>Results</div>;
}

export default Results;

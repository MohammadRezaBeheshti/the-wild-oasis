import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParam, setSearchParam] = useSearchParams();
  const currentSortBy = searchParam.get("sortBy") || "";

  function handleSortByChange(e) {
    searchParam.set("sortBy", e.target.value);
    setSearchParam(searchParam);
  }

  return (
    <Select
      options={options}
      value={currentSortBy}
      onChange={handleSortByChange}
      type="white"
    />
  );
}

export default SortBy;

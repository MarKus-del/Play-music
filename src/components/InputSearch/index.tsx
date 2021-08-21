import { AxiosResponse } from "axios";
import { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { apiFront } from "../../services/api";
import { Track } from "../../services/types";
import { searchRequest, update } from "../../store/module/music/actions";
import { RootState } from "../../store/module/rootReducer";
import { convertAxiosResponseToStoreState } from "../../utils/converts";
import { Search } from "./styles";

type RequestSearchDeezer = {
  data: Track[];
  next?: string | null;
  total: number;
  prev?: string | null;
};

export default function InputSearch() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { searchName } = useSelector((state: RootState) => state.music);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleRequest = async (): Promise<RequestSearchDeezer> => {
    const { data }: AxiosResponse<RequestSearchDeezer> = await apiFront.get(
      `/track/search?name="${search}"&index=0`
    );

    return convertAxiosResponseToStoreState(data);
  };

  const searchTrack = async () => {
    dispatch(searchRequest());
    const { data, total, next, prev } = await handleRequest();

    const totalPagesInSearch = Math.round(total / 10);

    dispatch(
      update({
        tracks: data,
        currentPage: 1,
        totalPageList: totalPagesInSearch,
        searchName: search,
      })
    );
  };

  return (
    <Search>
      <input
        type="text"
        placeholder="Pesquise sua música aqui"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={searchTrack}>
        <FaSearch />
      </button>
    </Search>
  );
}

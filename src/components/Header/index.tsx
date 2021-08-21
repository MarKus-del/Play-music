import { AxiosResponse } from "axios";
import { ReactNode } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { apiFront } from "../../services/api";
import { Track } from "../../services/types";
import { searchRequest, update } from "../../store/module/music/actions";
import { RootState } from "../../store/module/rootReducer";
import { convertAxiosResponseToStoreState } from "../../utils/converts";
import { HeaderContainer, Pagination, PaginationButton } from "./styles";

type RequestSearchDeezer = {
  data: Track[];
  next?: string | null;
  total: number;
  prev?: string | null;
};

export default function Header() {
  const dispatch = useDispatch();
  const { currentPage, totalPageList, searchName } = useSelector(
    (state: RootState) => state.music
  );

  const nextPage = async () => {
    dispatch(searchRequest());

    const nextPage = currentPage + 1;
    const index = (nextPage - 1) * 10;

    const { data }: AxiosResponse<RequestSearchDeezer> = await apiFront.get(
      `/track/search?name="${searchName}"&index=${index}`
    );

    const { data: tracks } = convertAxiosResponseToStoreState(data);

    dispatch(
      update({
        currentPage: nextPage,
        totalPageList,
        searchName,
        tracks,
      })
    );
  };

  const prevPage = async () => {
    dispatch(searchRequest());

    const prevPage = currentPage - 1;
    const index = (prevPage - 1) * 10;

    const { data }: AxiosResponse<RequestSearchDeezer> = await apiFront.get(
      `/track/search?name="${searchName}"&index=${index}`
    );

    const { data: tracks } = convertAxiosResponseToStoreState(data);

    dispatch(
      update({
        currentPage: prevPage,
        totalPageList,
        searchName,
        tracks,
      })
    );
  };

  return (
    <HeaderContainer>
      <h1>{searchName}</h1>
      <Pagination>
        <PaginationButton>
          <button disabled={currentPage === 1} onClick={prevPage}>
            <FaAngleLeft />
          </button>
          <span className="page-index">{currentPage}</span>
          <button onClick={nextPage} disabled={currentPage >= totalPageList}>
            <FaAngleRight />
          </button>
        </PaginationButton>
        <span>Paginas: {totalPageList}</span>
      </Pagination>
    </HeaderContainer>
  );
}

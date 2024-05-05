import { useParams } from "react-router-dom";
import { regions } from "../../helpers/consts/regions";

export const RegionPage = () => {
  const { id } = useParams();

  const region = regions.find((elem) => elem.name === id);

  return <div>{region?.map}</div>;
};

import { useEffect, useState } from "react";
import { getApiResource } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import { PeopleList } from "../../components/PeoplePage/PeopleList/PeopleList";

export const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      const img = getPeopleImage(id);
      console.log(img);
      console.log(id);

      return {
        name,
        url,
        img
      };
    });

    setPeople(peopleList);
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);
  return (
    <>
      {people && <PeopleList people={people} />
      }
    </>
  );
};

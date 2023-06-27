import { useEffect, useState } from "react";
import { getApiResource } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImage } from "../../services/getPeopleData";
import { PeopleList } from "../../components/PeoplePage/PeopleList/PeopleList";

export const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  const [errorApi, setErrorApi] = useState(false);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          name,
          url,
          img,
        };
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);
  return (
    <>
    {errorApi ? (
      <h2>Error</h2>
    ) : (
      <>
        <h1>Navigation</h1>
        {people && <PeopleList people={people} />}
      </>
    )}
  </>
  )

};


export const getApiResource = async (url) => {
  try {
    const res = await fetch(url);

    if(!res.ok) {
        console.error('could not fetch.', res.status);
        return false;
    }

    return await res.json();
  } catch (error) {
    console.error('could not fetch.', error.message);
    return false;
  }
}


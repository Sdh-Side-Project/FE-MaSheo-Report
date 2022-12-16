const swrAuthFetcher = async (url: string, token: string) => {
  let response;

  if (url === 'compliment') {
    response = await fetch(`http://api-side.sooldamhwa.com/${url}`, {
      headers: { authorization: `Bearer ${token}` },
    });
  } else {
    response = await fetch(`http://api-side.sooldamhwa.com/masheo/${url}`, {
      headers: { authorization: `Bearer ${token}` },
    });
  }

  const { data } = await response.json();
  return data;
};

export default swrAuthFetcher;

const swrAuthFetcher = async (url: string, token: string) => {
  const response = await fetch(`http://api-side.sooldamhwa.com/masheo/${url}`, {
    headers: { authorization: `Bearer ${token}` },
  });
  const { data } = await response.json();
  return data;
};

export default swrAuthFetcher;

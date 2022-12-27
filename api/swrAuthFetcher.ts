const swrAuthFetcher = async (url: string, token: string) => {
  let response;

  if (url === 'compliment') {
    response = await fetch(`${process.env.NEXT_PUBLIC_API}/${url}`, {
      headers: { authorization: `Bearer ${token}` },
    });
  } else {
    response = await fetch(`${process.env.NEXT_PUBLIC_API}/masheo/${url}`, {
      headers: { authorization: `Bearer ${token}` },
    });
  }

  const { data } = await response.json();
  return data;
};

export default swrAuthFetcher;

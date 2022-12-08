import { useRecoilValue } from 'recoil';
import useSWR from 'swr';

import swrAuthFetcher from '../api/swrAuthFetcher';
import { accessTokenState } from '../states';

function getSwrAuthResult(url: string) {
  const accessToken = useRecoilValue(accessTokenState);

  const { data, error } = useSWR(accessToken ? [url, accessToken] : null, swrAuthFetcher, {
    suspense: true,
  });

  return { data, error };
}

export default getSwrAuthResult;

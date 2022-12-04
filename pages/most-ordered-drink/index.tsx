import React from 'react';
import AutoOpenImage from '../../components/AutoOpenImage';
import Layout from '../../components/layout';

function index({ imgUrl }: { imgUrl: string }) {
  return (
    <Layout>
      <AutoOpenImage imgUrl={imgUrl} />
    </Layout>
  );
}

export default index;

export const getServerSideProps = async () => {
  const response = await fetch(
    'http://api-side.sooldamhwa.com/masheo/most-ordered-sool?userId=120'
  );
  const {
    data: {
      MostOrderedSool: { thumbnail },
    },
  } = await response.json();

  return {
    props: {
      imgUrl: thumbnail?.replace(
        'https://sooldamhwa-static-files.s3.ap-northeast-2.amazonaws.com/admin_contents/origin/',
        'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/'
      ),
    },
  };
};

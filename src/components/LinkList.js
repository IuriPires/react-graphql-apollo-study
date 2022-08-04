import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;


const LinkList = () => {
    const { data } = useQuery(FEED_QUERY);

    return (
        <div>
        {data && (
          <>
            {data.feed.links.map((link) => (
                <div key={link.id}>
                    <Link link={link} />
                    <br />
                </div>
            ))}
          </>
        )}
      </div>
    );
};

export default LinkList;
import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

export const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
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
            {data.feed.links.map((link, index) => (
                <div key={link.id}>
                    <Link link={link} index={index} />
                    <br />
                </div>
            ))}
          </>
        )}
      </div>
    );
};

export default LinkList;
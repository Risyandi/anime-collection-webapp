/**
 * list of query of graphql
 */

import { gql } from "@apollo/client";

const GET_ANIME_LIST = gql`
  query Data($id: Int, $page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id, search: $search) {
        id
        title {
          english
          romaji
        }
        description
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        coverImage {
          large
        }
        bannerImage
      }
    }
  }
`;

export { GET_ANIME_LIST };

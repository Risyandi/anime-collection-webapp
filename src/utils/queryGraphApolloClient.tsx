/**
 * list of query of graphql using apollo client
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

const GET_ANIME_LIST_BY_ID = gql`
  query ($id: Int) {
    Media(id: $id) {
      id
      type
      hashtag
      averageScore
      popularity
      meanScore
      duration
      genres
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
`;

export { GET_ANIME_LIST, GET_ANIME_LIST_BY_ID };

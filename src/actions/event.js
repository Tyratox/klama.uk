import {
  createFetchSingleItemAction,
  createFetchSingleItemThunk,
  createFetchAllItemsAction,
  createFetchAllItemsThunk
} from "utilities/action";

import { fetchApi } from "utilities/api";
import { isoToDate } from "../utilities/format";

export const itemName = "event";

/**
 * Maps an item so we can store it in the state
 * @param {object} item The item to map
 * @return {object} The mapped item
 */
export const mapItem = ({
  id,
  slug,
  date,
  title: { rendered: title },
  content: { rendered: content },
  excerpt: { rendered: excerpt },
  acf: {
    short_description: description,
    artists,
    location,
    date_from: dateFrom,
    date_to: dateTo
  },
  event_type: eventTypeIds,
  featured_media: thumbnailId
}) => ({
  id,
  slug,
  date,
  title,
  content,
  excerpt,
  artists: artists
    ? artists.map(
        ({
          date_from: dateFrom_,
          date_to: dateTo_,
          artist: { id, post_title: name }
        }) => ({ id, name, dateFrom: isoToDate(dateFrom_), dateTo: isoToDate(dateTo_) })
      )
    : [],
  description,
  location,
  dateFrom: isoToDate(dateFrom),
  dateTo: isoToDate(dateTo),
  eventTypeIds,
  thumbnailId
});

/**
 * Action called before and after fetching an item
 * @param {boolean} isFetching Whether it is currently being fetched
 * @param {string} status If there was an error during the request, this field should contain it
 * @param {object} item The received item
 * @returns {object} The redux action
 */
export const fetchItem = createFetchSingleItemAction(itemName);

/**
 * Fetches a event by it's slug
 * @param {number} eventSlug The slug of the event
 * @return {function} The redux thunk
 */
export const fetch = eventSlug => dispatch => {
  dispatch(fetchItem(true, null, eventSlug));

  return fetchApi(`/wp-json/wp/v2/event?slug=${eventSlug}`, {
    method: "GET"
  })
    .then(({ json: items }) => {
      if (items.length > 0) {
        dispatch(fetchItem(false, null, eventSlug, mapItem(items[0])));
      } else {
        dispatch(fetchItem(false, new Error("No event was found"), eventSlug));
      }
    })
    .catch(err => {
      dispatch(fetchItem(true, err, eventSlug));
    });
};

/**
 * Action called before and after fetching multiple items
 * @param {boolean} isFetching Whether it is currently being fetched
 * @param {string} status If there was an error during the request, this field should contain it
 * @param {object} items The received items
 * @returns {object} The redux action
 */
export const fetchItems = createFetchAllItemsAction(itemName);

export const fetchLatest = () => dispatch => {
  dispatch(fetchItems(true, null));

  return fetchApi(
    `/wp-json/wp/v2/event?per_page=100`,
    {
      method: "GET"
    }
  )
    .then(({ json: items }) => {
      dispatch(fetchItems(false, null, items.map(mapItem)));
    })
    .catch(err => {
      dispatch(fetchItems(true, err));
    });
};

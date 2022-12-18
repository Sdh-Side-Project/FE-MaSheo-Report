export const PAGE_URL = {
  MOST_ORDERED_DAY: '/most-ordered-day',
  TASTE: '/taste',
  MOST_ORDERED_DRINK: '/most-ordered-drink',
  DAMHWA_DELIVERY: '/damhwa-delivery',
  GIFT: '/gift',
  MOST_ORDERED_BEVERAGE: '/most-ordered-beverage',
  REVIEW: '/review',
  COMPLIMENT: '/compliment',
  HAPPY_NEW_YEAR: '/happy-new-year',
  ENDING_CREDIT: '/ending-credit',
};

const PAGE_NAVIGATION = {
  MOST_ORDERED_DAY: {
    URL: PAGE_URL.MOST_ORDERED_DAY,
    PREV_URL: '',
    NEXT_URL: PAGE_URL.TASTE,
  },
  TASTE: {
    URL: PAGE_URL.TASTE,
    PREV_URL: PAGE_URL.MOST_ORDERED_DAY,
    NEXT_URL: PAGE_URL.MOST_ORDERED_DRINK,
  },
  MOST_ORDERED_DRINK: {
    URL: PAGE_URL.MOST_ORDERED_DRINK,
    PREV_URL: PAGE_URL.TASTE,
    NEXT_URL: PAGE_URL.DAMHWA_DELIVERY,
  },
  DAMHWA_DELIVERY: {
    URL: PAGE_URL.DAMHWA_DELIVERY,
    PREV_URL: PAGE_URL.MOST_ORDERED_DRINK,
    NEXT_URL: PAGE_URL.GIFT,
  },
  GIFT: {
    URL: PAGE_URL.GIFT,
    PREV_URL: PAGE_URL.DAMHWA_DELIVERY,
    NEXT_URL: PAGE_URL.MOST_ORDERED_BEVERAGE,
  },
  MOST_ORDERED_BEVERAGE: {
    URL: PAGE_URL.MOST_ORDERED_BEVERAGE,
    PREV_URL: PAGE_URL.GIFT,
    NEXT_URL: PAGE_URL.REVIEW,
  },
  REVIEW: {
    URL: PAGE_URL.REVIEW,
    PREV_URL: PAGE_URL.MOST_ORDERED_BEVERAGE,
    NEXT_URL: PAGE_URL.COMPLIMENT,
  },
  COMPLIMENT: {
    URL: PAGE_URL.COMPLIMENT,
    PREV_URL: PAGE_URL.REVIEW,
    NEXT_URL: PAGE_URL.HAPPY_NEW_YEAR,
  },
  HAPPY_NEW_YEAR: {
    URL: PAGE_URL.HAPPY_NEW_YEAR,
    PREV_URL: PAGE_URL.COMPLIMENT,
    NEXT_URL: PAGE_URL.ENDING_CREDIT,
  },
  ENDING_CREDIT: {
    URL: PAGE_URL.ENDING_CREDIT,
    PREV_URL: PAGE_URL.HAPPY_NEW_YEAR,
    NEXT_URL: '',
  },
};

export const getPrevAndNextUrl = (pathname: string): { prevUrl: string; nextUrl: string } => {
  for (const { NEXT_URL: nextUrl, PREV_URL: prevUrl, URL } of Object.values(PAGE_NAVIGATION)) {
    if (pathname.endsWith(URL)) {
      return { prevUrl, nextUrl };
    }
  }

  return { prevUrl: '', nextUrl: '' };
};

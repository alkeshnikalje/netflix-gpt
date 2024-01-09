export const DEFAULT_IMG_URL =
  "https://occ-0-2366-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWM3NGJiODU2ZWU1MThlZjU2MzUzMmFmNjkyYjZhMyIsInN1YiI6IjY1OWNlMmUzNTVjMWY0MDBlZTRmNjk5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fmYLxiL49VnTaiBrwSsIIAkWK326todeNF7lUo1mnoY",
  },
};

export const getRandomIndex = (array) => {
  if (array.length === 0) {
    // Return null or handle the case where the array is empty
    return null;
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
};

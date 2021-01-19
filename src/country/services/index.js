import { fetchGraphQl } from '../../commons/http';

const BASE_URL = 'https://countries-274616.ew.r.appspot.com';

export const fetchCountries = () => fetchGraphQl(`${BASE_URL}`,
  {
    operationName: null,
    variables: {},
    query: `
    {
        Country {
            name
            nativeName
            alpha2Code
            alpha3Code
            area
            population
            populationDensity
            capital
            demonym
            gini
            location {
              latitude
              longitude
            }
            alpha2Code
            subregion {
              name
              region {
                name
              }
            }
            officialLanguages {
              iso639_1
              iso639_2
              name
              nativeName
            }
            currencies {
              name
              symbol
            }
            regionalBlocs {
              name
              acronym
              otherAcronyms {
                name
              }
              otherNames {
                name
              }
            }
            flag {
              emoji
              emojiUnicode
              svgFile
            }
            topLevelDomains {
              name
            }
            callingCodes {
              name
            }
            alternativeSpellings {
              name
            }
          }
        }
    `,
  });

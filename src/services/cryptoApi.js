import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders  = {
    'X-RapidAPI-Key': 'a09f5789b7mshce4ad6d6027df93p1557c6jsn56a58c3507e1',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseurl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({ url, Headers : cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath  : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseurl}),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : () => createRequest('/exchanges')
        })
    })
});

export const {
    useGetCryptosQeury,
} = cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'a09f5789b7mshce4ad6d6027df93p1557c6jsn56a58c3507e1',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };

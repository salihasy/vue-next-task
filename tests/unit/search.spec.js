import Search from "@/components/Search.vue"
import { shallowMount } from '@vue/test-utils'

describe("Search.vue", () => {
    // function for mount
    function mountComponent() {
        return shallowMount(Search)
    }

    it('component exists check', () => { 
        const wrapper=mountComponent()
        expect(wrapper.exists()).toBeTruthy();
    })

    it('search button exists check', () => {
        const wrapper = mountComponent()
        let a = wrapper.find('button')
        expect(a.text()).toStrictEqual("Search")
        expect(a.exists()).toBeTruthy()
    })

    // if the input element is not found this will return false, and test will fail
    it('input element exists check', () => {
        const wrapper = mountComponent()
        let a = wrapper.find('#search-input')
        expect(a.exists()).toBeTruthy()
    })

    it('input text with v-model change check', () => {
        const wrapper = mountComponent();
        let inputText = wrapper.find('#search-input');
        inputText.element.value = "say"
        inputText.trigger("input")
        expect(wrapper.vm.$data.key).toBe("say")
    })

    it('search button click functionality check', async () => {
        const dispatchMock = jest.fn()
        const wrapper = shallowMount(Search, {
            data() {
                return {
                    key : "saliha"
                }
            },
            global : {
                mocks : {
                    $store : {
                        dispatch : dispatchMock
                    }
                }}
        })

        let button = wrapper.find('#search-button')
        button.trigger("click")
        await wrapper.vm.$nextTick()
        expect(dispatchMock).toHaveBeenCalledWith('getEvents', {
            key: "saliha",
            page: 1
        })
    })

    it('search button click functionality check when input key null or undefined', async () => {
        const dispatchMock = jest.fn()
        const wrapper = shallowMount(Search, {
            data() {
                return {
                    key : ""
                }
            },
            global : {
                mocks : {
                    $store : {
                        dispatch : dispatchMock
                    }
                }}
        })

        let button = wrapper.find('#search-button')
        button.trigger("click")
        await wrapper.vm.$nextTick()
        expect(dispatchMock).not.toHaveBeenCalledWith('getEvents', {
            key: "",
            page: 1
        })
    })

    it('search button functionality test for store with mock',async () => {
        const mockResponse = 
        {
            "data":   {
               "_embedded": {
               "events": [
               {
               "name": "Paul McCartney",
               "type": "event",
               "id": "Z7r9jZ1Ad8ekd",
               "test": false,
               "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad8ekd",
               "locale": "en-us",
               "images": [
               {
               "ratio": "3_2",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
               "width": 640,
               "height": 427,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
               "width": 205,
               "height": 115,
               "fallback": false
               },
               {
               "ratio": "4_3",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
               "width": 305,
               "height": 225,
               "fallback": false
               },
               {
               "ratio": "3_2",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
               "width": 1024,
               "height": 683,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
               "width": 2048,
               "height": 1152,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
               "width": 640,
               "height": 360,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
               "width": 1024,
               "height": 576,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
               "width": 100,
               "height": 56,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
               "width": 1136,
               "height": 639,
               "fallback": false
               },
               {
               "ratio": "3_2",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
               "width": 305,
               "height": 203,
               "fallback": false
               }
               ],
               "sales": {
               "public": {
               "startDateTime": "2022-02-22T14:05:00Z",
               "startTBD": false,
               "startTBA": false,
               "endDateTime": "2022-06-13T00:00:00Z"
               }
               },
               "dates": {
               "start": {
               "localDate": "2022-06-12",
               "localTime": "20:00:00",
               "dateTime": "2022-06-13T00:00:00Z",
               "dateTBD": false,
               "dateTBA": false,
               "timeTBA": false,
               "noSpecificTime": false
               },
               "status": {
               "code": "onsale"
               },
               "spanMultipleDays": false
               },
               "classifications": [
               {
               "primary": true,
               "segment": {
               "id": "KZFzniwnSyZfZ7v7nJ",
               "name": "Music"
               },
               "genre": {
               "id": "KnvZfZ7vAeA",
               "name": "Rock"
               },
               "subGenre": {
               "id": "KZazBEonSMnZfZ7v6A7",
               "name": "Classic Rock"
               },
               "family": false
               }
               ],
               "outlets": [
               {
               "url": "https://www.mlb.com/orioles",
               "type": "venueBoxOffice"
               },
               {
               "url": "https://www.ticketmaster.com/paul-mccartney-baltimore-maryland-06-12-2022/event/Zu0FM1R0e5tanYt",
               "type": "tmMarketPlace"
               }
               ],
               "_links": {
               "self": {
               "href": "/discovery/v2/events/Z7r9jZ1Ad8ekd?locale=en-us"
               },
               "attractions": [
               {
               "href": "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us"
               }
               ],
               "venues": [
               {
               "href": "/discovery/v2/venues/Z6r9jZd6ee?locale=en-us"
               }
               ]
               },
               "_embedded": {
               "venues": [
               {
               "name": "Camden Yards",
               "type": "venue",
               "id": "Z6r9jZd6ee",
               "test": false,
               "locale": "en-us",
               "postalCode": "21201",
               "timezone": "America/New_York",
               "city": {
               "name": "Baltimore"
               },
               "state": {
               "name": "Maryland",
               "stateCode": "MD"
               },
               "country": {
               "name": "United States Of America",
               "countryCode": "US"
               },
               "address": {
               "line1": "333 West Camden St."
               },
               "location": {
               "longitude": "-76.622597",
               "latitude": "39.293999"
               },
               "dmas": [
               {
               "id": 224
               }
               ],
               "upcomingEvents": {
               "_total": 56,
               "tmr": 55,
               "ticketmaster": 1,
               "_filtered": 0
               },
               "_links": {
               "self": {
               "href": "/discovery/v2/venues/Z6r9jZd6ee?locale=en-us"
               }
               }
               }
               ],
               "attractions": [
               {
               "name": "Paul McCartney",
               "type": "attraction",
               "id": "K8vZ9171uq0",
               "test": false,
               "url": "https://www.ticketmaster.com/paul-mccartney-tickets/artist/735610",
               "locale": "en-us",
               "externalLinks": {
               "youtube": [
               {
               "url": "https://www.youtube.com/user/PAULMCCARTNEY"
               }
               ],
               "twitter": [
               {
               "url": "https://twitter.com/PaulMcCartney"
               }
               ],
               "lastfm": [
               {
               "url": "http://www.last.fm/music/Paul+McCartney"
               }
               ],
               "facebook": [
               {
               "url": "https://www.facebook.com/PaulMcCartney"
               }
               ],
               "wiki": [
               {
               "url": "https://en.wikipedia.org/wiki/Paul_McCartney"
               }
               ],
               "musicbrainz": [
               {
               "id": "ba550d0e-adac-4864-b88b-407cab5e76af"
               }
               ],
               "homepage": [
               {
               "url": "http://www.paulmccartney.com/"
               }
               ]
               },
               "aliases": [
               "mcartney",
               "paul mccartney",
               "paul macartney",
               "paul mcartney",
               "paul mccarthy",
               "paul mccartny"
               ],
               "images": [
               {
               "ratio": "3_2",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
               "width": 640,
               "height": 427,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
               "width": 205,
               "height": 115,
               "fallback": false
               },
               {
               "ratio": "4_3",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
               "width": 305,
               "height": 225,
               "fallback": false
               },
               {
               "ratio": "3_2",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
               "width": 1024,
               "height": 683,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
               "width": 2048,
               "height": 1152,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
               "width": 640,
               "height": 360,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
               "width": 1024,
               "height": 576,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
               "width": 100,
               "height": 56,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
               "width": 1136,
               "height": 639,
               "fallback": false
               },
               {
               "ratio": "3_2",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
               "width": 305,
               "height": 203,
               "fallback": false
               }
               ],
               "classifications": [
               {
               "primary": true,
               "segment": {
               "id": "KZFzniwnSyZfZ7v7nJ",
               "name": "Music"
               },
               "genre": {
               "id": "KnvZfZ7vAeA",
               "name": "Rock"
               },
               "subGenre": {
               "id": "KZazBEonSMnZfZ7v6F1",
               "name": "Pop"
               },
               "type": {
               "id": "KZAyXgnZfZ7v7nI",
               "name": "Undefined"
               },
               "subType": {
               "id": "KZFzBErXgnZfZ7v7lJ",
               "name": "Undefined"
               },
               "family": false
               }
               ],
               "upcomingEvents": {
               "_total": 10,
               "tmr": 3,
               "ticketmaster": 7,
               "_filtered": 0
               },
               "_links": {
               "self": {
               "href": "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us"
               }
               }
               }
               ]
               }
               },
               {
               "name": "PAUL McCARTNEY GOT BACK",
               "type": "event",
               "id": "k7vGF97JMbABS",
               "test": false,
               "url": "https://www.ticketmaster.com/paul-mccartney-got-back-east-rutherford-new-jersey-06-16-2022/event/00005C49B7605EB3",
               "locale": "en-us",
               "images": [
               {
               "ratio": "3_2",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
               "width": 640,
               "height": 427,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
               "width": 205,
               "height": 115,
               "fallback": false
               },
               {
               "ratio": "4_3",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
               "width": 305,
               "height": 225,
               "fallback": false
               },
               {
               "ratio": "3_2",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
               "width": 1024,
               "height": 683,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
               "width": 2048,
               "height": 1152,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
               "width": 640,
               "height": 360,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
               "width": 1024,
               "height": 576,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
               "width": 100,
               "height": 56,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
               "width": 1136,
               "height": 639,
               "fallback": false
               },
               {
               "ratio": "3_2",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
               "width": 305,
               "height": 203,
               "fallback": false
               }
               ],
               "sales": {
               "public": {
               "startDateTime": "2022-02-25T15:00:00Z",
               "startTBD": false,
               "startTBA": false,
               "endDateTime": "2022-06-17T02:00:00Z"
               },
               "presales": [
               {
               "startDateTime": "2022-02-22T15:00:00Z",
               "endDateTime": "2022-02-25T03:00:00Z",
               "name": "American Express® Card Member Presale"
               },
               {
               "startDateTime": "2022-02-22T15:00:00Z",
               "endDateTime": "2022-02-22T17:00:00Z",
               "name": "American Express® VIP Package"
               },
               {
               "startDateTime": "2022-02-22T17:00:00Z",
               "endDateTime": "2022-02-25T13:00:00Z",
               "name": "VIP Package Presale"
               },
               {
               "startDateTime": "2022-02-22T17:00:00Z",
               "endDateTime": "2022-02-25T13:00:00Z",
               "name": "Paul McCartney Fan Presale"
               },
               {
               "startDateTime": "2022-02-24T15:00:00Z",
               "endDateTime": "2022-02-25T13:00:00Z",
               "name": "Ticketmaster Presale"
               },
               {
               "startDateTime": "2022-02-24T15:00:00Z",
               "endDateTime": "2022-02-25T13:00:00Z",
               "name": "Spotify Presale"
               },
               {
               "startDateTime": "2022-02-25T15:00:00Z",
               "endDateTime": "2022-06-17T00:00:00Z",
               "name": "American Express® Card Member Onsale"
               },
               {
               "startDateTime": "2022-02-25T15:00:00Z",
               "endDateTime": "2022-06-02T21:00:00Z",
               "name": "VIP Package Onsale"
               },
               {
               "startDateTime": "2022-02-22T15:00:00Z",
               "endDateTime": "2022-02-25T13:00:00Z",
               "name": "Official Platinum Presale"
               },
               {
               "startDateTime": "2022-02-25T15:00:00Z",
               "endDateTime": "2022-06-17T00:00:00Z",
               "name": "Official Platinum Onsale"
               }
               ]
               },
               "dates": {
               "start": {
               "localDate": "2022-06-16",
               "localTime": "20:00:00",
               "dateTime": "2022-06-17T00:00:00Z",
               "dateTBD": false,
               "dateTBA": false,
               "timeTBA": false,
               "noSpecificTime": false
               },
               "timezone": "America/New_York",
               "status": {
               "code": "onsale"
               },
               "spanMultipleDays": false
               },
               "classifications": [
               {
               "primary": true,
               "segment": {
               "id": "KZFzniwnSyZfZ7v7nJ",
               "name": "Music"
               },
               "genre": {
               "id": "KnvZfZ7vAeA",
               "name": "Rock"
               },
               "subGenre": {
               "id": "KZazBEonSMnZfZ7v6F1",
               "name": "Pop"
               },
               "type": {
               "id": "KZAyXgnZfZ7v7nI",
               "name": "Undefined"
               },
               "subType": {
               "id": "KZFzBErXgnZfZ7v7lJ",
               "name": "Undefined"
               },
               "family": false
               }
               ],
               "promoter": {
               "id": "494",
               "name": "PROMOTED BY VENUE",
               "description": "PROMOTED BY VENUE / NTL / USA"
               },
               "promoters": [
               {
               "id": "494",
               "name": "PROMOTED BY VENUE",
               "description": "PROMOTED BY VENUE / NTL / USA"
               }
               ],
               "pleaseNote": "To allow for more Card Members to enjoy the show, American Express has set a two-order limit for this offer. This limit applies across all Cards associated with all of your American Express accounts. Prepaid Cards are not eligible.",
               "priceRanges": [
               {
               "type": "standard",
               "currency": "USD",
               "min": 39.5,
               "max": 399.5
               }
               ],
               "seatmap": {
               "staticUrl": "https://maps.ticketmaster.com/maps/geometry/3/event/00005C49B7605EB3/staticImage?type=png&systemId=HOST"
               },
               "accessibility": {
               "ticketLimit": 4
               },
               "ticketLimit": {
               "info": "There is an overall (8) eight ticket limit for this event. There is a four ticket limit for VIP packages."
               },
               "ageRestrictions": {
               "legalAgeEnforced": false
               },
               "code": "NY1:ENM0616",
               "_links": {
               "self": {
               "href": "/discovery/v2/events/k7vGF97JMbABS?locale=en-us"
               },
               "attractions": [
               {
               "href": "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us"
               }
               ],
               "venues": [
               {
               "href": "/discovery/v2/venues/KovZpakS7e?locale=en-us"
               }
               ]
               },
               "_embedded": {
               "venues": [
               {
               "name": "MetLife Stadium",
               "type": "venue",
               "id": "KovZpakS7e",
               "test": false,
               "url": "https://www.ticketmaster.com/metlife-stadium-tickets-east-rutherford/venue/1233",
               "locale": "en-us",
               "images": [
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dbimages/12804v.",
               "width": 205,
               "height": 115,
               "fallback": false
               },
               {
               "url": "https://s1.ticketm.net/dam/v/793/22834897-5c42-42cd-ab62-f0addc54f793_417571_SOURCE.jpg",
               "width": 2955,
               "height": 1812,
               "fallback": false,
               "attribution": "CC BY 2.0 via Wikipedia"
               }
               ],
               "postalCode": "07073",
               "timezone": "America/New_York",
               "city": {
               "name": "East Rutherford"
               },
               "state": {
               "name": "New Jersey",
               "stateCode": "NJ"
               },
               "country": {
               "name": "United States Of America",
               "countryCode": "US"
               },
               "address": {
               "line1": "One MetLife Stadium Drive"
               },
               "location": {
               "longitude": "-74.074493",
               "latitude": "40.81359"
               },
               "markets": [
               {
               "name": "New York/Tri-State Area",
               "id": "35"
               },
               {
               "name": "Northern New Jersey",
               "id": "55"
               },
               {
               "name": "Connecticut",
               "id": "124"
               }
               ],
               "dmas": [
               {
               "id": 296
               },
               {
               "id": 345
               },
               {
               "id": 422
               }
               ],
               "social": {
               "twitter": {
               "handle": "@MLStadium"
               }
               },
               "boxOfficeInfo": {
               "phoneNumberDetail": "Box Office: 201.559.1300, tickets@metlifestadium.com - General Ticket Inquiries - ADA Ticket Inquiries Guest Services: 201.559.1515, info@metlifestadium.com",
               "openHoursDetail": "MetLife Stadium Box Office is open Monday – Friday 11am – 5pm. The Box Office is located in the West VIP lobby. Please park in Lot G, enter through MetLife Gate and into the large glass doors labeled “West VIP.”",
               "acceptedPaymentDetail": "The MetLife Stadium Box Office will accept cash, Visa, Mastercard, Discover, and American Express. Personal checks will not be accepted.",
               "willCallDetail": "Ticketmaster Will Call may be picked up at any open ticket window. For all events, non-Ticketmaster will call orders may be picked up at the designated will call window. Will call tickets will be available beginning at least 2 hours prior to the scheduled start time for the event."
               },
               "parkingDetail": "General Parking Information: * MetLife Stadium Parking Availability: There are approximately 23,000 parking spaces available that are distributed among 14 lots. * There is no street parking available near the stadium. * Parking fees will vary by event. * Accessible parking is available in Lots E, F, & G. Accessible parking is available on a first come / first serve basis. You must have parking pass and state- issued person with disabilities placard or license plate to park in an accessible parking space. Violators will be subject to citation and possible revocation of season or event parking privileges. *Taxi / Black Car, Limousine, and Guest drop offs will be permitted in Lot C. * Bus and R/V Parking is available in Lot L. * All vehicles parking within the stadiums secured parking perimeter are subject to security inspection before being permitted to park. * Hours of Operation will vary per event. For NFL games, parking lots will open 5 hours prior to kickoff. All other events are subject to vary. * Parking passes are valid only for the event or game noted on the pass and for the specific lot. *Please note, all parking information may be amended based on the nature of the event, please contact the stadium at 201-559-1515 or info@metlifestadium.com with any specific questions not addressed above.",
               "accessibleSeatingDetail": "MetLife Stadium is fully accessible including all concession stand locations, merchandise stands, ATM's and seating areas. Accessible seating for guests with special needs is available on all levels and in all price ranges. Elevators are located in the southeast (SAP), southwest (Verizon), and northwest (Pepsi) corners of the stadium. Ramps are located at the north and south entrances. Seats with removable armrests are located throughout the stadium. A limited number of wheelchairs are located at each of the entrance gates to transport guests with limited mobility to their seating area. Guests may contact the MetLife Stadium at 201-559-1515 or ADAinfo@metlifestadium.com for more information or any additional needs for non-NFL events. MetLife Stadium ADA Ticket Questions call 201-559-1300. New York Giants ADA Ticket Purchases call 201-935-8222. New York Jets ADA Ticket Purchases call 973-549-4585. For wheelchair accessible and limited mobility patrons for non-NFL events, please click on the \"Request Accessible Tickets\" icon on the right side of the page to be taken to a dedicated page for accessible seating purchases. Please request the total number of wheelchair plus companion seats or limited mobility plus companion seats within the same wheelchair dropdown box so you may sit together.",
               "generalInfo": {
               "generalRule": "MetLife Stadium is committed to promoting a memorable event day experience for all fans. With that goal in mind, we have developed our Guest Code of Conduct to which we strongly encourage all guests to adhere. Keeping MetLife Stadium and Plaza SMOKE-FREE",
               "childRule": "For non-NFL events, children under 34” in height do not require a ticket of their own but must share a seat with an accompanying adult. All children taller than 34” inches require a ticket of their own. For New York Jets games this 34\" rule applies For New York Giants games all guest need a ticket regardless of age. Please contact the stadium directly regarding the suitability of an event for children."
               },
               "upcomingEvents": {
               "_total": 38,
               "ticketmaster": 38,
               "_filtered": 0
               },
               "ada": {
               "adaPhones": "For NFL New York Giants: 201-935-8222\n             \nFor NFL New York Jets: 973-549-4585               \n            \nFor NON-NFL Events: 1-800-877-7575\n\n",
               "adaCustomCopy": "For NFL New York Giants: 201-935-8222\n             \nFor NFL New York Jets: 973-549-4585                \n\nFor NON-NFL Events: 1-800-877-7575",
               "adaHours": "See Above"
               },
               "_links": {
               "self": {
               "href": "/discovery/v2/venues/KovZpakS7e?locale=en-us"
               }
               }
               }
               ],
               "attractions": [
               {
               "name": "Paul McCartney",
               "type": "attraction",
               "id": "K8vZ9171uq0",
               "test": false,
               "url": "https://www.ticketmaster.com/paul-mccartney-tickets/artist/735610",
               "locale": "en-us",
               "externalLinks": {
               "youtube": [
               {
               "url": "https://www.youtube.com/user/PAULMCCARTNEY"
               }
               ],
               "twitter": [
               {
               "url": "https://twitter.com/PaulMcCartney"
               }
               ],
               "lastfm": [
               {
               "url": "http://www.last.fm/music/Paul+McCartney"
               }
               ],
               "facebook": [
               {
               "url": "https://www.facebook.com/PaulMcCartney"
               }
               ],
               "wiki": [
               {
               "url": "https://en.wikipedia.org/wiki/Paul_McCartney"
               }
               ],
               "musicbrainz": [
               {
               "id": "ba550d0e-adac-4864-b88b-407cab5e76af"
               }
               ],
               "homepage": [
               {
               "url": "http://www.paulmccartney.com/"
               }
               ]
               },
               "aliases": [
               "mcartney",
               "paul mccartney",
               "paul macartney",
               "paul mcartney",
               "paul mccarthy",
               "paul mccartny"
               ],
               "images": [
               {
               "ratio": "3_2",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_3_2.jpg",
               "width": 640,
               "height": 427,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_EVENT_DETAIL_PAGE_16_9.jpg",
               "width": 205,
               "height": 115,
               "fallback": false
               },
               {
               "ratio": "4_3",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_CUSTOM.jpg",
               "width": 305,
               "height": 225,
               "fallback": false
               },
               {
               "ratio": "3_2",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_3_2.jpg",
               "width": 1024,
               "height": 683,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_LARGE_16_9.jpg",
               "width": 2048,
               "height": 1152,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_PORTRAIT_16_9.jpg",
               "width": 640,
               "height": 360,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_TABLET_LANDSCAPE_16_9.jpg",
               "width": 1024,
               "height": 576,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RECOMENDATION_16_9.jpg",
               "width": 100,
               "height": 56,
               "fallback": false
               },
               {
               "ratio": "16_9",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_RETINA_LANDSCAPE_16_9.jpg",
               "width": 1136,
               "height": 639,
               "fallback": false
               },
               {
               "ratio": "3_2",
               "url": "https://s1.ticketm.net/dam/a/ac1/3bc6b045-e04f-4520-b1de-b552e2b1cac1_1645021_ARTIST_PAGE_3_2.jpg",
               "width": 305,
               "height": 203,
               "fallback": false
               }
               ],
               "classifications": [
               {
               "primary": true,
               "segment": {
               "id": "KZFzniwnSyZfZ7v7nJ",
               "name": "Music"
               },
               "genre": {
               "id": "KnvZfZ7vAeA",
               "name": "Rock"
               },
               "subGenre": {
               "id": "KZazBEonSMnZfZ7v6F1",
               "name": "Pop"
               },
               "type": {
               "id": "KZAyXgnZfZ7v7nI",
               "name": "Undefined"
               },
               "subType": {
               "id": "KZFzBErXgnZfZ7v7lJ",
               "name": "Undefined"
               },
               "family": false
               }
               ],
               "upcomingEvents": {
               "_total": 10,
               "tmr": 3,
               "ticketmaster": 7,
               "_filtered": 0
               },
               "_links": {
               "self": {
               "href": "/discovery/v2/attractions/K8vZ9171uq0?locale=en-us"
               }
               }
               }
               ]
               }
               }
               ]
               },
               "_links": {
               "first": {
               "href": "/discovery/v2/events.json?page=0&size=20"
               }
               },
               "page": {
               "size": 2,
               "totalElements": 80,
               "totalPages": 1,
               "number": 0
               }
               }
        }
        axios.get.mockResolvedValue(mockResponse)
        API.getEvents("saliha", 1)
        const wrapper = mountComponent()
        let button1 = wrapper.find('#search-button')
        button1.trigger('click')
        await wrapper.vm.$nextTick()
        await flushPromises()
       expect(wrapper.vm.$store.state.eventList.length).toEqual(2)
        // Since we are mocking it, wrapper.vm.$store.state.eventList.length value will be 2
    })
})
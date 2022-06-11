import Events from "@/components/Events.vue"
import { shallowMount } from '@vue/test-utils'

describe("Events.vue", () => {
    // function for mount
    const dispatchMock = jest.fn()
    const mockResponse = 
    {
        "_embedded": {
          "events": [
            {
              "name": "Secret Cinema Presents Dirty Dancing",
              "type": "event",
              "id": "G5vHZpsR_jab_",
              "test": false,
              "url": "https://www.universe.com/events/secret-cinema-presents-dirty-dancing-sun-01-aug-2021-tickets-london-GX10RS?ref=tm_marketing_shell_event",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/523/f2bada7e-b9e4-488b-b6dc-b188330dc523_105571_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/bcd/5374f453-174d-47f1-a94f-871e3174bbcd_1310651_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/bcd/5374f453-174d-47f1-a94f-871e3174bbcd_1310651_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/bcd/5374f453-174d-47f1-a94f-871e3174bbcd_1310651_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/bcd/5374f453-174d-47f1-a94f-871e3174bbcd_1310651_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/c/523/f2bada7e-b9e4-488b-b6dc-b188330dc523_105571_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/bcd/5374f453-174d-47f1-a94f-871e3174bbcd_1310651_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/523/f2bada7e-b9e4-488b-b6dc-b188330dc523_105571_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/523/f2bada7e-b9e4-488b-b6dc-b188330dc523_105571_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": true
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/c/523/f2bada7e-b9e4-488b-b6dc-b188330dc523_105571_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": true
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "2021-08-27T14:50:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-07-31T16:30:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-07-31",
                  "localTime": "17:30:00",
                  "dateTime": "2022-07-31T16:30:00Z",
                  "dateTBD": false,
                  "dateTBA": false,
                  "timeTBA": false,
                  "noSpecificTime": false
                },
                "timezone": "Europe/London",
                "status": {
                  "code": "onsale"
                },
                "spanMultipleDays": false
              },
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nn",
                    "name": "Film"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAka",
                    "name": "Miscellaneous"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vFln",
                    "name": "Miscellaneous"
                  },
                  "type": {
                    "id": "KZAyXgnZfZ7v7lt",
                    "name": "Event Style"
                  },
                  "subType": {
                    "id": "KZFzBErXgnZfZ7vA6E",
                    "name": "Festival"
                  },
                  "family": false
                }
              ],
              "accessibility": {},
              "ageRestrictions": {
                "legalAgeEnforced": false
              },
              "code": "UK5:E2SO3107",
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/G5vHZpsR_jab_?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ917pnN0?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/KovZ91776Nf?locale=en-de"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "name": "Secret London Venue",
                    "type": "venue",
                    "id": "KovZ91776Nf",
                    "test": false,
                    "url": "https://www.ticketmaster.co.uk/secret-london-venue-tickets-london/venue/254877",
                    "locale": "en-de",
                    "postalCode": "XX0 0XX",
                    "timezone": "Europe/London",
                    "city": {
                      "name": "London"
                    },
                    "country": {
                      "name": "Great Britain",
                      "countryCode": "GB"
                    },
                    "location": {
                      "longitude": "-0.13104",
                      "latitude": "51.510176"
                    },
                    "markets": [
                      {
                        "name": "All of United Kingdom",
                        "id": "201"
                      },
                      {
                        "name": "London",
                        "id": "202"
                      }
                    ],
                    "dmas": [
                      {
                        "id": 601
                      },
                      {
                        "id": 602
                      }
                    ],
                    "upcomingEvents": {
                      "_total": 15,
                      "ticketmaster": 15,
                      "_filtered": 0
                    },
                    "ada": {
                      "adaPhones": "www.ticketmaster.co.uk",
                      "adaCustomCopy": "Advance ticket purchase is required. Please use our website to buy your ticket. One carer goes free, no ticket required for carers.\n(Please note: Ticket holders and their accompanying parent/guardian/carer ONLY will have access to the venue.)\n\n",
                      "adaHours": "t.b.c"
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/KovZ91776Nf?locale=en-de"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Secret Cinema",
                    "type": "attraction",
                    "id": "K8vZ917pnN0",
                    "test": false,
                    "url": "https://www.ticketmaster.com/secret-cinema-tickets/artist/2461988",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/523/f2bada7e-b9e4-488b-b6dc-b188330dc523_105571_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/bcd/5374f453-174d-47f1-a94f-871e3174bbcd_1310651_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/bcd/5374f453-174d-47f1-a94f-871e3174bbcd_1310651_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/bcd/5374f453-174d-47f1-a94f-871e3174bbcd_1310651_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/bcd/5374f453-174d-47f1-a94f-871e3174bbcd_1310651_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/523/f2bada7e-b9e4-488b-b6dc-b188330dc523_105571_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/bcd/5374f453-174d-47f1-a94f-871e3174bbcd_1310651_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/523/f2bada7e-b9e4-488b-b6dc-b188330dc523_105571_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/523/f2bada7e-b9e4-488b-b6dc-b188330dc523_105571_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/523/f2bada7e-b9e4-488b-b6dc-b188330dc523_105571_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": true
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7nn",
                          "name": "Film"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAka",
                          "name": "Miscellaneous"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vFln",
                          "name": "Miscellaneous"
                        },
                        "type": {
                          "id": "KZAyXgnZfZ7v7lt",
                          "name": "Event Style"
                        },
                        "subType": {
                          "id": "KZFzBErXgnZfZ7vA6E",
                          "name": "Festival"
                        },
                        "family": false
                      }
                    ],
                    "upcomingEvents": {
                      "_total": 15,
                      "ticketmaster": 15,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ917pnN0?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Field Day / Skullcrack / Freewill / Drive By Cinema",
              "type": "event",
              "id": "rZ7HnEZ1A3e9Gg",
              "test": false,
              "url": "https://www.ticketweb.com/event/field-day-skullcrack-transplants-brewing-company-tickets/12097335",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/f50/96fa13be-e395-429b-8558-a51bb9054f50_105951_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": true
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": true
                },
                {
                  "ratio": "3_2",
                  "url": "https://i.ticketweb.com/i/00/11/04/36/39_Edp.jpg",
                  "width": 639,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": true
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": true
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/c/797/5e693c26-2881-4776-8f0c-3aa94bfa3797_106511_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": true
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "2022-05-07T07:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-07-16T06:55:00Z"
                }
              },
              "dates": {
                "access": {
                  "startDateTime": "2022-07-16T02:30:00Z",
                  "startApproximate": false,
                  "endApproximate": false
                },
                "start": {
                  "localDate": "2022-07-15",
                  "localTime": "20:00:00",
                  "dateTime": "2022-07-16T03:00:00Z",
                  "dateTBD": false,
                  "dateTBA": false,
                  "timeTBA": false,
                  "noSpecificTime": false
                },
                "end": {
                  "approximate": false,
                  "noSpecificTime": false
                },
                "timezone": "America/Los_Angeles",
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
                    "id": "KnvZfZ7vAvv",
                    "name": "Alternative"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7vAvn",
                    "name": "Alternative Rock"
                  },
                  "family": false
                },
                {
                  "primary": false,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAeA",
                    "name": "Rock"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7v6a6",
                    "name": "Punk"
                  },
                  "family": false
                },
                {
                  "primary": false,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAeA",
                    "name": "Rock"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7v6a6",
                    "name": "Punk"
                  },
                  "family": false
                },
                {
                  "primary": false,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7nJ",
                    "name": "Music"
                  },
                  "genre": {
                    "id": "KnvZfZ7vAeA",
                    "name": "Rock"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7v6FE",
                    "name": "Pop Punk"
                  },
                  "family": false
                }
              ],
              "pleaseNote": "You must possess a valid Ticket that permits access to the Event and check in at marked locations during specified time periods. ‍TICKET AND VALID ID REQUIRED YOUR TICKET Please be advised, the purchase and/or use of a Ticket to, and/or entry into, the Event shall constitute Your unconditional acceptance to be bound by any and all of the terms and conditions contained within this agreement (this “Agreement”) between You and Transplants Brewing LLC (the “Company”) to attend all or part of the Event and For safety reasons, Company reserves the right to, without any prior notice or compensation to You: postpone, cancel, interrupt or stop the Event; provisionally keep visitors on the Event site at the end of the Event; totally or partially vacate the Event site; and deny access to the Event site regardless of the possession of a valid Ticket. You understand that the artists and/or lineup for the Event may be changed and that such occurrence shall not, under any circumstances, entitle You to any claim whatsoever, including, but not limited to, a refund for Your Ticket. You understand, acknowledge, and agree that the names of any artist, act or performer contained in any Event promotional material is intended for informational purposes only, and does not, in any way, represent the importance or headline status of any single artist, act or performer, and is subject to change without prior notice. ‍‍By entering the Event, You assume any and all risk and/or danger, known and unknown, foreseeable and unforeseeable, resulting from, or incidental to, the Event, whether occurring prior to, during, or subsequent to, the Event, including, but not limited to, any death, personal injury or loss, damage or liability whatsoever. You understand that Your use of Your Ticket is contingent upon Your voluntary assumption of the risk and danger that may result from, or be incidental to, Your presence at the Event, whether occurring prior to, during or after the Event, including, but not limited to, any actions or omissions of the Company Parties (as defined herein). SECURITY CHECK Please note all ticket holders will be searched upon entering the Event site. Security guards will inspect all objects brought onto the Event site including, but not limited to, clothing, luggage and other personal items in order to detect objects that may disrupt the course of the Event, jeopardize the safety of other ticketholders, or disturb the peace. Security guards may search any persons and property on the Event site at any time, including, but not limited to, storage lockers, and confiscate any prohibited items, in their sole discretion. CONDUCT AT THE EVENT You must heed the directions of Event organizers and security personnel at all times whilst on the Event site. If You fail to comply with such directions, You will be removed from the Event site, and, if necessary, Event staff may call on the police for assistance. INDEMNIFICATION You hereby indemnify and hold harmless Transplants Brewing LLC, their related companies, and each of their respective representatives, officers, directors, owners, members, trustees, agents, attorneys, employees, successors and assigns, and any other designated ticketing agent, Event sponsors/promoters, and the performing artists, including, but not limited to, their respective management, their agents, their staff and their designees (collectively, the “Company Parties”) harmless from any loss, liability, damage or cost in any way arising out of, or related to, Your actions and omissions at, around, or while traveling to and from, the Event.",
              "priceRanges": [
                {
                  "type": "standard",
                  "currency": "USD",
                  "min": 18,
                  "max": 18
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/rZ7HnEZ1A3e9Gg?locale=en-us"
                },
                "venues": [
                  {
                    "href": "/discovery/v2/venues/rZ7HnEZ173__A?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "name": "Transplants Brewing Company",
                    "type": "venue",
                    "id": "rZ7HnEZ173__A",
                    "test": false,
                    "url": "https://www.ticketweb.com/venue/transplants-brewing-company-palmdale-ca/499645",
                    "locale": "en-us",
                    "postalCode": "93551",
                    "timezone": "America/Los_Angeles",
                    "city": {
                      "name": "Palmdale"
                    },
                    "state": {
                      "name": "California",
                      "stateCode": "CA"
                    },
                    "country": {
                      "name": "United States Of America",
                      "countryCode": "US"
                    },
                    "address": {
                      "line1": "40242 La Quinta Ln",
                      "line2": "Unit 101"
                    },
                    "location": {
                      "longitude": "-118.190148",
                      "latitude": "34.618276"
                    },
                    "upcomingEvents": {
                      "_total": 12,
                      "ticketweb": 12,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/rZ7HnEZ173__A?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "The Marias Present: CINEMA  - RESCHEDULED FROM 2/3/22",
              "type": "event",
              "id": "Z1lMVSyiJynZ17AprF",
              "test": false,
              "description": "The Marias at Emo's on 2/3/22 is being rescheduled to 10/14/22 and moved to Stubb's. All previously purchased tickets will be valid for the new date and venue.&nbsp;\r\n&nbsp;\r\nUPDATED BAG POLICY&nbsp;\r\nTo reduce staff contact with guest belongings, we have implemented the following bag policy: we will allow clear plastic, vinyl or PVC tote bags no larger than 12&rdquo; x 6&rdquo; x 12&rdquo; and/or small clutch bags (4.5&rdquo;x 6.5&rdquo;). Small clutch bags do NOT have to be clear.\r\n&nbsp;\r\n&nbsp;\r\n&nbsp;\r\n&nbsp;\r\nThe Event Organizer is requiring all attendees of this event to have received a negative COVID-19 test within 72-hours prior to entering the venue, OR be fully vaccinated against COVID-19. In attending the event, you certify and attest that you and all individuals in your party attending the event will abide by the following regulations:\r\nAll fans will provide proof of a negative COVID-19 test within 72-hours prior to entering the venue, OR be fully vaccinated against COVID-19 (at least two weeks after final dose) and provide documentation with proof of immunization. Unvaccinated fans under 12 years of age will be required to take a COVID-19 diagnostic test within 72-hours before the event and will provide proof of negative result prior to entering the venue.",
              "url": "https://stubbs.frontgatetickets.com/event/opge77lvwpmg7mdt",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": true
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": true
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": true
                },
                {
                  "ratio": "3_2",
                  "url": "https://static-label.frontgatetickets.com/common/events/143601.jpg",
                  "width": 120,
                  "height": 80,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": true
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/8cf/a6653880-7899-4f67-8067-1f95f4d158cf_124761_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": true
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "2021-06-25T15:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-10-15T07:00:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-10-14",
                  "localTime": "20:00:00",
                  "dateTime": "2022-10-15T01:00:00Z",
                  "dateTBD": false,
                  "dateTBA": false,
                  "timeTBA": false,
                  "noSpecificTime": false
                },
                "end": {
                  "dateTime": "2022-10-15T04:45:00Z",
                  "approximate": false,
                  "noSpecificTime": false
                },
                "timezone": "America/Chicago",
                "status": {
                  "code": "onsale"
                },
                "spanMultipleDays": false
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z1lMVSyiJynZ17AprF?locale=en-us"
                },
                "venues": [
                  {
                    "href": "/discovery/v2/venues/KovZ917AxzU?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "name": "Stubb's Waller Creek Amphitheater",
                    "type": "venue",
                    "id": "KovZ917AxzU",
                    "test": false,
                    "url": "https://www.ticketmaster.com/stubbs-waller-creek-amphitheater-tickets-austin/venue/476218",
                    "locale": "en-us",
                    "postalCode": "78701",
                    "timezone": "America/Chicago",
                    "city": {
                      "name": "Austin "
                    },
                    "state": {
                      "name": "Texas",
                      "stateCode": "TX"
                    },
                    "country": {
                      "name": "United States Of America",
                      "countryCode": "US"
                    },
                    "address": {
                      "line1": "801 Red River"
                    },
                    "location": {
                      "longitude": "-97.736192",
                      "latitude": "30.268487"
                    },
                    "markets": [
                      {
                        "name": "San Antonio and Austin",
                        "id": "40"
                      }
                    ],
                    "dmas": [
                      {
                        "id": 222
                      },
                      {
                        "id": 379
                      },
                      {
                        "id": 380
                      }
                    ],
                    "upcomingEvents": {
                      "_total": 21,
                      "frontgate": 1,
                      "ticketmaster": 20,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/KovZ917AxzU?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Digging for Weldon Irvine",
              "type": "event",
              "id": "Z698xZbpZ171v0g",
              "test": false,
              "url": "https://www.ticketmaster.nl/event/digging-for-weldon-irvine-tickets/281935?language=en-us",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "2022-05-18T10:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-06-17T04:00:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-06-16",
                  "localTime": "20:00:00",
                  "dateTime": "2022-06-16T18:00:00Z",
                  "dateTBD": false,
                  "dateTBA": false,
                  "timeTBA": false,
                  "noSpecificTime": false
                },
                "timezone": "Europe/Amsterdam",
                "status": {
                  "code": "onsale"
                },
                "spanMultipleDays": false
              },
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "genre": {
                    "id": "KnvZfZ7v7l1",
                    "name": "Theatre"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ll",
                    "name": "Miscellaneous"
                  },
                  "family": false
                }
              ],
              "promoter": {
                "id": "1191",
                "name": "Melkweg"
              },
              "promoters": [
                {
                  "id": "1191",
                  "name": "Melkweg"
                }
              ],
              "priceRanges": [
                {
                  "type": "standard",
                  "currency": "EUR",
                  "min": 0,
                  "max": 9.55
                },
                {
                  "type": "standard including fees",
                  "currency": "EUR",
                  "min": 0,
                  "max": 11
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z698xZbpZ171v0g?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ9172uF0?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z598xZbpZd6ak?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "type": "venue",
                    "id": "Z598xZbpZd6ak",
                    "test": false,
                    "url": "https://www.ticketmaster.nl/venue/melkweg-amsterdam-tickets/melkweg/110",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/v/788/b107a3b0-d754-4b39-8cc4-9c27f2b69788_330702_SOURCE.jpg",
                        "width": 2656,
                        "height": 1772,
                        "fallback": false,
                        "attribution": "CC BY-SA 4.0 via wikipedia"
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://media.ticketmaster.eu/netherlands/20adf24702e87f6263b0020cb434b3a3.png",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      }
                    ],
                    "postalCode": "1017 PH",
                    "timezone": "Europe/Amsterdam",
                    "city": {
                      "name": "Amsterdam"
                    },
                    "country": {
                      "name": "Netherlands",
                      "countryCode": "NL"
                    },
                    "address": {
                      "line1": "Lijnbaansgracht 234 A"
                    },
                    "location": {
                      "longitude": "4.88127",
                      "latitude": "52.36483"
                    },
                    "upcomingEvents": {
                      "_total": 333,
                      "mfx-nl": 333,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z598xZbpZd6ak?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Melkweg Cinema",
                    "type": "attraction",
                    "id": "K8vZ9172uF0",
                    "test": false,
                    "url": "http://www.ticketmaster.nl/artist/875731",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7nn",
                          "name": "Film"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAka",
                          "name": "Miscellaneous"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vFln",
                          "name": "Miscellaneous"
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
                      "_total": 7,
                      "mfx-nl": 7,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ9172uF0?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Kaboom Anime: The Night is Short, Walk on Girl (2017)",
              "type": "event",
              "id": "Z698xZbpZ17azbv",
              "test": false,
              "url": "https://www.ticketmaster.nl/event/kaboom-anime-the-night-is-short-walk-on-girl-2017--tickets/278601?language=en-us",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "2022-01-28T14:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-06-19T04:00:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-06-18",
                  "localTime": "21:00:00",
                  "dateTime": "2022-06-18T19:00:00Z",
                  "dateTBD": false,
                  "dateTBA": false,
                  "timeTBA": false,
                  "noSpecificTime": false
                },
                "timezone": "Europe/Amsterdam",
                "status": {
                  "code": "onsale"
                },
                "spanMultipleDays": false
              },
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "genre": {
                    "id": "KnvZfZ7v7l1",
                    "name": "Theatre"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ll",
                    "name": "Miscellaneous"
                  },
                  "family": false
                }
              ],
              "promoter": {
                "id": "1191",
                "name": "Melkweg"
              },
              "promoters": [
                {
                  "id": "1191",
                  "name": "Melkweg"
                }
              ],
              "priceRanges": [
                {
                  "type": "standard",
                  "currency": "EUR",
                  "min": 0,
                  "max": 9.55
                },
                {
                  "type": "standard including fees",
                  "currency": "EUR",
                  "min": 0,
                  "max": 11
                }
              ],
              "seatmap": {
                "staticUrl": "https://media.ticketmaster.eu/netherlands/d8f4f06d50e892e10e93f124da4af5d9.jpg"
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z698xZbpZ17azbv?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ9172uF0?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z598xZbpZd6ak?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "type": "venue",
                    "id": "Z598xZbpZd6ak",
                    "test": false,
                    "url": "https://www.ticketmaster.nl/venue/melkweg-amsterdam-tickets/melkweg/110",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/v/788/b107a3b0-d754-4b39-8cc4-9c27f2b69788_330702_SOURCE.jpg",
                        "width": 2656,
                        "height": 1772,
                        "fallback": false,
                        "attribution": "CC BY-SA 4.0 via wikipedia"
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://media.ticketmaster.eu/netherlands/20adf24702e87f6263b0020cb434b3a3.png",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      }
                    ],
                    "postalCode": "1017 PH",
                    "timezone": "Europe/Amsterdam",
                    "city": {
                      "name": "Amsterdam"
                    },
                    "country": {
                      "name": "Netherlands",
                      "countryCode": "NL"
                    },
                    "address": {
                      "line1": "Lijnbaansgracht 234 A"
                    },
                    "location": {
                      "longitude": "4.88127",
                      "latitude": "52.36483"
                    },
                    "upcomingEvents": {
                      "_total": 333,
                      "mfx-nl": 333,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z598xZbpZd6ak?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Melkweg Cinema",
                    "type": "attraction",
                    "id": "K8vZ9172uF0",
                    "test": false,
                    "url": "http://www.ticketmaster.nl/artist/875731",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7nn",
                          "name": "Film"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAka",
                          "name": "Miscellaneous"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vFln",
                          "name": "Miscellaneous"
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
                      "_total": 7,
                      "mfx-nl": 7,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ9172uF0?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Jana Mila & CHELS",
              "type": "event",
              "id": "Z698xZbpZ171eFN",
              "test": false,
              "url": "https://www.ticketmaster.nl/event/jana-mila--chels-tickets/282223?language=en-us",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "2022-05-27T12:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-07-01T04:00:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-06-30",
                  "localTime": "18:30:00",
                  "dateTime": "2022-06-30T16:30:00Z",
                  "dateTBD": false,
                  "dateTBA": false,
                  "timeTBA": false,
                  "noSpecificTime": false
                },
                "timezone": "Europe/Amsterdam",
                "status": {
                  "code": "onsale"
                },
                "spanMultipleDays": false
              },
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "genre": {
                    "id": "KnvZfZ7v7l1",
                    "name": "Theatre"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ll",
                    "name": "Miscellaneous"
                  },
                  "family": false
                }
              ],
              "promoter": {
                "id": "1191",
                "name": "Melkweg"
              },
              "promoters": [
                {
                  "id": "1191",
                  "name": "Melkweg"
                }
              ],
              "priceRanges": [
                {
                  "type": "standard",
                  "currency": "EUR",
                  "min": 12.5,
                  "max": 12.5
                },
                {
                  "type": "standard including fees",
                  "currency": "EUR",
                  "min": 14.4,
                  "max": 14.4
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z698xZbpZ171eFN?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ9172uF0?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z598xZbpZd6ak?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "type": "venue",
                    "id": "Z598xZbpZd6ak",
                    "test": false,
                    "url": "https://www.ticketmaster.nl/venue/melkweg-amsterdam-tickets/melkweg/110",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/v/788/b107a3b0-d754-4b39-8cc4-9c27f2b69788_330702_SOURCE.jpg",
                        "width": 2656,
                        "height": 1772,
                        "fallback": false,
                        "attribution": "CC BY-SA 4.0 via wikipedia"
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://media.ticketmaster.eu/netherlands/20adf24702e87f6263b0020cb434b3a3.png",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      }
                    ],
                    "postalCode": "1017 PH",
                    "timezone": "Europe/Amsterdam",
                    "city": {
                      "name": "Amsterdam"
                    },
                    "country": {
                      "name": "Netherlands",
                      "countryCode": "NL"
                    },
                    "address": {
                      "line1": "Lijnbaansgracht 234 A"
                    },
                    "location": {
                      "longitude": "4.88127",
                      "latitude": "52.36483"
                    },
                    "upcomingEvents": {
                      "_total": 333,
                      "mfx-nl": 333,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z598xZbpZd6ak?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Melkweg Cinema",
                    "type": "attraction",
                    "id": "K8vZ9172uF0",
                    "test": false,
                    "url": "http://www.ticketmaster.nl/artist/875731",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7nn",
                          "name": "Film"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAka",
                          "name": "Miscellaneous"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vFln",
                          "name": "Miscellaneous"
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
                      "_total": 7,
                      "mfx-nl": 7,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ9172uF0?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "No Place Like Home: Redux",
              "type": "event",
              "id": "Z698xZbpZ171eAM",
              "test": false,
              "url": "https://www.ticketmaster.nl/event/no-place-like-home-redux-tickets/282177?language=en-us",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "2022-05-26T08:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-07-02T04:00:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-07-01",
                  "localTime": "20:00:00",
                  "dateTime": "2022-07-01T18:00:00Z",
                  "dateTBD": false,
                  "dateTBA": false,
                  "timeTBA": false,
                  "noSpecificTime": false
                },
                "timezone": "Europe/Amsterdam",
                "status": {
                  "code": "onsale"
                },
                "spanMultipleDays": false
              },
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "genre": {
                    "id": "KnvZfZ7v7l1",
                    "name": "Theatre"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ll",
                    "name": "Miscellaneous"
                  },
                  "family": false
                }
              ],
              "promoter": {
                "id": "1191",
                "name": "Melkweg"
              },
              "promoters": [
                {
                  "id": "1191",
                  "name": "Melkweg"
                }
              ],
              "priceRanges": [
                {
                  "type": "standard including fees",
                  "currency": "EUR",
                  "min": 12.5,
                  "max": 12.5
                },
                {
                  "type": "standard",
                  "currency": "EUR",
                  "min": 10.85,
                  "max": 10.85
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z698xZbpZ171eAM?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ9172uF0?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z598xZbpZd6ak?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "type": "venue",
                    "id": "Z598xZbpZd6ak",
                    "test": false,
                    "url": "https://www.ticketmaster.nl/venue/melkweg-amsterdam-tickets/melkweg/110",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/v/788/b107a3b0-d754-4b39-8cc4-9c27f2b69788_330702_SOURCE.jpg",
                        "width": 2656,
                        "height": 1772,
                        "fallback": false,
                        "attribution": "CC BY-SA 4.0 via wikipedia"
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://media.ticketmaster.eu/netherlands/20adf24702e87f6263b0020cb434b3a3.png",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      }
                    ],
                    "postalCode": "1017 PH",
                    "timezone": "Europe/Amsterdam",
                    "city": {
                      "name": "Amsterdam"
                    },
                    "country": {
                      "name": "Netherlands",
                      "countryCode": "NL"
                    },
                    "address": {
                      "line1": "Lijnbaansgracht 234 A"
                    },
                    "location": {
                      "longitude": "4.88127",
                      "latitude": "52.36483"
                    },
                    "upcomingEvents": {
                      "_total": 333,
                      "mfx-nl": 333,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z598xZbpZd6ak?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Melkweg Cinema",
                    "type": "attraction",
                    "id": "K8vZ9172uF0",
                    "test": false,
                    "url": "http://www.ticketmaster.nl/artist/875731",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7nn",
                          "name": "Film"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAka",
                          "name": "Miscellaneous"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vFln",
                          "name": "Miscellaneous"
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
                      "_total": 7,
                      "mfx-nl": 7,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ9172uF0?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Kaboom Anime: Fortune Favors Lady Nikuko (2021)",
              "type": "event",
              "id": "Z698xZbpZ17azbd",
              "test": false,
              "url": "https://www.ticketmaster.nl/event/kaboom-anime-fortune-favors-lady-nikuko-2021--tickets/278603?language=en-us",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "2022-01-28T14:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-07-17T04:00:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-07-16",
                  "localTime": "21:00:00",
                  "dateTime": "2022-07-16T19:00:00Z",
                  "dateTBD": false,
                  "dateTBA": false,
                  "timeTBA": false,
                  "noSpecificTime": false
                },
                "timezone": "Europe/Amsterdam",
                "status": {
                  "code": "onsale"
                },
                "spanMultipleDays": false
              },
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "genre": {
                    "id": "KnvZfZ7v7l1",
                    "name": "Theatre"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ll",
                    "name": "Miscellaneous"
                  },
                  "family": false
                }
              ],
              "promoter": {
                "id": "1191",
                "name": "Melkweg"
              },
              "promoters": [
                {
                  "id": "1191",
                  "name": "Melkweg"
                }
              ],
              "priceRanges": [
                {
                  "type": "standard including fees",
                  "currency": "EUR",
                  "min": 11,
                  "max": 11
                },
                {
                  "type": "standard",
                  "currency": "EUR",
                  "min": 9.55,
                  "max": 9.55
                }
              ],
              "seatmap": {
                "staticUrl": "https://media.ticketmaster.eu/netherlands/d8f4f06d50e892e10e93f124da4af5d9.jpg"
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z698xZbpZ17azbd?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ9172uF0?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z598xZbpZd6ak?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "type": "venue",
                    "id": "Z598xZbpZd6ak",
                    "test": false,
                    "url": "https://www.ticketmaster.nl/venue/melkweg-amsterdam-tickets/melkweg/110",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/v/788/b107a3b0-d754-4b39-8cc4-9c27f2b69788_330702_SOURCE.jpg",
                        "width": 2656,
                        "height": 1772,
                        "fallback": false,
                        "attribution": "CC BY-SA 4.0 via wikipedia"
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://media.ticketmaster.eu/netherlands/20adf24702e87f6263b0020cb434b3a3.png",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      }
                    ],
                    "postalCode": "1017 PH",
                    "timezone": "Europe/Amsterdam",
                    "city": {
                      "name": "Amsterdam"
                    },
                    "country": {
                      "name": "Netherlands",
                      "countryCode": "NL"
                    },
                    "address": {
                      "line1": "Lijnbaansgracht 234 A"
                    },
                    "location": {
                      "longitude": "4.88127",
                      "latitude": "52.36483"
                    },
                    "upcomingEvents": {
                      "_total": 333,
                      "mfx-nl": 333,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z598xZbpZd6ak?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Melkweg Cinema",
                    "type": "attraction",
                    "id": "K8vZ9172uF0",
                    "test": false,
                    "url": "http://www.ticketmaster.nl/artist/875731",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7nn",
                          "name": "Film"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAka",
                          "name": "Miscellaneous"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vFln",
                          "name": "Miscellaneous"
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
                      "_total": 7,
                      "mfx-nl": 7,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ9172uF0?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "CineRadar #4",
              "type": "event",
              "id": "Z698xZbpZ171e4-",
              "test": false,
              "url": "https://www.ticketmaster.nl/event/cineradar-4-tickets/282561?language=en-us",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "2022-06-07T10:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-09-09T04:00:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-09-08",
                  "localTime": "20:15:00",
                  "dateTime": "2022-09-08T18:15:00Z",
                  "dateTBD": false,
                  "dateTBA": false,
                  "timeTBA": false,
                  "noSpecificTime": false
                },
                "timezone": "Europe/Amsterdam",
                "status": {
                  "code": "onsale"
                },
                "spanMultipleDays": false
              },
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "genre": {
                    "id": "KnvZfZ7v7l1",
                    "name": "Theatre"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7ll",
                    "name": "Miscellaneous"
                  },
                  "family": false
                }
              ],
              "promoter": {
                "id": "1191",
                "name": "Melkweg"
              },
              "promoters": [
                {
                  "id": "1191",
                  "name": "Melkweg"
                }
              ],
              "priceRanges": [
                {
                  "type": "standard including fees",
                  "currency": "EUR",
                  "min": 0,
                  "max": 6.5
                },
                {
                  "type": "standard",
                  "currency": "EUR",
                  "min": 0,
                  "max": 5.65
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z698xZbpZ171e4-?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ9172uF0?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z598xZbpZd6ak?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "type": "venue",
                    "id": "Z598xZbpZd6ak",
                    "test": false,
                    "url": "https://www.ticketmaster.nl/venue/melkweg-amsterdam-tickets/melkweg/110",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/v/788/b107a3b0-d754-4b39-8cc4-9c27f2b69788_330702_SOURCE.jpg",
                        "width": 2656,
                        "height": 1772,
                        "fallback": false,
                        "attribution": "CC BY-SA 4.0 via wikipedia"
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://media.ticketmaster.eu/netherlands/20adf24702e87f6263b0020cb434b3a3.png",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      }
                    ],
                    "postalCode": "1017 PH",
                    "timezone": "Europe/Amsterdam",
                    "city": {
                      "name": "Amsterdam"
                    },
                    "country": {
                      "name": "Netherlands",
                      "countryCode": "NL"
                    },
                    "address": {
                      "line1": "Lijnbaansgracht 234 A"
                    },
                    "location": {
                      "longitude": "4.88127",
                      "latitude": "52.36483"
                    },
                    "upcomingEvents": {
                      "_total": 321,
                      "mfx-nl": 321,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z598xZbpZd6ak?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Melkweg Cinema",
                    "type": "attraction",
                    "id": "K8vZ9172uF0",
                    "test": false,
                    "url": "http://www.ticketmaster.nl/artist/875731",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/a04/a77e5b13-a046-4f74-b8c1-2c7492aa2a04_1169041_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/d96/e35ace49-bfce-4f38-8beb-93a02bc90d96_531751_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7nn",
                          "name": "Film"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAka",
                          "name": "Miscellaneous"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vFln",
                          "name": "Miscellaneous"
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
                      "_total": 5,
                      "mfx-nl": 5,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ9172uF0?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Das Rheingold",
              "type": "event",
              "id": "Z7r9jZ1AdoeZt",
              "test": false,
              "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdoeZt",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": true
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": true
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": true
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": true
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": true
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": true
                }
              ],
              "sales": {
                "public": {
                  "startTBD": true,
                  "startTBA": false
                }
              },
              "dates": {
                "start": {
                  "localDate": "2023-02-18",
                  "localTime": "19:30:00",
                  "dateTime": "2023-02-19T01:30:00Z",
                  "dateTBD": false,
                  "dateTBA": false,
                  "timeTBA": false,
                  "noSpecificTime": false
                },
                "status": {
                  "code": "offsale"
                },
                "spanMultipleDays": false
              },
              "classifications": [
                {
                  "primary": true,
                  "segment": {
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "genre": {
                    "id": "KnvZfZ7v7lk",
                    "name": "Opera"
                  },
                  "subGenre": {
                    "id": "KZazBEonSMnZfZ7v7la",
                    "name": "Opera"
                  },
                  "family": false
                }
              ],
              "outlets": [
                {
                  "url": "https://www.attpac.org",
                  "type": "venueBoxOffice"
                },
                {
                  "url": "https://www.ticketmaster.com/das-rheingold-dallas-texas-02-18-2023/event/Zu0FM1R0e5tVn0y",
                  "type": "tmMarketPlace"
                }
              ],
              "seatmap": {
                "staticUrl": "https://content.resale.ticketmaster.com/graphics/TMResale/2/VenueMaps/7060-0-0-1-WinspearOperaHouse.png"
              },
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z7r9jZ1AdoeZt?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ917uKif?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/ZFr9jZFv6v?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "name": "Margot and Bill Winspear Opera House",
                    "type": "venue",
                    "id": "ZFr9jZFv6v",
                    "test": false,
                    "locale": "en-us",
                    "postalCode": "75201",
                    "timezone": "America/Chicago",
                    "city": {
                      "name": "Dallas"
                    },
                    "state": {
                      "name": "Texas",
                      "stateCode": "TX"
                    },
                    "country": {
                      "name": "United States Of America",
                      "countryCode": "US"
                    },
                    "address": {
                      "line1": "2403 Flora Street"
                    },
                    "location": {
                      "longitude": "-96.798897",
                      "latitude": "32.787399"
                    },
                    "dmas": [
                      {
                        "id": 261
                      }
                    ],
                    "upcomingEvents": {
                      "_total": 93,
                      "tmr": 78,
                      "ticketmaster": 15,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/ZFr9jZFv6v?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Opera In Cinema: Das Rheingold",
                    "type": "attraction",
                    "id": "K8vZ917uKif",
                    "test": false,
                    "url": "https://www.ticketmaster.com/opera-in-cinema-das-rheingold-tickets/artist/1503852",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": true
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": true
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": true
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": true
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": true
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": true
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": true
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": true
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": true
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/c/aae/b503db1a-c908-473b-a218-96d123cd5aae_105501_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": true
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7nn",
                          "name": "Film"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAkJ",
                          "name": "Music"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vave",
                          "name": "Music"
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
                      "_total": 1,
                      "tmr": 1,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ917uKif?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Josh Blue",
              "type": "event",
              "id": "Z7r9jZ1Ad3poE",
              "test": false,
              "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad3poE",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "1900-01-01T06:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-06-23T23:00:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-06-23",
                  "localTime": "19:00:00",
                  "dateTime": "2022-06-23T23:00:00Z",
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
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "family": false
                }
              ],
              "outlets": [
                {
                  "url": "https://www.ticketmaster.com/josh-blue-arlington-virginia-06-23-2022/event/Z7r9jZ1Ad3poE",
                  "type": "tmMarketPlace"
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z7r9jZ1Ad3poE?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ9175WVf?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "name": "Arlington Cinema and Drafthouse",
                    "type": "venue",
                    "id": "Z7r9jZadhm",
                    "test": false,
                    "locale": "en-us",
                    "postalCode": "22204",
                    "timezone": "America/New_York",
                    "city": {
                      "name": "Arlington"
                    },
                    "state": {
                      "name": "Virginia",
                      "stateCode": "VA"
                    },
                    "country": {
                      "name": "United States Of America",
                      "countryCode": "US"
                    },
                    "address": {
                      "line1": "2903 Columbia Pike"
                    },
                    "location": {
                      "longitude": "-77.089996",
                      "latitude": "38.865299"
                    },
                    "dmas": [
                      {
                        "id": 409
                      },
                      {
                        "id": 801
                      }
                    ],
                    "upcomingEvents": {
                      "_total": 28,
                      "tmr": 28,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Josh Blue",
                    "type": "attraction",
                    "id": "K8vZ9175WVf",
                    "test": false,
                    "url": "https://www.ticketmaster.com/josh-blue-tickets/artist/1055846",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7na",
                          "name": "Arts & Theatre"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAe1",
                          "name": "Comedy"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vF17",
                          "name": "Comedy"
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
                      "_total": 5,
                      "tmr": 5,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ9175WVf?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Josh Blue",
              "type": "event",
              "id": "Z7r9jZ1Ad3poP",
              "test": false,
              "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad3poP",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "1900-01-01T06:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-06-24T23:00:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-06-24",
                  "localTime": "19:00:00",
                  "dateTime": "2022-06-24T23:00:00Z",
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
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "family": false
                }
              ],
              "outlets": [
                {
                  "url": "https://www.ticketmaster.com/josh-blue-arlington-virginia-06-24-2022/event/Z7r9jZ1Ad3poP",
                  "type": "tmMarketPlace"
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z7r9jZ1Ad3poP?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ9175WVf?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "name": "Arlington Cinema and Drafthouse",
                    "type": "venue",
                    "id": "Z7r9jZadhm",
                    "test": false,
                    "locale": "en-us",
                    "postalCode": "22204",
                    "timezone": "America/New_York",
                    "city": {
                      "name": "Arlington"
                    },
                    "state": {
                      "name": "Virginia",
                      "stateCode": "VA"
                    },
                    "country": {
                      "name": "United States Of America",
                      "countryCode": "US"
                    },
                    "address": {
                      "line1": "2903 Columbia Pike"
                    },
                    "location": {
                      "longitude": "-77.089996",
                      "latitude": "38.865299"
                    },
                    "dmas": [
                      {
                        "id": 409
                      },
                      {
                        "id": 801
                      }
                    ],
                    "upcomingEvents": {
                      "_total": 28,
                      "tmr": 28,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Josh Blue",
                    "type": "attraction",
                    "id": "K8vZ9175WVf",
                    "test": false,
                    "url": "https://www.ticketmaster.com/josh-blue-tickets/artist/1055846",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7na",
                          "name": "Arts & Theatre"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAe1",
                          "name": "Comedy"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vF17",
                          "name": "Comedy"
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
                      "_total": 5,
                      "tmr": 5,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ9175WVf?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Josh Blue",
              "type": "event",
              "id": "Z7r9jZ1Ad3pos",
              "test": false,
              "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad3pos",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "1900-01-01T06:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-06-25T01:30:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-06-24",
                  "localTime": "21:30:00",
                  "dateTime": "2022-06-25T01:30:00Z",
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
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "family": false
                }
              ],
              "outlets": [
                {
                  "url": "https://www.ticketmaster.com/josh-blue-arlington-virginia-06-24-2022/event/Z7r9jZ1Ad3pos",
                  "type": "tmMarketPlace"
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z7r9jZ1Ad3pos?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ9175WVf?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "name": "Arlington Cinema and Drafthouse",
                    "type": "venue",
                    "id": "Z7r9jZadhm",
                    "test": false,
                    "locale": "en-us",
                    "postalCode": "22204",
                    "timezone": "America/New_York",
                    "city": {
                      "name": "Arlington"
                    },
                    "state": {
                      "name": "Virginia",
                      "stateCode": "VA"
                    },
                    "country": {
                      "name": "United States Of America",
                      "countryCode": "US"
                    },
                    "address": {
                      "line1": "2903 Columbia Pike"
                    },
                    "location": {
                      "longitude": "-77.089996",
                      "latitude": "38.865299"
                    },
                    "dmas": [
                      {
                        "id": 409
                      },
                      {
                        "id": 801
                      }
                    ],
                    "upcomingEvents": {
                      "_total": 28,
                      "tmr": 28,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Josh Blue",
                    "type": "attraction",
                    "id": "K8vZ9175WVf",
                    "test": false,
                    "url": "https://www.ticketmaster.com/josh-blue-tickets/artist/1055846",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7na",
                          "name": "Arts & Theatre"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAe1",
                          "name": "Comedy"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vF17",
                          "name": "Comedy"
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
                      "_total": 5,
                      "tmr": 5,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ9175WVf?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Josh Blue",
              "type": "event",
              "id": "Z7r9jZ1Ad3p3Z",
              "test": false,
              "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad3p3Z",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "1900-01-01T06:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-06-26T01:30:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-06-25",
                  "localTime": "21:30:00",
                  "dateTime": "2022-06-26T01:30:00Z",
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
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "family": false
                }
              ],
              "outlets": [
                {
                  "url": "https://www.ticketmaster.com/josh-blue-arlington-virginia-06-25-2022/event/Z7r9jZ1Ad3p3Z",
                  "type": "tmMarketPlace"
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z7r9jZ1Ad3p3Z?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ9175WVf?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "name": "Arlington Cinema and Drafthouse",
                    "type": "venue",
                    "id": "Z7r9jZadhm",
                    "test": false,
                    "locale": "en-us",
                    "postalCode": "22204",
                    "timezone": "America/New_York",
                    "city": {
                      "name": "Arlington"
                    },
                    "state": {
                      "name": "Virginia",
                      "stateCode": "VA"
                    },
                    "country": {
                      "name": "United States Of America",
                      "countryCode": "US"
                    },
                    "address": {
                      "line1": "2903 Columbia Pike"
                    },
                    "location": {
                      "longitude": "-77.089996",
                      "latitude": "38.865299"
                    },
                    "dmas": [
                      {
                        "id": 409
                      },
                      {
                        "id": 801
                      }
                    ],
                    "upcomingEvents": {
                      "_total": 28,
                      "tmr": 28,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Josh Blue",
                    "type": "attraction",
                    "id": "K8vZ9175WVf",
                    "test": false,
                    "url": "https://www.ticketmaster.com/josh-blue-tickets/artist/1055846",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7na",
                          "name": "Arts & Theatre"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAe1",
                          "name": "Comedy"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vF17",
                          "name": "Comedy"
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
                      "_total": 5,
                      "tmr": 5,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ9175WVf?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Josh Blue",
              "type": "event",
              "id": "Z7r9jZ1Ad3pox",
              "test": false,
              "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad3pox",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "1900-01-01T06:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-06-25T23:00:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-06-25",
                  "localTime": "19:00:00",
                  "dateTime": "2022-06-25T23:00:00Z",
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
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "family": false
                }
              ],
              "outlets": [
                {
                  "url": "https://www.ticketmaster.com/josh-blue-arlington-virginia-06-25-2022/event/Z7r9jZ1Ad3pox",
                  "type": "tmMarketPlace"
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z7r9jZ1Ad3pox?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ9175WVf?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "name": "Arlington Cinema and Drafthouse",
                    "type": "venue",
                    "id": "Z7r9jZadhm",
                    "test": false,
                    "locale": "en-us",
                    "postalCode": "22204",
                    "timezone": "America/New_York",
                    "city": {
                      "name": "Arlington"
                    },
                    "state": {
                      "name": "Virginia",
                      "stateCode": "VA"
                    },
                    "country": {
                      "name": "United States Of America",
                      "countryCode": "US"
                    },
                    "address": {
                      "line1": "2903 Columbia Pike"
                    },
                    "location": {
                      "longitude": "-77.089996",
                      "latitude": "38.865299"
                    },
                    "dmas": [
                      {
                        "id": 409
                      },
                      {
                        "id": 801
                      }
                    ],
                    "upcomingEvents": {
                      "_total": 28,
                      "tmr": 28,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Josh Blue",
                    "type": "attraction",
                    "id": "K8vZ9175WVf",
                    "test": false,
                    "url": "https://www.ticketmaster.com/josh-blue-tickets/artist/1055846",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/1f1/914b6af8-19dc-4abf-9db9-6a8f865801f1_1019441_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7na",
                          "name": "Arts & Theatre"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAe1",
                          "name": "Comedy"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vF17",
                          "name": "Comedy"
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
                      "_total": 5,
                      "tmr": 5,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ9175WVf?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Chad Daniels",
              "type": "event",
              "id": "Z7r9jZ1AdfdAM",
              "test": false,
              "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdfdAM",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "1900-01-01T06:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-09-17T01:30:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-09-16",
                  "localTime": "21:30:00",
                  "dateTime": "2022-09-17T01:30:00Z",
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
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "family": false
                }
              ],
              "outlets": [
                {
                  "url": "https://www.arlingtondrafthouse.com/",
                  "type": "venueBoxOffice"
                },
                {
                  "url": "https://www.ticketmaster.com/chad-daniels-arlington-virginia-09-16-2022/event/Z7r9jZ1AdfdAM",
                  "type": "tmMarketPlace"
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z7r9jZ1AdfdAM?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ917uRPV?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "name": "Arlington Cinema and Drafthouse",
                    "type": "venue",
                    "id": "Z7r9jZadhm",
                    "test": false,
                    "locale": "en-us",
                    "postalCode": "22204",
                    "timezone": "America/New_York",
                    "city": {
                      "name": "Arlington"
                    },
                    "state": {
                      "name": "Virginia",
                      "stateCode": "VA"
                    },
                    "country": {
                      "name": "United States Of America",
                      "countryCode": "US"
                    },
                    "address": {
                      "line1": "2903 Columbia Pike"
                    },
                    "location": {
                      "longitude": "-77.089996",
                      "latitude": "38.865299"
                    },
                    "dmas": [
                      {
                        "id": 409
                      },
                      {
                        "id": 801
                      }
                    ],
                    "upcomingEvents": {
                      "_total": 28,
                      "tmr": 28,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Chad Daniels",
                    "type": "attraction",
                    "id": "K8vZ917uRPV",
                    "test": false,
                    "url": "https://www.ticketmaster.com/chad-daniels-tickets/artist/1148749",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7na",
                          "name": "Arts & Theatre"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAe1",
                          "name": "Comedy"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vF17",
                          "name": "Comedy"
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
                      "_total": 23,
                      "tmr": 9,
                      "ticketweb": 10,
                      "ticketmaster": 4,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ917uRPV?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Chad Daniels",
              "type": "event",
              "id": "Z7r9jZ1Adfdk7",
              "test": false,
              "url": "https://www.ticketmaster.com/event/Z7r9jZ1Adfdk7",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "1900-01-01T06:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-09-16T23:00:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-09-16",
                  "localTime": "19:00:00",
                  "dateTime": "2022-09-16T23:00:00Z",
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
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "family": false
                }
              ],
              "outlets": [
                {
                  "url": "https://www.arlingtondrafthouse.com/",
                  "type": "venueBoxOffice"
                },
                {
                  "url": "https://www.ticketmaster.com/chad-daniels-arlington-virginia-09-16-2022/event/Z7r9jZ1Adfdk7",
                  "type": "tmMarketPlace"
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z7r9jZ1Adfdk7?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ917uRPV?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "name": "Arlington Cinema and Drafthouse",
                    "type": "venue",
                    "id": "Z7r9jZadhm",
                    "test": false,
                    "locale": "en-us",
                    "postalCode": "22204",
                    "timezone": "America/New_York",
                    "city": {
                      "name": "Arlington"
                    },
                    "state": {
                      "name": "Virginia",
                      "stateCode": "VA"
                    },
                    "country": {
                      "name": "United States Of America",
                      "countryCode": "US"
                    },
                    "address": {
                      "line1": "2903 Columbia Pike"
                    },
                    "location": {
                      "longitude": "-77.089996",
                      "latitude": "38.865299"
                    },
                    "dmas": [
                      {
                        "id": 409
                      },
                      {
                        "id": 801
                      }
                    ],
                    "upcomingEvents": {
                      "_total": 28,
                      "tmr": 28,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Chad Daniels",
                    "type": "attraction",
                    "id": "K8vZ917uRPV",
                    "test": false,
                    "url": "https://www.ticketmaster.com/chad-daniels-tickets/artist/1148749",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7na",
                          "name": "Arts & Theatre"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAe1",
                          "name": "Comedy"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vF17",
                          "name": "Comedy"
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
                      "_total": 23,
                      "tmr": 9,
                      "ticketweb": 10,
                      "ticketmaster": 4,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ917uRPV?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Chad Daniels",
              "type": "event",
              "id": "Z7r9jZ1AdfdkZ",
              "test": false,
              "url": "https://www.ticketmaster.com/event/Z7r9jZ1AdfdkZ",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "1900-01-01T06:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-09-18T01:30:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-09-17",
                  "localTime": "21:30:00",
                  "dateTime": "2022-09-18T01:30:00Z",
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
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "family": false
                }
              ],
              "outlets": [
                {
                  "url": "https://www.arlingtondrafthouse.com/",
                  "type": "venueBoxOffice"
                },
                {
                  "url": "https://www.ticketmaster.com/chad-daniels-arlington-virginia-09-17-2022/event/Z7r9jZ1AdfdkZ",
                  "type": "tmMarketPlace"
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z7r9jZ1AdfdkZ?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ917uRPV?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "name": "Arlington Cinema and Drafthouse",
                    "type": "venue",
                    "id": "Z7r9jZadhm",
                    "test": false,
                    "locale": "en-us",
                    "postalCode": "22204",
                    "timezone": "America/New_York",
                    "city": {
                      "name": "Arlington"
                    },
                    "state": {
                      "name": "Virginia",
                      "stateCode": "VA"
                    },
                    "country": {
                      "name": "United States Of America",
                      "countryCode": "US"
                    },
                    "address": {
                      "line1": "2903 Columbia Pike"
                    },
                    "location": {
                      "longitude": "-77.089996",
                      "latitude": "38.865299"
                    },
                    "dmas": [
                      {
                        "id": 409
                      },
                      {
                        "id": 801
                      }
                    ],
                    "upcomingEvents": {
                      "_total": 28,
                      "tmr": 28,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Chad Daniels",
                    "type": "attraction",
                    "id": "K8vZ917uRPV",
                    "test": false,
                    "url": "https://www.ticketmaster.com/chad-daniels-tickets/artist/1148749",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7na",
                          "name": "Arts & Theatre"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAe1",
                          "name": "Comedy"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vF17",
                          "name": "Comedy"
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
                      "_total": 23,
                      "tmr": 9,
                      "ticketweb": 10,
                      "ticketmaster": 4,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ917uRPV?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Chad Daniels",
              "type": "event",
              "id": "Z7r9jZ1Adfdkv",
              "test": false,
              "url": "https://www.ticketmaster.com/event/Z7r9jZ1Adfdkv",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "1900-01-01T06:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-09-17T23:00:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-09-17",
                  "localTime": "19:00:00",
                  "dateTime": "2022-09-17T23:00:00Z",
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
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "family": false
                }
              ],
              "outlets": [
                {
                  "url": "https://www.arlingtondrafthouse.com/",
                  "type": "venueBoxOffice"
                },
                {
                  "url": "https://www.ticketmaster.com/chad-daniels-arlington-virginia-09-17-2022/event/Z7r9jZ1Adfdkv",
                  "type": "tmMarketPlace"
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z7r9jZ1Adfdkv?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ917uRPV?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "name": "Arlington Cinema and Drafthouse",
                    "type": "venue",
                    "id": "Z7r9jZadhm",
                    "test": false,
                    "locale": "en-us",
                    "postalCode": "22204",
                    "timezone": "America/New_York",
                    "city": {
                      "name": "Arlington"
                    },
                    "state": {
                      "name": "Virginia",
                      "stateCode": "VA"
                    },
                    "country": {
                      "name": "United States Of America",
                      "countryCode": "US"
                    },
                    "address": {
                      "line1": "2903 Columbia Pike"
                    },
                    "location": {
                      "longitude": "-77.089996",
                      "latitude": "38.865299"
                    },
                    "dmas": [
                      {
                        "id": 409
                      },
                      {
                        "id": 801
                      }
                    ],
                    "upcomingEvents": {
                      "_total": 28,
                      "tmr": 28,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Chad Daniels",
                    "type": "attraction",
                    "id": "K8vZ917uRPV",
                    "test": false,
                    "url": "https://www.ticketmaster.com/chad-daniels-tickets/artist/1148749",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/111/2d7486a1-8cf1-404d-9514-c602382ba111_990751_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7na",
                          "name": "Arts & Theatre"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAe1",
                          "name": "Comedy"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vF17",
                          "name": "Comedy"
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
                      "_total": 23,
                      "tmr": 9,
                      "ticketweb": 10,
                      "ticketmaster": 4,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ917uRPV?locale=en-us"
                      }
                    }
                  }
                ]
              }
            },
            {
              "name": "Rachel Feinstein",
              "type": "event",
              "id": "Z7r9jZ1Ad3poO",
              "test": false,
              "url": "https://www.ticketmaster.com/event/Z7r9jZ1Ad3poO",
              "locale": "en-us",
              "images": [
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_RETINA_LANDSCAPE_16_9.jpg",
                  "width": 1136,
                  "height": 639,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_RECOMENDATION_16_9.jpg",
                  "width": 100,
                  "height": 56,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_RETINA_PORTRAIT_16_9.jpg",
                  "width": 640,
                  "height": 360,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_RETINA_PORTRAIT_3_2.jpg",
                  "width": 640,
                  "height": 427,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_TABLET_LANDSCAPE_16_9.jpg",
                  "width": 1024,
                  "height": 576,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                  "width": 2048,
                  "height": 1152,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_ARTIST_PAGE_3_2.jpg",
                  "width": 305,
                  "height": 203,
                  "fallback": false
                },
                {
                  "ratio": "16_9",
                  "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_EVENT_DETAIL_PAGE_16_9.jpg",
                  "width": 205,
                  "height": 115,
                  "fallback": false
                },
                {
                  "ratio": "3_2",
                  "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_TABLET_LANDSCAPE_3_2.jpg",
                  "width": 1024,
                  "height": 683,
                  "fallback": false
                },
                {
                  "ratio": "4_3",
                  "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_CUSTOM.jpg",
                  "width": 305,
                  "height": 225,
                  "fallback": false
                }
              ],
              "sales": {
                "public": {
                  "startDateTime": "1900-01-01T06:00:00Z",
                  "startTBD": false,
                  "startTBA": false,
                  "endDateTime": "2022-11-03T23:00:00Z"
                }
              },
              "dates": {
                "start": {
                  "localDate": "2022-11-03",
                  "localTime": "19:00:00",
                  "dateTime": "2022-11-03T23:00:00Z",
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
                    "id": "KZFzniwnSyZfZ7v7na",
                    "name": "Arts & Theatre"
                  },
                  "family": false
                }
              ],
              "outlets": [
                {
                  "url": "https://www.ticketmaster.com/rachel-feinstein-arlington-virginia-11-03-2022/event/Z7r9jZ1Ad3poO",
                  "type": "tmMarketPlace"
                }
              ],
              "_links": {
                "self": {
                  "href": "/discovery/v2/events/Z7r9jZ1Ad3poO?locale=en-us"
                },
                "attractions": [
                  {
                    "href": "/discovery/v2/attractions/K8vZ917uzAf?locale=en-us"
                  }
                ],
                "venues": [
                  {
                    "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                  }
                ]
              },
              "_embedded": {
                "venues": [
                  {
                    "name": "Arlington Cinema and Drafthouse",
                    "type": "venue",
                    "id": "Z7r9jZadhm",
                    "test": false,
                    "locale": "en-us",
                    "postalCode": "22204",
                    "timezone": "America/New_York",
                    "city": {
                      "name": "Arlington"
                    },
                    "state": {
                      "name": "Virginia",
                      "stateCode": "VA"
                    },
                    "country": {
                      "name": "United States Of America",
                      "countryCode": "US"
                    },
                    "address": {
                      "line1": "2903 Columbia Pike"
                    },
                    "location": {
                      "longitude": "-77.089996",
                      "latitude": "38.865299"
                    },
                    "dmas": [
                      {
                        "id": 409
                      },
                      {
                        "id": 801
                      }
                    ],
                    "upcomingEvents": {
                      "_total": 28,
                      "tmr": 28,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/venues/Z7r9jZadhm?locale=en-us"
                      }
                    }
                  }
                ],
                "attractions": [
                  {
                    "name": "Rachel Feinstein",
                    "type": "attraction",
                    "id": "K8vZ917uzAf",
                    "test": false,
                    "url": "https://www.ticketmaster.com/rachel-feinstein-tickets/artist/1376602",
                    "locale": "en-us",
                    "images": [
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_RETINA_LANDSCAPE_16_9.jpg",
                        "width": 1136,
                        "height": 639,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_RECOMENDATION_16_9.jpg",
                        "width": 100,
                        "height": 56,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_RETINA_PORTRAIT_16_9.jpg",
                        "width": 640,
                        "height": 360,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_RETINA_PORTRAIT_3_2.jpg",
                        "width": 640,
                        "height": 427,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_TABLET_LANDSCAPE_16_9.jpg",
                        "width": 1024,
                        "height": 576,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                        "width": 2048,
                        "height": 1152,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_ARTIST_PAGE_3_2.jpg",
                        "width": 305,
                        "height": 203,
                        "fallback": false
                      },
                      {
                        "ratio": "16_9",
                        "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_EVENT_DETAIL_PAGE_16_9.jpg",
                        "width": 205,
                        "height": 115,
                        "fallback": false
                      },
                      {
                        "ratio": "3_2",
                        "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_TABLET_LANDSCAPE_3_2.jpg",
                        "width": 1024,
                        "height": 683,
                        "fallback": false
                      },
                      {
                        "ratio": "4_3",
                        "url": "https://s1.ticketm.net/dam/a/f84/2dae4d33-c1ed-4fd7-9577-a17fedb5ef84_289191_CUSTOM.jpg",
                        "width": 305,
                        "height": 225,
                        "fallback": false
                      }
                    ],
                    "classifications": [
                      {
                        "primary": true,
                        "segment": {
                          "id": "KZFzniwnSyZfZ7v7na",
                          "name": "Arts & Theatre"
                        },
                        "genre": {
                          "id": "KnvZfZ7vAe1",
                          "name": "Comedy"
                        },
                        "subGenre": {
                          "id": "KZazBEonSMnZfZ7vF17",
                          "name": "Comedy"
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
                      "tmr": 5,
                      "ticketmaster": 5,
                      "_filtered": 0
                    },
                    "_links": {
                      "self": {
                        "href": "/discovery/v2/attractions/K8vZ917uzAf?locale=en-us"
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
            "href": "/discovery/v2/events.json?keyword=cinema&page=0&size=20"
          },
          "prev": {
            "href": "/discovery/v2/events.json?keyword=cinema&page=0&size=20"
          },
          "self": {
            "href": "/discovery/v2/events.json?page=1&keyword=cinema"
          },
          "next": {
            "href": "/discovery/v2/events.json?keyword=cinema&page=2&size=20"
          },
          "last": {
            "href": "/discovery/v2/events.json?keyword=cinema&page=10&size=20"
          }
        },
        "page": {
          "size": 20,
          "totalElements": 213,
          "totalPages": 11,
          "number": 1
        }
      }
    function mountComponent() {
        return shallowMount(Events,{
            global : {
                mocks : {
                    $store : {
                        state : {eventList : mockResponse["_embedded"].events},
                        dispatch : dispatchMock
                    }
                }
            }
        })
    }


    // if the component is not found this will return false, and test will fail
    it('component exists check', () => { 
        const wrapper=mountComponent()
        expect(wrapper.exists()).toBeTruthy();
    })

    it("event count check", () => {
        const wrapper = mountComponent()
        expect(wrapper.find("th").length).toEqual(mockResponse.length)
    })

    it("event detail button count check", () => {
        const wrapper = mountComponent()
        expect(wrapper.find(".event-detail-button").length).toEqual(mockResponse.length)
    })

    it("sortByKey button click check", async () => {
        const wrapper = mountComponent()
        let sortButton = wrapper.find("#sort-button")
        sortButton.trigger('click')
        await wrapper.vm.$nextTick()
        expect(dispatchMock).toHaveBeenCalledWith('sortByKey', {
          sortKey: "name"
      })
      })
})
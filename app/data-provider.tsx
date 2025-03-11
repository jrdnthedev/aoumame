"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface DataContextType {
    photos: any[];
}
interface DataProviderProps {
    children: React.ReactNode;
}
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const DataContext = createContext<DataContextType | null>(null);
export function DataProvider({ children }: DataProviderProps) {
    const [photos, setPhotos] = useState<any[]>([]);

    useEffect(() => {
        try {
            async function fetchData() {
                // const data = await fetch(`https://api.unsplash.com/photos/?client_id=${API_KEY}`);
                // const photos = await data.json();
                const photos = [
                    {
                        "id": "pnmaLfF0U6w",
                        "slug": "a-person-putting-a-card-into-a-christmas-tree-pnmaLfF0U6w",
                        "alternative_slugs": {
                            "en": "a-person-putting-a-card-into-a-christmas-tree-pnmaLfF0U6w",
                            "es": "una-persona-poniendo-una-tarjeta-en-un-arbol-de-navidad-pnmaLfF0U6w",
                            "ja": "クリスマスツリーにカードを入れる人-pnmaLfF0U6w",
                            "fr": "une-personne-qui-met-une-carte-dans-un-arbre-de-noel-pnmaLfF0U6w",
                            "it": "una-persona-che-mette-una-carta-in-un-albero-di-natale-pnmaLfF0U6w",
                            "ko": "크리스마스-트리에-카드를-넣는-사람-pnmaLfF0U6w",
                            "de": "eine-person-die-eine-karte-in-einen-weihnachtsbaum-steckt-pnmaLfF0U6w",
                            "pt": "uma-pessoa-colocando-um-cartao-em-uma-arvore-de-natal-pnmaLfF0U6w"
                        },
                        "created_at": "2024-12-06T17:35:45Z",
                        "updated_at": "2025-03-10T21:58:17Z",
                        "promoted_at": null,
                        "width": 6192,
                        "height": 4128,
                        "color": "#c0c0c0",
                        "blur_hash": "LQD]k|4nWB%3~qITxuxuE1s:%Moz",
                        "description": "A festive display of a SumUp card reader with a green card and walnuts, showcasing easy payment solutions during the Christmas season.",
                        "alt_description": "A person putting a card into a christmas tree",
                        "breadcrumbs": [],
                        "urls": {
                            "raw": "https://images.unsplash.com/photo-1733506312514-267f8134208a?ixid=M3w3MjAzMzh8MXwxfGFsbHwxfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3",
                            "full": "https://images.unsplash.com/photo-1733506312514-267f8134208a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAzMzh8MXwxfGFsbHwxfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=85",
                            "regular": "https://images.unsplash.com/photo-1733506312514-267f8134208a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MXwxfGFsbHwxfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=1080",
                            "small": "https://images.unsplash.com/photo-1733506312514-267f8134208a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MXwxfGFsbHwxfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=400",
                            "thumb": "https://images.unsplash.com/photo-1733506312514-267f8134208a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MXwxfGFsbHwxfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=200",
                            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1733506312514-267f8134208a"
                        },
                        "links": {
                            "self": "https://api.unsplash.com/photos/a-person-putting-a-card-into-a-christmas-tree-pnmaLfF0U6w",
                            "html": "https://unsplash.com/photos/a-person-putting-a-card-into-a-christmas-tree-pnmaLfF0U6w",
                            "download": "https://unsplash.com/photos/pnmaLfF0U6w/download?ixid=M3w3MjAzMzh8MXwxfGFsbHwxfHx8fHx8fHwxNzQxNjQ5MTM0fA",
                            "download_location": "https://api.unsplash.com/photos/pnmaLfF0U6w/download?ixid=M3w3MjAzMzh8MXwxfGFsbHwxfHx8fHx8fHwxNzQxNjQ5MTM0fA"
                        },
                        "likes": 0,
                        "liked_by_user": false,
                        "current_user_collections": [],
                        "sponsorship": {
                            "impression_urls": [],
                            "tagline": "A better way to get paid",
                            "tagline_url": "https://www.sumup.com/",
                            "sponsor": {
                                "id": "hHagXXIc3vU",
                                "updated_at": "2025-03-10T17:15:25Z",
                                "username": "sumup",
                                "name": "SumUp",
                                "first_name": "SumUp",
                                "last_name": null,
                                "twitter_username": null,
                                "portfolio_url": "https://www.sumup.com/",
                                "bio": "Developing tools & technology to help business owners around the world thrive.",
                                "location": null,
                                "links": {
                                    "self": "https://api.unsplash.com/users/sumup",
                                    "html": "https://unsplash.com/@sumup",
                                    "photos": "https://api.unsplash.com/users/sumup/photos",
                                    "likes": "https://api.unsplash.com/users/sumup/likes",
                                    "portfolio": "https://api.unsplash.com/users/sumup/portfolio",
                                    "following": "https://api.unsplash.com/users/sumup/following",
                                    "followers": "https://api.unsplash.com/users/sumup/followers"
                                },
                                "profile_image": {
                                    "small": "https://images.unsplash.com/profile-1725878289869-4e679a729355image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                    "medium": "https://images.unsplash.com/profile-1725878289869-4e679a729355image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                    "large": "https://images.unsplash.com/profile-1725878289869-4e679a729355image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                                },
                                "instagram_username": "sumup",
                                "total_collections": 6,
                                "total_likes": 0,
                                "total_photos": 154,
                                "total_promoted_photos": 3,
                                "total_illustrations": 0,
                                "total_promoted_illustrations": 0,
                                "accepted_tos": true,
                                "for_hire": false,
                                "social": {
                                    "instagram_username": "sumup",
                                    "portfolio_url": "https://www.sumup.com/",
                                    "twitter_username": null,
                                    "paypal_email": null
                                }
                            }
                        },
                        "topic_submissions": {
                            "current-events": {
                                "status": "rejected"
                            }
                        },
                        "asset_type": "photo",
                        "user": {
                            "id": "hHagXXIc3vU",
                            "updated_at": "2025-03-10T17:15:25Z",
                            "username": "sumup",
                            "name": "SumUp",
                            "first_name": "SumUp",
                            "last_name": null,
                            "twitter_username": null,
                            "portfolio_url": "https://www.sumup.com/",
                            "bio": "Developing tools & technology to help business owners around the world thrive.",
                            "location": null,
                            "links": {
                                "self": "https://api.unsplash.com/users/sumup",
                                "html": "https://unsplash.com/@sumup",
                                "photos": "https://api.unsplash.com/users/sumup/photos",
                                "likes": "https://api.unsplash.com/users/sumup/likes",
                                "portfolio": "https://api.unsplash.com/users/sumup/portfolio",
                                "following": "https://api.unsplash.com/users/sumup/following",
                                "followers": "https://api.unsplash.com/users/sumup/followers"
                            },
                            "profile_image": {
                                "small": "https://images.unsplash.com/profile-1725878289869-4e679a729355image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                "medium": "https://images.unsplash.com/profile-1725878289869-4e679a729355image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                "large": "https://images.unsplash.com/profile-1725878289869-4e679a729355image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                            },
                            "instagram_username": "sumup",
                            "total_collections": 6,
                            "total_likes": 0,
                            "total_photos": 154,
                            "total_promoted_photos": 3,
                            "total_illustrations": 0,
                            "total_promoted_illustrations": 0,
                            "accepted_tos": true,
                            "for_hire": false,
                            "social": {
                                "instagram_username": "sumup",
                                "portfolio_url": "https://www.sumup.com/",
                                "twitter_username": null,
                                "paypal_email": null
                            }
                        }
                    },
                    {
                        "id": "cPJFLabXnBo",
                        "slug": "person-walks-alone-in-a-vast-white-desert-cPJFLabXnBo",
                        "alternative_slugs": {
                            "en": "person-walks-alone-in-a-vast-white-desert-cPJFLabXnBo",
                            "es": "la-persona-camina-sola-en-un-vasto-desierto-blanco-cPJFLabXnBo",
                            "ja": "人は広大な白い砂漠を一人で歩きます-cPJFLabXnBo",
                            "fr": "la-personne-marche-seule-dans-un-vaste-desert-blanc-cPJFLabXnBo",
                            "it": "la-persona-cammina-da-sola-in-un-vasto-deserto-bianco-cPJFLabXnBo",
                            "ko": "사람은-광활하고-하얀-사막을-혼자-걷고-있습니다-cPJFLabXnBo",
                            "de": "der-mensch-geht-alleine-in-einer-weiten-weissen-wuste-cPJFLabXnBo",
                            "pt": "a-pessoa-caminha-sozinha-em-um-vasto-deserto-branco-cPJFLabXnBo"
                        },
                        "created_at": "2025-03-07T08:04:46Z",
                        "updated_at": "2025-03-10T21:45:43Z",
                        "promoted_at": null,
                        "width": 7496,
                        "height": 9370,
                        "color": "#8ca6a6",
                        "blur_hash": "LkLqtqWBRjkB~qofWBj[xuWCayay",
                        "description": null,
                        "alt_description": "Person walks alone in a vast, white desert.",
                        "breadcrumbs": [],
                        "urls": {
                            "raw": "https://images.unsplash.com/photo-1741334632363-58022899ce91?ixid=M3w3MjAzMzh8MHwxfGFsbHwyfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3",
                            "full": "https://images.unsplash.com/photo-1741334632363-58022899ce91?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHwyfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=85",
                            "regular": "https://images.unsplash.com/photo-1741334632363-58022899ce91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHwyfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=1080",
                            "small": "https://images.unsplash.com/photo-1741334632363-58022899ce91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHwyfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=400",
                            "thumb": "https://images.unsplash.com/photo-1741334632363-58022899ce91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHwyfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=200",
                            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1741334632363-58022899ce91"
                        },
                        "links": {
                            "self": "https://api.unsplash.com/photos/person-walks-alone-in-a-vast-white-desert-cPJFLabXnBo",
                            "html": "https://unsplash.com/photos/person-walks-alone-in-a-vast-white-desert-cPJFLabXnBo",
                            "download": "https://unsplash.com/photos/cPJFLabXnBo/download?ixid=M3w3MjAzMzh8MHwxfGFsbHwyfHx8fHx8fHwxNzQxNjQ5MTM0fA",
                            "download_location": "https://api.unsplash.com/photos/cPJFLabXnBo/download?ixid=M3w3MjAzMzh8MHwxfGFsbHwyfHx8fHx8fHwxNzQxNjQ5MTM0fA"
                        },
                        "likes": 128,
                        "liked_by_user": false,
                        "current_user_collections": [],
                        "sponsorship": null,
                        "topic_submissions": {

                        },
                        "asset_type": "photo",
                        "user": {
                            "id": "dHh-ueR8uxo",
                            "updated_at": "2025-03-10T12:34:27Z",
                            "username": "slavajamm",
                            "name": "Slava Jamm",
                            "first_name": "Slava",
                            "last_name": "Jamm",
                            "twitter_username": null,
                            "portfolio_url": "https://www.youtube.com/@LASLAVA",
                            "bio": "Filmmaker | Modern Piano Composer | Front End Developer",
                            "location": "Los Angeles",
                            "links": {
                                "self": "https://api.unsplash.com/users/slavajamm",
                                "html": "https://unsplash.com/@slavajamm",
                                "photos": "https://api.unsplash.com/users/slavajamm/photos",
                                "likes": "https://api.unsplash.com/users/slavajamm/likes",
                                "portfolio": "https://api.unsplash.com/users/slavajamm/portfolio",
                                "following": "https://api.unsplash.com/users/slavajamm/following",
                                "followers": "https://api.unsplash.com/users/slavajamm/followers"
                            },
                            "profile_image": {
                                "small": "https://images.unsplash.com/profile-1643975412463-40e360f6f16bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                "medium": "https://images.unsplash.com/profile-1643975412463-40e360f6f16bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                "large": "https://images.unsplash.com/profile-1643975412463-40e360f6f16bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                            },
                            "instagram_username": "slavajamm",
                            "total_collections": 0,
                            "total_likes": 0,
                            "total_photos": 48,
                            "total_promoted_photos": 21,
                            "total_illustrations": 0,
                            "total_promoted_illustrations": 0,
                            "accepted_tos": true,
                            "for_hire": true,
                            "social": {
                                "instagram_username": "slavajamm",
                                "portfolio_url": "https://www.youtube.com/@LASLAVA",
                                "twitter_username": null,
                                "paypal_email": null
                            }
                        }
                    },
                    {
                        "id": "7xZRtsHnEeo",
                        "slug": "the-shadow-of-a-tree-on-the-side-of-a-building-7xZRtsHnEeo",
                        "alternative_slugs": {
                            "en": "the-shadow-of-a-tree-on-the-side-of-a-building-7xZRtsHnEeo",
                            "es": "la-sombra-de-un-arbol-en-el-costado-de-un-edificio-7xZRtsHnEeo",
                            "ja": "建物の側面にある木の影-7xZRtsHnEeo",
                            "fr": "lombre-dun-arbre-sur-le-cote-dun-batiment-7xZRtsHnEeo",
                            "it": "lombra-di-un-albero-sul-lato-di-un-edificio-7xZRtsHnEeo",
                            "ko": "건물-측면에-있는-나무의-그림자-7xZRtsHnEeo",
                            "de": "der-schatten-eines-baumes-an-der-seite-eines-gebaudes-7xZRtsHnEeo",
                            "pt": "a-sombra-de-uma-arvore-ao-lado-de-um-edificio-7xZRtsHnEeo"
                        },
                        "created_at": "2024-08-23T22:36:38Z",
                        "updated_at": "2025-03-10T22:21:11Z",
                        "promoted_at": null,
                        "width": 3294,
                        "height": 3294,
                        "color": "#f3f3f3",
                        "blur_hash": "LWGSAb~qo#bbM{D%M|og4nD%t6xa",
                        "description": null,
                        "alt_description": "The shadow of a tree on the side of a building",
                        "breadcrumbs": [],
                        "urls": {
                            "raw": "https://images.unsplash.com/photo-1724452588657-9ab0f8865a2e?ixid=M3w3MjAzMzh8MHwxfGFsbHwzfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3",
                            "full": "https://images.unsplash.com/photo-1724452588657-9ab0f8865a2e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHwzfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=85",
                            "regular": "https://images.unsplash.com/photo-1724452588657-9ab0f8865a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHwzfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=1080",
                            "small": "https://images.unsplash.com/photo-1724452588657-9ab0f8865a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHwzfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=400",
                            "thumb": "https://images.unsplash.com/photo-1724452588657-9ab0f8865a2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHwzfHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=200",
                            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1724452588657-9ab0f8865a2e"
                        },
                        "links": {
                            "self": "https://api.unsplash.com/photos/the-shadow-of-a-tree-on-the-side-of-a-building-7xZRtsHnEeo",
                            "html": "https://unsplash.com/photos/the-shadow-of-a-tree-on-the-side-of-a-building-7xZRtsHnEeo",
                            "download": "https://unsplash.com/photos/7xZRtsHnEeo/download?ixid=M3w3MjAzMzh8MHwxfGFsbHwzfHx8fHx8fHwxNzQxNjQ5MTM0fA",
                            "download_location": "https://api.unsplash.com/photos/7xZRtsHnEeo/download?ixid=M3w3MjAzMzh8MHwxfGFsbHwzfHx8fHx8fHwxNzQxNjQ5MTM0fA"
                        },
                        "likes": 79,
                        "liked_by_user": false,
                        "current_user_collections": [],
                        "sponsorship": null,
                        "topic_submissions": {
                            "film": {
                                "status": "approved",
                                "approved_on": "2024-08-24T07:36:48Z"
                            }
                        },
                        "asset_type": "photo",
                        "user": {
                            "id": "TPCcwPbQzmY",
                            "updated_at": "2025-03-08T08:57:57Z",
                            "username": "suzm4film",
                            "name": "szm 4",
                            "first_name": "szm",
                            "last_name": "4",
                            "twitter_username": null,
                            "portfolio_url": null,
                            "bio": null,
                            "location": "Japan",
                            "links": {
                                "self": "https://api.unsplash.com/users/suzm4film",
                                "html": "https://unsplash.com/@suzm4film",
                                "photos": "https://api.unsplash.com/users/suzm4film/photos",
                                "likes": "https://api.unsplash.com/users/suzm4film/likes",
                                "portfolio": "https://api.unsplash.com/users/suzm4film/portfolio",
                                "following": "https://api.unsplash.com/users/suzm4film/following",
                                "followers": "https://api.unsplash.com/users/suzm4film/followers"
                            },
                            "profile_image": {
                                "small": "https://images.unsplash.com/profile-1632890829763-5c518f873dee?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                "medium": "https://images.unsplash.com/profile-1632890829763-5c518f873dee?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                "large": "https://images.unsplash.com/profile-1632890829763-5c518f873dee?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                            },
                            "instagram_username": null,
                            "total_collections": 0,
                            "total_likes": 0,
                            "total_photos": 226,
                            "total_promoted_photos": 25,
                            "total_illustrations": 0,
                            "total_promoted_illustrations": 0,
                            "accepted_tos": true,
                            "for_hire": false,
                            "social": {
                                "instagram_username": null,
                                "portfolio_url": null,
                                "twitter_username": null,
                                "paypal_email": null
                            }
                        }
                    },
                    {
                        "id": "twJQwmKRoCQ",
                        "slug": "an-aerial-view-of-a-beach-and-the-ocean-twJQwmKRoCQ",
                        "alternative_slugs": {
                            "en": "an-aerial-view-of-a-beach-and-the-ocean-twJQwmKRoCQ",
                            "es": "una-vista-aerea-de-una-playa-y-el-oceano-twJQwmKRoCQ",
                            "ja": "ビーチと海の空中写真-twJQwmKRoCQ",
                            "fr": "une-vue-aerienne-dune-plage-et-de-locean-twJQwmKRoCQ",
                            "it": "una-veduta-aerea-di-una-spiaggia-e-delloceano-twJQwmKRoCQ",
                            "ko": "해변과-바다의-공중-전망-twJQwmKRoCQ",
                            "de": "eine-luftaufnahme-eines-strandes-und-des-ozeans-twJQwmKRoCQ",
                            "pt": "vista-aerea-de-uma-praia-e-do-oceano-twJQwmKRoCQ"
                        },
                        "created_at": "2024-08-23T01:31:26Z",
                        "updated_at": "2025-03-10T21:51:11Z",
                        "promoted_at": "2025-03-10T00:20:00Z",
                        "width": 4000,
                        "height": 6000,
                        "color": "#d9d9d9",
                        "blur_hash": "L;KnoDtRWBay~qWBWBofRjRjj[j@",
                        "description": null,
                        "alt_description": "An aerial view of a beach and the ocean",
                        "breadcrumbs": [],
                        "urls": {
                            "raw": "https://images.unsplash.com/photo-1724376682600-6540c4570ac8?ixid=M3w3MjAzMzh8MHwxfGFsbHw0fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3",
                            "full": "https://images.unsplash.com/photo-1724376682600-6540c4570ac8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw0fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=85",
                            "regular": "https://images.unsplash.com/photo-1724376682600-6540c4570ac8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw0fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=1080",
                            "small": "https://images.unsplash.com/photo-1724376682600-6540c4570ac8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw0fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=400",
                            "thumb": "https://images.unsplash.com/photo-1724376682600-6540c4570ac8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw0fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=200",
                            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1724376682600-6540c4570ac8"
                        },
                        "links": {
                            "self": "https://api.unsplash.com/photos/an-aerial-view-of-a-beach-and-the-ocean-twJQwmKRoCQ",
                            "html": "https://unsplash.com/photos/an-aerial-view-of-a-beach-and-the-ocean-twJQwmKRoCQ",
                            "download": "https://unsplash.com/photos/twJQwmKRoCQ/download?ixid=M3w3MjAzMzh8MHwxfGFsbHw0fHx8fHx8fHwxNzQxNjQ5MTM0fA",
                            "download_location": "https://api.unsplash.com/photos/twJQwmKRoCQ/download?ixid=M3w3MjAzMzh8MHwxfGFsbHw0fHx8fHx8fHwxNzQxNjQ5MTM0fA"
                        },
                        "likes": 125,
                        "liked_by_user": false,
                        "current_user_collections": [],
                        "sponsorship": null,
                        "topic_submissions": {
                            "travel": {
                                "status": "approved",
                                "approved_on": "2025-03-08T08:57:43Z"
                            }
                        },
                        "asset_type": "photo",
                        "user": {
                            "id": "9gnLwReK6qU",
                            "updated_at": "2025-03-08T08:57:35Z",
                            "username": "whoisflo",
                            "name": "Florian Hahn",
                            "first_name": "Florian",
                            "last_name": "Hahn",
                            "twitter_username": "whoisflo_",
                            "portfolio_url": "http://www.whoisflo.com",
                            "bio": "http://www.whoisflo.com",
                            "location": "Germany",
                            "links": {
                                "self": "https://api.unsplash.com/users/whoisflo",
                                "html": "https://unsplash.com/@whoisflo",
                                "photos": "https://api.unsplash.com/users/whoisflo/photos",
                                "likes": "https://api.unsplash.com/users/whoisflo/likes",
                                "portfolio": "https://api.unsplash.com/users/whoisflo/portfolio",
                                "following": "https://api.unsplash.com/users/whoisflo/following",
                                "followers": "https://api.unsplash.com/users/whoisflo/followers"
                            },
                            "profile_image": {
                                "small": "https://images.unsplash.com/profile-1549361100918-c22e3edb248b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                "medium": "https://images.unsplash.com/profile-1549361100918-c22e3edb248b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                "large": "https://images.unsplash.com/profile-1549361100918-c22e3edb248b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                            },
                            "instagram_username": "whoisflo_",
                            "total_collections": 0,
                            "total_likes": 218,
                            "total_photos": 205,
                            "total_promoted_photos": 24,
                            "total_illustrations": 0,
                            "total_promoted_illustrations": 0,
                            "accepted_tos": true,
                            "for_hire": false,
                            "social": {
                                "instagram_username": "whoisflo_",
                                "portfolio_url": "http://www.whoisflo.com",
                                "twitter_username": "whoisflo_",
                                "paypal_email": null
                            }
                        }
                    },
                    {
                        "id": "PgGpVo0gHY0",
                        "slug": "a-person-standing-on-a-beach-next-to-the-ocean-PgGpVo0gHY0",
                        "alternative_slugs": {
                            "en": "a-person-standing-on-a-beach-next-to-the-ocean-PgGpVo0gHY0",
                            "es": "una-persona-de-pie-en-una-playa-junto-al-oceano-PgGpVo0gHY0",
                            "ja": "海辺のビーチに立つ人-PgGpVo0gHY0",
                            "fr": "une-personne-debout-sur-une-plage-a-cote-de-locean-PgGpVo0gHY0",
                            "it": "una-persona-in-piedi-su-una-spiaggia-vicino-alloceano-PgGpVo0gHY0",
                            "ko": "바다-옆-해변에-서-있는-사람-PgGpVo0gHY0",
                            "de": "eine-person-die-an-einem-strand-am-meer-steht-PgGpVo0gHY0",
                            "pt": "uma-pessoa-em-pe-em-uma-praia-ao-lado-do-oceano-PgGpVo0gHY0"
                        },
                        "created_at": "2024-10-10T00:20:37Z",
                        "updated_at": "2025-03-10T23:13:58Z",
                        "promoted_at": null,
                        "width": 4160,
                        "height": 6240,
                        "color": "#c0c0a6",
                        "blur_hash": "LlGbq-f8NGWB~oazayj[xZayofoe",
                        "description": null,
                        "alt_description": "A person standing on a beach next to the ocean",
                        "breadcrumbs": [],
                        "urls": {
                            "raw": "https://images.unsplash.com/photo-1728519616666-d092572850f9?ixid=M3w3MjAzMzh8MHwxfGFsbHw1fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3",
                            "full": "https://images.unsplash.com/photo-1728519616666-d092572850f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw1fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=85",
                            "regular": "https://images.unsplash.com/photo-1728519616666-d092572850f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw1fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=1080",
                            "small": "https://images.unsplash.com/photo-1728519616666-d092572850f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw1fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=400",
                            "thumb": "https://images.unsplash.com/photo-1728519616666-d092572850f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw1fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=200",
                            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1728519616666-d092572850f9"
                        },
                        "links": {
                            "self": "https://api.unsplash.com/photos/a-person-standing-on-a-beach-next-to-the-ocean-PgGpVo0gHY0",
                            "html": "https://unsplash.com/photos/a-person-standing-on-a-beach-next-to-the-ocean-PgGpVo0gHY0",
                            "download": "https://unsplash.com/photos/PgGpVo0gHY0/download?ixid=M3w3MjAzMzh8MHwxfGFsbHw1fHx8fHx8fHwxNzQxNjQ5MTM0fA",
                            "download_location": "https://api.unsplash.com/photos/PgGpVo0gHY0/download?ixid=M3w3MjAzMzh8MHwxfGFsbHw1fHx8fHx8fHwxNzQxNjQ5MTM0fA"
                        },
                        "likes": 76,
                        "liked_by_user": false,
                        "current_user_collections": [],
                        "sponsorship": null,
                        "topic_submissions": {

                        },
                        "asset_type": "photo",
                        "user": {
                            "id": "5nWio-aFX3c",
                            "updated_at": "2025-03-08T08:56:17Z",
                            "username": "bundo",
                            "name": "Bundo Kim",
                            "first_name": "Bundo",
                            "last_name": "Kim",
                            "twitter_username": null,
                            "portfolio_url": "http://instagram.com/j__kyung/",
                            "bio": "Hope you have a nice photo!",
                            "location": "Seoul, Korea",
                            "links": {
                                "self": "https://api.unsplash.com/users/bundo",
                                "html": "https://unsplash.com/@bundo",
                                "photos": "https://api.unsplash.com/users/bundo/photos",
                                "likes": "https://api.unsplash.com/users/bundo/likes",
                                "portfolio": "https://api.unsplash.com/users/bundo/portfolio",
                                "following": "https://api.unsplash.com/users/bundo/following",
                                "followers": "https://api.unsplash.com/users/bundo/followers"
                            },
                            "profile_image": {
                                "small": "https://images.unsplash.com/profile-1522243949591-75c7f5ac1ffb?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                "medium": "https://images.unsplash.com/profile-1522243949591-75c7f5ac1ffb?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                "large": "https://images.unsplash.com/profile-1522243949591-75c7f5ac1ffb?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                            },
                            "instagram_username": "j__kyung",
                            "total_collections": 6,
                            "total_likes": 27,
                            "total_photos": 1375,
                            "total_promoted_photos": 211,
                            "total_illustrations": 0,
                            "total_promoted_illustrations": 0,
                            "accepted_tos": true,
                            "for_hire": false,
                            "social": {
                                "instagram_username": "j__kyung",
                                "portfolio_url": "http://instagram.com/j__kyung/",
                                "twitter_username": null,
                                "paypal_email": null
                            }
                        }
                    },
                    {
                        "id": "aZyP_xZUpVk",
                        "slug": "a-computer-generated-image-of-a-flower-on-a-pink-background-aZyP_xZUpVk",
                        "alternative_slugs": {
                            "en": "a-computer-generated-image-of-a-flower-on-a-pink-background-aZyP_xZUpVk",
                            "es": "una-imagen-generada-por-computadora-de-una-flor-sobre-un-fondo-rosa-aZyP_xZUpVk",
                            "ja": "ピンクの背景に花のコンピューター生成画像-aZyP_xZUpVk",
                            "fr": "une-image-generee-par-ordinateur-dune-fleur-sur-un-fond-rose-aZyP_xZUpVk",
                            "it": "unimmagine-generata-al-computer-di-un-fiore-su-sfondo-rosa-aZyP_xZUpVk",
                            "ko": "분홍색-배경에-있는-꽃의-컴퓨터-생성-이미지-aZyP_xZUpVk",
                            "de": "ein-computergeneriertes-bild-einer-blume-auf-einem-rosa-hintergrund-aZyP_xZUpVk",
                            "pt": "uma-imagem-gerada-por-computador-de-uma-flor-em-um-fundo-rosa-aZyP_xZUpVk"
                        },
                        "created_at": "2024-12-31T03:26:11Z",
                        "updated_at": "2025-03-10T23:13:57Z",
                        "promoted_at": null,
                        "width": 9600,
                        "height": 5400,
                        "color": "#f3d9d9",
                        "blur_hash": "LyKw^GaJ?HjF~paeWCa|%2fRM{WB",
                        "description": null,
                        "alt_description": "A computer generated image of a flower on a pink background",
                        "breadcrumbs": [],
                        "urls": {
                            "raw": "https://images.unsplash.com/photo-1735615479436-6a697c3e0d48?ixid=M3w3MjAzMzh8MHwxfGFsbHw2fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3",
                            "full": "https://images.unsplash.com/photo-1735615479436-6a697c3e0d48?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw2fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=85",
                            "regular": "https://images.unsplash.com/photo-1735615479436-6a697c3e0d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw2fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=1080",
                            "small": "https://images.unsplash.com/photo-1735615479436-6a697c3e0d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw2fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=400",
                            "thumb": "https://images.unsplash.com/photo-1735615479436-6a697c3e0d48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw2fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=200",
                            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1735615479436-6a697c3e0d48"
                        },
                        "links": {
                            "self": "https://api.unsplash.com/photos/a-computer-generated-image-of-a-flower-on-a-pink-background-aZyP_xZUpVk",
                            "html": "https://unsplash.com/photos/a-computer-generated-image-of-a-flower-on-a-pink-background-aZyP_xZUpVk",
                            "download": "https://unsplash.com/photos/aZyP_xZUpVk/download?ixid=M3w3MjAzMzh8MHwxfGFsbHw2fHx8fHx8fHwxNzQxNjQ5MTM0fA",
                            "download_location": "https://api.unsplash.com/photos/aZyP_xZUpVk/download?ixid=M3w3MjAzMzh8MHwxfGFsbHw2fHx8fHx8fHwxNzQxNjQ5MTM0fA"
                        },
                        "likes": 62,
                        "liked_by_user": false,
                        "current_user_collections": [],
                        "sponsorship": null,
                        "topic_submissions": {
                            "wallpapers": {
                                "status": "approved",
                                "approved_on": "2025-03-08T08:54:56Z"
                            }
                        },
                        "asset_type": "photo",
                        "user": {
                            "id": "QIwoINLgpsA",
                            "updated_at": "2025-03-10T16:35:21Z",
                            "username": "a_chosensoul",
                            "name": "A Chosen Soul",
                            "first_name": "A Chosen Soul",
                            "last_name": null,
                            "twitter_username": "Jigar04022000",
                            "portfolio_url": "https://panchaljigar1000.wixsite.com/jigar-panchal",
                            "bio": "My soul's creation",
                            "location": "Surat, Gujarat, India",
                            "links": {
                                "self": "https://api.unsplash.com/users/a_chosensoul",
                                "html": "https://unsplash.com/@a_chosensoul",
                                "photos": "https://api.unsplash.com/users/a_chosensoul/photos",
                                "likes": "https://api.unsplash.com/users/a_chosensoul/likes",
                                "portfolio": "https://api.unsplash.com/users/a_chosensoul/portfolio",
                                "following": "https://api.unsplash.com/users/a_chosensoul/following",
                                "followers": "https://api.unsplash.com/users/a_chosensoul/followers"
                            },
                            "profile_image": {
                                "small": "https://images.unsplash.com/profile-1740062123197-5ab856a9238fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                "medium": "https://images.unsplash.com/profile-1740062123197-5ab856a9238fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                "large": "https://images.unsplash.com/profile-1740062123197-5ab856a9238fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                            },
                            "instagram_username": "a__chosensoul",
                            "total_collections": 2,
                            "total_likes": 1339,
                            "total_photos": 1200,
                            "total_promoted_photos": 165,
                            "total_illustrations": 0,
                            "total_promoted_illustrations": 0,
                            "accepted_tos": true,
                            "for_hire": true,
                            "social": {
                                "instagram_username": "a__chosensoul",
                                "portfolio_url": "https://panchaljigar1000.wixsite.com/jigar-panchal",
                                "twitter_username": "Jigar04022000",
                                "paypal_email": null
                            }
                        }
                    },
                    {
                        "id": "T5h-RzUFN04",
                        "slug": "a-blurry-photo-of-a-wave-coming-in-to-the-shore-T5h-RzUFN04",
                        "alternative_slugs": {
                            "en": "a-blurry-photo-of-a-wave-coming-in-to-the-shore-T5h-RzUFN04",
                            "es": "una-foto-borrosa-de-una-ola-llegando-a-la-orilla-T5h-RzUFN04",
                            "ja": "岸に押し寄せる波のぼやけた写真-T5h-RzUFN04",
                            "fr": "une-photo-floue-dune-vague-arrivant-sur-le-rivage-T5h-RzUFN04",
                            "it": "una-foto-sfocata-di-unonda-che-arriva-a-riva-T5h-RzUFN04",
                            "ko": "해안으로-들어오는-파도의-흐릿한-사진-T5h-RzUFN04",
                            "de": "ein-verschwommenes-foto-einer-welle-die-auf-das-ufer-zukommt-T5h-RzUFN04",
                            "pt": "uma-foto-borrada-de-uma-onda-chegando-a-costa-T5h-RzUFN04"
                        },
                        "created_at": "2025-01-16T21:44:45Z",
                        "updated_at": "2025-03-10T23:06:25Z",
                        "promoted_at": null,
                        "width": 4160,
                        "height": 6240,
                        "color": "#d9d9d9",
                        "blur_hash": "LrKL8ZofRjj[_NfRj[j[NHj[a|j[",
                        "description": null,
                        "alt_description": "A blurry photo of a wave coming in to the shore",
                        "breadcrumbs": [],
                        "urls": {
                            "raw": "https://images.unsplash.com/photo-1737063668547-6c908bbc9858?ixid=M3w3MjAzMzh8MHwxfGFsbHw3fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3",
                            "full": "https://images.unsplash.com/photo-1737063668547-6c908bbc9858?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw3fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=85",
                            "regular": "https://images.unsplash.com/photo-1737063668547-6c908bbc9858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw3fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=1080",
                            "small": "https://images.unsplash.com/photo-1737063668547-6c908bbc9858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw3fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=400",
                            "thumb": "https://images.unsplash.com/photo-1737063668547-6c908bbc9858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw3fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=200",
                            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1737063668547-6c908bbc9858"
                        },
                        "links": {
                            "self": "https://api.unsplash.com/photos/a-blurry-photo-of-a-wave-coming-in-to-the-shore-T5h-RzUFN04",
                            "html": "https://unsplash.com/photos/a-blurry-photo-of-a-wave-coming-in-to-the-shore-T5h-RzUFN04",
                            "download": "https://unsplash.com/photos/T5h-RzUFN04/download?ixid=M3w3MjAzMzh8MHwxfGFsbHw3fHx8fHx8fHwxNzQxNjQ5MTM0fA",
                            "download_location": "https://api.unsplash.com/photos/T5h-RzUFN04/download?ixid=M3w3MjAzMzh8MHwxfGFsbHw3fHx8fHx8fHwxNzQxNjQ5MTM0fA"
                        },
                        "likes": 227,
                        "liked_by_user": false,
                        "current_user_collections": [],
                        "sponsorship": null,
                        "topic_submissions": {
                            "nature": {
                                "status": "approved",
                                "approved_on": "2025-02-17T08:26:24Z"
                            },
                            "wallpapers": {
                                "status": "approved",
                                "approved_on": "2025-01-25T09:58:37Z"
                            }
                        },
                        "asset_type": "photo",
                        "user": {
                            "id": "yon36_0axwo",
                            "updated_at": "2025-03-10T14:15:05Z",
                            "username": "alingavriliuc",
                            "name": "Alin Gavriliuc",
                            "first_name": "Alin",
                            "last_name": "Gavriliuc",
                            "twitter_username": null,
                            "portfolio_url": "https://www.instagram.com/alinskyi_/?hl=en",
                            "bio": "Passionate photographer and videographer that loves traveling the world",
                            "location": "France",
                            "links": {
                                "self": "https://api.unsplash.com/users/alingavriliuc",
                                "html": "https://unsplash.com/@alingavriliuc",
                                "photos": "https://api.unsplash.com/users/alingavriliuc/photos",
                                "likes": "https://api.unsplash.com/users/alingavriliuc/likes",
                                "portfolio": "https://api.unsplash.com/users/alingavriliuc/portfolio",
                                "following": "https://api.unsplash.com/users/alingavriliuc/following",
                                "followers": "https://api.unsplash.com/users/alingavriliuc/followers"
                            },
                            "profile_image": {
                                "small": "https://images.unsplash.com/profile-1737558537491-685aaefab098image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                "medium": "https://images.unsplash.com/profile-1737558537491-685aaefab098image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                "large": "https://images.unsplash.com/profile-1737558537491-685aaefab098image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                            },
                            "instagram_username": "alinskyi_",
                            "total_collections": 10,
                            "total_likes": 205,
                            "total_photos": 1185,
                            "total_promoted_photos": 10,
                            "total_illustrations": 0,
                            "total_promoted_illustrations": 0,
                            "accepted_tos": true,
                            "for_hire": true,
                            "social": {
                                "instagram_username": "alinskyi_",
                                "portfolio_url": "https://www.instagram.com/alinskyi_/?hl=en",
                                "twitter_username": null,
                                "paypal_email": null
                            }
                        }
                    },
                    {
                        "id": "i4qffpq18YI",
                        "slug": "a-blurry-photo-of-a-bird-flying-in-the-sky-i4qffpq18YI",
                        "alternative_slugs": {
                            "en": "a-blurry-photo-of-a-bird-flying-in-the-sky-i4qffpq18YI",
                            "es": "una-foto-borrosa-de-un-pajaro-volando-en-el-cielo-i4qffpq18YI",
                            "ja": "空を飛ぶ鳥のぼやけた写真-i4qffpq18YI",
                            "fr": "une-photo-floue-dun-oiseau-volant-dans-le-ciel-i4qffpq18YI",
                            "it": "una-foto-sfocata-di-un-uccello-che-vola-nel-cielo-i4qffpq18YI",
                            "ko": "하늘을-나는-새의-흐릿한-사진-i4qffpq18YI",
                            "de": "ein-verschwommenes-foto-eines-vogels-der-am-himmel-fliegt-i4qffpq18YI",
                            "pt": "uma-foto-borrada-de-um-passaro-voando-no-ceu-i4qffpq18YI"
                        },
                        "created_at": "2025-01-19T09:46:21Z",
                        "updated_at": "2025-03-10T23:06:35Z",
                        "promoted_at": null,
                        "width": 5461,
                        "height": 8187,
                        "color": "#d9d9d9",
                        "blur_hash": "LGNnBi55NFt7%2t7WVWU~C?Ht7WV",
                        "description": null,
                        "alt_description": "A blurry photo of a bird flying in the sky",
                        "breadcrumbs": [],
                        "urls": {
                            "raw": "https://images.unsplash.com/photo-1737279721214-e8e52ce418af?ixid=M3w3MjAzMzh8MHwxfGFsbHw4fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3",
                            "full": "https://images.unsplash.com/photo-1737279721214-e8e52ce418af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw4fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=85",
                            "regular": "https://images.unsplash.com/photo-1737279721214-e8e52ce418af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw4fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=1080",
                            "small": "https://images.unsplash.com/photo-1737279721214-e8e52ce418af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw4fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=400",
                            "thumb": "https://images.unsplash.com/photo-1737279721214-e8e52ce418af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw4fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=200",
                            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1737279721214-e8e52ce418af"
                        },
                        "links": {
                            "self": "https://api.unsplash.com/photos/a-blurry-photo-of-a-bird-flying-in-the-sky-i4qffpq18YI",
                            "html": "https://unsplash.com/photos/a-blurry-photo-of-a-bird-flying-in-the-sky-i4qffpq18YI",
                            "download": "https://unsplash.com/photos/i4qffpq18YI/download?ixid=M3w3MjAzMzh8MHwxfGFsbHw4fHx8fHx8fHwxNzQxNjQ5MTM0fA",
                            "download_location": "https://api.unsplash.com/photos/i4qffpq18YI/download?ixid=M3w3MjAzMzh8MHwxfGFsbHw4fHx8fHx8fHwxNzQxNjQ5MTM0fA"
                        },
                        "likes": 65,
                        "liked_by_user": false,
                        "current_user_collections": [],
                        "sponsorship": null,
                        "topic_submissions": {

                        },
                        "asset_type": "photo",
                        "user": {
                            "id": "IFcEhJqem0Q",
                            "updated_at": "2025-03-10T11:25:42Z",
                            "username": "anniespratt",
                            "name": "Annie Spratt",
                            "first_name": "Annie",
                            "last_name": "Spratt",
                            "twitter_username": "anniespratt",
                            "portfolio_url": "https://www.anniespratt.com",
                            "bio": "Hobbyist photographer from England, sharing my digital, film + vintage scans.",
                            "location": "New Forest National Park, UK",
                            "links": {
                                "self": "https://api.unsplash.com/users/anniespratt",
                                "html": "https://unsplash.com/@anniespratt",
                                "photos": "https://api.unsplash.com/users/anniespratt/photos",
                                "likes": "https://api.unsplash.com/users/anniespratt/likes",
                                "portfolio": "https://api.unsplash.com/users/anniespratt/portfolio",
                                "following": "https://api.unsplash.com/users/anniespratt/following",
                                "followers": "https://api.unsplash.com/users/anniespratt/followers"
                            },
                            "profile_image": {
                                "small": "https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                "medium": "https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                "large": "https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                            },
                            "instagram_username": "anniespratt",
                            "total_collections": 80,
                            "total_likes": 14518,
                            "total_photos": 27544,
                            "total_promoted_photos": 3324,
                            "total_illustrations": 32,
                            "total_promoted_illustrations": 14,
                            "accepted_tos": true,
                            "for_hire": false,
                            "social": {
                                "instagram_username": "anniespratt",
                                "portfolio_url": "https://www.anniespratt.com",
                                "twitter_username": "anniespratt",
                                "paypal_email": null
                            }
                        }
                    },
                    {
                        "id": "i3f1nfRJhfQ",
                        "slug": "a-woman-with-blonde-hair-wearing-a-gray-and-white-hat-i3f1nfRJhfQ",
                        "alternative_slugs": {
                            "en": "a-woman-with-blonde-hair-wearing-a-gray-and-white-hat-i3f1nfRJhfQ",
                            "es": "una-mujer-de-pelo-rubio-con-sombrero-gris-y-blanco-i3f1nfRJhfQ",
                            "ja": "灰色と白の帽子をかぶったブロンドの髪の女性-i3f1nfRJhfQ",
                            "fr": "une-femme-aux-cheveux-blonds-portant-un-chapeau-gris-et-blanc-i3f1nfRJhfQ",
                            "it": "una-donna-con-i-capelli-biondi-che-indossa-un-cappello-grigio-e-bianco-i3f1nfRJhfQ",
                            "ko": "회색과-흰색-모자를-쓴-금발-머리의-여성-i3f1nfRJhfQ",
                            "de": "eine-frau-mit-blonden-haaren-die-einen-grau-weissen-hut-tragt-i3f1nfRJhfQ",
                            "pt": "uma-mulher-com-cabelo-loiro-usando-um-chapeu-cinza-e-branco-i3f1nfRJhfQ"
                        },
                        "created_at": "2025-01-16T16:47:58Z",
                        "updated_at": "2025-03-10T22:00:43Z",
                        "promoted_at": null,
                        "width": 3543,
                        "height": 5315,
                        "color": "#f3f3f3",
                        "blur_hash": "LFP%R_xb?vX9NDofxvRj.TW;DhsA",
                        "description": null,
                        "alt_description": "A woman with blonde hair wearing a gray and white hat",
                        "breadcrumbs": [],
                        "urls": {
                            "raw": "https://images.unsplash.com/photo-1737044263770-9ddf6c5654c4?ixid=M3w3MjAzMzh8MHwxfGFsbHw5fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3",
                            "full": "https://images.unsplash.com/photo-1737044263770-9ddf6c5654c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw5fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=85",
                            "regular": "https://images.unsplash.com/photo-1737044263770-9ddf6c5654c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw5fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=1080",
                            "small": "https://images.unsplash.com/photo-1737044263770-9ddf6c5654c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw5fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=400",
                            "thumb": "https://images.unsplash.com/photo-1737044263770-9ddf6c5654c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHw5fHx8fHx8fHwxNzQxNjQ5MTM0fA&ixlib=rb-4.0.3&q=80&w=200",
                            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1737044263770-9ddf6c5654c4"
                        },
                        "links": {
                            "self": "https://api.unsplash.com/photos/a-woman-with-blonde-hair-wearing-a-gray-and-white-hat-i3f1nfRJhfQ",
                            "html": "https://unsplash.com/photos/a-woman-with-blonde-hair-wearing-a-gray-and-white-hat-i3f1nfRJhfQ",
                            "download": "https://unsplash.com/photos/i3f1nfRJhfQ/download?ixid=M3w3MjAzMzh8MHwxfGFsbHw5fHx8fHx8fHwxNzQxNjQ5MTM0fA",
                            "download_location": "https://api.unsplash.com/photos/i3f1nfRJhfQ/download?ixid=M3w3MjAzMzh8MHwxfGFsbHw5fHx8fHx8fHwxNzQxNjQ5MTM0fA"
                        },
                        "likes": 49,
                        "liked_by_user": false,
                        "current_user_collections": [],
                        "sponsorship": null,
                        "topic_submissions": {
                            "people": {
                                "status": "approved",
                                "approved_on": "2025-01-22T10:28:39Z"
                            }
                        },
                        "asset_type": "photo",
                        "user": {
                            "id": "lUdYcd-lsWU",
                            "updated_at": "2025-03-10T22:15:55Z",
                            "username": "marylooo",
                            "name": "Maria Kovalets",
                            "first_name": "Maria",
                            "last_name": "Kovalets",
                            "twitter_username": "maryanna2023",
                            "portfolio_url": null,
                            "bio": "in love with Italy...",
                            "location": "Italy",
                            "links": {
                                "self": "https://api.unsplash.com/users/marylooo",
                                "html": "https://unsplash.com/@marylooo",
                                "photos": "https://api.unsplash.com/users/marylooo/photos",
                                "likes": "https://api.unsplash.com/users/marylooo/likes",
                                "portfolio": "https://api.unsplash.com/users/marylooo/portfolio",
                                "following": "https://api.unsplash.com/users/marylooo/following",
                                "followers": "https://api.unsplash.com/users/marylooo/followers"
                            },
                            "profile_image": {
                                "small": "https://images.unsplash.com/profile-1736888016622-cb84173ca231image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                "medium": "https://images.unsplash.com/profile-1736888016622-cb84173ca231image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                "large": "https://images.unsplash.com/profile-1736888016622-cb84173ca231image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                            },
                            "instagram_username": "colorsofnostalgia",
                            "total_collections": 0,
                            "total_likes": 13,
                            "total_photos": 1867,
                            "total_promoted_photos": 1,
                            "total_illustrations": 0,
                            "total_promoted_illustrations": 0,
                            "accepted_tos": true,
                            "for_hire": false,
                            "social": {
                                "instagram_username": "colorsofnostalgia",
                                "portfolio_url": null,
                                "twitter_username": "maryanna2023",
                                "paypal_email": null
                            }
                        }
                    },
                    {
                        "id": "pYjCqqDEOFo",
                        "slug": "a-view-of-a-body-of-water-from-a-hill-pYjCqqDEOFo",
                        "alternative_slugs": {
                            "en": "a-view-of-a-body-of-water-from-a-hill-pYjCqqDEOFo",
                            "es": "una-vista-de-un-cuerpo-de-agua-desde-una-colina-pYjCqqDEOFo",
                            "ja": "丘から水域を眺める-pYjCqqDEOFo",
                            "fr": "une-vue-dun-plan-deau-depuis-une-colline-pYjCqqDEOFo",
                            "it": "vista-di-uno-specchio-dacqua-da-una-collina-pYjCqqDEOFo",
                            "ko": "언덕에서-바라본-수역의-모습-pYjCqqDEOFo",
                            "de": "blick-auf-ein-gewasser-von-einem-hugel-aus-pYjCqqDEOFo",
                            "pt": "uma-vista-de-um-corpo-de-agua-de-uma-colina-pYjCqqDEOFo"
                        },
                        "created_at": "2025-01-17T08:03:17Z",
                        "updated_at": "2025-03-10T23:06:18Z",
                        "promoted_at": null,
                        "width": 3648,
                        "height": 5472,
                        "color": "#d9d9d9",
                        "blur_hash": "LwJb8Cxaa|ay_Nt6fQj[xuWBWBfP",
                        "description": "beach of Italy",
                        "alt_description": "A view of a body of water from a hill",
                        "breadcrumbs": [],
                        "urls": {
                            "raw": "https://images.unsplash.com/photo-1737100522891-e8946ac97fd1?ixid=M3w3MjAzMzh8MHwxfGFsbHwxMHx8fHx8fHx8MTc0MTY0OTEzNHw&ixlib=rb-4.0.3",
                            "full": "https://images.unsplash.com/photo-1737100522891-e8946ac97fd1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHwxMHx8fHx8fHx8MTc0MTY0OTEzNHw&ixlib=rb-4.0.3&q=85",
                            "regular": "https://images.unsplash.com/photo-1737100522891-e8946ac97fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHwxMHx8fHx8fHx8MTc0MTY0OTEzNHw&ixlib=rb-4.0.3&q=80&w=1080",
                            "small": "https://images.unsplash.com/photo-1737100522891-e8946ac97fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHwxMHx8fHx8fHx8MTc0MTY0OTEzNHw&ixlib=rb-4.0.3&q=80&w=400",
                            "thumb": "https://images.unsplash.com/photo-1737100522891-e8946ac97fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjAzMzh8MHwxfGFsbHwxMHx8fHx8fHx8MTc0MTY0OTEzNHw&ixlib=rb-4.0.3&q=80&w=200",
                            "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1737100522891-e8946ac97fd1"
                        },
                        "links": {
                            "self": "https://api.unsplash.com/photos/a-view-of-a-body-of-water-from-a-hill-pYjCqqDEOFo",
                            "html": "https://unsplash.com/photos/a-view-of-a-body-of-water-from-a-hill-pYjCqqDEOFo",
                            "download": "https://unsplash.com/photos/pYjCqqDEOFo/download?ixid=M3w3MjAzMzh8MHwxfGFsbHwxMHx8fHx8fHx8MTc0MTY0OTEzNHw",
                            "download_location": "https://api.unsplash.com/photos/pYjCqqDEOFo/download?ixid=M3w3MjAzMzh8MHwxfGFsbHwxMHx8fHx8fHx8MTc0MTY0OTEzNHw"
                        },
                        "likes": 329,
                        "liked_by_user": false,
                        "current_user_collections": [],
                        "sponsorship": null,
                        "topic_submissions": {
                            "nature": {
                                "status": "approved",
                                "approved_on": "2025-01-31T10:17:00Z"
                            },
                            "wallpapers": {
                                "status": "approved",
                                "approved_on": "2025-02-17T08:24:41Z"
                            }
                        },
                        "asset_type": "photo",
                        "user": {
                            "id": "LRAphUaNcWA",
                            "updated_at": "2025-03-08T08:52:53Z",
                            "username": "alanbajura",
                            "name": "alan bajura",
                            "first_name": "alan",
                            "last_name": "bajura",
                            "twitter_username": null,
                            "portfolio_url": null,
                            "bio": "photographer of social events, landscapes and portraits, traveler\r\nig: @alan.bajura_ph",
                            "location": "Mannheim Deutschland",
                            "links": {
                                "self": "https://api.unsplash.com/users/alanbajura",
                                "html": "https://unsplash.com/@alanbajura",
                                "photos": "https://api.unsplash.com/users/alanbajura/photos",
                                "likes": "https://api.unsplash.com/users/alanbajura/likes",
                                "portfolio": "https://api.unsplash.com/users/alanbajura/portfolio",
                                "following": "https://api.unsplash.com/users/alanbajura/following",
                                "followers": "https://api.unsplash.com/users/alanbajura/followers"
                            },
                            "profile_image": {
                                "small": "https://images.unsplash.com/profile-1699357384441-f63b37a93d9a?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                                "medium": "https://images.unsplash.com/profile-1699357384441-f63b37a93d9a?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                                "large": "https://images.unsplash.com/profile-1699357384441-f63b37a93d9a?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                            },
                            "instagram_username": "alan.bajura_ph",
                            "total_collections": 0,
                            "total_likes": 15,
                            "total_photos": 85,
                            "total_promoted_photos": 20,
                            "total_illustrations": 0,
                            "total_promoted_illustrations": 0,
                            "accepted_tos": true,
                            "for_hire": true,
                            "social": {
                                "instagram_username": "alan.bajura_ph",
                                "portfolio_url": null,
                                "twitter_username": null,
                                "paypal_email": null
                            }
                        }
                    }
                ]
                setPhotos(photos);
            }
            fetchData();
        } catch (error) {
            console.log(error);
        }
        return () => {
            setPhotos([]);
        }
    }, [])

    return (
        <DataContext value={{ photos }}>
            {children}
        </DataContext>
    )
}

export function useData() {
    return useContext(DataContext);
}
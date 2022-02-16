import {filtervehicles} from '../src/data.js';
//, filterlocation, rtgood, rtregular, rtbad, characters}
let moviesvehicules=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    "release_date": "1986",
    "rt_score": "95",
    "people": [
      {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
        "gender": "Female",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
        "name": "Dola",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
        "gender": "Female",
        "age": "60",
        "eye_color": "Black",
        "hair_color": "Peach",
        "specie": "Human"
      },
      {
        "id": "abe886e7-30c8-4c19-aaa5-d666e60d14de",
        "name": "Romska Palo Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
        "gender": "Male",
        "age": "33",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "e08880d0-6938-44f3-b179-81947e7873fc",
        "name": "Uncle Pom",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
        "gender": "Male",
        "age": "Unspecified/Elderly",
        "eye_color": "Black",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
        "name": "General Muoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Black",
        "hair_color": "None",
        "specie": "Human"
      },
      {
        "id": "3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede",
        "name": "Duffi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0a/Duffi.png",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "fcb4a2ac-5e41-4d54-9bba-33068db083ca",
        "name": "Louis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg",
        "gender": "Male",
        "age": "30",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "2cb76c15-772a-4cb3-9919-3652f56611d0",
        "name": "Charles",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f0/Charlie.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "f6f2c477-98aa-4796-b9aa-8209fdeed6b9",
        "name": "Henri",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/15/Henri.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Reddish brown",
        "specie": "Human"
      },
      {
        "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
        "name": "Motro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "None",
        "specie": "Human"
      },
      {
        "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
        "name": "Okami",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
        "gender": "Female",
        "age": "50",
        "eye_color": "Dark brown",
        "hair_color": "Orange",
        "specie": "Human"
      },
      {
        "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
        "name": "Colonel Muska",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
        "gender": "Male",
        "age": "33",
        "eye_color": "Grey",
        "hair_color": "Brown",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
        "name": "Gondoa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Thumbnail-8.jpeg",
        "climate": "TODO",
        "terrain": "TODO",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d",
        "name": "Pazu's Mines",
        "img": "https://preview.redd.it/fmikehlh8dl41.jpg?auto=webp&s=a997a7d6726fc151a438985899b052d0fd357716",
        "climate": "Dry",
        "terrain": "Hill",
        "surface_water": "0",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
        "name": "Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
        "climate": "Continental",
        "terrain": "City",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
        "name": "Tedis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Tedis.jpg",
        "climate": "Continental",
        "terrain": "Hill",
        "surface_water": "30",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
        "name": "Air Destroyer Goliath",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
        "description": "A military airship utilized by the government to access Laputa",
        "vehicle_class": "Airship",
        "length": "1,000",
        "pilot": {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska"
        }
      }
    ]
  },
  {
      "id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
      "title": "Porco Rosso",
      "description": "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
      "director": "Hayao Miyazaki",
      "producer": "Toshio Suzuki",
      "poster" : "https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Porco_Rosso.jpg",
      "release_date": "1992",
      "rt_score": "94",
      "people": [
        {
          "id": "6523068d-f5a9-4150-bf5b-76abe6fb42c3",
          "name": "Porco Rosso",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/02/Porcellino%21.png",
          "gender": "Male",
          "age": "47",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "eff43a47-e59c-41bd-bcc6-b1827d63bed5",
          "name": "Donald Curtis",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/61/Donald_Curtis.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "4a2e2cee-08ca-4d44-9564-2b3e5421bafb",
          "name": "Fio Piccolo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/16/Fio_%282%29.jpg",
          "gender": "Female",
          "age": "17",
          "eye_color": "Brown",
          "hair_color": "Red",
          "specie": "Human"
        },
        {
          "id": "127317b3-f6f8-4aea-b294-20452a3334f5",
          "name": "Gina",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/Gina.jpg",
          "gender": "Female",
          "age": "circa 23-35",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "2ac81cc3-7292-40ab-9e8f-4a370a58e3c8",
          "name": "Mr. Piccolo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0e/Mr_Piccolo.jpg",
          "gender": "Male",
          "age": "Middle aged",
          "eye_color": "Brown",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "a63c25f4-41a4-4f78-933f-3c14e2903a8f",
          "name": "Capo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/98/Aiuto_Gang_boss.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Bald",
          "specie": "Human"
        },
        {
          "id": "5fd7416f-d928-4ebc-a4fb-d9bbdf99b06a",
          "name": "Ferrari",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/be/Porco_Rosso_-_Ferrari.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "34df8f25-8f80-4823-8f01-bf9852039987",
          "name": "Piccolo S.P.A.",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4f/Piccolos_garage.jpg",
          "climate": "Continental",
          "terrain": "River",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": [
        {
          "id": "d8f893b5-1dd9-41a1-9918-0099c1aa2de8",
          "name": "Red Wing",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8f/Porco%27s_Plane.jpg",
          "description": "An experimental aircraft captured by Porco. Named Savoia S.21",
          "vehicle_class": "Airplane",
          "length": "20",
          "pilot": {
            "id": "6523068d-f5a9-4150-bf5b-76abe6fb42c3",
            "name": "Porco Rosso"
          }
        },
        {
          "id": "7eb1b9cd-8153-4ef6-a0d4-1e9abd8d78da",
          "name": "Dabohaze",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/99/Aiuto_Gang.jpg",
          "description": "It's the Mamma Aiuto Gang's battle ship, They're an air pirate gang lead by Capo",
          "vehicle_class": "Battle ship",
          "length": "NA",
          "pilot": {
            "id": "a63c25f4-41a4-4f78-933f-3c14e2903a8f",
            "name": "Capo"
          }
        }
      ]
  },
  {
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
    "title": "Howl's Moving Castle",
    "description": "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Howl%27s_Moving_Castle.jpg",
    "release_date": "2004",
    "rt_score": "87",
    "people": [
      {
        "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
        "name": "Howl Jenkins Pendragon",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
        "gender": "Male",
        "age": "27",
        "eye_color": "Bright blue",
        "hair_color": "Bright blue",
        "specie": "Wizard"
      },
      {
        "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
        "name": "Sophie Hatter",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
        "gender": "Female",
        "age": "18",
        "eye_color": "Brown",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "1287b275-6c32-4113-947f-519316d4a6be",
        "name": "Witch of the Waste",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e1/Howls-moving-castle-disneyscreencaps.com-10507.jpg",
        "gender": "Female",
        "age": "59",
        "eye_color": "Brown",
        "hair_color": "White",
        "specie": "Witch/Human"
      },
      {
        "id": "b73f58ab-454a-42d6-9812-63e8f235a388",
        "name": "Calcifer",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/2a/Calcifer.png",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Dark Brown",
        "hair_color": "Orange-yellow",
        "specie": "Demon"
      },
      {
        "id": "d03ca1e2-16ab-45d1-9b81-c2b0f7b35de1",
        "name": "Markl",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Markl.jpg",
        "gender": "Male",
        "age": "10",
        "eye_color": "Dark Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "45237428-93bf-4dd6-97ce-f10647300429",
        "name": "Prince Justin or Turnip Head",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Prince_Justin.png",
        "gender": "Male",
        "age": "20-30",
        "eye_color": "Grey",
        "hair_color": "Blonde",
        "specie": "Human/Scarecrow"
      },
      {
        "id": "8f66024e-c84f-445a-9ab5-0b31a6ae354d",
        "name": "Madame Suliman",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Madame_Suliman.png",
        "gender": "Female",
        "age": "50",
        "eye_color": "Grey",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "ccc705e4-aa2a-4929-b0dc-4b8a09fd290d",
        "name": "Heen",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a7/Heen.png",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Brown",
        "hair_color": "Beige-white",
        "specie": "Dog"
      },
      {
        "id": "3148150f-6ccb-4383-8af5-0c40f03c825e",
        "name": "Lettie Hatter",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1c/Lettie_Hatter.png",
        "gender": "Female",
        "age": "16",
        "eye_color": "Blue",
        "hair_color": "Blonde",
        "specie": "Human"
      },
      {
        "id": "06610030-0560-47ac-bc18-be80d85c4dad",
        "name": "Fanny Hatter/Honey",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c6/Honey.png",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Grey",
        "hair_color": "Blonde",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "b6bac992-a858-4d57-8477-9652d73caaa1",
        "name": "Ingary",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Ingary.png",
        "climate": "Mild",
        "terrain": "Hill",
        "surface_water": "30",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "2354305f-dccd-4c44-a79e-cc60ba7376e6",
        "name": "Howl's castle",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e6/Howls_Castle.jpg",
        "description": "Wizard Howl's home. It's scale changes from scene to scene.",
        "vehicle_class": "Moving castle",
        "length": "unknown",
        "pilot": {
          "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
          "name": "Howl Jenkins Pendragon"
        }
      }
    ]
  },
  {
    "id": "758bf02e-3122-46e0-884e-67cf83df1786",
    "title": "Ponyo on the Cliff by the Sea",
    "description": "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/5/50/Ponyo_on_the_Cliff_by_the_Sea.jpg",
    "release_date": "2008",
    "rt_score": "92",
    "people": [
      {
        "id": "a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
        "name": "Sosuke",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cf/Sosuke.jpg",
        "gender": "Male",
        "age": "5",
        "eye_color": "Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "4524e6c2-04f3-4633-b2cb-e1cd3f566213",
        "name": "Brunhilde/Ponyo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bc/Brunhilda.png",
        "gender": "Female",
        "age": "5",
        "eye_color": "Dark brown",
        "hair_color": "Red",
        "specie": "Fish/Human"
      },
      {
        "id": "0cb26464-3416-4490-8f42-cd9d7276884e",
        "name": "Kōichi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/49/Sosuke%27s_Father.png",
        "gender": "Male",
        "age": "30",
        "eye_color": "Dark brown",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "9ab8c24f-f687-47b8-adcf-c7c9d5b86b91",
        "name": "Fujimoto",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4b/Fujimoto.jpg",
        "gender": "Male",
        "age": "40",
        "eye_color": "Light green",
        "hair_color": "Red",
        "specie": "Human"
      },
      {
        "id": "942efc9a-8d02-4643-aa3f-134429a23684",
        "name": "Granmammare",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/43/Granmammare.png",
        "gender": "Female",
        "age": "NA",
        "eye_color": "Brown",
        "hair_color": "Red",
        "specie": "Deity"
      },
      {
        "id": "04447a1b-316a-40bf-8f19-ddc964fec216",
        "name": "Lisa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Lisa.png",
        "gender": "Female",
        "age": "25",
        "eye_color": "Dark brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "88d56819-0639-4bc4-8ffc-2af15a310cdc",
        "name": "Toki",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/94/Toki.jpg",
        "gender": "Female",
        "age": "72",
        "eye_color": "Dark brown",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "f55138f5-cdc7-4bc5-93d6-c4445d2a5347",
        "name": "Yoshie",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/3f/Yoshie.jpg",
        "gender": "Female",
        "age": "68",
        "eye_color": "Dark brown",
        "hair_color": "Blonde",
        "specie": "Human"
      },
      {
        "id": "9e149019-f351-4061-aaee-82a385a36582",
        "name": "Noriko",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/34/Noriko.jpg",
        "gender": "Female",
        "age": "70",
        "eye_color": "Dark brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "804b2f0a-05ab-489a-9610-bdc6bc867e89",
        "name": "Koyo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/29/Koyo.png",
        "gender": "Female",
        "age": "68",
        "eye_color": "Dark brown",
        "hair_color": "Brown",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "90241c46-d4be-411f-b00a-7561b9dda7b6",
        "name": "Fujimoto's Underwater Harbor",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Fujimotos_hus.jpg",
        "climate": "Wet",
        "terrain": "Ocean",
        "surface_water": "100",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "469b14bd-5565-4436-bbed-c2036f42cc99",
        "name": "Himawari Nursery School",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/6b/Himawari_Nursery_School.jpg",
        "climate": "Mild",
        "terrain": "Ocean",
        "surface_water": "50",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "923d70c9-8f15-4972-ad53-0128b261d628",
        "name": "Sosuke's Boat",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/PonyoS%C5%8DsukeBoat.jpg",
        "description": "A toy boat where Sosuke plays",
        "vehicle_class": "Boat",
        "length": "10",
        "pilot": {
          "id": "a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
          "name": "Sosuke"
        }
      }
    ]
  },
  {
    "id": "67405111-37a5-438f-81cc-4666af60c800",
    "title": "The Wind Rises",
    "description": "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/2/2d/The_Wind_Rises.jpg",
    "release_date": "2013",
    "rt_score": "89",
    "people": [
      {
        "id": "97746fd8-1875-4331-8bc6-f43ae25501cd",
        "name": "Naoko Satomi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Nahoko_Satomi.jpg",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Navy blue",
        "specie": "Human"
      },
      {
        "id": "07b01fdb-87fb-4f3b-a888-b90cf13bc386",
        "name": "Jiro Horikoshi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d7/Jirou_Horikoshi.jpg",
        "gender": "Male",
        "age": "42",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "53b1d8f7-adb3-49b3-bece-52cda0915e7a",
        "name": "Castorp",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b4/Castorp.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Light brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "ccc07f5c-28bd-4446-aee9-827c61d7f9f1",
        "name": "Kiro Honjo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/6c/Kiro_Honjo.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "54eda936-7f86-4bd8-9493-56e0eebd8eb1",
        "name": "Kayo Horikoshi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/91/Kayo_Horikoshi.jpg",
        "gender": "Female",
        "age": "10",
        "eye_color": "Dark brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "b2453b6b-0718-4740-a0c4-207f12f1903a",
        "name": "Caproni",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/66/Caproni.jpg",
        "gender": "Male",
        "age": "45",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "c8321219-a816-4921-9a58-48c858becb97",
        "name": "Mr. Kurokawa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Kurokawa.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Navy blue",
        "specie": "Human"
      },
      {
        "id": "50e9d375-afaa-4769-a31d-dee8e37aa8ba",
        "name": "Hattori",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ec/Hattori.jpg",
        "gender": "Male",
        "age": "Elder",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "2b380662-626d-42fb-9e3a-14f951201c8b",
        "name": "Nagoya",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/20/Kazetachinu009.jpg",
        "climate": "Damp",
        "terrain": "Hill",
        "surface_water": "20",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "411f66ed0-771c-46d3-8f68-a3b65c6dd91c",
        "name": "Mitsubishi 1MF9 ",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Kazetachinu044.jpg",
        "description": "The Mitsubishi 1MF9 or Mitsubishi Experimental Taka-type Carrier Fighter was a prototype Japanese fighter aircraft of the 1920s. It was a single-engined, single-seat biplane intended to operate from the Imperial Japanese Navy's aircraft carriers, but only two were built, with the type being rejected by the Navy.",
        "vehicle_class": "War plane",
        "length": "8",
        "pilot": {
          "id": "07b01fdb-87fb-4f3b-a888-b90cf13bc386",
          "name": "Jiro Horikoshi"
        }
      }
    ]
  },
  {
    "id": "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
    "title": "The Tale of the Princess Kaguya",
    "description": "A bamboo cutter named Sanuki no Miyatsuko discovers a miniature girl inside a glowing bamboo shoot. Believing her to be a divine presence, he and his wife decide to raise her as their own, calling her 'Princess'.",
    "director": "Isao Takahata",
    "producer": "Yoshiaki Nishimura",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Tale_of_the_Princess_Kaguya.jpg",
    "release_date": "2013",
    "rt_score": "100",
    "people": [
      {
        "id": "a8b338c0-e586-4c1c-8857-f33540d0d4d7",
        "name": "Kaguya",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d4/Kaguya_shows_off_her_teeth.jpg",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Navy blue",
        "specie": "Human"
      },
      {
        "id": "a21fbdd5-16bc-4931-80d0-3ce89ffce778",
        "name": "Sutemaru",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/37/Sutemaru.PNG",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "4c697b7d-4f64-4ac9-ae29-e155eb1693f3",
        "name": "Ishitsukuri",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5c/Ghibli-kaguya-ishitsukuri.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "fe1e5acf-e5e4-4769-9755-989cf7a2e961",
        "name": "Miyatsuko",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4a/Sanuki_no_Miyatsuko.jpeg",
        "gender": "Male",
        "age": "Elder",
        "eye_color": "Grey",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "839ff5b9-69ba-4d55-ab77-de939b46b18a",
        "name": "Menowarawa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/22/Menowarawa.jpg",
        "gender": "Female",
        "age": "17",
        "eye_color": "Black",
        "hair_color": "Navy blue",
        "specie": "Human"
      },
      {
        "id": "1752fc88-c6b7-4fef-8b64-51451d808033",
        "name": "Lady Sagami",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Sagami.png",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "942fb1029-b51f-4100-8bee-86547c09b0ff",
        "name": "Inbe no Akita",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1c/Ghibli-kaguya-akita.jpg",
        "gender": "Male",
        "age": "Elder",
        "eye_color": "Black",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "be634b4e-c333-4225-a5f0-2a0aa33d6453",
        "name": "Ōna",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cb/Ouna.jpg",
        "gender": "Female",
        "age": "Elder",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "682df5c3-b09e-46af-94d1-ae0d17f9b4b6",
        "name": "Bamboo Forest",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ec/Ghibli-kaguya-bamboo-forest.jpg",
        "climate": "Tropical",
        "terrain": "Forest",
        "surface_water": "10",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": []
  },
  {
    "id": "90b72513-afd4-4570-84de-a56c312fdf81",
    "title": "The Cat Returns",
    "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
    "director": "Hiroyuki Morita",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg",
    "release_date": "2002",
    "rt_score": "89",
    "people": [
      {
        "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8",
        "name": "Renaldo Moon aka Moon aka Muta",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Muta.png",
        "gender": "Male",
        "age": "NA",
        "eye_color": "White",
        "hair_color": "Beige",
        "specie": "Cat"
      },
      {
        "id": "3042818d-a8bb-4cba-8180-c19249822d57",
        "name": "Cat King",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/34/The_Cat_King.jpg",
        "gender": "Male",
        "age": "87",
        "eye_color": "Emerald",
        "hair_color": "Grey",
        "specie": "Cat"
      },
      {
        "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6",
        "name": "Yuki",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/New_queen%2C_Yuki.JPG",
        "gender": "Female",
        "age": "NA",
        "eye_color": "Blue",
        "hair_color": "White",
        "specie": "Cat"
      },
      {
        "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92",
        "name": "Haru Yoshioka",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/27/Haru_Yoshioka.jpg",
        "gender": "Female",
        "age": "17",
        "eye_color": "Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "466bc926-2024-4653-ac63-fe52f2dc8c7b",
        "name": "Natori",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c4/Natori.jpg",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Blue",
        "hair_color": "Grey",
        "specie": "Cat"
      },
      {
        "id": "269dcd81-8037-45bb-892b-1c86c9696222",
        "name": "Toto",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8d/Toto.png",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Black",
        "hair_color": "Dark Blue",
        "specie": "Bird"
      },
      {
        "id": "5b2a28f6-91d4-4382-aedc-b27094e763b0",
        "name": "Prince Lune",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/90/Prince_Lune.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Dark brown",
        "hair_color": "Russian blue",
        "specie": "Cat"
      },
      {
        "id": "17aca709-3049-48fc-95a6-e802c01125a2",
        "name": "Hiromi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Hiromi.png",
        "gender": "Female",
        "age": "17",
        "eye_color": "Brown",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "911d38e2-ada4-4481-89a2-ba414422d4e4",
        "name": "Naoko Yoshioka",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Naoko_Yoshioka.jpg",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Light Brown",
        "hair_color": "Light brown",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "a8bd9c03-7c80-4a97-b7c0-6a668acaf576",
        "name": "The Cat Kingdom",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Baron022.jpg",
        "climate": "Continental",
        "terrain": "Plain",
        "surface_water": "30",
        "residents": [
          {
            "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8",
            "name": "Renaldo Moon aka Moon aka Muta"
          },
          {
            "id": "3042818d-a8bb-4cba-8180-c19249822d57",
            "name": "Cat King"
          },
          {
            "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6",
            "name": "Yuki"
          },
          {
            "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92",
            "name": "Haru"
          }
        ]
      }
    ],
    "vehicles": []
  },
];
let moviesdif=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    "release_date": "1986",
    "rt_score": "95",
    "people": [
      {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
        "gender": "Female",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
        "name": "Dola",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
        "gender": "Female",
        "age": "60",
        "eye_color": "Black",
        "hair_color": "Peach",
        "specie": "Human"
      },
      {
        "id": "abe886e7-30c8-4c19-aaa5-d666e60d14de",
        "name": "Romska Palo Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
        "gender": "Male",
        "age": "33",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "e08880d0-6938-44f3-b179-81947e7873fc",
        "name": "Uncle Pom",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
        "gender": "Male",
        "age": "Unspecified/Elderly",
        "eye_color": "Black",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
        "name": "General Muoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Black",
        "hair_color": "None",
        "specie": "Human"
      },
      {
        "id": "3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede",
        "name": "Duffi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0a/Duffi.png",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "fcb4a2ac-5e41-4d54-9bba-33068db083ca",
        "name": "Louis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg",
        "gender": "Male",
        "age": "30",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "2cb76c15-772a-4cb3-9919-3652f56611d0",
        "name": "Charles",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f0/Charlie.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "f6f2c477-98aa-4796-b9aa-8209fdeed6b9",
        "name": "Henri",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/15/Henri.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Reddish brown",
        "specie": "Human"
      },
      {
        "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
        "name": "Motro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "None",
        "specie": "Human"
      },
      {
        "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
        "name": "Okami",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
        "gender": "Female",
        "age": "50",
        "eye_color": "Dark brown",
        "hair_color": "Orange",
        "specie": "Human"
      },
      {
        "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
        "name": "Colonel Muska",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
        "gender": "Male",
        "age": "33",
        "eye_color": "Grey",
        "hair_color": "Brown",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
        "name": "Gondoa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Thumbnail-8.jpeg",
        "climate": "TODO",
        "terrain": "TODO",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d",
        "name": "Pazu's Mines",
        "img": "https://preview.redd.it/fmikehlh8dl41.jpg?auto=webp&s=a997a7d6726fc151a438985899b052d0fd357716",
        "climate": "Dry",
        "terrain": "Hill",
        "surface_water": "0",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
        "name": "Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
        "climate": "Continental",
        "terrain": "City",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
        "name": "Tedis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Tedis.jpg",
        "climate": "Continental",
        "terrain": "Hill",
        "surface_water": "30",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
        "name": "Air Destroyer Goliath",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
        "description": "A military airship utilized by the government to access Laputa",
        "vehicle_class": "Airship",
        "length": "1,000",
        "pilot": {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska"
        }
      }
    ]
  },
  {
      "id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
      "title": "Porco Rosso",
      "description": "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
      "director": "Hayao Miyazaki",
      "producer": "Toshio Suzuki",
      "poster" : "https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Porco_Rosso.jpg",
      "release_date": "1992",
      "rt_score": "94",
      "people": [
        {
          "id": "6523068d-f5a9-4150-bf5b-76abe6fb42c3",
          "name": "Porco Rosso",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/02/Porcellino%21.png",
          "gender": "Male",
          "age": "47",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "eff43a47-e59c-41bd-bcc6-b1827d63bed5",
          "name": "Donald Curtis",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/61/Donald_Curtis.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "4a2e2cee-08ca-4d44-9564-2b3e5421bafb",
          "name": "Fio Piccolo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/16/Fio_%282%29.jpg",
          "gender": "Female",
          "age": "17",
          "eye_color": "Brown",
          "hair_color": "Red",
          "specie": "Human"
        },
        {
          "id": "127317b3-f6f8-4aea-b294-20452a3334f5",
          "name": "Gina",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/Gina.jpg",
          "gender": "Female",
          "age": "circa 23-35",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "2ac81cc3-7292-40ab-9e8f-4a370a58e3c8",
          "name": "Mr. Piccolo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0e/Mr_Piccolo.jpg",
          "gender": "Male",
          "age": "Middle aged",
          "eye_color": "Brown",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "a63c25f4-41a4-4f78-933f-3c14e2903a8f",
          "name": "Capo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/98/Aiuto_Gang_boss.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Bald",
          "specie": "Human"
        },
        {
          "id": "5fd7416f-d928-4ebc-a4fb-d9bbdf99b06a",
          "name": "Ferrari",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/be/Porco_Rosso_-_Ferrari.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "34df8f25-8f80-4823-8f01-bf9852039987",
          "name": "Piccolo S.P.A.",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4f/Piccolos_garage.jpg",
          "climate": "Continental",
          "terrain": "River",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": [
        {
          "id": "d8f893b5-1dd9-41a1-9918-0099c1aa2de8",
          "name": "Red Wing",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8f/Porco%27s_Plane.jpg",
          "description": "An experimental aircraft captured by Porco. Named Savoia S.21",
          "vehicle_class": "Airplane",
          "length": "20",
          "pilot": {
            "id": "6523068d-f5a9-4150-bf5b-76abe6fb42c3",
            "name": "Porco Rosso"
          }
        },
        {
          "id": "7eb1b9cd-8153-4ef6-a0d4-1e9abd8d78da",
          "name": "Dabohaze",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/99/Aiuto_Gang.jpg",
          "description": "It's the Mamma Aiuto Gang's battle ship, They're an air pirate gang lead by Capo",
          "vehicle_class": "Battle ship",
          "length": "NA",
          "pilot": {
            "id": "a63c25f4-41a4-4f78-933f-3c14e2903a8f",
            "name": "Capo"
          }
        }
      ]
  },
  {
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
    "title": "Howl's Moving Castle",
    "description": "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Howl%27s_Moving_Castle.jpg",
    "release_date": "2004",
    "rt_score": "87",
    "people": [
      {
        "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
        "name": "Howl Jenkins Pendragon",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
        "gender": "Male",
        "age": "27",
        "eye_color": "Bright blue",
        "hair_color": "Bright blue",
        "specie": "Wizard"
      },
      {
        "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
        "name": "Sophie Hatter",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
        "gender": "Female",
        "age": "18",
        "eye_color": "Brown",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "1287b275-6c32-4113-947f-519316d4a6be",
        "name": "Witch of the Waste",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e1/Howls-moving-castle-disneyscreencaps.com-10507.jpg",
        "gender": "Female",
        "age": "59",
        "eye_color": "Brown",
        "hair_color": "White",
        "specie": "Witch/Human"
      },
      {
        "id": "b73f58ab-454a-42d6-9812-63e8f235a388",
        "name": "Calcifer",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/2a/Calcifer.png",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Dark Brown",
        "hair_color": "Orange-yellow",
        "specie": "Demon"
      },
      {
        "id": "d03ca1e2-16ab-45d1-9b81-c2b0f7b35de1",
        "name": "Markl",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Markl.jpg",
        "gender": "Male",
        "age": "10",
        "eye_color": "Dark Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "45237428-93bf-4dd6-97ce-f10647300429",
        "name": "Prince Justin or Turnip Head",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Prince_Justin.png",
        "gender": "Male",
        "age": "20-30",
        "eye_color": "Grey",
        "hair_color": "Blonde",
        "specie": "Human/Scarecrow"
      },
      {
        "id": "8f66024e-c84f-445a-9ab5-0b31a6ae354d",
        "name": "Madame Suliman",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Madame_Suliman.png",
        "gender": "Female",
        "age": "50",
        "eye_color": "Grey",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "ccc705e4-aa2a-4929-b0dc-4b8a09fd290d",
        "name": "Heen",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a7/Heen.png",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Brown",
        "hair_color": "Beige-white",
        "specie": "Dog"
      },
      {
        "id": "3148150f-6ccb-4383-8af5-0c40f03c825e",
        "name": "Lettie Hatter",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1c/Lettie_Hatter.png",
        "gender": "Female",
        "age": "16",
        "eye_color": "Blue",
        "hair_color": "Blonde",
        "specie": "Human"
      },
      {
        "id": "06610030-0560-47ac-bc18-be80d85c4dad",
        "name": "Fanny Hatter/Honey",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c6/Honey.png",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Grey",
        "hair_color": "Blonde",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "b6bac992-a858-4d57-8477-9652d73caaa1",
        "name": "Ingary",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Ingary.png",
        "climate": "Mild",
        "terrain": "Hill",
        "surface_water": "30",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "2354305f-dccd-4c44-a79e-cc60ba7376e6",
        "name": "Howl's castle",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e6/Howls_Castle.jpg",
        "description": "Wizard Howl's home. It's scale changes from scene to scene.",
        "vehicle_class": "Moving castle",
        "length": "unknown",
        "pilot": {
          "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
          "name": "Howl Jenkins Pendragon"
        }
      }
    ]
  },
  {
    "id": "758bf02e-3122-46e0-884e-67cf83df1786",
    "title": "Ponyo on the Cliff by the Sea",
    "description": "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/5/50/Ponyo_on_the_Cliff_by_the_Sea.jpg",
    "release_date": "2008",
    "rt_score": "92",
    "people": [
      {
        "id": "a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
        "name": "Sosuke",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/cf/Sosuke.jpg",
        "gender": "Male",
        "age": "5",
        "eye_color": "Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "4524e6c2-04f3-4633-b2cb-e1cd3f566213",
        "name": "Brunhilde/Ponyo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bc/Brunhilda.png",
        "gender": "Female",
        "age": "5",
        "eye_color": "Dark brown",
        "hair_color": "Red",
        "specie": "Fish/Human"
      },
      {
        "id": "0cb26464-3416-4490-8f42-cd9d7276884e",
        "name": "Kōichi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/49/Sosuke%27s_Father.png",
        "gender": "Male",
        "age": "30",
        "eye_color": "Dark brown",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "9ab8c24f-f687-47b8-adcf-c7c9d5b86b91",
        "name": "Fujimoto",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4b/Fujimoto.jpg",
        "gender": "Male",
        "age": "40",
        "eye_color": "Light green",
        "hair_color": "Red",
        "specie": "Human"
      },
      {
        "id": "942efc9a-8d02-4643-aa3f-134429a23684",
        "name": "Granmammare",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/43/Granmammare.png",
        "gender": "Female",
        "age": "NA",
        "eye_color": "Brown",
        "hair_color": "Red",
        "specie": "Deity"
      },
      {
        "id": "04447a1b-316a-40bf-8f19-ddc964fec216",
        "name": "Lisa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Lisa.png",
        "gender": "Female",
        "age": "25",
        "eye_color": "Dark brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "88d56819-0639-4bc4-8ffc-2af15a310cdc",
        "name": "Toki",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/94/Toki.jpg",
        "gender": "Female",
        "age": "72",
        "eye_color": "Dark brown",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "f55138f5-cdc7-4bc5-93d6-c4445d2a5347",
        "name": "Yoshie",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/3f/Yoshie.jpg",
        "gender": "Female",
        "age": "68",
        "eye_color": "Dark brown",
        "hair_color": "Blonde",
        "specie": "Human"
      },
      {
        "id": "9e149019-f351-4061-aaee-82a385a36582",
        "name": "Noriko",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/34/Noriko.jpg",
        "gender": "Female",
        "age": "70",
        "eye_color": "Dark brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "804b2f0a-05ab-489a-9610-bdc6bc867e89",
        "name": "Koyo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/29/Koyo.png",
        "gender": "Female",
        "age": "68",
        "eye_color": "Dark brown",
        "hair_color": "Brown",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "90241c46-d4be-411f-b00a-7561b9dda7b6",
        "name": "Fujimoto's Underwater Harbor",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Fujimotos_hus.jpg",
        "climate": "Wet",
        "terrain": "Ocean",
        "surface_water": "100",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "469b14bd-5565-4436-bbed-c2036f42cc99",
        "name": "Himawari Nursery School",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/6b/Himawari_Nursery_School.jpg",
        "climate": "Mild",
        "terrain": "Ocean",
        "surface_water": "50",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "923d70c9-8f15-4972-ad53-0128b261d628",
        "name": "Sosuke's Boat",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/PonyoS%C5%8DsukeBoat.jpg",
        "description": "A toy boat where Sosuke plays",
        "vehicle_class": "Boat",
        "length": "10",
        "pilot": {
          "id": "a10f64f3-e0b6-4a94-bf30-87ad8bc51607",
          "name": "Sosuke"
        }
      }
    ]
  },
  {
    "id": "67405111-37a5-438f-81cc-4666af60c800",
    "title": "The Wind Rises",
    "description": "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/2/2d/The_Wind_Rises.jpg",
    "release_date": "2013",
    "rt_score": "89",
    "people": [
      {
        "id": "97746fd8-1875-4331-8bc6-f43ae25501cd",
        "name": "Naoko Satomi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Nahoko_Satomi.jpg",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Navy blue",
        "specie": "Human"
      },
      {
        "id": "07b01fdb-87fb-4f3b-a888-b90cf13bc386",
        "name": "Jiro Horikoshi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d7/Jirou_Horikoshi.jpg",
        "gender": "Male",
        "age": "42",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "53b1d8f7-adb3-49b3-bece-52cda0915e7a",
        "name": "Castorp",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b4/Castorp.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Light brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "ccc07f5c-28bd-4446-aee9-827c61d7f9f1",
        "name": "Kiro Honjo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/6c/Kiro_Honjo.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "54eda936-7f86-4bd8-9493-56e0eebd8eb1",
        "name": "Kayo Horikoshi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/91/Kayo_Horikoshi.jpg",
        "gender": "Female",
        "age": "10",
        "eye_color": "Dark brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "b2453b6b-0718-4740-a0c4-207f12f1903a",
        "name": "Caproni",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/66/Caproni.jpg",
        "gender": "Male",
        "age": "45",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "c8321219-a816-4921-9a58-48c858becb97",
        "name": "Mr. Kurokawa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Kurokawa.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Navy blue",
        "specie": "Human"
      },
      {
        "id": "50e9d375-afaa-4769-a31d-dee8e37aa8ba",
        "name": "Hattori",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ec/Hattori.jpg",
        "gender": "Male",
        "age": "Elder",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "2b380662-626d-42fb-9e3a-14f951201c8b",
        "name": "Nagoya",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/20/Kazetachinu009.jpg",
        "climate": "Damp",
        "terrain": "Hill",
        "surface_water": "20",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "411f66ed0-771c-46d3-8f68-a3b65c6dd91c",
        "name": "Mitsubishi 1MF9 ",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Kazetachinu044.jpg",
        "description": "The Mitsubishi 1MF9 or Mitsubishi Experimental Taka-type Carrier Fighter was a prototype Japanese fighter aircraft of the 1920s. It was a single-engined, single-seat biplane intended to operate from the Imperial Japanese Navy's aircraft carriers, but only two were built, with the type being rejected by the Navy.",
        "vehicle_class": "War plane",
        "length": "8",
        "pilot": {
          "id": "07b01fdb-87fb-4f3b-a888-b90cf13bc386",
          "name": "Jiro Horikoshi"
        }
      }
    ]
  },
];
let movieslocation=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    "release_date": "1986",
    "rt_score": "95",
    "people": [
      {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
        "gender": "Female",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
        "name": "Dola",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
        "gender": "Female",
        "age": "60",
        "eye_color": "Black",
        "hair_color": "Peach",
        "specie": "Human"
      },
      {
        "id": "abe886e7-30c8-4c19-aaa5-d666e60d14de",
        "name": "Romska Palo Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
        "gender": "Male",
        "age": "33",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "e08880d0-6938-44f3-b179-81947e7873fc",
        "name": "Uncle Pom",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
        "gender": "Male",
        "age": "Unspecified/Elderly",
        "eye_color": "Black",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
        "name": "General Muoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Black",
        "hair_color": "None",
        "specie": "Human"
      },
      {
        "id": "3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede",
        "name": "Duffi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0a/Duffi.png",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "fcb4a2ac-5e41-4d54-9bba-33068db083ca",
        "name": "Louis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg",
        "gender": "Male",
        "age": "30",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "2cb76c15-772a-4cb3-9919-3652f56611d0",
        "name": "Charles",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f0/Charlie.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "f6f2c477-98aa-4796-b9aa-8209fdeed6b9",
        "name": "Henri",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/15/Henri.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "Reddish brown",
        "specie": "Human"
      },
      {
        "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
        "name": "Motro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
        "gender": "Male",
        "age": "Unspecified/Adult",
        "eye_color": "Dark brown",
        "hair_color": "None",
        "specie": "Human"
      },
      {
        "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
        "name": "Okami",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
        "gender": "Female",
        "age": "50",
        "eye_color": "Dark brown",
        "hair_color": "Orange",
        "specie": "Human"
      },
      {
        "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
        "name": "Colonel Muska",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
        "gender": "Male",
        "age": "33",
        "eye_color": "Grey",
        "hair_color": "Brown",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
        "name": "Gondoa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Thumbnail-8.jpeg",
        "climate": "TODO",
        "terrain": "TODO",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d",
        "name": "Pazu's Mines",
        "img": "https://preview.redd.it/fmikehlh8dl41.jpg?auto=webp&s=a997a7d6726fc151a438985899b052d0fd357716",
        "climate": "Dry",
        "terrain": "Hill",
        "surface_water": "0",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
        "name": "Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
        "climate": "Continental",
        "terrain": "City",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
        "name": "Tedis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Tedis.jpg",
        "climate": "Continental",
        "terrain": "Hill",
        "surface_water": "30",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
        "name": "Air Destroyer Goliath",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
        "description": "A military airship utilized by the government to access Laputa",
        "vehicle_class": "Airship",
        "length": "1,000",
        "pilot": {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska"
        }
      }
    ]
  },
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    "title": "My Neighbor Totoro",
    "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    "release_date": "1988",
    "rt_score": "93",
    "people": [
      {
        "id": "986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
        "name": "Satsuki Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
        "gender": "Female",
        "age": "11",
        "eye_color": "Dark Brown/Black",
        "hair_color": "Dark Brown",
        "specie": "Human"
      },
      {
        "id": "d5df3c04-f355-4038-833c-83bd3502b6b9",
        "name": "Mei Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/God_Jul_Mei_%C3%B6nskar_fr%C3%A5n_Tomten.jpg",
        "gender": "Female",
        "age": "4",
        "eye_color": "Brown",
        "hair_color": "Light Brown",
        "specie": "Human"
      },
      {
        "id": "3031caa8-eb1a-41c6-ab93-dd091b541e11",
        "name": "Tatsuo Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d6/Tatsuo_Kusakabe.jpg",
        "gender": "Male",
        "age": "37",
        "eye_color": "Brown",
        "hair_color": "Dark Brown",
        "specie": "Human"
      },
      {
        "id": "87b68b97-3774-495b-bf80-495a5f3e672d",
        "name": "Yasuko Kusakabe",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Yasuko_Kusakabe.png",
        "gender": "Female",
        "age": "36",
        "eye_color": "Brown",
        "hair_color": "Dark Brown",
        "specie": "Human"
      },
      {
        "id": "08ffbce4-7f94-476a-95bc-76d3c3969c19",
        "name": "Granny",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Granny.png",
        "gender": "Female",
        "age": "Elder",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Human"
      },
      {
        "id": "0f8ef701-b4c7-4f15-bd15-368c7fe38d0a",
        "name": "Kanta Ogaki",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Kanta.jpg",
        "gender": "Male",
        "age": "11",
        "eye_color": "Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "d39deecb-2bd0-4770-8b45-485f26e1381f",
        "name": "Totoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/df/Totoro_in_the_rain.png",
        "gender": "Male",
        "age": "1300",
        "eye_color": "Grey",
        "hair_color": "Grey",
        "specie": "Totoro"
      },
      {
        "id": "591524bc-04fe-4e60-8d61-2425e42ffb2a",
        "name": "Chu Totoro",
        "img": "https://www.ghibli.jp/gallery/thumb-totoro019.png",
        "gender": "NA",
        "age": "",
        "eye_color": "Black",
        "hair_color": "Blue",
        "specie": "Totoro"
      },
      {
        "id": "c491755a-407d-4d6e-b58a-240ec78b5061",
        "name": "Chibi Totoro",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c5/Little_Totoro_spirit_moving.gif",
        "gender": "NA",
        "age": "",
        "eye_color": "Black",
        "hair_color": "White",
        "specie": "Totoro"
      },
      {
        "id": "f467e18e-3694-409f-bdb3-be891ade1106",
        "name": "Catbus",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Catbus.jpg",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Yellow",
        "hair_color": "Brown",
        "specie": "Cat"
      }
    ],
    "locations": [
      {
        "id": "660c8c91-bd92-43db-b475-b2df6ca96fec",
        "name": "Kusakabe's House",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f3/Kusakabe_Family_House.jpg",
        "climate": "Mild",
        "terrain": "River",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "6fc21b76-78fb-4451-98f7-857e32a23e85",
        "name": "Matsugo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Min_Granne_Totoro_v%C3%A4rlden.jpg",
        "climate": "Continental",
        "terrain": "River",
        "surface_water": "60",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "ee897b2a-405e-42b9-bff4-8b51b0f03cab",
        "name": "Satsuki's School House",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/dd/Satsuki%27s_School_House.jpg",
        "climate": "Mild",
        "terrain": "River",
        "surface_water": "60",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": []
  },
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",
    "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
    "release_date": "1989",
    "rt_score": "96",
    "people": [
      {
        "id": "4151abc6-1a9e-4e6a-5678-aac05ra641js",
        "name": "Kiki",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg",
        "gender": "Female",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Witch"
      },
      {
        "id": "7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
        "name": "Jiji",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b4/Jiji.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Cat"
      },
      {
        "id": "6574cfr2-9w3d-2x1h-8531-gge23iu489ko",
        "name": "Ursula",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Ursula.jpg",
        "gender": "Female",
        "age": "18",
        "eye_color": "Black",
        "hair_color": "Red",
        "specie": "Human"
      },
      {
        "id": "4321dse3-6r6s-3r4d-5641-rdq19re765de",
        "name": "Tombo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/6f/Tombo.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "8252ebf6-1g8f-5t6u-1234-vvg45yd363dc",
        "name": "Osono",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/3a/Osono.jpg",
        "gender": "Female",
        "age": "30",
        "eye_color": "Brown",
        "hair_color": "Red",
        "specie": "Human"
      },
      {
        "id": "7654ght4-3r4t-1t5u-0987-hhj76gh432gr",
        "name": "Fukuo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/29/Fukuo.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "fb083a4e-77b2-4623-a2e0-6bbca5bfd5b2",
        "name": "Ursula's Log Cabin",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/Ursula%27s_Log_Cabin.jpg",
        "climate": "TODO",
        "terrain": "TODO",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "c57fb2cb-ea85-4d73-8808-cf5dcd28c22e",
        "name": "Koriko",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/05/Koriko.jpg",
        "climate": "Mild",
        "terrain": "Hill",
        "surface_water": "50",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "62346d33-caa0-4c17-8016-0aca56f3066b",
        "name": "Karikiya",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e3/Majo002.jpg",
        "climate": "Mild",
        "terrain": "City",
        "surface_water": "30",
        "residents": [
          "TODO"
        ]
      },
      {
        "id": "64a996aa-481e-4627-9624-ab23f59a05a9",
        "name": "Guchokipanya",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Gutiokipanja.jpg",
        "climate": "Continental",
        "terrain": "Hill",
        "surface_water": "50",
        "residents": [
          {
            "id": "8252ebf6-1g8f-5t6u-1234-vvg45yd363dc",
            "name": "Osono"
          },
          {
            "id": "7654ght4-3r4t-1t5u-0987-hhj76gh432gr",
            "name": "Fukuo"
          }
        ]
      }
    ],
    "vehicles": []
  },
  {
    "id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
    "title": "Only Yesterday",
    "description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
    "director": "Isao Takahata",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Only_Yesterday.jpg",
    "release_date": "1991",
    "rt_score": "100",
    "people": [
      {
        "id": "d0bb7b5f-3bf0-46c8-959d-0299b3252bd8",
        "name": "Taeko Okajima",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d4/Taeko_Okajima.png",
        "gender": "Female",
        "age": "27",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "3f78eba1-f9b0-489b-8686-f4508cdf049d",
        "name": "Toshio",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Toshio.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "52ed5cad-2464-481f-9786-8533b8de95ff",
        "name": "Mr. Okajima",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/58/Mr._Okajima.png",
        "gender": "Male",
        "age": "Middle age",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "87e61451-3131-4d01-a3b3-558c9ee1c451",
        "name": "Mrs. Okajima",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/18/Mrs._Okajima_%282%29.png",
        "gender": "Female",
        "age": "Middle age",
        "eye_color": "Black",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "0174e644-eddd-4cb7-8503-e0c21291d782",
        "name": "Grandmother Okajima",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Grandmother_Okajima_%282%29.jpg",
        "gender": "Female",
        "age": "Elder",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Human"
      },
      {
        "id": "a88cb7a4-fe4a-4d50-8d8b-c32449e298ba",
        "name": "Nanako Okajima",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Nanako_Okajima.png",
        "gender": "Female",
        "age": "18",
        "eye_color": "Black",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "c8f02850-0c1f-499c-8b5e-d8ad16f3ecc4",
        "name": "Yaeko Okajima",
        "gender": "Female",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a8/Yaeko_Okajima.jpg",
        "age": "16",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Human"
      },
      {
        "id": "6e960787-5a47-4178-a040-1ef5bf5e4a6c",
        "name": "Tani Tsuneko",
        "img": "https://www.anime-planet.com/images/characters/tani-tsuneko-100171.jpg",
        "gender": "Female",
        "age": "10",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "cd86aeb2-4fd7-4119-8128-7060e0a68074",
        "name": "Aiko",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Aiko.jpg",
        "gender": "Female",
        "age": "10",
        "eye_color": "Black",
        "hair_color": "Grey brown",
        "specie": "Human"
      },
      {
        "id": "3ab1e0de-4d41-4f67-b2d0-e16d0fef2e6c",
        "name": "Toko",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/af/Toko.jpg",
        "gender": "Female",
        "age": "10",
        "eye_color": "Black",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "f4a85428-18b7-4199-ba5a-b6bcfb478e14",
        "name": "Rie",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/00/Rie_01.png",
        "gender": "Female",
        "age": "10",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "dbeeaecb-7817-4b8b-90ca-edc432d3033e",
        "name": "Taeko's House",
        "img": "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1571850401468-9TTOSKJGO49OEAKEJ4O6/Art+of+Only+Yesterday+C+-+8.jpg",
        "climate": "Continental",
        "terrain": "River",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": []
  },
  {
    "id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
    "title": "Porco Rosso",
    "description": "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "poster" : "https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Porco_Rosso.jpg",
    "release_date": "1992",
    "rt_score": "94",
    "people": [
      {
        "id": "6523068d-f5a9-4150-bf5b-76abe6fb42c3",
        "name": "Porco Rosso",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/02/Porcellino%21.png",
        "gender": "Male",
        "age": "47",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "eff43a47-e59c-41bd-bcc6-b1827d63bed5",
        "name": "Donald Curtis",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/61/Donald_Curtis.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "4a2e2cee-08ca-4d44-9564-2b3e5421bafb",
        "name": "Fio Piccolo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/16/Fio_%282%29.jpg",
        "gender": "Female",
        "age": "17",
        "eye_color": "Brown",
        "hair_color": "Red",
        "specie": "Human"
      },
      {
        "id": "127317b3-f6f8-4aea-b294-20452a3334f5",
        "name": "Gina",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/Gina.jpg",
        "gender": "Female",
        "age": "circa 23-35",
        "eye_color": "Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "2ac81cc3-7292-40ab-9e8f-4a370a58e3c8",
        "name": "Mr. Piccolo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0e/Mr_Piccolo.jpg",
        "gender": "Male",
        "age": "Middle aged",
        "eye_color": "Brown",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "a63c25f4-41a4-4f78-933f-3c14e2903a8f",
        "name": "Capo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/98/Aiuto_Gang_boss.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Bald",
        "specie": "Human"
      },
      {
        "id": "5fd7416f-d928-4ebc-a4fb-d9bbdf99b06a",
        "name": "Ferrari",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/be/Porco_Rosso_-_Ferrari.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "34df8f25-8f80-4823-8f01-bf9852039987",
        "name": "Piccolo S.P.A.",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4f/Piccolos_garage.jpg",
        "climate": "Continental",
        "terrain": "River",
        "surface_water": "40",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "d8f893b5-1dd9-41a1-9918-0099c1aa2de8",
        "name": "Red Wing",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8f/Porco%27s_Plane.jpg",
        "description": "An experimental aircraft captured by Porco. Named Savoia S.21",
        "vehicle_class": "Airplane",
        "length": "20",
        "pilot": {
          "id": "6523068d-f5a9-4150-bf5b-76abe6fb42c3",
          "name": "Porco Rosso"
        }
      },
      {
        "id": "7eb1b9cd-8153-4ef6-a0d4-1e9abd8d78da",
        "name": "Dabohaze",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/99/Aiuto_Gang.jpg",
        "description": "It's the Mamma Aiuto Gang's battle ship, They're an air pirate gang lead by Capo",
        "vehicle_class": "Battle ship",
        "length": "NA",
        "pilot": {
          "id": "a63c25f4-41a4-4f78-933f-3c14e2903a8f",
          "name": "Capo"
        }
      }
    ]
  },
  {
    "id": "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
    "title": "Pom Poko",
    "description": "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
    "director": "Isao Takahata",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/9/9e/Pom_Poko.jpg",
    "release_date": "1994",
    "rt_score": "78",
    "people": [
      {
        "id": "575d6943-f9da-445e-8e77-e118c3924a1d",
        "name": "Shoukichi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Shoukichi_1.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Raccoon Dog"
      },
      {
        "id": "9298c4fe-a508-463f-aad7-d55742e9a4e5",
        "name": "Okiyo",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/bd/Okiyo.jpg",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Raccoon Dog"
      },
      {
        "id": "220c7498-c390-4456-b853-bac107d16ff7",
        "name": "Seizaemon",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Seizaemon.jpg",
        "gender": "Male",
        "age": "Elder",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Raccoon Dog"
      },
      {
        "id": "718f634a-ea92-4907-a262-5a71a0661dcd",
        "name": "Oroku",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/07/Oroku.jpg",
        "gender": "Female",
        "age": "Elder",
        "eye_color": "Black",
        "hair_color": "Grey brown",
        "specie": "Raccoon Dog"
      },
      {
        "id": "7367f154-4d9b-4e3e-89cf-2bd55c4d817f",
        "name": "Gonta",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0b/Gonta.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Raccoon Dog"
      },
      {
        "id": "041cad03-ad0d-4f80-aeaa-71f9f64334df",
        "name": "Inugami Gyōbu",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/99/Inugami.jpg",
        "gender": "Male",
        "age": "Elder",
        "eye_color": "Black",
        "hair_color": "Grey brown",
        "specie": "Raccoon Dog"
      }
    ],
    "locations": [],
    "vehicles": []
  },
  {
    "id": "45204234-adfd-45cb-a505-a8e7a676b114",
    "title": "My Neighbors the Yamadas",
    "description": "The Yamadas are a typical middle class Japanese family in urban Tokyo and this film shows us a variety of episodes of their lives. With tales that range from the humourous to the heartbreaking, we see this family cope with life's little conflicts, problems and joys in their own way.",
    "director": "Isao Takahata",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbors_the_Yamadas.jpg",
    "release_date": "1999",
    "rt_score": "75",
    "people": [
      {
        "id": "7b3324ad-0ac9-417d-9905-ac001f6b7b1a",
        "name": "Takashi Yamada",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/84/Takashi.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "562cf83f-fe38-44bf-8840-f8120b373c07",
        "name": "Matsuko Yamada",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/85/Matsuko_Yamada.png",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Black",
        "hair_color": "Grey",
        "specie": "Human"
      },
      {
        "id": "33504e52-626b-4718-b324-d06a5b64ccfe",
        "name": "Noboru Yamada",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d4/Noboru.jpg",
        "gender": "Male",
        "age": "13",
        "eye_color": "Black",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "097a7111-7bca-43e2-b8ad-0042c175b8c9",
        "name": "Nonoko Yamada",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/56/Nonoko_Yamada.jpg",
        "gender": "Female",
        "age": "5",
        "eye_color": "Black",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "10857681-11a2-48df-98ec-de711a6c56cf",
        "name": "Shige Yamano",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/97/Shige_Yamano.jpg",
        "gender": "Female",
        "age": "Elder",
        "eye_color": "Black",
        "hair_color": "White",
        "specie": "Human"
      }
    ],
    "locations": [],
    "vehicles": []
  },
]
let locationdif=[
  [
    {
      "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      "title": "Castle in the Sky",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
      "release_date": "1986",
      "rt_score": "95",
      "people": [
        {
          "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
          "name": "Pazu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
          "name": "Lusheeta Toel Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
          "name": "Dola",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b3/Dola.png",
          "gender": "Female",
          "age": "60",
          "eye_color": "Black",
          "hair_color": "Peach",
          "specie": "Human"
        },
        {
          "id": "abe886e7-30c8-4c19-aaa5-d666e60d14de",
          "name": "Romska Palo Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d5/Muska.jpg",
          "gender": "Male",
          "age": "33",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "e08880d0-6938-44f3-b179-81947e7873fc",
          "name": "Uncle Pom",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/de/Uncle_Pom.png",
          "gender": "Male",
          "age": "Unspecified/Elderly",
          "eye_color": "Black",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
          "name": "General Muoro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Muoro.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Black",
          "hair_color": "None",
          "specie": "Human"
        },
        {
          "id": "3f4c408b-0bcc-45a0-bc8b-20ffc67a2ede",
          "name": "Duffi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0a/Duffi.png",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "fcb4a2ac-5e41-4d54-9bba-33068db083ca",
          "name": "Louis",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/28/Charlies.jpg",
          "gender": "Male",
          "age": "30",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "2cb76c15-772a-4cb3-9919-3652f56611d0",
          "name": "Charles",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f0/Charlie.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Light brown",
          "specie": "Human"
        },
        {
          "id": "f6f2c477-98aa-4796-b9aa-8209fdeed6b9",
          "name": "Henri",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/15/Henri.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "Reddish brown",
          "specie": "Human"
        },
        {
          "id": "05d8d01b-0c2f-450e-9c55-aa0daa34838e",
          "name": "Motro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/17/Eggman_laputa.jpg",
          "gender": "Male",
          "age": "Unspecified/Adult",
          "eye_color": "Dark brown",
          "hair_color": "None",
          "specie": "Human"
        },
        {
          "id": "b22a684f-1819-40c8-94a6-d40c3b5e18eb",
          "name": "Okami",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/65/Okami.jpg",
          "gender": "Female",
          "age": "50",
          "eye_color": "Dark brown",
          "hair_color": "Orange",
          "specie": "Human"
        },
        {
          "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
          "name": "Colonel Muska",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d3/Colonelmuska2bodyguards.JPG",
          "gender": "Male",
          "age": "33",
          "eye_color": "Grey",
          "hair_color": "Brown",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "6ba60a86-7c74-4ec4-a6f4-7112b5705a2f",
          "name": "Gondoa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Thumbnail-8.jpeg",
          "climate": "TODO",
          "terrain": "TODO",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "26361a2c-32c6-4bd5-ae9c-8e40e17ae28d",
          "name": "Pazu's Mines",
          "img": "https://preview.redd.it/fmikehlh8dl41.jpg?auto=webp&s=a997a7d6726fc151a438985899b052d0fd357716",
          "climate": "Dry",
          "terrain": "Hill",
          "surface_water": "0",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "0fafa7a3-64c1-43fe-881b-ecb605c01e09",
          "name": "Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Laputa.png",
          "climate": "Continental",
          "terrain": "City",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "0132f7f6-fd52-4ac3-b5df-c96b609f77b6",
          "name": "Tedis",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/13/Tedis.jpg",
          "climate": "Continental",
          "terrain": "Hill",
          "surface_water": "30",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": [
        {
          "id": "4e09b023-f650-4747-9ab9-eacf14540cfb",
          "name": "Air Destroyer Goliath",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e5/Goliath.png",
          "description": "A military airship utilized by the government to access Laputa",
          "vehicle_class": "Airship",
          "length": "1,000",
          "pilot": {
            "id": "40c005ce-3725-4f15-8409-3e1b1b14b583",
            "name": "Colonel Muska"
          }
        }
      ]
    },
    {
      "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
      "title": "My Neighbor Totoro",
      "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
      "director": "Hayao Miyazaki",
      "producer": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
      "release_date": "1988",
      "rt_score": "93",
      "people": [
        {
          "id": "986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
          "name": "Satsuki Kusakabe",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
          "gender": "Female",
          "age": "11",
          "eye_color": "Dark Brown/Black",
          "hair_color": "Dark Brown",
          "specie": "Human"
        },
        {
          "id": "d5df3c04-f355-4038-833c-83bd3502b6b9",
          "name": "Mei Kusakabe",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/God_Jul_Mei_%C3%B6nskar_fr%C3%A5n_Tomten.jpg",
          "gender": "Female",
          "age": "4",
          "eye_color": "Brown",
          "hair_color": "Light Brown",
          "specie": "Human"
        },
        {
          "id": "3031caa8-eb1a-41c6-ab93-dd091b541e11",
          "name": "Tatsuo Kusakabe",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d6/Tatsuo_Kusakabe.jpg",
          "gender": "Male",
          "age": "37",
          "eye_color": "Brown",
          "hair_color": "Dark Brown",
          "specie": "Human"
        },
        {
          "id": "87b68b97-3774-495b-bf80-495a5f3e672d",
          "name": "Yasuko Kusakabe",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Yasuko_Kusakabe.png",
          "gender": "Female",
          "age": "36",
          "eye_color": "Brown",
          "hair_color": "Dark Brown",
          "specie": "Human"
        },
        {
          "id": "08ffbce4-7f94-476a-95bc-76d3c3969c19",
          "name": "Granny",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Granny.png",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Human"
        },
        {
          "id": "0f8ef701-b4c7-4f15-bd15-368c7fe38d0a",
          "name": "Kanta Ogaki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Kanta.jpg",
          "gender": "Male",
          "age": "11",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "d39deecb-2bd0-4770-8b45-485f26e1381f",
          "name": "Totoro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/df/Totoro_in_the_rain.png",
          "gender": "Male",
          "age": "1300",
          "eye_color": "Grey",
          "hair_color": "Grey",
          "specie": "Totoro"
        },
        {
          "id": "591524bc-04fe-4e60-8d61-2425e42ffb2a",
          "name": "Chu Totoro",
          "img": "https://www.ghibli.jp/gallery/thumb-totoro019.png",
          "gender": "NA",
          "age": "",
          "eye_color": "Black",
          "hair_color": "Blue",
          "specie": "Totoro"
        },
        {
          "id": "c491755a-407d-4d6e-b58a-240ec78b5061",
          "name": "Chibi Totoro",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c5/Little_Totoro_spirit_moving.gif",
          "gender": "NA",
          "age": "",
          "eye_color": "Black",
          "hair_color": "White",
          "specie": "Totoro"
        },
        {
          "id": "f467e18e-3694-409f-bdb3-be891ade1106",
          "name": "Catbus",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Catbus.jpg",
          "gender": "Male",
          "age": "NA",
          "eye_color": "Yellow",
          "hair_color": "Brown",
          "specie": "Cat"
        }
      ],
      "locations": [
        {
          "id": "660c8c91-bd92-43db-b475-b2df6ca96fec",
          "name": "Kusakabe's House",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f3/Kusakabe_Family_House.jpg",
          "climate": "Mild",
          "terrain": "River",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "6fc21b76-78fb-4451-98f7-857e32a23e85",
          "name": "Matsugo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Min_Granne_Totoro_v%C3%A4rlden.jpg",
          "climate": "Continental",
          "terrain": "River",
          "surface_water": "60",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "ee897b2a-405e-42b9-bff4-8b51b0f03cab",
          "name": "Satsuki's School House",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/dd/Satsuki%27s_School_House.jpg",
          "climate": "Mild",
          "terrain": "River",
          "surface_water": "60",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    },
    {
      "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
      "title": "Kiki's Delivery Service",
      "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
      "director": "Hayao Miyazaki",
      "producer": "Hayao Miyazaki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
      "release_date": "1989",
      "rt_score": "96",
      "people": [
        {
          "id": "4151abc6-1a9e-4e6a-5678-aac05ra641js",
          "name": "Kiki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Witch"
        },
        {
          "id": "7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
          "name": "Jiji",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b4/Jiji.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Cat"
        },
        {
          "id": "6574cfr2-9w3d-2x1h-8531-gge23iu489ko",
          "name": "Ursula",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/12/Ursula.jpg",
          "gender": "Female",
          "age": "18",
          "eye_color": "Black",
          "hair_color": "Red",
          "specie": "Human"
        },
        {
          "id": "4321dse3-6r6s-3r4d-5641-rdq19re765de",
          "name": "Tombo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/6f/Tombo.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "8252ebf6-1g8f-5t6u-1234-vvg45yd363dc",
          "name": "Osono",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/3a/Osono.jpg",
          "gender": "Female",
          "age": "30",
          "eye_color": "Brown",
          "hair_color": "Red",
          "specie": "Human"
        },
        {
          "id": "7654ght4-3r4t-1t5u-0987-hhj76gh432gr",
          "name": "Fukuo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/29/Fukuo.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "fb083a4e-77b2-4623-a2e0-6bbca5bfd5b2",
          "name": "Ursula's Log Cabin",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/Ursula%27s_Log_Cabin.jpg",
          "climate": "TODO",
          "terrain": "TODO",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "c57fb2cb-ea85-4d73-8808-cf5dcd28c22e",
          "name": "Koriko",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/05/Koriko.jpg",
          "climate": "Mild",
          "terrain": "Hill",
          "surface_water": "50",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "62346d33-caa0-4c17-8016-0aca56f3066b",
          "name": "Karikiya",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e3/Majo002.jpg",
          "climate": "Mild",
          "terrain": "City",
          "surface_water": "30",
          "residents": [
            "TODO"
          ]
        },
        {
          "id": "64a996aa-481e-4627-9624-ab23f59a05a9",
          "name": "Guchokipanya",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Gutiokipanja.jpg",
          "climate": "Continental",
          "terrain": "Hill",
          "surface_water": "50",
          "residents": [
            {
              "id": "8252ebf6-1g8f-5t6u-1234-vvg45yd363dc",
              "name": "Osono"
            },
            {
              "id": "7654ght4-3r4t-1t5u-0987-hhj76gh432gr",
              "name": "Fukuo"
            }
          ]
        }
      ],
      "vehicles": []
    },
    {
      "id": "4e236f34-b981-41c3-8c65-f8c9000b94e7",
      "title": "Only Yesterday",
      "description": "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
      "director": "Isao Takahata",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Only_Yesterday.jpg",
      "release_date": "1991",
      "rt_score": "100",
      "people": [
        {
          "id": "d0bb7b5f-3bf0-46c8-959d-0299b3252bd8",
          "name": "Taeko Okajima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d4/Taeko_Okajima.png",
          "gender": "Female",
          "age": "27",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "3f78eba1-f9b0-489b-8686-f4508cdf049d",
          "name": "Toshio",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Toshio.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "52ed5cad-2464-481f-9786-8533b8de95ff",
          "name": "Mr. Okajima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/58/Mr._Okajima.png",
          "gender": "Male",
          "age": "Middle age",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "87e61451-3131-4d01-a3b3-558c9ee1c451",
          "name": "Mrs. Okajima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/18/Mrs._Okajima_%282%29.png",
          "gender": "Female",
          "age": "Middle age",
          "eye_color": "Black",
          "hair_color": "Light brown",
          "specie": "Human"
        },
        {
          "id": "0174e644-eddd-4cb7-8503-e0c21291d782",
          "name": "Grandmother Okajima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0f/Grandmother_Okajima_%282%29.jpg",
          "gender": "Female",
          "age": "Elder",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Human"
        },
        {
          "id": "a88cb7a4-fe4a-4d50-8d8b-c32449e298ba",
          "name": "Nanako Okajima",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Nanako_Okajima.png",
          "gender": "Female",
          "age": "18",
          "eye_color": "Black",
          "hair_color": "Light brown",
          "specie": "Human"
        },
        {
          "id": "c8f02850-0c1f-499c-8b5e-d8ad16f3ecc4",
          "name": "Yaeko Okajima",
          "gender": "Female",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a8/Yaeko_Okajima.jpg",
          "age": "16",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Human"
        },
        {
          "id": "6e960787-5a47-4178-a040-1ef5bf5e4a6c",
          "name": "Tani Tsuneko",
          "img": "https://www.anime-planet.com/images/characters/tani-tsuneko-100171.jpg",
          "gender": "Female",
          "age": "10",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "cd86aeb2-4fd7-4119-8128-7060e0a68074",
          "name": "Aiko",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Aiko.jpg",
          "gender": "Female",
          "age": "10",
          "eye_color": "Black",
          "hair_color": "Grey brown",
          "specie": "Human"
        },
        {
          "id": "3ab1e0de-4d41-4f67-b2d0-e16d0fef2e6c",
          "name": "Toko",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/af/Toko.jpg",
          "gender": "Female",
          "age": "10",
          "eye_color": "Black",
          "hair_color": "Light brown",
          "specie": "Human"
        },
        {
          "id": "f4a85428-18b7-4199-ba5a-b6bcfb478e14",
          "name": "Rie",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/00/Rie_01.png",
          "gender": "Female",
          "age": "10",
          "eye_color": "Black",
          "hair_color": "Grey",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "dbeeaecb-7817-4b8b-90ca-edc432d3033e",
          "name": "Taeko's House",
          "img": "https://images.squarespace-cdn.com/content/v1/54fc8146e4b02a22841f4df7/1571850401468-9TTOSKJGO49OEAKEJ4O6/Art+of+Only+Yesterday+C+-+8.jpg",
          "climate": "Continental",
          "terrain": "River",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    },
    {
      "id": "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
      "title": "Porco Rosso",
      "description": "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
      "director": "Hayao Miyazaki",
      "producer": "Toshio Suzuki",
      "poster" : "https://static.wikia.nocookie.net/studio-ghibli/images/4/41/Porco_Rosso.jpg",
      "release_date": "1992",
      "rt_score": "94",
      "people": [
        {
          "id": "6523068d-f5a9-4150-bf5b-76abe6fb42c3",
          "name": "Porco Rosso",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/02/Porcellino%21.png",
          "gender": "Male",
          "age": "47",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "eff43a47-e59c-41bd-bcc6-b1827d63bed5",
          "name": "Donald Curtis",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/61/Donald_Curtis.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "4a2e2cee-08ca-4d44-9564-2b3e5421bafb",
          "name": "Fio Piccolo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/16/Fio_%282%29.jpg",
          "gender": "Female",
          "age": "17",
          "eye_color": "Brown",
          "hair_color": "Red",
          "specie": "Human"
        },
        {
          "id": "127317b3-f6f8-4aea-b294-20452a3334f5",
          "name": "Gina",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/Gina.jpg",
          "gender": "Female",
          "age": "circa 23-35",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "2ac81cc3-7292-40ab-9e8f-4a370a58e3c8",
          "name": "Mr. Piccolo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0e/Mr_Piccolo.jpg",
          "gender": "Male",
          "age": "Middle aged",
          "eye_color": "Brown",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "a63c25f4-41a4-4f78-933f-3c14e2903a8f",
          "name": "Capo",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/98/Aiuto_Gang_boss.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Bald",
          "specie": "Human"
        },
        {
          "id": "5fd7416f-d928-4ebc-a4fb-d9bbdf99b06a",
          "name": "Ferrari",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/b/be/Porco_Rosso_-_Ferrari.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "34df8f25-8f80-4823-8f01-bf9852039987",
          "name": "Piccolo S.P.A.",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4f/Piccolos_garage.jpg",
          "climate": "Continental",
          "terrain": "River",
          "surface_water": "40",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": [
        {
          "id": "d8f893b5-1dd9-41a1-9918-0099c1aa2de8",
          "name": "Red Wing",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8f/Porco%27s_Plane.jpg",
          "description": "An experimental aircraft captured by Porco. Named Savoia S.21",
          "vehicle_class": "Airplane",
          "length": "20",
          "pilot": {
            "id": "6523068d-f5a9-4150-bf5b-76abe6fb42c3",
            "name": "Porco Rosso"
          }
        },
        {
          "id": "7eb1b9cd-8153-4ef6-a0d4-1e9abd8d78da",
          "name": "Dabohaze",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/99/Aiuto_Gang.jpg",
          "description": "It's the Mamma Aiuto Gang's battle ship, They're an air pirate gang lead by Capo",
          "vehicle_class": "Battle ship",
          "length": "NA",
          "pilot": {
            "id": "a63c25f4-41a4-4f78-933f-3c14e2903a8f",
            "name": "Capo"
          }
        }
      ]
    },
  ]
]
describe('filtervehicles', () => {
  it('is a function', () => {
    expect(typeof filtervehicles).toBe('function');
  });

  it('deberia retornar las peliculas que contienen vehiculos', () => {
    expect(filtervehicles(moviesvehicules)).toEqual(moviesdif);
  });
})
/*describe('filterlocation', () => {
  it('is a function', () => {
    expect(typeof filterlocation).toBe('function');
  });

  it('deberia retornar las peliculas que contienen locaciones', () => {
    expect(filterlocation(movieslocation)).toEqual(locationdif);
  });
})*/




/*xdescribe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

/* importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid('4083952015263')).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid('79927398713')).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid('1234567890')).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify('4556364607935616')).toBe('############5616');
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify('1')).toBe('1');
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(validator.maskify('helloworld')).toBe('######orld');
    });
  });
});
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
*/
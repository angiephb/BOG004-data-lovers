import {filtervehicles, filterlocation, rtgood, rtregular, rtbad, orderaz, orderza, orderfecha12, orderfecha21, stadistics} from '../src/data.js';
//, filterlocation, rtgood, rtregular, rtbad, characters}
let filterv={
  "films": [
  {  //primer film
    "title": "Castle in the Sky",
    "vehicles":[
      {
        "name":"Air Destroyer Goliath"
      }
    ],
    "locations": [
      {
        "name": "Gondoa"
      }

    ],
    "rt_score": "100"
  }, // termina primer film
  {
    "title": "Kiki's Delivery Service",
    "vehicles":[
      {
        "name":"Red Wing"

      }
    ],
    "locations": [
      {
        "name": "Seiji's House"
      }

    ],
    "rt_score": "85"
  },
  {
    "title": "When Marnie Was There",
    "vehicles":[],
    "locations": [],
    "rt_score": "41"
  }
]
}

describe('filtervehicles', () => { //test filtro vehiculos
  it('is a function', () => {
    expect(typeof filtervehicles).toBe('function');
  });

  it('deberia retornar las peliculas que contienen vehiculos', () => {
    const result= filtervehicles(filterv)
    expect(result).toHaveLength(2);
  });
})

describe('filterlocation', () => { //test filtro locaciones
  it('is a function', () => {
    expect(typeof filterlocation).toBe('function');
  });

  it('deberia retornar las peliculas que contienen locaciones', () => {
    const result= filterlocation(filterv)
    expect(result).toHaveLength(2);
  });
})

describe('rtgood', () => { //test filtro rt buena
  it('is a function', () => {
    expect(typeof rtgood).toBe('function');
  });

  it('deberia retornas las peliculas con buena puntuacion', () => {
    const result= rtgood(filterv)
    expect(result).toHaveLength(1);
  });
})

describe('rtregular', () => { //test filtro rt regular
  it('is a function', () => {
    expect(typeof rtregular).toBe('function');
  });

  it('deberia retornas las peliculas con puntuacion regular', () => {
    const result= rtregular(filterv)
    expect(result).toHaveLength(1);
  });
})

describe('rtbad', () => { //test filtro rt malo
  it('is a function', () => {
    expect(typeof rtbad).toBe('function');
  });

  it('deberia retornas las peliculas con mala puntuacion', () => {
    const result= rtbad(filterv)
    expect(result).toHaveLength(1);
  });
})

describe('orderaz', () => { //test orden az
  it('is a function', () => {
    expect(typeof orderaz).toBe('function');
  });

  it('deberia retornar los titulos de las peliculas ordenados', () => {
    const arrinit= {
      "films":[
      {  //primer film
        "title": "Kiki's Delivery Service"
        }, // termina primer film
      {
        "title": "Castle in the Sky" 
      },
      {
        "title": "When Marnie Was There",
      }
    ]}
    const result=[
      {  //primer film
        "title": "Castle in the Sky"
      }, // termina primer film
      {
        "title": "Kiki's Delivery Service"
      },
      {
        "title": "When Marnie Was There"
      }
    ]
    expect(orderaz(arrinit)).toEqual(result);
  });
})

describe('orderza', () => { //test orden za
  it('is a function', () => {
    expect(typeof orderza).toBe('function');
  });

  it('deberia retornar los titulos de las peliculas ordenados de forma descendente', () => {
    const arrinit= {
      "films":[
      {  //primer film
        "title": "Kiki's Delivery Service"
        }, // termina primer film
      {
        "title": "Castle in the Sky" 
      },
      {
        "title": "When Marnie Was There",
      }
    ]}
    const result=[
      {  //primer film
        "title": "When Marnie Was There"
      }, // termina primer film
      {
        "title": "Kiki's Delivery Service"
      },
      {
        "title": "Castle in the Sky"
      }
    ]
    expect(orderza(arrinit)).toEqual(result);
  });
})

describe('orderfecha12', () => { //test orden mas antiguo
  it('is a function', () => {
    expect(typeof orderfecha12).toBe('function');
  });

  it('deberia retornar las peliculas ordenadas por el año de lanzamiento mas antiguo a mas reciente', () => {
    const arrinit= {
      "films":[
      {  //primer film
        "release_date": "2002"
        }, // termina primer film
      {
        "release_date": "1986"
      },
      {
        "release_date": "1991",
      }
    ]}
    const result=[
      {  //primer film
        "release_date": "1986"
      }, // termina primer film
      {
        "release_date": "1991",
      },
      {
        "release_date": "2002",
      }
    ]
    expect(orderfecha12(arrinit)).toEqual(result);
  });
})

describe('orderfecha21', () => { //test orden mas reciente
  it('is a function', () => {
    expect(typeof orderfecha21).toBe('function');
  });

  it('deberia retornar las peliculas ordenadas por el año de lanzamiento mas reciente a mas antiguo', () => {
    const arrinit= {
      "films":[
      {  //primer film
        "release_date": "2002"
        }, // termina primer film
      {
        "release_date": "1986"
      },
      {
        "release_date": "1991",
      }
    ]}
    const result=[
      {  //primer film
        "release_date": "2002"
      }, // termina primer film
      {
        "release_date": "1991",
      },
      {
        "release_date": "1986",
      }
    ]
    expect(orderfecha21(arrinit)).toEqual(result);
  });
})

describe("stadistics", () => { //test promedio estadistica

  it('is a function', () => {
    expect(typeof stadistics).toBe('function');
  });
  test('deberia retornar el promedio de los rt score', () => {
    expect(stadistics(filterv)).toBe( 75.33333333333333);
  });
})
  

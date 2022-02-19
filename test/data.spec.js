import {filtervehicles, filterlocation, rtgood, rtregular, rtbad, characters, orderaz, orderza, orderfecha12, orderfecha21, stadistics} from '../src/data.js';
//, filterlocation, rtgood, rtregular, rtbad, characters}
let filterv=[
  {
    "vehicles":[
      {
        "name":"Air Destroyer Goliath"
      }
    ]
  },
  {
    "vehicles":[
      {
        "name":"Red Wing"

      }
    ]
  },
  {
    "vehicles":[]
  }
]

describe('filtervehicles', () => {
  it('is a function', () => {
    expect(typeof filtervehicles).toBe('function');
  });

  it('deberia retornar las peliculas que contienen vehiculos', () => {
    const result= filtervehicles('vehicles',true, filterv)
    expect(result).toHavelength(1);
  });
  it('deberia retornar las peliculas que contienen vehiculos', () => {
    const result= filtervehicles('vehicles',true, filterv)
    expect(result).toHavelength(0);
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
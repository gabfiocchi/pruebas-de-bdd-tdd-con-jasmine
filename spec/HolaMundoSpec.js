/* Ejemplo 1*/

describe('Hola mundodd', function () { 
  it('debe saludar al mundo en español', function () { 
    expect(saludar()).toEqual('¡Hola Mundo!'); 
  });

  it('debe saludar al mundo en inglés', function () { 
    expect(saludar('inglés')).toEqual('Hello World!'); 
  });

  it('debe saludar al mundo en alemán', function () { 
    expect(saludar('alemán')).toEqual('Hallo Welt!'); 
  });

  it('debe saludar al mundo en francés', function () { 
    expect(saludar('francés')).toEqual('Bonjour Monde!'); 
  }); 
});

/* Ejemplo 2*/

/*describe('Hola mundo', function () {

  beforeEach(function () {
    jasmine.addMatchers({
      toBeGreeting: function () {
        return {
          compare: function (saludo) {
            var resultado = {};
            resultado.pass = saludo.match(/hola|hello|hallo|bonjour/i);
            return resultado;
          }
        }
      }
    });
  });

  it('debe saludar al mundo en español', function () {
    expect(saludar()).toBeGreeting();
  });

  it('debe saludar al mundo en inglés', function () {
    expect(saludar('inglés')).toBeGreeting();
  });

  it('debe saludar al mundo en alemán', function () {
    expect(saludar('alemán')).toBeGreeting();
  });

  it('debe saludar al mundo en francés', function () {
    expect(saludar('francés')).toBeGreeting();
  });
});
*/
// 1

function deepCloneObject(obj) {
    var key,value;
    var clone = Object.create(obj);

    for (key in obj) {
        if (obj.hasOwnProperty(key) === true) {
            value = obj[key];

            if (value!==null && typeof value==="object") {
                clone[key] = deepCloneObject(value);
            } else {
                clone[key] = value;
            }
        }
    }

    return clone;
}

var initialObj = {
          string: 'Vasya',
          number: 30,
          boolean: true,
          undefined: undefined,
          null: null,
          array: [1, 2, 3],
          object: {
              string2: 'Petrov',
              object2: {
                  array2: [{}, {}]
              },
              object3: {}
          },
          method: function() {
              alert('Hello');
          }
      };

      var clonedObj = deepCloneObject(initialObj);

      clonedObj.object.object2.array2[1].name = 'Andrey';
      clonedObj.array.push(2);

      console.log(initialObj);
      console.log(clonedObj);

// 2

var obj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
      string2: 'Petrov',
      object2: {
        array2: [{}, {}],
      },
      object3: {},
    },
  };
  var obj1 = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
      string2: 'Petrov',
      object2: {
        array2: [{}, {}],
      },
      object3: {},
    },
    method: function () {
      alert('Hello');
    },
  };
  
  function deepCompare(object1, object2) {
    var keys = Object.keys(object1);
  
    for (var key of keys) {
      if (isNaN(object1[key]) || Array.isArray(object1[key]) || typeof object1[key] === 'function') continue;
      if (object1[key] && typeof object1[key] === 'object' && !deepCompare(object1[key], object2[key])) {
        return false;
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  
  console.log(deepCompare(obj, obj1));
  
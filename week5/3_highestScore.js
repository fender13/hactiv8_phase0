function highestScore (students) {
  // Code disini
  var obj = {}
  var listKelas = []
  
  var person = []

  for (i = 0; i < students.length; i++) {
    var kelas = students[i].class
    if (listKelas.includes(kelas)) {
      // do nothing
    } else {
      listKelas.push(kelas)
    }
    obj[kelas] = {}
  }

  for (j = 0; j < listKelas.length; j++) {
    var max = 0
    for (k = 0; k < students.length; k++) {
      // console.log(listKelas[j] + ' ' + students[k].class)
      if (students[k].class == listKelas[j]) {
        if (students[k].score > max) {
          max = students[k].score
          var obj2 = {}
          obj2.name = students[k].name
          obj2.score = students[k].score

          obj[students[k].class] = obj2
        } 
      } 
    }
  }

  return obj
  // return listKelas
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
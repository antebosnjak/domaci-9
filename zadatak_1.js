/*
1. Koristeci dvije ugnjezdene for petlje napisi funkciju koja kao ulazni parametar prima niz brojeva,
te kao rezultat vraca sortirani niz brojeva od veceg prema manjem.
Primjer:
Input: [4,2,6,4,2,1]
Output: [1,2,2,4,4,6]
Dodatno: Pokusaj analizirati koliki bi bio ukupni broj iteracija za niz proizvoljne duzine.
*/




function sort(ar) {
    let noviniz;
    let newar = [];


    for (let i = 1; i < ar.length; i++) {
      for (let j = 0; j < i; j++) {
        if (ar[i] < ar[j]) { 
          newar = ar[i];
          ar[i] = ar[j];
          ar[j] = newar;


        }
      }
    }
    return ar;
  }
  
  let test = [8, 9, 7, 77, 3, 1];
  console.log(sort(test));
  
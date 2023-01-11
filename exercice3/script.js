let age = [20,5,12,43,98,55];

let age1 = 0;
let age2= 0;

for (let i = 0; i < age.length; i++) {
    age1 += age[i];
    if (age[i] > age2) {
        age2 = age[i];
    }
}

console.log("l'ajout de Toutes les années est " + age1);
console.log("les vieilles années de toutes les années est " + age2);
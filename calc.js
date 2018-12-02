const operations = require('./operations.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`
Calc.js

Bienvenue à l'application Node.js Calculator !
Version: 1.0.0.

Usage: Il sera demandé à l'utilisateur d'entrer deux nombres,
puis de sélectionner l'opération de son choix
`);

rl.question('Entrez un premier nombre: ', (x) => {
    rl.question('Entrez un second nombre: ', (y) => {
        rl.question(`
  Veuillez sélectionner une des options suivantes:
  [1] Addition (+)
  [2] Subtraction (-)
  [3] Multiplication (*)
  [4] Division (/)
  Enter your choice: `, (choice) => {
            switch (choice) {
                case '1':
                    console.log(`La somme de ${x} et ${y} est ${operations.additioner(x, y)}.`);
                    break;
                case '2':
                    console.log(`La difference entre ${x} et ${y} est ${operations.soustraire(x, y)}.`);
                    break;
                case '3':
                        console.log(`La multiplication de ${x} et ${y} est ${operations.multiplier(x, y)}.`);
                        break;
                case '4':
                        console.log(`La difference entre ${x} et ${y} est ${operations.diviser(x, y)}.`);
                        break;
                default:
                    console.log('Veuillez redémarrer le programme et choisir un nombre entre 1 et 2');
                    break;
            }
            rl.close();
        });
    });
});

/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  let celsiusSaisi = Number(prompt('Entrez une température en celsius'));
  if(isNaN(celsiusSaisi)) {
    alert('Entrez un nombre !!');
  } else {
    let farenheit = celsiusSaisi * 9 / 5;
    alert(`Résultat:, ${farenheit} !`);
  }

}()); // Main IIFE


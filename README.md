# Example Angular (2,4,5)

## questions

- what are the technical differences between development/production mode ?

## Notes

- Migrer d'AngularJS vers Angular (see [Upgrade guide](https://angular.io/guide/upgrade))
    - on peut faire cohabiter Angular et AngularJS
    - on peut utilser ngUpgrade
    - respecter certaines conventions d'écriture et stucturer son code pour faciliter la migration (see [AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md))
    - l'internationalisation doit respecter les recommendations Angular [Internationalization (i18n)](see (https://angular.io/guide/i18n))
- Le selector d'un composant doit obligatoirement avoir 2 mots en spinalCase
- Problèmes d'ergonomie (see [Bastien Scapin](https://blocnotes.iergo.fr/concevoir/les-criteres-heuristiques-de-bastien-et-scapin/))
- Les champs auto complétés gérés par les navigateurs (see [Google blog](https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill))
- REST verbes :
    - PUT : tous les champs sont réécris normalement
    - PATCH : n'envoyer que les champs à mettre à jour
- REST vs GraphQL (Facebook), successeur de REST ?
- GO : réécrire du C avec la facilité de Java
- JAVASCRIPT: variable privée est souvent écrite avec '_' en préfix (ex: _city)
- Concept ou design pattern Flow pour bien gérer l'IHM -> Redux
- Décorateurs
    - @Input, faire ruisseler les données à transmettre du routeur d'état vers les différentes branches des composants 
    - @Output, remonter un événement
- Librairie des icons [Font awesone](https://fontawesome.com/)
    ```bash
    npm install @fortawesome/fontawesome-free

    npm install @fortawesome/fontawesome-svg-core
    npm install @fortawesome/free-solid-svg-icons
    npm install @fortawesome/angular-fontawesome
    ```
- Tests Unitaires
    - [Karma](http://karma-runner.github.io/2.0/index.html)
        - Les test se lancent par
        ```bash
        npm test
        ```

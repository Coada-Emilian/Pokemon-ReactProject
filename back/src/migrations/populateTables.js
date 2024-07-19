import {Pokemon, Type, Team, User, PokemonHasTeam, PokemonHasType, sequelize} from "../models/index.js";

console.log("Ajout des types...")
await Type.bulkCreate([
    { name: 'Acier', color: 'aaaabb' },
    { name: 'Combat', color: 'bb5544' },
    { name: 'Dragon', color: '7766ee' },
    { name: 'Eau', color: '3399ff' },
    { name: 'Électrik', color: 'ffbb33' },
    { name: 'Feu', color: 'ff4422' },
    { name: 'Glace', color: '77ddff' },
    { name: 'Insecte', color: 'aabb22' },
    { name: 'Normal', color: 'bbaabb' },
    { name: 'Plante', color: '77cc55' },
    { name: 'Poison', color: 'aa5599' },
    { name: 'Psy', color: 'ff5599' },
    { name: 'Roche', color: 'bbaa66' },
    { name: 'Sol', color: 'ddbb55' },
    { name: 'Spectre', color: '6666bb' },
    { name: 'Ténèbres', color: '665544' },
    { name: 'Vol', color: '6699ff' }
]);
console.log("Adding pokemon...")
await Pokemon.bulkCreate([
    { 
      "name": "Bulbizarre", 
      "description": "Au début de sa vie, il se nourrit des nutriments accumulés dans la graine sur son dos. Cela lui permet de grandir.", 
      "hp": 45, "atk": 49, "def": 49, "atk_spe": 65, "def_spe": 65, "speed": 45, "evolution_id": 2 
    },
    { 
      "name": "Herbizarre", 
      "description": "Herbizarre est l'évolution de Bulbizarre. La graine sur son dos est devenue un bourgeon, ce qui le rend plus lourd et plus difficile à déplacer, mais il gagne en puissance.", 
      "hp": 60, "atk": 62, "def": 63, "atk_spe": 80, "def_spe": 80, "speed": 60, "evolution_id": 3, "devolution_id": 1 
    },
    { 
      "name": "Florizarre", 
      "description": "Florizarre est l'évolution finale de Bulbizarre. Quand il absorbe suffisamment de soleil, il peut lancer de puissantes attaques de type Plante.", 
      "hp": 80, "atk": 82, "def": 83, "atk_spe": 100, "def_spe": 100, "speed": 80, "devolution_id": 2 
    },
    { 
      "name": "Salameche", 
      "description": "Salamèche a une flamme au bout de sa queue qui brûle en fonction de son humeur et de sa santé. Si la flamme s'éteint, il meurt.", 
      "hp": 39, "atk": 52, "def": 43, "atk_spe": 60, "def_spe": 50, "speed": 65, "evolution_id": 5 
    },
    { 
      "name": "Reptincel", 
      "description": "Reptincel est l'évolution de Salamèche. Plus agressif, il se bat en utilisant ses griffes et la flamme de sa queue.", 
      "hp": 58, "atk": 64, "def": 58, "atk_spe": 80, "def_spe": 65, "speed": 80, "evolution_id": 6, "devolution_id": 4 
    },
    { 
      "name": "Dracaufeu", 
      "description": "Dracaufeu est l'évolution finale de Salamèche. Il crache du feu qui peut fondre des rochers et provoquer des incendies de forêt.", 
      "hp": 78, "atk": 84, "def": 78, "atk_spe": 109, "def_spe": 85, "speed": 100, "devolution_id": 5 
    },
    { 
      "name": "Carapuce", 
      "description": "Carapuce se protège en retirant ses membres dans sa carapace. Il tire de l'eau à grande pression pour attaquer ses ennemis.", 
      "hp": 44, "atk": 48, "def": 65, "atk_spe": 50, "def_spe": 64, "speed": 43, "evolution_id": 8 
    },
    { 
      "name": "Carabaffe", 
      "description": "Carabaffe est l'évolution de Carapuce. Sa carapace se durcit en vieillissant et il devient plus fort et plus résistant.", 
      "hp": 59, "atk": 63, "def": 80, "atk_spe": 65, "def_spe": 80, "speed": 58, "evolution_id": 9, "devolution_id": 7 
    },
    { 
      "name": "Tortank", 
      "description": "Tortank est l'évolution finale de Carapuce. Ses canons à eau peuvent pulvériser des cibles éloignées avec une grande précision.", 
      "hp": 79, "atk": 83, "def": 100, "atk_spe": 85, "def_spe": 105, "speed": 78, "devolution_id": 8 
    },
    { 
      "name": "Chenipan", 
      "description": "Chenipan libère une odeur répulsive de ses antennes pour repousser ses ennemis. Il se transforme en Chrysacier.", 
      "hp": 45, "atk": 30, "def": 35, "atk_spe": 20, "def_spe": 20, "speed": 45, "evolution_id": 11 
    },
    {
      "name": "Chrysacier", 
      "description": "Chrysacier est un Pokémon de type Insecte connu pour son exosquelette extrêmement dur qui offre une défense excellente mais limite ses capacités offensives.", 
      "hp": 50, "atk": 20, "def": 55, "atk_spe": 25, "def_spe": 25, "speed": 30, "evolution_id": 12, "devolution_id": 10 
    },
    { 
      "name": "Papilusion", 
      "description": "Papilusion utilise ses ailes recouvertes de poudre pour libérer des toxines et paralyser ses ennemis. Il peut également créer des brises puissantes en battant des ailes.", 
      "hp": 60, "atk": 45, "def": 50, "atk_spe": 80, "def_spe": 80, "speed": 70, "devolution_id": 11 
    },
    { 
      "name": "Aspicot", 
      "description": "Aspicot a une petite corne toxique sur sa tête. Il se déplace lentement mais peut piquer ses ennemis s'il est menacé.", 
      "hp": 40, "atk": 35, "def": 30, "atk_spe": 20, "def_spe": 20, "speed": 50, "evolution_id": 14 
    },
    { 
      "name": "Coconfort", 
      "description": "Coconfort reste immobile pour se protéger et se préparer à sa transformation. Sa carapace est dure mais il est vulnérable aux attaques perçantes.", 
      "hp": 45, "atk": 25, "def": 50, "atk_spe": 25, "def_spe": 25, "speed": 35, "evolution_id": 15, "devolution_id": 13 
    },
    { 
      "name": "Dardargnan", 
      "description": "Dardargnan est très territorial et attaque tout intrus avec ses deux dards empoisonnés. Il peut voler rapidement et avec précision.", 
      "hp": 65, "atk": 80, "def": 40, "atk_spe": 45, "def_spe": 80, "speed": 75, "devolution_id": 14 
    },
    { 
      "name": "Roucool", 
      "description": "Roucool est très docile et préfère les endroits tranquilles. Ses ailes produisent des rafales de vent lorsqu'il vole.", 
      "hp": 40, "atk": 45, "def": 40, "atk_spe": 35, "def_spe": 35, "speed": 56, "evolution_id": 17 
    },
    { 
      "name": "Roucoups", 
      "description": "Roucoups est l'évolution de Roucool. Il protège son territoire et chasse les intrus avec des attaques aériennes rapides.", 
      "hp": 63, "atk": 60, "def": 55, "atk_spe": 50, "def_spe": 50, "speed": 71, "evolution_id": 18, "devolution_id": 16 
    },
    { 
      "name": "Roucarnage", 
      "description": "Roucarnage vole à grande vitesse et attaque avec ses serres. Il est très fidèle à son dresseur et protège son territoire avec vigueur.", 
      "hp": 83, "atk": 80, "def": 75, "atk_spe": 70, "def_spe": 70, "speed": 91, "devolution_id": 17 
    },
    { 
      "name": "Rattata", 
      "description": "Rattata est très adaptable et peut vivre dans presque tous les environnements. Il est très agile et a des dents acérées pour ronger tout ce qu'il trouve.", 
      "hp": 30, "atk": 56, "def": 35, "atk_spe": 25, "def_spe": 35, "speed": 72, "evolution_id": 20 
    },
    { 
      "name": "Rattatac", 
      "description": "Rattatac a des dents extrêmement puissantes qui peuvent broyer même les objets les plus durs. Il est très agressif et territorial.", 
      "hp": 55, "atk": 81, "def": 60, "atk_spe": 50, "def_spe": 70, "speed": 97, "devolution_id": 19 
    },
    { 
      "name": "Piafabec", 
      "description": "Piafabec est très bruyant et agressif. Il attaque en piqué avec son bec pointu lorsqu'il se sent menacé.", 
      "hp": 40, "atk": 60, "def": 30, "atk_spe": 31, "def_spe": 31, "speed": 70, "evolution_id": 22 
    },
    {
        "name": "Rapasdepic",
        "description": "Rapasdepic excelle en vitesse et en puissance d'attaque, ce qui en fait une force redoutable en combat.",
        "hp": 65, "atk": 90, "def": 65, "atk_spe": 61, "def_spe": 61, "speed": 100, "devolution_id": 21
    },
    {
        "name": "Abo",
        "description": "Abo est un Pokémon rapide et agile avec des capacités d'attaque et de défense décentes.",
        "hp": 35, "atk": 60, "def": 44, "atk_spe": 40, "def_spe": 54, "speed": 55, "evolution_id": 24
    },
    {
        "name": "Arbok",
        "description": "Arbok, connu pour sa présence intimidante, combine de fortes capacités physiques avec des défenses modérées.",
        "hp": 60, "atk": 85, "def": 69, "atk_spe": 65, "def_spe": 79, "speed": 80, "devolution_id": 23
    },
    {
        "name": "Pikachu",
        "description": "Pikachu est renommé pour sa vitesse fulgurante et ses attaques électriques puissantes.",
        "hp": 35, "atk": 55, "def": 30, "atk_spe": 50, "def_spe": 40, "speed": 90, "evolution_id": 26
    },
    {
        "name": "Raichu",
        "description": "Raichu possède une grande vitesse et de puissantes attaques électriques, évoluant de Pikachu.",
        "hp": 60, "atk": 90, "def": 55, "atk_spe": 90, "def_spe": 80, "speed": 100, "devolution_id": 25
    },
    {
        "name": "Sabelette",
        "description": "Sabelette compte sur ses griffes acérées et sa vitesse, bien que ses capacités défensives soient modestes.",
        "hp": 50, "atk": 75, "def": 85, "atk_spe": 20, "def_spe": 30, "speed": 40, "evolution_id": 28
    },
    {
        "name": "Sablaireau",
        "description": "Sablaireau est un attaquant puissant avec des défenses redoutables, évoluant de Sabelette.",
        "hp": 75, "atk": 100, "def": 110, "atk_spe": 45, "def_spe": 55, "speed": 65, "devolution_id": 27
    },
    {
        "name": "Nidoran F",
        "description": "Nidoran F est un Pokémon agile avec des statistiques équilibrées, évoluant en Nidorina.",
        "hp": 55, "atk": 47, "def": 52, "atk_spe": 40, "def_spe": 40, "speed": 41, "evolution_id": 30
    },
    {
        "name": "Nidorina",
        "description": "Nidorina a des statistiques améliorées par rapport à Nidoran F, se concentrant sur l'endurance et les attaques équilibrées.",
        "hp": 70, "atk": 62, "def": 67, "atk_spe": 55, "def_spe": 55, "speed": 56, "evolution_id": 31, "devolution_id": 29
    },
    {
        "name": "Nidoqueen",
        "description": "Nidoqueen est un Pokémon robuste avec une grande endurance et des capacités offensives et défensives bien équilibrées, évoluant de Nidorina.",
        "hp": 90, "atk": 82, "def": 87, "atk_spe": 75, "def_spe": 85, "speed": 76, "devolution_id": 30
    },
    {
        "name": "Nidoran M",
        "description": "Nidoran M est connu pour sa vitesse et ses attaques physiques, évoluant en Nidorino.",
        "hp": 46, "atk": 57, "def": 40, "atk_spe": 40, "def_spe": 40, "speed": 50, "evolution_id": 33
    },
    {
        "name": "Nidorino",
        "description": "Nidorino est un Pokémon avec des statistiques supérieures à Nidoran M, se concentrant sur l'agilité et la force physique.",
        "hp": 61, "atk": 72, "def": 57, "atk_spe": 55, "def_spe": 55, "speed": 65, "evolution_id": 34, "devolution_id": 32
    },
    {
        "name": "Nidoking",
        "description": "Nidoking est un Pokémon puissant avec des statistiques élevées en attaque et en attaque spéciale, évoluant de Nidorino.",
        "hp": 81, "atk": 92, "def": 77, "atk_spe": 85, "def_spe": 75, "speed": 85, "devolution_id": 33
    },
    {
        "name": "Melofee",
        "description": "Melofee est un Pokémon avec une bonne endurance mais des capacités d'attaque limitées. Il évolue en Melodelfe, augmentant ses stats et développant des capacités spéciales.",
        "hp": 70, "atk": 45, "def": 48, "atk_spe": 60, "def_spe": 65, "speed": 35, "evolution_id": 36
    },
    {
        "name": "Melodelfe",
        "description": "Melodelfe possède une grande endurance et des capacités d'attaque et spéciales renforcées, évoluant de Melofee.",
        "hp": 95, "atk": 70, "def": 73, "atk_spe": 95, "def_spe": 90, "speed": 60, "evolution_id": 37, "devolution_id": 35
    },
    {
        "name": "Goupix",
        "description": "Goupix est un Pokémon rapide avec des stats équilibrées, spécialisé en attaques spéciales.",
        "hp": 38, "atk": 41, "def": 40, "atk_spe": 50, "def_spe": 65, "speed": 65, "evolution_id": 38
    },
    {
        "name": "Feunard",
        "description": "Feunard a des statistiques améliorées par rapport à Goupix, avec une grande vitesse et des attaques spéciales puissantes.",
        "hp": 73, "atk": 76, "def": 75, "atk_spe": 81, "def_spe": 100, "speed": 100, "devolution_id": 37
    },
    {
        "name": "Rondoudou",
        "description": "Rondoudou possède une grande endurance mais des capacités d'attaque limitées. Il évolue en Grodoudou, augmentant ses stats globales.",
        "hp": 115, "atk": 45, "def": 20, "atk_spe": 45, "def_spe": 25, "speed": 20, "evolution_id": 40
    },
    {
        "name": "Grodoudou",
        "description": "Grodoudou a une endurance exceptionnelle avec des stats améliorées par rapport à Rondoudou, évoluant pour augmenter ses capacités de combat.",
        "hp": 140, "atk": 70, "def": 45, "atk_spe": 85, "def_spe": 50, "speed": 45, "devolution_id": 39
    },
    {
        "name": "Nosferapti",
        "description": "Nosferapti est rapide avec des capacités équilibrées, spécialisé en attaques et défenses spéciales.",
        "hp": 40, "atk": 45, "def": 35, "atk_spe": 30, "def_spe": 40, "speed": 55, "evolution_id": 42
    },
    {
        "name": "Nosferalto",
        "description": "Nosferalto a des statistiques améliorées par rapport à Nosferapti, avec des attaques et défenses spéciales renforcées.",
        "hp": 75, "atk": 80, "def": 70, "atk_spe": 65, "def_spe": 75, "speed": 90, "devolution_id": 41
    },
    {
        "name": "Mystherbe",
        "description": "Mystherbe possède des capacités d'attaque spéciale supérieures à la moyenne mais une endurance et une vitesse limitées.",
        "hp": 45, "atk": 50, "def": 55, "atk_spe": 75, "def_spe": 65, "speed": 30, "evolution_id": 44
    },
    {
        "name": "Ortide",
        "description": "Ortide a des stats équilibrées avec des capacités d'attaque spéciale et défense spéciale améliorées, évoluant de Mystherbe.",
        "hp": 60, "atk": 65, "def": 70, "atk_spe": 85, "def_spe": 75, "speed": 40, "evolution_id": 45, "devolution_id": 43
    },
    {
        "name": "Rafflesia",
        "description": "Rafflesia possède une grande endurance et des attaques spéciales puissantes, évoluant de Ortide pour augmenter ses capacités offensives.",
        "hp": 75, "atk": 80, "def": 85, "atk_spe": 110, "def_spe": 90, "speed": 50, "devolution_id": 44
    },
    {
        "name": "Paras",
        "description": "Paras est un Pokémon avec une endurance modérée et des capacités d'attaque physique solides mais une vitesse limitée.",
        "hp": 35, "atk": 70, "def": 55, "atk_spe": 45, "def_spe": 55, "speed": 25, "evolution_id": 47
    },
    {
        "name": "Parasect",
        "description": "Parasect a une endurance et des capacités d'attaque spéciale renforcées par rapport à Paras, évoluant pour devenir plus résistant.",
        "hp": 60, "atk": 95, "def": 80, "atk_spe": 60, "def_spe": 80, "speed": 30, "devolution_id": 46
    },
    {
        "name": "Mimitoss",
        "description": "Mimitoss possède des stats équilibrées mais ses capacités d'attaque et défense spéciale sont légèrement supérieures à la moyenne.",
        "hp": 60, "atk": 55, "def": 50, "atk_spe": 40, "def_spe": 55, "speed": 45, "evolution_id": 49
    },
    {
        "name": "Aeromite",
        "description": "Aeromite a des stats équilibrées avec des capacités d'attaque spéciale et défense spéciale solides, évoluant de Mimitoss.",
        "hp": 70, "atk": 65, "def": 60, "atk_spe": 90, "def_spe": 75, "speed": 90, "devolution_id": 48
    },
    {
        "name": "Taupiqueur",
        "description": "Taupiqueur est rapide avec des attaques physiques solides mais une endurance limitée.",
        "hp": 10, "atk": 55, "def": 25, "atk_spe": 35, "def_spe": 45, "speed": 95, "evolution_id": 51
    },
    {
        "name": "Triopikeur",
        "description": "Triopikeur a une grande vitesse avec des attaques physiques et spéciales équilibrées, évoluant de Taupiqueur.",
        "hp": 35, "atk": 100, "def": 50, "atk_spe": 50, "def_spe": 70, "speed": 120, "devolution_id": 50
    },
    {
        "name": "Miaouss",
        "description": "Miaouss est un Pokémon rapide avec des attaques équilibrées mais une endurance limitée.",
        "hp": 40, "atk": 45, "def": 35, "atk_spe": 40, "def_spe": 40, "speed": 90, "evolution_id": 53
    },
    {
        "name": "Persian",
        "description": "Persian possède une grande vitesse et des attaques équilibrées, évoluant de Miaouss.",
        "hp": 65, "atk": 70, "def": 60, "atk_spe": 65, "def_spe": 65, "speed": 115, "devolution_id": 52
    },
    {
        "name": "Psykokwak",
        "description": "Psykokwak a des stats équilibrées avec des attaques spéciales supérieures à la moyenne.",
        "hp": 50, "atk": 52, "def": 48, "atk_spe": 65, "def_spe": 50, "speed": 55, "evolution_id": 55
    },
    {
        "name": "Akwakwak",
        "description": "Akwakwak possède des stats améliorées par rapport à Psykokwak, avec des attaques spéciales renforcées.",
        "hp": 80, "atk": 82, "def": 78, "atk_spe": 95, "def_spe": 80, "speed": 85, "devolution_id": 54
    },
    {
        "name": "Ferosinge",
        "description": "Ferosinge possède des attaques physiques solides mais une endurance limitée.",
        "hp": 40, "atk": 80, "def": 35, "atk_spe": 35, "def_spe": 45, "speed": 70, "evolution_id": 57
    },
    {
        "name": "Colossinge",
        "description": "Colossinge a des attaques physiques et spéciales renforcées par rapport à Ferosinge, évoluant pour devenir plus puissant.",
        "hp": 65, "atk": 105, "def": 60, "atk_spe": 60, "def_spe": 70, "speed": 95, "devolution_id": 56
    },
    {
        "name": "Caninos",
        "description": "Caninos est un Pokémon avec des attaques équilibrées mais une endurance et une vitesse modérées.",
        "hp": 55, "atk": 70, "def": 45, "atk_spe": 70, "def_spe": 50, "speed": 60, "evolution_id": 59
    },
    {
        "name": "Arcanin",
        "description": "Arcanin possède des stats améliorées par rapport à Caninos, avec des attaques puissantes et une grande vitesse.",
        "hp": 90, "atk": 110, "def": 80, "atk_spe": 100, "def_spe": 80, "speed": 95, "devolution_id": 58
    },
    {
        "name": "Ptitard",
        "description": "Ptitard possède des capacités équilibrées mais ses stats sont légèrement inférieures à la moyenne.",
        "hp": 40, "atk": 50, "def": 40, "atk_spe": 40, "def_spe": 40, "speed": 90, "evolution_id": 61
      },
      {
        "name": "Tetarte",
        "description": "Tetarte a des stats équilibrées avec des capacités d'attaque et défense spéciale légèrement supérieures à la moyenne.",
        "hp": 65, "atk": 65, "def": 65, "atk_spe": 50, "def_spe": 50, "speed": 90, "evolution_id": 62, "devolution_id": 60
      },
      {
        "name": "Tartard",
        "description": "Tartard a des stats améliorées par rapport à Tetarte, avec des capacités d'attaque et défense renforcées.",
        "hp": 90, "atk": 85, "def": 85, "atk_spe": 70, "def_spe": 70, "speed": 70, "devolution_id": 61
      },
      {
        "name": "Abra",
        "description": "Abra est un Pokémon avec des attaques spéciales très puissantes mais une endurance et des stats défensives très faibles.",
        "hp": 25, "atk": 20, "def": 15, "atk_spe": 105, "def_spe": 55, "speed": 90, "evolution_id": 64
      },
      {
        "name": "Kadabra",
        "description": "Kadabra a des stats améliorées par rapport à Abra, avec des capacités spéciales renforcées et une meilleure endurance.",
        "hp": 40, "atk": 35, "def": 30, "atk_spe": 120, "def_spe": 70, "speed": 105, "evolution_id": 65, "devolution_id": 63
      },
      {
        "name": "Alakazam",
        "description": "Alakazam possède une grande vitesse et des attaques spéciales très puissantes, évoluant de Kadabra.",
        "hp": 55, "atk": 50, "def": 45, "atk_spe": 135, "def_spe": 85, "speed": 120, "devolution_id": 64
      },
      {
        "name": "Machoc",
        "description": "Machoc a des attaques physiques puissantes mais une vitesse limitée.",
        "hp": 70, "atk": 80, "def": 50, "atk_spe": 35, "def_spe": 35, "speed": 35, "evolution_id": 67
      },
      {
        "name": "Machopeur",
        "description": "Machopeur a des stats améliorées par rapport à Machoc, avec des attaques physiques et spéciales renforcées.",
        "hp": 80, "atk": 100, "def": 70, "atk_spe": 50, "def_spe": 60, "speed": 45, "evolution_id": 68, "devolution_id": 66
      },
      {
        "name": "Mackogneur",
        "description": "Mackogneur possède une grande endurance et des attaques physiques très puissantes, évoluant pour devenir un combattant redoutable.",
        "hp": 90, "atk": 130, "def": 80, "atk_spe": 65, "def_spe": 85, "speed": 55, "devolution_id": 67
      },
      {
        "name": "Chetiflor",
        "description": "Chetiflor a des capacités d'attaque spéciale supérieures à la moyenne mais une endurance limitée.",
        "hp": 50, "atk": 75, "def": 35, "atk_spe": 70, "def_spe": 30, "speed": 40, "evolution_id": 70
      },
      {
        "name": "Boustiflor",
        "description": "Boustiflor possède des stats améliorées par rapport à Chetiflor, avec des attaques spéciales et physiques renforcées.",
        "hp": 65, "atk": 90, "def": 50, "atk_spe": 85, "def_spe": 45, "speed": 55, "evolution_id": 71, "devolution_id": 69
      },
      {
        "name": "Empiflor",
        "description": "Empiflor possède des attaques puissantes et des capacités spéciales renforcées, évoluant de Boustiflor.",
        "hp": 80, "atk": 105, "def": 65, "atk_spe": 100, "def_spe": 70, "speed": 70, "devolution_id": 70
      },
      { "name": "Tentacool", "description": "Tentacool possède une défense spéciale élevée et une vitesse modérée, adapté pour des rôles défensifs et de support.", "hp": 40, "atk": 40, "def": 35, "atk_spe": 50, "def_spe": 100, "speed": 70, "evolution_id": 73 },
      {
        "name": "Tentacruel",
        "description": "Tentacruel possède une grande défense spéciale et une vitesse élevée, faisant de lui un redoutable Pokémon aquatique.",
        "hp": 80, "atk": 70, "def": 65, "atk_spe": 80, "def_spe": 120, "speed": 100, "devolution_id": 72
      },
      {
        "name": "Racaillou",
        "description": "Racaillou est un Pokémon lent mais avec une défense physique extrêmement élevée.",
        "hp": 40, "atk": 80, "def": 100, "atk_spe": 30, "def_spe": 30, "speed": 20, "evolution_id": 75
      },
      {
        "name": "Gravalanch",
        "description": "Gravalanch a des stats physiques améliorées par rapport à Racaillou, avec une défense accrue.",
        "hp": 55, "atk": 95, "def": 115, "atk_spe": 45, "def_spe": 45, "speed": 35, "evolution_id": 76, "devolution_id": 74
      },
      {
        "name": "Grolem",
        "description": "Grolem possède une grande endurance et des attaques physiques puissantes, évoluant de Gravalanch.",
        "hp": 80, "atk": 120, "def": 130, "atk_spe": 55, "def_spe": 65, "speed": 45, "devolution_id": 75
      },
      {
        "name": "Ponyta",
        "description": "Ponyta possède une grande vitesse et des attaques équilibrées, adaptées pour les combats rapides.",
        "hp": 50, "atk": 85, "def": 55, "atk_spe": 65, "def_spe": 65, "speed": 90, "evolution_id": 78
      },
      {
        "name": "Galopa",
        "description": "Galopa possède des stats améliorées par rapport à Ponyta, avec une grande vitesse et des attaques renforcées.",
        "hp": 65, "atk": 100, "def": 70, "atk_spe": 80, "def_spe": 80, "speed": 105, "devolution_id": 77
      },
      {
        "name": "Ramoloss",
        "description": "Ramoloss possède une grande endurance mais une vitesse très limitée, avec des stats équilibrées.",
        "hp": 90, "atk": 65, "def": 65, "atk_spe": 40, "def_spe": 40, "speed": 15, "evolution_id": 80
      },
      {
        "name": "Flagadoss",
        "description": "Flagadoss possède des stats améliorées par rapport à Ramoloss, avec une défense spéciale élevée et des attaques spéciales puissantes.",
        "hp": 95, "atk": 75, "def": 110, "atk_spe": 100, "def_spe": 80, "speed": 30, "devolution_id": 79
      },
      {
        "name": "Magneti",
        "description": "Magneti possède des attaques spéciales puissantes mais une endurance et des stats physiques très faibles.",
        "hp": 25, "atk": 35, "def": 70, "atk_spe": 95, "def_spe": 55, "speed": 45, "evolution_id": 82
      },
      {
        "name": "Magneton",
        "description": "Magneton a des stats améliorées par rapport à Magneti, avec des attaques spéciales renforcées et une meilleure endurance.",
        "hp": 50, "atk": 60, "def": 95, "atk_spe": 120, "def_spe": 70, "speed": 70, "devolution_id": 81
      },
      {
        "name": "Canarticho",
        "description": "Canarticho possède des attaques physiques équilibrées avec une vitesse et une endurance modérées.",
        "hp": 52, "atk": 90, "def": 55, "atk_spe": 58, "def_spe": 62, "speed": 60
      },
      {
        "name": "Doduo",
        "description": "Doduo possède des attaques physiques puissantes mais une défense limitée.",
        "hp": 35, "atk": 85, "def": 45, "atk_spe": 35, "def_spe": 35, "speed": 75, "evolution_id": 85
      },
      {
        "name": "Dodrio",
        "description": "Dodrio a des stats améliorées par rapport à Doduo, avec des attaques physiques renforcées et une meilleure vitesse.",
        "hp": 60, "atk": 110, "def": 70, "atk_spe": 60, "def_spe": 60, "speed": 100, "devolution_id": 84
      },
      {
        "name": "Otaria",
        "description": "Otaria possède des attaques spéciales supérieures à la moyenne mais une endurance limitée.",
        "hp": 65, "atk": 45, "def": 55, "atk_spe": 45, "def_spe": 70, "speed": 45, "evolution_id": 87
      },
      {
        "name": "Lamantine",
        "description": "Lamantine possède des stats améliorées par rapport à Otaria, avec des attaques spéciales renforcées et une meilleure endurance.",
        "hp": 90, "atk": 70, "def": 80, "atk_spe": 70, "def_spe": 95, "speed": 70, "devolution_id": 86
      },
      {
        "name": "Tadmorv",
        "description": "Tadmorv a des attaques physiques et spéciales équilibrées mais une vitesse limitée.",
        "hp": 80, "atk": 80, "def": 50, "atk_spe": 40, "def_spe": 50, "speed": 25, "evolution_id": 89
      },
      {
        "name": "Grotadmorv",
        "description": "Grotadmorv possède des stats améliorées par rapport à Tadmorv, avec des attaques physiques et spéciales renforcées.",
        "hp": 105, "atk": 105, "def": 75, "atk_spe": 65, "def_spe": 100, "speed": 50, "devolution_id": 88
      },
      {
        "name": "Kokiyas",
        "description": "Kokiyas possède une grande défense mais une vitesse limitée, avec des attaques physiques et spéciales équilibrées.",
        "hp": 30, "atk": 65, "def": 100, "atk_spe": 45, "def_spe": 25, "speed": 40, "evolution_id": 91
      },
      {
        "name": "Crustabri",
        "description": "Crustabri possède des stats améliorées par rapport à Kokiyas, avec une défense très élevée et des attaques spéciales renforcées.",
        "hp": 50, "atk": 95, "def": 180, "atk_spe": 85, "def_spe": 45, "speed": 70, "devolution_id": 90
      },
      {
        "name": "Fantominus",
        "description": "Fantominus possède des attaques spéciales très puissantes mais une endurance et une vitesse très limitées.",
        "hp": 30, "atk": 35, "def": 30, "atk_spe": 100, "def_spe": 35, "speed": 80, "evolution_id": 93
      },
      {
        "name": "Spectrum",
        "description": "Spectrum a des stats améliorées par rapport à Fantominus, avec des attaques spéciales renforcées et une meilleure endurance.",
        "hp": 45, "atk": 50, "def": 45, "atk_spe": 115, "def_spe": 55, "speed": 95, "evolution_id": 94, "devolution_id": 92
      },
      {
        "name": "Ectoplasma",
        "description": "Ectoplasma possède des attaques spéciales très puissantes et une vitesse élevée, évoluant de Spectrum.",
        "hp": 60, "atk": 65, "def": 60, "atk_spe": 130, "def_spe": 75, "speed": 110, "devolution_id": 93
      },
      {
        "name": "Onix",
        "description": "Onix possède une défense physique extrêmement élevée, mais il est limité par sa faible endurance et sa vitesse.",
        "hp": 35, "atk": 45, "def": 160, "atk_spe": 30, "def_spe": 45, "speed": 70
      },
      {
        "name": "Soporifik",
        "description": "Soporifik a une endurance modérée et une défense spéciale élevée, adapté pour des stratégies de statut.",
        "hp": 60, "atk": 48, "def": 45, "atk_spe": 43, "def_spe": 90, "speed": 42, "evolution_id": 97
      },
      {
        "name": "Hypnomade",
        "description": "Hypnomade possède des stats améliorées par rapport à Soporifik, avec une endurance accrue et des attaques spéciales renforcées.",
        "hp": 85, "atk": 73, "def": 70, "atk_spe": 73, "def_spe": 115, "speed": 67, "devolution_id": 96
      },
      {
        "name": "Krabby",
        "description": "Krabby possède des attaques physiques très puissantes mais une endurance et une vitesse limitées.",
        "hp": 30, "atk": 105, "def": 90, "atk_spe": 25, "def_spe": 25, "speed": 50, "evolution_id": 99
      },
      {
        "name": "Krabboss",
        "description": "Krabboss a des stats améliorées par rapport à Krabby, avec des attaques physiques renforcées et une meilleure vitesse.",
        "hp": 55, "atk": 130, "def": 115, "atk_spe": 50, "def_spe": 50, "speed": 75, "devolution_id": 98
      },
      {
        "name": "Voltorbe",
        "description": "Voltorbe possède une grande vitesse mais des stats équilibrées autrement, adapté pour des stratégies rapides.",
        "hp": 40, "atk": 30, "def": 50, "atk_spe": 55, "def_spe": 55, "speed": 100, "evolution_id": 101
      },
      {
        "name": "Electrode",
        "description": "Electrode a des stats améliorées par rapport à Voltorbe, avec une grande vitesse et des attaques spéciales renforcées.",
        "hp": 60, "atk": 50, "def": 70, "atk_spe": 80, "def_spe": 80, "speed": 150, "devolution_id": 100
      },
      {
        "name": "Noeunoeuf",
        "description": "Noeunoeuf possède une endurance modérée et des attaques spéciales puissantes, adapté pour des stratégies offensives.",
        "hp": 60, "atk": 40, "def": 80, "atk_spe": 60, "def_spe": 45, "speed": 40, "evolution_id": 103
      },
      {
        "name": "Noadkoko",
        "description": "Noadkoko a des stats améliorées par rapport à Noeunoeuf, avec des attaques spéciales renforcées et une endurance accrue.",
        "hp": 95, "atk": 95, "def": 85, "atk_spe": 125, "def_spe": 75, "speed": 55, "devolution_id": 102
      },
      {
        "name": "Osselait",
        "description": "Osselait possède une grande défense mais une vitesse limitée, avec des attaques physiques équilibrées.",
        "hp": 50, "atk": 50, "def": 95, "atk_spe": 40, "def_spe": 50, "speed": 35, "evolution_id": 105
      },
      {
        "name": "Ossatueur",
        "description": "Ossatueur a des stats améliorées par rapport à Osselait, avec des attaques physiques renforcées et une meilleure endurance.",
        "hp": 60, "atk": 80, "def": 110, "atk_spe": 50, "def_spe": 80, "speed": 45, "devolution_id": 104
      },
      {
        "name": "Kicklee",
        "description": "Kicklee possède des attaques physiques et spéciales puissantes, avec une grande vitesse adaptée pour les combats rapides.",
        "hp": 50, "atk": 120, "def": 53, "atk_spe": 35, "def_spe": 110, "speed": 87
      },
      {
        "name": "Tygnon",
        "description": "Tygnon possède des attaques physiques et spéciales puissantes, avec une grande endurance et une vitesse équilibrée.",
        "hp": 50, "atk": 105, "def": 79, "atk_spe": 35, "def_spe": 110, "speed": 76
      },
      {
        "name": "Excelangue",
        "description": "Excelangue possède une grande endurance mais une vitesse limitée, avec des attaques physiques et spéciales équilibrées.",
        "hp": 90, "atk": 55, "def": 75, "atk_spe": 60, "def_spe": 75, "speed": 30
      },
      {
        "name": "Smogo",
        "description": "Smogo possède des attaques spéciales puissantes mais une endurance et une vitesse limitées.",
        "hp": 40, "atk": 65, "def": 95, "atk_spe": 60, "def_spe": 45, "speed": 35, "evolution_id": 110
      },
      {
        "name": "Smogogo",
        "description": "Smogogo a des stats améliorées par rapport à Smogo, avec des attaques spéciales renforcées et une meilleure endurance.",
        "hp": 65, "atk": 90, "def": 120, "atk_spe": 85, "def_spe": 70, "speed": 60, "devolution_id": 109
      },
      {
        "name": "Rhinocorne",
        "description": "Rhinocorne possède une grande endurance mais une vitesse limitée, avec des attaques physiques équilibrées.",
        "hp": 80, "atk": 85, "def": 95, "atk_spe": 30, "def_spe": 30, "speed": 25, "evolution_id": 112
      },
      {
        "name": "Rhinoféros",
        "description": "Rhinoféros a des stats améliorées par rapport à Rhinocorne, avec des attaques physiques renforcées et une meilleure endurance.",
        "hp": 105, "atk": 130, "def": 120, "atk_spe": 45, "def_spe": 45, "speed": 40, "devolution_id": 111
      },
      {
        "name": "Leveinard",
        "description": "Leveinard possède une endurance extrêmement élevée mais des attaques très faibles, adapté pour soutenir l'équipe.",
        "hp": 250, "atk": 5, "def": 5, "atk_spe": 35, "def_spe": 105, "speed": 50
      },
      {
        "name": "Saquedeneu",
        "description": "Saquedeneu possède une grande défense spéciale mais des attaques limitées, adapté pour des rôles défensifs.",
        "hp": 60, "atk": 55, "def": 115, "atk_spe": 100, "def_spe": 40, "speed": 60
      },
      {
        "name": "Kangourex",
        "description": "Kangourex possède des attaques physiques puissantes et une endurance élevée, adapté pour des combats robustes.",
        "hp": 105, "atk": 95, "def": 80, "atk_spe": 40, "def_spe": 80, "speed": 90
      },
      {
        "name": "Hypotrempe",
        "description": "Hypotrempe possède une endurance modérée et des attaques spéciales puissantes, adapté pour des stratégies offensives.",
        "hp": 30, "atk": 40, "def": 70, "atk_spe": 70, "def_spe": 25, "speed": 60, "evolution_id": 117
      },
      {
        "name": "Hypocéan",
        "description": "Hypocéan a des stats améliorées par rapport à Hypotrempe, avec des attaques spéciales renforcées et une meilleure endurance.",
        "hp": 55, "atk": 65, "def": 95, "atk_spe": 95, "def_spe": 45, "speed": 85, "devolution_id": 116
      },
      {
        "name": "Poissirène",
        "description": "Poissirène possède une bonne attaque physique et une vitesse correcte, adapté pour des attaques rapides.",
        "hp": 45, "atk": 67, "def": 60, "atk_spe": 35, "def_spe": 50, "speed": 63, "evolution_id": 119
      },
      {
        "name": "Poissoroy",
        "description": "Poissoroy a des stats améliorées par rapport à Poissirène, avec une endurance accrue et des attaques spéciales renforcées.",
        "hp": 80, "atk": 92, "def": 65, "atk_spe": 65, "def_spe": 80, "speed": 68, "devolution_id": 118
      },
      {
        "name": "Stari",
        "description": "Stari possède des attaques spéciales puissantes mais une endurance limitée, adapté pour des stratégies offensives.",
        "hp": 30, "atk": 45, "def": 55, "atk_spe": 70, "def_spe": 55, "speed": 85, "evolution_id": 121
      },
      {
        "name": "Staross",
        "description": "Staross a des stats améliorées par rapport à Stari, avec des attaques spéciales renforcées et une meilleure endurance.",
        "hp": 60, "atk": 75, "def": 85, "atk_spe": 100, "def_spe": 85, "speed": 115, "devolution_id": 120
      },
      {
        "name": "M. Mime",
        "description": "M. Mime possède des attaques spéciales très puissantes et une grande défense spéciale, adapté pour des rôles défensifs.",
        "hp": 40, "atk": 45, "def": 65, "atk_spe": 100, "def_spe": 120, "speed": 90
      },
      {
        "name": "Insécateur",
        "description": "Insécateur possède des attaques physiques très puissantes et une grande vitesse, adapté pour des attaques rapides et agressives.",
        "hp": 70, "atk": 110, "def": 80, "atk_spe": 55, "def_spe": 80, "speed": 105, "evolution_id": 124
      },
      {
        "name": "Lippoutou",
        "description": "Lippoutou possède des attaques spéciales puissantes mais une endurance limitée, adapté pour des stratégies offensives.",
        "hp": 65, "atk": 50, "def": 35, "atk_spe": 115, "def_spe": 95, "speed": 95
      },
      {
        "name": "Élektek",
        "description": "Élektek possède des attaques spéciales puissantes et une grande vitesse, adapté pour des attaques rapides et agressives.",
        "hp": 65, "atk": 83, "def": 57, "atk_spe": 95, "def_spe": 85, "speed": 105
      },
      {
        "name": "Magmar",
        "description": "Magmar possède des attaques spéciales puissantes et une grande endurance, adapté pour des rôles offensifs.",
        "hp": 65, "atk": 95, "def": 57, "atk_spe": 100, "def_spe": 85, "speed": 93
      },
      {
        "name": "Scarabrute",
        "description": "Scarabrute possède des attaques physiques très puissantes mais une vitesse limitée, adapté pour des combats robustes.",
        "hp": 70, "atk": 130, "def": 100, "atk_spe": 55, "def_spe": 80, "speed": 65
      },
      {
        "name": "Tauros",
        "description": "Tauros possède des attaques physiques très puissantes et une grande vitesse, adapté pour des attaques rapides et agressives.",
        "hp": 75, "atk": 100, "def": 95, "atk_spe": 40, "def_spe": 70, "speed": 110
      },
      {
        "name": "Magicarpe",
        "description": "Magicarpe possède une faible attaque mais une grande vitesse, nécessitant une évolution pour débloquer son potentiel.",
        "hp": 20, "atk": 10, "def": 55, "atk_spe": 15, "def_spe": 20, "speed": 80, "evolution_id": 130
      },
      {
        "name": "Léviator",
        "description": "Léviator possède des attaques physiques très puissantes et une grande endurance, adapté pour des combats robustes.",
        "hp": 95, "atk": 125, "def": 79, "atk_spe": 60, "def_spe": 100, "speed": 81, "devolution_id": 129
      },
      {
        "name": "Lokhlass",
        "description": "Lokhlass possède une grande endurance et des attaques spéciales puissantes, adapté pour des rôles défensifs et offensifs.",
        "hp": 130, "atk": 85, "def": 80, "atk_spe": 85, "def_spe": 95, "speed": 60
      },
      {
        "name": "Métamorph",
        "description": "Métamorph possède des statistiques équilibrées mais peut copier les capacités de ses adversaires, adapté pour des stratégies variées.",
        "hp": 48, "atk": 48, "def": 48, "atk_spe": 48, "def_spe": 48, "speed": 48
      },
      {
        "name": "Évoli",
        "description": "Évoli possède des stats équilibrées et peut évoluer en différentes formes en fonction de ses conditions de montée de niveau.",
        "hp": 55, "atk": 55, "def": 50, "atk_spe": 45, "def_spe": 65, "speed": 55
      },
      {
        "name": "Aquali",
        "description": "Aquali possède une grande endurance et des attaques spéciales puissantes, adapté pour des rôles défensifs et offensifs.",
        "hp": 130, "atk": 65, "def": 60, "atk_spe": 110, "def_spe": 95, "speed": 65
      },
      {
        "name": "Voltali",
        "description": "Voltali possède une grande vitesse et des attaques spéciales puissantes, adapté pour des attaques rapides et agressives.",
        "hp": 65, "atk": 65, "def": 60, "atk_spe": 110, "def_spe": 95, "speed": 130
      },
      {
        "name": "Pyroli",
        "description": "Pyroli possède des attaques physiques très puissantes et une grande endurance, adapté pour des rôles offensifs.",
        "hp": 65, "atk": 130, "def": 60, "atk_spe": 95, "def_spe": 110, "speed": 65
      },
      {
        "name": "Porygon",
        "description": "Porygon possède des attaques spéciales puissantes mais une endurance limitée, adapté pour des stratégies offensives.",
        "hp": 65, "atk": 60, "def": 70, "atk_spe": 85, "def_spe": 75, "speed": 40
      },
      {
        "name": "Amonita",
        "description": "Amonita possède des attaques spéciales puissantes et une grande endurance, adapté pour des rôles offensifs.",
        "hp": 35, "atk": 40, "def": 100, "atk_spe": 90, "def_spe": 55, "speed": 35, "evolution_id": 139
      },
      {
        "name": "Amonistar",
        "description": "Amonistar possède des attaques spéciales très puissantes et une grande endurance, adapté pour des rôles défensifs et offensifs.",
        "hp": 70, "atk": 60, "def": 125, "atk_spe": 115, "def_spe": 70, "speed": 55, "devolution_id": 138
      },
      {
        "name": "Kabuto",
        "description": "Kabuto possède une bonne attaque physique et une défense élevée, mais sa vitesse est modérée.",
        "hp": 30, "atk": 80, "def": 90, "atk_spe": 55, "def_spe": 45, "speed": 55, "evolution_id": 141
      },
      {
        "name": "Kabutops",
        "description": "Kabutops possède des attaques physiques très puissantes et une vitesse accrue, adapté pour des attaques rapides et agressives.",
        "hp": 60, "atk": 115, "def": 105, "atk_spe": 65, "def_spe": 70, "speed": 80, "devolution_id": 140
      },
      {
        "name": "Ptéra",
        "description": "Ptéra possède des attaques physiques très puissantes et une vitesse exceptionnelle, adapté pour des attaques rapides et agressives.",
        "hp": 80, "atk": 105, "def": 65, "atk_spe": 60, "def_spe": 75, "speed": 130
      },
      {
        "name": "Ronflex",
        "description": "Ronflex possède une grande endurance et des attaques physiques puissantes, adapté pour des rôles défensifs et offensifs.",
        "hp": 160, "atk": 110, "def": 65, "atk_spe": 65, "def_spe": 110, "speed": 30
      },
      {
        "name": "Artikodin",
        "description": "Artikodin possède des attaques spéciales puissantes et une grande défense spéciale, adapté pour des rôles défensifs.",
        "hp": 90, "atk": 85, "def": 100, "atk_spe": 95, "def_spe": 125, "speed": 85
      },
      {
        "name": "Électhor",
        "description": "Électhor possède des attaques spéciales puissantes et une grande vitesse, adapté pour des attaques rapides et agressives.",
        "hp": 90, "atk": 90, "def": 85, "atk_spe": 125, "def_spe": 90, "speed": 100
      },
      {
        "name": "Sulfura",
        "description": "Sulfura possède des attaques spéciales puissantes et une grande endurance, adapté pour des rôles offensifs.",
        "hp": 90, "atk": 100, "def": 90, "atk_spe": 125, "def_spe": 85, "speed": 90
      },
      {
        "name": "Minidraco",
        "description": "Minidraco possède des attaques physiques modérées et une vitesse correcte, adapté pour des attaques équilibrées.",
        "hp": 41, "atk": 64, "def": 45, "atk_spe": 50, "def_spe": 50, "speed": 50, "evolution_id": 148
      },
      {
        "name": "Draco",
        "description": "Draco possède des attaques physiques puissantes et une vitesse accrue, adapté pour des attaques rapides et agressives.",
        "hp": 61, "atk": 84, "def": 65, "atk_spe": 70, "def_spe": 70, "speed": 70, "evolution_id": 149, "devolution_id": 147
      },
      {
        "name": "Dracolosse",
        "description": "Dracolosse possède des attaques physiques très puissantes et une grande endurance, adapté pour des combats robustes.",
        "hp": 91, "atk": 134, "def": 95, "atk_spe": 100, "def_spe": 100, "speed": 80, "devolution_id": 148
      },
      {
        "name": "Mewtwo",
        "description": "Mewtwo possède des attaques spéciales très puissantes et une grande vitesse, adapté pour des attaques rapides et agressives.",
        "hp": 106, "atk": 110, "def": 90, "atk_spe": 154, "def_spe": 90, "speed": 130
      },
      {
        "name": "Mew",
        "description": "Mew possède des statistiques équilibrées et une grande variété de capacités, adapté pour des stratégies diverses.",
        "hp": 100, "atk": 100, "def": 100, "atk_spe": 100, "def_spe": 100, "speed": 100
      }
])

console.log("Adding types....")
await PokemonHasType.bulkCreate([
    { pokemon_id: 1, type_id: 10 },
    { pokemon_id: 1, type_id: 11 },
    { pokemon_id: 2, type_id: 10 },
    { pokemon_id: 2, type_id: 11 },
    { pokemon_id: 3, type_id: 10 },
    { pokemon_id: 3, type_id: 11 },
    { pokemon_id: 4, type_id: 6 },
    { pokemon_id: 5, type_id: 6 },
    { pokemon_id: 6, type_id: 6 },
    { pokemon_id: 6, type_id: 17 },
    { pokemon_id: 7, type_id: 4 },
    { pokemon_id: 8, type_id: 4 },
    { pokemon_id: 9, type_id: 4 },
    { pokemon_id: 10, type_id: 8 },
    { pokemon_id: 11, type_id: 8 },
    { pokemon_id: 12, type_id: 8 },
    { pokemon_id: 12, type_id: 17 },
    { pokemon_id: 13, type_id: 8 },
    { pokemon_id: 13, type_id: 11 },
    { pokemon_id: 14, type_id: 8 },
    { pokemon_id: 14, type_id: 11 },
    { pokemon_id: 15, type_id: 8 },
    { pokemon_id: 15, type_id: 11 },
    { pokemon_id: 16, type_id: 9 },
    { pokemon_id: 16, type_id: 17 },
    { pokemon_id: 17, type_id: 9 },
    { pokemon_id: 17, type_id: 17 },
    { pokemon_id: 18, type_id: 9 },
    { pokemon_id: 18, type_id: 17 },
    { pokemon_id: 19, type_id: 9 },
    { pokemon_id: 20, type_id: 9 },
    { pokemon_id: 21, type_id: 9 },
    { pokemon_id: 21, type_id: 17 },
    { pokemon_id: 22, type_id: 9 },
    { pokemon_id: 22, type_id: 17 },
    { pokemon_id: 23, type_id: 11 },
    { pokemon_id: 24, type_id: 11 },
    { pokemon_id: 25, type_id: 5 },
    { pokemon_id: 26, type_id: 5 },
    { pokemon_id: 27, type_id: 14 },
    { pokemon_id: 28, type_id: 14 },
    { pokemon_id: 29, type_id: 11 },
    { pokemon_id: 30, type_id: 11 },
    { pokemon_id: 31, type_id: 11 },
    { pokemon_id: 31, type_id: 14 },
    { pokemon_id: 32, type_id: 11 },
    { pokemon_id: 33, type_id: 11 },
    { pokemon_id: 34, type_id: 11 },
    { pokemon_id: 34, type_id: 14 },
    { pokemon_id: 35, type_id: 9 },
    { pokemon_id: 36, type_id: 9 },
    { pokemon_id: 37, type_id: 6 },
    { pokemon_id: 38, type_id: 6 },
    { pokemon_id: 39, type_id: 9 },
    { pokemon_id: 40, type_id: 9 },
    { pokemon_id: 41, type_id: 11 },
    { pokemon_id: 41, type_id: 17 },
    { pokemon_id: 42, type_id: 11 },
    { pokemon_id: 42, type_id: 17 },
    { pokemon_id: 43, type_id: 10 },
    { pokemon_id: 43, type_id: 11 },
    { pokemon_id: 44, type_id: 10 },
    { pokemon_id: 44, type_id: 11 },
    { pokemon_id: 45, type_id: 10 },
    { pokemon_id: 45, type_id: 11 },
    { pokemon_id: 46, type_id: 8 },
    { pokemon_id: 46, type_id: 10 },
    { pokemon_id: 47, type_id: 8 },
    { pokemon_id: 47, type_id: 10 },
    { pokemon_id: 48, type_id: 8 },
    { pokemon_id: 48, type_id: 11 },
    { pokemon_id: 49, type_id: 8 },
    { pokemon_id: 49, type_id: 11 },
    { pokemon_id: 50, type_id: 14 },
    { pokemon_id: 51, type_id: 14 },
    { pokemon_id: 52, type_id: 9 },
    { pokemon_id: 53, type_id: 9 },
    { pokemon_id: 54, type_id: 4 },
    { pokemon_id: 55, type_id: 4 },
    { pokemon_id: 56, type_id: 2 },
    { pokemon_id: 57, type_id: 2 },
    { pokemon_id: 58, type_id: 6 },
    { pokemon_id: 59, type_id: 6 },
    { pokemon_id: 60, type_id: 4 },
    { pokemon_id: 61, type_id: 4 },
    { pokemon_id: 62, type_id: 4 },
    { pokemon_id: 62, type_id: 2 },
    { pokemon_id: 63, type_id: 12 },
    { pokemon_id: 64, type_id: 12 },
    { pokemon_id: 65, type_id: 12 },
    { pokemon_id: 66, type_id: 2 },
    { pokemon_id: 67, type_id: 2 },
    { pokemon_id: 68, type_id: 2 },
    { pokemon_id: 69, type_id: 10 },
    { pokemon_id: 69, type_id: 11 },
    { pokemon_id: 70, type_id: 10 },
    { pokemon_id: 70, type_id: 11 },
    { pokemon_id: 71, type_id: 10 },
    { pokemon_id: 71, type_id: 11 },
    { pokemon_id: 72, type_id: 4 },
    { pokemon_id: 72, type_id: 11 },
    { pokemon_id: 73, type_id: 4 },
    { pokemon_id: 73, type_id: 11 },
    { pokemon_id: 74, type_id: 13 },
    { pokemon_id: 74, type_id: 14 },
    { pokemon_id: 75, type_id: 13 },
    { pokemon_id: 75, type_id: 14 },
    { pokemon_id: 76, type_id: 13 },
    { pokemon_id: 76, type_id: 14 },
    { pokemon_id: 77, type_id: 6 },
    { pokemon_id: 78, type_id: 6 },
    { pokemon_id: 79, type_id: 4 },
    { pokemon_id: 79, type_id: 12 },
    { pokemon_id: 80, type_id: 4 },
    { pokemon_id: 80, type_id: 12 },
    { pokemon_id: 81, type_id: 5 },
    { pokemon_id: 81, type_id: 1 },
    { pokemon_id: 82, type_id: 5 },
    { pokemon_id: 82, type_id: 1 },
    { pokemon_id: 83, type_id: 9 },
    { pokemon_id: 83, type_id: 17 },
    { pokemon_id: 84, type_id: 9 },
    { pokemon_id: 84, type_id: 17 },
    { pokemon_id: 85, type_id: 9 },
    { pokemon_id: 85, type_id: 17 },
    { pokemon_id: 86, type_id: 4 },
    { pokemon_id: 87, type_id: 4 },
    { pokemon_id: 87, type_id: 7 },
    { pokemon_id: 88, type_id: 11 },
    { pokemon_id: 89, type_id: 11 },
    { pokemon_id: 90, type_id: 4 },
    { pokemon_id: 91, type_id: 4 },
    { pokemon_id: 91, type_id: 7 },
    { pokemon_id: 92, type_id: 15 },
    { pokemon_id: 92, type_id: 11 },
    { pokemon_id: 93, type_id: 15 },
    { pokemon_id: 93, type_id: 11 },
    { pokemon_id: 94, type_id: 15 },
    { pokemon_id: 94, type_id: 11 },
    { pokemon_id: 95, type_id: 13 },
    { pokemon_id: 95, type_id: 14 },
    { pokemon_id: 96, type_id: 12 },
    { pokemon_id: 97, type_id: 12 },
    { pokemon_id: 98, type_id: 4 },
    { pokemon_id: 99, type_id: 4 },
    { pokemon_id: 100, type_id: 5 },
    { pokemon_id: 101, type_id: 5 },
    { pokemon_id: 102, type_id: 10 },
    { pokemon_id: 102, type_id: 12 },
    { pokemon_id: 103, type_id: 10 },
    { pokemon_id: 103, type_id: 12 },
    { pokemon_id: 104, type_id: 14 },
    { pokemon_id: 105, type_id: 14 },
    { pokemon_id: 106, type_id: 2 },
    { pokemon_id: 107, type_id: 2 },
    { pokemon_id: 108, type_id: 9 },
    { pokemon_id: 109, type_id: 11 },
    { pokemon_id: 110, type_id: 11 },
    { pokemon_id: 111, type_id: 14 },
    { pokemon_id: 111, type_id: 13 },
    { pokemon_id: 112, type_id: 14 },
    { pokemon_id: 112, type_id: 13 },
    { pokemon_id: 113, type_id: 9 },
    { pokemon_id: 114, type_id: 10 },
    { pokemon_id: 115, type_id: 9 },
    { pokemon_id: 116, type_id: 4 },
    { pokemon_id: 117, type_id: 4 },
    { pokemon_id: 118, type_id: 4 },
    { pokemon_id: 119, type_id: 4 },
    { pokemon_id: 120, type_id: 4 },
    { pokemon_id: 121, type_id: 4 },
    { pokemon_id: 121, type_id: 12 },
    { pokemon_id: 122, type_id: 12 },
    { pokemon_id: 123, type_id: 8 },
    { pokemon_id: 123, type_id: 17 },
    { pokemon_id: 124, type_id: 7 },
    { pokemon_id: 124, type_id: 12 },
    { pokemon_id: 125, type_id: 5 },
    { pokemon_id: 126, type_id: 6 },
    { pokemon_id: 127, type_id: 8 },
    { pokemon_id: 128, type_id: 9 },
    { pokemon_id: 129, type_id: 4 },
    { pokemon_id: 130, type_id: 4 },
    { pokemon_id: 130, type_id: 17 },
    { pokemon_id: 131, type_id: 4 },
    { pokemon_id: 131, type_id: 7 },
    { pokemon_id: 132, type_id: 9 },
    { pokemon_id: 133, type_id: 9 },
    { pokemon_id: 134, type_id: 4 },
    { pokemon_id: 135, type_id: 5 },
    { pokemon_id: 136, type_id: 6 },
    { pokemon_id: 137, type_id: 9 },
    { pokemon_id: 138, type_id: 13 },
    { pokemon_id: 138, type_id: 4 },
    { pokemon_id: 139, type_id: 13 },
    { pokemon_id: 139, type_id: 4 },
    { pokemon_id: 140, type_id: 13 },
    { pokemon_id: 140, type_id: 4 },
    { pokemon_id: 141, type_id: 13 },
    { pokemon_id: 141, type_id: 4 },
    { pokemon_id: 142, type_id: 13 },
    { pokemon_id: 142, type_id: 17 },
    { pokemon_id: 143, type_id: 9 },
    { pokemon_id: 144, type_id: 7 },
    { pokemon_id: 144, type_id: 17 },
    { pokemon_id: 145, type_id: 5 },
    { pokemon_id: 145, type_id: 17 },
    { pokemon_id: 146, type_id: 6 },
    { pokemon_id: 146, type_id: 17 },
    { pokemon_id: 147, type_id: 3 },
    { pokemon_id: 148, type_id: 3 },
    { pokemon_id: 149, type_id: 3 },
    { pokemon_id: 149, type_id: 17 },
    { pokemon_id: 150, type_id: 12 },
    { pokemon_id: 151, type_id: 12 }
]);

  console.log("Adding teams.....");
await Team.bulkCreate([
    {name: "Ash's Team", description: "WTF"},
    {name: "Misty's Team", description: "WTF"},
    {name: "Brock's Team", description: "WTF"}
])

await PokemonHasTeam.bulkCreate([
  {pokemon_id: 25, team_id: 1},
  {pokemon_id: 10, team_id: 1},
  {pokemon_id: 17, team_id: 1},
  {pokemon_id: 1, team_id: 1},
  {pokemon_id: 4, team_id: 1},
  {pokemon_id: 7, team_id: 1},
  {pokemon_id: 120, team_id: 2},
  {pokemon_id: 121, team_id: 2},
  {pokemon_id: 54, team_id: 2},
  {pokemon_id: 116, team_id: 2},
  {pokemon_id: 118, team_id: 2},
  {pokemon_id: 35, team_id: 2},
  {pokemon_id: 95, team_id: 3},
  {pokemon_id: 74, team_id: 3},
  {pokemon_id: 41, team_id: 3},
  {pokemon_id: 37, team_id: 3},
  {pokemon_id: 20, team_id: 3},
  {pokemon_id: 28, team_id: 3}
])

console.log("✅ Migration OK ! ...");
await sequelize.close();
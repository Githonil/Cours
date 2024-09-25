---
title: Langage D'Algorithmie (LDA)
position: 2
description: Le pseudo-code du cours.
---
# <u>Langage D'Algoritmie (LDA) :</u>

Le LDA est une sorte de pseudo-code, utilisé pour concevoir des algorithmes sur papier.

## <u>Type de variable :</u>

- Booléen (1 octet)
- Caractère (1 octet)
- Entier (1 octet)
- Réel (2 octets)
- Pointeur/Adresse (2 octets)

### <u>Exemple :</u>

```
Variables:
    ok : Booléen
    i, j : Entiers
    x : Réel
    ok2 : Booléen
Début:
    ok <- Vrai
    i <- 5
    j <- 2
    x <- 1.5
    ok2 <- Faux
Fin
```

#### <u>Représentation en mémoire :</u>

Identifiant | Valeur
:---:|:---:
ok2|Faux
'|'
x|1.5
j|2
i|5
ok|Vrai

## <u>Condition :</u>

Les conditions en LDA sont représentées sous la forme suivante :

```
Début:
    Si condition alors
        block
    Sinon si condition alors
        block
    Sinon
        block
    FinSi
Fin
```

```
Début:
    Selon que
        condition faire
            block
            stop
        ou que conditon faire
            block
            stop
        ou que condition faire
            block
            stop
        .
        .
        .
        autrement faire
            block
            stop
    FinSelon
Fin
```

## <u>Les boucles :</u>

Voici les différents types de boucles.

```
Variables:
    i : entier
Début:
    Pour i allant de 0 à 6 par 2 faire
        écrire(i)
    FinPour
Fin
```

Renvoie l'affichage : `0246`<br/>
Elle **commence** de l'indice 0, se **termine** à l'indice 6 inclus, et fait des **pas** de 2 en 2.

```
Variables:
    i : entier
Début:
    i <- 0
    Tant que i <= 5 faire
        i <- i + 1
    FinTantQue
Fin
```

Elle se termine une fois que i > 5.

```
Variables:
    i : entier
Début:
    i <- 0
    Faire
        i <- i + 1
    Tant que i <= 5
Fin
```

La dernière a la particularité de toujours rentrer au moins une fois.

## <u>Les tableaux :</u>

On peut avoir besoin de garder plusieurs éléments dans un programme. Pour cela, on utilise des tableaux **statiques**.

- Le tableau a toujours le même nombre d'éléments.
- Le tableau peut contenir qu'un seul type.

### <u>Tableau 1D :</u>

La syntaxe est : `T : Tableau[0..5] de réel`

T est un tableau qui **commence** à l'indice 0 et se **termine** à l'indice 5. Le tableau **contient 6 éléments**. Et le **type** de ces éléments sont des **réels**.

On lit un élément du tableau avec : `T[0]`<br/>
Où 0 est l'indice de l'élément qu'on veut.

#### <u>Représentation mémoire :</u>

Identifiant | Valeur
:---: | :---:
T[5] | '
T[4] | '
T[3] | '
T[2] | '
T[1] | '
T[0] | '

**Ou**

Identifiant | Valeur
:---: | :---:
' | '
' | '
' | '
' | '
' | '
T | '

### <u>Tableau à plusieurs dimension :</u>

Un exemple de tableau à 2D est : `T : Tableau[0..1,0..3] de réel`

Ceci crée un tableau à 2 dimensions où si on le représente comme une matrice en math : 2 lignes et 4 colonnes.<br/>
**Donc 2 x 4 éléments soit 8 éléments**

On lit un élément du tableau avec : `T[0, 1]`
Où 0 est la ligne, et 1 la colonne.

#### <u>Représentation mémoire :</u>

Identifiant | Valeur
:---: | :---:
T[1, 3] | '
T[1, 2] | '
T[1, 1] | '
T[1, 0] | '
T[0, 3] | '
T[0, 2] | '
T[0, 1] | '
T[0, 0] | '

**Ou**

Identifiant | Valeur
:---: | :---:
' | '
' | '
' | '
' | '
' | '
' | '
' | '
T | '

## <u>Chaîne de caractères :</u>

La chaîne de caractères est un élément qui permet de gérer les textes.

Sa déclaration : `chr : Chaîne de caractères`<br/>
Il peut prendre comme valeur : `chr <- "Salut!"`

On peut concaténer les chaînes de caractères avec le symbole `+` ou `&`

Exemple : `chr <- chr + " Monde"`<br/>
Ce qui nous donne dans chr : `Salut! Monde`

Sa représentation en mémoire est comme celle des tableaux, le premier caractère commence à l'indice 0.

### <u>Représentation en mémoire :</u>

Identifiant | Valeur
:---: | :---:
' | '!'
' | 't'
' | 'u'
' | 'l'
' | 'a'
chr | 'S'

## <u>Crée un type/alias :</u>

On peut créer/mettre un alias sur un type.
par exemple :

```
Type Vecteur3 = Tableau[0..2] de réel.
```

On confère au mot `Vecteur3` la capacité de contenir 3 éléments comme un tableau.

On l'utilise donc comme ceci : `vec : Vecteur3`

## <u>Structure :</u>

Une structure est un agrégat de données. Qui peut représenter quelque chose.<br/>
Utilisé notamment dans les conteneurs, liste, pile, file, etc.

Pour créer la structure, nous devons lui mettre un alias !

### <u>Exemple :</u>

```
Type Voiture = Structure
    marque : Chaîne
    accélération : Réel
    couleur : Chaîne
    nbPorte : Entier
FinStructure
```

### <u>Initialisation/accès des éléments :</u>

Pour l'affectation/initialisation, ça se fait comme lorsque on a crée un alias : `voit : Voiture`

Pour accéder à son élément, pour le lire ou le modifier, on écrit : `voit.marque` ou `voit.couleur`, etc.

### <u>Représentation en mémoire :</u>

La représentation en mémoire est la même que pour les tableaux, chaînes de caractères, etc. Ça suit les déclarations.

Disons que l'initialisation est :
```
Début:
    voit.marque <- "aa"
    voit.accélération <- 100
    voit.couleur <- "ab"
    voit.nbPorte <- 5
Fin
```

Identifiant | Valeur
:---: | :---:
(nbPorte) | 5
(couleur) | 'b'
(couleur) | 'a'
' | '
(accélération) | 100.0
(marque) | 'a'
voit -> (marque) | 'a'


## <u>Fonction et Procédure :</u>

### <u>Fonction :</u>

Une fonction est un morceau de code indépendant, qui permet de factoriser le code principal.<br/>
Une fonction renvoie **toujours** une valeur.

```
Fonction Identifiant(paramètre1 : Type1, paramètre2 : Type2, ..., paramètreN :: TypeN) : TypeRetour
Pre-Condition:
    Condition de paramètre1
    Condition de paramètre2
    .
    .
    .
    Condition de paramètreN
Post-Condition:
    Condition de la sortie
Variables:
    Déclaration de variables local
Début:
    Bloc de code
    Retourner(résultat)
Fin
```

:::danger[Interdiction !]
En LDA, il est possible uniquement de mettre un `Retourner()` qu'à la fin de la fonction. On s'autorise à en mettre avant uniquement dans le cas des fonctions **récursives** !
:::

Pour appeler une fonction dans un algo, on écrit : `Identifiant(variable1, variable2, ..., variableN)`

À l'intérieur du code de la fonction, `paramètre1`, `paramètre2`, etc, sont appelés **paramètres**.<br/>
Alors que lorsque l'on appelle la fonction, `variable1`, `variable2`, etc, sont appelés **arguments**.

### <u>Procédure :</u>

La procédure est exactement comme la fonction, mise à part qu'elle ne renvoie **rien**. Et que le mot clef est en LDA est **Procédure**.

```
Procédure Identifiant(paramètre1 : Type1, paramètre2 : Type2, ..., paramètreN :: TypeN)
Pre-Condition:
    Condition de paramètre1
    Condition de paramètre2
    .
    .
    .
    Condition de paramètreN
Post-Condition:
    Condition de la sortie (on peut s'attendre à une modification des arguments données)
Variables:
    Déclaration de variables local
Début:
    Bloc de code
Fin
```

## <u>Pointeur/Adresse :</u>

J'invite à lire le cours correspondant : [Pointeur/Adresse](./pointeur.md)

On déclare un pointeur de cette façon : `prt : ↑Type`<br/>
Ceci crée un pointeur sur le **Type** en question.

### <u>Exemple :</u>

`prt : ↑Entier` crée un pointeur sur un entier, donc le pointeur va viser l'adresse d'une variable qui a le type entier.

### <u>Récupération d'addresse :</u>

On récupère l'addresse d'une variable grâce à `@`.<br/>
Prennons un exemple, on a une variable d'un entier appelé `nb`.<br/>
Alors pour récupérer sa valeur on fait : `ptr <- @nb`

### <u>Affectation :</u>

On peut utiliser la section précédente avec le `@` pour affecter une valeur à un pointeur.<br/>
MAIS si jamais on veut qu'il ne pointe sur rien, on écrira : `NIL`

On peut aussi louer une case mémoire pour notre pointeur.<br/>
On écrira : `ptr <- allouer(Type)`

:::warning[Attention !]
N'oublié surtout pas de libérer le pointeur avec : `libéré(ptr)`
:::

### <u>Lecture :</u>:

Pour pouvoir lire la case mémoire cible, on écrira : `↑ptr`

#### <u>Exemple :</u>

```
Variables:
    a : Entier
    p : ↑Entier
Début:
    a <- 10
    p <- @a
    ↑p <- 100
Fin
```

À la fin de l'algorithme, `a` a pour valeur 100. Car on la modifié via son pointeur.

:::danger[Interdiction !]
Lorsque vous travaillez avec des structures de données comme des listes, etc. Il est impossible en LDA d'écrire : `↑(↑maillon.suivant).suivant`<br/>
Vous êtes obligés d'utiliser une variable contenant `(↑maillon.suivant)`
:::
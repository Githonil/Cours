---
title: Langage D'Algorithmie (LDA)
---
# Langage D'Algoritmie (LDA)

Le LDA est une sorte de pseudo-code, utilisé pour concevoir des algorithmes sur papier.

## Type de variable :

- Booléen (1 octet)
- Caractère (1 octet)
- Entier (1 octet)
- Réel (2 octets)
- Pointeur (2 octets)

### Exemple :

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

Ce qui donne en mémoire :

|ok2|Faux|
|-|-|
| | |
|x|1.5|
|j|2|
|i|5|
|ok|Vrai|

## Condition :

Les conditions en LDA sont représenté sous la forme suivante :

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

## Les boucles :

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

Renvoie l'affichage : `0246`

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

La dernière à la particularité de toujours rentré au moins une fois.
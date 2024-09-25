---
title: Introduction
position: 1
description: Bienvenue en dev !
---
# <u>Introduction</u>

## <u>Définitions</u> :

**<u>Algorithme :</u>** est **une suite d'instructions** qui permet de **résoudre un problème**.

**<u>Algorithmique :</u>** Tout ce qui touche les **algorithmes**.

### <u>Exemple :</u>

Faire des pâtes est un algorithme.

```
1. Mettre de l'eau dans une casserole.
2. Bouillir l'eau dans la casserole.
3. Mettre les pâtes.
4. Attendre.
5. Égoutter les pâtes.
```

Ce sont des **instructions**, qui résolvent la problématique **de me faire à manger**.<br/>
Donc c'est un algorithme !

## <u>Les outils :</u>

En soit, il n'y a pas d'outil à proprement parler, juste son cerveau 😉<br/>
Dans la catégorie **logique** du cerveau ! (Aïe Aïe Aïe les cours de raisonnement, mais pas de panique... C'est normalement plus simple que des partitions d'ensembles dans des applications !)

Pour les cours d'algorithmique, nous utilisons un pseudo-code appelé LDA, qui sera expliqué.

:::warning[Attention !]
Tout ce que j'écris dans cette page d'introduction n'est pas du LDA !<br/>
Une fois qu'on aura vu le LDA, j'écrirai uniquement en LDA.
:::

## <u>Rappel de logique :</u>

Voici les tables de logiques que vous devez savoir !

P | Q | P et Q
:---: | :---: | :---:
0 | 0 | 0
0 | 1 | 0
1 | 0 | 0
1 | 1 | 1

:::warning[Attention !]
Pour rappel, en logique, le "**ou**" est comme en anglais.
C'est-à-dire inclusif.<br/>
Quand on dit un yaourt ou un gâteau. C'est soit un yaourt, soit un fromage, mais certainement pas les deux !<br/>
Alors que en logique, on peut prendre les deux ! (C'est parfait pour les gourmands ça 😋)
:::

P | Q | P ou Q
:---: | :---: | :---:
0 | 0 | 0
0 | 1 | 1
1 | 0 | 1
1 | 1 | 1

:::tip[Information :]
(XOR = eXclusive OR) (qui est le "**ou**" normal en français)
:::

P | Q | P XOR Q
:---: | :---: | :---:
0 | 0 | 0
0 | 1 | 1
1 | 0 | 1
1 | 1 | 0

:::tip[Information :]
Pour rappel, $\Rightarrow$ se lit "implique"
:::

P | Q | P $\Rightarrow$ Q
:---: | :---: | :---:
0 | 0 | 1
0 | 1 | 1
1 | 0 | 0
1 | 1 | 1

:::tip[Information :]
Pour rappel, $\Leftrightarrow$ se lit "équivalent", "si et seulement si"
:::

P | Q | P $\Leftrightarrow$ Q
:---: | :---: | :---:
0 | 0 | 1
0 | 1 | 0
1 | 0 | 0
1 | 1 | 1

Si vous réussissez à recracher ces tableaux sans réfléchir, c'est que votre cerveau a un bon début de logique pour pouvoir concevoir un algorithme (à mon avis).

## <u>Éléments d'algorithmie :</u>

Nous allons introduire différents éléments qui sont utilisés dans les algorithmes, qui nous permettent de simplifier et de nous aider à résoudre les problèmes 🤓

### <u>Les variables :</u>

*Qu'est-ce une variable ?*<br/>
C'est tout simplement une boîte 📦, où on met une valeur dedans, du style 5, 10.2, une voiture, etc.<br/>
Elle a généralement un nom, qui décrit ce qu'elle va contenir. Le nom ne doit pas être trop long, ni trop court.

*Pourquoi appelons-ça une variable ?*<br/>
Car dans cette boîte, on va modifier sa valeur, on va la faire **varier**.

Généralement, on essaye (et dans ce cours on vous l'impose ainsi que les langages de programmation bas niveaux) de toujours respecter le même type.<br/>
C'est-à-dire que si votre variable a un nombre entier, vous lui donnerez toujours un nombre entier.

*À quoi ça sert ?*<br/>
Généralement, à sauvegarder des données. Si on ne fait pas ça, et bien c'est comme si on était un poisson rouge ! 🐠

### <u>Conditons :</u>

Les conditions sont aussi un élément important en algorithmique, car cela permet de gérer les différents cas d'une situation. (Ah ! On peut voir un lien avec le raisonnement de disjonction de cas !)

L'exemple parfait est les feux tricolores 🚦

```
Si le feux est vers alors tu roules.
Si le feux est orange alors tu ralentis.
Si le feux est rouge alors tu t'arrêtes.
```

L'algorithme va réagir différement selon la couleur du feu !

### <u>Les boucles :</u>

Si jamais j'ai des instructions du style :

```
1. Prendre le cahier.
2. Écrire des notes.
3. Ranger le cahier.
4. Aller dans un autre cours.
5. Prendre le cahier.
6. Écrire des notes.
7. Ranger le cahier.
8. Aller dans un autre cours.
9. Prendre le cahier.
10. Écrire des notes.
.
.
.
```

C'est long et répétitif. Normalement, si vous êtes là, c'est que vous êtes des glandeurs ! 😎

Donc, on a inventé quelque chose d'incroyable qui s'appelle les boucles ! Ça permet de boucler des instructions le nombre de fois qu'on veut, ou de faire des instructions en boucle tant qu'on n'a pas validé une condition.

Imaginons, on a 5 cours dans la journée, j'écrirai :

```
1. Faire 5 fois :
    - Aller au cours.
    - Prendre le cahier.
    - Écrire des notes.
    - Ranger le cahier.
2. Journée fini, je rentre chez moi 😉
```

### <u>Fonction :</u>

On a sûrement dû vous dire en 3ème que en Math, une fonction est une boîte de calcul qui simplifie les notations, du genre :

$f(x) = 5x + 100$

Alors je peux facilement écrire f(2), f(5), etc. Au lieu de 5 x 2 + 100 ou 5 x 5 + 100.

Et bien là c'est pareil ! Une fonction est un morceau de code, d'algorithme. Qui va permettre de factoriser, de simplifier la lecture.

Par exemple :

```
1. Je prend ma casserole.
2. Je me prépare à manger.
3. Je mange.
```

Pour le 2, si on se pose la **question** de comment on se prépare à manger ? Et bien imaginons que le 2 est une **fonction** et que le bloc de code qui la représente est la liste d'instructions que j'ai mis plus haut de comment faire des pâtes !

Ainsi, au lieu d'écrire toutes les instructions de faire des pâtes, le 2 résume les instructions à notre place !<br/>
**Glandeur** j'ai dit ! 😴

## <u>Résumer :</u>

- On a vu les définitions.<br/>
- Un rappel de logique.<br/>
- Les variables, comment mémoriser quelque chose.<br/>
- Les boucles et fonctions, les outils du parfait branleur et qui permettent de mieux lire un algorithme.
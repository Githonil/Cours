---
title: Espace Vectoriel
description: ''
---
# <u>Espace Vectoriel :</u>

## <u>Definition :</u>

Soit $(\mathbb{K}, +, \times)$ un corps commutatif. Et $(E, \oplus)$ un groupe abélien.

Soit $\otimes$ une loi de composition **externe** :
$
\begin{cases}
    \mathbb{K} \times E \rightarrow E \\
    (\lambda, x) \longmapsto \lambda \otimes x
\end{cases}
$

La loi $\otimes$ doit satisfaire :
- $\forall \lambda \in \mathbb{K}, \forall x, y\in E, \lambda \otimes (x \oplus y) = (\lambda \otimes x) \oplus (\lambda \otimes y)$
- $\forall \lambda ,\mu \in \mathbb{K}, \forall x\in E, (\lambda + \mu) \otimes x = (\lambda \otimes x) \oplus (\mu \otimes x)$
- $\forall \lambda, \mu \in \mathbb{K}, \forall x \in E, (\lambda \times \mu) \otimes x = \lambda \otimes (\mu \otimes x)$
- $\forall x \in E, 1_k \otimes x = x$

$E$ est ainsi appelé un **espace vectoriel sur $\mathbb{K}$** ou un **$\mathbb{K}$-espace vectoriel** ($\mathbb{K}$-ev).<br/>
Les éléments de $E$ sont appelés des **vecteurs**.<br/>
L'élément neutre de $E$, soit $0_E$ est appelé le **vecteur nul**.<br/> 
Les éléments de $\mathbb{K}$ sont appelés des **scalaires**.

### <u>Exemple :</u>

- Soit $n \in \N,$ $\R^n$ est un espace vectoriel sur $\R$.
- Soit $n \in \N,$ $\mathbb{C}^n$ est un espace vectoriel sur $\mathbb{C}$.
- $\R^\R$ (l'essemble des applications $\R\rightarrow\R$, noté aussi $\mathcal{F}(\R)$) est un espace vectoriel sur $\R$, avec l'opération + et la multiplication usuelle sur les scalaires.

## <u>Propriétés :</u>

Un espace vectoriel $E$ admet les propriétés suivantes :

- $\forall x \in E, 0_{\mathbb{K}} \otimes x = 0_{E}$
- $\forall \lambda \in \mathbb{K}, \lambda \otimes 0_E = 0_E$
- $\forall \lambda \in \mathbb{K}, \forall x \in E, \lambda \otimes x = 0_E \Leftrightarrow \lambda = 0_{\mathbb{K}} \text{ ou } x = 0_E$
- $\forall x \in E, -1_{\mathbb{K}} \otimes x = -x$ (Le moins devant, désigne le symétrique de l'élément).
- $\forall \lambda \in \mathbb{K}, \forall x \in E, (-\lambda) \otimes x = \lambda \otimes (-x) = -(\lambda \otimes x)$

### <u>Démonstration :</u>

Démontrons que $\forall x \in E, 0_{\mathbb{K}} \otimes x = 0_{E}$

$\forall x \in E$

$0_{\mathbb{K}} \otimes x = (0_{\mathbb{K}} + 0_{\mathbb{K}}) \otimes x$<br/>
$\Rightarrow 0_{\mathbb{K}} \otimes x = (0_{\mathbb{K}} \otimes x) \oplus (0_{\mathbb{K}} \otimes x)$<br/>
$\Rightarrow -(0_{\mathbb{K}} \otimes x) \oplus (0_{\mathbb{K}} \otimes x) = -(0_{\mathbb{K}} \otimes x) \oplus (0_{\mathbb{K}} \otimes x) \oplus (0_{\mathbb{K}} \otimes x)$<br/>
$\Rightarrow 0_E = 0_{\mathbb{K}} \otimes x$

Donc $\forall x \in E, 0_{\mathbb{K}} \otimes x = 0_{E}$

---

Démontrons que $\forall \lambda \in \mathbb{K}, \lambda \otimes 0_E = 0_E$

$\forall \lambda \in \mathbb{K}$

$\lambda \otimes 0_E = \lambda \otimes (0_E \oplus 0_E)$<br/>
$\Rightarrow \lambda \otimes 0_E = (\lambda \otimes 0_E) \oplus (\lambda \otimes 0_E)$<br/>
$\Rightarrow -(\lambda \otimes 0_E) \otimes (\lambda \otimes 0_E) = -(\lambda \otimes 0_E) \otimes (\lambda \otimes 0_E) \oplus (\lambda \otimes 0_E)$<br/>
$\Rightarrow 0_E = \lambda \otimes 0_E$

Donc $\forall \lambda \in \mathbb{K}, \lambda \otimes 0_E = 0_E$

---

Démontrons que $\forall \lambda \in \mathbb{K}, \forall x \in E, \lambda \otimes x = 0_E \Leftrightarrow \lambda = 0_{\mathbb{K}} \text{ ou } x = 0_E$

D'abord montrons que $\forall \lambda \in \mathbb{K}, \lambda = 0_{\mathbb{K}} \text{ ou } x = 0_E \Rightarrow \forall x \in E, \lambda \otimes x = 0_E$

On a démontré que si $x = 0_E$ ou que $\lambda = 0$ alors $\lambda \otimes x = 0_E$<br/>
Donc $\forall \lambda \in \mathbb{K}, \lambda = 0_{\mathbb{K}} \text{ ou } x = 0_E \Rightarrow \forall x \in E, \lambda \otimes x = 0_E$

Montrons maintenant que $\forall \lambda \in \mathbb{K}, \forall x \in E, \lambda \otimes x = 0_E \Rightarrow \lambda = 0_{\mathbb{K}} \text{ ou } x = 0_E$


Soit $\lambda \in \mathbb{K}$<br/>
Soit $x \in E$<br/>
Supposons que $\lambda \otimes x = 0_E$

<u>Cas 1 :</u> Supposons que $\lambda \ne 0_{\mathbb{K}}$

$\lambda \otimes x = 0_E$<br/>
$\Rightarrow -\lambda \otimes (\lambda \otimes x) = -\lambda \otimes 0_E$<br/>
$\Rightarrow (-\lambda \times \lambda) \otimes x = -\lambda \otimes 0_E$<br/>
$\Rightarrow -\lambda \otimes x = -\lambda \otimes 0_E$<br/>
$\Rightarrow 1_{\mathbb{K}} \otimes x = 1_{\mathbb{K}} \otimes 0_E$<br/>
$\Rightarrow x = 0_E$

<u>Cas 2 :</u> Supposons que $x \ne 0_E$

$\lambda \otimes x = 0_E$<br/>
$\Rightarrow \lambda \otimes x = x \oplus (-x)$<br/>
$\Rightarrow (\lambda \otimes x) \oplus x = x$<br/>
$\Rightarrow (\lambda \otimes x) \oplus (1_{\mathbb{K}} \otimes x) = x$<br/>
$\Rightarrow (\lambda \times 1_{\mathbb{K}}) \otimes x = x$<br/>
$\Rightarrow \lambda = 0_{\mathbb{K}}$

Donc $\forall \lambda \in \mathbb{K}, \forall x \in E, \lambda \otimes x = 0_E \Rightarrow \lambda = 0_{\mathbb{K}} \text{ ou } x = 0_E$

Ainsi on a démontré que $\forall \lambda \in \mathbb{K}, \forall x \in E, \lambda \otimes x = 0_E \Leftrightarrow \lambda = 0_{\mathbb{K}} \text{ ou } x = 0_E$

---

Démontrons que $\forall x \in E, -1_{\mathbb{K}} \otimes x = -x$

$\forall x \in E$

$(-1_{\mathbb{K}} \otimes x) \oplus x$<br/>
$= (-1_{\mathbb{K}} \otimes x) \oplus (1_{\mathbb{K}} \otimes x)
$<br/>
$= (-1_{\mathbb{K}} + 1_{\mathbb{K}}) \otimes x$<br/>
$= 0_{\mathbb{K}} \otimes x$
$=0_E$

Donc $\forall x \in E, -1_{\mathbb{K}} \otimes x = -x$

---

Démontrons que $\forall \lambda \in \mathbb{K}, \forall x \in E, (-\lambda) \otimes x = \lambda \otimes (-x) = -(\lambda \otimes x)$

$\forall \lambda \in \mathbb{K}, \forall x \in E$

$((-\lambda) \otimes x) + (\lambda \otimes x)$<br/>
$= (-\lambda + \lambda) \otimes x$<br/>
$= 0_{\mathbb{K}} \otimes x$<br/>
$= 0_E$

Donc $(-\lambda) \otimes x = -(\lambda \otimes x)$

$\lambda \otimes (-x) + (\lambda \otimes x)$<br/>
$= \lambda \otimes (-1_{\mathbb{K}} \otimes x) + (\lambda \otimes x)$<br/>
$= (\lambda \times -1_{\mathbb{K}}) \otimes x + (\lambda \otimes x)$<br/>
$= ((-\lambda) \otimes x) + (\lambda \otimes x)$<br/>
$= 0_E$

Donc $\lambda \otimes (-x) = -(\lambda \otimes x)$

Donc $\forall \lambda \in \mathbb{K}, \forall x \in E, (-\lambda) \otimes x = \lambda \otimes (-x) = -(\lambda \otimes x)$

$\Box$

## <u>Sous-Espace Vectoriel :</u>

Soit $E,$ un $\mathbb{K}$-ev<br/>
Soit $F$ un ensemble.

$F$ est un sous-espace vectoriel (sous-ev, ou SEV) $\Leftrightarrow$
- $F \subset E$
- $F$ est un espace vectoriel sur $\mathbb{K}$.

:::info[Information]
$E$ et $\lbrace 0_E \rbrace$ sont des sous-espace vectoriel de $E$.
:::

## <u>Conditions Nécessaires Suffisantes (CNS) ou caractérisation d'un sous-ev :</u>

Les conditions nécessaires suffisantes sont des conditions qui permettent de facilement démontrer un sous-espace vectoriel.

Soit $E$ un $\mathbb{K}$-ev<br/>
Soit $F \subset E$

$F$ est un sous-espace vectoriel $\Leftrightarrow$
- $F \ne \emptyset$
- $\forall x, y \in F, x \oplus y \in F$
- $\forall \lambda \in \mathbb{K}, \forall x \in F, \lambda \otimes x \in F$

### <u>Démonstration :</u>

Montrons d'abord que si $F$ est un sous-espace vectoriel $\Rightarrow$ les conditions.

$F$ est un sous-ev, donc un sous-groupe abélien, donc il a obligatoirement un élément neutre.<br/>
Donc $F \ne \emptyset$

$\forall x, y \in F, x \oplus y \in F$ car $F$ est un sous-ev.

$\forall \lambda \in \mathbb{K}, \forall x \in F, \lambda \otimes x \in F$ car $F$ est un sous-ev.

---

Montrons maintenant que les conditions $\Rightarrow F$ est un sous-ev.

On sait que la loi $\otimes$ satifait :
- $\forall \lambda \in \mathbb{K}, \forall x, y\in E, \lambda \otimes (x \oplus y) = (\lambda \otimes x) \oplus (\lambda \otimes y)$
- $\forall \lambda ,\mu \in \mathbb{K}, \forall x\in E, (\lambda + \mu) \otimes x = (\lambda \otimes x) \oplus (\mu \otimes x)$
- $\forall \lambda, \mu \in \mathbb{K}, \forall x \in E, (\lambda \times \mu) \otimes x = \lambda \otimes (\mu \otimes x)$
- $\forall x \in E, 1_k \otimes x = x$


Montrons que $\otimes$ est stable pour $F$.

Si $x, y \in F$ alors :

1.
$(x \oplus y) \in F$<br/>
Posons $z = (x \oplus y)$ alors $\lambda \otimes z \in F$<br/>
Donc $\lambda \otimes (x \oplus y) \in F$

$(\lambda \otimes x) \in F, (\lambda \otimes y) \in F$<br/>
Poson $z = (\lambda \otimes x)$ et $w = (\lambda \otimes y)$ alors $z \oplus w \in F$<br/>
Donc $(\lambda \otimes x) \oplus (\lambda \otimes y) \in F$

2.
$\lambda + \mu \in \mathbb{K}$<br/>
Posons $a = \lambda + \mu$ alors $a \otimes x \in F$<br/>
Donc $(\lambda + \mu) \otimes x \in F$

L'autre côté a déjà été montré dans le 2.

3.
$\lambda \times \mu \in \mathbb{K}$<br/>
Posons $a = \lambda \times \mu$ alors $a \otimes x \in F$<br/>
Donc $(\lambda \times \mu) \otimes x \in F$

$\mu \times x \in F$<br/>
Posons $y = \mu \times x$ alors $\lambda \otimes y \in F$<br/>
Donc $\lambda \otimes (\mu \times x) \in F$

4.
Déjà prouvé par la condition : $\forall \lambda \in \mathbb{K}, \forall x \in F, \lambda \otimes x \in F$

---

Démontrons que $F$ est un sous-groupe abélien de $E$.

La loi $\oplus$ vient du groupe abélien $(E, \oplus)$.<br/>
$0_E \in F$ car $\forall x \in F, 0_{\mathbb{K}} \otimes x = 0_E$ d'après les propriétés de la loi $\otimes$ (Qu'on a démontré juste au-dessus).<br/>
Et $\forall x \in F, -1_{\mathbb{K}} \otimes x = -x$ d'après les proprétés de la loi $\otimes$.<br/>
Comme $\forall x, y \in F, x \oplus y \in F$<br/>
Alors $(F, \oplus)$ est un sous-groupe abélien.

Ainsi $F$ est un sous-espace vectoriel $\Leftrightarrow$ les conditions.

$\Box$

### <u>Une autre CNS :</u>

Une autre CNS plus simple est :

- $F \ne \emptyset$
- $\forall \lambda \in \mathbb{K}, \forall x, y \in F, \lambda x \oplus y \in F$ (ou $\lambda x = \lambda \otimes x$)

### <u>Démonstration :</u>

Peu importe le sens de l'implication, dans tous les cas, $F \ne \emptyset$

Montrons d'abord la première CNS $\Rightarrow$ la seconde.

$\forall \lambda \in \mathbb{K}, \forall x, y \in F$

$\lambda x \in F$<br/>
Posons $z = \lambda x$ alors $z \oplus y \in F$<br/>
Donc $\lambda x \oplus y \in F$

Montrons maintenant que la seconde $\Rightarrow$ la première.

Si $y = 0_F$ alors $\lambda x \in F$<br/>
Si $\lambda = 1_{\mathbb{K}}$ alors $x \oplus y \in F$

Donc la première CNS $\Leftrightarrow$ la seconde.

$\Box$
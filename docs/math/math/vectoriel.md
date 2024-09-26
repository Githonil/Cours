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

Un espace vectoriel doit suivre ces lois :
- $\forall \lambda \in \mathbb{K}, \forall x, y\in E, \lambda \otimes (x \oplus y) = (\lambda \otimes x) \oplus (\lambda \otimes y)$
- $\forall \lambda ,\mu \in \mathbb{K}, \forall x\in E, (\lambda + \mu) \otimes x = (\lambda \otimes x) \oplus (\mu \otimes x)$
- $\forall \lambda, \mu \in \mathbb{K}, \forall x \in E, (\lambda \times \mu) \otimes x = \lambda \otimes (\mu \otimes x)$
- $\forall x \in E, 1_k \otimes x = x$

$E$ est ainsi appelé un **espace vectoriel sur $\mathbb{K}$** ou un **$\mathbb{K}$-espace vectoriel** ($\mathbb{K}$-ev).<br/>
Et les éléments de $E$ sont appelé des **vecteurs**.

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

#### ☐
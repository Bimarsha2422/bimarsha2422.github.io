---
layout: post
title: "Randomness vs Chaos: The Illusion of Pure Chance"
date: 2022-09-29 00:00:00-0000
description: "We look at the line between randomness and chaos, uncovering how many seemingly random events are actually driven by hidden deterministic rules—and asking whether this distinction speaks to the nature of reality or just to the limits of how we model it."
subtitle: ""
tags:
  - randomness
  - chaos
categories:
  - mathematical-modeling
giscus_comments: false
related_posts: true
---

*"God does not play dice with the universe."* This was Albert Einstein's response (paraphrased) to the Nobel prize winning German physicist Max Born after Born suggested in a letter that the very fundamental nature of the quantum world was probabilistic. While the use of the word 'God' led many to believe that Einstein was a theist (which he denied later), I would like to draw your attention to something else in the statement—Einstein implied that a dice roll was random. What's so interesting about that? That's something we hear in our statistics class all the time, right?

We will come back to this in a while, but for now, I want you to comment on two sequences of characters written below:

```
aaaabbbbccccddddeeeeffffgggghhhhiiiijjjj
sdbcakjsquknwmsdkalajwnwouedskajakn
```

How do you feel about these two strings? Do you think one is more 'random' than the other? To me, the first one feels much more ordered since it appears to have a pattern. However, the second one seems to arise from a cat sitting on my laptop keyboard and thus very 'random'. 

If we think of a criterion that would help us formalize this understanding of 'randomness', perhaps we could comment on the degree of randomness of the strings based on our ability to express it more concisely, without losing any information. For instance, one way to compress the first string would be to write it as 'a-j 4 × each'. However, it is extremely difficult to find a way to convey the second string clearly without spelling out each character; there simply isn't any structure to exploit. In other words, it's random. Well, this is what **Gregory Chaitin** refers to as true randomness. In Chaitin's interpretation of randomness, the process by which a sequence is formed is not of much importance. All that's important is the final sequence that we obtain and its structure (Chaitin).

## The Illusion of Randomness in Our World

We use the word 'random' all the time, albeit mostly in a loose sense. In scientific terms, especially when discussing dynamical systems, the word **'random'** has a precise meaning. To understand things that are random, let us first understand things that are not random.

Firstly, a dice roll is not truly random: it follows the same set of rules that the rest of the objects in this world we experience follow. I'm sure Einstein implied that the dice roll was random as a metaphor, definitely not because he was unaware of this fact. When a leaf falls off a tree and dances its way in the air before landing on the ground, its trajectory feels so random, doesn't it? As you might have guessed, even that movement is not random at all. Even most so-called 'random number generators' are not strictly random. In fact, I'd argue that there is hardly anything that we experience in the macroscopic world that is truly random in a strictly scientific sense.

However, it's not surprising at all that the events I've mentioned above are often perceived as being random. That's completely reasonable because there are two ways to look at things: **phenomenologically** and **ontologically**. While phenomenology aims to describe the world around us based on how we experience it, ontology concerns itself not with an individual's subjective experience but an objective description of the real world on a fundamental level.

So what exactly is randomness and does randomness exist in the real world? Well, the word can have different meanings depending on the context, but for the sake of this essay, we define randomness in context of **indeterminism**.

## Defining True Randomness

An event is said to be **random** if it is not determined by anything, i.e. non-deterministic. The trajectory of a falling leaf is still determined by the flow of the air around it, the shape of the leaf and several other factors. I agree that we might not be able to track all these variables or fit them all coherently into a model. But that is not to say that the leaf follows a specific path without any cause.

**Determinism**, as we have discussed extensively previously, is when the present state of a system completely determines the future state. The entirety of classical physics is deterministic in nature (Feldman). This might suggest that we should be able to predict the future provided we devise a perfect model.

Unfortunately, **chaos** prevents that from happening.

## Chaos: When Determinism Becomes Unpredictable

A deterministic system is said to be **chaotic** if it is highly sensitive to small fluctuations in the initial conditions. **SDIC (Sensitive Dependence on Initial Conditions)** is a term widely used to characterize chaos, but that is only half the story. 

An exponential function without bounds can also have sensitive dependence on initial conditions, which can even be quantified via the **Lyapunov exponent**. Take any two different initial conditions $$x_0$$ and $$y_0$$. No matter how close these two are initially, when plugged into the iterated map $$x_{n+1} = 2x_n \Rightarrow x_n = 2^n x_0$$, we get:

$$y_n - x_n = 2^n y_0 - 2^n x_0 = 2^n(y_0 - x_0)$$

This indicates that even the tiniest of differences in the initial condition is amplified at an exponential rate causing large differences in outcomes. But does this iterated map feel like chaos at all? The orbit traced by any initial condition is extremely confined in terms of how much it explores the available (phase) space. We expect things that are chaotic to really be all over the place, don't we?

That is why we impose another criterion for a system to be called chaotic. A chaotic system demonstrates some kind of **'stretching and folding'** mechanism which leads to not only nearby points being stretched far away but also distant points coming arbitrarily close as a result of the folding (Bishop). 

The simplest way to see this in action is to observe the process of kneading a dough. Kneading a dough is basically performing the stretching and folding action again and again—two very nearby particles on the dough get stretched away far from each other while some particles initially far away from each other come close to each other during the folding process. This is what causes chaotic dynamical systems to remain bounded and not drift away to infinity like in the doubling map we saw earlier.

## The Quantum Realm: Where True Randomness May Exist

Coming back to the discussion of randomness, if most of what we perceive as random is in fact deterministic chaos in disguise, is there anything random in this world at all? It turns out that the real world could be random on the quantum scale. But how exactly can we know what reality is? I do not have a definitive answer to this, but let's leave that discussion for later.

Perhaps one of the most widely heard principles surrounding quantum mechanics is the **Heisenberg Uncertainty Principle**, formulated by Nobel Laureate and German physicist Werner Heisenberg. No, it does not say that 2 times 3 may not be equal to 3 times 2 because of the uncertainty. This argument was made by Dr. B.M Hegde, an Indian professor and a strong proponent of quantum healing, no surprise there ("Is E = mc2 wrong? – Dr. B M Hegde", 0:40 - 1:05).

Rather, the **Heisenberg Uncertainty Principle** states that there is a fundamental limit to the accuracy with which we can measure both the position and momentum of a particle; the more we know about one, the lesser we know about the other. More precisely, if $$\Delta x$$ and $$\Delta p$$ are the uncertainties associated with the position and momentum of a particle, then $$\Delta x \Delta p \geq \frac{h}{4\pi}$$, where $$h$$ is the Planck's constant which is about $$6.626 \times 10^{-34} \text{ J·s}$$.

The principle makes it clear that the inaccuracy in measurement does not arise from human error but from an inherent restriction posed by nature. As a result, we can no longer associate one particular present state of a system with its future state like we could for deterministic events ("Heisenberg's Uncertainty Principle").

## The Hidden Variable Debate

Now, one thought that could strike our mind is what if the uncertainty is not really fundamental and maybe there is something behind the bushes that we just haven't discovered yet. Apparently, Einstein and several other physicists of the time, including Louis de Broglie and David Bohm, thought along the same lines.

Einstein, not convinced about the non-deterministic nature of quantum phenomena, made an unsuccessful attempt to formulate a **hidden-variable theory** hoping to explain quantum phenomena as deterministic events instead. De Broglie also came up with a deterministic hidden-variable theory whereby a 'pilot wave' guides the trajectory of a particle—this theory didn't gain much success and ended up being abandoned by de Broglie himself (Baggott).

Numerous experiments and observations overwhelmingly support the assertion that quantum theory is fundamentally probabilistic in nature. Thus, quantum events could possibly be the only events that are truly random in nature.

## Bridging the Quantum-Classical Divide

The above statement should raise a striking question. Since everything in the macroscopic world is made up of atoms that function in quantum scales, how can the macroscopic world be deterministic if the quantum world is non-deterministic?

To understand this, we should differentiate between an individual, possibly random, event and the statistics of a large number of such events. For example, assuming that an unbiased coin toss is random, it is difficult to accurately predict which side the coin flips next. However, when we flip the coin a million times, we can expect the number of heads and tails to be approximately 500,000 each with some margin of error.

In a similar way, even though we cannot predict the behavior of a single quantum particle, we can still know the average behavior of a large number of quantum particles. In a way, their behavior 'averages out' by the **law of large numbers** (Dekking). We simply need not worry about how one quantum particle happens to behave when working at a macroscopic scale.

## Distinguishing Chaos from Randomness

To summarize the difference between chaos and randomness, **chaos** is a property of some dynamical systems that rules out any possibility of accurate prediction arbitrarily far into the future even though the system itself is completely determined by its present state. On the other hand, **true randomness** only exists for a system such that its present or past does not determine its future, not even in theory.

However, for all practical purposes, we often use the word randomness to describe chaotic events whose outcome we can neither determine beforehand nor influence by any means.

In fact, it is not possible to say for sure whether an event is random or chaotic just through the set of observations or their statistics. A fair coin toss can be reasonably called random unless people learn how to rig a coin toss. After all, researchers at the University of British Columbia found out that some simple instructions on manipulating a coin toss and a few minutes of practice was sufficient for more than half of the participants in a study to significantly manipulate the outcome of a coin toss (Clark).

## The Nature of Reality: Models vs Truth

Having said all these, an important question still remains, and might remain for a long, long time. What is it that we are characterizing as chaotic or random? Are we really describing the true nature of reality or just the models we build in hope of understanding the real world?

In fact, I would argue that whatever we experience as reality is not true reality. Instead, it is our brain that develops models of reality based on data fed by our senses, an idea that Stephen Hawking agrees with. My point here is that our understanding of reality is driven by models; in some sense, we could be experiencing the reality of a really good model, still not perfect—optical illusions like the flash lag illusion exemplify this.

The better the model is at explaining observations, the closer we find it to reality. Therefore, we can always strive for better models that explain our experiences better but still unable to really explain the true nature of reality. In this sense, I am hesitant to call the differences between randomness and chaos as objective.

In fact, I suggest that we reflect on **Niels Bohr's** idea that the task of physics is not to find out how nature is—physics concerns what we say about nature instead (Petersen). So, while the ideas of determinism and non-determinism, chaos and randomness help us describe our experiences and observations, those might not characterize true reality.

---

## Conclusion

What true reality is, we may never know. But in our quest to understand the world around us, the distinction between randomness and chaos provides a powerful framework for thinking about predictability, determinism, and the fundamental nature of events.

While chaos emerges from deterministic systems that are simply too sensitive to initial conditions for practical prediction, true randomness—if it exists—represents a more fundamental break from causality. Whether we're dealing with the chaotic dance of a falling leaf or the quantum uncertainty of subatomic particles, recognizing these distinctions helps us better understand both the power and limitations of our predictive capabilities.

Perhaps Einstein was right that God doesn't play dice with the universe. But even if the universe is fundamentally deterministic, chaos ensures that it often *appears* as if someone is rolling the dice—and that appearance may be all that matters for our lived experience of reality.

---

## Bibliography

Baggott, Jim. *The Quantum Story: A History in 40 Moments*. New York: Oxford University Press, 2011. Pp. 116-117.

Bishop, Robert. "Chaos." *The Stanford Encyclopedia of Philosophy* (Spring 2017 Edition), Edward N. Zalta (ed.).

Chaitin, Gregory. "The Chaitin Interview II: Defining Randomness." Interview by Robert J. Marks. March 2021.

Clark, M. P. A., and B. D. Westerberg. "How Random Is the Toss of a Coin?" *Canadian Medical Association Journal*, vol. 181, no. 12, CMA Joule Inc., Dec. 2009, pp. E306–08. https://doi.org/10.1503/cmaj.091733.

Dekking, Michel. *A Modern Introduction to Probability and Statistics*. Springer, 2005. pp. 181-190.

"E=mc² is wrong? - Dr. B M Hegde." YouTube, uploaded by Dr. B M Hegde Fans Club, 27 September 2021. https://www.youtube.com/watch?v=0DxrSGAwSGk.

Feldman, David P. "Newton, Laplace, and Determinism." *Chaos and Fractals: An Elementary Introduction*. Oxford: Oxford Academic, 2012.

"Heisenberg's Uncertainty Principle." *Chemistry LibreTexts*, 11 Sept. 2022. https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Quantum_Mechanics/02._Fundamental_Concepts_of_Quantum_Mechanics/Heisenberg's_Uncertainty_Principle.

Murphy, Paul Austin. "Stephen Hawking's Philosophy: Model-Dependent Realism." *Medium*, 15 Dec. 2021. https://medium.com/science-and-philosophy/stephen-hawkings-model-dependent-realism-2b2973af41a6.

Petersen, Aage. "The Philosophy of Niels Bohr." *Bulletin of the Atomic Scientists*, vol. 19, no. 7, 1963, pp. 8–14. https://doi.org/10.1080/00963402.1963.11454520.

*The Born–Einstein letters: correspondence between Albert Einstein and Max and Hedwig Born from 1916–1955, with commentaries by Max Born*. London: Macmillan, 1971. p. 91.

"What Is the Uncertainty Principle and Why Is It Important?" *Caltech Science Exchange*. https://scienceexchange.caltech.edu/topics/quantum-science-explained/uncertainty-principle. 
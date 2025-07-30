---
layout: post
title: "Determinism and Unpredictability"
date: 2022-09-15 00:00:00-0000
description: "We try to understand what deterministic systems are, why their future can still be unpredictable, and whether being deterministic really means the future is knowable."
subtitle: "*Originally written for CDAD-UH 1034Q: Numbers, Models and Chaos*"
tags:
  - determinism
  - chaos-theory
categories:
  - mathematical-modeling
giscus_comments: false
related_posts: true
---

*September 15, 2022*

## The Predictable and the Unpredictable

If I throw a ball—heavy enough not to be swayed by wind or other natural forces except gravity, or in a vacuum—the laws of physics give us a way to make reasonable approximations of how high the ball reaches, how far it travels, and how long it remains in the air. This is, of course, valid only when I am well-informed about the ball's initial velocity and launch angle. The accuracy of my approximation depends mostly on the accuracy of my knowledge of the ball's initial state.

Had science not given us a way to foresee future consequences based on our present state and actions, would astronauts ever be able to travel back and forth to the ISS at the rate they do now? Certainly not. In fact, there are countless everyday scenarios where we make use of our ability to predict future outcomes based on our knowledge of how things work, albeit mostly tentatively without heavy mathematical computations.

While most of us might not have given it much thought, we have internalized that outcomes to most of our actions are not random—that the consequences we face are mostly due to specific causes we may or may not be aware of. I use the word "most" rather than "each and every" because for some actions, some of us might feel the results are somewhat random. For instance, when we toss a coin, we cannot say with certainty which side it will land on. Some might describe the outcome as "random" and equally likely to be heads or tails.

## Laplace's Vision of Determinism

But is this truly the case? Is a coin toss inherently random? What causes this apparent randomness? **Pierre-Simon Laplace**, a scholar and polymath, believed that nothing in the universe is truly random. Based on Laplace's belief, our failure to predict coin tosses with certainty could be attributed to two potential reasons:

1.  **Imperfect Models**: We might not have a perfect model for a coin toss that ties all dependent variables—such as the coin's orientation, initial velocity, surrounding air currents, etc.—in a complete and correct way.

2.  **Uncertain Parameters**: Even if we devised a perfect model for coin tosses, our knowledge of the parameters will inevitably have some uncertainty. For some systems (including coin tosses), even minuscule uncertainties can snowball into large errors in the final result.

In principle, if we could overcome these two limitations, there would be no suspense to a coin flip—we would get it right every time. Thus, the randomness we perceive would just be the byproduct of our imperfect knowledge about the initial state and laws of the system.

Speaking more generally, Laplace believed that if we knew precisely the present state of a **dynamical system**—a system whose state variables change over time according to specific rules—and the rules that act upon that state, we could determine how the present state evolves into a future state, possibly one arbitrarily far in the future. This is what we refer to as a **deterministic system**.

We can refer to the laws governing a deterministic dynamical system as _"the rule of evolution"_ as it controls how an anterior state evolves into a later one. In a deterministic system, an action can have one, and only one, consequence—had there been multiple possible consequences, the system would be random, not deterministic. Thus, **randomness** (also called stochasticism) and **determinism** can be thought of as opposites of each other.

### The Quantum Caveat

To clarify, the examples I gave above about throwing the ball and the coin toss are believed to follow the laws of Newtonian physics, which are completely deterministic in nature. However, when we look at the quantum side of physics, there seem to exist intrinsically random aspects. So, the universe may not be fully deterministic as Laplace believed. The scientific community is still divided on this issue, and I do not wish to give any verdict here. However, the models we use to describe the real world can be deterministic or non-deterministic.

## When Determinism Doesn't Guarantee Predictability

Stochastic systems, by their very nature, limit our ability to predict the future. However, as counterintuitive as it may sound, **predictability is not always guaranteed even for deterministic systems**. Systems could be completely deterministic and yet it might be impossible for us to reasonably predict future states.

The exception would be if the hypothetical intelligence Laplace discussed in his _"A Philosophical Essay on Probabilities"_ existed in reality, which it does not and never will. Laplace wrote:

> _Given for one instant an intelligence which could comprehend all the forces by which nature is animated and the respective situation of the beings who compose it—an intelligence sufficiently vast to submit these data to analysis—it would embrace in the same formula the movements of the greatest bodies of the universe and those of the lightest atom; for it, nothing would be uncertain and the future, as the past, would be present to its eyes._

It is now imperative for us to discuss why such unpredictability exists even for some completely deterministic systems. While flaws in the evolution rule itself could be one reason, the unpredictability could persist even when we have a perfect evolution rule.

### Comparing Astronomy and Meteorology

Within deterministic systems, there are systems for which accurate predictions can be made. For instance, astronomers can predict the position of stars and the timings of eclipses even 10 years from now based on deterministic models and observational data. However, it would be extremely difficult for meteorologists to accurately predict the weather of a location one month later.

Is this simply because astronomers are more skilled and advanced than meteorologists? Not at all.

## The Mathematics of Uncertainty

Firstly, we need to understand that **no measurement done on a continuous scale is completely free of errors**—the limitations of the measuring instrument and the skill of the experimenter both play a role. As former MIT Professor Walter Lewin said in his lectures, any measurement we make without knowledge of its uncertainty is completely meaningless.

This is why all credible scientific papers containing observational data also include the uncertainties associated with them. The uncertainties—depending on the kind of model we're using—can remain constant, grow (linearly or nonlinearly), or even shrink with time.

### Case 1: Constant Uncertainty

Let's start with an example where uncertainty remains constant. Suppose we track the velocity of a ball dropped from a height with some initial velocity at each second of its fall. For simplicity, let's assume air resistance is negligible and gravitational acceleration is constant. We can model this scenario with:

$$v_{t+1} = v_t + g \cdot \Delta t$$

where $$v_t$$ is the velocity of the ball in m/s at time $$t$$, $$g$$ is gravitational acceleration in m/s², and $$\Delta t$$ is the time interval (1 second in our case).

Starting with an initial velocity of 0 m/s:

$$
\begin{align*}
v_0 &= 0 \\
v_1 &= v_0 + g \cdot \Delta t = g \cdot \Delta t \\
v_2 &= v_1 + g \cdot \Delta t = 2g \cdot \Delta t \\
&\vdots \\
v_n &= v_{n-1} + g \cdot \Delta t = ng \cdot \Delta t
\end{align*}
$$

Now, let's see the results when we have an uncertainty of $$\Delta v_0$$ in the initial velocity:

$$
\begin{align*}
v_0 &= 0 + \Delta v_0 = \Delta v_0 \\
v_1 &= v_0 + g \cdot \Delta t = \Delta v_0 + g \cdot \Delta t \\
v_2 &= v_1 + g \cdot \Delta t = \Delta v_0 + 2g \cdot \Delta t \\
&\vdots \\
v_n &= v_{n-1} + g \cdot \Delta t = \Delta v_0 + ng \cdot \Delta t
\end{align*}
$$

As we can see clearly, the initial uncertainty neither grows nor shrinks. It remains constant, and therefore, if we ensure that the uncertainty is small to start with, it will have an insignificant bearing on the final results. In this scenario, **the system is both deterministic and predictable**.

### Case 2: Growing and Shrinking Uncertainty

However, there are equations for which the initial uncertainty changes over time. Let's examine this mathematical equation:

$$x_{n+1} = k \cdot x_n$$

Although it's unlikely that real-world phenomena can be exactly translated into this equation, it is embedded within several actual equations used to model real-world phenomena. Thus, we can gain valuable insights from this simple recurrence relation.

Listing out the first few terms:

$$
\begin{align*}
x_1 &= k \cdot x_0 \\
x_2 &= k \cdot x_1 = k^2 \cdot x_0 \\
x_3 &= k \cdot x_2 = k^3 \cdot x_0 \\
&\vdots \\
x_n &= k^n \cdot x_0
\end{align*}
$$

Now, let's add an uncertainty of $$\Delta x_0$$ to $$x_0$$ and observe what changes:

$$
\begin{align*}
x_1 &= k(x_0 + \Delta x_0) = k \cdot x_0 + k \cdot \Delta x_0 \\
x_2 &= k \cdot x_1 = k^2 \cdot x_0 + k^2 \cdot \Delta x_0 \\
x_3 &= k \cdot x_2 = k^3 \cdot x_0 + k^3 \cdot \Delta x_0 \\
&\vdots \\
x_n &= k^n \cdot x_0 + k^n \cdot \Delta x_0
\end{align*}
$$

Here, an initial uncertainty of $$\Delta x_0$$ has translated into $$k^n \cdot \Delta x_0$$ after $$n$$ iterations. What happens to the uncertainty is determined by the value of $$k$$:

-   If **$$k > 1$$**: uncertainty grows exponentially
-   If **$$k < -1$$**: uncertainty still grows exponentially, but $$x_n$$ also displays oscillatory behavior
-   If **$$-1 < k < 1$$**: uncertainty shrinks with each iteration

Let's see this in action with a numerical example:

| n  | $$k = 3$$ | $$k = 3$$ (with uncertainty) | $$k = -5$$ | $$k = -5$$ (with uncertainty) | $$k = 0.5$$ | $$k = 0.5$$ (with uncertainty) |
| -- | --------- | ---------------------------- | ---------- | ---------------------------- | ----------- | ---------------------------- |
| 0  | 2         | 2.2                          | 2          | 2.2                          | 2000        | 2200                         |
| 1  | 6         | 6.6                          | -10        | -11                          | 1000        | 1100                         |
| 2  | 18        | 19.8                         | 50         | 55                           | 500         | 550                          |
| 3  | 54        | 59.4                         | -250       | -275                         | 250         | 275                          |
| 4  | 162       | 178.2                        | 1250       | 1375                         | 125         | 137.5                        |
| 5  | 486       | 534.6                        | -6250      | -6875                        | 62.5        | 68.75                        |
| 10 | 118,098   | 129,907.8                    | 19,531,250 | 21,484,375                   | 1.95        | 2.15                         |

## Stable vs. Unstable Equilibrium

This simple equation and similar ones manifest themselves in certain dynamical systems. When **$$k > 1$$** or **$$k < -1$$**, it gives rise to _"unstable equilibrium"_; when **$$-1 < k < 1$$**, it causes _"stable equilibrium"_.

Roughly speaking, an object is in **equilibrium** if it is in a balanced state. A simple pendulum at rest hanging down, or precisely upwards, is in equilibrium; a spring when it is neither compressed nor stretched is in equilibrium.

### An Analogy for Understanding Stability

Let's understand stable and unstable equilibrium with a simple analogy. When I stand straight upright, I am in a state of balance, or equilibrium. If someone pushes me slightly when I am upright, it will not affect my equilibrium much—I have the tendency to return to my equilibrium state even when some force is applied to unbalance me. This is called **stable equilibrium**.

A better example of **unstable equilibrium** is a pen balanced on its pointed tip. Theoretically, there exists an equilibrium position where the pen could remain perfectly upright. However, in practice, you will never observe a pen remaining at rest in this position—even the tiniest disturbance (which always exists due to air currents, vibrations, or measurement uncertainties) will cause it to fall over immediately. Unlike the stable equilibrium, where small perturbations are resisted, unstable equilibrium amplifies even infinitesimal disturbances.

### The Double Pendulum Example

In dynamical systems that exhibit unstable equilibrium, a tiny nudge can be enough to completely halt the state of equilibrium. If we knew precisely the "tiny nudge," there would still be ways to predict the future. However, most of the time, the nudge is so small that it falls within the range of our uncertainty.

For instance, if I could measure a certain force to be 20N with an uncertainty of 0.5N, I would be unable to differentiate any two forces in the range of 19.5N to 20.5N. However, that margin of error could be sufficient to cause large disruptions in unstable systems, and we would never be able to predict the future for such systems well enough.

A real-life example of such phenomenon is a **classic double pendulum**. No matter how hard we try, we will not be able to release two double pendulums in any way such that both trace the same path at all times, even though we know very well the equations that govern the motion of the double pendulum. This is because even if we feel like we have released the two pendulums from the same position, there will surely be a difference in the two positions—small enough for us not to notice—that will eventually snowball into a large difference.

It again boils down to our ignorance of the system's state, even when we are equipped with precise evolution rules. Therefore, **predictability is unfeasible for unstable systems even when the system is completely deterministic** because of our lack of precise knowledge of its initial state.

## The Birth of Chaos Theory

Let's shift our focus to weather forecasting and meteorology. **Edward Lorenz**, an outstanding meteorologist from the 20th century, tried to fit mathematics into meteorology through the use of first-generation computers, a recent invention during his time. Lorenz used deterministic differential equations to model the atmosphere by taking into account the most important factors such as temperature, air pressure, and humidity.

It was going well for him until he encountered what he thought was a computer malfunction, which he later figured out was not a malfunction at all. Instead, Lorenz had plugged in the rounded version of a number (0.506 instead of 0.506127) when he tried to repeat his simulation at a later time. After all, a difference of a thousandth would surely be inconsequential in the calculations, wouldn't it?

To his surprise, the same model and equations displayed completely different results. While others in the past ruled out such erratic behavior as caused by some other faults, **Lorenz realized that the random-looking outcomes were born out of the deterministic equations themselves**.

### The Butterfly Effect

Lorenz then used the word **"chaos"** to refer to such behavior—_sensitive dependence on initial conditions_. Chaos is sometimes used interchangeably with _"the butterfly effect"_ to describe phenomena where slight differences in the initial conditions can lead to large differences in the outcome.

Because the atmosphere is generally unstable, Lorenz ruled out the possibility of being able to successfully predict weather patterns over a long duration—weeks or months from now. **Chaos eliminates the possibility of predicting the state of unstable/chaotic systems arbitrarily far into the future**: no matter how small the error is to start with, it will eventually grow into a large, consequential value.

Henri Poincaré, an esteemed physicist and mathematician, iterated a similar notion in his book _"Science and Method"_ where he also gave examples of other unstable systems to explain how prediction becomes impossible because of our imperfect understanding of initial conditions and the presence of chaos.

## Modern Weather Forecasting

However, the presence of chaos does not mean meteorologists today are doing mere guesswork with their predictions. **Predicting weather patterns a few days in advance is still feasible** with modern science and technology.

### Ensemble Forecasting

To reduce forecast errors, meteorologists employ techniques like **ensemble forecasting**. A set of slightly different initial conditions are fed into the model, and a range or "ensemble" of possible forecasts is produced to account for the uncertainties and the butterfly effect.

The forecasts, which might look similar in the first few days but will eventually deviate from one another, can be interpreted in multiple ways:

1.  **Mean Forecast**: Individual forecasts can be averaged out—this approach works fine when most individual forecasts favor a particular outcome but not when individual forecasts point toward very different possibilities.

2.  **Probabilistic Forecast**: In cases where forecasts diverge significantly, meteorologists might prefer an ensemble forecasting model that computes the probabilities of various forecasts instead of trying to pinpoint an exact outcome.

## Conclusion

**Deterministic systems** are dynamical (time-variant) systems for which we can determine future states using our knowledge of the initial state and the evolution rule of the system. However, because of flaws or incompleteness in the evolution rule and inevitable uncertainties in our initial conditions—which grow into significant errors over time due to the butterfly effect—our ability to predict future states for unstable/chaotic systems is greatly reduced.

Despite such limitations, various techniques can be implemented to make predictions with reasonable accuracy over shorter time frames. Thus, even though perfect predictions arbitrarily far into the future are impossible for certain deterministic systems, it is still possible for us to extend the time frame for which we can predict the future state with reasonable accuracy via improvements in:

-   The precision of our measurements
-   The evolution rule
-   The model in general

The interplay between determinism and unpredictability reveals one of the most fascinating aspects of our universe: that even when we understand the rules perfectly, the complexity of reality can still surprise us.

---

## References

-   Laplace, Pierre-Simon. _A Philosophical Essay on Probabilities_. John Wiley & Son, Chapman & Hall.
-   Lewin, Walter. _For the Love of Physics_. Free Press, 2012.
-   Lorenz, Edward. _The Essence of Chaos_. University of Washington Press, 1995.
-   Nykamp, DQ. "The stability of equilibria for discrete dynamical systems." _Math Insight_. http://mathinsight.org/equilibria_discrete_dynamical_systems_stability
-   Poincaré, Henri. "Chance." In _Science and Method_, 1908.
-   "What is an ensemble forecast?" _Met Office_. https://www.metoffice.gov.uk/research/weather/ensemble-forecasting/what-is-an-ensemble-forecast

---
layout: post
title: "Making Models: The Art of Mathematical Simplification"
date: 2022-09-22 00:00:00-0000
description: "This piece explores what it means to model a natural phenomenon mathematically, the variety of models we use, and what they can still teach us—even when small uncertainties make long-term behavior unpredictable."
subtitle: ""
tags:
  - modeling
  - science
categories:
  - mathematical-modeling
giscus_comments: false
related_posts: true
---

*"For the first time in over 150 years, there is solid evidence that the solar system's planetary census is incomplete."* These are the words from Konstantin Batygin, a Caltech researcher and professor of planetary science, who claimed to have found a ninth planet in our solar system, "Planet Nine" (Drake). The intriguing part, however, is that the so-called Planet Nine has not been observed by astronomers yet. 

How legitimate should such a claim be considered then? Coming from researchers from one of the leading research universities in the world, I do not think the claim is completely baseless and unfounded. Turns out, it was not just a random guess but a conclusion derived from evidence gained from a **mathematical model**.

## What Makes a Model Mathematical?

What is a mathematical model in the first place and how is it useful to us? A **mathematical model** is a systematic framework that uses mathematical language to represent and analyze real-world phenomena—including phenomena that may be impossible for humans to observe directly. Rather than being merely a collection of equations, models serve as bridges between abstract mathematical concepts and tangible reality.

Since mathematics provides a language of rigor and precision, mathematical equations are preferably used to represent real-world phenomena in models. However, all models are not necessarily mathematical; models can also be physical or conceptual. Once a model of a natural phenomenon is devised, it can be used to gain a deeper understanding of the phenomenon, revealing insights which would otherwise be difficult, or even impossible, to observe in the real world.

For example, provided we know sufficiently the laws of physics at the atomic scale, we can model the structures of atoms, molecules and compounds by making some assumptions that help us simplify the real-world complex nature of atoms. In this case, it is not hard to see that the model will not give the exact picture of an atom because some information is inevitably lost after making the simplifying assumptions.

## The Power and Necessity of Assumptions

**Assumptions** are indeed an integral part of any model as long as they can be justified. It is important to realize that a model is only as good as its assumptions and that assumptions often limit the scope of the model. 

Models used to study populations of animal species usually consider the population to grow at a rate proportional to its current size, provided there are no factors that limit the growth—this results in an exponential growth. While some populations might exhibit exponential growth for a short period of time, the population cannot grow that rapidly at all times. Eventually and inevitably, factors such as insufficient food and resources will limit the population growth.

Thus, the model would fail at representing the population growth because of faults in the underlying assumption over a long time period. However, when the species population is small and resources are abundant, the model can be of good use. Here, the underlying assumption greatly reduced the mathematical complexity of the model, while also limiting the scope of its usability.

Even the great Sir Isaac Newton assumed the Earth—and masses in general—to be a **point mass**, i.e. all the mass is confined to a single point at its center when devising his models for gravitation (Yang). As ridiculous as it may seem to assume that a mass of 6 billion trillion metric tons acts at a single point, it does have a valid justification and did the trick for Newton.

Due to this and several other assumptions that Newton made in devising a model for gravitation, his model cannot correctly explain every gravitational phenomenon. Beyond exotic cases like black holes, even more commonplace phenomena such as ocean tides and the precession of Earth's axis require more sophisticated treatment than point-mass approximations can provide. Thus, the scope of his model was diminished, but the model proved extremely useful in the field of cosmology.

It is now clear that upon making the simplifying assumptions, models deviate even further from reality. This begs an important question: should a good model prioritize realism or simplicity?

## Simplicity Over Realism: The Counter-Intuitive Truth

Truth be told, it is not the aim of a mathematical model, in general, to replicate exactly a real-world situation by fitting in as much detail as possible. In a sense, it is rather the opposite—**a good model should be as simple and general as possible**. What are models supposed to do then? They should provide insight, enable prediction within defined bounds, and reveal the essential mechanisms driving a phenomenon. Complicating the model by crowding every little feature about the phenomenon we know of might make the model more realistic, but not necessarily better at achieving these core objectives.

Well, there are certain models that try to make use of every information at their disposal to give a more realistic picture of the real-world phenomenon—we call them **simulations**. However, the utility of simulations differs greatly from that of other models. Simulations are mostly used in cases where we wish to understand the workings of a very particular system. As a result, simulations do not offer much help when it comes to generalizing the result in a broader context.

For example: in order to decide a suitable design for a skyscraper that needs to meet specifications as requested on some island in Abu Dhabi that experiences high heat and wind speeds, simulations are the perfect tool. However, we may not be able to generalize the simulation results from this very particular situation easily to the construction of buildings in general. On the other hand, there can be some fundamental and general ideas relevant to all sorts of construction which can be expressed in the form of models.

## All Models Are Wrong, But Some Are Useful

Statistician George Box famously wrote that *"all models are wrong, but some are useful"* (Box, "Empirical Model-Building and Response Surfaces"). The first part of the quote is no surprise. If we expect a model to be a true representation of the real world, then there is no doubt that most models are wrong in that aspect. But does that make models useless? Well, I'm tempted to believe in George Box when he claims even wrong models can be useful.

After all, how accurate is a flat two-dimensional map of the three-dimensional world? Far from accurate (Mason). How useful is it though? Pretty useful I reckon. A map, although not mathematical, is still a modeling of the real world. However, a natural question arises here: why is every piece of information regarding the system not incorporated in a model?

We have partly answered this in our above discussion of making simplifying assumptions. It is true that formulating clear assumptions makes the equations less messy and more manageable. However, there is something more to it, which becomes clearer when we begin to understand the objectives of devising a model of a natural phenomenon.

## Understanding Through Mathematical Relationships

Firstly, by expressing the workings of a system in a mathematical way through models, the relationship among variables and their particular roles in the system can be understood better. This, in return, provides greater insights about the system that is being modeled. To accomplish this, we only consider the relevant variables in the system.

For instance, to model the motion of a falling object, if we are interested in investigating the relationship between the distance fallen and the time elapsed, we may assume the resistive forces like air friction to be negligible.

The Greek philosopher Aristotle believed that when two objects—one heavier than the other—are dropped from a height, the heavier object falls faster. This belief was held for almost 2000 years until Galileo Galilei discovered that provided no air friction, two objects dropped simultaneously from a height, no matter their masses, reach the ground at the same time. Galileo concluded that the distance fallen was proportional to the square of the time elapsed for any object dropped from a height in the absence of air friction (Lienhard).

Notice that even Galileo's conclusion about the falling bodies does not hold for a coin and feather dropped under normal conditions. However, Galileo clearly prescribed the conditions necessary for his model to provide accurate results in the form of assumptions, something which Aristotle didn't. This illustrates the crucial importance of clearly stating a model's scope and limitations.

## Modeling the Unpredictable: Chaos and Its Insights

So far, we have looked at models for stable systems that allow for making reasonable future predictions. But a large number of real-world systems are **chaotic** in nature, thus posing significant challenges in making future predictions. Why model something that we cannot predict?

Well, even to discover the chaotic nature of systems, it can sometimes be necessary to model it properly first. The factor causing chaos in systems can be found embedded within the mathematical equations most of the time. While a system can have several parameters, only a few might contribute to its instability. Thus, correctly identifying such parameters with the aid of models will tell us which parameters to focus on in order to increase our predictive power despite all limitations.

After all, fine-tuning a parameter whose uncertainty does not even grow with time with sophisticated technology and equipment will not give high returns and can be a waste of time and resources. In recent years, scientists have begun employing machine learning algorithms successfully to stretch the time period for which the prediction of a chaotic system can be made (Wolchover). Therefore, while acknowledging the impossibility of predictions arbitrarily far into the future for chaotic systems, we must not forget that shorter term prediction is still possible and is a growing field in the STEM world.

## Models as Knowledge Generators

Moreover, mathematical models are useful not only as tools to explain a phenomenon or predict its evolution within certain timeframes, but also as **tools for knowledge generation**. In the pursuit of understanding a certain real-world phenomenon, asking the right questions plays an important role: a model can be of great help in this regard as well.

Modeling is not a static process where we follow a sequence of steps and reach an end. Rather, we constantly question ourselves whether or not the model makes sense at each step. If it does not make sense at some point, we may have to revisit the earlier steps and make revisions to the model. When we gain new insights and knowledge from an existing model, several new hypotheses and questions usually arise out of that process.

Even the discrepancies observed between the real-world phenomenon and the model can help generate more knowledge. As Kenneth E. Boulding said in *"Science: A Common Heritage"*, knowledge increases not only by the matching of images with the real world, that is, not by the direct perception of truth, but by the perception of error (Boulding). Thus, when we seek to explain the sources of discrepancies between the model and the real-world, even the unrealistic models—which most models are in fact—contribute to the advancement of knowledge.

## The Broader Impact of Mathematical Modeling

Mathematical models are widely used across numerous fields including engineering, economics, natural sciences, political science, and sociology. They seek to explain why a natural system works the way it does and also make predictions about its future in appropriate cases. Thus, models can be utilized in order to make data-driven strategies in various contexts such as choosing the most cost-effective waste-management strategy for a city, deciding the price of a product so as to maximize revenue, and countless other applications.

Moreover, models are also important tools for advancing our existing knowledge of real-world phenomena since they can propel us to ask the right questions, create and test new hypotheses, as well as investigate the cause of any discrepancy that is observed with respect to the real world.

---

## Conclusion

As useful as models are, it turns out that they are least useful in doing what might be generally expected of them—representing the real-world phenomenon with perfect accuracy. At best, a model is a good approximation to the underlying truth of natural phenomena and should not be mistaken for being the truth itself.

Mathematical models are mathematical representations of real-world phenomena built from our existing scientific knowledge and experimentation. Their true power lies not in their realism, but in their ability to reveal essential relationships, generate insights, and guide our understanding of complex systems. When we embrace their limitations while leveraging their strengths, models become indispensable tools for both understanding our world and shaping our future within it.

---

## Bibliography

Boulding, K.E. "Science: Our Common Heritage." Science 207, no. 4433 (1980): 831-836.

Box, George E.P. "Science and Statistics." Journal of the American Statistical Association 71, no. 356 (1976): 791-799.

Box, George E.P., and Norman R. Draper. *Empirical Model-Building and Response Surfaces*. New York: John Wiley & Sons, 1987.

Drake, Nadia. "Planet 9 may be closer and easier to find than thought—if it exists." *National Geographic*, August 2021. https://www.nationalgeographic.com/science/article/planet-9-may-be-closer-and-easier-to-find-than-thought-if-it-exists.

Lienhard, John H. "Galileo's Experiment." *Engines of Our Ingenuity*. University of Houston. https://www.uh.edu/engines/epi166.htm.

Mason, Betsy. "Why your mental map of the world is (probably) wrong." *National Geographic*, November 2018. https://www.nationalgeographic.com/culture/article/all-over-the-map-mental-mapping-misconceptions.

Wolchover, Natalie. "Machine Learning's 'Amazing' Ability to Predict Chaos." *Quanta Magazine*, April 18, 2018. https://www.quantamagazine.org/machine-learnings-amazing-ability-to-predict-chaos-20180418/.

Yang, Xin-She. *Engineering Mathematics with Examples and Applications*. Cambridge, MA: Academic Press, 2017. 
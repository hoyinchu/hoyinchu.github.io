---
title: "A Loss Function to Incorporate Structural Information Contained In the Output Space"
excerpt: "How can we customize our embedding space by incorporating output class structure?<br/>
<img src='/images/ds4420_project_cover.PNG' style='display:block;margin:auto;'>"
collection: portfolio
---

How can we teach our models to project onto a pre-defined output space? In this paper we introduce centroid loss which allows models to incorporate output
space information in the forms of balls and radii. We demonstrate a use case
of this loss function by assigning a centroid and a radius to each node in an
ontology, projecting the ontology onto 2D space, then trained two models using
the centroid loss. We empirically show the loss function is effective by visualizing
the embedding produced by the models using this loss function. Finally, we
also evaluate the impact different output spaces would have on the accuracy of
the models using this loss. Source code is available at https://github.com/
hoyinchu/CentroidLoss

<p align="center">
    <iframe width="420" height="315" style="display:block;" src="https://www.youtube.com/embed/DqsZ3bxz6Vw">
    </iframe>
</p>

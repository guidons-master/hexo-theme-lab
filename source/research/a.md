---
title: "Nerfies: Deformable Neural Radiance Fields"
image: https://bulma.io/assets/images/placeholders/128x128.png
pub_date: 2021/12/24
publication: ICCV
doi: 10.1109/ICCV.2021.00000
date: 2023-12-24 17:05:34
layout: _post/research
desc: We present the first method capable of photorealistically reconstructing a non-rigidly deforming scene using photos/videos captured casually from mobile phones.
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/academicons/1.9.4/css/academicons.min.css" integrity="sha512-IW0nhlW5MgNydsXJO40En2EoCkTTjZhI3yuODrZIc8cQ4h1XcF53PsqDHa09NqnkXuIe0Oiyyj171BqZFwISBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<section class="hero">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="columns is-centered">
          <div class="column has-text-centered">
            Note: 测试模板来自于 <a href="https://github.com/nerfies/nerfies.github.io">https://github.com/nerfies/nerfies.github.io</a>
            <h1 class="title is-1 publication-title">Nerfies: Deformable Neural Radiance Fields</h1>
            <div class="is-size-5 publication-authors">
              <span class="author-block">
                <a href="https://keunhong.com">Keunhong Park</a><sup>1</sup>,</span>
              <span class="author-block">
                <a href="https://utkarshsinha.com">Utkarsh Sinha</a><sup>2</sup>,</span>
              <span class="author-block">
                <a href="https://jonbarron.info">Jonathan T. Barron</a><sup>2</sup>,
              </span>
              <span class="author-block">
                <a href="http://sofienbouaziz.com">Sofien Bouaziz</a><sup>2</sup>,
              </span>
              <span class="author-block">
                <a href="https://www.danbgoldman.com">Dan B Goldman</a><sup>2</sup>,
              </span>
              <span class="author-block">
                <a href="https://homes.cs.washington.edu/~seitz/">Steven M. Seitz</a><sup>1,2</sup>,
              </span>
              <span class="author-block">
                <a href="http://www.ricardomartinbrualla.com">Ricardo Martin-Brualla</a><sup>2</sup>
              </span>
            </div>
            <div class="is-size-5 publication-authors">
              <span class="author-block"><sup>1</sup>University of Washington,</span>
              <span class="author-block"><sup>2</sup>Google Research</span>
            </div>
            <div class="column has-text-centered">
              <div class="publication-links">
                <!-- PDF Link. -->
                <span class="link-block">
                  <a href="https://arxiv.org/pdf/2011.12948"
                     class="external-link button is-normal is-rounded is-dark">
                    <span class="icon">
                        <i class="fas fa-file-pdf"></i>
                    </span>
                    <span>Paper</span>
                  </a>
                </span>
                <span class="link-block">
                  <a href="https://arxiv.org/abs/2011.12948"
                     class="external-link button is-normal is-rounded is-dark">
                    <span class="icon">
                        <i class="ai ai-arxiv"></i>
                    </span>
                    <span>arXiv</span>
                  </a>
                </span>
                <!-- Video Link. -->
                <span class="link-block">
                  <a href="https://www.youtube.com/watch?v=MrKrnHhk8IA"
                     class="external-link button is-normal is-rounded is-dark">
                    <span class="icon">
                        <i class="fab fa-youtube"></i>
                    </span>
                    <span>Video</span>
                  </a>
                </span>
                <!-- Code Link. -->
                <span class="link-block">
                  <a href="https://github.com/google/nerfies"
                     class="external-link button is-normal is-rounded is-dark">
                    <span class="icon">
                        <i class="fab fa-github"></i>
                    </span>
                    <span>Code</span>
                    </a>
                </span>
                <!-- Dataset Link. -->
                <span class="link-block">
                  <a href="https://github.com/google/nerfies/releases/tag/0.1"
                     class="external-link button is-normal is-rounded is-dark">
                    <span class="icon">
                        <i class="far fa-images"></i>
                    </span>
                    <span>Data</span>
                    </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>  
  <section class="section">
    <div class="container is-max-desktop">
      <!-- Abstract. -->
      <div class="columns is-centered has-text-centered">
        <div class="column is-four-fifths">
          <h2 class="title is-3">Abstract</h2>
          <div class="content has-text-justified">
            <p>
              We present the first method capable of photorealistically reconstructing a non-rigidly
              deforming scene using photos/videos captured casually from mobile phones.
            </p>
            <p>
              Our approach augments neural radiance fields
              (NeRF) by optimizing an
              additional continuous volumetric deformation field that warps each observed point into a
              canonical 5D NeRF.
              We observe that these NeRF-like deformation fields are prone to local minima, and
              propose a coarse-to-fine optimization method for coordinate-based models that allows for
              more robust optimization.
              By adapting principles from geometry processing and physical simulation to NeRF-like
              models, we propose an elastic regularization of the deformation field that further
              improves robustness.
            </p>
            <p>
              We show that <span class="dnerf">Nerfies</span> can turn casually captured selfie
              photos/videos into deformable NeRF
              models that allow for photorealistic renderings of the subject from arbitrary
              viewpoints, which we dub <i>"nerfies"</i>. We evaluate our method by collecting data
              using a
              rig with two mobile phones that take time-synchronized photos, yielding train/validation
              images of the same pose at different viewpoints. We show that our method faithfully
              reconstructs non-rigidly deforming scenes and reproduces unseen views with high
              fidelity.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>  
  
<section class="section" id="BibTeX">
<div class="container is-max-desktop content">
	<h2 class="title">BibTeX</h2>
	<pre><code>@article{park2021nerfies,
author    = {Park, Keunhong and Sinha, Utkarsh and Barron, Jonathan T. and Bouaziz, Sofien and Goldman, Dan B and Seitz, Steven M. and Martin-Brualla, Ricardo},
title     = {Nerfies: Deformable Neural Radiance Fields},
journal   = {ICCV},
year      = {2021},
}</code></pre>
</div>
</section>
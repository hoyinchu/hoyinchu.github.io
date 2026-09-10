---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

This page features full-length papers where I am one of the authors. For conference abstracts see [Abstracts](/abstracts/)

You can also find my papers on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>

{% if site.data.publications.footnote %}<p><sup>#</sup> Denotes equal contributions</p>{% endif %}

<style>
.pub-list { display: flex; flex-direction: column; gap: 16px; margin: 0.75em 0 2.5em; }
.pub-card {
  display: flex; gap: 18px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 16px;
  padding: 18px 20px;
  box-shadow: 0 10px 30px -24px rgba(0, 0, 0, 0.45);
  transition: transform .15s ease, box-shadow .15s ease;
}
.pub-card:hover { transform: translateY(-2px); box-shadow: 0 18px 34px -22px rgba(0, 0, 0, 0.5); }
.pub-card--featured { border-color: #52adc8; box-shadow: 0 0 0 1px #52adc8 inset, 0 10px 30px -24px rgba(0, 0, 0, 0.45); }
.pub-card__thumb {
  flex: 0 0 150px; width: 150px; height: 150px; align-self: flex-start;
  border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 10px;
  overflow: hidden; background: #f4f5f6;
}
.pub-card__thumb img { width: 100%; height: 100%; object-fit: cover; object-position: top left; display: block; }
.pub-card__body { flex: 1 1 auto; min-width: 0; }
.pub-card__title {
  display: inline-block; font-weight: 700; font-size: 1.05rem; line-height: 1.3;
  color: #3a9ab5; margin-bottom: 6px;
}
.pub-card__title:hover { text-decoration: underline; }
.pub-card__authors { font-size: 0.92rem; line-height: 1.55; color: #444; margin-bottom: 6px; }
.pub-card__meta { font-size: 0.8rem; color: #888; letter-spacing: 0.01em; margin-bottom: 10px; }
.pub-card__venue { font-weight: 700; color: #555; }
.pub-card__note { color: #b06f2e; font-weight: 600; }
.pub-card__links { display: flex; flex-wrap: wrap; gap: 8px; }
.pub-card__links a {
  font-size: 0.68rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
  color: #555; background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15); border-radius: 999px;
  padding: 5px 12px;
}
.pub-card__links a:hover { border-color: #52adc8; color: #3a9ab5; }
@media (max-width: 560px) {
  .pub-card { flex-direction: column; gap: 14px; }
  .pub-card__thumb { flex-basis: auto; width: 100%; height: 170px; min-height: 0; }
}
</style>

{% assign pub_months = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec" | split: "," %}
{% for section in site.data.publications.sections %}
<h1 id="{{ section.id }}">{{ section.heading }}</h1>
<div class="pub-list">
{% assign section_entries = site.data.publications.entries | where: "section", section.id %}
{% for pub in section_entries %}
<div class="pub-card{% if pub.featured %} pub-card--featured{% endif %}">
  {% if pub.image %}
  <a class="pub-card__thumb" href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener">
    <img src="{{ pub.image }}" alt="Figure from “{{ pub.title | strip_html }}”" loading="lazy">
  </a>
  {% endif %}
  <div class="pub-card__body">
    <a class="pub-card__title" href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener">{{ pub.title | markdownify | remove: '<p>' | remove: '</p>' | strip }}</a>
    <div class="pub-card__authors">{{ pub.authors | markdownify | remove: '<p>' | remove: '</p>' | strip }}</div>
    <div class="pub-card__meta"><span class="pub-card__venue">{{ pub.venue }}</span>{% if pub.year %} &nbsp;&middot;&nbsp; {% if pub.month %}{% assign pub_mi = pub.month | minus: 1 %}{{ pub_months[pub_mi] }} {% endif %}{{ pub.year }}{% endif %}{% if pub.note %} &nbsp;&middot;&nbsp; <span class="pub-card__note">{{ pub.note }}</span>{% endif %}</div>
    <div class="pub-card__links">
      <a href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener">DOI</a>
      {% for link in pub.links %}
      <a href="{{ link.url }}" target="_blank" rel="noopener">{{ link.text }}</a>
      {% endfor %}
    </div>
  </div>
</div>
{% endfor %}
</div>
{% endfor %}

---
<a href="#top">Back to top</a>
<br/>
Last update: 2026-09-10

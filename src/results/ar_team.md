---
layout: root
tags: results
title: ARアプリ
year: 2022
term: spring
icon: "/image/ar_map_image.jpeg"
cover: "/image/ar_map_image.jpeg"
description: このアプリの要約文です。あまり長くならないように。
repositories: ["https://github.com/kenkenissocool/ARapp"]
students: [202010246, 202010770, 202010017]
---

{% include "results_header.njk" %}

## 参加学生

{% student_by_id students_data, students %}

## 作品紹介

ARの実現にはAR.jsを、地図の取得にはOpenStreetMapを利用、室内の測量にARやNFCを活用する。

### Youtube埋め込み例

以下のように '.youtube' クラスでラップしてiframeタグを埋め込んでください。（はみ出し等防止）

```
<div class="youtube">
  <iframe width="560" height="315" src="xxxx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

<div class="youtube">
<iframe width="560" height="315" src="https://www.youtube.com/embed/c-l7xawEoDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

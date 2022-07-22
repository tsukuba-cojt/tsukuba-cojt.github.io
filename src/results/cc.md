---
layout: root
tags: results
title: 単位計算ツール
year: 2022
term: spring
icon: "/image/results/2022/cc/icon.jpeg"
cover: "/image/results/2022/cc/cover.jpg"
description: 履修した授業の単位を計算します。
repositories:
  [
    "https://github.com/yataro-fujinaga/format-classes",
    "https://github.com/yataro-fujinaga/calculate-credit",
  ]
students: [202010602]
---

{% include "results_header.njk" %}

## 参加学生

{% student_by_id students_data, students %}

## 作品紹介

「単位計算ツール」では履修した授業の単位を計算します。

履修した授業を選択することで単位の計算を行い  
筑波大学の「履修細則」において各学類に定められた「卒業要件」を満たすかを調べることができます。

これまで手計算や表計算ツールを用いて行われていた単位の計算を代替することが可能です。

{% include "related_results.njk" %}

---
layout: root
tags: results
title: ARアプリ
year: 2022
term: spring
icon: "/image/AR_team_logo.png"
cover: "/image/ar_map_image.jpeg"
description: このアプリの要約文です。あまり長くならないように。
repositories: ["https://github.com/kenkenissocool/ARapp"]
students: [202010246, 202010770, 202010017]
---

{% include "results_header.njk" %}

## 参加学生

{% student_by_id students_data, students %}

## 作品紹介

筑波大学構内の案内に特化したARアプリです。

## 使った技術

### 屋外経路探索の実装

GPS：利用者の位置情報を取得。

Open route service：このAPIから目的地と利用者の位置情報が送信。

AR.js / A-frame：経路を画面に表示。

### 屋内経路探索の実装

NFC：スマートフォンと接触させることで、シームレスに屋外モードから屋内モードへの切り替え。

ARマーカー：要所に配置してこれを基準に経路を決定。

AR.js / A-frame：ARマーカー上に経路を示す矢印を表示。

## 利用イメージ

実際に筑波大学構内で地図を利用したときのイメージです。

<div class="youtube">
<iframe width="560" height="315" src="https://www.youtube.com/embed/jSLZzZ-V9ho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## その他

日鉄ソリュージョンズさんのAR/VR系のディスカッション&見学を行いました。

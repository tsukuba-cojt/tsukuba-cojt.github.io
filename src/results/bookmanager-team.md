---
layout: root
tags: results
title: CloudShelf
year: 2022
term: spring
icon: "/image/results/2022/bookmanager/tmp_logo.png"
cover: "/image/results/2022/bookmanager/tmp_cover.jpg"
description: "スマートフォンで閲覧できるオンライン書籍管理ツールです。"
repositories: ["https://github.com/NakamuraYuta-klis/CloudShelf"]
students: [201910702]
---

{% include "results_header.njk" %}

## 参加学生

{% student_by_id students_data, students %}

## 作品紹介

蔵書管理アプリ「CloudShelf」の紹介です。

### 概要

「出先で書店によったけど，シリーズ物の漫画を何巻まで買ったか思い出せない……」「あの作家の〇〇って本は持ってたっけ？」
そんな悩みを解消するための蔵書管理ツールです。

### 特徴

以下のような機能を持っています。

#### ISBNによる書籍情報検索機能

登録作業を簡略化するため，ISBNを入力すると書籍情報を楽天市場APIから取得し，自動的に登録することができるようにしました。

#### ISBNのバーコードからの自動読み取り機能(開発中)

スマートフォンのカメラ機能を使ってISBNを自動でバーコードから読み取ることができます。

#### ユーザー登録機能(開発中)

ユーザーごとに独立した本棚を管理することができ，必要に応じて本棚の内容をシェアすることもできます。

{% include "related_results.njk" %}

---
layout: root
tags: results
title: 音符で音ゲー(仮)
year: 2022
term: spring
icon: "/image/results/2022/musicgame/icon.png"
cover: "/image/results/2022/musicgame/cover.png"
description: 音符を使った音ゲーです
repositories: ["https://github.com/rikutons/COJTRhythmGame"]
students: [202213589, 202213518, 202010392]
---

{% include "results_header.njk" %}

## 参加学生

{% student_by_id students_data, students %}

## 作品紹介

### 概要

読譜練習のための音ゲーです。  
五線譜上に流れる音符に合わせて、タイミングよくスペースキーをタップ！ 楽譜を読むための力を、ゲーム感覚で楽しく身につけることができます。  
プレイヤーははじめに、自分に合った難易度の曲を選択します。曲を選択するとゲームがスタートし、画面に五線譜が表示されます。すると選択した曲が再生され、曲に合わせて右側から音符が流れてきます。音符の種類は、4分音符、8分音符、16分音符などの基本的なものだけ……ではありません。付いた音符の長さが1.5倍になる付点音符や、タイ、アクセントなどの記号が付いた音符も存在します。音符に合わせた適切なタイミングを見極め、フルコンボを目指してプレイしましょう！

### 操作方法

スペースキーで打鍵します。付点音符、スタッカートなどもすべてスペースキーだけで対応します。  
タイは長押しです。タイがついている音符が流れている間はスペースキーを押しっぱなしにします。  
休符は何も押しません。  
アクセントはFとJの同時押しです。

### クレジット

### 使用楽曲

きらきら星  
Chartreuse Green - t+pazolite

### Youtube埋め込み例

WIP  
以下のように '.youtube' クラスでラップしてiframeタグを埋め込んでください。（はみ出し等防止）

```
<div class="youtube">
  <iframe width="560" height="315" src="xxxx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

<div class="youtube">
<iframe width="560" height="315" src="https://www.youtube.com/embed/c-l7xawEoDs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="youtube">
<iframe width="560" height="315" src="https://www.youtube.com/embed/_m7VChuZ9kk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

---
layout: project
type: project
image: /images/Ventura_Product.png
title: "Apple Year 2 — Facial Recognition Necklace"
permalink: projects/Necklace
date: 2023-07-01
order: 3.1
labels:
  - Javascript
  - Swift
  - Python
  - Electrical Design
  - Computer Vision
summary: "An assistive necklace prototype for visually impaired users using facial and object recognition to provide audio/haptic feedback."
---

Invited back in 2024 to mentor and lead a new project, I guided my team in developing a necklace for visually impaired users. This device provides environmental awareness via auditory and haptic feedback, driven by facial and object recognition models.

![Ventura Necklace Product](/images/Ventura_Product.png)

I implemented the recognition models using OpenCV's Haar Cascades and designed a priority-queue architecture to deliver timely, sequential, and duplicate-free information to the user via the ElevenLabs TTS API.

**Highlights:**

* **Full Stack Integration:** Captured and streamed sensor data from embedded hardware to a Flask backend, paired with an iOS frontend for visualization and user interaction.
* **Computer Vision:** Built facial and object recognition pipelines using OpenCV, integrated with a prioritized messaging system to surface the most relevant contextual information.
* **User Experience:** Designed low-latency, duplicate-free notification delivery using a priority queue and ElevenLabs TTS for natural auditory feedback.

---
layout: project
type: project
image: /images/Robot.png
title: "FIRST Robotics — Software Lead"
permalink: projects/FIRST
date: 2025-05-01
labels:
  - Java
  - Kotlin
  - Robotics
  - Localization
summary: "Led the software team for a world-finalist FIRST Robotics team; built a 36,000+ line high-performance control and localization stack enabling top competition performance."
---

Led my FIRST Robotics software team, where I architected and maintained a large, high-performance software stack. This Java/Kotlin codebase, to which I personally contributed over 36,000 lines of code, helped us achieve the highest solo score among over 4,500 teams worldwide.

![FIRST Robot](/images/Robot.png)

**Key Technical Contributions:**

* **Architecture:** Designed a robust control stack for a world-finalist team.
* **Localization:** Developed a real-time localization system by fusing ML vision, odometry, and ultrasonic data with Kalman Filters for precise on-field navigation.
* **Concurrency:** Implemented a motion-profiled Bézier curve follower and managed complex concurrency with Kotlin Coroutines and Finite State Machines (FSMs) for parallelized autonomous execution.
* **Leadership:** Onboarded and trained 12 new student software developers over 3 years, ensuring technical excellence would be sustained long after I graduated.

### Autonomous & Vision Systems

I designed robust autonomous routines with motion profiling and Bézier-based path following. A key component was integrating a TensorFlow vision model into the localization pipeline to detect game pieces and field elements.

![Bezier Pathing Logic](/images/Bezier_Pathing.png)

![Vision Homography](/images/Homography_Transform.png)

*Below: Examples of the ML vision pipeline identifying game elements (AI Samples).*

![AI Detection Samples](/images/AI_Samples.png)
---
layout: project
type: project
image: /images/ARC.png
title: "ARC — Pathfinding & Controls Lead (ROS2)"
permalink: projects/ARC
date: 2026-01-15
labels:
  - C++
  - Python
  - ROS2
  - Pathfinding
  - Optimization
summary: "Mentored a team to design a high-performance ROS2 pathfinding and optimization pipeline using A*, Bézier mappings, and gradient descent."
---

Mentored a team of 8 student developers in C++ and Python to architect a high-performance pathfinding system in ROS2. I led the development of our core optimization pipeline by implementing A* for path generation, mapping trajectories onto Bézier curves, and applying gradient descent to minimize cost under complex kinematic constraints.

![ARC Simulator](/images/ARC.png)

**Key Responsibilities:**
* **Mentorship:** Guided 8 student developers in architecting a ROS2 navigation stack.
* **Optimization:** Led the core optimization pipeline, implementing A* for path generation and mapping discrete outputs to continuous Bézier curves.
* **Kinematics:** Applied gradient descent to minimize trajectory cost while adhering to dynamic limits.

The system emphasizes real-time performance, smooth drivable trajectories, and adherence to dynamic and kinematic limits. Mapping discrete A* outputs to Bézier representations enabled continuous, differentiable trajectories suitable for gradient-based refinement and smooth follower control in downstream motion planners.

### Demonstrations

Below is a visualization of the initial Bézier algorithm and the dynamic optimizer in action.

![Initial Bezier Algorithm](/images/InitialBezierAlgo.png)
 
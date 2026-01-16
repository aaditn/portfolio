---
layout: project
type: project
image: /images/Onewheel_Front.JPG
title: "Onewheel"
permalink: projects/Onewheel
date: 2025-06-01
labels:
  - High Current Electronics
  - Arduino
  - C++
  - Control
summary: "I built a self-balancing hoverboard device capable of outputting 1000W of power and reaching speeds of over 25 MPH."
---

Built and programmed a Onewheel board that travels in the direction of the rider's tilt. It is fitted with two 6-axis IMUs for relative angle detection. I calculated the absolute angle of the surface by regressing an acceleration-vs-angle curve at a constant duty cycle.

![Onewheel Front View](/images/Onewheel_Front.JPG)

To detect if a rider is standing on the pads, I mounted force-sensitive resistors (FSRs) in series with 10kΩ resistors. I read the voltage across the FSRs via an analog input and mapped the value to a boolean trigger based on a specific force threshold.

I initially attempted manual velocity control with a traditional ESC, but this proved unsuccessful because balancing requires rapid switching between positive and negative voltage—something my standard ESC could not handle. I upgraded to a VESC-based system, which allowed me to apply reverse voltage to the motor effectively. Additionally, the VESC ecosystem provided robust libraries that helped accelerate the development of the hardware control loop.

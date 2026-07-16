# Cadence

> A time-management calendar app with an AI feature that studies your productivity cycles and recommends plans curated to optimize time and efficiency.

**Status:** In development

## Motivation

I recall moments when my Type-A personality spends more time planning what to do than actually doing something productive. Cadence solves just this problem: instead of figuring out what to do when sitting at their desk, the user receives an AI recommendation optimized to their preferences, task priority, and personal productivity cycle.

## What Cadence Does

Cadence doesn't just track your calendar — it learns from it. Say a student has a 2-hour study session free in the afternoon. Based on the student's preferences and productivity patterns, the AI suggests tackling creative, low-intensity tasks then, saving thought-provoking work for the morning when their mind is more alert.

The AI customizes plans around:
- Task deadlines
- Estimated duration per task
- User's historical productivity data:
  - How long each task actually took
  - How productive the session was (self-reported or inferred)
  - When the task was completed
  - Recurring events already on the user's calendar

## Tech Stack

- **Frontend:** React
- **Backend:** Python
- **Database:** SQL
- **Hosting:** Azure, deployed as a subpage on my custom domain

## Project Goals

This is a personal learning project. I'm using it to hone:
- UI/UX design
- Backend programming
- Data management / database design
- AI/ML fundamentals (recommendation systems, working with user behavior data)

## Open Design Questions

- **Cold start problem:** how should Cadence generate recommendations before it has enough historical user data to learn from?
- How will productivity be measured — self-reported ratings, inferred from task completion time, or both?